import { Container } from "react-bootstrap";
import Header from "./pages/Header/Header";
import { Routes, Route } from "react-router-dom";
import CelebrityPage from "./pages/CelebrityPage/CelebrityList";
import LandingPage from "./pages/LandingPage/LandingPage";
import CelebrityDetail from "./pages/CelebrityPage/celebrityDetails";

//Loader spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {
  return (
    <div className="section">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/celebrities" element={<CelebrityPage />}></Route>
        <Route
          exact
          path="/celebrity/:id"
          element={<CelebrityDetail />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
