namespace CodeWarsProblems;

internal class DetectPangram
{
    public static bool IsPangram(string str)
    {
        const string alphabet = "abcdefghijklmnopqrstuvwxyz";

        foreach (var letter in alphabet)
        {
            if(!str.Contains(letter))
                return false;
        }

        return true;
    }
}