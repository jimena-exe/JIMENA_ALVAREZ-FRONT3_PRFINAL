import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ContextProvider } from "./Components/utils/global.context";
import Layout from "./Layouts/Layout";
import Detail from "./Routes/Detail";

function App(){
  return(
    <>
      <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="favs" element={<Favs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dentist/:id" element={<Detail />} />
            </Route>
          </Routes>
      </ContextProvider>
    </>
  )

}
export default App;