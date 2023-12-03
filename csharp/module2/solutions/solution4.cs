public class DamageCalculator
{
    private const int MinRingBonusToCauseDamage = 5;
    private const int MinWandBonusToCauseDamage = 3;

    public int GetTotalDamage(int baseDamage, int ringBonus, int wandBonus, bool isDoubleDamage)
    {
        if (ringBonus < MinRingBonusToCauseDamage || wandBonus < MinWandBonusToCauseDamage)
        {
            return 0;
        }

        int result = baseDamage * ringBonus * wandBonus;

        if (isDoubleDamage)
        {
            result *= 2;
        }

        return result;
    }
}
