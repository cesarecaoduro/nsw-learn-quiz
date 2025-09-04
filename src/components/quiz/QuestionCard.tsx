import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question, UserAnswer } from "@/types/quiz";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answer: UserAnswer) => void;
  showFeedback?: boolean;
  key?: string | number; // Force re-render when question changes
}

export const QuestionCard = ({ question, questionNumber, onAnswer, showFeedback = true }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setShowExplanation(false);
  }, [question.id, questionNumber]);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === question.correct;
    
    if (showFeedback) {
      setShowExplanation(true);
    }
    
    onAnswer({
      questionId: question.id,
      selectedOption: optionIndex,
      isCorrect
    });
  };

  const getOptionStyle = (index: number) => {
    if (selectedOption === null) {
      return "border-2 border-border hover:border-primary/70 hover:bg-primary/5 transition-all duration-200";
    }
    
    if (index === question.correct) {
      return "border-2 border-success bg-success/15 text-success-foreground";
    }
    
    if (index === selectedOption && index !== question.correct) {
      return "border-2 border-destructive bg-destructive/15 text-destructive-foreground";
    }
    
    return "border-2 border-muted opacity-60";
  };

  const getOptionIcon = (index: number) => {
    if (selectedOption === null) return null;
    
    if (index === question.correct) {
      return <CheckCircle className="w-5 h-5 text-success" />;
    }
    
    if (index === selectedOption && index !== question.correct) {
      return <XCircle className="w-5 h-5 text-destructive" />;
    }
    
    return null;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-sm">
      <CardHeader className="space-y-3 sm:space-y-4 px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary text-xs px-2 py-1">
            {question.subject}
          </Badge>
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed">
          {question.question}
        </h2>
      </CardHeader>
      <CardContent className="space-y-3 px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6">
        <div className="grid gap-2 sm:gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`justify-start text-left h-auto p-3 sm:p-4 text-sm leading-relaxed min-h-[48px] ${getOptionStyle(index)}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <div className="flex items-start justify-between w-full gap-3">
                <div className="flex items-start gap-3">
                  <span className="font-medium text-muted-foreground text-sm shrink-0 mt-0.5">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-left leading-relaxed text-sm sm:text-base">{option}</span>
                </div>
                <div className="shrink-0">
                  {getOptionIcon(index)}
                </div>
              </div>
            </Button>
          ))}
        </div>

        {showExplanation && (
          <div className={`mt-4 p-3 sm:p-4 rounded-lg border ${selectedOption === question.correct ? 'bg-success/10 border-success/20' : 'bg-destructive/10 border-destructive/20'}`}>
            <div className="flex items-center gap-2 mb-3">
              {selectedOption === question.correct ? (
                <>
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="font-semibold text-success text-sm sm:text-base">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-destructive shrink-0" />
                  <span className="font-semibold text-destructive text-sm sm:text-base">Incorrect</span>
                </>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-medium text-sm sm:text-base leading-relaxed">
                <strong>Correct answer:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};