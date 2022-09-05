namespace CodeWarsProblems;

// Example I/O:
// (1500, 5, 100, 5000) -> 15
// (1500000, 2.5, 10000, 2000000) -> 10

internal class GrowthOfAPopulation
{
    public static int NbYear(int p0, double percent, int aug, int p)
    {
        var years = 0;
        percent *= .01;

        while (p0 < p)
        {
            p0 += (int)Math.Floor((p0 * percent) + aug);
            years++;
        }

        return years;
    }
}