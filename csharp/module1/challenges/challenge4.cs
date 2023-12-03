public int GetPlayerExperience(int numOfLevel1CreaturesKilled, int numOfLevel2CreaturesKilled) {
    return 1000 + numOfLevel1CreaturesKilled * 500 + numOfLevel2CreaturesKilled * 1000;
}
