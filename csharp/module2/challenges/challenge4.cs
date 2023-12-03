public class DamageCalculator
{
    public int GetTotalDamage(int baseDamage, int ringBonus, int wandBonus, bool isDoubleDamage)
    {
        if (ringBonus >= 5 && wandBonus >= 3)
        {
            if (isDoubleDamage)
            {
                return baseDamage * ringBonus * wandBonus * 2;
            }
            else
            {
                return baseDamage * ringBonus * wandBonus;
            }
        }

        return 0;
    }
}
