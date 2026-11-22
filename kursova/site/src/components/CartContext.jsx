import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("yard-cart") || "[]");
      return Array.isArray(stored) ? stored.filter((item) => item && typeof item.id === "string" && typeof item.size === "string" && Number.isInteger(item.quantity) && item.quantity > 0) : [];
    } catch { return []; }
  });
  const save = (next) => { setItems(next); try { localStorage.setItem("yard-cart", JSON.stringify(next)); } catch { /* Cart remains usable when storage is unavailable. */ } };
  const add = (product, size = "M") => {
    const match = items.find((item) => item.id === product.id && item.size === size);
    save(match ? items.map((item) => item === match ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { id: product.id, size, quantity: 1 }]);
  };
  const remove = (id, size) => save(items.filter((item) => !(item.id === id && item.size === size)));
  const setQuantity = (id, size, quantity) => save(items.map((item) => item.id === id && item.size === size ? { ...item, quantity: Math.max(1, quantity) } : item));
  const value = useMemo(() => ({ items, add, remove, setQuantity, count: items.reduce((sum, item) => sum + item.quantity, 0) }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
