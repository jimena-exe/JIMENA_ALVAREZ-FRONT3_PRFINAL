import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./Components/styles/App.css";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`appContainer ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
