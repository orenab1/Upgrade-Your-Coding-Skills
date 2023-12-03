public double GetFinalPrice(double price) {
    const double taxRate = 0.15;
    const double discountRate = 0.1;
    double priceAfterDiscount = price - price * discountRate;
    double priceAfterTax = priceAfterDiscount + priceAfterDiscount * taxRate;
    return Math.Round(priceAfterTax, 2);
}
