import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Footer from './Components/footer';
import Error404 from "./Components/Error404";
import Home from "./Components/Home";
import Contactenos from "./Components/Contactenos";

function App() {
  return (
    <div className="container-fuid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/Home"} element={<Home/>} />
          <Route path={"/Contactenos"} element={<Contactenos/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;