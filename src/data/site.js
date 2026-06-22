export const business = {
  name: 'Velvet',
  fullName: 'Салон краси Velvet',
  city: 'Вінниця',
  address: 'вул. Соборна 38, Вінниця',
  phone: '+380952345678',
  phoneDisplay: '+38 (095) 234 56 78',
  telegram: 'https://t.me/velvet_salon_vn',
  viber: 'viber://chat?number=+380952345678',
  viberWeb: 'https://chats.viber.com/velvetsalon',
  instagram: 'https://instagram.com/velvet.salon.vinnytsia',
  hours: 'Пн–Пт 9:00–20:00 · Сб–Нд 10:00–19:00',
  promoCode: 'VELVET15',
  promoText: 'Перший візит — знижка 15%',
  mapEmbed:
    'https://maps.google.com/maps?q=%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F%2C%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%B0%2038&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapHref: 'https://maps.google.com/?q=Вінниця,+Соборна+38',
};

export const tgMessage = (text) =>
  `${business.telegram}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '#services', label: 'Послуги' },
  { href: '#portfolio', label: 'Портфоліо' },
  { href: '#how', label: 'Як працюємо' },
  { href: '#reviews', label: 'Відгуки' },
  { href: '#faq', label: 'Питання' },
  { href: '#contacts', label: 'Контакти' },
];
