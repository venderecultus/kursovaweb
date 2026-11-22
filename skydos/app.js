const Kyiv = [50.442, 30.516];
const offers = [
  { point: [50.4415, 30.5125], discount: '−50%', name: 'Помідори чері · Сільпо' },
  { point: [50.4441, 30.5214], discount: '−35%', name: 'Молоко · АТБ' },
  { point: [50.4392, 30.5198], discount: '−40%', name: 'Яблука · NOVUS' },
  { point: [50.4457, 30.5102], discount: '−30%', name: 'Куряче філе · ФОРА' },
  { point: [50.4433, 30.5087], discount: '−25%', name: 'Сир · АШАН' },
];
const toast = document.querySelector('#toast');
let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}

const map = L.map('map', { zoomControl: false, scrollWheelZoom: false, dragging: true, tap: true }).setView(Kyiv, 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>',
}).addTo(map);
L.control.zoom({ position: 'topright' }).addTo(map);

const pinIcon = (discount) => L.divIcon({
  className: 'offer-marker-wrap',
  html: `<span class="offer-marker">${discount}</span>`,
  iconSize: [54, 34],
  iconAnchor: [27, 17],
});

offers.forEach((offer) => L.marker(offer.point, { icon: pinIcon(offer.discount), alt: offer.name })
  .addTo(map).bindPopup(`<strong>${offer.name}</strong><br>${offer.discount} знижки`));

document.querySelector('#locateButton').addEventListener('click', () => {
  if (!navigator.geolocation) return notify('Геолокація недоступна. Показуємо центр Києва.');
  notify('Шукаємо ваше місце…');
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const point = [coords.latitude, coords.longitude];
    map.flyTo(point, 16, { duration: 0.7 });
    L.circleMarker(point, { radius: 8, color: '#fff', weight: 3, fillColor: '#c9ff22', fillOpacity: 1 }).addTo(map);
    document.querySelector('#mapStatus').textContent = 'Ви тут';
    notify('Мапу наближено до вашого місця');
  }, () => notify('Не вдалося визначити місце. Перевірте дозвіл браузера.'), { enableHighAccuracy: true, timeout: 9000 });
});
document.querySelector('.location').addEventListener('click', () => document.querySelector('#locateButton').click());
document.querySelector('#cityButton').addEventListener('click', () => notify('Зараз доступний Київ. Інші міста скоро з’являться.'));

document.querySelectorAll('[data-category]').forEach((button) => button.addEventListener('click', () => {
  const category = button.dataset.category;
  document.querySelectorAll('[data-category]').forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  const supermarkets = category === 'supermarkets';
  document.querySelector('#offersHeading').textContent = supermarkets ? 'Знижки поруч' : 'Заклади Києва';
  document.querySelector('#mapStatus').textContent = supermarkets ? 'Пропозиції супермаркетів' : 'Заклади Києва';
  document.querySelector('.offer-list').hidden = !supermarkets;
  document.querySelector('#establishmentList').hidden = supermarkets;
  document.querySelector('#sortButton').hidden = !supermarkets;
  if (supermarkets) document.querySelector('#offersSubheading').textContent = 'Оновлено 2 хв тому';
  else document.querySelector('#offersSubheading').textContent = 'Кафе, ресторани та пекарні поруч';
}));

document.querySelectorAll('.grab').forEach((button) => button.addEventListener('click', () => {
  const card = button.closest('.offer-card');
  addToCart({
    id: card.dataset.id || button.dataset.offer,
    name: card.querySelector('h2').textContent,
    store: card.querySelector('.store-line > span').textContent,
    price: Number(card.querySelector('.price-line strong').textContent.trim()),
    oldPrice: Number(card.querySelector('.old-price').textContent.replace(/[^\d]/g, '')),
    image: [...card.querySelector('.food').classList].find((name) => name.startsWith('photo-') || name.startsWith('venue-')) || 'venue-croissants',
  });
  button.textContent = 'У кошику';
  button.classList.add('grabbed');
}));

const cart = new Map([
  ['silpo-tomatoes', { id: 'silpo-tomatoes', name: 'Помідори чері, 500 г', store: 'Сільпо', price: 60, oldPrice: 120, image: 'photo-tomatoes', quantity: 1 }],
  ['venue-croissant', { id: 'venue-croissant', name: 'Круасан із шоколадом', store: 'Львівські круасани', price: 78, oldPrice: 120, image: 'venue-croissants', quantity: 2 }],
  ['novus-apples', { id: 'novus-apples', name: 'Яблука Гала, 1 кг', store: 'NOVUS', price: 45, oldPrice: 75, image: 'photo-apples', quantity: 1 }],
]);

function addToCart(item) {
  const existing = cart.get(item.id);
  cart.set(item.id, existing ? { ...existing, quantity: existing.quantity + 1 } : { ...item, quantity: 1 });
  renderCart();
  notify(`${item.name} додано до кошика`);
}

function renderCart() {
  const list = document.querySelector('#cartList');
  const items = [...cart.values()];
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = items.reduce((sum, item) => sum + (item.oldPrice - item.price) * item.quantity, 0);
  const count = document.querySelector('#cartCount');
  count.textContent = quantity || '';
  count.setAttribute('aria-label', `${quantity} товарів`);
  document.querySelector('#cartSubtitle').textContent = quantity ? `${quantity} товари · заберіть сьогодні` : 'Тут з’являться ваші обрані пропозиції';
  list.innerHTML = items.length ? items.map((item) => `
    <article class="cart-item">
      <div class="cart-thumb ${item.image}" role="img" aria-label="${item.name}"></div>
      <div class="cart-item-info"><span class="cart-item-store">${item.store}</span><h2>${item.name}</h2>
        <div class="cart-item-bottom"><span class="cart-item-price">${item.price * item.quantity} грн <del>${item.oldPrice * item.quantity}</del></span>
          <div class="quantity-control" aria-label="Кількість ${item.name}"><button type="button" data-quantity="-1" data-id="${item.id}" aria-label="Зменшити кількість">−</button><output>${item.quantity}</output><button type="button" data-quantity="1" data-id="${item.id}" aria-label="Збільшити кількість">+</button></div>
        </div>
      </div>
    </article>`).join('') : '<div class="cart-empty"><strong>Кошик поки порожній</strong><p>Перегляньте пропозиції поруч і додайте те, що сподобалося.</p></div>';
  document.querySelector('#cartSummary').hidden = !items.length;
  document.querySelector('#cartSubtotal').textContent = `${total + savings} грн`;
  document.querySelector('#cartSavings').textContent = `−${savings} грн`;
  document.querySelector('#cartTotal').textContent = `${total} грн`;
}

document.querySelector('#cartList').addEventListener('click', (event) => {
  const button = event.target.closest('[data-quantity]');
  if (!button) return;
  const item = cart.get(button.dataset.id);
  item.quantity += Number(button.dataset.quantity);
  if (item.quantity <= 0) cart.delete(item.id);
  renderCart();
});

renderCart();

document.querySelector('#sortButton').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const byDiscount = button.dataset.sort !== 'discount';
  button.dataset.sort = byDiscount ? 'discount' : 'distance';
  button.innerHTML = `${byDiscount ? 'За знижкою' : 'За відстанню'} <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 6 4.5 4 4.5-4"/></svg>`;
  const list = document.querySelector('.offer-list');
  [...list.children]
    .sort((a, b) => Number(a.dataset[byDiscount ? 'discount' : 'distance']) - Number(b.dataset[byDiscount ? 'discount' : 'distance']) * (byDiscount ? -1 : 1))
    .forEach((card) => list.append(card));
  notify(byDiscount ? 'Спочатку найбільші знижки' : 'Спочатку найближчі пропозиції');
});

document.querySelectorAll('.nav-item[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = link.getAttribute('href');
  if (target === '#cart') {
    event.preventDefault();
    const showCart = document.querySelector('#cartPage').hidden;
    document.querySelector('#cartPage').hidden = !showCart;
    document.querySelector('#partnerPage').hidden = true;
    document.querySelector('#offers').hidden = showCart;
    document.querySelector('.map-shell').hidden = showCart;
    document.querySelector('.city').hidden = showCart;
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('selected', item === link));
    if (showCart) window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (target === '#profile') {
    event.preventDefault();
    document.querySelector('#cartPage').hidden = true;
    document.querySelector('#partnerPage').hidden = false;
    document.querySelector('#offers').hidden = true;
    document.querySelector('.switcher').hidden = true;
    document.querySelector('.map-shell').hidden = true;
    document.querySelector('.city').hidden = true;
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('selected', item === link));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (target === '#home') {
    document.querySelector('#cartPage').hidden = true;
    document.querySelector('#partnerPage').hidden = true;
    document.querySelector('#offers').hidden = false;
    document.querySelector('.switcher').hidden = false;
    document.querySelector('.map-shell').hidden = false;
    document.querySelector('.city').hidden = false;
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('selected', item === link));
  }
}));

document.querySelector('#checkoutButton').addEventListener('click', () => notify('Замовлення можна буде підтвердити під час отримання.'));
document.querySelector('#partnerBack').addEventListener('click', () => document.querySelector('.nav-item[href="#home"]').click());
document.querySelector('#promoteButton').addEventListener('click', () => notify('Демо: пропозицію піднято в списку на 1 день за 29 грн.'));
document.querySelector('#allOffersButton').addEventListener('click', () => notify('У кабінеті показано одну демонстраційну пропозицію.'));

document.querySelector('.nav-item[href="#map"]').addEventListener('click', () => {
  setTimeout(() => map.invalidateSize(), 80);
  map.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
