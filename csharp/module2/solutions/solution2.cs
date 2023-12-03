public class User
{
    public int DaysSinceLastSignin { get; set; }
    public bool IsActive { get; set; }
}

public void UpdateUsersIsActiveProperty(List<User> users)
{
    if (users == null)
    {
        return;
    }

    const int MinNumOfDaysForInactive = 7; 

    foreach (var user in users)
    {
        user.IsActive = user.DaysSinceLastSignin <= MinNumOfDaysForInactive;
    }
}
