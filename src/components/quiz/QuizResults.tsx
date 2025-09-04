import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizResult } from "@/types/quiz";
import { Trophy, Star, Sparkles, XCircle, CheckCircle } from "lucide-react";

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

  const getSubjectColors = (subject: string) => {
    const colors: { [key: string]: string } = {
      "English": "bg-purple-100 text-purple-800 border-purple-200",
      "Mathematics": "bg-blue-100 text-blue-800 border-blue-200", 
      "Science": "bg-green-100 text-green-800 border-green-200",
      "History": "bg-orange-100 text-orange-800 border-orange-200",
      "Geography": "bg-teal-100 text-teal-800 border-teal-200",
      "Creative Arts": "bg-pink-100 text-pink-800 border-pink-200"
    };
    return colors[subject] || "bg-gray-100 text-gray-800 border-gray-200";
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


      {/* Wrong Answers Review */}
      {result.wrongAnswers.length > 0 && (
        <Card className="rounded-3xl border-2 border-red-200">
          <CardHeader className="px-4 sm:px-8 py-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-t-3xl">
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-red-800 text-center">
              📚 Let's Learn from Mistakes!
            </CardTitle>
            <p className="text-center text-red-600 font-medium mt-2">
              Review these questions to improve your understanding
            </p>
          </CardHeader>
          
          <CardContent className="px-4 sm:px-8 py-6 space-y-4">
            {result.wrongAnswers.map((wrongAnswer, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-red-100 p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className={`shrink-0 text-xs font-medium border ${getSubjectColors(wrongAnswer.question.subject)}`}>
                    {getSubjectEmoji(wrongAnswer.question.subject)} {wrongAnswer.question.subject}
                  </Badge>
                </div>
                
                <h3 className="font-fredoka font-semibold text-gray-900 text-base leading-relaxed">
                  {wrongAnswer.question.question}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-red-50 border-2 border-red-200 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-red-700">Your answer:</span>
                      <div className="font-medium text-red-800">
                        {String.fromCharCode(65 + wrongAnswer.userAnswer)}. {wrongAnswer.question.options[wrongAnswer.userAnswer]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 border-2 border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-green-700">Correct answer:</span>
                      <div className="font-medium text-green-800">
                        {String.fromCharCode(65 + wrongAnswer.correctAnswer)}. {wrongAnswer.question.options[wrongAnswer.correctAnswer]}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <span className="text-sm font-medium text-blue-700">Explanation:</span>
                  <p className="text-blue-800 text-sm mt-1 leading-relaxed">
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
          className="w-full sm:w-auto bg-gradient-to-r from-blue-300 to-purple-300 hover:from-blue-400 hover:to-purple-400 text-gray-800 font-fredoka font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-blue-200"
        >
          🔄 Try Again!
        </Button>
        
        <Button 
          onClick={onNewQuiz}
          className="w-full sm:w-auto bg-gradient-to-r from-pink-300 to-rose-300 hover:from-pink-400 hover:to-rose-400 text-gray-800 font-fredoka font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-pink-200"
        >
          🚀 New Adventure!
        </Button>
      </div>
    </div>
  );
};