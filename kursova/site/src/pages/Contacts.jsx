import { Link } from "react-router-dom";

export default function Contacts() {
  return <main className="contacts-page"><span className="eyebrow">YARD® / МИ НА ЗВ’ЯЗКУ</span><h1>Є ПИТАННЯ?<br />ПИШИ НАМ.</h1><p className="contacts-intro">Допоможемо з вибором розміру, деталями замовлення та будь-якими питаннями про речі.</p><div className="contact-list"><a href="mailto:hello@yard.store"><span>ЕЛЕКТРОННА ПОШТА</span><strong>hello@yard.store</strong><i>↗</i></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span>INSTAGRAM</span><strong>@yard.citywear</strong><i>↗</i></a><a href="https://maps.google.com/?q=Odesa" target="_blank" rel="noreferrer"><span>МІСТО</span><strong>Одеса, Україна</strong><i>↗</i></a></div><p className="hours"><strong>ГОДИНИ ВІДПОВІДІ</strong><span>Понеділок — п’ятниця, 10:00–18:00</span></p><Link className="contact-catalog" to="/catalog">ПЕРЕГЛЯНУТИ КОЛЕКЦІЮ ↗</Link></main>;
}
