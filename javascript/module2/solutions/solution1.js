function getTotalFuelCostForTravel(startPoint, endPoint) {
  const fuelPerMeter = 6;

  const distance = Math.sqrt(
    Math.pow(endPoint.x - startPoint.x, 2) +
      Math.pow(endPoint.y - startPoint.y, 2)
  );

  const requiredFuel = distance * fuelPerMeter;

  return getTotalFuelCost(requiredFuel);
}
