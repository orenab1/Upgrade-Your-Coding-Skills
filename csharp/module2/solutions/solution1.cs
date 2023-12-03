public class Point
{
    public double X { get; set; }
    public double Y { get; set; }
}

public class TravelCalculator
{
    private const double FuelPerMeter = 6;

    public double GetTotalFuelCostForTravel(Point startPoint, Point endPoint)
    {
        double distance = Math.Sqrt(
            Math.Pow(endPoint.X - startPoint.X, 2) +
            Math.Pow(endPoint.Y - startPoint.Y, 2)
        );

        double requiredFuel = distance * FuelPerMeter;

        return GetTotalFuelCost(requiredFuel);
    }
}
