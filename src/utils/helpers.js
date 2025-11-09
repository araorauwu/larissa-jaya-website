// src/utils/helpers.js
export function waLink({ phone, text = "" }) {
  const q = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${q}`;
}
