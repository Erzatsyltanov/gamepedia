import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface FavoriteButtonProps {
  itemId: string;
  itemType: 'franchise' | 'character' | 'designer' | 'news';
  itemTitle: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ itemId, itemType, itemTitle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('gamepulse-favorites') || '[]');
    setIsFavorite(favorites.some((fav: any) => fav.id === itemId && fav.type === itemType));
  }, [itemId, itemType]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('gamepulse-favorites') || '[]');
    
    if (isFavorite) {
      const updated = favorites.filter((fav: any) => !(fav.id === itemId && fav.type === itemType));
      localStorage.setItem('gamepulse-favorites', JSON.stringify(updated));
      setIsFavorite(false);
      toast({
        title: "Удалено из избранного",
        description: `${itemTitle} удален из избранного`,
      });
    } else {
      const newFavorite = { id: itemId, type: itemType, title: itemTitle, addedAt: Date.now() };
      favorites.push(newFavorite);
      localStorage.setItem('gamepulse-favorites', JSON.stringify(favorites));
      setIsFavorite(true);
      toast({
        title: "Добавлено в избранное",
        description: `${itemTitle} добавлен в избранное`,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFavorite}
      className={`${isFavorite ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-foreground'}`}
    >
      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
    </Button>
  );
};

export default FavoriteButton;