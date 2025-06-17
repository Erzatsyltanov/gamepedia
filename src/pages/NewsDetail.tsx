import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    slug: "stellar-blade-success",
    title: "Stellar Blade стала самой продаваемой игрой 2025 года",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
    date: "25 января 2025",
    author: "Редакция GamePulse",
    tags: ["Stellar Blade", "Продажи", "PlayStation", "Shift Up"],
    excerpt: "Экшен от Shift Up превзошел все ожидания, продавшись тиражом более 8 миллионов копий за первый месяц.",
    content: `
# Stellar Blade — феномен 2025 года

Экшен-игра **Stellar Blade** от южнокорейской студии Shift Up стала настоящим феноменом игровой индустрии, установив новые рекорды продаж и получив признание как критиков, так и игроков по всему миру.

## Рекордные продажи

За первый месяц после релиза игра продалась тиражом **более 8 миллионов копий**, что превзошло все ожидания как разработчиков, так и издателя Sony Interactive Entertainment. Это делает Stellar Blade самой быстро продаваемой новой IP на PlayStation 5.

### Ключевые цифры:
- **8+ миллионов** копий за первый месяц
- **95/100** на Metacritic
- **#1** в чартах PlayStation Store в 47 странах
- **4.8/5** средняя оценка пользователей

## Что делает игру особенной

Stellar Blade сочетает в себе:

- **Динамичную боевую систему** с элементами souls-like
- **Потрясающую графику**, демонстрирующую возможности PS5
- **Глубокий сюжет** о борьбе человечества за выживание
- **Уникальный художественный стиль** от корейских разработчиков

## Реакция индустрии

Успех Stellar Blade показал, что игроки готовы поддерживать новые IP от независимых студий, особенно когда они предлагают качественный и инновационный игровой опыт.

*"Мы никогда не ожидали такого невероятного отклика от игрового сообщества. Это вдохновляет нас на создание еще более амбициозных проектов"* — заявил директор Shift Up.

Stellar Blade доказала, что корейская игровая индустрия способна создавать проекты мирового уровня, конкурирующие с крупнейшими западными и японскими студиями.
    `
  },
  {
    id: 2,
    slug: "witcher-4-tech-demo",
    title: "The Witcher 4: CD Projekt RED продемонстрировала техническую демо-версию",
    image: "https://cdn.mos.cms.futurecdn.net/8gzcr6RpTN9TEyHVAM9eeF.jpg",
    date: "20 января 2025",
    author: "Игорь Петров",
    tags: ["The Witcher 4", "CD Projekt RED", "RPG", "Техническое демо"],
    excerpt: "CD Projekt RED показала впечатляющую техническую демонстрацию новой части The Witcher на движке Unreal Engine 5.",
    content: `
# The Witcher 4: Новая эра ведьмачьих приключений

CD Projekt RED представила долгожданную техническую демонстрацию **The Witcher 4**, показав значительный прогресс в разработке и впечатляющие визуальные возможности новой игры.

## Технические достижения

Демо-версия продемонстрировала:

### Графические улучшения
- **Фотореалистичные персонажи** с детализированной мимикой
- **Динамическая погодная система** с реалистичными эффектами
- **Улучшенная система освещения** на базе Unreal Engine 5
- **Детализированные окружения** с высоким уровнем интерактивности

### Игровые механики
- **Обновленная боевая система** с более плавными анимациями
- **Расширенная магическая система** с новыми знаками
- **Улучшенный ИИ** для более реалистичного поведения NPC

## Сюжетные детали

Хотя CD Projekt RED не раскрыла подробности сюжета, известно что:

- Действие происходит **после событий The Witcher 3**
- Игроки смогут **создать собственного ведьмака**
- **Геральт из Ривии** появится в игре, но не как главный герой
- **Новые школы ведьмаков** будут доступны для изучения

## Дата релиза

Официальная дата релиза пока не объявлена, но разработчики намекают на **2026-2027 годы**. CD Projekt RED подчеркивает, что не будет торопиться с выпуском, учитывая уроки Cyberpunk 2077.

*"Мы хотим убедиться, что The Witcher 4 превзойдет все ожидания фанатов и станет достойным продолжением легендарной серии"* — заявил представитель студии.
    `
  },
  {
    id: 3,
    slug: "sony-regional-restrictions",
    title: "Sony и PlayStation: Sony сняла региональные ограничения для некоторых игр",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-white-front-view-01-en-14sep21?$native--t$",
    date: "18 января 2025",
    author: "Анна Смирнова",
    tags: ["Sony", "PlayStation", "Региональные ограничения", "Политика"],
    excerpt: "Sony Interactive Entertainment объявила о снятии региональных ограничений для ряда игр в PlayStation Store.",
    content: `
# Sony снимает региональные барьеры

Sony Interactive Entertainment объявила о **значительных изменениях** в политике региональных ограничений, что станет хорошей новостью для миллионов игроков по всему миру.

## Что изменилось

### Снятые ограничения
- **Более 200 игр** теперь доступны во всех регионах
- **Независимые проекты** получили приоритет в глобальном распространении
- **Ретро-игры** из PlayStation Plus стали доступны повсеместно

### Затронутые регионы
- **Восточная Европа** — доступ к 150+ ранее заблокированным играм
- **Латинская Америка** — снятие ограничений с 80+ тайтлов
- **Азиатско-Тихоокеанский регион** — унификация каталогов

## Причины изменений

Sony объясняет решение несколькими факторами:

1. **Глобализация игровой индустрии**
2. **Требования игрового сообщества**
3. **Конкуренция с другими платформами**
4. **Упрощение логистики цифрового распространения**

## Реакция разработчиков

Независимые разработчики особенно довольны изменениями:

*"Теперь наши игры смогут найти свою аудиторию по всему миру без бюрократических препятствий"* — комментирует представитель инди-студии.

## Что дальше

Sony планирует:
- **Полную унификацию** каталогов к концу 2025 года
- **Упрощение процедур** для разработчиков
- **Локализацию** большего количества игр

Это решение делает PlayStation более конкурентоспособной платформой на глобальном рынке и улучшает пользовательский опыт для игроков во всем мире.
    `
  },
  {
    id: 4,
    slug: "mindseye-negative-reviews",
    title: "MindsEye: Шпионский экшен MindsEye получил негативные отзывы",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1234567/header.jpg",
    date: "15 января 2025",
    author: "Дмитрий Козлов",
    tags: ["MindsEye", "Экшен", "Обзор", "Критика"],
    excerpt: "Долгожданный шпионский экшен MindsEye разочаровал критиков и игроков техническими проблемами и слабым геймплеем.",
    content: `
# MindsEye: Провал года или недооцененный проект?

Шпионский экшен **MindsEye** от студии Phantom Interactive стал одним из самых обсуждаемых разочарований начала 2025 года, получив преимущественно негативные отзывы от критиков и игроков.

## Основные проблемы

### Технические недостатки
- **Многочисленные баги** и вылеты игры
- **Проблемы с производительностью** даже на мощных системах
- **Плохая оптимизация** для консолей
- **Нестабильный мультиплеер** с частыми отключениями

### Игровые механики
- **Устаревший ИИ** противников
- **Однообразные миссии** без вариативности
- **Слабая система стелса** с предсказуемыми паттернами
- **Неудобное управление** и отзывчивость

## Оценки критиков

Игра получила низкие оценки в ведущих изданиях:

- **IGN**: 4/10 — "Технический провал"
- **GameSpot**: 3/10 — "Упущенная возможность"
- **PC Gamer**: 35/100 — "Нуждается в серьезной доработке"
- **Metacritic**: 42/100 (PC), 38/100 (консоли)

## Реакция сообщества

Игроки в Steam оставили **преимущественно негативные отзывы**:

*"Игра выглядела многообещающе в трейлерах, но реальность оказалась совсем другой. Множество багов делает прохождение невозможным"* — типичный отзыв игрока.

### Основные жалобы игроков:
- Частые вылеты и зависания
- Неработающие достижения
- Проблемы с сохранениями
- Отсутствие обещанных функций

## Ответ разработчиков

Phantom Interactive признала проблемы и пообещала:

1. **Крупное обновление** в течение месяца
2. **Исправление критических багов**
3. **Оптимизацию производительности**
4. **Компенсацию** для ранних покупателей

*"Мы понимаем разочарование игроков и работаем круглосуточно над исправлением проблем"* — заявил директор студии.

## Уроки для индустрии

MindsEye стал очередным примером того, как **преждевременный релиз** может погубить потенциально хорошую игру. Это подчеркивает важность качественного тестирования и готовности отложить релиз ради качества продукта.
    `
  },
  {
    id: 5,
    slug: "clair-obscur-expedition-33-success",
    title: "Clair Obscur: Expedition 33: Ролевая игра от Sandfall Interactive продала миллион копий за три дня",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2345678/header.jpg",
    date: "12 января 2025",
    author: "Елена Волкова",
    tags: ["Clair Obscur", "RPG", "Sandfall Interactive", "Успех"],
    excerpt: "Французская студия Sandfall Interactive празднует невероятный успех своей дебютной RPG, которая получила высокие оценки критиков.",
    content: `
# Clair Obscur: Expedition 33 — Французское чудо RPG

Дебютная ролевая игра **Clair Obscur: Expedition 33** от французской студии Sandfall Interactive стала настоящей сенсацией, продав **миллион копий всего за три дня** после релиза.

## Феноменальный успех

### Рекордные продажи
- **1 миллион копий** за первые 72 часа
- **#1 в Steam** в категории RPG
- **Топ-3** в общем чарте продаж
- **500,000 игроков** одновременно в пике

### Критические оценки
Игра получила восторженные отзывы:
- **Metacritic**: 89/100 (PC), 87/100 (консоли)
- **IGN**: 9/10 — "Шедевр жанра"
- **GameSpot**: 9/10 — "Новый эталон JRPG"
- **PC Gamer**: 92/100 — "Обязательно к прохождению"

## Что делает игру особенной

### Уникальная боевая система
- **Пошаговые бои** с элементами реального времени
- **Система "Живых картин"** — бои происходят в движущихся диорамах
- **Комбо-атаки** между членами команды
- **Динамическое окружение** влияет на стратегию

### Художественный стиль
- **Belle Époque эстетика** с элементами стимпанка
- **Рисованная анимация** высочайшего качества
- **Кинематографичные сцены** с профессиональной озвучкой
- **Уникальный мир** с глубокой мифологией

## Сюжет и персонажи

Игра рассказывает историю **экспедиции в таинственный мир**, где:

- **Время остановилось** в определенный момент
- **Живые картины** хранят воспоминания прошлого
- **Команда исследователей** ищет способ вернуть время
- **Каждый персонаж** имеет личную мотивацию

## Реакция игроков

Сообщество в восторге от игры:

*"Наконец-то JRPG, которая не боится экспериментировать! Каждый бой — это произведение искусства"* — отзыв игрока в Steam.

### Особенно хвалят:
- Инновационную боевую систему
- Потрясающую графику и анимацию
- Глубокий и интригующий сюжет
- Качественную локализацию

## Планы разработчиков

Sandfall Interactive уже анонсировала:

1. **Бесплатное DLC** с дополнительными персонажами
2. **Режим New Game+** с новыми возможностями
3. **Поддержку модификаций** для PC
4. **Сиквел** уже находится в разработке

*"Мы никогда не мечтали о таком успехе. Это вдохновляет нас создавать еще более амбициозные проекты"* — заявил креативный директор студии.

Clair Obscur: Expedition 33 доказала, что инновации и качество исполнения могут сделать даже дебютную игру от небольшой студии мировым хитом.
    `
  }
];

const NewsDetail = () => {
  const { slug } = useParams<{slug: string}>();
  const article = newsData.find(item => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Новость не найдена</h1>
            <p className="text-muted-foreground mb-6">Извините, запрашиваемая новость не существует.</p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться к новостям
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад к новостям
            </Link>
          </Button>

          <article>
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
                    {article.excerpt}
                  </div>
                  
                  <div 
                    className="space-y-6"
                    dangerouslySetInnerHTML={{ 
                      __html: article.content
                        .split('\n')
                        .map(line => {
                          if (line.startsWith('# ')) {
                            return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                          }
                          if (line.startsWith('## ')) {
                            return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                          }
                          if (line.startsWith('### ')) {
                            return `<h3 class="text-xl font-semibold mt-4 mb-2">${line.slice(4)}</h3>`;
                          }
                          if (line.startsWith('- **')) {
                            const match = line.match(/- \*\*(.*?)\*\*(.*)/);
                            if (match) {
                              return `<li class="mb-2"><strong>${match[1]}</strong>${match[2]}</li>`;
                            }
                          }
                          if (line.startsWith('- ')) {
                            return `<li class="mb-1">${line.slice(2)}</li>`;
                          }
                          if (line.includes('**') && line.includes('**')) {
                            return `<p class="mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
                          }
                          if (line.includes('*"') && line.includes('"*')) {
                            return `<blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">${line.replace(/\*"(.*?)"\*/g, '"$1"')}</blockquote>`;
                          }
                          if (line.trim() === '') {
                            return '';
                          }
                          return `<p class="mb-4">${line}</p>`;
                        })
                        .join('')
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Похожие новости</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsData
                .filter(item => item.id !== article.id)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/news/${relatedArticle.slug}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{relatedArticle.date}</p>
                        <p className="text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;