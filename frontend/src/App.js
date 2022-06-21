import { Container } from "react-bootstrap";
import Header from "./pages/Header/Header";
import { Routes, Route } from "react-router-dom";
import CelebrityPage from "./pages/CelebrityPage/CelebrityList";
import LandingPage from "./pages/LandingPage/LandingPage";
import CelebrityDetail from "./pages/CelebrityPage/celebrityDetails";
import MovieDetail from "./components/Movies/movieDetails";

import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";

//Loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {
  return (
    <div className="section">
      <Header />
      <Routes>
        {/* LOGIN & REGISTER ROUTES STARTS */}
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>

        {/* LOGIN & REGISTER ROUTES ENDS */}

        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/celebrities" element={<CelebrityPage />}></Route>
        <Route
          exact
          path="/celebrity/:id"
          element={<CelebrityDetail />}
        ></Route>

        <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
