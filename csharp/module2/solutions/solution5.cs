public class ArmyPowerCalculator
{
    private const int MinKingPowerToIncludeOtherTypes = 5;
    private const int InfantryMultiplier = 10;
    private const int KnightsMultiplier = 20;

    public int GetTotalArmyPower(int numOfSwordsmen, int numOfKnights, int kingPower)
    {
        if (kingPower <= MinKingPowerToIncludeOtherTypes)
        {
            return kingPower;
        }

        int infantryPower = GetPower(numOfSwordsmen, InfantryMultiplier);
        int knightsPower = GetPower(numOfKnights, KnightsMultiplier);

        return kingPower + infantryPower + knightsPower;
    }

    private int GetPower(int numOfUnits, int multiplier)
    {
        const int MinPowerForBonus = 100;
        const int PowerBonus = 50;

        int result = numOfUnits * multiplier;
        if (result >= MinPowerForBonus)
        {
            result += PowerBonus;
        }
        return result;
    }
}
