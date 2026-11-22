import { useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid.jsx";
import { products } from "../data/products.js";
import { useCart } from "../components/CartContext.jsx";

export default function Catalog() {
  const [category, setCategory] = useState("УСІ РЕЧІ");
  const { add } = useCart();
  const shown = useMemo(() => category === "УСІ РЕЧІ" ? products : products.filter((item) => category === "КУРТКИ" ? item.category === "КУРТКИ" : item.category === "БАЗОВИЙ ШАР"), [category]);
  return <main className="catalog-page"><div className="catalog-heading"><div><span className="eyebrow">YARD® / КОЛЕКЦІЯ 01</span><h1>УСІ РЕЧІ.</h1></div><span>{shown.length} ПОЗИЦІЇ</span></div><nav className="filters" aria-label="Фільтр категорії">{["УСІ РЕЧІ", "КУРТКИ", "БАЗОВИЙ ШАР"].map((item) => <button className={category === item ? "filter is-active" : "filter"} key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</nav><ProductGrid items={shown} onAdd={add} /></main>;
}
