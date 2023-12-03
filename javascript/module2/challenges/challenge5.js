function getTotalArmyPower(
  totalNumberOfSwordsmenForPlayer,
  numberOfKnightsTotal,
  kingPower
) {
  if (kingPower > 5) {
    let infantryPower = totalNumberOfSwordsmenForPlayer * 10;
    if (infantryPower >= 100) {
      infantryPower += 50;
    }

    let knightsPower = numberOfKnightsTotal * 20;
    if (knightsPower >= 100) {
      knightsPower += 50;
    }

    return kingPower + infantryPower + knightsPower;
  }
  return kingPower;
}
