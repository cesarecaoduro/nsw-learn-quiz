import { useState } from "react";
import { QuizApp } from "@/components/quiz/QuizApp";
import { QuizUpload } from "@/components/quiz/QuizUpload";
import { sampleQuizzes } from "@/data/sampleQuizzes";
import { Quiz } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen } from "lucide-react";

const Index = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(sampleQuizzes);
  const [showUpload, setShowUpload] = useState(false);

  const handleQuizUploaded = (newQuiz: Quiz) => {
    setQuizzes([...quizzes, newQuiz]);
    setShowUpload(false);
  };

  if (showUpload) {
    return (
      <div className="min-h-screen bg-background p-3 sm:p-4">
        <div className="container mx-auto py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Upload New Quiz</h1>
            <Button 
              variant="outline" 
              onClick={() => setShowUpload(false)}
              className="w-full sm:w-auto text-sm"
              size="sm"
            >
              Back to Quizzes
            </Button>
          </div>
          <QuizUpload onQuizUploaded={handleQuizUploaded} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-fun-purple bg-gradient-to-r from-blue-50 to-purple-50 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="bg-gradient-to-r from-fun-purple to-fun-pink p-2 rounded-2xl shadow-lg">
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-fredoka font-bold text-slate-700">
                  🌟 NSW Quiz Adventure
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-comic">
                  Learning is fun! ✨ Years 1-6
                </p>
              </div>
            </div>
            <Button 
              onClick={() => setShowUpload(true)}
              className="flex items-center gap-2 w-full sm:w-auto text-xs sm:text-sm bg-gradient-to-r from-fun-orange to-fun-yellow hover:from-fun-yellow hover:to-fun-orange text-white font-fredoka font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-2xl"
              size="sm"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              📚 Add Quiz
            </Button>
          </div>
        </div>
      </header>
      
      <QuizApp availableQuizzes={quizzes} />
    </div>
  );
};

export default Index;
