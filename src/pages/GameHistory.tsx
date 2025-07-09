import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Globe, Gamepad2, Trophy, Zap } from 'lucide-react';

const gameHistoryEvents = [
  {
    year: 1972,
    title: "Рождение видеоигр",
    event: "Выход Pong",
    description: "Atari выпускает Pong - одну из первых коммерчески успешных видеоигр, положившую начало игровой индустрии.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Pong.png/300px-Pong.png",
    significance: "Основание индустрии",
    category: "milestone"
  },
  {
    year: 1977,
    title: "Эра домашних консолей",
    event: "Выход Atari 2600",
    description: "Atari 2600 становится первой массово популярной домашней игровой консолью, принося видеоигры в дома миллионов людей.",
    image: "https://atari.com/cdn/shop/articles/atari2600-firmware-update_a924d32f-7508-4346-83bd-04090aab7d28.webp?v=1725983215&width=1100",
    significance: "Массовое распространение",
    category: "console"
  },
  {
    year: 1980,
    title: "Золотой век аркад",
    event: "Pac-Man покоряет мир",
    description: "Pac-Man от Namco становится культурным феноменом, доказывая, что видеоигры могут привлекать широкую аудиторию.",
    image: "https://upload.wikimedia.org/wikipedia/en/5/59/Pac-man.png",
    significance: "Культурный феномен",
    category: "game"
  },
  {
    year: 1985,
    title: "Возрождение после краха",
    event: "Super Mario Bros. спасает индустрию",
    description: "Nintendo выпускает Super Mario Bros. для NES, возрождая игровую индустрию после краха 1983 года.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png",
    significance: "Спасение индустрии",
    category: "game"
  },
  {
    year: 1991,
    title: "Портативная революция",
    event: "Game Boy меняет игры навсегда",
    description: "Nintendo Game Boy с Tetris доказывает жизнеспособность портативных игр и создает новый рынок.",
    image: "https://i.siteapi.org/JfN6drUp1s5zRsZkRaGrVs-apAU=/fit-in/330x/center/top/filters:fill(transparent):format(png)/acced2bc66a61c3.ru.s.siteapi.org/img/l3tp7qpk17kg8g4csckc00kgcsg0sw",
    significance: "Портативные игры",
    category: "console"
  },
  {
    year: 1993,
    title: "3D революция",
    event: "DOOM определяет будущее",
    description: "id Software выпускает DOOM, революционизируя 3D-графику и создавая жанр FPS в его современном понимании.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Doom_cover_art.jpg/220px-Doom_cover_art.jpg",
    significance: "3D графика и FPS",
    category: "technology"
  },
  {
    year: 1995,
    title: "Эра PlayStation",
    event: "Sony входит в игру",
    description: "Sony PlayStation демократизирует 3D-игры и CD-носители, меняя ландшафт игровой индустрии навсегда.",
    image: "https://m.media-amazon.com/images/I/419CVQ8K9HL._AC_UF894,1000_QL80_.jpg",
    significance: "CD-носители и 3D",
    category: "console"
  },
  {
    year: 1998,
    title: "Онлайн-игры",
    event: "StarCraft и киберспорт",
    description: "StarCraft от Blizzard становится основой для развития киберспорта, особенно в Южной Корее.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/StarCraft_box_art.jpg/220px-StarCraft_box_art.jpg",
    significance: "Киберспорт",
    category: "esports"
  },
  {
    year: 2004,
    title: "Социальные игры",
    event: "World of Warcraft меняет MMO",
    description: "WoW от Blizzard делает MMORPG массовым явлением, привлекая миллионы игроков по всему миру.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/World_of_Warcraft.png/220px-World_of_Warcraft.png",
    significance: "Массовые онлайн-игры",
    category: "online"
  },
  {
    year: 2007,
    title: "Мобильная революция",
    event: "iPhone меняет мобильные игры",
    description: "Выход iPhone и App Store создает новую платформу для игр, делая их доступными для миллиардов людей.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
    significance: "Мобильные игры",
    category: "mobile"
  },
  {
    year: 2011,
    title: "Инди-революция",
    event: "Minecraft доказывает силу инди",
    description: "Minecraft от Mojang показывает, что небольшие команды могут создавать игры, меняющие индустрию.",
    image: "https://fabrikbrands.com/wp-content/uploads/Minecraft-Logo-9-1200x750.png",
    significance: "Инди-разработка",
    category: "indie"
  },
  {
    year: 2016,
    title: "VR становится реальностью",
    event: "Oculus Rift и VR-бум",
    description: "Выход потребительских VR-шлемов открывает новую эру иммерсивных игр и виртуальной реальности.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Oculus-Rift-CV1-Headset-Front.jpg/300px-Oculus-Rift-CV1-Headset-Front.jpg",
    significance: "Виртуальная реальность",
    category: "technology"
  }
];

const GameHistory = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'console':
        return Gamepad2;
      case 'game':
        return Trophy;
      case 'technology':
        return Zap;
      case 'online':
        return Globe;
      case 'milestone':
        return Calendar;
      default:
        return Clock;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'console':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'game':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'technology':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'online':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'milestone':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const decades = [
    { label: '1970-е', value: '1970s', years: [1972, 1977] },
    { label: '1980-е', value: '1980s', years: [1980, 1985] },
    { label: '1990-е', value: '1990s', years: [1991, 1993, 1995, 1998] },
    { label: '2000-е', value: '2000s', years: [2004, 2007] },
    { label: '2010-е', value: '2010s', years: [2011, 2016] }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <Clock className="w-8 h-8 mr-3 text-primary" />
              История видеоигр
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Путешествие через ключевые моменты развития игровой индустрии - от первых аркадных автоматов до современных VR-технологий.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              {decades.map(decade => (
                <TabsTrigger key={decade.value} value={decade.value}>
                  {decade.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-8">
                {gameHistoryEvents.map((event, index) => {
                  const IconComponent = getCategoryIcon(event.category);
                  return (
                    <Card key={event.year} className="overflow-hidden hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                          <div className="lg:col-span-1 aspect-video lg:aspect-auto">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="lg:col-span-2 p-8">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="text-3xl font-bold text-primary">{event.year}</div>
                                <Badge className={getCategoryColor(event.category)}>
                                  <IconComponent className="w-3 h-3 mr-1" />
                                  {event.significance}
                                </Badge>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <h4 className="text-lg text-primary mb-4">{event.event}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {decades.map(decade => (
              <TabsContent key={decade.value} value={decade.value}>
                <div className="space-y-8">
                  {gameHistoryEvents
                    .filter(event => decade.years.includes(event.year))
                    .map((event, index) => {
                      const IconComponent = getCategoryIcon(event.category);
                      return (
                        <Card key={event.year} className="overflow-hidden hover:shadow-lg transition-all">
                          <CardContent className="p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                              <div className="lg:col-span-1 aspect-video lg:aspect-auto">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="lg:col-span-2 p-8">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="text-3xl font-bold text-primary">{event.year}</div>
                                    <Badge className={getCategoryColor(event.category)}>
                                      <IconComponent className="w-3 h-3 mr-1" />
                                      {event.significance}
                                    </Badge>
                                  </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                <h4 className="text-lg text-primary mb-4">{event.event}</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Timeline Stats */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Статистика по эпохам</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Ключевых событий', value: '50+', icon: Calendar },
                { label: 'Десятилетий истории', value: '5', icon: Clock },
                { label: 'Революций в индустрии', value: '12', icon: Zap },
                { label: 'Культовых игр', value: '100+', icon: Trophy }
              ].map(stat => (
                <Card key={stat.label} className="text-center p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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

export default GameHistory;