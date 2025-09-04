import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Quiz } from "@/types/quiz";

interface QuizUploadProps {
  onQuizUploaded: (quiz: Quiz) => void;
}

export const QuizUpload = ({ onQuizUploaded }: QuizUploadProps) => {
  const [quizName, setQuizName] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [quizJson, setQuizJson] = useState("");
  const { toast } = useToast();

  const handleUpload = () => {
    try {
      if (!quizName.trim() || !selectedYear || !uploaderName.trim() || !quizJson.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }

      const questions = JSON.parse(quizJson);
      
      // Validate the format
      if (!Array.isArray(questions)) {
        throw new Error("Questions must be an array");
      }

      // Validate each question has required fields
      questions.forEach((q, index) => {
        if (!q.subject || !q.question || !q.options || !Array.isArray(q.options) || 
            typeof q.correct !== 'number' || !q.explanation) {
          throw new Error(`Question ${index + 1} is missing required fields`);
        }
      });

      const newQuiz: Quiz = {
        id: `quiz-${Date.now()}`,
        name: quizName,
        year: selectedYear,
        uploader: uploaderName,
        questions: questions.map((q, index) => ({
          ...q,
          id: index + 1
        }))
      };

      onQuizUploaded(newQuiz);
      
      // Reset form
      setQuizName("");
      setSelectedYear("");
      setUploaderName("");
      setQuizJson("");

      toast({
        title: "Quiz Uploaded Successfully",
        description: `${newQuiz.name} has been added with ${questions.length} questions`,
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Invalid JSON format",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-lg">
      <CardHeader className="px-4 sm:px-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-t-lg">
        <CardTitle className="text-lg sm:text-xl text-amber-900 font-fredoka font-bold">Upload New Quiz 📚</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-4 sm:px-6">
        <div className="space-y-2">
          <Label htmlFor="quiz-name" className="text-sm font-medium text-amber-800">Quiz Name</Label>
          <Input
            id="quiz-name"
            placeholder="e.g., Year 5 Science Quiz"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            className="text-sm border-amber-200 focus:border-amber-400 focus:ring-amber-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year-select" className="text-sm font-medium text-amber-800">Year Level</Label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="text-sm border-amber-200 focus:border-amber-400 focus:ring-amber-400">
              <SelectValue placeholder="Select year level" />
            </SelectTrigger>
            <SelectContent>
              {['K', '1', '2', '3', '4', '5', '6'].map((year) => (
                <SelectItem key={year} value={year} className="text-sm">
                  {year === 'K' ? 'Kindergarten' : `Year ${year}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="uploader-name" className="text-sm font-medium text-amber-800">Your Name</Label>
          <Input
            id="uploader-name"
            placeholder="e.g., Ms. Smith"
            value={uploaderName}
            onChange={(e) => setUploaderName(e.target.value)}
            className="text-sm border-amber-200 focus:border-amber-400 focus:ring-amber-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="quiz-json" className="text-sm font-medium text-amber-800">Quiz Questions (JSON)</Label>
            <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded">
              Subjects: English, Mathematics, Science, History, Geography
            </div>
          </div>
          <div className="text-xs text-amber-700 mb-2 p-2 bg-amber-100/50 rounded border border-amber-200">
            <strong>Format:</strong> Array of question objects. Each question needs: subject, question, options (array), correct (index), explanation
          </div>
          <Textarea
            id="quiz-json"
            placeholder={`Paste your quiz JSON here. Example format:
[
  {
    "subject": "Mathematics",
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "correct": 1,
    "explanation": "2 + 2 equals 4. This is basic addition."
  },
  {
    "subject": "English",
    "question": "What is a noun?",
    "options": ["An action word", "A naming word", "A describing word", "A connecting word"],
    "correct": 1,
    "explanation": "A noun is a naming word for a person, place, or thing."
  }
]`}
            value={quizJson}
            onChange={(e) => setQuizJson(e.target.value)}
            className="min-h-[150px] sm:min-h-[200px] font-mono text-xs sm:text-sm border-amber-200 focus:border-amber-400 focus:ring-amber-400 bg-amber-50/50"
          />
        </div>

        <Button onClick={handleUpload} className="w-full text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium shadow-md transition-all duration-200 hover:shadow-lg">
          Upload Quiz
        </Button>
      </CardContent>
    </Card>
  );
};