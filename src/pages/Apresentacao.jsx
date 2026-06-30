import { useState } from 'react';
import {
  Container, Row, Col, Image, Badge, Card,
  Form, Button, Alert,
} from 'react-bootstrap';
import { personal } from '../data/data';

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

      </section>
    </Container>
  );
};

export default Apresentacao;
