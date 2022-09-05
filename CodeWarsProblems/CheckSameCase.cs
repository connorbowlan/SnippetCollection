namespace CodeWarsProblems;

// Example I/O:
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

internal class CheckSameCase
{
    public static int SameCase(char a, char b)
    {
        if (!char.IsLetter(a) || !char.IsLetter(b))
            return -1;

        if (char.IsUpper(a) && char.IsUpper(b) || char.IsLower(a) && char.IsLower(b))
            return 1;

        return 0;
    }
}