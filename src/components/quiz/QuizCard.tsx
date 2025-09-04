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
  "English": "bg-pink-100 text-pink-700 border-pink-200",
  "Mathematics": "bg-blue-100 text-blue-700 border-blue-200", 
  "Science": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "History": "bg-purple-100 text-purple-700 border-purple-200",
  "Geography": "bg-sky-100 text-sky-700 border-sky-200",
  "Creative Arts": "bg-rose-100 text-rose-700 border-rose-200"
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
    <Card className="h-full bg-gradient-to-br from-violet-50 to-pink-50 border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg font-fredoka font-semibold text-purple-800 leading-tight">
            {quiz.name}
          </CardTitle>
          <Badge className={`shrink-0 text-xs font-medium border ${color}`}>
            {emoji} Year {quiz.year}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4 p-3 bg-purple-50/80 rounded-lg border border-purple-200">
          <Star className="w-4 h-4 text-purple-600 fill-purple-300" />
          <p className="text-sm text-purple-700 font-medium">
            {quiz.questions.length} Questions
          </p>
        </div>
        
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full mb-3 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Start Quiz 🚀
        </Button>
        
        {quiz.uploader && (
          <div className="flex justify-center">
            <Badge variant="outline" className="text-xs text-purple-600 bg-purple-50 border-purple-200">
              {quiz.uploader}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};