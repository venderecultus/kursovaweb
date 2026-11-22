import { Link } from "react-router-dom";

export default function Footer() {
  return <footer className="site-footer"><Link className="brand" to="/">YARD<sup>®</sup></Link><span>МІСЬКИЙ РОБОЧИЙ ОДЯГ / УКРАЇНА</span><a href="mailto:hello@yard.store">HELLO@YARD.STORE ↗</a></footer>;
}
