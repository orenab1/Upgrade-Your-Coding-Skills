public class ArmyPowerCalculator
{
    public int GetTotalArmyPower(int totalNumberOfSwordsmenForPlayer, int numberOfKnightsTotal, int kingPower)
    {
        if (kingPower > 5)
        {
            int infantryPower = totalNumberOfSwordsmenForPlayer * 10;
            if (infantryPower >= 100)
            {
                infantryPower += 50;
            }

            int knightsPower = numberOfKnightsTotal * 20;
            if (knightsPower >= 100)
            {
                knightsPower += 50;
            }

            return kingPower + infantryPower + knightsPower;
        }
        return kingPower;
    }
}
