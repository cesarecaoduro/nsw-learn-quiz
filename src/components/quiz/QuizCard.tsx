import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";
import { Star, Sparkles } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const subjectColors = {
  "English": "bg-gradient-to-r from-fun-purple to-fun-pink",
  "Mathematics": "bg-gradient-to-r from-fun-blue to-fun-purple", 
  "Science": "bg-gradient-to-r from-fun-green to-fun-blue",
  "History": "bg-gradient-to-r from-fun-orange to-fun-yellow",
  "Geography": "bg-gradient-to-r from-fun-green to-fun-orange",
  "Creative Arts": "bg-gradient-to-r from-fun-pink to-fun-purple"
};

export const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  const getSubjectGradient = () => {
    const subjects = quiz.questions.map(q => q.subject);
    const primarySubject = subjects[0] || "English";
    return subjectColors[primarySubject as keyof typeof subjectColors] || subjectColors["English"];
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-fun-purple/30 rounded-2xl overflow-hidden">
      <div className={`h-3 ${getSubjectGradient()}`} />
      
      <CardHeader className="pb-3 relative">
        <div className="absolute top-2 right-2">
          <Sparkles className="w-4 h-4 text-fun-yellow animate-pulse-fun" />
        </div>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-base sm:text-lg leading-tight font-fredoka font-semibold text-slate-700">
            {quiz.name}
          </CardTitle>
          <Badge className="shrink-0 text-xs bg-fun-orange text-white font-comic font-semibold shadow-sm">
            Year {quiz.year}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-4 h-4 text-fun-yellow" />
          <p className="text-sm text-muted-foreground font-comic">
            {quiz.questions.length} fun questions!
          </p>
        </div>
        
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full bg-gradient-to-r from-fun-purple to-fun-pink hover:from-fun-pink hover:to-fun-purple text-white font-fredoka font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-xl"
          size="sm"
        >
          🚀 Start Adventure!
        </Button>
      </CardContent>
    </Card>
  );
};