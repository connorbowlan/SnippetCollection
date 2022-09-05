namespace LeetCodeProblems;

internal static class _9PalindromeNumber
{
    // Notes:
    // We multiply the integer times 10 find the remainder, and assigned it to reverse.
    // We then divide the original number by 10 to get to the next digit.
    public static bool IsPalindrome(int x)
    {
        var temp = x;
        var reverse = 0;

        while (temp > 0)
        {
            reverse = reverse * 10 + temp % 10;
            temp = temp / 10;
        }

        return reverse == x;
    }
}