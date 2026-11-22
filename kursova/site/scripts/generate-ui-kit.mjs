import fs from 'node:fs';
import path from 'node:path';

const root = decodeURIComponent(new URL('../ui-kit/', import.meta.url).pathname).replace(/^\/(\w:)/, '$1');
const families = {
  button: ['Кнопка', { default: 'Звичайний стан', hover: 'Hover', focus: 'Клавіатурний focus', disabled: 'Недоступна' }],
  'text-field': ['Текстове поле', { empty: 'Порожнє', filled: 'Заповнене', focus: 'Focus', error: 'Помилка', disabled: 'Недоступне' }],
  checkbox: ['Прапорець', { unchecked: 'Не вибрано', checked: 'Вибрано', disabled: 'Недоступний' }],
  chip: ['Фільтр-чип', { default: 'Звичайний', selected: 'Вибраний', disabled: 'Недоступний' }],
  'size-option': ['Розмір', { default: 'Звичайний', selected: 'Вибраний', unavailable: 'Недоступний' }],
  navigation: ['Посилання навігації', { default: 'Звичайне', hover: 'Hover', focus: 'Focus' }],
  price: ['Ціна', { default: 'Звичайна ціна', sale: 'Ціна зі знижкою' }],
  badge: ['Бейдж товару', { new: 'Новинка', sold: 'Немає в наявності' }],
  'stock-status': ['Наявність товару', { available: 'Є в наявності', low: 'Залишилось мало', unavailable: 'Немає в наявності' }],
  swatch: ['Зразок кольору', { default: 'Звичайний', selected: 'Вибраний', unavailable: 'Недоступний' }],
  'product-card': ['Картка товару', { default: 'Звичайна картка' }],
  cart: ['Елемент кошика', { quantity: 'Лічильник кількості', remove: 'Видалення', total: 'Сума до сплати' }],
  foundations: ['Основи дизайну', { palette: 'Кольорова палітра', type: 'Типографіка', spacing: 'Сітка та відступи' }],
};
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const page = (title, css, body, className = 'specimen') => `<!doctype html><html lang="uk"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} — YARD UI</title><link rel="stylesheet" href="${css}"></head><body class="${className}">${body}</body></html>`;
fs.writeFileSync(path.join(root, 'families.json'), JSON.stringify(families, null, 2));

for (const [slug, [name, states]] of Object.entries(families)) {
  const directory = path.join(root, slug);
  fs.mkdirSync(directory, { recursive: true });
  const entries = Object.entries(states);
  const links = entries.map(([state, label]) => `<a href="${state}.html">${escape(label)}</a>`).join('');
  const index = `<main><p>YARD® / UI KIT</p><h1>${escape(name)}</h1><nav class="states">${links}</nav><a class="back" href="../index.html">← До каталогу</a></main>`;
  fs.writeFileSync(path.join(directory, 'index.html'), page(name, '../ui-kit.css', index, 'family-page'));
  for (const [state, label] of entries) {
    let component;
    if (slug === 'button') component = `<button class="sample-button ${state === 'focus' ? 'focus' : state === 'hover' ? 'accent' : ''}" ${state === 'disabled' ? 'disabled' : ''}>Додати до кошика</button>`;
    else if (slug === 'text-field') component = `<label class="field">Електронна пошта<input type="email" placeholder="name@example.com" ${state === 'filled' ? 'value="hello@yard.store"' : ''} ${state === 'disabled' ? 'disabled' : ''} ${state === 'error' ? 'aria-invalid="true"' : ''}/>${state === 'error' ? '<small>Перевірте формат адреси електронної пошти.</small>' : ''}</label>`;
    else if (slug === 'checkbox') component = `<label class="check"><input type="checkbox" ${state === 'checked' ? 'checked' : ''} ${state === 'disabled' ? 'disabled' : ''}/>Повідомити про нову колекцію</label>`;
    else if (slug === 'chip') component = `<button class="chip ${state === 'selected' ? 'selected' : ''}" ${state === 'disabled' ? 'disabled' : ''}>Куртки</button>`;
    else if (slug === 'size-option') component = `<button class="size ${state === 'selected' ? 'selected' : ''}" ${state === 'unavailable' ? 'disabled' : ''}>M</button>`;
    else if (slug === 'navigation') component = `<a class="nav-link ${state === 'hover' ? 'selected' : state === 'focus' ? 'focus' : ''}" href="#catalog">ОДЯГ</a>`;
    else if (slug === 'price') component = state === 'sale' ? '<p class="price"><del>₴ 3 900</del> ₴ 3 450</p>' : '<p class="price">₴ 3 450</p>';
    else if (slug === 'badge') component = `<span class="badge">${state === 'new' ? 'НОВИНКА' : 'НЕМАЄ В НАЯВНОСТІ'}</span>`;
    else if (slug === 'stock-status') component = `<p class="stock">${escape(label)}</p>`;
    else if (slug === 'swatch') component = `<button class="swatch ${state === 'selected' ? 'selected' : ''}" aria-label="Оливковий колір" ${state === 'unavailable' ? 'disabled' : ''}></button>`;
    else if (slug === 'product-card') component = '<article class="product-card"><img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=560&q=80" alt="Робоча куртка на вішаку"><p>Canvas work jacket</p><span>₴ 3 450</span></article>';
    else if (slug === 'cart') component = state === 'quantity' ? '<div class="quantity"><button aria-label="Зменшити кількість">−</button><output>1</output><button aria-label="Збільшити кількість">+</button></div>' : state === 'remove' ? '<button class="sample-button">Видалити з кошика ×</button>' : '<p class="cart-total">До сплати <strong>₴ 4 600</strong></p>';
    else if (state === 'palette') component = '<div style="display:flex;gap:10px;flex-wrap:wrap"><span class="swatch" style="background:#f4f1e8;border:1px solid #aaa"></span><span class="swatch" style="background:#24251f"></span><span class="swatch" style="background:#626d42"></span><span class="swatch" style="background:#d8eb62"></span><span class="swatch" style="background:#c45c3c"></span></div>';
    else if (state === 'type') component = '<div><h1 style="font-size:54px;letter-spacing:-.08em">YARD Aa</h1><p style="font-size:17px">Manrope · 17 px · комфортний текст</p></div>';
    else component = '<div style="width:min(100%,440px)"><div style="padding:16px;background:#fffdf7">16 px внутрішній відступ</div><div style="height:24px"></div><div style="padding:24px;background:#d8eb62">24 px інтервал</div></div>';
    fs.writeFileSync(path.join(directory, `${state}.html`), page(`${name}: ${label}`, '../ui-kit.css', `<main>${component}</main>`));
  }
}
const rows = Object.entries(families).filter(([slug]) => slug !== 'foundations').map(([slug, [name, states]]) => `<a href="${slug}/index.html">${escape(name)}<span>${Object.values(states).map(escape).join(' · ')}</span></a>`).join('');
const indexPath = path.join(root, 'index.html');
fs.writeFileSync(indexPath, fs.readFileSync(indexPath, 'utf8').replace('{FAMILIES}', rows));
