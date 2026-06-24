import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { personal } from '../data/data';

const App = () => {
  return (
    <>
      {/*NAVBAR*/}
      <Navbar bg="primary" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {personal.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Início
              </Nav.Link>
              <Nav.Link as={NavLink} to="/curriculo">
                Currículo
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">
                Portfólio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*CONTEÚDO DAS PÁGINAS*/}
      <main>
        <Outlet />
      </main>

      {/*FOOTER*/}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <small>© {"2026"} {personal.name}</small>
      </footer>
    </>
  );
};

export default App;
