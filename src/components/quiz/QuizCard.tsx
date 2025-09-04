import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

export const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-base sm:text-lg leading-tight">{quiz.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">Year {quiz.year}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col justify-between">
        <p className="text-sm text-muted-foreground mb-4">{quiz.questions.length} questions</p>
        <Button 
          onClick={() => onSelect(quiz)} 
          className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base"
          size="sm"
        >
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};