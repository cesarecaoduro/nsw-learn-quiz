import { useState } from "react";
import { QuizApp } from "@/components/quiz/QuizApp";
import { QuizCreator } from "@/components/quiz/QuizCreator";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { sampleQuizzes } from "@/data/allQuizzes";
import { Quiz } from "@/types/quiz";

const Index = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(sampleQuizzes);
  const [showUpload, setShowUpload] = useState(false);

  const handleQuizUploaded = (newQuiz: Quiz) => {
    setQuizzes([...quizzes, newQuiz]);
    setShowUpload(false);
  };

  if (showUpload) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar 
          onAddQuiz={() => setShowUpload(true)} 
          onLogoClick={() => setShowUpload(false)}
          showAddButton={false}
        />
        <div className="flex-1 p-3 sm:p-4">
          <div className="container mx-auto py-4 sm:py-8">
            <QuizCreator 
              onQuizUploaded={handleQuizUploaded} 
              onBack={() => setShowUpload(false)} 
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar 
        onAddQuiz={() => setShowUpload(true)} 
        onLogoClick={() => setShowUpload(false)}
        showAddButton={true}
      />
      
      <div className="flex-1">
        <QuizApp availableQuizzes={quizzes} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
