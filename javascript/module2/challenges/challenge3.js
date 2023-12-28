function reduceHealthLateGame(
  player1Health,
  player2Health,
  turnNumber
) {
    const healthReduction = turnNumber * 0.1;

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
