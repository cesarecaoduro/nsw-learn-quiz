import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question, UserAnswer } from "@/types/quiz";
import { CheckCircle, XCircle, Heart, Zap, Sparkles } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answer: UserAnswer) => void;
  showFeedback?: boolean;
  key?: string | number;
}

const subjectData = {
  "English": { emoji: "📚", icon: "📝", gradient: "bg-gradient-to-r from-purple-400 to-pink-400" },
  "Mathematics": { emoji: "🔢", icon: "➕", gradient: "bg-gradient-to-r from-blue-400 to-purple-400" }, 
  "Science": { emoji: "🔬", icon: "⚗️", gradient: "bg-gradient-to-r from-green-400 to-blue-400" },
  "History": { emoji: "🏛️", icon: "⏰", gradient: "bg-gradient-to-r from-orange-400 to-yellow-400" },
  "Geography": { emoji: "🌍", icon: "🗺️", gradient: "bg-gradient-to-r from-teal-400 to-green-400" },
  "Creative Arts": { emoji: "🎨", icon: "🖌️", gradient: "bg-gradient-to-r from-pink-400 to-purple-400" }
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
      return "border-3 border-white/50 bg-white/80 backdrop-blur-sm hover:border-kid-purple hover:bg-kid-purple/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl";
    }
    
    if (index === question.correct) {
      return "border-3 border-kid-green bg-gradient-to-r from-kid-green/20 to-success/20 text-green-700 animate-bounce-in shadow-2xl scale-105";
    }
    
    if (index === selectedOption && index !== question.correct) {
      return "border-3 border-kid-red bg-gradient-to-r from-kid-red/20 to-destructive/20 text-red-700 shadow-2xl";
    }
    
    return "border-3 border-gray-200 bg-gray-100 opacity-60";
  };

  const getOptionIcon = (index: number) => {
    if (selectedOption === null) return null;
    
    if (index === question.correct) {
      return (
        <div className="flex items-center gap-1">
          <CheckCircle className="w-6 h-6 text-kid-green animate-bounce" />
          <span className="text-lg">✅</span>
        </div>
      );
    }
    
    if (index === selectedOption && index !== question.correct) {
      return (
        <div className="flex items-center gap-1">
          <XCircle className="w-6 h-6 text-kid-red" />
          <span className="text-lg">❌</span>
        </div>
      );
    }
    
    return null;
  };

  const subjectInfo = subjectData[question.subject as keyof typeof subjectData] || subjectData["English"];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-4 border-white/50 rounded-3xl overflow-hidden animate-fade-in bg-white/95 backdrop-blur-lg">
      {/* Colorful Header */}
      <CardHeader className="relative bg-gradient-to-r from-kid-rainbow-3 p-4 sm:p-6">
        
        {/* Floating decorations */}
        <div className="absolute top-2 right-2 animate-spin">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-2 left-2 animate-bounce text-2xl">✨</div>
        
        {/* Subject Badge */}
        <div className="flex justify-center mb-4">
          <Badge className="bg-white/90 backdrop-blur-sm text-kid-purple font-fredoka font-black text-base sm:text-lg px-4 py-2 rounded-full shadow-xl border-2 border-white/50">
            {subjectInfo.emoji} {question.subject} {subjectInfo.icon}
          </Badge>
        </div>
        
        {/* Question */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-fredoka font-black leading-relaxed text-center text-white drop-shadow-2xl px-2">
          🤔 {question.question} 💭
        </h2>
      </CardHeader>
      
      {/* Options */}
      <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        
        {/* Fun instruction */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="font-comic font-bold text-kid-purple text-sm sm:text-base bg-white/70 rounded-full px-4 py-2 inline-block shadow-lg">
            🎯 Tap your answer! 👆✨
          </p>
        </div>
        
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`justify-start text-left h-auto p-4 sm:p-6 text-sm sm:text-base lg:text-lg rounded-2xl font-comic font-semibold ${getOptionStyle(index)}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              <div className="flex items-center justify-between w-full gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  
                  {/* Option Letter */}
                  <div className="bg-gradient-to-br from-kid-yellow to-kid-orange text-white font-fredoka font-black text-lg sm:text-xl w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white/50 shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  
                  {/* Option Text */}
                  <span className="text-left leading-relaxed font-semibold text-slate-700">
                    {option}
                  </span>
                </div>
                
                {/* Status Icon */}
                <div className="shrink-0">
                  {getOptionIcon(index)}
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-6 p-4 sm:p-6 rounded-3xl border-4 ${selectedOption === question.correct ? 'bg-gradient-to-r from-kid-green/10 to-success/5 border-kid-green/50' : 'bg-gradient-to-r from-kid-red/10 to-destructive/5 border-kid-red/50'} animate-bounce-in shadow-2xl relative overflow-hidden`}>
            
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 text-2xl animate-spin">
              {selectedOption === question.correct ? '🌟' : '💫'}
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              {selectedOption === question.correct ? (
                <>
                  <div className="bg-kid-green rounded-full p-2">
                    <Heart className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <span className="font-fredoka font-black text-kid-green text-lg sm:text-xl">
                    🎉 AWESOME! You're absolutely right! 🌟
                  </span>
                </>
              ) : (
                <>
                  <div className="bg-kid-orange rounded-full p-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-fredoka font-black text-kid-orange text-lg sm:text-xl">
                    💫 Oops! Let's learn something new! 📚
                  </span>
                </>
              )}
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border-2 border-white/50">
                <p className="font-comic font-bold text-slate-700 text-sm sm:text-base leading-relaxed">
                  🎯 <strong>Correct answer:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]} ✅
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-3 sm:p-4 border-2 border-blue-100">
                <p className="font-comic text-slate-600 text-xs sm:text-sm leading-relaxed">
                  🤓 <strong>Fun Fact:</strong> {question.explanation} 🧠✨
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};