function updateUsersIsActiveProperty(users) {
  if (!users) {
    return;
  }
  for (const user of users) {
    user.isActive = user.daysSinceLastSignin <= MIN_NUM_OF_DAYS_FOR_INACTIVE;
  }
}
