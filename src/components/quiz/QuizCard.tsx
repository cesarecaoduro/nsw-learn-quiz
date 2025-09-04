import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";
import { Star, User } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const subjectColors = {
  "English": "bg-purple-50 text-purple-700 border-purple-200",
  "Mathematics": "bg-blue-50 text-blue-700 border-blue-200", 
  "Science": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "History": "bg-slate-50 text-slate-700 border-slate-200",
  "Geography": "bg-teal-50 text-teal-700 border-teal-200",
  "Creative Arts": "bg-pink-50 text-pink-700 border-pink-200"
};

const subjectEmojis = {
  "English": "📚",
  "Mathematics": "🔢", 
  "Science": "🔬",
  "History": "🏛️",
  "Geography": "🌍",
  "Creative Arts": "🎨"
};

export const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  const getSubjectInfo = () => {
    const subjects = quiz.questions.map(q => q.subject);
    const primarySubject = subjects[0] || "English";
    return {
      color: subjectColors[primarySubject as keyof typeof subjectColors] || subjectColors["English"],
      emoji: subjectEmojis[primarySubject as keyof typeof subjectEmojis] || "📝"
    };
  };

  const { color, emoji } = getSubjectInfo();

  return (
    <Card className="h-full bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 rounded-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg font-fredoka font-semibold text-foreground leading-tight">
            {quiz.name}
          </CardTitle>
          <Badge className={`shrink-0 text-xs font-medium border ${color}`}>
            {emoji} Year {quiz.year}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4 p-3 bg-muted rounded-lg border border-border">
          <Star className="w-4 h-4 text-primary fill-primary/20" />
          <p className="text-sm text-muted-foreground font-medium">
            {quiz.questions.length} Questions
          </p>
        </div>
        
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full mb-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Start Quiz 🚀
        </Button>
        
        {quiz.uploader && (
          <div className="flex justify-center">
            <Badge variant="outline" className="text-xs text-muted-foreground bg-muted border-border">
              {quiz.uploader}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};