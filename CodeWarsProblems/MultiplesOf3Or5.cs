namespace CodeWarsProblems;

// Example I/O:
// 10 returns 23

internal class MultiplesOf3Or5
{
    public static int Solution(int value)
    {
        var sum = 0;

        for (var i = 0; i < value; i++)
        {
            if (i % 3 == 0 || i % 5 == 0)
                sum += i;
        }

        return sum;
    }
}