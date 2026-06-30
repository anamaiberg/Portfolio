import { useState } from 'react';
import {
  Container, Row, Col, Image, Badge, Card,
  Form, Button, Alert,
} from 'react-bootstrap';
import { personal } from '../data/data';

// Agrupa skills por categoria
const grouped = skills.reduce((acc, s) => {
  acc[s.category] = acc[s.category] ? [...acc[s.category], s] : [s];
  return acc;
}, {});

// ── Formulário de contato ──────────────────────────────────
function ContatoForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
    const body    = encodeURIComponent(`Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {enviado && (
        <Alert variant="success" onClose={() => setEnviado(false)} dismissible>
          Seu cliente de e-mail foi aberto com a mensagem preenchida!
        </Alert>
      )}
      <Row className="mb-3">
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control
          required
          as="textarea"
          name="message"
          rows={5}
          placeholder="Como posso te ajudar?"
          value={form.message}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar mensagem
      </Button>
    </Form>
  );
}

// ── Página principal ───────────────────────────────────────
const Apresentacao = () => {
  return (
    <Container className="py-5">

      {/* ── HERO ──────────────────────────────────────────── */}
      <Row className="align-items-center mb-5 pb-4 border-bottom">
        <Col md={8} className="mb-4 mb-md-0">
          <p className="text-primary fw-semibold mb-1 text-uppercase small letter-spacing">
            Olá, eu sou
          </p>
          <h1 className="display-4 fw-bold">{personal.name}</h1>
          <h2 className="h4 text-muted mb-3">{personal.title}</h2>
          <p className="lead text-secondary">{personal.bio}</p>
          <p className="text-muted small">📍 {personal.location}</p>

          {/* Links sociais */}
          <div className="d-flex gap-2 flex-wrap mt-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark btn-sm"
            >
              🐙 GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              💼 LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn btn-outline-secondary btn-sm"
            >
              ✉️ {personal.email}
            </a>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <Image
            src={personal.avatar}
            alt={personal.name}
            roundedCircle
            fluid
            style={{ maxWidth: '220px', border: '4px solid #0d6efd' }}
            onError={e => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&background=0d6efd&color=fff&size=220`;
            }}
          />
        </Col>
      </Row>

      {/* ── HABILIDADES ───────────────────────────────────── */}
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-4">🛠️ Tecnologias & Habilidades</h2>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="h6 text-muted text-uppercase mb-3">{category}</h3>
            <Row xs={1} sm={2} lg={4} className="g-3">
              {items.map(skill => (
                <Col key={skill.name}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                        <span className="fw-medium">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <small className="text-muted d-block text-end mt-1">
                        {skill.level}%
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </section>

      {/* ── CONTATO ───────────────────────────────────────── */}
      <section>
        <h2 className="h3 fw-bold mb-2">📬 Contato</h2>
        <p className="text-muted mb-4">
          Tem um projeto em mente ou quer bater um papo? Me manda uma mensagem!
        </p>

        {/* Cards de contato rápido */}
        <Row xs={1} sm={3} className="g-3 mb-4">
          <Col>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="fs-2 mb-1">✉️</div>
                <Card.Subtitle className="text-muted small mb-1">E-mail</Card.Subtitle>
                <a href={`mailto:${personal.email}`} className="small text-decoration-none">
                  {personal.email}
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="fs-2 mb-1">🐙</div>
                <Card.Subtitle className="text-muted small mb-1">GitHub</Card.Subtitle>
                <a href={personal.github} target="_blank" rel="noreferrer" className="small text-decoration-none">
                  Ver perfil
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm text-center h-100">
              <Card.Body>
                <div className="fs-2 mb-1">💼</div>
                <Card.Subtitle className="text-muted small mb-1">LinkedIn</Card.Subtitle>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="small text-decoration-none">
                  Ver perfil
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Formulário */}
        <Card className="shadow-sm">
          <Card.Body className="p-4">
            <Card.Title className="mb-4">Enviar mensagem</Card.Title>
            <ContatoForm />
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
};

export default Apresentacao;
