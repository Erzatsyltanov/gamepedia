import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const Consoles = () => {
  const generations = [
    {
      gen: "1 поколение (1972–1980)",
      desc: "История развития игровых платформ от первых домашних приставок до современных мощных систем.",
      consoles: [
        { name: "Magnavox Odyssey", year: "1972", desc: "Первая в мире домашняя игровая консоль. Использовала аналоговую технологию и не имела звука.", image: "https://avatars.mds.yandex.net/i?id=fa9ed4f3be204174d74d6daeb201e2a16d3df305-3593759-images-thumbs&n=13" },
        { name: "Coleco Telstar", year: "1976", desc: "Серия домашних игровых консолей с различными вариациями встроенных игр на основе чипа AY-3-8500.", image: "https://avatars.mds.yandex.net/i?id=ee809cdb13e31399f351b39b5536951c_l-5378240-images-thumbs&n=13" },
        { name: "Color TV-Game", year: "1977", desc: "Серия из пяти домашних консолей от Nintendo, выпущенных только в Японии.", image: "https://avatars.mds.yandex.net/i?id=5321582010f7b9ff8682ad6cb8a849a4848d81ab-4841129-images-thumbs&n=13" },
        { name: "Home Pong", year: "1975", desc: "Домашняя версия аркадного хита Pong от Atari, предлагающая простой теннисный геймплей.", image: "https://avatars.mds.yandex.net/i?id=ac8bce9d700e6fed811246de5446bdf692880163-5487054-images-thumbs&n=13" }
      ]
    },
    {
      gen: "2 поколение (1976–1992)",
      desc: "Эра картриджей и простой графики",
      consoles: [
        { name: "Atari 2600", year: "1977", desc: "Одна из самых популярных консолей своего времени с огромной библиотекой игр.", image: "https://atari.com/cdn/shop/articles/atari2600-firmware-update_a924d32f-7508-4346-83bd-04090aab7d28.webp?v=1725983215&width=1100" },
        { name: "Intellivision", year: "1979", desc: "Консоль от Mattel Electronics с уникальным дисковым контроллером.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_yGSj1THQRTuf7o9cMaUhrXggjOaNIt1yReyaCwktBXEVUlJKTfgxc7RNX_ojKOZZe0&usqp=CAU" },
        { name: "ColecoVision", year: "1982", desc: "Мощная система, предлагавшая аркадное качество графики для домашних игр.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ColecoVision-wController-L.jpg/330px-ColecoVision-wController-L.jpg" },
        { name: "Odyssey²", year: "1978", desc: "Следующая итерация Odyssey с клавиатурой и программируемой функциональностью.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Magnavox-Odyssey-2-Console-Set.png/500px-Magnavox-Odyssey-2-Console-Set.png" }
      ]
    },
    {
      gen: "3 поколение (8-бит, 1983–2003)",
      desc: "Эпоха Nintendo и возрождения игровой индустрии после краха",
      consoles: [
        { name: "NES / Famicom", year: "1983", desc: "Культовая консоль от Nintendo, возродившая рынок видеоигр после краха.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitNal_eLKIloQaBwOj06LuPka2nE7-mS7pQ&s" },
        { name: "Sega Master System", year: "1985", desc: "Конкурент NES, особенно популярный в Европе и Бразилии.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sega-Master-System-MkII-wController.jpg/330px-Sega-Master-System-MkII-wController.jpg" },
        { name: "Atari 7800", year: "1986", desc: "Обратно совместимая с библиотекой Atari 2600, но запоздавшая на рынок.", image: "https://store.atariage.com/cdn/shop/files/BrandFocus7800_1.jpg?v=1738269513" }
      ]
    },
    {
      gen: "4 поколение (16-бит, 1987–2004)",
      desc: "Эра битвы между Nintendo и Sega",
      consoles: [
        { name: "SNES / Super Famicom", year: "1990", desc: "16-битная консоль Nintendo с инновационными играми и графическими возможностями.", image: "https://game-port.online/upload/iblock/631/c070s9u8mjfa60f13e3o3fs82iiln8dl.jpg" },
        { name: "Sega Genesis / Mega Drive", year: "1988", desc: "Конкурент SNES, продвигаемый как более «взрослая» и «крутая» консоль.", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg" },
        { name: "TurboGrafx-16", year: "1987", desc: "8/16-битная гибридная система, популярная в Японии как PC Engine.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/NEC-PC-Engine-Console-FL.jpg/1280px-NEC-PC-Engine-Console-FL.jpg" },
        { name: "Neo Geo AES", year: "1990", desc: "Дорогая домашняя система с аркадным качеством, называемая Rolls-Royce игровых консолей.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypaVYgDIrjF9k6aS5po9oOG804H2Qblb_6w&s" }
      ]
    },
    {
      gen: "5 поколение (32–64 бит, 1993–2006)",
      desc: "Переход к 3D играм и CD-носителям",
      consoles: [
        { name: "PlayStation", year: "1994", desc: "PS1 полажила путь для 3D игр и убил sega и nintendo ",Image:"https://m.media-amazon.com/images/I/419CVQ8K9HL._AC_UF894,1000_QL80_.jpg" },
        { name: "Nintendo 64", year: "1996", desc: "Мощная система от Nintendo, оставшаяся верной картриджам вместо CD.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQlgSsmaDsvkyJ84xVNEt9gv3lBK0rgAzRw&s" },
        { name: "Sega Saturn", year: "1994", desc: "Технически продвинутая, но сложная в разработке консоль, проигравшая конкурентам.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Sega-Saturn-Console-Set-Mk2.png/1200px-Sega-Saturn-Console-Set-Mk2.png" }
      ]
    },
    {
      gen: "6 поколение (1998–2013)",
      desc: "Эра DVD и онлайн-игр",
      consoles: [
        { name: "PlayStation 2", year: "2000", desc: "Самая продаваемая консоль всех времен с огромной библиотекой игр и DVD-плеером.", image: "https://gamespirit.org/image/PlayStation%202/preload_J5wIN_350.jpg" },
        { name: "Xbox", year: "2001", desc: "Дебют Microsoft на консольном рынке с фокусом на онлайн-игры через Xbox Live.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK1nZ1Em11yB2yfgeS-Qu2kMBrLJKFJ2aeKhF476a14bRjG9ezhtBSauCkDZaj36Ms5s&usqp=CAU" },
        { name: "GameCube", year: "2001", desc: "Компактная и мощная консоль Nintendo с инновационным дизайном контроллера.", image: "https://m.media-amazon.com/images/I/61DIu2wsuVL.jpg" },
        { name: "Dreamcast", year: "1998", desc: "Последняя консоль Sega с встроенным модемом для онлайн-игр и инновационной VMU-картой памяти.", image: "https://www.copetti.org/images/consoles/dreamcast/international.073a3053b2eaef16dd1ed936cfc6ff56b535eea0f7124f6b60975b56a5e32bcc.png" }
      ]
    },
    {
      gen: "7 поколение (2005–2017)",
      desc: "HD-эра и цифровая дистрибуция",
      consoles: [
        { name: "Xbox 360", year: "2005", desc: "Консоль Microsoft с фокусом на HD-игры и развитую онлайн-экосистему.", image: "https://avatars.mds.yandex.net/get-mpic/4080439/img_id3124455432524885101.jpeg/orig" },
        { name: "PlayStation 3", year: "2006", desc: "Мощная система Sony с Blu-ray приводом и бесплатным онлайн-сервисом PSN.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4chVReqJRcOtlm59YtVQm6dcdjGhH3nXhsh8M_Hml1d6PY_7LjAk8Gsx2_qaeJuuIrlA&usqp=CAU" },
        { name: "Wii", year: "2006", desc: "Революционная консоль Nintendo с уникальным управлением движением и фокусом на казуальных игроков.", image: "data:image/jpeg;base64,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" }
      ]
    },
    {
      gen: "8 поколение (2012–2023)",
      desc: "Эра 4K, VR и гибридных консолей",
      consoles: [
        { name: "PlayStation 4", year: "2013", desc: "Бестселлер от Sony с акцентом на игровой контент и эксклюзивы.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hbBPAVh638__qvrqkmCS6V9hPoSQu9HE7w&s" },
        { name: "Xbox One", year: "2013", desc: "Система Microsoft с фокусом на мультимедиа и сервисы, позднее смещенным на игры.", image: "https://3dnews.ru/assets/external/illustrations/2014/06/20/822520/Xbox_One_Review_02.jpg" },
        { name: "Nintendo Switch", year: "2017", desc: "Революционная гибридная консоль, работающая как в домашнем, так и в портативном режиме.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNBQXeVJzrZ0opdVuIVpAGjf0m91J-ltUTg&s" }
      ]
    },
    {
      gen: "9 поколение (2020–н.в.)",
      desc: "SSD и рейтрейсинг",
      consoles: [
        { name: "PlayStation 5", year: "2020", desc: "Консоль Sony с ультрабыстрым SSD, 3D-аудио и тактильной обратной связью в контроллере DualSense.", image: "https://www.myphone.kg/cache/files/22183.png_w800_h800_resize.png?t=1745477414" },
        { name: "Xbox Series X|S", year: "2020", desc: "Мощные консоли Microsoft с фокусом на обратную совместимость и подписку Game Pass.", image: "https://assets.xboxservices.com/assets/13/86/1386c7ac-5e8a-4fd3-aeb2-cea5c791eba0.png?n=MSXC-XboxSeriesXS-HeroAndImageCard-large-l-794x447-16x9-01_526.png" },
        { name: "Switch 2", year: "2025 (ожидается)", desc: "Следующее поколение гибридной консоли Nintendo с поддержкой 4K и улучшенной производительностью.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74F-fljhpXasSm4XsIsdMh-TB86LmU2UqPQ&s" }
      ]
    }
  ];

  const portableConsoles = [
    {
      era: "1-2 поколение",
      consoles: [
        { name: "Game & Watch", year: "1980-1991", desc: "Серия портативных электронных игр от Nintendo с ЖК-экраном и предустановленной игрой.", image: "https://www.nintendo.com/eu/media/images/08_content_images/others_2/game___watch__super_mario_bros_/NSwitch_GameWatch_Legendary_Hardware.png" }
      ]
    },
    {
      era: "3 поколение",
      consoles: [
        { name: "Game Boy", year: "1989", desc: "Революционная монохромная портативная консоль от Nintendo с долгим временем работы от батарей.", image: "https://i.siteapi.org/JfN6drUp1s5zRsZkRaGrVs-apAU=/fit-in/330x/center/top/filters:fill(transparent):format(png)/acced2bc66a61c3.ru.s.siteapi.org/img/l3tp7qpk17kg8g4csckc00kgcsg0sw" },
        { name: "Game Gear", year: "1990", desc: "Цветная портативная консоль от Sega с подсветкой экрана, но коротким временем работы.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyapCpwuRtiVpsNXgDxDwPwduarubH5H-FiA&s" }
      ]
    },
    {
      era: "4 поколение",
      consoles: [
        { name: "Game Boy Color", year: "1998", desc: "Улучшенная версия Game Boy с цветным экраном и обратной совместимостью.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkt2YuW9v8tmZksqQEnik9ruPUuMj7anhVCA&s" }
      ]
    },
    {
      era: "5 поколение",
      consoles: [
        { name: "Nintendo DS", year: "2004", desc: "Инновационная двухэкранная консоль с сенсорным нижним экраном и обратной совместимостью с Game Boy Advance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6kWTZEFG1B5mFLsdgwteFFjnv00JCzPEA&s" },
        { name: "PlayStation Portable", year: "2004", desc: "Мощная портативная консоль от Sony с возможностью воспроизведения мультимедиа и широким экраном.", image: "https://images-cdn.ubuy.co.in/6816fcf3e966d73e2b0f99b3-sony-psp-slim-and-lite-3000-series.jpg" }
      ]
    },
    {
      era: "6 поколение",
      consoles: [
        { name: "Nintendo 3DS", year: "2011", desc: "Портативная консоль с автостереоскопическим 3D-экраном, не требующим специальных очков.", image: "https://www.nintendo.com/eu/media/images/10_share_images/systems_11/new_nintendo_3ds_17/H2x1_3DS_SystemLandingPage_New3DS_v02_image1600w.png" },
        { name: "PlayStation Vita", year: "2011", desc: "Технологически продвинутая портативная консоль от Sony с сенсорным экраном и тачпадом на задней панели.", image: "https://m.media-amazon.com/images/I/71kOcbOeLNL.jpg" }
      ]
    },
    {
      era: "Современные",
      consoles: [
        { name: "Nintendo Switch", year: "2017", desc: "Гибридная консоль, работающая как в портативном, так и в стационарном режиме.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg/500px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.jpg" },
        { name: "Steam Deck", year: "2022", desc: "Портативный игровой ПК от Valve, способный запускать игры из библиотеки Steam.", image: "https://gamestore.kg/wp-content/uploads/Steam-256-3.png" },
        { name: "ROG Ally", year: "2023", desc: "Портативный игровой ПК от ASUS с Windows и доступом ко всем основным игровым платформам.", image: "https://gamestore.kg/wp-content/uploads/2023/07/rogally-1.jpg" },
        { name: "Legion Go", year: "2023", desc: "Портативная игровая система от Lenovo с отсоединяемыми контроллерами и Windows 11.", image: "https://gamestore.kg/wp-content/uploads/2024/01/LegionGo-2.png" },
        { name: "PS Portal", year: "2023", desc: "Устройство для удаленной игры от Sony, требующее подключения к PlayStation 5 через Wi-Fi.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_GNgX4VZtzBu2oGO6Xk2uPBA_tP5-CIO8A&s" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Игровые консоли</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              История развития игровых платформ от первых домашних приставок до современных мощных систем.
            </p>
          </div>

          <Tabs defaultValue="home" className="w-full">
            <ScrollArea className="w-full">
              <TabsList className="w-full justify-start mb-8">
                <TabsTrigger value="home">Домашние консоли</TabsTrigger>
                <TabsTrigger value="portable">Портативные</TabsTrigger>
              </TabsList>
            </ScrollArea>

            <TabsContent value="home" className="mt-0">
              <div className="space-y-8">
                {generations.map((generation, index) => (
                  <div key={index} className="mt-10">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">{generation.gen}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{generation.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {generation.consoles.map((console, i) => (
                        <Card key={i}>
                          <CardContent className="p-6">
                            <img src={console.image} alt={console.name} className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2">{console.name}</h3>
                            <p className="text-muted-foreground mb-4">{console.year}</p>
                            <p className="text-sm text-foreground/80">{console.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portable" className="mt-0">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Эволюция портативных консолей</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portableConsoles.map((group, i) => (
                      <Card key={i} className="col-span-full">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4">{group.era}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.consoles.map((console, j) => (
                              <div key={j} className="bg-background/50 p-4 rounded-md border border-border">
                                <img src={console.image} alt={console.name} className="w-full h-32 object-cover mb-4 rounded" />
                                <h4 className="text-lg font-semibold mb-1">{console.name}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{console.year}</p>
                                <p className="text-sm">{console.desc}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consoles;
