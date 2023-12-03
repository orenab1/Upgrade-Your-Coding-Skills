// Challenge 1

function getTotalFuelCostForTravel(x1, y1, x2, y2) {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  const requiredFuel = distance * 6;

  return getTotalFuelCost(requiredFuel);
}

// Challenge 2

function getTotalNumberOfInactiveUsers(users) {
  let counter = 0;

  if (users) {
    for (const user of users) {
      if (user.daysSinceLastSignin > MIN_NUM_OF_DAYS_FOR_INACTIVE) {
        counter++;
        user.isActive = false;
      } else {
        user.isActive = true;
      }
    }
  }
  return counter;
}

// Challenge 3

function reduceHealthLateGame(
  player1Health,
  player2Health,
  turnNumber,
  healthReduction
) {
  if (turnNumber >= HEALTH_REDUCTION_MIN_TURN_NUMBER) {
    player1Health -= healthReduction;
    if (player1Health < 0) {
      player1Health = 0;
    }

    player2Health -= healthReduction;
    if (player2Health < 0) {
      player2Health = 0;
    }
  }

  return [player1Health, player2Health];
}

// Challenge 4

function getTotalDamage(baseDamage, ringBonus, wandBonus, isDoubleDamage) {
  if (ringBonus >= 5 && wandBonus >= 3) {
    if (isDoubleDamage) {
      return baseDamage * ringBonus * wandBonus * 2;
    } else {
      return baseDamage * ringBonus * wandBonus;
    }
  }

  return 0;
}

// Challenge 5
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
