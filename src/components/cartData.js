const cart = [
  {
    id: 0,
    name: 'Ice Cream Cone',
  },
  {
    id: 1,
    name: 'Refrigerator',
  },
];

export function addToCart(product) {
  cart.push(product);
}

export function getCart() {
  return cart;
}
