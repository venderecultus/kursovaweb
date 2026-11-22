export const products = [
  { id: "canvas", name: "Canvas work jacket", category: "КУРТКИ", price: 3450, previousPrice: 3900, label: "БЕСТСЕЛЕР", color: "#987351", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=85", alt: "Робоча куртка на вішаку" },
  { id: "field", name: "Field jacket 02", category: "КУРТКИ", price: 4200, label: "НОВИНКА", color: "#292924", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85", alt: "Темна куртка з міцної тканини" },
  { id: "daily", name: "Daily cotton tee", category: "БАЗОВИЙ ШАР", price: 1150, color: "#d4d0c7", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", alt: "Світла базова бавовняна футболка" },
  { id: "utility", name: "Utility overshirt", category: "КУРТКИ", price: 2680, label: "ЗАЛИШИЛОСЬ МАЛО", color: "#242925", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85", alt: "Темна сорочка в робочому стилі" },
];

export const money = (amount) => `₴ ${amount.toLocaleString("uk-UA")}`;
