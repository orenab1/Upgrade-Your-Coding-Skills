public int GetFireballDamage(int theFireBallDistance, int levelOfWizardWhoCasted) {
    int baseDamageFireball = 20;
    return baseDamageFireball + theFireBallDistance * 3 + levelOfWizardWhoCasted * 6;
}
