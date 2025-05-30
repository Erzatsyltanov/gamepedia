import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';

const newsItems = [
  {
    id: 1,
    title: "Assassin's Creed Shadows стала крупнейшим запуском в истории франшизы",
    image: "https://cms-assets.xboxservices.com/assets/f7/75/f7759371-ffd8-429c-b858-e3e3242fa547.jpg?n=343859994_GLP-Page-Hero-1084_1920x1080.jpg",
    date: "20 мая 2025",
    excerpt: "Более 1 миллиона игроков в день релиза и 3 миллиона за первую неделю. Игра возглавила чарты продаж в США и Великобритании и превзошла Assassin's Creed Odyssey по доходам и числу игроков.",
    link: "/news/assassins-creed-shadows-launch"
  },
  {
    id: 2,
    title: "The Elder Scrolls IV: Oblivion Remaster выйдет в сентябре",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2623190/67e60b0125feb2f0cc6964f0acb785faf1207fbd/capsule_616x353.jpg?t=1745345472",
    date: "18 мая 2025",
    excerpt: "Bethesda объявила дату выхода ремастера культовой ролевой игры. Обновленная версия будет включать все дополнения и улучшенную графику.",
    link: "/news/elder-scrolls-oblivion-remaster"
  },
  {
    id: 3,
    title: "GTA VI официально перенесена на май 2026 года",
    image: "https://media.riamo.ru/get_resized/Sk-pjIp3N7ZO5mMLhgnMdmW-AMo=/1920x1080/filters:rs(fill-down):format(webp)/YXJ0aWNsZXMvaW1hZ2UvMjAyNS81L2ltYWdlLnBuZw.webp",
    date: "17 мая 2025",
    excerpt: "Rockstar Games объявила о переносе релиза GTA VI. Компания сообщает, что дополнительное время необходимо для доработки игры до нужного уровня качества.",
    link: "/news/gta-vi-delayed"
  },
  {
    id: 4,
    title: "Nintendo Switch 2 будет поддерживать 4K-графику",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKupuabmzzyjTj-ITiYapikgy3lnk2rFZ-8Q&s",
    date: "15 мая 2025",
    excerpt: "Новая консоль от Nintendo получит улучшенную производительность. Релиз ожидается в конце 2025 года. Crazy Games подтвердили разработку для новой консоли.",
    link: "/news/nintendo-switch-2-features"
  },
  {
    id: 5,
    title: "Minecraft получил крупное обновление End Dimension",
    image: "https://mineboxes.ru/wp-content/uploads/2021/07/cropped-apps.14.14114766795216147.2000000000007965473.jpg",
    date: "10 мая 2025",
    excerpt: "Новые биомы, мобы и сюжетные элементы расширяют возможности исследования в популярной песочнице. Обновление доступно на всех платформах.",
    link: "/news/minecraft-end-dimension-update"
  },
  {
    id: 6,
    title: "DOOM: The Dark Ages анонсирован на QuakeCon",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/bb3f89ae3425f3aa86041ff71646fc5d44d7705f3a383427.jpg",
    date: "5 мая 2025",
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
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Новости игровой индустрии</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Самые свежие новости  релизах, анонсах, обновлениях и событиях в мире видеоигр.
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
