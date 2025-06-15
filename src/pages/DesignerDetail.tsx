import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad, Star, Book } from 'lucide-react';


const designersData = [
  {
    id: 1,
    name: "Хидео Кодзима",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hideo_Kojima_2016.jpg/800px-Hideo_Kojima_2016.jpg",
    known_for: "Metal Gear Solid, Death Stranding",
    description: "Японский геймдизайнер, известный своими кинематографичными играми с сложными сюжетами и новаторскими игровыми механиками. Основатель Kojima Productions после ухода из Konami.",
    notable_works: ["Metal Gear", "Metal Gear Solid", "Zone of the Enders", "Death Stranding"],
    game_icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUphAzn6r4xgbTEPu4kqat_AqTr82RlqIUiQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8--dAKqD85qsgH9Q1atcn7XKkb_IYH8Q-TVcMgVxIUZE9SY2lLssrGXCnbdrt2b2tb8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUWK2C-aa1yJ_gE6ITFKLoFmT1csYeEEqFg&s"
    ],
    achievements: [
      "Game Awards Industry Icon (2016)",
      "BAFTA Fellowship (2020)",
      "Academy of Interactive Arts & Sciences Hall of Fame (2016)"
    ],
    bio: "Хидео Кодзима родился 24 августа 1963 года в Сэтагая, Токио. Он с детства увлекался кино и литературой, что сильно повлияло на его подход к созданию игр. Карьеру в игровой индустрии Кодзима начал в компании Konami в 1986 году. Его первым успехом стала игра Metal Gear для MSX2, где он впервые применил концепцию стелса в видеоиграх. Настоящую славу Кодзима получил после выхода Metal Gear Solid для PlayStation в 1998 году, которая произвела революцию в игровой индустрии своим кинематографичным подходом к повествованию. После конфликта с Konami в 2015 году, Кодзима основал независимую студию Kojima Productions, где создал игру Death Stranding, выпущенную в 2019 году."
  },
  {
    id: 2,
    name: "Сигэру Миямото",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Shigeru_Miyamoto_2011.jpg/800px-Shigeru_Miyamoto_2011.jpg",
    known_for: "Mario, Zelda, Donkey Kong",
    description: "Легендарный японский геймдизайнер и продюсер Nintendo. Создатель многих культовых франшиз, считается одним из отцов-основателей современной игровой индустрии.",
    notable_works: ["Super Mario Bros.", "The Legend of Zelda", "Donkey Kong", "Star Fox", "Pikmin"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/The_Legend_of_Zelda_cover.png/220px-The_Legend_of_Zelda_cover.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Donkey_Kong_arcade.png/220px-Donkey_Kong_arcade.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Pikmin_cover.jpg/220px-Pikmin_cover.jpg"
    ],
    achievements: [
      "BAFTA Fellowship (2010)",
      "Game Developers Choice Award - Lifetime Achievement (2007)",
      "Зал славы видеоигр"
    ],
    bio: "Сигэру Миямото родился 16 ноября 1952 года в Японии. Он присоединился к Nintendo в 1977 году как художник, но вскоре проявил талант в разработке игр. В 1981 году создал аркаду Donkey Kong, которая стала огромным хитом и представила миру персонажа Марио (тогда ещё известного как Jumpman). В 1985 году Миямото разработал Super Mario Bros. для NES, которая стала одной из самых влиятельных игр всех времен. Год спустя он создал The Legend of Zelda, ещё одну революционную игру. Под его руководством Nintendo создала множество инновационных игр и игровых систем. Миямото известен своим уникальным подходом к дизайну, который сочетает в себе простоту, доступность и глубину геймплея."
  },
  {
    id: 3,
    name: "Хидетака Миядзаки",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shinji_Mikami_April_2013_3.jpg/800px-Shinji_Mikami_April_2013_3.jpg",
    known_for: "Dark Souls, Elden Ring",
    description: "Президент FromSoftware и создатель серии Souls. Известен созданием сложных и атмосферных игр с минималистичным повествованием и детальным лором.",
    notable_works: ["Demon's Souls", "Dark Souls", "Bloodborne", "Sekiro: Shadows Die Twice", "Elden Ring"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Dark_Souls_cover_art.jpg/220px-Dark_Souls_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Bloodborne_cover.jpg/220px-Bloodborne_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Sekiro_Shados_Die_Twice_cover.jpg/220px-Sekiro_Shados_Die_Twice_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Elden_Ring_cover_art.jpg/220px-Elden_Ring_cover_art.jpg"
    ],
    achievements: [
      "Game Awards - Game of the Year за Sekiro (2019)",
      "Game Awards - Game of the Year за Elden Ring (2022)",
      "D.I.C.E. Awards - Game of the Year за Elden Ring (2022)"
    ],
    bio: "Хидетака Миядзаки родился в Сидзуоке, Япония. До карьеры в игровой индустрии он работал в IT-компании. В FromSoftware пришел в 2004 году как рядовой программист. Его первым крупным проектом стала игра Demon's Souls (2009), которая изначально считалась рискованным экспериментом, но впоследствии создала целый поджанр action-RPG, известный как Souls-like. После успеха Dark Souls (2011), Миядзаки был назначен президентом FromSoftware. Его игры известны своей высокой сложностью, минималистичным подходом к повествованию и проработанным мрачным миром. Вершиной его карьеры на данный момент стала игра Elden Ring (2022), разработанная в сотрудничестве с писателем Джорджем Мартином."
  },
  {
    id: 4,
    name: "Синдзи Миками",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shinji_Mikami_April_2013_3.jpg/800px-Shinji_Mikami_April_2013_3.jpg",
    known_for: "Resident Evil, The Evil Within",
    description: "Японский геймдизайнер, известный как создатель серии Resident Evil и жанра survival horror в современном понимании.",
    notable_works: ["Resident Evil", "Dino Crisis", "Devil May Cry", "Vanquish", "The Evil Within"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Resident_Evil_cover_art.jpg/220px-Resident_Evil_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Devil_May_Cry_cover.jpg/220px-Devil_May_Cry_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Vanquish_cover.jpg/220px-Vanquish_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Evil_Within_cover_art.jpg/220px-The_Evil_Within_cover_art.jpg"
    ],
    achievements: [
      "GDCA - Lifetime Achievement Award (2014)",
      "Golden Joystick - Lifetime Achievement Award (2012)"
    ],
    bio: "Синдзи Миками родился 11 августа 1965 года в Японии. Он начал работать в Capcom в 1990 году. Первой большой работой Миками стала игра Resident Evil (1996), которая определила канон жанра survival horror и стала одной из самых влиятельных игр своего времени. Впоследствии он руководил разработкой Resident Evil 4 (2005), которая произвела революцию в жанре экшен от третьего лица. Миками также создал концепцию Devil May Cry, которая изначально задумывалась как часть серии Resident Evil. После ухода из Capcom он работал над такими играми как Vanquish и The Evil Within. В 2010 году основал студию Tango Gameworks, которая была приобретена ZeniMax Media."
  },
  {
    id: 5,
    name: "Хидэки Камия",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hideki_Kamiya_2019.jpg/800px-Hideki_Kamiya_2019.jpg",
    known_for: "Bayonetta, Devil May Cry",
    description: "Японский геймдизайнер, известный созданием стильных экшенов с динамичными боевыми системами. Основатель студии PlatinumGames.",
    notable_works: ["Devil May Cry", "Viewtiful Joe", "Bayonetta", "Okami", "The Wonderful 101"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Devil_May_Cry_cover.jpg/220px-Devil_May_Cry_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Viewtiful_Joe_cover.jpg/220px-Viewtiful_Joe_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Bayonetta_cover_art.jpg/220px-Bayonetta_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Okami_cover.jpg/220px-Okami_cover.jpg"
    ],
    achievements: [
      "BAFTA - Best Action and Adventure для Bayonetta 2 (2015)",
      "Game Awards - Best Action Game для Bayonetta 3 (2022)"
    ],
    bio: "Хидэки Камия родился 19 декабря 1970 года в Матсумото, Япония. Свою карьеру в игровой индустрии он начал в Capcom в 1994 году. Первым крупным проектом Камии как директора стал Resident Evil 2 (1998). Затем он создал Devil May Cry (2001), игру, которая определила новый стандарт для экшенов с боевой системой. После ухода из Capcom Камия вместе с несколькими коллегами основал студию Clover Studio, где разработал такие игры как Viewtiful Joe и Okami. После закрытия Clover Studio он стал одним из основателей PlatinumGames, где создал серию Bayonetta. Камия известен не только своими играми, но и яркой личностью и прямолинейным общением в социальных сетях."
  },
  {
    id: 6,
    name: "Кадзунори Ямаути",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kazunori_Yamauchi_2019.jpg/800px-Kazunori_Yamauchi_2019.jpg",
    known_for: "Gran Turismo",
    description: "Японский геймдизайнер и CEO Polyphony Digital. Создатель серии гоночных симуляторов Gran Turismo, известный своим перфекционизмом и вниманием к деталям.",
    notable_works: ["Gran Turismo (все части)"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Gran_Turismo_cover.jpg/220px-Gran_Turismo_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Gran_Turismo_4_cover.jpg/220px-Gran_Turismo_4_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Gran_Turismo_7_cover.jpg/220px-Gran_Turismo_7_cover.jpg"
    ],
    achievements: [
      "Honorary Doctorate от Cranfield University (2009)",
      "Chevalier Ordre des Arts et des Lettres (2011)"
    ],
    bio: "Кадзунори Ямаути родился 5 августа 1967 года в Тёси, Япония. Он присоединился к Sony Computer Entertainment в 1993 году. Ямаути мечтал создать реалистичный гоночный симулятор, и в 1997 году выпустил первую Gran Turismo для PlayStation, которая совершила революцию в жанре гоночных игр. Для создания этой игры он собрал команду из 15 человек, которая впоследствии стала студией Polyphony Digital. Ямаути известен своим перфекционизмом и вниманием к деталям – каждая модель автомобиля в Gran Turismo моделируется с огромной точностью. Он также является автогонщиком, регулярно участвует в гонках на выносливость, включая 24 часа Нюрбургринга. Его страсть к автомобилям и гонкам напрямую отражается в его работе над серией Gran Turismo."
  },
  {
    id: 7,
    name: "Эдвард Бон",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ed_Boon_2019.jpg/800px-Ed_Boon_2019.jpg",
    known_for: "Mortal Kombat",
    description: "Американский разработчик игр и один из создателей серии Mortal Kombat. Известен своим долгим руководством франшизой и присутствием в игровом сообществе.",
    notable_works: ["Mortal Kombat (все части)", "Injustice"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Mortal_Kombat_cover_art.jpg/220px-Mortal_Kombat_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Mortal_Kombat_11_cover.jpg/220px-Mortal_Kombat_11_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Injustice_2_cover.jpg/220px-Injustice_2_cover.jpg"
    ],
    achievements: [
      "D.I.C.E. Hall of Fame Award (2019)",
      "Guinness World Record - Самая длинная работа над файтинг-играми"
    ],
    bio: "Эдвард Бон родился 22 февраля 1964 года в Чикаго, США. Он начал свою карьеру в Williams Electronics как программист. Вместе с Джоном Тобиасом создал Mortal Kombat в 1992 году, которая произвела фурор благодаря реалистичной по тем временам графике и жестоким добиваниям (fatality). Бон был не только программистом игры, но и послужил моделью для персонажа Джонни Кейджа, а также записал знаменитую фразу 'Get over here!' для Скорпиона. После более чем 30 лет работы над серией, он до сих пор остаётся её руководителем и одним из главных лиц NetherRealm Studios. Бон активно взаимодействует с фанатским сообществом и известен своим чувством юмора."
  },
  {
    id: 8,
    name: "Джон Кармак",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Carmack_2019.jpg/800px-John_Carmack_2019.jpg",
    known_for: "Doom, Quake",
    description: "Американский программист и соучредитель id Software. Пионер технологий 3D-графики и создатель программных движков для революционных шутеров.",
    notable_works: ["Wolfenstein 3D", "Doom", "Quake"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Wolfenstein_3D_cover.jpg/220px-Wolfenstein_3D_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Doom_cover_art.jpg/220px-Doom_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Quake_cover.jpg/220px-Quake_cover.jpg"
    ],
    achievements: [
      "BAFTA Fellowship (2016)",
      "Game Developers Choice Award - Lifetime Achievement (2010)",
      "Academy of Interactive Arts & Sciences Hall of Fame (2001)"
    ],
    bio: "Джон Кармак родился 20 августа 1970 года в Канзасе, США. В подростковом возрасте он увлёкся компьютерами и программированием. В 1991 году вместе с Джоном Ромеро и другими основал компанию id Software. Кармак стал главным архитектором революционных игровых движков, которые лежали в основе таких игр как Wolfenstein 3D, Doom и Quake. Его технические инновации сделали возможным создание полноценных 3D-шутеров от первого лица и заложили основу для всего жанра FPS. В 2013 году Кармак покинул id Software и присоединился к Oculus VR в качестве технического директора, где работал над технологиями виртуальной реальности. В 2019 году он покинул Oculus, чтобы заняться исследованиями в области искусственного интеллекта."
  },
  {
    id: 9,
    name: "Гейб Ньюэлл",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gabe_Newell_2019.jpg/800px-Gabe_Newell_2019.jpg",
    known_for: "Half-Life, Steam",
    description: "Американский бизнесмен и соучредитель Valve. Руководил разработкой Half-Life и создал платформу цифровой дистрибуции Steam.",
    notable_works: ["Half-Life", "Portal", "Steam", "Half-Life: Alyx"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Half-Life_cover_art.jpg/220px-Half-Life_cover_art.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Portal_cover.jpg/220px-Portal_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Half-Life_Alyx_cover.jpg/220px-Half-Life_Alyx_cover.jpg"
    ],
    achievements: [
      "BAFTA Fellowship (2013)",
      "Game Developers Choice Pioneer Award (2010)",
      "Academy of Interactive Arts & Sciences Hall of Fame (2013)"
    ],
    bio: "Гейб Ньюэлл родился 3 ноября 1962 года в США. До основания Valve он работал в Microsoft, где был одним из разработчиков первых трех версий Windows. В 1996 году вместе с Майком Харрингтоном основал компанию Valve. Их первая игра, Half-Life (1998), произвела революцию в жанре FPS своим инновационным подходом к повествованию и игровому процессу. В 2003 году Valve запустила платформу цифровой дистрибуции Steam, которая трансформировала способ продажи и распространения игр. Сегодня Steam является крупнейшим цифровым магазином PC-игр в мире. Под руководством Ньюэлла Valve создала такие игры как Half-Life 2, Portal, Left 4 Dead, Counter-Strike и Dota 2. Несмотря на огромный успех, Ньюэлл известен своей скромностью и сосредоточенностью на создании качественных игр."
  },
  {
    id: 10,
    name: "Ёко Таро",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yoko_Taro_2017.jpg/800px-Yoko_Taro_2017.jpg",
    known_for: "NieR, Drakengard",
    description: "Японский геймдизайнер, известный своими философскими и эмоционально сложными играми с уникальным повествованием. Создатель серий Drakengard и NieR.",
    notable_works: ["Drakengard", "NieR", "NieR: Automata", "NieR Replicant"],
    game_icons: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Drakengard_cover.jpg/220px-Drakengard_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/NieR_cover.jpg/220px-NieR_cover.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/NieR_Automata_cover.jpg/220px-NieR_Automata_cover.jpg"
    ],
    achievements: [
      "Game Awards - Best Score/Music для NieR: Automata (2017)",
      "D.I.C.E. Awards - Outstanding Achievement in Story для NieR: Automata (2018)",
      "BAFTA Games Award - Artistic Achievement для NieR: Automata (2018)"
    ],
    bio: "Ёко Таро родился 6 июня 1970 года в Нагое, Япония. Он начал свою карьеру в игровой индустрии в компании Namco в 1999 году. Его первым крупным проектом стала игра Drakengard (2003), которая выделялась своим мрачным тоном и философскими темами. Таро известен своим уникальным подходом к повествованию, часто исследующим темы экзистенциализма, человеческой природы и смысла существования. Его игры часто нарушают четвертую стену и экспериментируют с игровыми механиками для передачи эмоций. Наибольшую известность он получил благодаря NieR: Automata (2017), которая стала коммерческим и критическим успехом. Таро также известен своей эксцентричностью - он часто появляется на публике в маске Эмиля, персонажа из его игр. Его работы оказали значительное влияние на современную игровую индустрию, показав, что видеоигры могут быть серьезным художественным медиумом."
  }
];

const DesignerDetail = () => {
  const { id } = useParams<{id: string}>();
  const [designer, setDesigner] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const designerId = parseInt(id);
      const found = designersData.find(d => d.id === designerId);
      if (found) {
        setDesigner(found);
      }
    }
  }, [id]);

  if (!designer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 flex items-center justify-center">
          <h1 className="text-2xl">Геймдизайнер не найден</h1>
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
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{designer.name}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {designer.known_for}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary" />
                      Достижения
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {designer.achievements.map((achievement: string, i: number) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1 lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Book className="w-6 h-6 mr-2 text-primary" />
                    Биография
                  </h2>
                  <p className="text-foreground/90 leading-relaxed">{designer.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Gamepad className="w-6 h-6 mr-2 text-primary" />
                    Известные работы
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {designer.game_icons.map((game: string, i: number) => (
                      <div key={i} className="relative group overflow-hidden rounded-lg border border-border">
                        <img
                          src={game}
                          alt={`Игра от ${designer.name}`}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Все игры:</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {designer.notable_works.map((work: string, i: number) => (
                        <li key={i}>{work}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DesignerDetail;