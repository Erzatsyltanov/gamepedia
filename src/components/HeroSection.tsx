
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Gamepedia
              </span>
              <span className="block text-2xl md:text-3xl mt-2">Энциклопедия мира видеоигр</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-md">
              Интерактивный информационный портал, посвящённый видеоиграм всех жанров и платформ. Здесь собраны статьи и факты об играх как для новичков, так и для хардкорных геймеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white">
                <Link to="/franchises">Исследовать франшизы</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/news">Последние новости</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-border animate-pulse-glow">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 w-full h-full p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Assassin\'s Creed', 'Final Fantasy', 'The Elder Scrolls', 'Half-Life', 'Resident Evil', 'The Legend of Zelda'].map((game, i) => (
                  <div key={i} className="bg-background/40 backdrop-blur-sm rounded p-2 flex items-center justify-center text-center text-xs md:text-sm hover:bg-primary/20 transition-colors cursor-pointer">
                    {game}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
