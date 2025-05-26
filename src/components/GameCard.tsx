import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const GameCard = ({ title, image, description, link }) => {
  return (
    <Link to={link} className="block group">
      <Card className="overflow-hidden transition-all border-border hover:shadow-md hover:shadow-primary/20 hover:border-primary/50">
        <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-foreground/70 line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;