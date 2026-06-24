import { useState } from 'react';
import {
  Container, Row, Col, Card, Badge,
  Button, Pagination,
} from 'react-bootstrap';
import { projects } from '../data/data';

const PER_PAGE = 6;

// ── Card de projeto com lazy-load ──────────────────────────
function ProjectCard({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card className="h-100 shadow-sm overflow-hidden">
      {/* Imagem com lazy-load */}
      <div
        style={{
          height: 180, background: '#e9ecef',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {!loaded && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando…</span>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="project-img"
          style={{ display: loaded ? 'block' : 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6 fw-semibold">{project.title}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {project.description}
        </Card.Text>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {project.tags.map(tag => (
            <Badge key={tag} bg="light" text="dark" className="border">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="d-flex gap-2 flex-wrap">
          {project.repo && (
            <Button
              variant="outline-dark"
              size="sm"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              🐙 Código
            </Button>
          )}
          {project.live && (
            <Button
              variant="primary"
              size="sm"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              🌐 Demo
            </Button>
          )}
          {project.pdf && (
            <Button
              variant="outline-secondary"
              size="sm"
              href={project.pdf}
              target="_blank"
              rel="noreferrer"
            >
              📄 PDF
            </Button>
          )}
          {!project.repo && !project.live && !project.pdf && (
            <span className="text-muted small fst-italic">Em desenvolvimento</span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

// ── Página portfólio ───────────────────────────────────────
const Portfolio = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const paginated  = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function goTo(p) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Container className="py-5">

      {/* Cabeçalho */}
      <div className="mb-5">
        <p className="text-primary small text-uppercase fw-semibold mb-1">O que eu construí</p>
        <h1 className="display-5 fw-bold">Portfólio</h1>
        <p className="text-muted">
          {projects.length} projetos · página {page} de {totalPages}
        </p>
      </div>

      {/* Grid de projetos */}
      {projects.length === 0 ? (
        <Card className="text-center py-5 text-muted">
          <Card.Body>
            <p className="mb-1">Nenhum projeto cadastrado ainda.</p>
            <small>Adicione em <code>src/data/data.js</code></small>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Row xs={1} sm={2} lg={3} className="g-4 mb-5">
            {paginated.map(project => (
              <Col key={project.id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>

          {/* Paginação Bootstrap */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev
                  disabled={page === 1}
                  onClick={() => goTo(page - 1)}
                />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <Pagination.Item
                    key={p}
                    active={p === page}
                    onClick={() => goTo(p)}
                  >
                    {p}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={page === totalPages}
                  onClick={() => goTo(page + 1)}
                />
              </Pagination>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Portfolio;
