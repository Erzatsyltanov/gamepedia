import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  type: 'franchise' | 'character' | 'designer' | 'news';
  image: string;
  description: string;
  link: string;
}

const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'Final Fantasy',
    type: 'franchise',
    image: 'https://bymoonlightblog.wordpress.com/wp-content/uploads/2017/01/final-fantasy-logo.jpg?w=531&h=310',
    description: 'Культовая японская ролевая серия',
    link: '/franchises/final-fantasy'
  },
  {
    id: '2',
    title: '2B',
    type: 'character',
    image: 'https://avatars.mds.yandex.net/i?id=a117f35e9aba409740463a5c86d0d5bc9d3de279-5213357-images-thumbs&n=13',
    description: 'Боевой андроид из NieR: Automata',
    link: '/characters/1'
  },
  {
    id: '3',
    title: 'Хидео Кодзима',
    type: 'designer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hideo_Kojima_2016.jpg/800px-Hideo_Kojima_2016.jpg',
    description: 'Создатель Metal Gear Solid',
    link: '/designers/1'
  }
];

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleClose = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Поиск игр, персонажей, новостей..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-2">
            {results.map((result) => (
              <Link
                key={result.id}
                to={result.link}
                onClick={handleClose}
                className="flex items-center p-3 hover:bg-secondary rounded-md transition-colors"
              >
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-12 h-12 object-cover rounded mr-3"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{result.title}</h4>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {result.type === 'franchise' && 'Франшиза'}
                    {result.type === 'character' && 'Персонаж'}
                    {result.type === 'designer' && 'Дизайнер'}
                    {result.type === 'news' && 'Новость'}
                  </span>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;