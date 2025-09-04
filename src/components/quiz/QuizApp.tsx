import { useState, useEffect } from "react";
import { Quiz, Question, UserAnswer, QuizResult } from "@/types/quiz";
import { QuizCard } from "./QuizCard";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";
import { Button } from "@/components/ui/button";

interface QuizAppProps {
  availableQuizzes: Quiz[];
}

type QuizState = 'selection' | 'taking' | 'results';

export const QuizApp = ({ availableQuizzes }: QuizAppProps) => {
  const [currentState, setCurrentState] = useState<QuizState>('selection');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Reset hasAnswered when question changes
  useEffect(() => {
    setHasAnswered(false);
    setShowNextButton(false);
  }, [currentQuestionIndex]);

  const calculateResults = (answers: UserAnswer[], quiz: Quiz): QuizResult => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / quiz.questions.length) * 100);
    
    let grade = 'F';
    if (percentage >= 90) grade = 'A';
    else if (percentage >= 80) grade = 'B';
    else if (percentage >= 70) grade = 'C';
    else if (percentage >= 60) grade = 'D';

    // Calculate subject breakdown
    const subjectBreakdown: { [key: string]: { correct: number; total: number } } = {};
    
    quiz.questions.forEach((question, index) => {
      const subject = question.subject;
      if (!subjectBreakdown[subject]) {
        subjectBreakdown[subject] = { correct: 0, total: 0 };
      }
      subjectBreakdown[subject].total++;
      
      const userAnswer = answers[index];
      if (userAnswer && userAnswer.isCorrect) {
        subjectBreakdown[subject].correct++;
      }
    });

    return {
      totalQuestions: quiz.questions.length,
      correctAnswers,
      percentage,
      grade,
      subjectBreakdown
    };
  };

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentState('taking');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowNextButton(false);
    setHasAnswered(false);
  };

  const handleAnswer = (answer: UserAnswer) => {
    if (hasAnswered) return; // Prevent multiple answers
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
    setHasAnswered(true);
    setShowNextButton(true); // Show immediately, no delay
  };

  const handleNextQuestion = () => {
    if (!selectedQuiz) return;

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNextButton(false);
      setHasAnswered(false);
    } else {
      setCurrentState('results');
    }
  };

  const handleTryAgain = () => {
    if (selectedQuiz) {
      setCurrentState('taking');
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowNextButton(false);
      setHasAnswered(false);
    }
  };

  const handleNewQuiz = () => {
    setCurrentState('selection');
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowNextButton(false);
    setHasAnswered(false);
  };

  if (currentState === 'selection') {
    return (
      <div className="min-h-screen bg-kid-rainbow-1">
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            
            {/* Mascot */}
            <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-red rounded-full animate-pulse-fun shadow-2xl"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-xl">
                <span className="text-4xl sm:text-5xl animate-bounce">🦉</span>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-2 -left-2 text-2xl animate-spin">⭐</div>
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-wiggle">🎉</div>
              <div className="absolute -bottom-2 -right-2 text-2xl animate-pulse">🚀</div>
            </div>
            
            {/* Title */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-fredoka font-black text-white drop-shadow-2xl leading-tight">
                🌈 SUPER FUN LEARNING! 🎉
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-comic font-bold text-white/95 drop-shadow-lg">
                🎯 Pick Your Adventure! ✨🚀
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 font-comic max-w-2xl mx-auto px-4">
                🌟 Ready to explore? Choose a quiz and let's learn together! 📚🎮
              </p>
            </div>

            {/* Floating decorations */}
            <div className="hidden sm:block absolute top-20 left-10 text-4xl animate-bounce opacity-70">🌟</div>
            <div className="hidden sm:block absolute top-32 right-10 text-4xl animate-pulse opacity-70" style={{ animationDelay: '1s' }}>🎈</div>
            <div className="hidden lg:block absolute top-40 left-1/4 text-3xl animate-wiggle opacity-60" style={{ animationDelay: '2s' }}>🎊</div>
          </div>
          
          {/* Quiz Cards Grid */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {availableQuizzes.map((quiz, index) => (
              <div 
                key={quiz.id}
                className="animate-bounce-in"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                <QuizCard 
                  quiz={quiz} 
                  onSelect={handleQuizSelect} 
                />
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-8 sm:mt-12 space-y-2">
            <div className="flex justify-center items-center gap-2 sm:gap-4 text-2xl sm:text-4xl">
              <span className="animate-bounce">🎪</span>
              <span className="animate-pulse">🎭</span>
              <span className="animate-wiggle">🎨</span>
              <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🎪</span>
            </div>
            <p className="text-white/80 font-comic font-semibold text-sm sm:text-base">
              🌈 Learning is always an adventure! ✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'taking' && selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;
    
    return (
      <div className="min-h-screen bg-kid-rainbow-1">
        {/* Navigation */}
        <div className="bg-gradient-to-r from-kid-blue to-kid-purple p-2 sm:p-4 shadow-2xl">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-md mx-auto">
              <Button 
                variant="outline" 
                onClick={handleNewQuiz}
                className="bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:bg-white text-kid-purple font-fredoka font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-2xl py-2 sm:py-3"
              >
                ← 🏠 Back Home
              </Button>
              <Button 
                variant="outline" 
                onClick={handleTryAgain}
                className="bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:bg-white text-kid-purple font-fredoka font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-2xl py-2 sm:py-3"
              >
                🔄 Restart Fun!
              </Button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-gradient-to-r from-kid-purple to-kid-pink p-3 sm:p-4">
          <div className="container mx-auto max-w-4xl">
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={selectedQuiz.questions.length} 
            />
          </div>
        </div>
        
        {/* Question */}
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-4xl">
          <QuestionCard
            key={`question-${currentQuestionIndex}-${selectedQuiz.id}`}
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
          />

          {/* Next Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            {showNextButton && (
              <Button 
                onClick={handleNextQuestion}
                className="w-full max-w-sm bg-gradient-to-r from-kid-green via-kid-blue to-kid-purple hover:from-kid-purple hover:via-kid-pink hover:to-kid-orange text-white font-fredoka font-black text-base sm:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-3xl py-4 sm:py-5 px-6 sm:px-8 border-4 border-white/30 relative overflow-hidden group"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>{isLastQuestion ? '🏆 FINISH QUEST! 🎉' : '➡️ NEXT FUN! ✨'}</span>
                  <span className="text-2xl">🎯</span>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'results' && selectedQuiz) {
    const results = calculateResults(userAnswers, selectedQuiz);
    
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizResults
          result={results}
          onTryAgain={handleTryAgain}
          onNewQuiz={handleNewQuiz}
        />
      </div>
    );
  }

  return null;
};