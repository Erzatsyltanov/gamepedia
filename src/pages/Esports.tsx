import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Users, DollarSign, Calendar, Star, Gamepad2, Globe, Zap } from 'lucide-react';

const esportsNews = [
  {
    id: 1,
    title: "The International 2025: Dota 2 бьет рекорды призового фонда",
    game: "Dota 2",
    date: "2025-01-25",
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png",
    excerpt: "Призовой фонд The International 2025 превысил $50 миллионов, установив новый рекорд в истории киберспорта.",
    category: "tournament",
    prizePool: "$50M+"
  },
  {
    id: 2,
    title: "League of Legends Worlds 2025: Корейское доминирование продолжается",
    game: "League of Legends",
    date: "2025-01-20",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_logo.svg/1200px-League_of_Legends_logo.svg.png",
    excerpt: "T1 выигрывает свой пятый чемпионат мира, закрепляя статус величайшей команды в истории LoL.",
    category: "tournament",
    prizePool: "$2.2M"
  },
  {
    id: 3,
    title: "CS2 Major Copenhagen: Новая эра Counter-Strike",
    game: "Counter-Strike 2",
    date: "2025-01-18",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CS2_logo.svg/1200px-CS2_logo.svg.png",
    excerpt: "Первый Major по Counter-Strike 2 показал, как новый движок меняет тактику и стратегии команд.",
    category: "tournament",
    prizePool: "$1M"
  }
];

const topPlayers = [
  {
    name: "Faker",
    realName: "Lee Sang-hyeok",
    game: "League of Legends",
    team: "T1",
    country: "Южная Корея",
    earnings: "$1.7M",
    achievements: "5x World Champion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_logo.svg/1200px-League_of_Legends_logo.svg.png"
  },
  {
    name: "s1mple",
    realName: "Oleksandr Kostyliev",
    game: "CS:GO/CS2",
    team: "NAVI",
    country: "Украина",
    earnings: "$1.2M",
    achievements: "Major Winner, #1 HLTV 2018, 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CS2_logo.svg/1200px-CS2_logo.svg.png"
  },
  {
    name: "Puppey",
    realName: "Clement Ivanov",
    game: "Dota 2",
    team: "Team Secret",
    country: "Эстония",
    earnings: "$2.1M",
    achievements: "TI1 Winner, Multiple Major Winner",
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
  }
];

const upcomingTournaments = [
  {
    name: "IEM Katowice 2025",
    game: "Counter-Strike 2",
    date: "2025-02-15",
    prizePool: "$1,000,000",
    teams: 24,
    location: "Катовице, Польша"
  },
  {
    name: "MSI 2025",
    game: "League of Legends",
    date: "2025-05-10",
    prizePool: "$250,000",
    teams: 11,
    location: "Лондон, Великобритания"
  },
  {
    name: "The International 2025",
    game: "Dota 2",
    date: "2025-08-20",
    prizePool: "$50,000,000+",
    teams: 20,
    location: "Сиэтл, США"
  }
];

const Esports = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <Trophy className="w-8 h-8 mr-3 text-primary" />
              Киберспорт
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Последние новости, турниры, команды и игроки из мира профессионального киберспорта.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Активных игроков', value: '500M+', icon: Users },
              { label: 'Призовых в 2024', value: '$200M+', icon: DollarSign },
              { label: 'Крупных турниров', value: '150+', icon: Trophy },
              { label: 'Стран участниц', value: '100+', icon: Globe }
            ].map(stat => (
              <Card key={stat.label} className="text-center p-4">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="news">Новости</TabsTrigger>
              <TabsTrigger value="tournaments">Турниры</TabsTrigger>
              <TabsTrigger value="players">Игроки</TabsTrigger>
              <TabsTrigger value="teams">Команды</TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              <div className="space-y-6">
                {/* Featured News */}
                <Card className="overflow-hidden bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-video lg:aspect-auto">
                        <img 
                          src={esportsNews[0].image}
                          alt={esportsNews[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                          🏆 ГЛАВНАЯ НОВОСТЬ
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                          {esportsNews[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {esportsNews[0].excerpt}
                        </p>
                        <div className="flex items-center space-x-4 mb-6">
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {esportsNews[0].prizePool}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(esportsNews[0].date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 w-fit">
                          Читать подробнее
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Other News */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {esportsNews.slice(1).map(news => (
                    <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{news.game}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(news.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {news.prizePool}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Читать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tournaments">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Предстоящие турниры</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingTournaments.map((tournament, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{tournament.game}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(tournament.date).toLocaleDateString('ru-RU')}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{tournament.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Призовой фонд:</span>
                            <span className="font-semibold text-green-600">{tournament.prizePool}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Команд:</span>
                            <span className="font-semibold">{tournament.teams}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Место:</span>
                            <span className="font-semibold text-sm">{tournament.location}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="players">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Топ игроки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topPlayers.map((player, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <img
                              src={player.image}
                              alt={player.game}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{player.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{player.realName}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Игра:</span>
                            <Badge variant="outline">{player.game}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Команда:</span>
                            <span className="font-semibold">{player.team}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Страна:</span>
                            <span className="font-semibold">{player.country}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Заработок:</span>
                            <span className="font-semibold text-green-600">{player.earnings}</span>
                          </div>
                          <div className="pt-2 border-t">
                            <p className="text-xs text-muted-foreground mb-1">Достижения:</p>
                            <p className="text-sm font-medium">{player.achievements}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="teams">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Топ команды</h2>
                <div className="text-center py-16">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">Раздел в разработке</h3>
                  <p className="text-muted-foreground">
                    Информация о командах будет добавлена в ближайшее время
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Esports;