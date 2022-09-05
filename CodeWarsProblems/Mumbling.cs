using System.Text;

namespace CodeWarsProblems;

// Example I/O:
// "abcd" -> "A-Bb-Ccc-Dddd"
// "RqaEzty" -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// "cwAt" -> "C-Ww-Aaa-Tttt"

internal class Mumbling
{
    public static string Accum(string s)
    {
        var sb = new StringBuilder();

        for (var i = 0; i < s.Length; i++)
        {
            var currentLetter = s[i];

            if (i == 0)
                sb.Append($"{currentLetter}-");
            else
            {
                var upper = char.ToUpper(currentLetter);
                sb.Append(upper);

                for (var j = 0; j < i; j++)
                {
                    var lower = char.ToLower(currentLetter);

                    sb.Append(lower);
                }

                if (i != s.Length - 1)
                    sb.Append("-");
            }
        }

        return sb.ToString();
    }
}