import { Link } from "react-router-dom";
import { Fragment } from "react";

const categories = ["ВЕРХНІЙ\nОДЯГ", "ФУТБОЛКИ\nТА СВІТШОТИ", "АКСЕСУАРИ\nНА ЩОДЕНЬ"];
export default function CategoryStrip() {
  return <nav className="category-strip" aria-label="Категорії одягу">{categories.map((label) => <Link to="/catalog" key={label}><strong>{label.split("\n").map((line) => <Fragment key={line}>{line}<br /></Fragment>)}</strong><i aria-hidden="true">↗</i></Link>)}</nav>;
}
