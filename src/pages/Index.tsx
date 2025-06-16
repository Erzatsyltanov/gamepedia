import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import NewsCard from '@/components/NewsCard';
import { Gamepad2, Users, TrendingUp, Star, ArrowRight, Play, BookOpen, Trophy } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  link: string;
}

const latestNews: NewsItem[] = [
  {
    id: 1,
    title: "Stellar Blade стала самой продаваемой игрой 2025 года",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    date: "25 января 2025",
    excerpt: "Экшен от Shift Up превзошел все ожидания, продавшись тиражом более 8 миллионов копий за первый месяц.",
    link: "/news/stellar-blade-success"
  },
  {
    id: 2,
    title: "Nintendo Switch 2 официально анонсирована",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74F-fljhpXasSm4XsIsdMh-TB86LmU2UqPQ&s",
    date: "20 января 2025",
    excerpt: "Nintendo представила новую консоль с поддержкой 4K и улучшенной производительностью.",
    link: "/news/nintendo-switch-2"
  },
  {
    id: 3,
    title: "GTA VI получила новый трейлер геймплея",
    image: "https://media.riamo.ru/get_resized/Sk-pjIp3N7ZO5mMLhgnMdmW-AMo=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS81L2ltYWdlLnBuZw.webp",
    date: "15 января 2025",
    excerpt: "Rockstar Games показала 10 минут геймплея долгожданной GTA VI.",
    link: "/news/gta-vi-gameplay"
  },
  {
    id: 4,
    title: "The Elder Scrolls VI показали первый геймплей",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2623190/67e60b0125feb2f0cc6964f0acb785faf1207fbd/capsule_616x353.jpg?t=1745345472",
    date: "8 января 2025",
    excerpt: "Bethesda наконец показала геймплей долгожданной The Elder Scrolls VI.",
    link: "/news/elder-scrolls-vi"
  }
];

const stats = [
  { icon: Gamepad2, label: "Игровых франшиз", value: "15+" },
  { icon: Users, label: "Персонажей", value: "50+" },
  { icon: BookOpen, label: "Статей", value: "200+" },
  { icon: Trophy, label: "Геймдизайнеров", value: "10+" }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Star className="w-4 h-4 mr-2" />
                    Энциклопедия мира видеоигр
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                      GamePulse
                    </span>
                    <br />
                    <span className="text-foreground">Ваш гид в мире игр</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    Откройте для себя увлекательные истории, персонажей и вселенные ваших любимых видеоигр. 
                    Присоединяйтесь к сообществу геймеров и делитесь своими знаниями.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white">
                    <Link to="/franchises">
                      <Gamepad2 className="w-5 h-5 mr-2" />
                      Исследовать игры
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/submit-article">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Добавить статью
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                    {['Final Fantasy', 'Zelda', 'Mario', 'Sonic', 'Halo', 'GTA'].map((game, i) => (
                      <div key={i} className="bg-background/40 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer">
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
        </section>

        {/* Featured Games */}
        <FeaturedGames />

        {/* Latest News */}
        <section className="py-16 bg-secondary/25">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние новости</h2>
                <p className="text-muted-foreground text-lg">Самые свежие события из мира видеоигр</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/news">
                  Все новости
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map(news => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  image={news.image}
                  date={news.date}
                  excerpt={news.excerpt}
                  link={news.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к сообществу</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                GamePulse — это не просто энциклопедия, это живое сообщество геймеров, 
                где каждый может поделиться своими знаниями и открытиями.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Создавайте статьи</h3>
                  <p className="text-muted-foreground">
                    Поделитесь своими знаниями об играх, персонажах и игровых вселенных
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/submit-article">Написать статью</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Обсуждайте</h3>
                  <p className="text-muted-foreground">
                    Участвуйте в дискуссиях и делитесь мнениями с другими геймерами
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/community">Присоединиться</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Следите за трендами</h3>
                  <p className="text-muted-foreground">
                    Будьте в курсе последних новостей и тенденций игровой индустрии
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/news">Читать новости</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                GamePulse — потому что каждая игра заслуживает свою страницу
              </h2>
              <p className="text-xl text-muted-foreground">
                Откройте для себя удивительный мир видеоигр вместе с нами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
                  <Link to="/franchises">
                    <Play className="w-5 h-5 mr-2" />
                    Начать исследование
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;