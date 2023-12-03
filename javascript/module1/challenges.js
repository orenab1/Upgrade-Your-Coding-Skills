// Challenge 1

function calculateTip(theBill, tip) {
  // check if bill and tip are valid
  if (theBill < 0 || tip < 0) {
    console.error("Error");
    return null;
  }

  let tipAmount = theBill * (tip / 100);
  return tipAmount.toFixed(2); // Rounds the tip to two decimal places
}

// Challenge 2

function getFinalPrice(price) {
  let tax = 0.15;
  // 0.1 is the discount.
  // (price - price *  0.1) is price after discount
  price = price - price * 0.1 + (price - price * 0.1) * tax;
  return price.toFixed(2);
}

// Challenge 3

function weaponDamage(weaponBaseDamage, playerLevelOfSkill) {
  // damage is the base weapon damage, plus the skill factor, plus random factor
  let damage =
    weaponBaseDamage +
    weaponBaseDamage * (playerLevelOfSkill * 0.05) +
    Math.random() * 10;

  // damage can't be less than 20
  return Math.max(damage, 20);
}

// Challenge 4

function getPlayerExprience(
  numOfLevel1CreaturesKilled,
  numOfLevel2CreaturesKilled
) {
  // 1000 points for finishing tutorial
  return (
    1000 + numOfLevel1CreaturesKilled * 500 + numOfLevel2CreaturesKilled * 1000
  );
}

// Challenge 5

function getFireballDamage(theFireBallDistance, levelOfWizardWhoCasted) {
  let baseDamageFireball = 20;
  return (
    baseDamageFireball + theFireBallDistance * 3 + levelOfWizardWhoCasted * 6
  );
}

