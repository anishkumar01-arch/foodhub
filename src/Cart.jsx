
const CART_KEY = "foodhub_cart";

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
}

export function addToCart(food) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === food.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...food, quantity: 1 });
    }

    saveCart(cart);
}

export function updateQuantity(id, change) {
    const cart = getCart()
        .map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + change }
                : item
        )
        .filter(item => item.quantity > 0);

    saveCart(cart);
}

export function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
}

export function clearCart() {
    saveCart([]);
}
