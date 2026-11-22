import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ items = products, onAdd }) {
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div>;
}
