namespace CodeWarsProblems;

// Example I/O:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

internal class BreakCamelCase
{
    public static string Solution(string str)
    {
        var upperLetterCount = str.Count(char.IsUpper);

        var charArray = new char[str.Length + upperLetterCount];

        var j = 0;

        foreach (var currentLetter in str)
        {
            if (!char.IsUpper(currentLetter))
            {
                charArray[j] = currentLetter;

                j++;
            }
            else
            {
                charArray[j] = ' ';
                charArray[j + 1] = currentLetter;

                j += 2;
            }
        }

        return new string(charArray);
    }
}