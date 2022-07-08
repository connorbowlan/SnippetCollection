using ConsoleGame.Data;

namespace ConsoleGame
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Out("Welcome to the game! To start, enter your name: ");

            var inputName = Get();

            var player = new Player(inputName);

            player.Attack();

            Out($"Welcome, {player.Name}. Here's what we know so far: ");

            // Testing a GIT change
        }

        private static void Out(string message)
        {
            Console.WriteLine(message);
        }

        private static string? Get()
        {
            return Console.ReadLine();
        }
    }
}