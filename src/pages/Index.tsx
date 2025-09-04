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
      <header className="bg-kid-rainbow-2 sticky top-0 z-50 shadow-2xl border-b-4 border-kid-yellow">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Logo and Title */}
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="bg-gradient-to-br from-kid-purple to-kid-pink p-2 sm:p-3 rounded-full shadow-xl animate-bounce">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-fredoka font-black text-white drop-shadow-lg">
                  🌈 NSW Quiz Fun! 🎉
                </h1>
                <p className="text-xs sm:text-sm text-white/90 font-comic font-semibold">
                  🎯 Learning Adventures • Years 1-6 ✨
                </p>
              </div>
            </div>

            {/* Upload Button */}
            <Button 
              onClick={() => setShowUpload(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-kid-orange to-kid-red hover:from-kid-red hover:to-kid-orange text-white font-fredoka font-bold text-sm sm:text-base shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full px-4 sm:px-6 py-3 border-2 border-white/30"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              📚 Add New Quiz! ➕
            </Button>
          </div>
        </div>
      </header>
      
      <QuizApp availableQuizzes={quizzes} />
    </div>
  );
};

export default Index;
