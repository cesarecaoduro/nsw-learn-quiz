import { useState, useEffect } from "react";
import { Quiz, Question, UserAnswer, QuizResult } from "@/types/quiz";
import { QuizCard } from "./QuizCard";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { QuizResults } from "./QuizResults";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Get unique years from available quizzes
  const availableYears = Array.from(new Set(availableQuizzes.map(quiz => quiz.year))).sort();
  
  // Get unique subjects from available quizzes
  const availableSubjects = Array.from(new Set(
    availableQuizzes.flatMap(quiz => 
      quiz.questions.map(question => question.subject)
    )
  )).sort();
  
  // Filter quizzes based on selected year and subject
  let filteredQuizzes = availableQuizzes;
  
  if (selectedYear !== 'all') {
    filteredQuizzes = filteredQuizzes.filter(quiz => quiz.year === selectedYear);
  }
  
  if (selectedSubject !== 'all') {
    filteredQuizzes = filteredQuizzes.filter(quiz => 
      quiz.questions.some(question => question.subject === selectedSubject)
    );
  }

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
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🦉</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-fredoka font-bold text-amber-900 mb-4">
              NSW Learning Quiz 🌟
            </h1>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto mb-6">
              Choose your adventure and test your knowledge!
            </p>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-amber-800">Year:</span>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-40 border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {availableYears.map((year) => (
                      <SelectItem key={year} value={year}>
                        Year {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-amber-800">Subject:</span>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-48 border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    {availableSubjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Quiz Cards Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredQuizzes.length > 0 ? (
              filteredQuizzes.map((quiz) => (
                <QuizCard 
                  key={quiz.id} 
                  quiz={quiz} 
                  onSelect={handleQuizSelect} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-amber-700 text-lg">
                  No quizzes available for {selectedYear !== 'all' ? `Year ${selectedYear}` : ''}
                  {selectedYear !== 'all' && selectedSubject !== 'all' ? ' and ' : ''}
                  {selectedSubject !== 'all' ? `${selectedSubject}` : ''}
                  {selectedYear === 'all' && selectedSubject === 'all' ? 'the selected filters' : ''}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                  {selectedYear !== 'all' && (
                    <Button 
                      onClick={() => setSelectedYear('all')} 
                      variant="outline" 
                      className="border-amber-300 text-amber-800 hover:bg-amber-50"
                    >
                      Show All Years
                    </Button>
                  )}
                  {selectedSubject !== 'all' && (
                    <Button 
                      onClick={() => setSelectedSubject('all')} 
                      variant="outline" 
                      className="border-amber-300 text-amber-800 hover:bg-amber-50"
                    >
                      Show All Subjects
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'taking' && selectedQuiz) {
    const currentQuestion = selectedQuiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;
    
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-amber-50 border-b border-amber-200 p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleNewQuiz}
                className="text-amber-800 border-amber-300 hover:bg-amber-100"
              >
                ← Back to Quizzes
              </Button>
              <Button 
                variant="outline" 
                onClick={handleTryAgain}
                className="text-amber-800 border-amber-300 hover:bg-amber-100"
              >
                🔄 Restart Quiz
              </Button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-amber-50 border-b border-amber-100 p-4">
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
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium px-6 sm:px-8 py-3 shadow-lg"
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