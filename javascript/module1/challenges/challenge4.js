function getPlayerExprience(
  numOfLevel1CreaturesKilled,
  numOfLevel2CreaturesKilled
) {
  // 1000 points for finishing tutorial
  return (
    1000 + numOfLevel1CreaturesKilled * 500 + numOfLevel2CreaturesKilled * 1000
  );
}
