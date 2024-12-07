import { Outlet } from "react-router-dom";
// import "./Components/styles/App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div className="appContainer" style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
