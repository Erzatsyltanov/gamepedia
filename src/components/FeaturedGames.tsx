
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import { Button } from '@/components/ui/button';

const featuredGames = [
  {
    id: 1,
    title: "Assassin's Creed Shadows",
    image: "https://placehold.co/600x400/1f1f1f/8B5CF6?text=AC+Shadows",
    description: "Крупнейший запуск в истории франшизы с более чем 1 миллионом игроков в день релиза.",
    link: "/franchises/assassins-creed"
  },
  {
    id: 2,
    title: "The Elder Scrolls IV: Oblivion Remaster",
    image: "https://placehold.co/600x400/1f1f1f/8B5CF6?text=TES+Oblivion",
    description: "Культовая RPG возвращается с улучшенной графикой и дополнительным контентом.",
    link: "/franchises/the-elder-scrolls"
  },
  {
    id: 3,
    title: "GTA VI",
    image: "https://placehold.co/600x400/1f1f1f/8B5CF6?text=GTA+VI",
    description: "Релиз самой ожидаемой игры десятилетия перенесён на май 2026 года.",
    link: "/franchises/gta"
  },
  {
    id: 4,
    title: "DOOM: The Dark Ages",
    image: "https://placehold.co/600x400/1f1f1f/8B5CF6?text=DOOM",
    description: "Новая глава в легендарной серии шутеров от id Software.",
    link: "/franchises/doom"
  }
];

const FeaturedGames = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Популярные игры</h2>
          <Button variant="outline" asChild>
            <Link to="/franchises">Смотреть все</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <GameCard 
              key={game.id}
              title={game.title}
              image={game.image}
              description={game.description}
              link={game.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
