function getTotalArmyPower(numOfSwordsmen, numOfKnights, kingPower) {
    const minKingPowerToInculdeOtherTypes = 5;
    const infantryMultiplier = 10;
    const knightsMultiplier = 20;
    
    if (kingPower <= minKingPowerToInculdeOtherTypes) {
      return kingPower;
    }
  
    const infantryPower = getPower(numOfSwordsmen, infantryMultiplier);
  
    const knightsPower = getPower(numOfKnights, knightsMultiplier);
  
    return kingPower + infantryPower + knightsPower;
  }
  
  function getPower(numOfUnits, multiplier) {
    const minPowerForBonus = 100;
    const powerBonus = 50;
  
    let result = numOfUnits * multiplier;
    if (result >= minPowerForBonus) {
      result += powerBonus;
    }
    return result;
  }
