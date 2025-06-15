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
    title: "Nintendo Switch 2 официально анонсирована",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74F-fljhpXasSm4XsIsdMh-TB86LmU2UqPQ&s",
    date: "20 января 2025",
    excerpt: "Nintendo представила новую консоль с поддержкой 4K и улучшенной производительностью. Релиз запланирован на конец 2025 года.",
    link: "/news/nintendo-switch-2-announced"
  },
  {
    id: 3,
    title: "GTA VI получила новый трейлер геймплея",
    image: "https://media.riamo.ru/get_resized/Sk-pjIp3N7ZO5mMLhgnMdmW-AMo=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS81L2ltYWdlLnBuZw.webp",
    date: "15 января 2025",
    excerpt: "Rockstar Games показала 10 минут геймплея долгожданной GTA VI. Релиз по-прежнему запланирован на 2026 год.",
    link: "/news/gta-vi-gameplay-trailer"
  },
  {
    id: 4,
    title: "Assassin's Creed Shadows получила дату релиза",
    image: "https://cms-assets.xboxservices.com/assets/f7/75/f7759371-ffd8-429c-b858-e3e3242fa547.jpg?n=343859994_GLP-Page-Hero-1084_1920x1080.jpg",
    date: "12 января 2025",
    excerpt: "Ubisoft объявила, что новая часть серии выйдет 14 февраля 2025 года. Игра перенесет игроков в феодальную Японию.",
    link: "/news/assassins-creed-shadows-release-date"
  },
  {
    id: 5,
    title: "The Elder Scrolls VI показали первый геймплей",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2623190/67e60b0125feb2f0cc6964f0acb785faf1207fbd/capsule_616x353.jpg?t=1745345472",
    date: "8 января 2025",
    excerpt: "Bethesda наконец показала геймплей долгожданной The Elder Scrolls VI на Game Awards 2024. Релиз ожидается в 2027 году.",
    link: "/news/elder-scrolls-vi-gameplay"
  },
  {
    id: 6,
    title: "DOOM: The Dark Ages анонсирован на QuakeCon",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/bb3f89ae3425f3aa86041ff71646fc5d44d7705f3a383427.jpg",
    date: "5 января 2025",
    excerpt: "id Software представила новую часть культовой серии шутеров. Действие игры развернется в альтернативном средневековье.",
    link: "/news/doom-dark-ages-announced"
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
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 w-fit">
                    Читать подробнее
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