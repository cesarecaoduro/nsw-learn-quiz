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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">
            {question.subject}
          </Badge>
        </div>
        <h2 className="text-xl font-semibold leading-relaxed">
          {question.question}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`justify-start text-left h-auto p-4 ${getOptionStyle(index)}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-muted-foreground">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                </div>
                {getOptionIcon(index)}
              </div>
            </Button>
          ))}
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg ${selectedOption === question.correct ? 'bg-success/10 border border-success/20' : 'bg-destructive/10 border border-destructive/20'}`}>
            <div className="flex items-center gap-2 mb-2">
              {selectedOption === question.correct ? (
                <>
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Incorrect</span>
                </>
              )}
            </div>
            <div className="space-y-2">
              <p className="font-medium">
                Correct answer: {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};