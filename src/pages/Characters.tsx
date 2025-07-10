import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const characters = [
  {
    id: 1,
    name: "2B",
    game: "NieR: Automata",
    image: "https://avatars.mds.yandex.net/i?id=a117f35e9aba409740463a5c86d0d5bc9d3de279-5213357-images-thumbs&n=13",
    description: "YoRHa No.2 Type B (яп. ヨルハ二号B型 Ёруха Ни-го Би: гата) или же 2B — один из главных персонажей компьютерной игры NieR: Automata, разработанной студией Platinum Games. Является боевым андроидом женского пола, созданным для освобождения Земли от захвативших её машин. Действует в составе элитного подразделения YoRHa.2B опытный боец и легко ориентируется в стремительной обстановке. Она в совершенстве владеет ближним боем (способна фехтовать двумя мечами одновременно), обладает повышенной прочностью и имеет высокие навыки пилотирования джета. Все перечисленное позволяет ей противостоять противникам, во много превосходящим её размером и силойНастоящее имя 2B — 2E (Executioner). Её истинным предназначением является сопровождение андроида-сканера 9S и его последующее устранение если тот со свойственным его модели любопытством, обнаружит секретную информацию о проекте YoRHa[3]. Несмотря на то, что 2B испытывает симпатию к 9S, за все время она была вынуждена 48 раз убить и стереть тому память[4]. Каждый новый цикл отношений с ним все сильнее отдавался в сердце девушки, из-за чего та намеренно старалась отдалиться от андроида и не привязываться к нему вновь[5].Благодаря запоминающейся внешности, сдержанному характеру и проработанной истории 2B стала культовым персонажем игровой индустрии[6], а её образ пришёлся по душе аудитории, став объектом косплея."
  },
  {
    id: 2,
    name: "Марио",
    game: "Super Mario",
    image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9632107/mario.jpg?quality=90&strip=all&crop=7.6470588235294,0,84.705882352941,100", // Replace with valid image URL
    description: "Итальянский сантехник, талисман Nintendo и один из самых узнаваемых персонажей в истории видеоигр."
  },
  {
    id: 3,
    name: "Пикачу",
    game: "Pokémon",
    image: "https://avatars.mds.yandex.net/i?id=6296b4454b71ba42f24978614fd58bb904bb177d-6357502-images-thumbs&n=13",
    description: "Электрический покемон-талисман франшизы Pokémon, известный своей милой внешностью и фирменной атакой молнией."
  },
  {
    id: 4,
    name: "Соник",
    game: "Sonic the Hedgehog",
    image: "https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-seck-p-kartinki-sonik-na-prozrachnom-fone-1.png", 
    description: "Сверхскоростной синий ёж, талисман SEGA и главный соперник Марио в 90-е годы."
  },
  {
    id: 5,
    name: "Линк",
    game: "The Legend of Zelda",
    image: "https://avatars.mds.yandex.net/i?id=2d83337f82f3dd7bf290a983da3a2167fd072e63-8201030-images-thumbs&n=13",
    description: "Герой Хайрула в зеленом, путешествующий через времена и миры для спасения принцессы Зельды."
  },
  {
    id: 6,
    name: "Лара Крофт",
    game: "Tomb Raider",
    image: "https://avatars.mds.yandex.net/i?id=5b4cde2de11708dec6974c1a8d0af553875d090c-5634817-images-thumbs&n=13",
    description: "Бесстрашная исследовательница гробниц и археолог, ставшая одной из первых популярных женских протагонистов в видеоиграх."
  },
  {
    id: 7,
    name: "Кратос",
    game: "God of War",
    image: "https://avatars.mds.yandex.net/i?id=53cea966497485bc00f6318b4f0188c8c41d10d1-9855166-images-thumbs&n=13",
    description: "Бывший спартанский воин, ставший богом войны и впоследствии переселившийся в миры скандинавской мифологии."
  },
  {
    id: 8,
    name: "Саб-Зиро / Скорпион",
    game: "Mortal Kombat",
    image: "https://avatars.mds.yandex.net/i?id=5c6177aa97076cb37e178e9ddd9628abf717d8cc-11951022-images-thumbs&n=13",
    description: "Культовые ниндзя из серии Mortal Kombat, ставшие символами франшизы и вечными соперниками."
  },
  {
    id: 9,
    name: "Леон Кеннеди",
    game: "Resident Evil",
    image: "https://avatars.mds.yandex.net/i?id=8b1bcf9f18da8094927c21e62226dea6b366d3d5-4936359-images-thumbs&n=13",
    description: "Полицейский-новичок, попавший в зомби-апокалипсис и ставший впоследствии специальным агентом правительства."
  },
  {
    id: 10,
    name: "Doom Slayer",
    game: "DOOM",
    image: "https://avatars.mds.yandex.net/i?id=ec5cdd71146801e98609cb8b7e78e95b7529a850-4598969-images-thumbs&n=13",
    description: "Молчаливый морпех, ставший кошмаром демонов и защитником человечества от адских сил."
  }, 
  {
    id: 11,
    name: "Agent 47",
    game: "Hitman",
    image: "https://avatars.mds.yandex.net/i?id=92b1018488fb6fdc9f1d8e4ab3674f93cda54fa8-4011284-images-thumbs&n=13",
    description: "Генетически модифицированный клон и профессиональный убийца с баркодом на затылке, работающий на Агентство."
  },
  {
    id: 12,
    name: "Steve",
    game: "Minecraft",
    image: "data:image/jpeg;base64,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", 
    description: "Стандартный персонаж игрока в Minecraft, известный своей способностью выживать и строить практически что угодно."
  },
  {
    id: 13,
    name: "Тифа Локхарт",
    game: "Final Fantasy VII",
    image: "https://ixbt.online/idata/gtnews/2020/04/[5e885c634dbfa]/464kjqEuKgQMmwUrlICQ9NcejicJH2F5MiEbc6UL.jpeg",
    description: "Мастер боевых искусств и член группы экотеррористов AVALANCHE, борющаяся против корпорации Shinra."
  },
  {
    id: 14,
    name: "Джилл Валентайн",
    game: "Resident Evil",
    image: "data:image/jpeg;base64,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",
    description: "Бывший член спецподразделения S.T.A.R.S. и одна из выживших в инциденте в особняке Спенсера."
  },
  {
    id: 15,
    name: "Крис Редфилд",
    game: "Resident Evil",
    image: "https://avatars.mds.yandex.net/i?id=71ed63ef87b97bf49b84a84ffa7e5a92997ce546-5256069-images-thumbs&n=13",
    description: "Бывший член S.T.A.R.S., а впоследствии основатель и член BSAA, борец с биотерроризмом."
  }
];

// Добавляем больше персонажей
const additionalCharacters = [
  {
    id: 16,
    name: "Элли",
    game: "The Last of Us",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Ellie_TLOU.jpg/220px-Ellie_TLOU.jpg",
    description: "Главная героиня The Last of Us, иммунная к инфекции кордицепса девочка-подросток."
  },
  {
    id: 17,
    name: "Джоэл Миллер",
    game: "The Last of Us",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Joel_Miller_TLOU.jpg/220px-Joel_Miller_TLOU.jpg",
    description: "Контрабандист и выживший в постапокалиптическом мире, ставший отцовской фигурой для Элли."
  },
  {
    id: 18,
    name: "Артур Морган",
    game: "Red Dead Redemption 2",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Arthur_Morgan_RDR2.jpg/220px-Arthur_Morgan_RDR2.jpg",
    description: "Главный герой RDR2, член банды Ван дер Линде и правая рука Датча."
  },
  {
    id: 19,
    name: "Джон Марстон",
    game: "Red Dead Redemption",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/John_Marston_RDR.jpg/220px-John_Marston_RDR.jpg",
    description: "Бывший бандит, пытающийся начать новую жизнь со своей семьей."
  },
  {
    id: 20,
    name: "Геральт из Ривии",
    game: "The Witcher",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Geralt_of_Rivia.jpg/220px-Geralt_of_Rivia.jpg",
    description: "Ведьмак из школы Волка, охотник на монстров с белыми волосами и кошачьими глазами."
  },
  {
    id: 21,
    name: "Цири",
    game: "The Witcher 3",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Ciri_Witcher_3.jpg/220px-Ciri_Witcher_3.jpg",
    description: "Принцесса Цинтры с магическими способностями, приемная дочь Геральта."
  },
  {
    id: 22,
    name: "Трисс Меригольд",
    game: "The Witcher",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Triss_Merigold.jpg/220px-Triss_Merigold.jpg",
    description: "Чародейка и близкий друг Геральта, член Ложи Чародеек."
  },
  {
    id: 23,
    name: "Йеннифэр из Венгерберга",
    game: "The Witcher",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Yennefer_Witcher_3.jpg/220px-Yennefer_Witcher_3.jpg",
    description: "Могущественная чародейка и возлюбленная Геральта, связанная с ним судьбой."
  },
  {
    id: 24,
    name: "Алой",
    game: "Horizon",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Aloy_Horizon.jpg/220px-Aloy_Horizon.jpg",
    description: "Охотница из племени Нора в постапокалиптическом мире, населенном роботами-динозаврами."
  },
  {
    id: 25,
    name: "Натан Дрейк",
    game: "Uncharted",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Nathan_Drake_Uncharted.jpg/220px-Nathan_Drake_Uncharted.jpg",
    description: "Охотник за сокровищами и авантюрист, потомок знаменитого пирата Фрэнсиса Дрейка."
  }
];

// Добавляем новых персонажей
const newCharacters = [
  {
    id: 26,
    name: "Ада Вонг",
    game: "Resident Evil",
    image: "https://static.wikia.nocookie.net/residentevil/images/f/f5/Ada_Wong_RE4R.jpg/revision/latest?cb=20230324174500",
    description: "Загадочная шпионка и биохимик, работающая на различные организации. Известна своими красными платьями и сложными отношениями с Леоном Кеннеди."
  },
  {
    id: 27,
    name: "Гордон Фримен",
    game: "Half-Life",
    image: "https://static.wikia.nocookie.net/half-life/images/f/f7/Gordon_Freeman_bust_rtb.jpg/revision/latest?cb=20100327174206&path-prefix=en",
    description: "Теоретический физик из исследовательского центра Блэк Меса, ставший героем сопротивления против инопланетного вторжения Альянса."
  },
  {
    id: 28,
    name: "Элой",
    game: "Horizon",
    image: "https://static.wikia.nocookie.net/horizonzerodawn/images/a/a8/Aloy_-_Horizon_Forbidden_West.png/revision/latest?cb=20210602164303",
    description: "Охотница из племени Нора в постапокалиптическом мире, населенном роботами-динозаврами. Обладает уникальной способностью взаимодействовать с древними технологиями."
  },
  {
    id: 29,
    name: "Эцио Аудиторе",
    game: "Assassin's Creed",
    image: "https://static.wikia.nocookie.net/assassinscreed/images/e/e0/ACB_Ezio.png/revision/latest?cb=20101112001919",
    description: "Итальянский дворянин эпохи Возрождения, ставший Мастером Ассасином. Один из самых харизматичных и популярных героев серии Assassin's Creed."
  },
  {
    id: 30,
    name: "Ваас Монтенегро",
    game: "Far Cry 3",
    image: "https://static.wikia.nocookie.net/farcry/images/9/9a/Vaas_Montenegro.jpg/revision/latest?cb=20120605174928",
    description: "Безумный пиратский лидер с острова Рук, известный своими философскими монологами о безумии и определением инсанити."
  },
  {
    id: 31,
    name: "Пейган Мин",
    game: "Far Cry 4",
    image: "https://static.wikia.nocookie.net/farcry/images/f/f0/Pagan_Min_FC4.jpg/revision/latest?cb=20140815164028",
    description: "Эксцентричный и жестокий диктатор вымышленной страны Кират, известный своим розовым костюмом и непредсказуемым поведением."
  },
  {
    id: 32,
    name: "GLaDOS",
    game: "Portal",
    image: "https://static.wikia.nocookie.net/half-life/images/4/4f/GLaDOS_P2_infobox.png/revision/latest?cb=20110421021235&path-prefix=en",
    description: "Искусственный интеллект научного комплекса Aperture Science, известная своим саркастическим юмором и смертельными экспериментами с порталами."
  },
  {
    id: 33,
    name: "Томми Версетти",
    game: "Grand Theft Auto: Vice City",
    image: "https://static.wikia.nocookie.net/gtawiki/images/c/c6/TommyVercetti-GTAVC.jpg/revision/latest?cb=20100914165806",
    description: "Бывший член мафии, прибывший в Вайс-Сити в 1986 году. Построил криминальную империю в неоновом городе, вдохновленном Майами 80-х."
  },
  {
    id: 34,
    name: "Карл 'CJ' Джонсон",
    game: "Grand Theft Auto: San Andreas",
    image: "https://static.wikia.nocookie.net/gtawiki/images/4/4f/CarlJohnson-GTASA.jpg/revision/latest?cb=20100914165805",
    description: "Член банды Grove Street Families, вернувшийся в Лос-Сантос после смерти матери. Борется за восстановление своей банды и семьи."
  },
  {
    id: 35,
    name: "Нико Беллик",
    game: "Grand Theft Auto IV",
    image: "https://static.wikia.nocookie.net/gtawiki/images/f/f8/NikoBellic-GTAIV.jpg/revision/latest?cb=20100914165807",
    description: "Сербский иммигрант, прибывший в Либерти-Сити в поисках американской мечты, но втянутый в мир организованной преступности."
  },
  {
    id: 36,
    name: "Майкл Де Санта",
    game: "Grand Theft Auto V",
    image: "https://static.wikia.nocookie.net/gtawiki/images/8/8c/Michael-GTAV.jpg/revision/latest?cb=20130902175050",
    description: "Бывший грабитель банков, живущий под программой защиты свидетелей в Лос-Сантосе. Один из трех играбельных персонажей GTA V."
  },
  {
    id: 37,
    name: "Франклин Клинтон",
    game: "Grand Theft Auto V",
    image: "https://static.wikia.nocookie.net/gtawiki/images/d/dc/Franklin-GTAV.jpg/revision/latest?cb=20130902175049",
    description: "Молодой гангстер из Южного Лос-Сантоса, стремящийся вырваться из гетто и стать успешным преступником."
  },
  {
    id: 38,
    name: "Тревор Филипс",
    game: "Grand Theft Auto V",
    image: "https://static.wikia.nocookie.net/gtawiki/images/0/0c/Trevor-GTAV.jpg/revision/latest?cb=20130902175051",
    description: "Психопатичный преступник и наркоторговец, живущий в пустыне Блейн Каунти. Известен своим непредсказуемым и агрессивным поведением."
  }
];

// Добавляем персонажей из NieR и Devil May Cry
const nierDmcCharacters = [
  {
    id: 39,
    name: "Кайне",
    game: "NieR Replicant",
    image: "https://static.wikia.nocookie.net/nier/images/f/f0/Kaine_Replicant.png/revision/latest?cb=20210423174506",
    description: "Воинственная девушка-гермафродит с грубым характером и добрым сердцем. Одержима Тенью и сражается двумя мечами, защищая своих друзей."
  },
  {
    id: 40,
    name: "Эмиль",
    game: "NieR Replicant",
    image: "https://static.wikia.nocookie.net/nier/images/8/8c/Emil_Replicant.png/revision/latest?cb=20210423174507",
    description: "Добрый мальчик с проклятыми глазами, превращающими людей в камень. Жертвует собой ради друзей и становится бессмертным скелетом."
  },
  {
    id: 41,
    name: "A2",
    game: "NieR: Automata",
    image: "https://static.wikia.nocookie.net/nier/images/a/a4/A2_Automata.png/revision/latest?cb=20170223174506",
    description: "Боевой андроид YoRHa типа A (Attacker), дезертир с длинными белыми волосами. Выжившая из отряда, уничтоженного в предыдущей миссии."
  },
  {
    id: 42,
    name: "9S",
    game: "NieR: Automata",
    image: "https://static.wikia.nocookie.net/nier/images/f/f4/9S_Automata.png/revision/latest?cb=20170223174507",
    description: "Андроид-разведчик YoRHa типа S (Scanner) с любознательным характером. Партнер 2B, обладающий способностями к хакингу и анализу."
  },
  {
    id: 43,
    name: "Данте",
    game: "Devil May Cry",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/f/f0/Dante_DMC5.png/revision/latest?cb=20190308174506",
    description: "Полудемон, сын легендарного Спарды. Охотник на демонов с белыми волосами, владеющий мечом Rebellion и пистолетами Ebony & Ivory."
  },
  {
    id: 44,
    name: "Вергилий",
    game: "Devil May Cry",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/e/e4/Vergil_DMC5.png/revision/latest?cb=20191120174507",
    description: "Старший брат-близнец Данте, одержимый силой. Владеет катаной Ямато и стремится превзойти своего отца Спарду любой ценой."
  },
  {
    id: 45,
    name: "Леди",
    game: "Devil May Cry 3",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/c/c4/Lady_DMC5.png/revision/latest?cb=20190308174508",
    description: "Охотница на демонов-человек, дочь Аркхема. Использует огнестрельное оружие, включая ракетную установку Kalina Ann, в борьбе с демонами."
  },
  {
    id: 46,
    name: "Триш",
    game: "Devil May Cry",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/b/b4/Trish_DMC5.png/revision/latest?cb=20190308174509",
    description: "Демон, созданный Мундусом по образу матери Данте. Позже становится союзником и партнером Данте в агентстве Devil May Cry."
  },
  {
    id: 47,
    name: "Нико",
    game: "Devil May Cry 5",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/d/d8/Nico_DMC5.png/revision/latest?cb=20190308174510",
    description: "Талантливый оружейник и механик, внучка создателя Ebony & Ivory. Создает Devil Breakers для Неро и водит фургон с оружием."
  },
  {
    id: 48,
    name: "Неро",
    game: "Devil May Cry 4",
    image: "https://static.wikia.nocookie.net/devilmaycry/images/a/a8/Nero_DMC5.png/revision/latest?cb=20190308174511",
    description: "Молодой охотник на демонов с демонической рукой Devil Bringer. Сын Вергилия, владеет мечом Red Queen и пистолетом Blue Rose."
  }
];

const allCharacters = [...characters, ...additionalCharacters, ...newCharacters, ...nierDmcCharacters];

const Characters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Персонажи видеоигр</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Знаковые и запоминающиеся герои, ставшие культурными иконами и любимцами игрового сообщества.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {allCharacters.map(character => (
              <Link to={`/characters/${character.id}`} key={character.id} className="block group">
                <Card className="overflow-hidden transition-all border-border hover:shadow-md hover:shadow-primary/20 hover:border-primary/50">
                  <div className="aspect-square overflow-hidden bg-secondary/50">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{character.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{character.game}</p>
                    <p className="text-sm text-foreground/70 line-clamp-2">{character.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Characters;
