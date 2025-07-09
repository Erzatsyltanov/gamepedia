import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface RatingSystemProps {
  itemId: string;
  itemType: string;
  itemTitle: string;
}

interface Rating {
  average: number;
  count: number;
  userRating?: number;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ itemId, itemType, itemTitle }) => {
  const [rating, setRating] = useState<Rating>({ average: 0, count: 0 });
  const [hoveredStar, setHoveredStar] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${itemType}-${itemId}`);
    if (savedRating) {
      setRating(JSON.parse(savedRating));
    }
  }, [itemId, itemType]);

  const submitRating = (stars: number) => {
    const currentRating = rating;
    let newAverage: number;
    let newCount: number;

    if (currentRating.userRating) {
      // Update existing rating
      const totalScore = currentRating.average * currentRating.count;
      const newTotalScore = totalScore - currentRating.userRating + stars;
      newAverage = newTotalScore / currentRating.count;
      newCount = currentRating.count;
    } else {
      // New rating
      const totalScore = currentRating.average * currentRating.count + stars;
      newCount = currentRating.count + 1;
      newAverage = totalScore / newCount;
    }

    const updatedRating: Rating = {
      average: Math.round(newAverage * 10) / 10,
      count: newCount,
      userRating: stars
    };

    localStorage.setItem(`rating-${itemType}-${itemId}`, JSON.stringify(updatedRating));
    setRating(updatedRating);

    toast({
      title: "Оценка сохранена",
      description: `Вы оценили "${itemTitle}" на ${stars} звезд${stars === 1 ? 'у' : stars < 5 ? 'ы' : ''}`,
    });
  };

  const StarButton: React.FC<{ index: number }> = ({ index }) => {
    const filled = index <= (hoveredStar || rating.userRating || 0);
    
    return (
      <Button
        variant="ghost"
        size="sm"
        className="p-1 h-auto"
        onMouseEnter={() => setHoveredStar(index)}
        onMouseLeave={() => setHoveredStar(0)}
        onClick={() => submitRating(index)}
      >
        <Star
          className={`w-6 h-6 ${
            filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          } transition-colors`}
        />
      </Button>
    );
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(rating.average)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 font-medium">{rating.average.toFixed(1)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {rating.count} оценок
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-sm text-muted-foreground mb-1">Ваша оценка:</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton key={star} index={star} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingSystem;