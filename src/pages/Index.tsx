import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import NewsCard from '@/components/NewsCard';
import { Gamepad2, Users, TrendingUp, Star, ArrowRight, Play, BookOpen, Trophy, Zap, Award, Globe } from 'lucide-react';

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
    title: "The Witcher 4: CD Projekt RED продемонстрировала техническую демо-версию",
    image: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpTN9TEyHVAM9eeF.jpg",
    date: "20 января 2025",
    excerpt: "CD Projekt RED показала впечатляющую техническую демонстрацию новой части The Witcher на движке Unreal Engine 5.",
    link: "/news/witcher-4-tech-demo"
  },
  {
    id: 3,
    title: "Sony сняла региональные ограничения для некоторых игр",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-white-front-view-01-en-14sep21?$native--t$",
    date: "18 января 2025",
    excerpt: "Sony Interactive Entertainment объявила о снятии региональных ограничений для ряда игр в PlayStation Store.",
    link: "/news/sony-regional-restrictions"
  },
  {
    id: 4,
    title: "Clair Obscur: Expedition 33 продала миллион копий за три дня",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2345678/header.jpg",
    date: "12 января 2025",
    excerpt: "Французская студия Sandfall Interactive празднует невероятный успех своей дебютной RPG.",
    link: "/news/clair-obscur-expedition-33-success"
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
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
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
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all">
                    <Link to="/franchises">
                      <Gamepad2 className="w-5 h-5 mr-2" />
                      Исследовать игры
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 hover:bg-primary/5">
                    <Link to="/submit-article">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Добавить статью
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 hover:shadow-3xl transition-shadow">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                    {['Final Fantasy', 'Zelda', 'Mario', 'Sonic', 'Halo', 'GTA'].map((game, i) => (
                      <div key={i} className="bg-background/40 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center text-sm font-medium hover:bg-primary/20 transition-all cursor-pointer hover:scale-105">
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
            {/* New Features Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Новые возможности</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Откройте для себя улучшенный GamePulse с новыми функциями для лучшего игрового опыта
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Быстрый поиск</h3>
                    <p className="text-muted-foreground">
                      Мгновенно находите игры, персонажей и статьи с помощью умного поиска
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Система рейтингов</h3>
                    <p className="text-muted-foreground">
                      Оценивайте игры и персонажей, делитесь мнением с сообществом
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Социальные функции</h3>
                    <p className="text-muted-foreground">
                      Комментируйте, делитесь и добавляйте в избранное любимый контент
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к сообществу</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                GamePulse — это не просто энциклопедия, это живое сообщество геймеров, 
                где каждый может поделиться своими знаниями и открытиями.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-all hover:scale-105">
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

              <Card className="text-center p-8 hover:shadow-lg transition-all hover:scale-105">
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

              <Card className="text-center p-8 hover:shadow-lg transition-all hover:scale-105">
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
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
                  <Link to="/franchises">
                    <Play className="w-5 h-5 mr-2" />
                    Начать исследование
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 hover:bg-primary/5">
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