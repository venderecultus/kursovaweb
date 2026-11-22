import { Link } from "react-router-dom";
import CategoryStrip from "../components/CategoryStrip.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { useCart } from "../components/CartContext.jsx";

export default function Home() {
  const { add } = useCart();
  return <main>
    <section className="hero"><img src="/images/yard-hero.jpg" alt="Міський стрітстайл у робочому одязі" /><div className="hero-copy"><span className="hero-eyebrow">YARD®</span><h1>РЕЧІ ДЛЯ<br />ДОВГОГО<br />ШЛЯХУ</h1><p>Робоча естетика. Міський ритм. Одяг, який стає частиною твоєї історії.</p><Link className="button button-accent" to="/catalog">До колекції <span>↘</span></Link></div></section>
    <CategoryStrip />
    <section className="home-products" id="story"><div className="section-heading"><h2>ЗНАЙОМСТВО<br />З YARD.</h2><Link to="/catalog">УСІ ТОВАРИ ↗</Link></div><ProductGrid onAdd={add} /></section>
    <section className="closing-banner"><span>YARD® / УКРАЇНА</span><p>МЕНШЕ ШУМУ.<br /><strong>БІЛЬШЕ СПРАВ.</strong></p><Link to="/catalog">ЗНАЙДИ СВОЮ РІЧ ↗</Link></section>
  </main>;
}
