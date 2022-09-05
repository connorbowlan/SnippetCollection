namespace CodeWarsProblems;

// Example I/O:
// Sam Harris => S.H 
// patrick feeney => P.F

internal class AbbreviateA2WordName
{
    public static string AbbrevName(string name)
    {
        var names = name.Split(' ');

        var firstInitial = names[0][0];
        var secondInitial = names[1][0];

        return $"{firstInitial}.{secondInitial}".ToUpper();
    }
}