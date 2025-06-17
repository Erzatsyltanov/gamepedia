import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    id: 1,
    title: "Stellar Blade стала самой продаваемой игрой 2025 года",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    date: "25 января 2025",
    excerpt: "Экшен от Shift Up превзошел все ожидания, продавшись тиражом более 8 миллионов копий за первый месяц. Игра получила высокие оценки критиков и стала настоящим феноменом.",
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
    title: "Sony и PlayStation: Sony сняла региональные ограничения для некоторых игр",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-white-front-view-01-en-14sep21?$native--t$",
    date: "18 января 2025",
    excerpt: "Sony Interactive Entertainment объявила о снятии региональных ограничений для ряда игр в PlayStation Store.",
    link: "/news/sony-regional-restrictions"
  },
  {
    id: 4,
    title: "MindsEye: Шпионский экшен MindsEye получил негативные отзывы",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1234567/header.jpg",
    date: "15 января 2025",
    excerpt: "Долгожданный шпионский экшен MindsEye разочаровал критиков и игроков техническими проблемами и слабым геймплеем.",
    link: "/news/mindseye-negative-reviews"
  },
  {
    id: 5,
    title: "Clair Obscur: Expedition 33: Ролевая игра от Sandfall Interactive продала миллион копий за три дня",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2345678/header.jpg",
    date: "12 января 2025",
    excerpt: "Французская студия Sandfall Interactive празднует невероятный успех своей дебютной RPG, которая получила высокие оценки критиков.",
    link: "/news/clair-obscur-expedition-33-success"
  }
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Stellar Blade Success Banner */}
          <Card className="mb-12 overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-primary/30">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png"
                    alt="Stellar Blade"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                    🏆 ИГРА ГОДА 2025
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Stellar Blade — феномен года!
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Экшен от Shift Up стал самой продаваемой игрой 2025 года с тиражом более 8 миллионов копий. 
                    Критики и игроки единогласно признали её шедевром жанра.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">8M+</div>
                      <div className="text-sm text-muted-foreground">Продано копий</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">95/100</div>
                      <div className="text-sm text-muted-foreground">Metacritic</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">#1</div>
                      <div className="text-sm text-muted-foreground">В чартах</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 w-fit" asChild>
                    <a href="/news/stellar-blade-success">Читать подробнее</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Новости игровой индустрии</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Самые свежие новости о релизах, анонсах, обновлениях и событиях в мире видеоигр.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map(news => (
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
      </main>

      <Footer />
    </div>
  );
};

export default News;