import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizResult } from "@/types/quiz";
import { Trophy, Star, Sparkles, PartyPopper } from "lucide-react";

interface QuizResultsProps {
  result: QuizResult;
  onTryAgain: () => void;
  onNewQuiz: () => void;
}

export const QuizResults = ({ result, onTryAgain, onNewQuiz }: QuizResultsProps) => {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-fun-green';
      case 'B': return 'text-fun-blue';
      case 'C': return 'text-fun-orange';
      case 'D': return 'text-fun-yellow';
      case 'F': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

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

  const getSubjectEmoji = (subject: string) => {
    const emojis: { [key: string]: string } = {
      "English": "📚",
      "Mathematics": "🔢", 
      "Science": "🔬",
      "History": "🏛️",
      "Geography": "🌍",
      "Creative Arts": "🎨"
    };
    return emojis[subject] || "📝";
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
      {/* Main Results Card */}
      <Card className="text-center relative overflow-hidden rounded-3xl border-4 border-fun-purple/20">
        <div className="absolute inset-0 bg-gradient-to-br from-fun-purple/5 via-fun-pink/5 to-fun-blue/5" />
        
        <CardHeader className="px-4 sm:px-8 py-8 relative">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-fun-yellow animate-pulse-fun" />
              <Sparkles className="w-8 h-8 text-fun-purple absolute -top-2 -right-2 animate-wiggle" />
            </div>
          </div>
          
          <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-fredoka font-bold text-slate-700 mb-4">
            🎉 Adventure Complete!
          </CardTitle>
          
          <div className="space-y-4">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-fun-purple via-fun-pink to-fun-blue">
              {result.correctAnswers}/{result.totalQuestions}
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl">{getGradeEmoji(result.grade)}</span>
              <div className={`text-2xl sm:text-3xl font-fredoka font-bold ${getGradeColor(result.grade)}`}>
                Grade: {result.grade}
              </div>
            </div>
            
            <div className="text-xl sm:text-2xl font-comic text-slate-600">
              {result.percentage}% Complete!
            </div>
            
            <div className="text-lg sm:text-xl font-fredoka font-bold text-fun-purple">
              {getEncouragementMessage(result.percentage)}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Subject Breakdown */}
      <Card className="rounded-3xl border-2 border-slate-200">
        <CardHeader className="px-4 sm:px-8 py-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-3xl">
          <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-slate-700 text-center">
            ✨ Your Learning Journey
          </CardTitle>
        </CardHeader>
        
        <CardContent className="px-4 sm:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(result.subjectBreakdown).map(([subject, scores]) => (
              <div key={subject} className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-100 hover:scale-105 transition-transform duration-200">
                <div className="text-2xl sm:text-3xl mb-2">
                  {getSubjectEmoji(subject)}
                </div>
                <div className="font-fredoka font-bold text-slate-700 text-sm sm:text-base mb-2">
                  {subject}
                </div>
                <div className="text-2xl sm:text-3xl font-fredoka font-black text-fun-purple">
                  {scores.correct}/{scores.total}
                </div>
                <div className="flex justify-center mt-1">
                  {Array.from({ length: scores.total }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < scores.correct ? 'text-fun-yellow fill-current' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0">
        <Button 
          onClick={onTryAgain}
          className="w-full sm:w-auto bg-gradient-to-r from-fun-green to-fun-blue hover:from-fun-blue hover:to-fun-green text-white font-fredoka font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          🔄 Try Again!
        </Button>
        
        <Button 
          onClick={onNewQuiz}
          className="w-full sm:w-auto bg-gradient-to-r from-fun-orange to-fun-yellow hover:from-fun-yellow hover:to-fun-orange text-white font-fredoka font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          🚀 New Adventure!
        </Button>
      </div>
    </div>
  );
};