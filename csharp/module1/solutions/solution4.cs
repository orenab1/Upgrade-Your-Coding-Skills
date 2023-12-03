public int GetPlayerExperience(int numOfLevel1CreaturesKilled, int numOfLevel2CreaturesKilled) {
    const int tutorialPoints = 1000;
    const int pointsForKillingLevel1Creature = 500;
    const int pointsForKillingLevel2Creature = 1000;

    int pointsForLevel1CreaturesKilled = numOfLevel1CreaturesKilled * pointsForKillingLevel1Creature;
    int pointsForLevel2CreaturesKilled = numOfLevel2CreaturesKilled * pointsForKillingLevel2Creature;

    return tutorialPoints + pointsForLevel1CreaturesKilled + pointsForLevel2CreaturesKilled;
}
