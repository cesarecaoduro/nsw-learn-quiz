import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizResult } from "@/types/quiz";
import { MacOSTrophyIcon, MacOSStarIcon, MacOSCheckCircleIcon, MacOSXCircleIcon } from "@/components/ui/macos-icon";
import { Sparkles } from "lucide-react";

interface QuizResultsProps {
  result: QuizResult;
  onTryAgain: () => void;
  onNewQuiz: () => void;
}

export const QuizResults = ({ result, onTryAgain, onNewQuiz }: QuizResultsProps) => {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-amber-600';
      case 'D': return 'text-yellow-600';
      case 'F': return 'text-red-600';
      default: return 'text-gray-600';
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
    <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-in bg-white">
      {/* Main Results Card */}
      <Card className="text-center relative overflow-hidden rounded-3xl border-4 border-amber-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/50 to-yellow-50/50" />
        
        <CardHeader className="px-4 sm:px-8 py-8 relative">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <MacOSTrophyIcon size="xl" className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500 animate-pulse stroke-[1.5]" />
              <Sparkles className="w-8 h-8 text-purple-500 absolute -top-2 -right-2 animate-bounce stroke-[1.5]" />
            </div>
          </div>
          
          <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-fredoka font-bold text-slate-700 mb-4">
            🎉 Adventure Complete!
          </CardTitle>
          
          <div className="space-y-4">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-fredoka font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
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
            
            <div className="text-lg sm:text-xl font-fredoka font-bold text-purple-600">
              {getEncouragementMessage(result.percentage)}
            </div>
          </div>
        </CardHeader>
      </Card>


      {/* Wrong Answers Review */}
      {result.wrongAnswers.length > 0 && (
        <Card className="rounded-3xl border-2 border-red-200 bg-white">
          <CardHeader className="px-4 sm:px-8 py-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-t-3xl">
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-red-800 text-center">
              📚 Let's Learn from Mistakes!
            </CardTitle>
            <p className="text-center text-red-600 font-medium mt-2">
              Review these questions to improve your understanding
            </p>
          </CardHeader>
          
          <CardContent className="px-4 sm:px-8 py-6 space-y-4 bg-white">
            {result.wrongAnswers.map((wrongAnswer, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-red-100 p-4 space-y-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <Badge className={`shrink-0 text-xs font-medium border ${getSubjectColors(wrongAnswer.question.subject)}`}>
                    {getSubjectEmoji(wrongAnswer.question.subject)} {wrongAnswer.question.subject}
                  </Badge>
                </div>
                
                <h3 className="font-fredoka font-semibold text-gray-900 text-base leading-relaxed">
                  {wrongAnswer.question.question}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                    <MacOSXCircleIcon size="md" variant="error" className="shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-red-700">Your answer:</span>
                      <div className="font-medium text-red-800">
                        {String.fromCharCode(65 + wrongAnswer.userAnswer)}. {wrongAnswer.question.options[wrongAnswer.userAnswer]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 border-2 border-green-200 rounded-xl">
                    <MacOSCheckCircleIcon size="md" variant="success" className="shrink-0" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-green-700">Correct answer:</span>
                      <div className="font-medium text-green-800">
                        {String.fromCharCode(65 + wrongAnswer.correctAnswer)}. {wrongAnswer.question.options[wrongAnswer.correctAnswer]}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
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
          className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-fredoka font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 backdrop-blur-sm"
        >
          🔄 Try Again!
        </Button>
        
        <Button 
          onClick={onNewQuiz}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-fredoka font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 backdrop-blur-sm"
        >
          🚀 New Adventure!
        </Button>
      </div>
    </div>
  );
};