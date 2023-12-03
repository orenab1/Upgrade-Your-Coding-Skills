function getWeaponDamage(weaponBaseDamage, skillLevel) {
  const skillDamageMultiplier = 0.05;
  const randomFactorMaxValue = 10;
  const minDamage = 20;

  const skillFactor = weaponBaseDamage * (skillLevel * skillDamageMultiplier);
  const randomFactor = Math.random() * randomFactorMaxValue;

  const totalDamage = weaponBaseDamage + skillFactor + randomFactor;

  return Math.max(totalDamage, minDamage);
}
