```tsx
import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsCard from '@/components/NewsCard';

// Define interface for news items
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
    excerpt: "Экшен от Shift Up превзошел все ожидания, продавшись тиражом более 8 миллионов копий за первый месяц. Игра получила высокие оценки критиков и стала настоящим феноменом.",
    link: ""
  },
  {
    id: 4,
    title: "Новый патч для Elden Ring добавляет кооперативный режим",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1719/1bY1hJlr0oz0oG4SW28e1M8x.png",
    date: "10 февраля 2025",
    excerpt: "FromSoftware выпустила обновление для Elden Ring, добавляющее долгожданный кооперативный режим для совместного прохождения подземелий.",
    link: ""
  },
  {
    id: 5,
    title: "Cyberpunk 2077: сиквел в разработке",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/2515/8JZdJ2nZ3xQJy5j69M3F5e9F.png",
    date: "5 февраля 2025",
    excerpt: "CD Projekt Red подтвердила начало разработки продолжения Cyberpunk 2077. Ожидается более глубокая RPG-механика и улучшенная графика.",
    link: ""
  },
  {
    id: 6,
    title: "Valve анонсировала Half-Life 3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z3f3z3f3z3f3z3f3z3f3z3f3z3f3z3f3z3&s",
    date: "1 февраля 2025",
    excerpt: "После долгих лет ожиданий Valve официально подтвердила разработку Half-Life 3 с использованием нового движка Source 3.",
    link: ""
  }
];

const Index: React.FC = () => {
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

        {/* About GamePulse Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">О GamePulse</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                GamePulse — это ваш главный источник новостей, обзоров и историй из мира видеоигр. Мы стремимся предоставлять самую актуальную информацию о новинках игровой индустрии, глубокие аналитические статьи и захватывающие рассказы о персонажах и вселенных.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша миссия — объединить сообщество геймеров, предоставляя платформу, где каждый может найти что-то для себя: от новостей о грядущих релизах до рейтингов лучших игр по версии критиков и игроков.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Узнать больше</Link>
              </Button>
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
```

**Changes Made**:
- Removed the GTA VI and Nintendo Switch 2 news articles, keeping the four remaining articles.
- Added a `NewsItem` interface to type the `latestNews` array for TypeScript.
- Typed the `Index` component as `React.FC` for proper TypeScript support.
- Adjusted the grid layout to `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for better responsiveness with four news items.
- Changed the file extension to `.tsx` in the artifact metadata.

**Next Steps for Error Resolution**:
- If you're still seeing errors, please share the specific error message from your editor or build tool (e.g., Vite, Webpack, or `tsc`).
- Verify that `NewsCard` accepts props matching the `NewsItem` interface. For example, ensure `NewsCard` is typed like:
  ```tsx
  interface NewsCardProps {
    title: string;
    image: string;
    date: string;
    excerpt: string;
    link: string;
  }
  const NewsCard: React.FC<NewsCardProps> = ({ title, image, date, excerpt, link }) => { ... };
  ```
- Check if your IDE (e.g., VSCode) is using the correct TypeScript version and has the project’s `tsconfig.json` loaded.

Let me know if you need further debugging help or additional changes!