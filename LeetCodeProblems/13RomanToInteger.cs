namespace LeetCodeProblems;

internal static class _13RomanToInteger
{
    // Notes:
    // To get the correct value, we compare one position to the next
    // and get the difference.
    public static int RomanToInt(string s)
    {
        var total = 0;

        for (var i = 0; i < s.Length; i++)
        {
            var value = 0;
            var nextValue = 0;

            var j = i + 1;

            value = s[i] switch
            {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => value
            };

            // Prevents the loop from going out of bounds.
            if (j < s.Length)
            {
                nextValue = s[j] switch
                {
                    'I' => 1,
                    'V' => 5,
                    'X' => 10,
                    'L' => 50,
                    'C' => 100,
                    'D' => 500,
                    'M' => 1000,
                    _ => nextValue
                };

                if (value < nextValue)
                {
                    value = nextValue - value;
                    i++;
                }
            }

            total += value;
        }

        return total;
    }
}