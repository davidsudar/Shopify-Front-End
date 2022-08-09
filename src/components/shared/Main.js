import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import FAQ from "../../pages/FAQ";
import Contact from "../../pages/Contact";
import Sizing from "../../pages/Sizing";
import ProductDetail from "../../pages/ProductDetail";

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/sizing" element={<Sizing />}></Route>
    <Route path="/faq" element={<FAQ />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route exact path="/details/:id" element={<ProductDetail/>} />
  </Routes>
);

export default Main;
