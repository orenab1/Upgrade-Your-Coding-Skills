// Challenge 1

public double? CalculateTip(double theBill, double tip) {
    if (theBill < 0 || tip < 0) {
        Console.Error.WriteLine("Error");
        return null;
    }

    double tipAmount = theBill * (tip / 100);
    return Math.Round(tipAmount, 2);
}

// Challenge 2

public double GetFinalPrice(double price) {
    double tax = 0.15;
    price = price - price * 0.1 + (price - price * 0.1) * tax;
    return Math.Round(price, 2);
}

// Challenge 3

public double WeaponDamage(double weaponBaseDamage, int playerLevelOfSkill) {
    Random random = new Random();
    double damage = weaponBaseDamage + weaponBaseDamage * (playerLevelOfSkill * 0.05) + random.NextDouble() * 10;
    return Math.Max(damage, 20);
}

// Challenge 4

public int GetPlayerExperience(int numOfLevel1CreaturesKilled, int numOfLevel2CreaturesKilled) {
    return 1000 + numOfLevel1CreaturesKilled * 500 + numOfLevel2CreaturesKilled * 1000;
}

// Challenge 5

public int GetFireballDamage(int theFireBallDistance, int levelOfWizardWhoCasted) {
    int baseDamageFireball = 20;
    return baseDamageFireball + theFireBallDistance * 3 + levelOfWizardWhoCasted * 6;
}
