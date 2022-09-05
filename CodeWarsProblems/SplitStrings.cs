namespace CodeWarsProblems;

// Example I/O:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

internal class SplitStrings
{
    public static string[] Solution(string str)
    {
        var size = str.Length % 2 == 0 ? str.Length / 2 : (str.Length / 2) + 1;

        var stringArray = new string[size];

        var j = 0;

        for (var i = 0; i < str.Length; i += 2)
        {
            stringArray[j] = i + 1 < str.Length ? str[i] + str[i + 1].ToString() : str[i] + "_";

            j++;
        }

        return stringArray;
    }
}