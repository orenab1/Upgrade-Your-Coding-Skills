function getTotalNumberOfInactiveUsers(users) {
  let counter = 0;

  if (users) {
    for (const user of users) {
      if (user.daysSinceLastSignin > MIN_NUM_OF_DAYS_FOR_INACTIVE) {
        counter++;
        user.isActive = false;
      } else {
        user.isActive = true;
      }
    }
  }
  return counter;
}
