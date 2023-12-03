public class TravelCalculator
{
    private const double FuelPerUnitDistance = 6;

    public double GetTotalFuelCostForTravel(double x1, double y1, double x2, double y2)
    {
        double distance = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
        double requiredFuel = distance * FuelPerUnitDistance;
        return GetTotalFuelCost(requiredFuel);
    }
}
