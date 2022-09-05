namespace CodeWarsProblems;

// Example I/O:
// The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

internal class BitCounting
{
    public static int CountBits(int n) => Convert.ToString(n, 2).Sum(bit => Convert.ToInt32(bit.ToString()));
}