import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, money } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";
import { useCart } from "../components/CartContext.jsx";

export default function Product() {
  const { id = "canvas" } = useParams();
  const product = products.find((item) => item.id === id) || products[0];
  const { add } = useCart();
  const [size, setSize] = useState("M");
  return <main className="product-page"><nav className="breadcrumbs" aria-label="Навігаційний шлях"><Link to="/">ГОЛОВНА</Link><span>/</span><Link to="/catalog">ОДЯГ</Link><span>/</span><span aria-current="page">{product.name.toUpperCase()}</span></nav><section className="product-detail"><div className="product-gallery"><img className="product-main-image" src={product.id === "canvas" ? "/images/canvas-jacket.png" : product.image} alt={product.alt} /><div className="product-thumbnails">{[product, ...products.filter((item) => item.id !== product.id)].map((item) => <img key={item.id} src={item.id === "canvas" ? "/images/canvas-jacket.png" : item.image} alt={item.alt} loading="lazy" />)}</div></div><div className="product-info"><span className="eyebrow">YARD® / {product.category}</span><h1>{product.name}</h1><p className="detail-price">{money(product.price)} {product.previousPrice && <del>{money(product.previousPrice)}</del>}</p><p className="detail-description">Щільна бавовняна річ для міського ритму. Продуманий крій, місткі кишені та тканина, що красиво старіє разом із тобою.</p><fieldset className="size-picker"><legend>РОЗМІР</legend><div>{["XS", "S", "M", "L", "XL"].map((option) => <label key={option}><input type="radio" name="size" value={option} checked={size === option} onChange={() => setSize(option)} /><span>{option}</span></label>)}</div><Link to="/contacts">Таблиця розмірів ↗</Link></fieldset><button className="button button-dark add-button" onClick={() => add(product, size)}>Додати до кошика <span>{money(product.price)}</span></button><p className="stock-note">Є в наявності · відправимо завтра</p><div className="delivery-notes"><p>↗ Безкоштовна доставка<br />від ₴ 3 000</p><p>↻ Обмін і повернення<br />протягом 14 днів</p></div></div></section><section className="recommendations"><div className="section-heading"><h2>ТАКОЖ ОБИРАЮТЬ.</h2><Link to="/catalog">УСІ ТОВАРИ ↗</Link></div><ProductGrid items={products.filter((item) => item.id !== product.id)} onAdd={add} /></section></main>;
}
