import { Link } from 'react-router-dom';
import { Book, Info, Newspaper } from 'lucide-react';

interface NewsCardProps {
  title: string;
  image: string;
  date: string;
  excerpt: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, image, date, excerpt, link }) => {
  return (
    <Link to={link} className="news-card block hover:scale-105 transition-transform">
      <div className="aspect-video bg-muted overflow-hidden relative rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center text-white">
            <Newspaper className="w-4 h-4 mr-1" />
            <Book className="w-4 h-4 mx-1" />
            <Info className="w-4 h-4 mx-1" />
            <span className="text-xs font-medium">Новость</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{date}</p>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
};

export default NewsCard;