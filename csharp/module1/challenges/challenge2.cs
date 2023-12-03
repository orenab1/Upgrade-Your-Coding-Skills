public double GetFinalPrice(double price) {
    double tax = 0.15;
    price = price - price * 0.1 + (price - price * 0.1) * tax;
    return Math.Round(price, 2);
}
