function getFireballDamage(theFireBallDistance, levelOfWizardWhoCasted) {
  let baseDamageFireball = 20;
  return (
    baseDamageFireball + theFireBallDistance * 3 + levelOfWizardWhoCasted * 6
  );
}
