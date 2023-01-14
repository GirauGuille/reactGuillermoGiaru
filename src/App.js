import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import Contactenos from "./components/Contactenos";
import Home from "./components/Home";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Finish from "./components/Finish";

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/finish/:id"} element={<Finish />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/Home"} element={<Home/>} />
            <Route path={"/Contactenos"} element={<Contactenos/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
