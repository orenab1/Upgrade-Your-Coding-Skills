public double? CalculateTip(double theBill, double tip) {
    if (theBill < 0 || tip < 0) {
        Console.Error.WriteLine("Error");
        return null;
    }

    double tipAmount = theBill * (tip / 100);
    return Math.Round(tipAmount, 2);
}
