// Challenge 1

function getTotalFuelCostForTravel(startPoint, endPoint) {
  const fuelPerMeter = 6;

  const distance = Math.sqrt(
    Math.pow(endPoint.x - startPoint.x, 2) +
      Math.pow(endPoint.y - startPoint.y, 2)
  );

  const requiredFuel = distance * fuelPerMeter;

  return getTotalFuelCost(requiredFuel);
}

// Challenge 2

function updateUsersIsActiveProperty(users) {
  if (!users) {
    return;
  }
  for (const user of users) {
    user.isActive = user.daysSinceLastSignin <= MIN_NUM_OF_DAYS_FOR_INACTIVE;
  }
}

// Challenge 3

function reduceHealthLateGame(
  player1Health,
  player2Health,
  turnNumber,
  healthReduction
) {
  if (turnNumber < HEALTH_REDUCTION_MIN_TURN_NUMBER) {
    return;
  }

  player1Health = getReducedHealth(player1Health, healthReduction);
  player2Health = getReducedHealth(player2Health, healthReduction);

  return [player1Health, player2Health];
}

function getReducedHealth(playerHealth, healthReduction) {
  playerHealth -= healthReduction;
  if (playerHealth < 0) {
    playerHealth = 0;
  }
  return playerHealth;
}

// Challenge 4

function getTotalDamage(baseDamage, ringBonus, wandBonus, isDoubleDamage) {
  const minRingBonusToCauseDamage = 5;
  const minWandBonusToCauseDamage = 3;

  if (
    ringBonus < minRingBonusToCauseDamage ||
    wandBonus < minWandBonusToCauseDamage
  ) {
    return 0;
  }

  let result = baseDamage * ringBonus * wandBonus;

  if (isDoubleDamage) {
    result *= 2;
  }

  return result;
}

// Challenge 5
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
  
