public class GameLogic
{
    private const int HealthReductionMinTurnNumber = 10; 

    public (int, int) ReduceHealthLateGame(int player1Health, int player2Health, int turnNumber, int healthReduction)
    {
        if (turnNumber < HealthReductionMinTurnNumber)
        {
            return (player1Health, player2Health);
        }

        player1Health = GetReducedHealth(player1Health, healthReduction);
        player2Health = GetReducedHealth(player2Health, healthReduction);

        return (player1Health, player2Health);
    }

    private int GetReducedHealth(int playerHealth, int healthReduction)
    {
        playerHealth -= healthReduction;
        if (playerHealth < 0)
        {
            playerHealth = 0;
        }
        return playerHealth;
    }
}
