namespace CodeWarsProblems;

// Example I/O:
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

internal class Isograms
{
    public static bool IsIsogram(string str) => str.ToLower().Distinct().Count() == str.Length;
}