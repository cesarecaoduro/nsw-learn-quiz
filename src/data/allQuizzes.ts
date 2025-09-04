import { Quiz } from "@/types/quiz";
import { kindergartenQuizzes } from "./kindergartenQuizzes";
import { year1Quizzes } from "./year1Quizzes";
import { year2Quizzes } from "./year2Quizzes";
import { year3Quizzes } from "./year3Quizzes";
import { year4Quizzes } from "./year4Quizzes";
import { year5Quizzes } from "./year5Quizzes";
import { year6Quizzes } from "./year6Quizzes";

export const sampleQuizzes: Quiz[] = [
  ...kindergartenQuizzes,
  ...year1Quizzes,
  ...year2Quizzes,
  ...year3Quizzes,
  ...year4Quizzes,
  ...year5Quizzes,
  ...year6Quizzes
];