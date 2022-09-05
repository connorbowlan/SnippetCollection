namespace LeetCodeProblems;

internal class Program
{
    public static void Main()
    {
        #region 1. - Two Sum

        int[] nums = { 2, 5, 5, 11 };
        var target = 10;

        _1TwoSum.TwoSum(nums, target);

        #endregion

        #region 2. - Add Two Numbers

        // Returning to this at a later date.

        #endregion

        #region 9. Palindrome Number

        var x = 121;

        _9PalindromeNumber.IsPalindrome(x);

        #endregion

        #region 13. Roman to Integer

        var roman = "MDCCCL";

        _13RomanToInteger.RomanToInt(roman);

        #endregion
    }
}