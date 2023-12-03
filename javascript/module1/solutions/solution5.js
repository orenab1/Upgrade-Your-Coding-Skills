function getFireballDamage(distance, wizardLevel) {
    const baseDamage = 20;
    const distanceMultiplier = 3;
    const wizardLevelMultiplier = 6;
  
    const distanceDamage = distance * distanceMultiplier;
    const wizardLevelDamage = wizardLevel * wizardLevelMultiplier;
    return baseDamage + distanceDamage + wizardLevelDamage;
  }
