import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/types/quiz";
import { EasyModeCreator } from "./EasyModeCreator";
import { AdvancedModeCreator } from "./AdvancedModeCreator";
import { PlusCircle, Code } from "lucide-react";

interface QuizCreatorProps {
  onQuizUploaded: (quiz: Quiz) => void;
  onBack: () => void;
}

type CreatorMode = 'select' | 'easy' | 'advanced';

export const QuizCreator = ({ onQuizUploaded, onBack }: QuizCreatorProps) => {
  const [currentMode, setCurrentMode] = useState<CreatorMode>('select');

  const modes = [
    {
      id: 'easy' as CreatorMode,
      title: 'Easy Mode',
      subtitle: 'Step-by-step quiz builder',
      description: 'Build your quiz question by question with guided forms. Perfect for beginners and educators new to quiz creation.',
      icon: PlusCircle,
      color: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-700',
      hoverColor: 'hover:from-amber-100 hover:to-orange-100'
    },
    {
      id: 'advanced' as CreatorMode,
      title: 'Advanced Mode',
      subtitle: 'JSON editor with validation',
      description: 'Import or create JSON directly with real-time validation and preview. Ideal for experienced users and bulk imports.',
      icon: Code,
      color: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-700',
      hoverColor: 'hover:from-amber-100 hover:to-orange-100'
    }
  ];

  if (currentMode === 'easy') {
    return <EasyModeCreator onQuizUploaded={onQuizUploaded} onBack={() => setCurrentMode('select')} />;
  }

  if (currentMode === 'advanced') {
    return <AdvancedModeCreator onQuizUploaded={onQuizUploaded} onBack={() => setCurrentMode('select')} />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 shadow-lg">
        <CardHeader className="text-center py-8">
          <CardTitle className="text-2xl sm:text-3xl font-fredoka font-bold text-amber-900 mb-4">
            🎯 Create New Quiz
          </CardTitle>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Choose how you'd like to create your quiz. Each method is designed for different skill levels and needs.
          </p>
        </CardHeader>
      </Card>

      {/* Mode Selection Cards */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
        {modes.map((mode) => {
          const IconComponent = mode.icon;
          return (
            <Card
              key={mode.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${mode.color} ${mode.hoverColor} border-2 ${mode.borderColor} group`}
              onClick={() => setCurrentMode(mode.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300 border ${mode.borderColor}`}>
                    <IconComponent className={`w-8 h-8 ${mode.iconColor}`} />
                  </div>
                </div>
                <CardTitle className={`text-xl font-fredoka font-bold ${mode.textColor} mb-2`}>
                  {mode.title}
                </CardTitle>
                <Badge variant="outline" className={`${mode.borderColor} ${mode.textColor} bg-white border-2`}>
                  {mode.subtitle}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <p className={`text-sm ${mode.textColor} text-center leading-relaxed mb-6`}>
                  {mode.description}
                </p>
                <div className="flex justify-center">
                  <Button
                    className={`bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium shadow-md transition-all duration-200 px-6 py-2`}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Help Section */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
        <CardContent className="py-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-fredoka font-bold text-amber-900">
              📖 Need Help Choosing?
            </h3>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-amber-800 max-w-2xl mx-auto">
              <div className="space-y-3 bg-white/50 p-4 rounded-lg border border-amber-200">
                <div className="font-bold text-amber-900 flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" />
                  Choose Easy Mode if:
                </div>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You're new to quiz creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You prefer guided, step-by-step interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You want real-time preview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You want to use question templates</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 bg-white/50 p-4 rounded-lg border border-amber-200">
                <div className="font-bold text-amber-900 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Choose Advanced Mode if:
                </div>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You have existing JSON content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You're comfortable with code format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You need to import bulk questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>You want detailed validation feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="flex justify-center">
        <Button
          onClick={onBack}
          variant="outline"
          className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 font-medium"
        >
          ← Back to Quizzes
        </Button>
      </div>
    </div>
  );
};