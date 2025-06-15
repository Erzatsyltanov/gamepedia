import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const designers = [
  {
    id: 1,
    name: "Хидео Кодзима",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hideo_Kojima_2016.jpg/800px-Hideo_Kojima_2016.jpg",
    known_for: "Metal Gear Solid, Death Stranding",
    description: "Японский геймдизайнер, известный своими кинематографичными играми с сложными сюжетами и новаторскими игровыми механиками."
  },
  {
    id: 2,
    name: "Сигэру Миямото",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Shigeru_Miyamoto_2011.jpg/800px-Shigeru_Miyamoto_2011.jpg",
    known_for: "Mario, Zelda, Donkey Kong",
    description: "Легендарный японский геймдизайнер и продюсер Nintendo. Создатель многих культовых франшиз."
  },
  {
    id: 3,
    name: "Хидетака Миядзаки",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shinji_Mikami_April_2013_3.jpg/800px-Shinji_Mikami_April_2013_3.jpg",
    known_for: "Dark Souls, Elden Ring",
    description: "Президент FromSoftware и создатель серии Souls. Известен созданием сложных и атмосферных игр."
  },
  {
    id: 4,
    name: "Синдзи Миками",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shinji_Mikami_April_2013_3.jpg/800px-Shinji_Mikami_April_2013_3.jpg",
    known_for: "Resident Evil, The Evil Within",
    description: "Японский геймдизайнер, известный как создатель серии Resident Evil и жанра survival horror."
  },
  {
    id: 5,
    name: "Хидэки Камия",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hideki_Kamiya_2019.jpg/800px-Hideki_Kamiya_2019.jpg",
    known_for: "Bayonetta, Devil May Cry",
    description: "Японский геймдизайнер, известный созданием стильных экшенов с динамичными боевыми системами."
  },
  {
    id: 6,
    name: "Кадзунори Ямаути",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kazunori_Yamauchi_2019.jpg/800px-Kazunori_Yamauchi_2019.jpg",
    known_for: "Gran Turismo",
    description: "Японский геймдизайнер и CEO Polyphony Digital. Создатель серии гоночных симуляторов Gran Turismo."
  },
  {
    id: 7,
    name: "Эдвард Бон",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ed_Boon_2019.jpg/800px-Ed_Boon_2019.jpg",
    known_for: "Mortal Kombat",
    description: "Американский разработчик игр и один из создателей серии Mortal Kombat."
  },
  {
    id: 8,
    name: "Джон Кармак",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Carmack_2019.jpg/800px-John_Carmack_2019.jpg",
    known_for: "Doom, Quake",
    description: "Американский программист и соучредитель id Software. Пионер технологий 3D-графики."
  },
  {
    id: 9,
    name: "Гейб Ньюэлл",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gabe_Newell_2019.jpg/800px-Gabe_Newell_2019.jpg",
    known_for: "Half-Life, Steam",
    description: "Американский бизнесмен и соучредитель Valve. Руководил разработкой Half-Life и создал Steam."
  },
  {
    id: 10,
    name: "Ёко Таро",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yoko_Taro_2017.jpg/800px-Yoko_Taro_2017.jpg",
    known_for: "NieR, Drakengard",
    description: "Японский геймдизайнер, известный своими философскими и эмоционально сложными играми с уникальным повествованием. Создатель серий Drakengard и NieR."
  }
];

const Designers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Геймдизайнеры</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Выдающиеся личности, которые создали игры, изменившие индустрию и оставившие неизгладимый след в истории видеоигр.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designers.map(designer => (
              <Link to={`/designers/${designer.id}`} key={designer.id} className="block group">
                <Card className="overflow-hidden transition-all border-border hover:shadow-md hover:shadow-primary/20 hover:border-primary/50 designer-card">
                  <div className="aspect-square overflow-hidden bg-secondary/50">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{designer.name}</h3>
                    <p className="text-sm text-primary mb-2">{designer.known_for}</p>
                    <p className="text-sm text-foreground/70 line-clamp-3">{designer.description}</p>
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

export default Designers;