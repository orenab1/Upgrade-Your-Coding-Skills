function getFinalPrice(price) {
  const taxRate = 0.15;
  const discountRate = 0.1;
  const priceAfterDiscount = price - price * discountRate;
  const priceAfterTax = priceAfterDiscount + priceAfterDiscount * taxRate;
  return priceAfterTax.toFixed(2);
}
