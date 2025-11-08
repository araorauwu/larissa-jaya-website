export function waLink({phone='6285128043387', text=''}){
  const q = encodeURIComponent(text)
  return `https://wa.me/${phone}?text=${q}`
}
