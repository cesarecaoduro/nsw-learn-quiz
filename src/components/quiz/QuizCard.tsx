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
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{quiz.name}</CardTitle>
          <Badge variant="secondary">Year {quiz.year}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">{quiz.questions.length} questions</p>
          <Button onClick={() => onSelect(quiz)} className="bg-primary hover:bg-primary/90">
            Start Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};