function getTotalDamage(baseDamage, ringBonus, wandBonus, isDoubleDamage) {
  const minRingBonusToCauseDamage = 5;
  const minWandBonusToCauseDamage = 3;

  if (
    ringBonus < minRingBonusToCauseDamage ||
    wandBonus < minWandBonusToCauseDamage
  ) {
    return 0;
  }

  let result = baseDamage * ringBonus * wandBonus;

  if (isDoubleDamage) {
    result *= 2;
  }

  return result;
}
