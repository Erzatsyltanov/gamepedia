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
    title: "Assassin's Creed Shadows стала крупнейшим запуском в истории франшизы",
    image: "",
    date: "20 мая 2025",
    excerpt: "Более 1 миллиона игроков в день релиза и 3 миллиона за первую неделю. Игра возглавила чарты продаж в США и Великобритании.",
    link: "/news/assassins-creed-shadows-launch"
  },
  {
    id: 2,
    title: "Nintendo Switch 2 будет поддерживать 4K-графику",
    image: "",
    date: "15 мая 2025",
    excerpt: "Новая консоль от Nintendo получит улучшенную производительность. Релиз ожидается в конце 2025 года.",
    link: "/news/nintendo-switch-2-features"
  },
  {
    id: 3,
    title: "Minecraft получил крупное обновление End Dimension",
    image: "",
    date: "10 мая 2025",
    excerpt: "Новые биомы, мобы и сюжетные элементы расширяют возможности исследования в популярной песочнице.",
    link: "/news/minecraft-end-dimension-update"
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">На Gamepedia вы найдёте</h2>

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
              Gamepedia — потому что каждая игра заслуживает свою страницу
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
