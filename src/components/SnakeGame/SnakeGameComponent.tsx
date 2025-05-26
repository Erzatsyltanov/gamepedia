import { useEffect, useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';

// Constants for the game
const GRID_SIZE = 20;
const CELL_SIZE_PX = 20;
const GAME_SPEED = 150;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 }
};

type Cell = {
  x: number;
  y: number;
};

type Direction = {
  x: number;
  y: number;
};

const SnakeGameComponent = () => {
  const [snake, setSnake] = useState<Cell[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Cell>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>(DIRECTIONS.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const gameLoopRef = useRef<number | null>(null);
  const lastDirectionRef = useRef<Direction>(direction);

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    
    // Ensure food doesn't spawn on snake
    const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    
    return isOnSnake ? generateFood() : newFood;
  }, [snake]);

  // Handle key presses
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const currentDirection = lastDirectionRef.current;
    
    switch (e.key) {
      case "ArrowUp":
        if (currentDirection.y !== 1) {
          setDirection(DIRECTIONS.UP);
        }
        break;
      case "ArrowDown":
        if (currentDirection.y !== -1) {
          setDirection(DIRECTIONS.DOWN);
        }
        break;
      case "ArrowLeft":
        if (currentDirection.x !== 1) {
          setDirection(DIRECTIONS.LEFT);
        }
        break;
      case "ArrowRight":
        if (currentDirection.x !== -1) {
          setDirection(DIRECTIONS.RIGHT);
        }
        break;
      case " ": // Space key
        togglePause();
        break;
      default:
        break;
    }
  }, []);

  // Main game loop
  const gameLoop = useCallback(() => {
    if (isPaused || isGameOver) return;
    
    setSnake(prevSnake => {
      // Calculate new head position
      const head = prevSnake[0];
      const newHead = {
        x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE
      };
      
      // Check for collision with self
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        return prevSnake;
      }
      
      // Create new snake body
      const newSnake = [newHead, ...prevSnake];
      
      // Check if snake ate food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => {
          const newScore = prev + 1;
          if (newScore > highScore) {
            setHighScore(newScore);
          }
          return newScore;
        });
        setFood(generateFood());
      } else {
        // Remove tail if no food was eaten
        newSnake.pop();
      }
      
      return newSnake;
    });
    
    // Keep track of the last direction for collision prevention
    lastDirectionRef.current = direction;
    
  }, [direction, food, generateFood, isGameOver, isPaused, highScore]);

  // Start/reset game
  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(DIRECTIONS.RIGHT);
    lastDirectionRef.current = DIRECTIONS.RIGHT;
    setFood(generateFood());
    setIsGameOver(false);
    setIsPaused(false);
    setScore(0);
  };

  // Toggle pause state
  const togglePause = () => {
    if (isGameOver) {
      startGame();
    } else {
      setIsPaused(prev => !prev);
    }
  };

  // Set up game loop and key listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    
    if (!isPaused && !isGameOver) {
      gameLoopRef.current = window.setInterval(gameLoop, GAME_SPEED);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameLoop, handleKeyPress, isPaused, isGameOver]);

  // Handle direction buttons for mobile
  const handleDirectionButton = (newDirection: Direction) => {
    const currentDirection = lastDirectionRef.current;
    
    // Prevent 180 degree turns
    if (
      (currentDirection.x === 1 && newDirection.x === -1) ||
      (currentDirection.x === -1 && newDirection.x === 1) ||
      (currentDirection.y === 1 && newDirection.y === -1) ||
      (currentDirection.y === -1 && newDirection.y === 1)
    ) {
      return;
    }
    
    setDirection(newDirection);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Змейка</h2>
        <div className="flex justify-between items-center mb-4 w-full">
          <div className="text-lg">Счет: <span className="font-semibold text-primary">{score}</span></div>
          <div className="text-lg">Рекорд: <span className="font-semibold text-primary">{highScore}</span></div>
        </div>
        {isGameOver && (
          <p className="text-destructive font-semibold mb-4 text-lg">Игра окончена!</p>
        )}
      </div>
      
      <div 
        className="relative bg-secondary border-2 border-secondary shadow-lg rounded-md overflow-hidden"
        style={{ 
          width: `${CELL_SIZE_PX * GRID_SIZE}px`, 
          height: `${CELL_SIZE_PX * GRID_SIZE}px` 
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div 
            key={index} 
            className={`absolute ${index === 0 ? 'bg-purple-500' : 'bg-purple-400'} rounded-sm`} 
            style={{
              width: `${CELL_SIZE_PX}px`,
              height: `${CELL_SIZE_PX}px`,
              left: `${segment.x * CELL_SIZE_PX}px`,
              top: `${segment.y * CELL_SIZE_PX}px`,
              boxShadow: index === 0 ? '0 0 5px rgba(139, 92, 246, 0.7)' : 'none'
            }}
          />
        ))}
        
        {/* Food */}
        <div 
          className="absolute bg-blue-400 rounded-full animate-pulse"
          style={{
            width: `${CELL_SIZE_PX}px`,
            height: `${CELL_SIZE_PX}px`,
            left: `${food.x * CELL_SIZE_PX}px`,
            top: `${food.y * CELL_SIZE_PX}px`,
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.7)'
          }}
        />
        
        {/* Pause overlay */}
        {isPaused && !isGameOver && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
            <p className="text-2xl text-white font-bold">ПАУЗА</p>
          </div>
        )}
        
        {/* Game over overlay */}
        {isGameOver && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
              onClick={startGame}
            >
              Начать заново
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-2 w-[240px]">
        <Button 
          variant="secondary" 
          className="col-start-2" 
          onClick={() => handleDirectionButton(DIRECTIONS.UP)}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
        <Button 
          variant="secondary" 
          className="col-start-1 col-span-1 row-start-2" 
          onClick={() => handleDirectionButton(DIRECTIONS.LEFT)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant={isPaused ? "default" : "outline"} 
          className="col-start-2 col-span-1 row-start-2" 
          onClick={togglePause}
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </Button>
        <Button 
          variant="secondary" 
          className="col-start-3 col-span-1 row-start-2" 
          onClick={() => handleDirectionButton(DIRECTIONS.RIGHT)}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
        <Button 
          variant="secondary" 
          className="col-start-2 row-start-3" 
          onClick={() => handleDirectionButton(DIRECTIONS.DOWN)}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="mt-6 text-center text-muted-foreground">
        <p className="mb-2">Используйте стрелки для управления или кнопки выше.</p>
        <p>Нажмите пробел для паузы.</p>
      </div>
    </div>
  );
};

export default SnakeGameComponent;
