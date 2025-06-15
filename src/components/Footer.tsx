const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">GAMEPULSE</h3>
            <p className="text-muted-foreground">
              Энциклопедия мира видеоигр, посвящённая играм всех жанров и платформ.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li><a href="/news" className="text-muted-foreground hover:text-primary transition-colors">Новости</a></li>
              <li><a href="/franchises" className="text-muted-foreground hover:text-primary transition-colors">Франшизы</a></li>
              <li><a href="/characters" className="text-muted-foreground hover:text-primary transition-colors">Персонажи</a></li>
              <li><a href="/consoles" className="text-muted-foreground hover:text-primary transition-colors">Консоли</a></li>
              <li><a href="/designers" className="text-muted-foreground hover:text-primary transition-colors">Геймдизайнеры</a></li>
              <li><a href="/snake" className="text-muted-foreground hover:text-primary transition-colors">Игры</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">О проекте</h4>
            <p className="text-muted-foreground">
              GamePulse — потому что каждая игра заслуживает свою страницу. Мы собираем статьи и факты об играх как для новичков, так и для хардкорных геймеров.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GamePulse. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;