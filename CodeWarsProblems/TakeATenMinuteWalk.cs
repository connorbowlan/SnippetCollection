namespace CodeWarsProblems;

// Instructions:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
// -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ["n", "s", "w", "e"]).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don"t want to be early or late!) and will,
// of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters("n", "s", "e", or "w" only).
// It will never give you an empty array(that"s not a walk, that"s standing still!).

internal static class TakeATenMinuteWalk
{
    public static bool IsValidWalk(string[] walk)
    {
        int northCount = 0, southCount = 0, eastCount = 0, westCount = 0;

        foreach (var block in walk)
        {
            switch (block)
            {
                case "n":
                    northCount++;
                    break;
                case "s":
                    southCount++;
                    break;
                case "e":
                    eastCount++;
                    break;
                case "w":
                    westCount++;
                    break;
            }
        }

        if (northCount + southCount + eastCount + westCount != 10)
            return false;

        if (northCount != southCount)
            return false;

        if (eastCount != westCount)
            return false;

        return true;
    }

    // This required multiple using statements in CodeWars
    // and didn't seem to work... Going to try the old fashioned way.
    
    // Turns out this wasn't the issue. I wasn't checking to make sure
    // the walk is exactly 10 blocks (at 1 block/minute).

    // public static bool IsValidWalk(string[] walk)
    // {
    //     var northCount = walk.Count(x => x == "n");
    //     var southCount = walk.Count(x => x == "s");
    //     var eastCount = walk.Count(x => x == "e");
    //     var westCount = walk.Count(x => x == "w");
       
    //     if (northCount != southCount)
    //         return false;
       
    //     if (eastCount != westCount)
    //         return false;
       
    //     return true;
    // }
}