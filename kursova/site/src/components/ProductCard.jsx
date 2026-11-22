import { Link } from "react-router-dom";
import { money } from "../data/products.js";

export default function ProductCard({ product, onAdd }) {
  return <article className="product-card">
    <Link className="product-media" to={`/product/${product.id}`} style={{ "--garment": product.color }}>
      <img src={product.image} alt={product.alt} loading="lazy" />
      {product.label && <span className="product-badge">{product.label}</span>}
    </Link>
    <div className="product-meta"><span>{product.category}</span><button type="button" onClick={() => onAdd(product)} aria-label={`Додати ${product.name} до кошика`}>ДОДАТИ +</button></div>
    <Link className="product-name" to={`/product/${product.id}`}>{product.name}</Link>
    <div className="product-price">{money(product.price)}{product.previousPrice && <del>{money(product.previousPrice)}</del>}</div>
  </article>;
}
