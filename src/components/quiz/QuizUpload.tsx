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
  const [quizJson, setQuizJson] = useState("");
  const { toast } = useToast();

  const handleUpload = () => {
    try {
      if (!quizName.trim() || !selectedYear || !quizJson.trim()) {
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
        questions: questions.map((q, index) => ({
          ...q,
          id: index + 1
        }))
      };

      onQuizUploaded(newQuiz);
      
      // Reset form
      setQuizName("");
      setSelectedYear("");
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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload New Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quiz-name">Quiz Name</Label>
          <Input
            id="quiz-name"
            placeholder="e.g., Year 5 Science Quiz"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year-select">Year Level</Label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue placeholder="Select year level" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  Year {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quiz-json">Quiz Questions (JSON)</Label>
          <Textarea
            id="quiz-json"
            placeholder={`Paste your quiz JSON here. Example format:
[
  {
    "subject": "Mathematics",
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "correct": 1,
    "explanation": "2 + 2 equals 4"
  }
]`}
            value={quizJson}
            onChange={(e) => setQuizJson(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
        </div>

        <Button onClick={handleUpload} className="w-full">
          Upload Quiz
        </Button>
      </CardContent>
    </Card>
  );
};