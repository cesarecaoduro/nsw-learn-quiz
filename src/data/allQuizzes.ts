import { Quiz } from "@/types/quiz";
import { year2Quizzes } from "./year2Quizzes";
import { year3Quizzes } from "./year3Quizzes";
import { year4Quizzes } from "./year4Quizzes";
import { year5Quizzes } from "./year5Quizzes";
import { year6Quizzes } from "./year6Quizzes";

export const sampleQuizzes: Quiz[] = [
  ...year2Quizzes,
  ...year3Quizzes,
  ...year4Quizzes,
  ...year5Quizzes,
  ...year6Quizzes
];