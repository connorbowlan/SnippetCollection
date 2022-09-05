using ConsoleGame.Interfaces;

namespace ConsoleGame.Data
{
    public class Player : CharacterBase, ICombatProvider
    {
        public Player(string name)
        {
            Name = name;
            Level = 1;
            Experience = 0;
            Money = 0;
            Health = 100;
            AttackPower = 10;
            Defense = 10;
        }

        public int Level { get; set; }
        public int Experience { get; set; }
        public int Money { get; set; }

        public void Attack()
        {
            throw new NotImplementedException();
        }

        public void Defend()
        {
            throw new NotImplementedException();
        }

        public void Heal()
        {
            throw new NotImplementedException();
        }

        public void Run()
        {
            throw new NotImplementedException();
        }
    }
}
