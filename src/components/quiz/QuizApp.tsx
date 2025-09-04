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
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-10">
          <div className="mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-fun-purple to-fun-pink rounded-full flex items-center justify-center shadow-2xl animate-pulse-fun">
              <span className="text-3xl sm:text-4xl">🦉</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-fredoka font-bold mb-4 text-slate-700">
            🌈 Learning Adventure Hub!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 px-4 sm:px-0 font-comic">
            Pick a quiz and let's explore together! ✨🚀
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {availableQuizzes.map((quiz, index) => (
            <div 
              key={quiz.id}
              className="animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <QuizCard 
                quiz={quiz} 
                onSelect={handleQuizSelect} 
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentState === 'taking' && selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;
    
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
              <Button 
                variant="outline" 
                onClick={handleNewQuiz}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
                size="sm"
              >
                ← Back to Quizzes
              </Button>
              <Button 
                variant="outline" 
                onClick={handleTryAgain}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4"
                size="sm"
              >
                Restart Quiz
              </Button>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={selectedQuiz.questions.length} 
            />
          </div>
          
          <QuestionCard
            key={`question-${currentQuestionIndex}-${selectedQuiz.id}`}
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
          />

          <div className="flex justify-center mt-4 sm:mt-6 px-2">
            {showNextButton && (
              <Button 
                onClick={handleNextQuestion}
                className="w-full max-w-xs sm:max-w-sm bg-gradient-to-r from-fun-green to-fun-blue hover:from-fun-blue hover:to-fun-green text-white font-fredoka font-bold px-6 py-3 text-sm sm:text-base h-12 sm:h-13 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 animate-bounce-in"
              >
                {isLastQuestion ? '🎯 Finish Adventure!' : '🚀 Next Question!'}
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