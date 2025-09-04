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
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🦉</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-fredoka font-bold text-gray-900 mb-4">
              NSW Learning Quiz 🌟
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your adventure and test your knowledge!
            </p>
          </div>
          
          {/* Quiz Cards Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {availableQuizzes.map((quiz) => (
              <QuizCard 
                key={quiz.id} 
                quiz={quiz} 
                onSelect={handleQuizSelect} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'taking' && selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleNewQuiz}
                className="text-gray-700 border-gray-300"
              >
                ← Back to Quizzes
              </Button>
              <Button 
                variant="outline" 
                onClick={handleTryAgain}
                className="text-gray-700 border-gray-300"
              >
                🔄 Restart Quiz
              </Button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white border-b border-gray-100 p-4">
          <div className="container mx-auto max-w-4xl">
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={selectedQuiz.questions.length} 
            />
          </div>
        </div>
        
        {/* Question */}
        <div className="container mx-auto px-2 sm:px-4 py-6 max-w-4xl">
          <QuestionCard
            key={`question-${currentQuestionIndex}-${selectedQuiz.id}`}
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
          />

          {/* Next Button */}
          <div className="flex justify-center mt-8 px-4">
            {showNextButton && (
              <Button 
                onClick={handleNextQuestion}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 py-3"
                size="lg"
              >
                {isLastQuestion ? 'Finish Quiz 🏆' : 'Next Question →'}
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