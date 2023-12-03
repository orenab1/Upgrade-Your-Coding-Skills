// Solution 1

public double? CalculateTip(double billAmount, double tipPercentage) {
    if (billAmount < 0 || tipPercentage < 0) {
        Console.Error.WriteLine("Error");
        return null;
    }

    double tipAmount = billAmount * (tipPercentage / 100);
    return Math.Round(tipAmount, 2);
}

// Solution 2

public double GetFinalPrice(double price) {
    const double taxRate = 0.15;
    const double discountRate = 0.1;
    double priceAfterDiscount = price - price * discountRate;
    double priceAfterTax = priceAfterDiscount + priceAfterDiscount * taxRate;
    return Math.Round(priceAfterTax, 2);
}

// Solution 3

public double GetWeaponDamage(double weaponBaseDamage, int skillLevel) {
    const double skillDamageMultiplier = 0.05;
    const int randomFactorMaxValue = 10;
    const int minDamage = 20;

    double skillFactor = weaponBaseDamage * (skillLevel * skillDamageMultiplier);
    Random random = new Random();
    double randomFactor = random.NextDouble() * randomFactorMaxValue;

    double totalDamage = weaponBaseDamage + skillFactor + randomFactor;

    return Math.Max(totalDamage, minDamage);
}

// Solution 4

public int GetPlayerExperience(int numOfLevel1CreaturesKilled, int numOfLevel2CreaturesKilled) {
    const int tutorialPoints = 1000;
    const int pointsForKillingLevel1Creature = 500;
    const int pointsForKillingLevel2Creature = 1000;

    int pointsForLevel1CreaturesKilled = numOfLevel1CreaturesKilled * pointsForKillingLevel1Creature;
    int pointsForLevel2CreaturesKilled = numOfLevel2CreaturesKilled * pointsForKillingLevel2Creature;

    return tutorialPoints + pointsForLevel1CreaturesKilled + pointsForLevel2CreaturesKilled;
}

// Solution 5

public int GetFireballDamage(int distance, int wizardLevel) {
    const int baseDamage = 20;
    const int distanceMultiplier = 3;
    const int wizardLevelMultiplier = 6;

    int distanceDamage = distance * distanceMultiplier;
    int wizardLevelDamage = wizardLevel * wizardLevelMultiplier;
    return baseDamage + distanceDamage + wizardLevelDamage;
}
