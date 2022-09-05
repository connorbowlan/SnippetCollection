namespace CodeWarsProblems;

// Example I/O:
// "00:00:00" <- 0
// "00:00:05" <- 5
// "00:01:00" <- 60
// "23:59:59" <- 86399
// "99:59:59" <- 359999

internal class HumanReadableTime
{
    public static string GetReadableTime(int seconds) => TimeSpan.FromSeconds(seconds).ToString(@"hh\:mm\:ss");
}