
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameCard from '@/components/GameCard';

const franchises = [
  {
    id: 1,
    title: "Final Fantasy",
    image: "https://bymoonlightblog.wordpress.com/wp-content/uploads/2017/01/final-fantasy-logo.jpg?w=531&h=310",
    description: "Культовая японская ролевая серия, существующая с 1987 года, известная своими эпическими сюжетами и инновационными игровыми механиками.",
    link: "/franchises/final-fantasy"
  },
  {
    id: 2,
    title: "Call of Duty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9LOS26uwgk76EUEYQ1AZNOGzfvMtvxihw&s",
    description: "Популярная серия шутеров от первого лица, охватывающая различные военные конфликты от Второй мировой войны до футуристических сценариев.",
    link: "/franchises/call-of-duty"
  },
  {
    id: 3,
    title: "Alan Wake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRJvKDCGk3PE4FaNltoC92otLxb7qf3505w&s",
    description: "Психологический триллер от Remedy Entertainment о писателе, сражающемся с темными силами в маленьком городке Брайт-Фоллс.",
    link: "/franchises/alan-wake"
  },
  {
    id: 4,
    title: "The Legend of Zelda",
    image: "data:image/png;base64,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RURERERERERERERERERERERERERERERERERERERERERERPSL/wHtG9iHn8lYrgAAAABJRU5ErkJggg==",
    description: "Легендарная серия приключенческих игр от Nintendo, следующая за героем по имени Линк в его квесте по спасению принцессы Зельды.",
    link: "/franchises/zelda"
  },
  {
    id: 5,
    title: "NieR и Drakengard",
    image: "https://i.ytimg.com/vi/ASpgNWtfJTM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvLKmNhbTB3RuTqCYgQlvie_RuIA",
    description: "Серия от Ёко Таро, известная своими философскими сюжетами, необычным повествованием и уникальным сочетанием жанров.",
    link: "/franchises/nier-drakengard"
  },
  {
    id: 6,
    title: "Yakuza / Like a Dragon",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Yakuza_logo.jpg",
    description: "Серия боевиков от SEGA, сочетающая драматический сюжет о японской мафии с открытым миром и множеством побочных активностей.",
    link: "/franchises/yakuza"
  },
  {
    id: 7,
    title: "Halo",
    image: "https://images.seeklogo.com/logo-png/40/1/halo-logo-png_seeklogo-403346.png",
    description: "Научно-фантастическая серия шутеров от Microsoft, рассказывающая о войне человечества с инопланетным альянсом Ковенант.",
    link: "/franchises/halo"
  },
  {
    id: 8,
    title: "Resident Evil",
    image: "https://assets.xboxservices.com/assets/ff/f7/fff7298c-57ec-459c-a33b-fb0089aeddd6.jpg?n=MSXC-ResidentEvilTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg",
    description: "Культовая серия хорроров от Capcom, определившая жанр survival horror и рассказывающая о борьбе с биологическим оружием корпорации Umbrella.",
    link: "/franchises/resident-evil"
  },
  {
    id: 9,
    title: "Half-Life",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kl5T9WUQAhfZQhbZx6M-H5yfnnB-sPjhHw&s",
    description: "Революционная серия шутеров от Valve, известная своим повествованием без катсцен и инновационным геймплеем.",
    link: "/franchises/half-life"
  },
  {
    id: 10,
    title: "Grand Theft Auto",
    image: "https://fabrikbrands.com/wp-content/uploads/Grand-Theft-Auto-Logo-1-1155x770.png",
    description: "Культовая криминальная серия с открытым миром от Rockstar Games, ставшая культурным феноменом и известная своей сатирой на американское общество.",
    link: "/franchises/gta"
  },
  {
    id: 11,
    title: "Assassin's Creed",
    image: "https://static.vecteezy.com/system/resources/previews/029/337/389/non_2x/assassin-s-creed-logo-free-vector.jpg",
    description: "Серия исторических боевиков от Ubisoft об извечной борьбе ассасинов и тамплиеров, разворачивающаяся в различных исторических эпохах.",
    link: "/franchises/assassins-creed"
  },
  {
    id: 12,
    title: "Red Dead Redemption",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKm4bWxPrKHkYtEwR60QmsV4Co7LNieBJMQ&s",
    description: "Вестерн с открытым миром от Rockstar Games, повествующий о закате эпохи Дикого Запада и судьбах его обитателей.",
    link: "/franchises/red-dead-redemption"
  },
  {
    id: 13,
    title: "Minecraft",
    image: "https://fabrikbrands.com/wp-content/uploads/Minecraft-Logo-9-1200x750.png",
    description: "Феноменально популярная песочница от Mojang, позволяющая игрокам создавать и исследовать процедурно генерируемые миры из блоков.",
    link: "/franchises/minecraft"
  },
  {
    id: 14,
    title: "Sonic the Hedgehog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFulvDHj4G98JSvBbJLRaoNg_GJFSC4aTGw&s",
    description: "Культовая серия платформеров от SEGA о сверхскоростном синем ежике, соперничающем с Nintendo's Mario.",
    link: "/franchises/sonic"
  },
  {
    id: 15,
    title: "Forza",
    image: "https://i.pinimg.com/736x/47/0b/a2/470ba2a0278efee802d718e83c89e066.jpg",
    description: "Премиальные гоночные симуляторы от Microsoft, разделенные на две линейки: симулятор Motorsport и аркадный Horizon с открытым миром.",
    link: "/franchises/forza"
  }
];
const Franchises = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Игровые франшизы</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Культовые серии игр, оставившие неизгладимый след в истории индустрии и сердцах геймеров.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {franchises.map(franchise => (
              <GameCard
                key={franchise.id}
                title={franchise.title}
                image={franchise.image}
                description={franchise.description}
                link={franchise.link}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Franchises;

