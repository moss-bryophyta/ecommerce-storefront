export interface CartItem {
  productId: string;
  quantity: number;
}

// Simple in-memory cart for demo (resets on reload)
// In a real app this would be persisted
let cart: CartItem[] = [];

export function getCart(): CartItem[] {
  return cart;
}

export function addToCart(productId: string, quantity: number = 1): CartItem[] {
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  cart = cart.filter((item) => item.productId !== productId);
  return cart;
}

export function clearCart(): CartItem[] {
  cart = [];
  return cart;
}
