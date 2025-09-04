import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/types/quiz";
import { CheckCircle } from "lucide-react";

interface QuizPreviewProps {
  quiz: Quiz;
}

const subjectColors = {
  "English": "bg-purple-100 text-purple-800 border-purple-200",
  "Mathematics": "bg-blue-100 text-blue-800 border-blue-200", 
  "Science": "bg-green-100 text-green-800 border-green-200",
  "History": "bg-orange-100 text-orange-800 border-orange-200",
  "Geography": "bg-teal-100 text-teal-800 border-teal-200",
  "Creative Arts": "bg-pink-100 text-pink-800 border-pink-200",
  "Subject": "bg-gray-100 text-gray-800 border-gray-200"
};

const subjectEmojis = {
  "English": "📚",
  "Mathematics": "🔢", 
  "Science": "🔬",
  "History": "🏛️",
  "Geography": "🌍",
  "Creative Arts": "🎨",
  "Subject": "📝"
};

export const QuizPreview = ({ quiz }: QuizPreviewProps) => {
  const getSubjectInfo = (subject: string) => {
    return {
      color: subjectColors[subject as keyof typeof subjectColors] || subjectColors["Subject"],
      emoji: subjectEmojis[subject as keyof typeof subjectEmojis] || "📝"
    };
  };

  return (
    <Card className="h-fit">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-fredoka font-bold text-gray-800">
          👁️ Live Preview
        </CardTitle>
        <p className="text-sm text-gray-600">
          See how your quiz will look to students
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quiz Header Preview */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
          <CardContent className="p-4 text-center">
            <h3 className="font-fredoka font-bold text-lg text-amber-900 mb-1">
              {quiz.name}
            </h3>
            <div className="flex justify-center items-center gap-2 text-sm text-amber-700">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                📊 Year {quiz.year}
              </Badge>
              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                {quiz.questions.length} Questions
              </Badge>
            </div>
            {quiz.uploader && (
              <p className="text-xs text-amber-600 mt-2">By {quiz.uploader}</p>
            )}
          </CardContent>
        </Card>

        {/* Questions Preview */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {quiz.questions.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-sm">Add questions to see preview</p>
            </div>
          ) : (
            quiz.questions.map((question, index) => {
              const { color, emoji } = getSubjectInfo(question.subject);
              return (
                <Card key={index} className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge className={`text-xs font-medium border ${color}`}>
                        {emoji} {question.subject}
                      </Badge>
                      <span className="text-xs text-gray-500">Q{index + 1}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm font-medium text-gray-900 mb-3 leading-relaxed">
                      {question.question}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`flex items-center gap-2 p-2 rounded text-sm transition-colors ${
                            optionIndex === question.correct
                              ? 'bg-green-50 border border-green-200'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            optionIndex === question.correct
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-300 text-gray-700'
                          }`}>
                            {String.fromCharCode(65 + optionIndex)}
                          </div>
                          <span className="flex-1">{option || `Option ${String.fromCharCode(65 + optionIndex)}`}</span>
                          {optionIndex === question.correct && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                      ))}
                    </div>
                    {question.explanation && (
                      <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                        <strong className="text-blue-800">Explanation:</strong>
                        <p className="text-blue-700 mt-1">{question.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Quiz Stats */}
        {quiz.questions.length > 0 && (
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="p-3">
              <h4 className="font-semibold text-blue-800 text-sm mb-2">📊 Quiz Statistics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-blue-700">Total Questions:</span>
                  <span className="font-semibold text-blue-900 ml-1">{quiz.questions.length}</span>
                </div>
                <div>
                  <span className="text-blue-700">Subjects:</span>
                  <span className="font-semibold text-blue-900 ml-1">
                    {Array.from(new Set(quiz.questions.map(q => q.subject))).length}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-blue-700 text-xs">Subject Breakdown:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {Array.from(new Set(quiz.questions.map(q => q.subject))).map(subject => {
                    const count = quiz.questions.filter(q => q.subject === subject).length;
                    const { emoji } = getSubjectInfo(subject);
                    return (
                      <Badge key={subject} variant="outline" className="text-xs bg-white">
                        {emoji} {count}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};