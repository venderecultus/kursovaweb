import { Link, NavLink } from "react-router-dom";
import { useCart } from "./CartContext.jsx";

export default function Header() {
  const { count } = useCart();
  return <header className="site-header">
    <Link className="brand" to="/" aria-label="YARD — на головну">YARD<sup>®</sup></Link>
    <nav className="main-nav" aria-label="Основна навігація">
      <NavLink to="/catalog">ОДЯГ</NavLink><a href="/#story">НАША ІСТОРІЯ</a><NavLink to="/contacts">КОНТАКТИ</NavLink>
    </nav>
    <div className="header-actions"><NavLink to="/catalog">ПОШУК</NavLink><NavLink to="/cart">КОШИК ({count})</NavLink></div>
  </header>;
}
