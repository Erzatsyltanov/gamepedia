import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import CommentSection from '@/components/CommentSection';
import RatingSystem from '@/components/RatingSystem';

const characters = [
    {
      id: 1,
      name: "2B",
      game: "NieR: Automata",
      image: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/gridart_20221201_135121712.jpg",
      description: "Боевой андроид из YoRHa, главная героиня NieR: Automata, созданная для борьбы с инопланетными машинами."
    },
    {
      id: 2,
      name: "Марио",
      game: "Super Mario",
      image: "https://example.com/mario.jpg", 
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR--ZXro4UcEbpsBlWG0nhLbqmhntfe0HT7g&s", 
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
      image: "https://avatars.mds.yandex.net/i?id=53cea966497485bc00f6318b8f0188c8c41d10d1-9855166-images-thumbs&n=13",
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
      image: "https://example.com/steve.jpg", 
      description: "Стандартный персонаж игрока в Minecraft, известный своей способностью выживать и строить практически что угодно."
    },
    {
      id: 13,
      name: "Tifa Lockhart",
      game: "Final Fantasy VII",
      image: "https://ixbt.online/idata/gtnews/2020/04/[5e885c634dbfa]/464kjqEuKgQMmwUrlICQ9NcejicJH2F5MiEbc6UL.jpeg",
      description: "Мастер боевых искусств и член группы экотеррористов AVALANCHE, борющаяся против корпорации Shinra."
    },
    {
      id: 14,
      name: "Джилл Валентайн",
      game: "Resident Evil",
      image: "https://www.editups.org/wp-content/uploads/Jill-Valentine-Resident-Evil-remastered-closeup-raised-pistol-h7-big.jpg",
      description: "Бывший член спецподразделения S.T.A.R.S. и одна из выживших в инциденте в особняке Спенсера."
    },
    {
      id: 15,
      name: "Крис Редфилд",
      game: "Resident Evil",
      image: "https://avatars.mds.yandex.net/i?id=71ed63ef87b97bf49b84a84ffa7e5a92997ce546-5256069-images-thumbs&n=13",
      description: "Бывший член S.T.A.R.S., а впоследствии основатель и член BSAA, борец с биотерроризмом."
    },
    {
      id: 39,
      name: "Кайне",
      game: "NieR Replicant",
      image: "https://static.wikia.nocookie.net/nier/images/f/f0/Kaine_Replicant.png/revision/latest?cb=20210423174506",
      description: "Воинственная девушка-гермафродит с грубым характером и добрым сердцем. Одержима Тенью и сражается двумя мечами, защищая своих друзей от Теней. Несмотря на грубую речь и агрессивное поведение, глубоко заботится о Нире и Эмиле. Её трагическая история связана с бабушкой и проклятием Тени."
    },
    {
      id: 40,
      name: "Эмиль",
      game: "NieR Replicant",
      image: "https://static.wikia.nocookie.net/nier/images/8/8c/Emil_Replicant.png/revision/latest?cb=20210423174507",
      description: "Добрый и застенчивый мальчик с проклятыми глазами, которые превращают людей в камень. Живет в особняке со своей сестрой Халуа. В ходе истории жертвует своим человеческим обликом, чтобы защитить друзей, и становится бессмертным скелетом. Один из самых трагических персонажей серии NieR."
    },
    {
      id: 41,
      name: "A2",
      game: "NieR: Automata",
      image: "https://static.wikia.nocookie.net/nier/images/a/a4/A2_Automata.png/revision/latest?cb=20170223174506",
      description: "Боевой андроид YoRHa типа A (Attacker) с серийным номером YoRHa Type A No.2. Дезертир с длинными белыми волосами и холодным характером. Единственная выжившая из отряда, уничтоженного в предыдущей миссии на Земле. Обладает глубокими знаниями о истинной природе войны между андроидами и машинами."
    },
    {
      id: 42,
      name: "9S",
      game: "NieR: Automata",
      image: "https://static.wikia.nocookie.net/nier/images/f/f4/9S_Automata.png/revision/latest?cb=20170223174507",
      description: "Андроид-разведчик YoRHa типа S (Scanner) с серийным номером YoRHa No.9 Type S. Любознательный и эмоциональный андроид, партнер 2B. Обладает уникальными способностями к хакингу и анализу машин. Его любопытство часто приводит к открытию неприятных истин о мире и YoRHa."
    },
    {
      id: 43,
      name: "Данте",
      game: "Devil May Cry",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/f/f0/Dante_DMC5.png/revision/latest?cb=20190308174506",
      description: "Полудемон, сын легендарного Тёмного Рыцаря Спарды и человеческой женщины Евы. Профессиональный охотник на демонов с белыми волосами и красным пальто. Владеет мечом Rebellion (позже Dante) и знаменитыми пистолетами Ebony & Ivory. Известен своим саркастическим юмором и любовью к пицце и клубнике."
    },
    {
      id: 44,
      name: "Вергилий",
      game: "Devil May Cry",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/e/e4/Vergil_DMC5.png/revision/latest?cb=20191120174507",
      description: "Старший брат-близнец Данте, также сын Спарды. В отличие от брата, одержим обретением силы и превосходством над отцом. Владеет легендарной катаной Ямато, способной разрезать пространство. Элегантен, хладнокровен и безжалостен в достижении своих целей. Отец Неро."
    },
    {
      id: 45,
      name: "Леди",
      game: "Devil May Cry 3",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/c/c4/Lady_DMC5.png/revision/latest?cb=20190308174508",
      description: "Мэри 'Леди' - охотница на демонов-человек, дочь Аркхема. Мотивирована местью отцу за убийство матери и открытие врат в демонический мир. Специализируется на огнестрельном оружии, включая ракетную установку Kalina Ann. Позже становится партнером Данте в охоте на демонов."
    },
    {
      id: 46,
      name: "Триш",
      game: "Devil May Cry",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/b/b4/Trish_DMC5.png/revision/latest?cb=20190308174509",
      description: "Демон, созданный императором демонов Мундусом по образу матери Данте, Евы. Изначально была послана убить Данте, но позже предала Мундуса и стала союзником. Обладает способностью управлять молниями и работает партнером в агентстве Devil May Cry."
    },
    {
      id: 47,
      name: "Нико",
      game: "Devil May Cry 5",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/d/d8/Nico_DMC5.png/revision/latest?cb=20190308174510",
      description: "Николетта 'Нико' Голдштейн - талантливый оружейник и механик, внучка Нелл Голдштейн, создательницы пистолетов Ebony & Ivory. Создает протезы Devil Breaker для Неро и водит фургон, полный оружия. Курящая, энергичная девушка с южным акцентом и страстью к созданию оружия."
    },
    {
      id: 48,
      name: "Неро",
      game: "Devil May Cry 4",
      image: "https://static.wikia.nocookie.net/devilmaycry/images/a/a8/Nero_DMC5.png/revision/latest?cb=20190308174511",
      description: "Молодой охотник на демонов и сын Вергилия. Обладал демонической рукой Devil Bringer, которую потерял, но теперь использует механические протезы Devil Breaker. Владеет мечом Red Queen с системой превышения оборотов и пистолетом Blue Rose. Влюблен в Кири и защищает город Фортуна."
    }
  ];

const CharacterDetail = () => {
    const { id } = useParams();
    const character = characters.find(c => c.id === parseInt(id));
  
    if (!character) {
      return <div>Character not found</div>;
    }
  
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FavoriteButton 
                      itemId={character.id.toString()} 
                      itemType="character" 
                      itemTitle={character.name} 
                    />
                    <ShareButton title={character.name} />
                  </div>
                </div>
                <img src={character.image} alt={character.name} className="w-full h-64 object-cover mb-4" />
                <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{character.game}</p>
                <p className="text-foreground">{character.description}</p>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <RatingSystem 
                itemId={character.id.toString()} 
                itemType="character" 
                itemTitle={character.name} 
              />
            </div>
            
            <CommentSection 
              itemId={character.id.toString()} 
              itemType="character" 
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default CharacterDetail;