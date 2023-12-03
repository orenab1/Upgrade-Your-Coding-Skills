public double WeaponDamage(double weaponBaseDamage, int playerLevelOfSkill) {
    Random random = new Random();
    double damage = weaponBaseDamage + weaponBaseDamage * (playerLevelOfSkill * 0.05) + random.NextDouble() * 10;
    return Math.Max(damage, 20);
}
