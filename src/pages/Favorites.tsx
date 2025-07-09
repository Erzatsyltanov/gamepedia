import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface FavoriteItem {
  id: string;
  type: 'franchise' | 'character' | 'designer' | 'news';
  title: string;
  addedAt: number;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('gamepulse-favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id: string, type: string) => {
    const updated = favorites.filter(fav => !(fav.id === id && fav.type === type));
    localStorage.setItem('gamepulse-favorites', JSON.stringify(updated));
    setFavorites(updated);
    
    toast({
      title: "Удалено из избранного",
      description: "Элемент удален из избранного",
    });
  };

  const clearAllFavorites = () => {
    localStorage.removeItem('gamepulse-favorites');
    setFavorites([]);
    
    toast({
      title: "Избранное очищено",
      description: "Все элементы удалены из избранного",
    });
  };

  const getItemLink = (item: FavoriteItem) => {
    switch (item.type) {
      case 'franchise':
        return `/franchises/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
      case 'character':
        return `/characters/${item.id}`;
      case 'designer':
        return `/designers/${item.id}`;
      case 'news':
        return `/news/${item.id}`;
      default:
        return '/';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'franchise':
        return 'Франшиза';
      case 'character':
        return 'Персонаж';
      case 'designer':
        return 'Дизайнер';
      case 'news':
        return 'Новость';
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-500 fill-current" />
                  Избранное
                </h1>
                <p className="text-muted-foreground text-lg">
                  Ваши любимые игры, персонажи и статьи в одном месте
                </p>
              </div>
              {favorites.length > 0 && (
                <Button variant="outline" onClick={clearAllFavorites}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Очистить все
                </Button>
              )}
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground opacity-50" />
              <h2 className="text-2xl font-bold mb-4">Избранное пусто</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Добавляйте в избранное интересные игры, персонажей и статьи, 
                чтобы легко находить их позже
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/franchises">Исследовать игры</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/characters">Смотреть персонажей</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <Card key={`${item.type}-${item.id}`} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-2">
                          {getTypeLabel(item.type)}
                        </span>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Добавлено {new Date(item.addedAt).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFavorite(item.id, item.type)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to={getItemLink(item)}>
                        Перейти
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;