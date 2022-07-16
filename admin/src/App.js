import "react-toastify/dist/ReactToastify.css";
import Toast from "./components/LoadingError/Toast";
import { useRoutes, useLocation } from "react-router-dom";
import { getRoutes } from "./routes";
function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const routing = useRoutes(getRoutes(pathname));
  return (
    <>
      <Toast />
      {routing}
    </>
  );
}

export default App;
