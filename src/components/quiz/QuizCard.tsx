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
  "English": "bg-purple-100 text-purple-700 border-purple-200",
  "Mathematics": "bg-blue-100 text-blue-700 border-blue-200", 
  "Science": "bg-green-100 text-green-700 border-green-200",
  "History": "bg-orange-100 text-orange-700 border-orange-200",
  "Geography": "bg-teal-100 text-teal-700 border-teal-200",
  "Creative Arts": "bg-pink-100 text-pink-700 border-pink-200"
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
    <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg font-fredoka font-semibold text-gray-900 leading-tight">
            {quiz.name}
          </CardTitle>
          <Badge className={`shrink-0 text-xs font-medium border ${color}`}>
            {emoji} Year {quiz.year}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-lg border">
          <Star className="w-4 h-4 text-yellow-500" />
          <p className="text-sm text-gray-700 font-medium">
            {quiz.questions.length} Questions
          </p>
        </div>
        
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
        >
          Start Quiz 🚀
        </Button>
      </CardContent>
    </Card>
  );
};