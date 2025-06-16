import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Upload, Send, FileText, Image as ImageIcon } from 'lucide-react';

interface ArticleForm {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  authorName: string;
  authorEmail: string;
  tags: string;
}

const SubmitArticle = () => {
  const [formData, setFormData] = useState<ArticleForm>({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    authorName: '',
    authorEmail: '',
    tags: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ArticleForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Статья отправлена!",
        description: "Ваша статья была успешно отправлена на модерацию. Мы рассмотрим её в течение 24 часов.",
      });

      // Reset form
      setFormData({
        title: '',
        category: '',
        excerpt: '',
        content: '',
        imageUrl: '',
        authorName: '',
        authorEmail: '',
        tags: ''
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке статьи. Попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: 'games', label: 'Игры' },
    { value: 'characters', label: 'Персонажи' },
    { value: 'franchises', label: 'Франшизы' },
    { value: 'developers', label: 'Разработчики' },
    { value: 'news', label: 'Новости' },
    { value: 'reviews', label: 'Обзоры' },
    { value: 'guides', label: 'Гайды' },
    { value: 'lore', label: 'Лор и история' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Добавить статью</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Поделитесь своими знаниями о мире видеоигр с сообществом GamePulse. 
              Ваша статья будет рассмотрена модераторами и опубликована после одобрения.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Информация о статье
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Заголовок статьи *</Label>
                        <Input
                          id="title"
                          placeholder="Введите заголовок статьи"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Категория *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map(category => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Краткое описание *</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Краткое описание статьи (2-3 предложения)"
                        value={formData.excerpt}
                        onChange={(e) => handleInputChange('excerpt', e.target.value)}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content">Содержание статьи *</Label>
                      <Textarea
                        id="content"
                        placeholder="Основное содержание статьи. Используйте Markdown для форматирования."
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                        rows={12}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Поддерживается Markdown разметка: **жирный**, *курсив*, [ссылка](url), # заголовки
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">URL изображения</Label>
                      <div className="flex gap-2">
                        <Input
                          id="imageUrl"
                          placeholder="https://example.com/image.jpg"
                          value={formData.imageUrl}
                          onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                        />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                      {formData.imageUrl && (
                        <div className="mt-2">
                          <img
                            src={formData.imageUrl}
                            alt="Preview"
                            className="w-full max-w-md h-32 object-cover rounded border"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Теги</Label>
                      <Input
                        id="tags"
                        placeholder="Теги через запятую (например: RPG, Final Fantasy, Square Enix)"
                        value={formData.tags}
                        onChange={(e) => handleInputChange('tags', e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="authorName">Ваше имя *</Label>
                        <Input
                          id="authorName"
                          placeholder="Как вас называть?"
                          value={formData.authorName}
                          onChange={(e) => handleInputChange('authorName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="authorEmail">Email *</Label>
                        <Input
                          id="authorEmail"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.authorEmail}
                          onChange={(e) => handleInputChange('authorEmail', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Отправка...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Отправить на модерацию
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Правила публикации</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">✅ Разрешено:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Оригинальные статьи об играх</li>
                      <li>• Обзоры и рецензии</li>
                      <li>• Гайды и туториалы</li>
                      <li>• Истории персонажей</li>
                      <li>• Анализ игровых механик</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">❌ Запрещено:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Плагиат и копирование</li>
                      <li>• Спойлеры без предупреждения</li>
                      <li>• Оскорбления и токсичность</li>
                      <li>• Реклама и спам</li>
                      <li>• Нарушение авторских прав</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Советы по написанию</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>📝 <strong>Структура:</strong> Используйте заголовки и подзаголовки для лучшей читаемости</p>
                  <p>🖼️ <strong>Изображения:</strong> Добавляйте качественные изображения для иллюстрации</p>
                  <p>🔗 <strong>Ссылки:</strong> Ссылайтесь на источники и связанные статьи</p>
                  <p>✏️ <strong>Стиль:</strong> Пишите понятно и интересно для широкой аудитории</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Процесс модерации</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>1. Ваша статья поступает на модерацию</p>
                  <p>2. Модераторы проверяют содержание (до 24 часов)</p>
                  <p>3. При одобрении статья публикуется</p>
                  <p>4. Вы получаете уведомление на email</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitArticle;