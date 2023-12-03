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
