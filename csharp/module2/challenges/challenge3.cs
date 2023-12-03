public class GameHealthManager
{
    private const int HealthReductionMinTurnNumber = 10; 
    public (int player1Health, int player2Health) ReduceHealthLateGame(int player1Health, int player2Health, int turnNumber, int healthReduction)
    {
        if (turnNumber >= HealthReductionMinTurnNumber)
        {
            player1Health = Math.Max(player1Health - healthReduction, 0);
            player2Health = Math.Max(player2Health - healthReduction, 0);
        }

        return (player1Health, player2Health);
    }
}
