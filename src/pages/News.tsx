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
  },
  {
    id: 6,
    title: "Nintendo Direct: Анонсированы новые игры для Switch 2",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    date: "10 января 2025",
    excerpt: "Nintendo представила новые игры для грядущей консоли Switch 2, включая новую часть Mario Kart и ремастер Metroid Prime 4.",
    link: "/news/nintendo-direct-switch-2"
  },
  {
    id: 7,
    title: "Microsoft приобрела студию Remedy Entertainment",
    image: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpTN9TEyHVAM9eeF-970-80.jpg.webp",
    date: "8 января 2025",
    excerpt: "Microsoft объявила о покупке финской студии Remedy Entertainment, создателей Alan Wake и Control, за 2.5 миллиарда долларов.",
    link: "/news/microsoft-remedy-acquisition"
  },
  {
    id: 8,
    title: "Elden Ring: Shadow of the Erdtree получило награду 'DLC года'",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg",
    date: "6 января 2025",
    excerpt: "Дополнение к Elden Ring от FromSoftware было признано лучшим DLC 2024 года на церемонии Game Awards.",
    link: "/news/elden-ring-dlc-award"
  },
  {
    id: 9,
    title: "Steam установил новый рекорд одновременных пользователей",
    image: "https://cdn.cloudflare.steamstatic.com/store/home/store_home_share.jpg",
    date: "4 января 2025",
    excerpt: "Платформа Steam достигла отметки в 35 миллионов одновременных пользователей во время новогодних праздников.",
    link: "/news/steam-record-users"
  },
  {
    id: 10,
    title: "Cyberpunk 2077: Phantom Liberty продано более 5 миллионов копий",
    image: "https://images.gog-statics.com/5643a7c831df452d29005caeca24c231d2d90b122e61d6dd2e6c5a9e0b56b3b6.jpg",
    date: "2 января 2025",
    excerpt: "Дополнение Phantom Liberty для Cyberpunk 2077 стало самым успешным DLC в истории CD Projekt RED.",
    link: "/news/cyberpunk-phantom-liberty-sales"
  },
  {
    id: 11,
    title: "Valve анонсировала Steam Deck 2 с поддержкой 4K",
    image: "https://cdn.cloudflare.steamstatic.com/steamdeck/images/steamdeck_hero_01.jpg",
    date: "30 декабря 2024",
    excerpt: "Новое поколение портативной консоли Steam Deck получит более мощный процессор и поддержку 4K-вывода на внешние дисплеи.",
    link: "/news/steam-deck-2-announcement"
  },
  {
    id: 12,
    title: "Final Fantasy VII Rebirth выйдет на PC в марте 2025",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/2532f82b8ad474c5e7c9b5b6e2d9d0b8b5c5c5c5.png",
    date: "28 декабря 2024",
    excerpt: "Square Enix подтвердила выход Final Fantasy VII Rebirth на PC с улучшенной графикой и дополнительным контентом.",
    link: "/news/ff7-rebirth-pc-release"
  },
  {
    id: 13,
    title: "Rockstar Games тизерит новый проект после GTA VI",
    image: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/gtavi.jpg",
    date: "26 декабря 2024",
    excerpt: "Rockstar Games намекнула на разработку нового проекта, который может оказаться продолжением Red Dead Redemption.",
    link: "/news/rockstar-new-project-tease"
  },
  {
    id: 14,
    title: "Baldur's Gate 3 получила крупное обновление с новыми классами",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    date: "24 декабря 2024",
    excerpt: "Larian Studios выпустила масштабное обновление для Baldur's Gate 3, добавив два новых класса персонажей и множество улучшений.",
    link: "/news/baldurs-gate-3-update"
  },
  {
    id: 15,
    title: "Halo Infinite получит кампанию в кооперативе в 2025 году",
    image: "https://assets.xboxservices.com/assets/fb/d2/fbd2cb8e-9c59-4ee6-b5c7-e8c6b4b4b4b4.jpg",
    date: "22 декабря 2024",
    excerpt: "343 Industries объявила о добавлении долгожданного кооперативного режима для кампании Halo Infinite в первом квартале 2025 года.",
    link: "/news/halo-infinite-coop-campaign"
  },
  {
    id: 16,
    title: "Assassin's Creed Shadows перенесена на май 2025 года",
    image: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KTgHrz8RHxYm4aCGKKgmY/61ae0c0e38d8b2c6e0d5c5c5c5c5c5c5/ac-shadows-hero.jpg",
    date: "20 декабря 2024",
    excerpt: "Ubisoft перенесла релиз Assassin's Creed Shadows для дополнительной полировки и исправления технических проблем.",
    link: "/news/ac-shadows-delay"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Загрузить еще новости
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;