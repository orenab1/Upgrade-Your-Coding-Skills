function getTotalFuelCostForTravel(x1, y1, x2, y2) {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  const requiredFuel = distance * 6;

  return getTotalFuelCost(requiredFuel);
}
