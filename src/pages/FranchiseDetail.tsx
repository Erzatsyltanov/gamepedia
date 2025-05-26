import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

// Move the franchises array to a separate file for reusability
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbhn:ANd9GcSMRJvKDCGk3PE4FaNltoC92otLxb7qf3505w&s",
    description: "Психологический триллер от Remedy Entertainment о писателе, сражающемся с темными силами в маленьком городке Брайт-Фоллс.",
    link: "/franchises/alan-wake"
  },
  {
    id: 4,
    title: "The Legend of Zelda",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/The_Legend_of_Zelda_Logo.png",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbhn:ANd9GcTjFulvDHj4G98JSvBbJLRaoNg_GJFSC4aTGw&s",
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

const FranchiseDetail = () => {
  const { title } = useParams();
  const franchise = franchises.find(f => f.link === `/franchises/${title}`);

  if (!franchise) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 text-center">
          <h1 className="text-3xl font-bold">Franchise Not Found</h1>
          <p className="text-muted-foreground mt-4">Sorry, the franchise you're looking for doesn't exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <img
                src={franchise.image}
                alt={franchise.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h1 className="text-3xl font-bold mb-2">{franchise.title}</h1>
              <p className="text-foreground">{franchise.description}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FranchiseDetail;