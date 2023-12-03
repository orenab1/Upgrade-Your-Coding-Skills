public double GetWeaponDamage(double weaponBaseDamage, int skillLevel) {
    const double skillDamageMultiplier = 0.05;
    const int randomFactorMaxValue = 10;
    const int minDamage = 20;

    double skillFactor = weaponBaseDamage * (skillLevel * skillDamageMultiplier);
    Random random = new Random();
    double randomFactor = random.NextDouble() * randomFactorMaxValue;

    double totalDamage = weaponBaseDamage + skillFactor + randomFactor;

    return Math.Max(totalDamage, minDamage);
}
