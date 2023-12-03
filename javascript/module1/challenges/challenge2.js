function getFinalPrice(price) {
  let tax = 0.15;
  // 0.1 is the discount.
  // (price - price *  0.1) is price after discount
  price = price - price * 0.1 + (price - price * 0.1) * tax;
  return price.toFixed(2);
}
