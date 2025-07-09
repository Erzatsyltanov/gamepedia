import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle, Heart, User } from 'lucide-react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            GAMEPULSE
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchBar />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/news" className="text-foreground/80 hover:text-primary transition-colors">
            Новости
          </Link>
          <Link to="/franchises" className="text-foreground/80 hover:text-primary transition-colors">
            Франшизы
          </Link>
          <Link to="/characters" className="text-foreground/80 hover:text-primary transition-colors">
            Персонажи
          </Link>
          <Link to="/consoles" className="text-foreground/80 hover:text-primary transition-colors">
            Консоли
          </Link>
          <Link to="/designers" className="text-foreground/80 hover:text-primary transition-colors">
            Геймдизайнеры
          </Link>
          <Link to="/snake" className="text-foreground/80 hover:text-primary transition-colors">
            Игры
          </Link>
          <Link to="/guides" className="text-foreground/80 hover:text-primary transition-colors">
            Гайды
          </Link>
          <Link to="/reviews" className="text-foreground/80 hover:text-primary transition-colors">
            Обзоры
          </Link>
          <Link to="/history" className="text-foreground/80 hover:text-primary transition-colors">
            История
          </Link>
          <Link to="/esports" className="text-foreground/80 hover:text-primary transition-colors">
            Киберспорт
          </Link>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/favorites">
              <Heart className="w-5 h-5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
            <Link to="/submit-article">
              <PlusCircle className="w-4 h-4 mr-2" />
              Добавить статью
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-4 pb-2">
            <SearchBar onClose={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
            <Link to="/news" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Новости
            </Link>
            <Link to="/franchises" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Франшизы
            </Link>
            <Link to="/characters" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Персонажи
            </Link>
            <Link to="/consoles" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Консоли
            </Link>
            <Link to="/designers" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Геймдизайнеры
            </Link>
            <Link to="/snake" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Игры
            </Link>
            <Link to="/guides" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Гайды
            </Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Обзоры
            </Link>
            <Link to="/history" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              История
            </Link>
            <Link to="/esports" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Киберспорт
            </Link>
            <Link to="/favorites" className="text-foreground hover:text-primary transition-colors py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Heart className="w-4 h-4 mr-2" />
              Избранное
            </Link>
            <Button asChild size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 w-fit" onClick={() => setIsMenuOpen(false)}>
              <Link to="/submit-article">
                <PlusCircle className="w-4 h-4 mr-2" />
                Добавить статью
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;