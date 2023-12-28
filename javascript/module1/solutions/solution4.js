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
