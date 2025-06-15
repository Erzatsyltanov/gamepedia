import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SnakeGameComponent from '@/components/SnakeGame/SnakeGameComponent';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const SnakeGame = () => {
  const [currentGame, setCurrentGame] = useState('snake');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-b border-border pb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Классические игры</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Коллекция классических аркадных игр, которые можно играть прямо в браузере. Окунитесь в ностальгию!
            </p>
          </div>

          {/* Game Selection */}
          <div className="mb-8">
            <div className="flex gap-4 justify-center">
              <Button 
                variant={currentGame === 'snake' ? 'default' : 'outline'}
                onClick={() => setCurrentGame('snake')}
              >
                🐍 Змейка
              </Button>
              <Button 
                variant={currentGame === 'pong' ? 'default' : 'outline'}
                onClick={() => setCurrentGame('pong')}
              >
                🏓 Понг
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            {currentGame === 'snake' ? (
              <SnakeGameComponent />
            ) : (
              <PongGame />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Pong Game Component
const PongGame = () => {
  const [gameState, setGameState] = useState({
    playerScore: 0,
    computerScore: 0,
    isPlaying: false,
    gameOver: false
  });

  const [gameRef, setGameRef] = useState<HTMLCanvasElement | null>(null);

  const startGame = () => {
    if (!gameRef) return;
    
    const canvas = gameRef;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game variables
    let animationId: number;
    let playerY = canvas.height / 2 - 50;
    let computerY = canvas.height / 2 - 50;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 5;
    let ballSpeedY = 3;
    let playerScore = 0;
    let computerScore = 0;

    const paddleHeight = 100;
    const paddleWidth = 10;
    const ballSize = 10;

    setGameState(prev => ({ ...prev, isPlaying: true, gameOver: false }));

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw center line
      ctx.setLineDash([5, 15]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      ctx.setLineDash([]);

      // Move ball
      ballX += ballSpeedX;
      ballY += ballSpeedY;

      // Ball collision with top and bottom
      if (ballY <= 0 || ballY >= canvas.height - ballSize) {
        ballSpeedY = -ballSpeedY;
      }

      // Ball collision with paddles
      if (ballX <= paddleWidth && ballY >= playerY && ballY <= playerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        ballSpeedY += (Math.random() - 0.5) * 2; // Add some randomness
      }

      if (ballX >= canvas.width - paddleWidth - ballSize && ballY >= computerY && ballY <= computerY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        ballSpeedY += (Math.random() - 0.5) * 2;
      }

      // Score
      if (ballX < 0) {
        computerScore++;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 5;
        ballSpeedY = 3;
      }

      if (ballX > canvas.width) {
        playerScore++;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -5;
        ballSpeedY = 3;
      }

      // Computer AI
      const computerCenter = computerY + paddleHeight / 2;
      if (computerCenter < ballY - 35) {
        computerY += 4;
      } else if (computerCenter > ballY + 35) {
        computerY -= 4;
      }

      // Keep computer paddle in bounds
      if (computerY < 0) computerY = 0;
      if (computerY > canvas.height - paddleHeight) computerY = canvas.height - paddleHeight;

      // Draw player paddle
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, playerY, paddleWidth, paddleHeight);

      // Draw computer paddle
      ctx.fillRect(canvas.width - paddleWidth, computerY, paddleWidth, paddleHeight);

      // Draw ball
      ctx.fillRect(ballX, ballY, ballSize, ballSize);

      // Draw scores
      ctx.font = '30px Arial';
      ctx.fillText(playerScore.toString(), canvas.width / 4, 50);
      ctx.fillText(computerScore.toString(), 3 * canvas.width / 4, 50);

      // Update state
      setGameState(prev => ({
        ...prev,
        playerScore,
        computerScore
      }));

      // Check for game over
      if (playerScore >= 5 || computerScore >= 5) {
        setGameState(prev => ({
          ...prev,
          isPlaying: false,
          gameOver: true
        }));
        return;
      }

      animationId = requestAnimationFrame(gameLoop);
    };

    // Mouse control
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      playerY = mouseY - paddleHeight / 2;
      
      // Keep paddle in bounds
      if (playerY < 0) playerY = 0;
      if (playerY > canvas.height - paddleHeight) playerY = canvas.height - paddleHeight;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    gameLoop();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  };

  const resetGame = () => {
    setGameState({
      playerScore: 0,
      computerScore: 0,
      isPlaying: false,
      gameOver: false
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Понг</h2>
        <p className="text-muted-foreground mb-4">
          Управляйте левой ракеткой мышью. Первый до 5 очков побеждает!
        </p>
        
        {gameState.gameOver && (
          <div className="mb-4 p-4 bg-secondary rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              {gameState.playerScore > gameState.computerScore ? 'Вы победили!' : 'Компьютер победил!'}
            </h3>
            <p>Финальный счет: {gameState.playerScore} - {gameState.computerScore}</p>
          </div>
        )}
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <canvas
            ref={setGameRef}
            width={800}
            height={400}
            className="border border-border bg-black cursor-none"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </CardContent>
      </Card>

      <div className="flex gap-4">
        {!gameState.isPlaying && (
          <Button 
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
          >
            {gameState.gameOver ? 'Играть снова' : 'Начать игру'}
          </Button>
        )}
        
        {gameState.gameOver && (
          <Button variant="outline" onClick={resetGame}>
            Сбросить счет
          </Button>
        )}
      </div>

      <div className="mt-6 text-center text-muted-foreground">
        <p>Двигайте мышью для управления левой ракеткой</p>
        <p>Счет: Вы {gameState.playerScore} - {gameState.computerScore} Компьютер</p>
      </div>
    </div>
  );
};

export default SnakeGame;