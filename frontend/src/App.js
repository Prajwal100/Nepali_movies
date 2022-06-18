import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./pages/Header/Header";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage/Users";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <div className="section">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/users" element={<UsersPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
