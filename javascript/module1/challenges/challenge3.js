function weaponDamage(weaponBaseDamage, playerLevelOfSkill) {
  // damage is the base weapon damage, plus the skill factor, plus random factor
  let damage =
    weaponBaseDamage +
    weaponBaseDamage * (playerLevelOfSkill * 0.05) +
    Math.random() * 10;

  // damage can't be less than 20
  return Math.max(damage, 20);
}
