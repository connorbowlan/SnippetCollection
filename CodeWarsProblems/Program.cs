namespace CodeWarsProblems;

internal class Program
{
    private static void Main(string[] args)
    {
        var x = "A pangram is a sentence that contains every single letter of the alphabet at least once.";
        var z =
            "Raw Danger! (Zettai Zetsumei Toshi 2) for the PlayStation 2 is a bit queer, but an alright game I guess, uh... CJ kicks and vexes Tenpenny precariously? This should be a pangram now, probably.";

        var l = "This isn't a pangram!";

        var y = DetectPangram.IsPangram(l);

        var aasdl = FindTheUniqueNumber.GetUnique(new[] { 11, 11, 14, 11, 11 });

    }

}