// Solution 1

function calculateTip(billAmount, tipPercentage) {
  if (billAmount < 0 || tipPercentage < 0) {
    console.error("Error");
    return null;
  }

  let tipAmount = billAmount * (tipPercentage / 100);
  return tipAmount.toFixed(2);
}

// Solution 2

function getFinalPrice(price) {
  const taxRate = 0.15;
  const discountRate = 0.1;
  const priceAfterDiscount = price - price * discountRate;
  const priceAfterTax = priceAfterDiscount + priceAfterDiscount * taxRate;
  return priceAfterTax.toFixed(2);
}

// Solution 3

function getWeaponDamage(weaponBaseDamage, skillLevel) {
  const skillDamageMultiplier = 0.05;
  const randomFactorMaxValue = 10;
  const minDamage = 20;

  const skillFactor = weaponBaseDamage * (skillLevel * skillDamageMultiplier);
  const randomFactor = Math.random() * randomFactorMaxValue;

  const totalDamage = weaponBaseDamage + skillFactor + randomFactor;

  return Math.max(totalDamage, minDamage);
}

// Solution 4

function getPlayerExprience(
    numOfLevel1CreaturesKilled,
    numOfLevel2CreaturesKilled
  ) {
    const tutorialPoints = 1000;
    const pointsForKillingLevel1Creature = 500;
    const pointsForKillingLevel2Creature = 1000;
  
    const pointsForLevel1CreaturesKilled =
      numOfLevel1CreaturesKilled * pointsForKillingLevel1Creature;
    const pointsForLevel2CreaturesKilled =
      numOfLevel2CreaturesKilled * pointsForKillingLevel2Creature;
  
    // 1000 points for finishing tutorial
    return tutorialPoints + pointsForLevel1CreaturesKilled + pointsForLevel2CreaturesKilled;
  }

// Solution 5

  function getFireballDamage(distance, wizardLevel) {
    const baseDamage = 20;
    const distanceMultiplier = 3;
    const wizardLevelMultiplier = 6;
  
    const distanceDamage = distance * distanceMultiplier;
    const wizardLevelDamage = wizardLevel * wizardLevelMultiplier;
    return baseDamage + distanceDamage + wizardLevelDamage;
  }
  
