import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsCard from '@/components/NewsCard';

const latestNews = [
  {
    id: 1,
    title: "Stellar Blade стала самой продаваемой игрой 2025 года",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    date: "25 января 2025",
    excerpt: "Экшен от Shift Up превзошел все ожидания, продавшись тиражом более 8 миллионов копий за первый месяц. Игра получила высокие оценки критиков и стала настоящим феноменом.",
    link: ""
  },
  {
    id: 2,
    title: "Nintendo Switch 2 официально анонсирована",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74F-fljhpXasSm4XsIsdMh-TB86LmU2UqPQ&s",
    date: "20 января 2025",
    excerpt: "Nintendo представила новую консоль с поддержкой 4K и улучшенной производительностью. Релиз запланирован на конец 2025 года.",
    link: ""
  },
  {
    id: 3,
    title: "GTA VI получила новый трейлер геймплея",
    image: "https://media.riamo.ru/get_resized/Sk-pjIp3N7ZO5mMLhgnMdmW-AMo=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS81L2ltYWdlLnBuZw.webp",
    date: "15 января 2025",
    excerpt: "Rockstar Games показала 10 минут геймплея долгожданной GTA VI. Релиз по-прежнему запланирован на 2026 год.",
    link: ""
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        <FeaturedGames />

        {/* Latest News Section */}
        <section className="py-12 md:py-16 bg-secondary/25">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Последние новости</h2>
              <Button variant="outline" asChild>
                <Link to="/news">Все новости</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">На GamePulse вы найдёте</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-secondary/25 rounded-lg p-6 hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Подробные статьи</h3>
                <p className="text-muted-foreground">О популярных играх всех жанров и платформ</p>
              </div>

              <div className="bg-secondary/25 rounded-lg p-6 hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 7h-9"/>
                    <path d="M14 17H5"/>
                    <circle cx="17" cy="17" r="3"/>
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Истории персонажей</h3>
                <p className="text-muted-foreground">Биографии героев, вселенных и фракций</p>
              </div>

              <div className="bg-secondary/25 rounded-lg p-6 hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 5v14H5V5h14Z"/>
                    <path d="M9 5v14"/>
                    <path d="M5 9h14"/>
                    <path d="M5 19h14"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Новости индустрии</h3>
                <p className="text-muted-foreground">Актуальная информация о мире игр</p>
              </div>

              <div className="bg-secondary/25 rounded-lg p-6 hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                    <path d="M8.5 8.5v.01"/>
                    <path d="M16 15.5v.01"/>
                    <path d="M12 12v.01"/>
                    <path d="M11 17v.01"/>
                    <path d="M7 14v.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Рейтинг игр</h3>
                <p className="text-muted-foreground">По мнению сообщества и критиков</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              GamePulse — потому что каждая игра заслуживает свою страницу
            </h2>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
              <Link to="/franchises">Исследовать видеоигры</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;