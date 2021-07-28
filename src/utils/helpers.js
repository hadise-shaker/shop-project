export function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
