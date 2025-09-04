export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  year?: string;
}

export interface Quiz {
  id: string;
  name: string;
  year: string;
  questions: Question[];
  uploader?: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  grade: string;
  subjectBreakdown: { [key: string]: { correct: number; total: number } };
  wrongAnswers: Array<{
    question: Question;
    userAnswer: number;
    correctAnswer: number;
  }>;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}