using System.Numerics;

namespace CodeWarsProblems;

// Example I/O:
// GetUnique([ 1, 1, 1, 2, 1, 1 ]) === 2
// GetUnique([ 0, 0, 0.55, 0, 0 ]) === 0.55

internal class FindTheUniqueNumber
{
    public static int GetUnique(IEnumerable<int> numbers)
    {
        GetLastDigit(10, BigInteger.Pow(10, 10));

        return 0;
    }

    public static int GetLastDigit(BigInteger n1, BigInteger n2)
    {
        if (n1.IsZero && n2.IsZero)
            return 1;

        //while()

        //var result = BigInteger.Pow(n1, (int)n2);

        //if (result < 10)
        //    return (int)result;

        //return (int)result % 10;
    }
}