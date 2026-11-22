import { Route, Routes } from "react-router-dom";
import Announcement from "../components/Announcement.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Home from "./Home.jsx";
import Catalog from "./Catalog.jsx";
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import Contacts from "./Contacts.jsx";

export default function App() {
  return <><Announcement /><Header /><Routes>
    <Route path="/" element={<Home />} /><Route path="/catalog" element={<Catalog />} />
    <Route path="/product/:id" element={<Product />} /><Route path="/cart" element={<Cart />} />
    <Route path="/contacts" element={<Contacts />} /><Route path="*" element={<Home />} />
  </Routes><Footer /></>;
}
