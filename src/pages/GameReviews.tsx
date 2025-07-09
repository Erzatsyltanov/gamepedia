import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Calendar, User, ThumbsUp, MessageCircle, Eye } from 'lucide-react';

const gameReviews = [
  {
    id: 1,
    title: "Stellar Blade: Шедевр экшена или красивая пустышка?",
    game: "Stellar Blade",
    rating: 9.2,
    author: "GameCritic",
    date: "2025-01-25",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    excerpt: "Подробный разбор нового хита от Shift Up: геймплей, сюжет, графика и общие впечатления от игры.",
    pros: ["Потрясающая графика", "Отличная боевая система", "Интересный сюжет"],
    cons: ["Иногда повторяющиеся локации", "Сложность для новичков"],
    platform: "PlayStation 5",
    genre: "Action",
    likes: 342,
    comments: 89,
    views: 15420
  },
  {
    id: 2,
    title: "Clair Obscur: Expedition 33 - Французское чудо JRPG",
    game: "Clair Obscur: Expedition 33",
    rating: 8.8,
    author: "RPGMaster",
    date: "2025-01-20",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2345678/header.jpg",
    excerpt: "Обзор дебютной RPG от Sandfall Interactive, которая покорила сердца игроков по всему миру.",
    pros: ["Уникальная боевая система", "Потрясающий арт-стиль", "Глубокий сюжет"],
    cons: ["Высокий порог входа", "Местами затянутые диалоги"],
    platform: "PC, PlayStation, Xbox",
    genre: "JRPG",
    likes: 256,
    comments: 67,
    views: 12350
  },
  {
    id: 3,
    title: "The Witcher 4: Первые впечатления от демо",
    game: "The Witcher 4",
    rating: 8.5,
    author: "WitcherFan",
    date: "2025-01-18",
    image: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpTN9TEyHVAM9eeF.jpg",
    excerpt: "Разбор технической демонстрации The Witcher 4 от CD Projekt RED и наши ожидания от полной версии.",
    pros: ["Улучшенная графика", "Новые игровые механики", "Знакомая атмосфера"],
    cons: ["Пока только демо", "Неизвестная дата релиза"],
    platform: "PC, PlayStation, Xbox",
    genre: "RPG",
    likes: 189,
    comments: 45,
    views: 9840
  },
  {
    id: 4,
    title: "MindsEye: Что пошло не так?",
    game: "MindsEye",
    rating: 4.2,
    author: "HonestReviewer",
    date: "2025-01-15",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1234567/header.jpg",
    excerpt: "Честный разбор провального шпионского экшена MindsEye и анализ его основных проблем.",
    pros: ["Интересная концепция", "Хорошая музыка"],
    cons: ["Множество багов", "Плохая оптимизация", "Слабый ИИ", "Короткая кампания"],
    platform: "PC, PlayStation, Xbox",
    genre: "Action",
    likes: 78,
    comments: 156,
    views: 8750
  },
  {
    id: 5,
    title: "Baldur's Gate 3: Год спустя - все еще лучшая RPG?",
    game: "Baldur's Gate 3",
    rating: 9.5,
    author: "D&DExpert",
    date: "2025-01-10",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    excerpt: "Ретроспективный взгляд на Baldur's Gate 3 через год после релиза: что изменилось и почему игра остается актуальной.",
    pros: ["Невероятная свобода выбора", "Отличные персонажи", "Постоянные обновления"],
    cons: ["Высокие системные требования", "Сложность для новичков в D&D"],
    platform: "PC, PlayStation 5",
    genre: "RPG",
    likes: 445,
    comments: 123,
    views: 22100
  },
  {
    id: 6,
    title: "Hades 2: Ранний доступ впечатляет",
    game: "Hades 2",
    rating: 8.7,
    author: "IndieGamer",
    date: "2025-01-08",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
    excerpt: "Первые впечатления от раннего доступа Hades 2: новая героиня, улучшенный геймплей и знакомое качество Supergiant Games.",
    pros: ["Отличная боевая система", "Новые механики", "Качественная озвучка"],
    cons: ["Пока не все контент доступен", "Некоторые баги раннего доступа"],
    platform: "PC",
    genre: "Roguelike",
    likes: 298,
    comments: 87,
    views: 16750
  }
];

const GameReviews = () => {
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-500';
    if (rating >= 7) return 'text-yellow-500';
    if (rating >= 5) return 'text-orange-500';
    return 'text-red-500';
  };

  const getRatingBadge = (rating: number) => {
    if (rating >= 9) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (rating >= 7) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    if (rating >= 5) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
              <Star className="w-8 h-8 mr-3 text-primary" />
              Обзоры игр
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Честные и подробные обзоры новых и популярных игр от наших экспертов и сообщества.
            </p>
          </div>

          {/* Featured Review */}
          <Card className="mb-12 overflow-hidden bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={gameReviews[0].image}
                    alt={gameReviews[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                    ⭐ ОБЗОР НЕДЕЛИ
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {gameReviews[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {gameReviews[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className={`text-2xl font-bold ${getRatingColor(gameReviews[0].rating)}`}>
                        {gameReviews[0].rating}/10
                      </div>
                      <div className="text-sm text-muted-foreground">Оценка</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{gameReviews[0].likes}</div>
                      <div className="text-sm text-muted-foreground">Лайков</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{gameReviews[0].views.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Просмотров</div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 w-fit">
                    Читать обзор
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameReviews.slice(1).map(review => (
              <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getRatingBadge(review.rating)}>
                      {review.rating}/10
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{review.genre}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(review.date).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{review.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {review.excerpt}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Плюсы:</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {review.pros.slice(0, 2).map((pro, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {review.author}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {review.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {review.comments}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Читать полный обзор
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review Stats */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Статистика обзоров</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Всего обзоров', value: '156', icon: Star },
                { label: 'Средняя оценка', value: '7.8', icon: ThumbsUp },
                { label: 'Просмотров', value: '2.1M', icon: Eye },
                { label: 'Комментариев', value: '8.4K', icon: MessageCircle }
              ].map(stat => (
                <Card key={stat.label} className="text-center p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GameReviews;