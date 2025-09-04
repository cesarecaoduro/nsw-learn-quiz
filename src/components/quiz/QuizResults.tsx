import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizResult } from "@/types/quiz";

interface QuizResultsProps {
  result: QuizResult;
  onTryAgain: () => void;
  onNewQuiz: () => void;
}

export const QuizResults = ({ result, onTryAgain, onNewQuiz }: QuizResultsProps) => {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-success';
      case 'B': return 'text-success';
      case 'C': return 'text-warning';
      case 'D': return 'text-destructive';
      case 'F': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getEncouragementMessage = (percentage: number) => {
    if (percentage >= 90) return "Excellent work!";
    if (percentage >= 80) return "Great job!";
    if (percentage >= 70) return "Good effort!";
    if (percentage >= 60) return "Keep practicing!";
    return "Don't give up!";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-success mb-4">
            Quiz Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {result.correctAnswers}/{result.totalQuestions}
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getGradeColor(result.grade)}`}>
              Grade: {result.grade}
            </div>
            <div className="text-xl text-muted-foreground mb-2">
              {result.percentage}%
            </div>
            <div className="text-lg text-primary font-medium">
              {getEncouragementMessage(result.percentage)}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Subject Breakdown:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(result.subjectBreakdown).map(([subject, scores]) => (
              <div key={subject} className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="font-semibold text-foreground">{subject}</div>
                <div className="text-2xl font-bold text-primary">
                  {scores.correct}/{scores.total}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button 
          onClick={onTryAgain}
          className="bg-primary hover:bg-primary/90"
        >
          Try Again
        </Button>
        <Button 
          onClick={onNewQuiz}
          variant="outline"
        >
          New Quiz
        </Button>
      </div>
    </div>
  );
};