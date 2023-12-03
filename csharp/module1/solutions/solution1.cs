public double? CalculateTip(double billAmount, double tipPercentage) {
    if (billAmount < 0 || tipPercentage < 0) {
        Console.Error.WriteLine("Error");
        return null;
    }

    double tipAmount = billAmount * (tipPercentage / 100);
    return Math.Round(tipAmount, 2);
}
