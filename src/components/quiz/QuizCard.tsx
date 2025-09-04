import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";
import { Star } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const subjectColors = {
  "English": "bg-rose-100 text-rose-800 border-rose-300",
  "Mathematics": "bg-orange-100 text-orange-800 border-orange-300", 
  "Science": "bg-emerald-100 text-emerald-800 border-emerald-300",
  "History": "bg-amber-100 text-amber-800 border-amber-300",
  "Geography": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "Creative Arts": "bg-red-100 text-red-800 border-red-300"
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
    <Card className="h-full bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg font-fredoka font-semibold text-amber-900 leading-tight">
            {quiz.name}
          </CardTitle>
          <Badge className={`shrink-0 text-xs font-medium border ${color}`}>
            {emoji} Year {quiz.year}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4 p-3 bg-amber-100/50 rounded-lg border border-amber-200">
          <Star className="w-4 h-4 text-amber-600 fill-amber-400" />
          <p className="text-sm text-amber-800 font-medium">
            {quiz.questions.length} Questions
          </p>
        </div>
        
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Start Quiz 🚀
        </Button>
      </CardContent>
    </Card>
  );
};