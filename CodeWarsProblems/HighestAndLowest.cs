namespace CodeWarsProblems;

// Example I/O:
// HighAndLow("1 2 3 4 5");  // return "5 1"
// HighAndLow("1 2 -3 4 5"); // return "5 -3"
// HighAndLow("1 9 3 4 -5"); // return "9 -5"

internal class HighestAndLowest
{
    public static string HighAndLow(string numbers)
    {
        var numbersArray = numbers.Split(" ");

        int? min = null;
        int? max = null;

        foreach (var number in numbersArray)
        {
            var currentNumber = int.Parse(number);

            if (!min.HasValue || currentNumber < min)
                min = currentNumber;

            if (!max.HasValue || currentNumber > max)
                max = currentNumber;
        }

        return $"{max} {min}";
    }

    // Didn't work because CodeWars won't let us use string.Select().
    // Found out later it was because I was missing using statements in CodeWars.
    // That's fine because I prefer to not have to use any.

    // public static string HighAndLow(string numbers)
    // {
    //     var array = numbers.Split(' ').Select(int.Parse).ToArray();

    //     var min = array.Min();
    //     var max = array.Max();

    //     return $"{max} {min}";
    // }
}