import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizResult } from "@/types/quiz";
import { MacOSTrophyIcon, MacOSStarIcon, MacOSCheckCircleIcon, MacOSXCircleIcon } from "@/components/ui/macos-icon";
import { Sparkles } from "lucide-react";
import { getGradeTheme, getSubjectTheme, componentVariants } from "@/lib/theme";

interface QuizResultsProps {
  result: QuizResult;
  onTryAgain: () => void;
  onNewQuiz: () => void;
}

export const QuizResults = ({ result, onTryAgain, onNewQuiz }: QuizResultsProps) => {

  const getGradeEmoji = (grade: string) => {
    switch (grade) {
      case 'A': return '🌟';
      case 'B': return '👍';
      case 'C': return '👌';
      case 'D': return '💪';
      case 'F': return '🎯';
      default: return '📚';
    }
  };

  const getEncouragementMessage = (percentage: number) => {
    if (percentage >= 90) return "You're a superstar! 🌟";
    if (percentage >= 80) return "Fantastic job! 🎉";
    if (percentage >= 70) return "Great effort! 👏";
    if (percentage >= 60) return "Keep learning! 💪";
    return "Every mistake is learning! 🚀";
  };


  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in bg-background" role="main" aria-label="Quiz results">
      {/* Main Results Card */}
      <Card className="text-center relative overflow-hidden rounded-3xl border-4 border-primary/20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <CardHeader className="px-4 sm:px-8 py-8 relative">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <MacOSTrophyIcon size="xl" className="w-16 h-16 sm:w-20 sm:h-20 text-warning animate-pulse stroke-[1.5]" />
              <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-bounce stroke-[1.5]" />
            </div>
          </div>
          
          <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-fredoka font-bold text-foreground mb-4">
            🎉 Adventure Complete!
          </CardTitle>
          
          <div className="space-y-4">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-info">
              {result.correctAnswers}/{result.totalQuestions}
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl">{getGradeEmoji(result.grade)}</span>
              <div className={`text-2xl sm:text-3xl font-fredoka font-bold ${getGradeTheme(result.grade).text}`}>
                Grade: {result.grade}
              </div>
            </div>
            
            <div className="text-xl sm:text-2xl font-comic text-muted-foreground">
              {result.percentage}% Complete!
            </div>
            
            <div className="text-lg sm:text-xl font-fredoka font-bold text-primary">
              {getEncouragementMessage(result.percentage)}
            </div>
          </div>
        </CardHeader>
      </Card>


      {/* Wrong Answers Review */}
      {result.wrongAnswers.length > 0 && (
        <Card className="rounded-3xl border-2 border-destructive/20 bg-card">
          <CardHeader className="px-4 sm:px-8 py-6 bg-gradient-to-r from-destructive/5 to-accent/5 rounded-t-3xl">
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-destructive text-center">
              📚 Let's Learn from Mistakes!
            </CardTitle>
            <p className="text-center text-destructive font-medium mt-2">
              Review these questions to improve your understanding
            </p>
          </CardHeader>
          
          <CardContent className="px-4 sm:px-8 py-6 space-y-4 bg-card">
            {result.wrongAnswers.map((wrongAnswer, index) => (
              <div key={index} className="bg-card rounded-2xl border-2 border-destructive/10 p-4 space-y-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <Badge className={`shrink-0 text-xs font-medium ${getSubjectTheme(wrongAnswer.question.subject).badge}`}>
                    {getSubjectTheme(wrongAnswer.question.subject).emoji} {wrongAnswer.question.subject}
                  </Badge>
                </div>
                
                <h3 className="font-fredoka font-semibold text-foreground text-base leading-relaxed">
                  {wrongAnswer.question.question}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-destructive/10 border-2 border-destructive/20 rounded-xl">
                    <MacOSXCircleIcon size="md" variant="error" className="shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-destructive">Your answer:</span>
                      <div className="font-medium text-destructive">
                        {String.fromCharCode(65 + wrongAnswer.userAnswer)}. {wrongAnswer.question.options[wrongAnswer.userAnswer]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-success/10 border-2 border-success/20 rounded-xl">
                    <MacOSCheckCircleIcon size="md" variant="success" className="shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-success">Correct answer:</span>
                      <div className="font-medium text-success">
                        {String.fromCharCode(65 + wrongAnswer.correctAnswer)}. {wrongAnswer.question.options[wrongAnswer.correctAnswer]}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-info/10 rounded-xl p-3 border border-info/20">
                  <span className="text-sm font-medium text-info">Explanation:</span>
                  <p className="text-info text-sm mt-1 leading-relaxed">
                    {wrongAnswer.question.explanation}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0">
        <Button 
          onClick={onTryAgain}
          className="w-full sm:w-auto bg-gradient-to-r from-info to-primary hover:from-info/90 hover:to-primary/90 text-white font-fredoka font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 backdrop-blur-sm"
          aria-label="Retry this quiz"
        >
          🔄 Try Again!
        </Button>
        
        <Button 
          onClick={onNewQuiz}
          className="w-full sm:w-auto bg-gradient-to-r from-primary to-warning hover:from-primary/90 hover:to-warning/90 text-white font-fredoka font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 backdrop-blur-sm"
          aria-label="Start a new quiz"
        >
          🚀 New Adventure!
        </Button>
      </div>
    </div>
  );
};