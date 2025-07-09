import { useState, useEffect } from 'react';
import { MessageCircle, Send, ThumbsUp, ThumbsDown, Reply } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from '@/components/ui/use-toast';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  replies: Comment[];
}

interface CommentSectionProps {
  itemId: string;
  itemType: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ itemId, itemType }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    // Load comments from localStorage
    const savedComments = localStorage.getItem(`comments-${itemType}-${itemId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [itemId, itemType]);

  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`comments-${itemType}-${itemId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const addComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: `Пользователь${Math.floor(Math.random() * 1000)}`,
      content: newComment,
      timestamp: Date.now(),
      likes: 0,
      dislikes: 0,
      replies: []
    };

    const updatedComments = [comment, ...comments];
    saveComments(updatedComments);
    setNewComment('');
    
    toast({
      title: "Комментарий добавлен",
      description: "Ваш комментарий успешно опубликован",
    });
  };

  const addReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      author: `Пользователь${Math.floor(Math.random() * 1000)}`,
      content: replyContent,
      timestamp: Date.now(),
      likes: 0,
      dislikes: 0,
      replies: []
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === parentId) {
        return { ...comment, replies: [reply, ...comment.replies] };
      }
      return comment;
    });

    saveComments(updatedComments);
    setReplyContent('');
    setReplyTo(null);
    
    toast({
      title: "Ответ добавлен",
      description: "Ваш ответ успешно опубликован",
    });
  };

  const likeComment = (commentId: string, isReply = false, parentId?: string) => {
    const updatedComments = comments.map(comment => {
      if (isReply && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply =>
            reply.id === commentId ? { ...reply, likes: reply.likes + 1 } : reply
          )
        };
      } else if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    saveComments(updatedComments);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const CommentItem: React.FC<{ comment: Comment; isReply?: boolean; parentId?: string }> = ({ 
    comment, 
    isReply = false, 
    parentId 
  }) => (
    <div className={`${isReply ? 'ml-8 border-l-2 border-border pl-4' : ''}`}>
      <div className="flex items-start space-x-3 mb-4">
        <Avatar className="w-8 h-8">
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm">{comment.author}</span>
            <span className="text-xs text-muted-foreground">{formatDate(comment.timestamp)}</span>
          </div>
          <p className="text-sm mb-2">{comment.content}</p>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => likeComment(comment.id, isReply, parentId)}
              className="h-6 px-2"
            >
              <ThumbsUp className="w-3 h-3 mr-1" />
              {comment.likes}
            </Button>
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                className="h-6 px-2"
              >
                <Reply className="w-3 h-3 mr-1" />
                Ответить
              </Button>
            )}
          </div>
          
          {replyTo === comment.id && (
            <div className="mt-3 space-y-2">
              <Textarea
                placeholder="Написать ответ..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows={2}
              />
              <div className="flex space-x-2">
                <Button size="sm" onClick={() => addReply(comment.id)}>
                  <Send className="w-3 h-3 mr-1" />
                  Ответить
                </Button>
                <Button variant="outline" size="sm" onClick={() => setReplyTo(null)}>
                  Отмена
                </Button>
              </div>
            </div>
          )}
          
          {comment.replies.length > 0 && (
            <div className="mt-4 space-y-3">
              {comment.replies.map(reply => (
                <CommentItem 
                  key={reply.id} 
                  comment={reply} 
                  isReply={true} 
                  parentId={comment.id} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2" />
          Комментарии ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Textarea
            placeholder="Написать комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
          />
          <Button onClick={addComment} disabled={!newComment.trim()}>
            <Send className="w-4 h-4 mr-2" />
            Опубликовать
          </Button>
        </div>
        
        <div className="space-y-4">
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
          
          {comments.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Пока нет комментариев. Будьте первым!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentSection;