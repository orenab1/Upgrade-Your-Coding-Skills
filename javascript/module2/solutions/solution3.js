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
