import { useState } from "react";
import { QuizApp } from "@/components/quiz/QuizApp";
import { QuizUpload } from "@/components/quiz/QuizUpload";
import { sampleQuizzes } from "@/data/allQuizzes";
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-3 sm:p-4">
        <div className="container mx-auto py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-900 font-fredoka">Upload New Quiz 📚</h1>
            <Button 
              variant="outline" 
              onClick={() => setShowUpload(false)}
              className="w-full sm:w-auto text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-amber-300 shadow-md"
              size="sm"
            >
              ← Back to Quizzes
            </Button>
          </div>
          <QuizUpload onQuizUploaded={handleQuizUploaded} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-2 rounded-lg shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-fredoka font-bold text-amber-900">
                  NSW Quiz Fun 🌟
                </h1>
                <p className="text-sm text-amber-700 font-medium">
                  Learning Adventures • K-6
                </p>
              </div>
            </div>

            <Button 
              onClick={() => setShowUpload(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium shadow-md transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Quiz
            </Button>
          </div>
        </div>
      </header>
      
      <QuizApp availableQuizzes={quizzes} />
    </div>
  );
};

export default Index;
