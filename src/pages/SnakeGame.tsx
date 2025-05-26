
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SnakeGameComponent from '@/components/SnakeGame/SnakeGameComponent';

const SnakeGame = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Змейка</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Классическая игра змейка, прямо в вашем браузере. Соберите как можно больше еды и попробуйте установить новый рекорд.
            </p>
          </div>
          
          <div className="flex justify-center">
            <SnakeGameComponent />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SnakeGame;
