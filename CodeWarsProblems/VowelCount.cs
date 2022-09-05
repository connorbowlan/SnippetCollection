namespace CodeWarsProblems;

// Instructions:
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

internal class VowelCount
{
    public static int GetVowelCount(string str)
    {
        var vowelCount = 0;

        foreach (var character in str)
        {
            switch (character)
            {
                case 'a':
                    vowelCount++;
                    break;
                case 'e':
                    vowelCount++;
                    break;
                case 'i':
                    vowelCount++;
                    break;
                case 'o':
                    vowelCount++;
                    break;
                case 'u':
                    vowelCount++;
                    break;
            }
        }

        return vowelCount;
    }
}