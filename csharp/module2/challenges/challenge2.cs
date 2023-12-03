public class User
{
    public int DaysSinceLastSignin { get; set; }
    public bool IsActive { get; set; }
}

public class UserActivityTracker
{
    private const int MinNumOfDaysForInactive = 30; // Assuming a constant value; replace with actual value

    public int GetTotalNumberOfInactiveUsers(List<User> users)
    {
        int counter = 0;

        if (users != null)
        {
            foreach (var user in users)
            {
                if (user.DaysSinceLastSignin > MinNumOfDaysForInactive)
                {
                    counter++;
                    user.IsActive = false;
                }
                else
                {
                    user.IsActive = true;
                }
            }
        }

        return counter;
    }
}
