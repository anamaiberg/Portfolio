import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { personal, experiences, education, certifications } from '../data/data';

// ── Item de timeline ───────────────────────────────────────
function TimelineItem({ title, subtitle, period, description, bullets }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex flex-wrap justify-content-between align-items-start mb-1">
            <div>
              <Card.Title className="mb-0 h6 fw-semibold">{title}</Card.Title>
              <Card.Subtitle className="text-primary small">{subtitle}</Card.Subtitle>
            </div>
            <Badge bg="secondary" className="mt-1">{period}</Badge>
          </div>
          {description && (
            <p className="text-muted small mt-2 mb-0">{description}</p>
          )}
          {bullets && bullets.length > 0 && (
            <ul className="mt-2 mb-0 small text-muted ps-3">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

// ── Página currículo ───────────────────────────────────────
const Curriculo = () => {
  return (
    <Container className="py-5">

      {/* Cabeçalho */}
      <Row className="align-items-end mb-5">
        <Col>
          <p className="text-primary small text-uppercase fw-semibold mb-1">Trajetória</p>
          <h1 className="display-5 fw-bold">Currículo</h1>
          <p className="text-muted">{personal.name} · {personal.title}</p>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-primary"
            href={personal.curriculoPdf}
            download
          >
            ⬇️ Baixar PDF
          </Button>
        </Col>
      </Row>

      {/* ── EXPERIÊNCIA PROFISSIONAL ─────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-4">💼 Experiência Profissional</h2>
        {experiences.length > 0 ? (
          experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              bullets={exp.bullets}
            />
          ))
        ) : (
          <Card className="text-center py-5 text-muted border-dashed">
            <Card.Body>
              <p className="mb-1">💼 Nenhuma experiência cadastrada</p>
              <small>Adicione em <code>src/data/data.js</code></small>
            </Card.Body>
          </Card>
        )}
      </section>

      {/* ── FORMAÇÃO ACADÊMICA ───────────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-4">🎓 Formação Acadêmica</h2>
        {education.map((edu, i) => (
          <TimelineItem
            key={i}
            title={edu.degree}
            subtitle={edu.institution}
            period={edu.period}
            description={edu.description}
          />
        ))}
      </section>

      {/* ── CURSOS & CERTIFICAÇÕES ───────────────────────── */}
      <section>
        <h2 className="h4 fw-bold mb-4">🏆 Cursos & Certificações</h2>
        <Row xs={1} sm={2} lg={3} className="g-3">
          {certifications.map((cert, i) => (
            <Col key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: 42, height: 42, flexShrink: 0,
                      background: '#e7f1ff', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}
                  >
                    🏅
                  </div>
                  <div>
                    <p className="mb-0 fw-medium small">{cert.name}</p>
                    <small className="text-muted">{cert.issuer} · {cert.year}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Curriculo;
