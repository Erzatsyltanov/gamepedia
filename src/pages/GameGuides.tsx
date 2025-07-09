import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Star, User, Trophy, Gamepad2 } from 'lucide-react';

const gameGuides = [
  {
    id: 1,
    title: "Полное прохождение Elden Ring: Гайд для новичков",
    game: "Elden Ring",
    difficulty: "Новичок",
    duration: "45 мин",
    rating: 4.8,
    author: "GameMaster",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg",
    description: "Подробный гайд по началу игры в Elden Ring, включая выбор класса, первые шаги и важные советы для выживания.",
    tags: ["RPG", "Souls-like", "Прохождение"],
    views: 15420
  },
  {
    id: 2,
    title: "Cyberpunk 2077: Лучшие билды для разных стилей игры",
    game: "Cyberpunk 2077",
    difficulty: "Средний",
    duration: "30 мин",
    rating: 4.6,
    author: "CyberGuru",
    image: "https://images.gog-statics.com/5643a7c831df452d29005caeca24c231d2d90b122e61d6dd2e6c5a9e0b56b3b6.jpg",
    description: "Разбор лучших билдов персонажа для стелса, хакинга и прямого боя в Cyberpunk 2077.",
    tags: ["RPG", "Билды", "Стратегия"],
    views: 12350
  },
  {
    id: 3,
    title: "The Witcher 3: Все концовки и как их получить",
    game: "The Witcher 3",
    difficulty: "Средний",
    duration: "25 мин",
    rating: 4.9,
    author: "WitcherFan",
    image: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpTN9TEyHVAM9eeF.jpg",
    description: "Подробный разбор всех возможных концовок в The Witcher 3 и выборов, которые к ним приводят.",
    tags: ["RPG", "Концовки", "Выборы"],
    views: 18750
  },
  {
    id: 4,
    title: "Baldur's Gate 3: Гайд по созданию идеального персонажа",
    game: "Baldur's Gate 3",
    difficulty: "Продвинутый",
    duration: "40 мин",
    rating: 4.7,
    author: "D&DExpert",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    description: "Полный гайд по системе создания персонажа в Baldur's Gate 3, включая расы, классы и мультиклассинг.",
    tags: ["RPG", "D&D", "Создание персонажа"],
    views: 9840
  },
  {
    id: 5,
    title: "Hades: Секреты и скрытые механики",
    game: "Hades",
    difficulty: "Средний",
    duration: "20 мин",
    rating: 4.8,
    author: "RoguelikePro",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
    description: "Раскрываем все секреты Hades: скрытые комнаты, секретные диалоги и продвинутые стратегии боя.",
    tags: ["Roguelike", "Секреты", "Стратегия"],
    views: 11200
  },
  {
    id: 6,
    title: "Minecraft: Продвинутые техники строительства",
    game: "Minecraft",
    difficulty: "Продвинутый",
    duration: "35 мин",
    rating: 4.5,
    author: "BuildMaster",
    image: "https://fabrikbrands.com/wp-content/uploads/Minecraft-Logo-9-1200x750.png",
    description: "Изучаем продвинутые техники строительства в Minecraft: от редстоуна до архитектурных шедевров.",
    tags: ["Песочница", "Строительство", "Редстоун"],
    views: 22100
  }
];

const GameGuides = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Новичок':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Средний':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Продвинутый':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-primary" />
              Игровые гайды
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Подробные руководства, советы и стратегии для ваших любимых игр от опытных игроков и экспертов.
            </p>
          </div>

          {/* Featured Guide */}
          <Card className="mb-12 overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-primary/30">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={gameGuides[0].image}
                    alt={gameGuides[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                    🔥 ПОПУЛЯРНЫЙ ГАЙД
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {gameGuides[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {gameGuides[0].description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{gameGuides[0].rating}</div>
                      <div className="text-sm text-muted-foreground">Рейтинг</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{gameGuides[0].views.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Просмотров</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{gameGuides[0].duration}</div>
                      <div className="text-sm text-muted-foreground">Время чтения</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 w-fit">
                    Читать гайд
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameGuides.slice(1).map(guide => (
              <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {guide.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {guide.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {guide.duration}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Читать гайд
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Категории гайдов</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Прохождения', icon: Gamepad2, count: 45 },
                { name: 'Билды', icon: Trophy, count: 32 },
                { name: 'Секреты', icon: Star, count: 28 },
                { name: 'PvP', icon: User, count: 19 }
              ].map(category => (
                <Card key={category.name} className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <category.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} гайдов</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameGuides;