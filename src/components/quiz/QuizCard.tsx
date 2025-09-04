import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/types/quiz";
import { Star, Sparkles, Zap, Trophy } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

const subjectData = {
  "English": { 
    gradient: "bg-kid-rainbow-3", 
    emoji: "📚", 
    icon: "📝",
    color: "text-purple-600" 
  },
  "Mathematics": { 
    gradient: "bg-kid-rainbow-4", 
    emoji: "🔢", 
    icon: "➕",
    color: "text-blue-600" 
  }, 
  "Science": { 
    gradient: "bg-kid-rainbow-1", 
    emoji: "🔬", 
    icon: "⚗️",
    color: "text-green-600" 
  },
  "History": { 
    gradient: "bg-kid-rainbow-2", 
    emoji: "🏛️", 
    icon: "⏰",
    color: "text-orange-600" 
  },
  "Geography": { 
    gradient: "bg-kid-sunset", 
    emoji: "🌍", 
    icon: "🗺️",
    color: "text-teal-600" 
  },
  "Creative Arts": { 
    gradient: "bg-kid-ocean", 
    emoji: "🎨", 
    icon: "🖌️",
    color: "text-pink-600" 
  }
};

export const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  const getSubjectData = () => {
    const subjects = quiz.questions.map(q => q.subject);
    const primarySubject = subjects[0] || "English";
    return subjectData[primarySubject as keyof typeof subjectData] || subjectData["English"];
  };

  const data = getSubjectData();

  return (
    <div className="w-full transform hover:scale-105 transition-all duration-300 animate-bounce-in">
      <Card className="h-full bg-white/95 backdrop-blur-sm border-4 border-white/50 shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden relative group">
        
        {/* Decorative header */}
        <div className={`h-4 ${data.gradient} relative`}>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-6 h-6 text-kid-yellow animate-spin" />
          </div>
          <div className="absolute -top-1 -left-1">
            <Star className="w-5 h-5 text-white animate-pulse" />
          </div>
        </div>
        
        <CardHeader className="pb-3 pt-4 px-4 sm:px-6 relative">
          {/* Floating emojis */}
          <div className="absolute top-2 right-2 text-2xl animate-bounce">
            {data.emoji}
          </div>
          
          <div className="flex justify-between items-start gap-2 mb-2">
            <CardTitle className="text-base sm:text-lg leading-tight font-fredoka font-black text-slate-700 pr-8">
              {quiz.name}
            </CardTitle>
          </div>
          
          <Badge className="w-fit bg-gradient-to-r from-kid-orange to-kid-yellow text-white font-comic font-bold text-xs shadow-lg border-2 border-white/50 rounded-full px-3 py-1">
            🎯 Year {quiz.year} 🌟
          </Badge>
        </CardHeader>
        
        <CardContent className="pt-0 pb-6 px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-3 border-2 border-blue-100">
            <Trophy className="w-5 h-5 text-kid-orange" />
            <p className="text-sm font-comic font-bold text-slate-600">
              🎮 {quiz.questions.length} Fun Questions! 🚀
            </p>
          </div>
          
          <Button 
            onClick={() => onSelect(quiz)} 
            className="w-full bg-gradient-to-r from-kid-purple via-kid-pink to-kid-red hover:from-kid-red hover:via-kid-pink hover:to-kid-purple text-white font-fredoka font-black text-base sm:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-2xl py-4 border-4 border-white/30 relative overflow-hidden group"
          >
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 animate-pulse" />
              <span>🚀 START ADVENTURE! 🎉</span>
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};