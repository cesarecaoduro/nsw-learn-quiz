import { useState } from "react";
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
  };

  const handleAnswer = (answer: UserAnswer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    if (!selectedQuiz) return;

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowNextButton(false);
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
    }
  };

  const handleNewQuiz = () => {
    setCurrentState('selection');
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowNextButton(false);
  };

  if (currentState === 'selection') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">NSW Curriculum Quiz</h1>
          <p className="text-xl text-muted-foreground">
            Test your knowledge across multiple subjects
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {availableQuizzes.map((quiz) => (
            <QuizCard 
              key={quiz.id} 
              quiz={quiz} 
              onSelect={handleQuizSelect} 
            />
          ))}
        </div>
      </div>
    );
  }

  if (currentState === 'taking' && selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={selectedQuiz.questions.length} 
          />
        </div>
        
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          onAnswer={handleAnswer}
        />

        {showNextButton && (
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleNextQuestion}
              className="bg-primary hover:bg-primary/90"
            >
              {currentQuestionIndex < selectedQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          </div>
        )}
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