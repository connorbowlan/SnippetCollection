namespace LeetCodeProblems;

internal static class _1TwoSum
{
    // Notes:
    // This is considered brute force because we're doing every comparison possible.
    // This is O(n^2).

    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    public static int[] TwoSum(int[] nums, int target)
    {
        for (var i = 0; i <= nums.Length; i++)
        {
            for (var j = i + 1; j < nums.Length; j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    return new[] { i, j };
                }
            }
        }

        return null;
    }
}