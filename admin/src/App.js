import { Toaster } from "react-hot-toast";

import Routes from "./components/index";
function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <Routes />
    </>
  );
}

export default App;
