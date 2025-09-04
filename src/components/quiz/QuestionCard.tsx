import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question, UserAnswer } from "@/types/quiz";
import { CheckCircle, XCircle, Heart, Zap } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answer: UserAnswer) => void;
  showFeedback?: boolean;
  key?: string | number;
}

const subjectEmojis = {
  "English": "📚",
  "Mathematics": "🔢", 
  "Science": "🔬",
  "History": "🏛️",
  "Geography": "🌍",
  "Creative Arts": "🎨"
};

const subjectColors = {
  "English": "bg-gradient-to-r from-fun-purple to-fun-pink border-fun-purple/30",
  "Mathematics": "bg-gradient-to-r from-fun-blue to-fun-purple border-fun-blue/30", 
  "Science": "bg-gradient-to-r from-fun-green to-fun-blue border-fun-green/30",
  "History": "bg-gradient-to-r from-fun-orange to-fun-yellow border-fun-orange/30",
  "Geography": "bg-gradient-to-r from-fun-green to-fun-orange border-fun-green/30",
  "Creative Arts": "bg-gradient-to-r from-fun-pink to-fun-purple border-fun-pink/30"
};

export const QuestionCard = ({ question, questionNumber, onAnswer, showFeedback = true }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowExplanation(false);
  }, [question.id, questionNumber]);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
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
      return "border-2 border-slate-200 hover:border-fun-purple/50 hover:bg-gradient-to-r hover:from-fun-purple/5 hover:to-fun-pink/5 transition-all duration-200 hover:scale-102";
    }
    
    if (index === question.correct) {
      return "border-2 border-success bg-gradient-to-r from-success/15 to-accent/10 text-success-foreground animate-bounce-in";
    }
    
    if (index === selectedOption && index !== question.correct) {
      return "border-2 border-destructive bg-gradient-to-r from-destructive/15 to-warning/10 text-destructive-foreground";
    }
    
    return "border-2 border-slate-200 opacity-60";
  };

  const getOptionIcon = (index: number) => {
    if (selectedOption === null) return null;
    
    if (index === question.correct) {
      return <CheckCircle className="w-5 h-5 text-success animate-bounce-in" />;
    }
    
    if (index === selectedOption && index !== question.correct) {
      return <XCircle className="w-5 h-5 text-destructive" />;
    }
    
    return null;
  };

  const subjectEmoji = subjectEmojis[question.subject as keyof typeof subjectEmojis] || "📝";
  const subjectColor = subjectColors[question.subject as keyof typeof subjectColors] || subjectColors["English"];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-2 border-slate-100 rounded-3xl overflow-hidden animate-fade-in">
      <CardHeader className="space-y-4 px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="flex items-center justify-center">
          <Badge className={`${subjectColor} text-white font-comic font-bold text-sm px-4 py-2 rounded-full shadow-lg`}>
            {subjectEmoji} {question.subject}
          </Badge>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-fredoka font-bold leading-relaxed text-center text-slate-700">
          {question.question}
        </h2>
      </CardHeader>
      
      <CardContent className="space-y-4 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`justify-start text-left h-auto p-4 sm:p-5 text-sm sm:text-base rounded-2xl font-comic ${getOptionStyle(index)}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <div className="flex items-start justify-between w-full gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 text-slate-600 font-fredoka font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-left leading-relaxed font-medium text-slate-700">
                    {option}
                  </span>
                </div>
                <div className="shrink-0">
                  {getOptionIcon(index)}
                </div>
              </div>
            </Button>
          ))}
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 sm:p-5 rounded-2xl border-2 ${selectedOption === question.correct ? 'bg-gradient-to-r from-success/10 to-accent/5 border-success/30' : 'bg-gradient-to-r from-destructive/10 to-warning/5 border-destructive/30'} animate-bounce-in`}>
            <div className="flex items-center gap-3 mb-3">
              {selectedOption === question.correct ? (
                <>
                  <Heart className="w-6 h-6 text-success animate-pulse-fun" />
                  <span className="font-fredoka font-bold text-success text-lg">
                    🎉 Awesome! You're right!
                  </span>
                </>
              ) : (
                <>
                  <Zap className="w-6 h-6 text-fun-orange" />
                  <span className="font-fredoka font-bold text-destructive text-lg">
                    💫 Oops! Let's learn together!
                  </span>
                </>
              )}
            </div>
            <div className="space-y-3">
              <p className="font-comic font-semibold text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>🎯 Correct answer:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
              </p>
              <p className="font-comic text-slate-600 text-xs sm:text-sm leading-relaxed">
                <strong>🤓 Why?</strong> {question.explanation}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};