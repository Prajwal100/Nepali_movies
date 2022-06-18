import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/user/index";
import Create from "./components/user/create";

import { Container, Navbar, Column } from "react-bootstrap";
function App() {
  return (
    <Router>
      <div className="section">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CRUD</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Prajwal R.</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Index />
        </Container>
      </div>
    </Router>
  );
}

export default App;
