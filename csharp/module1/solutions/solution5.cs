public int GetFireballDamage(int distance, int wizardLevel) {
    const int baseDamage = 20;
    const int distanceMultiplier = 3;
    const int wizardLevelMultiplier = 6;

    int distanceDamage = distance * distanceMultiplier;
    int wizardLevelDamage = wizardLevel * wizardLevelMultiplier;
    return baseDamage + distanceDamage + wizardLevelDamage;
}
