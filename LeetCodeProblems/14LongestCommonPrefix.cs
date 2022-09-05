using System.Text;

namespace LeetCodeProblems;

internal static class _14LongestCommonPrefix
{
    public static string LongestCommonPrefix(string[] strs)
    {
        if (strs.Length == 0)
            return string.Empty;

        var stringBuilder = new StringBuilder();

        for (var index = 0; index < strs[0].Length; index++)
        {
            for (var i = 1; i < strs.Length; i++)
            {
                if (index >= strs[i].Length || strs[i][index] != strs[0][index])
                {
                    return stringBuilder.ToString();
                }
            }

            stringBuilder.Append(strs[0][index]);
        }

        return stringBuilder.ToString();
    }
}