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
  key?: string | number;
}

const subjectColors = {
  "English": "bg-purple-100 text-purple-800 border-purple-200",
  "Mathematics": "bg-blue-100 text-blue-800 border-blue-200", 
  "Science": "bg-green-100 text-green-800 border-green-200",
  "History": "bg-orange-100 text-orange-800 border-orange-200",
  "Geography": "bg-teal-100 text-teal-800 border-teal-200",
  "Creative Arts": "bg-pink-100 text-pink-800 border-pink-200"
};

const subjectEmojis = {
  "English": "📚",
  "Mathematics": "🔢", 
  "Science": "🔬",
  "History": "🏛️",
  "Geography": "🌍",
  "Creative Arts": "🎨"
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
      return "border-2 border-gray-200 bg-white hover:border-primary hover:bg-primary/5 transition-all duration-200";
    }
    
    if (index === question.correct) {
      return "border-2 border-green-500 bg-green-50 text-green-800";
    }
    
    if (index === selectedOption && index !== question.correct) {
      return "border-2 border-red-500 bg-red-50 text-red-800";
    }
    
    return "border-2 border-gray-200 bg-gray-50 opacity-60";
  };

  const getOptionIcon = (index: number) => {
    if (selectedOption === null) return null;
    
    if (index === question.correct) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    
    if (index === selectedOption && index !== question.correct) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    
    return null;
  };

  const subjectInfo = {
    color: subjectColors[question.subject as keyof typeof subjectColors] || subjectColors["English"],
    emoji: subjectEmojis[question.subject as keyof typeof subjectEmojis] || "📝"
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border border-gray-200 rounded-xl bg-white">
      <CardHeader className="bg-gray-50 border-b border-gray-100">
        <div className="flex justify-center mb-4">
          <Badge className={`font-medium border ${subjectInfo.color}`}>
            {subjectInfo.emoji} {question.subject}
          </Badge>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-fredoka font-semibold leading-relaxed text-center text-gray-900">
          {question.question}
        </h2>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`justify-start text-left h-auto p-4 text-base rounded-lg ${getOptionStyle(index)}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 text-gray-700 font-fredoka font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-left leading-relaxed font-medium text-gray-900">
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
          <div className={`mt-6 p-5 rounded-lg border-2 ${selectedOption === question.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              {selectedOption === question.correct ? (
                <>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-fredoka font-bold text-green-800 text-lg">
                    Correct! Well done! 🎉
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-600" />
                  <span className="font-fredoka font-bold text-red-800 text-lg">
                    Not quite right - let's learn!
                  </span>
                </>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-medium text-gray-900">
                  <strong>Correct answer:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-gray-800 text-sm leading-relaxed">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};