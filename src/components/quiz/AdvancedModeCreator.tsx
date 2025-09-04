import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Quiz } from "@/types/quiz";
import { QuizPreview } from "./QuizPreview";
import { ArrowLeft, Upload, Download, Eye, EyeOff, CheckCircle, AlertCircle, Copy } from "lucide-react";

interface AdvancedModeCreatorProps {
  onQuizUploaded: (quiz: Quiz) => void;
  onBack: () => void;
}

export const AdvancedModeCreator = ({ onQuizUploaded, onBack }: AdvancedModeCreatorProps) => {
  const [quizName, setQuizName] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [quizJson, setQuizJson] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const [previewQuiz, setPreviewQuiz] = useState<Quiz | null>(null);
  const { toast } = useToast();

  const years = ['K', '1', '2', '3', '4', '5', '6'];

  const exampleJson = `[
  {
    "subject": "Mathematics",
    "question": "What is 15 + 8?",
    "options": ["21", "23", "25", "27"],
    "correct": 1,
    "explanation": "15 + 8 = 23. We can break this down: 15 + 5 = 20, then 20 + 3 = 23."
  },
  {
    "subject": "English",
    "question": "Which word is a noun in this sentence: 'The quick brown fox jumps'?",
    "options": ["quick", "brown", "fox", "jumps"],
    "correct": 2,
    "explanation": "A noun names a person, place, or thing. 'Fox' is a thing (animal), making it a noun."
  },
  {
    "subject": "Science",
    "question": "What do plants need to grow?",
    "options": ["Only water", "Only sunlight", "Water, sunlight, and air", "Only soil"],
    "correct": 2,
    "explanation": "Plants need water, sunlight, and air (carbon dioxide) for photosynthesis to grow properly."
  }
]`;

  const validateJson = (jsonString: string): { isValid: boolean; errors: string[]; questions?: unknown[] } => {
    const errors: string[] = [];
    
    if (!jsonString.trim()) {
      errors.push("JSON content is required");
      return { isValid: false, errors };
    }

    try {
      const questions = JSON.parse(jsonString);
      
      if (!Array.isArray(questions)) {
        errors.push("JSON must be an array of question objects");
        return { isValid: false, errors };
      }

      if (questions.length === 0) {
        errors.push("At least one question is required");
        return { isValid: false, errors };
      }

      questions.forEach((q, index) => {
        const questionNum = index + 1;
        
        if (typeof q !== 'object' || q === null) {
          errors.push(`Question ${questionNum}: Must be an object`);
          return;
        }

        // Required fields validation
        if (!q.subject || typeof q.subject !== 'string') {
          errors.push(`Question ${questionNum}: 'subject' field is required and must be a string`);
        }

        if (!q.question || typeof q.question !== 'string') {
          errors.push(`Question ${questionNum}: 'question' field is required and must be a string`);
        }

        if (!q.options || !Array.isArray(q.options)) {
          errors.push(`Question ${questionNum}: 'options' field is required and must be an array`);
        } else if (q.options.length !== 4) {
          errors.push(`Question ${questionNum}: 'options' must contain exactly 4 items`);
        } else if (!q.options.every((opt: unknown) => typeof opt === 'string' && opt.trim())) {
          errors.push(`Question ${questionNum}: All options must be non-empty strings`);
        }

        if (typeof q.correct !== 'number') {
          errors.push(`Question ${questionNum}: 'correct' field must be a number`);
        } else if (q.correct < 0 || q.correct > 3) {
          errors.push(`Question ${questionNum}: 'correct' must be between 0 and 3 (option index)`);
        }

        if (!q.explanation || typeof q.explanation !== 'string') {
          errors.push(`Question ${questionNum}: 'explanation' field is required and must be a string`);
        }

        // Subject validation
        const validSubjects = ["English", "Mathematics", "Science", "History", "Geography", "Creative Arts"];
        if (q.subject && !validSubjects.includes(q.subject)) {
          errors.push(`Question ${questionNum}: Subject '${q.subject}' is not valid. Use: ${validSubjects.join(', ')}`);
        }
      });

      return { isValid: errors.length === 0, errors, questions };
    } catch (error) {
      errors.push(`Invalid JSON format: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return { isValid: false, errors };
    }
  };

  useEffect(() => {
    const validation = validateJson(quizJson);
    setValidationErrors(validation.errors);
    setIsValid(validation.isValid);

    if (validation.isValid && validation.questions && quizName && selectedYear && uploaderName) {
      const preview: Quiz = {
        id: "preview",
        name: quizName,
        year: selectedYear,
        uploader: uploaderName,
        questions: validation.questions.map((q, index) => ({
          id: index + 1,
          subject: q.subject,
          question: q.question,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation
        }))
      };
      setPreviewQuiz(preview);
    } else {
      setPreviewQuiz(null);
    }
  }, [quizJson, quizName, selectedYear, uploaderName]);

  const handleUpload = () => {
    if (!quizName.trim() || !selectedYear || !uploaderName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in quiz name, year level, and your name",
        variant: "destructive",
      });
      return;
    }

    const validation = validateJson(quizJson);
    
    if (!validation.isValid) {
      toast({
        title: "Validation Error",
        description: validation.errors[0],
        variant: "destructive",
      });
      return;
    }

    const newQuiz: Quiz = {
      id: `quiz-${Date.now()}`,
      name: quizName,
      year: selectedYear,
      uploader: uploaderName,
      questions: validation.questions!.map((q, index) => ({
        id: index + 1,
        subject: q.subject,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
      }))
    };

    onQuizUploaded(newQuiz);
    toast({
      title: "Quiz Created Successfully!",
      description: `${newQuiz.name} has been created with ${validation.questions!.length} questions.`,
    });
  };

  const loadExample = () => {
    setQuizJson(exampleJson);
    toast({
      title: "Example Loaded",
      description: "Example quiz JSON has been loaded. You can now customize it.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: "JSON has been copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    });
  };

  const downloadTemplate = () => {
    const template = {
      instructions: "Fill out this template and paste the questions array into the JSON editor",
      format: {
        subject: "One of: English, Mathematics, Science, History, Geography, Creative Arts",
        question: "Your question text here",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: "Index of correct option (0, 1, 2, or 3)",
        explanation: "Explanation of why this answer is correct"
      },
      example: JSON.parse(exampleJson)
    };
    
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz-template.json';
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Template Downloaded",
      description: "Quiz template has been downloaded to your computer",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-amber-900">
              💻 Advanced Quiz Editor
            </CardTitle>
            <p className="text-amber-800 mt-2 font-medium">
              Create quizzes using JSON with real-time validation and preview
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 font-medium"
              disabled={!previewQuiz}
            >
              {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button
              onClick={onBack}
              variant="outline"
              className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className={`grid gap-6 ${showPreview && previewQuiz ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor Panel */}
        <div className="space-y-6">
          {/* Quiz Details */}
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50/30 to-orange-50/30">
            <CardHeader>
              <CardTitle className="text-lg font-fredoka font-bold text-amber-900">
                📝 Quiz Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-name" className="text-amber-800 font-medium">Quiz Name</Label>
                <Input
                  id="quiz-name"
                  placeholder="e.g., Year 5 Mathematics - Fractions"
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year-select" className="text-amber-800 font-medium">Year Level</Label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="border-amber-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="Select year level" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year === 'K' ? 'Kindergarten' : `Year ${year}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uploader-name" className="text-amber-800 font-medium">Your Name</Label>
                <Input
                  id="uploader-name"
                  placeholder="e.g., Ms. Smith"
                  value={uploaderName}
                  onChange={(e) => setUploaderName(e.target.value)}
                  className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* JSON Editor */}
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50/30 to-orange-50/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-fredoka font-bold text-amber-900">
                🔧 JSON Editor
              </CardTitle>
              <div className="flex gap-2">
                <Button 
                  onClick={downloadTemplate} 
                  variant="outline" 
                  size="sm"
                  className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-400 font-medium shadow-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Template
                </Button>
                <Button 
                  onClick={loadExample} 
                  variant="outline" 
                  size="sm"
                  className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-400 font-medium shadow-sm"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Example
                </Button>
                <Button 
                  onClick={() => copyToClipboard(quizJson)} 
                  variant="outline" 
                  size="sm"
                  disabled={!quizJson}
                  className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 font-medium shadow-sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Format Guide */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200 rounded-lg p-4">
                <div className="text-sm text-amber-900 font-bold mb-3">📋 Required JSON Format:</div>
                <div className="text-xs text-amber-800 space-y-1 font-mono bg-white p-3 rounded border border-amber-200">
                  <div>{"[{ \"subject\": \"Mathematics\","}</div>
                  <div className="ml-3">{"\"question\": \"What is 2+2?\","}</div>
                  <div className="ml-3">{"\"options\": [\"3\", \"4\", \"5\", \"6\"],"}</div>
                  <div className="ml-3">{"\"correct\": 1,"}</div>
                  <div className="ml-3">{"\"explanation\": \"2+2=4\" }]"}</div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-amber-800 font-medium">Questions JSON</Label>
                <Textarea
                  placeholder="Paste or type your quiz JSON here..."
                  value={quizJson}
                  onChange={(e) => setQuizJson(e.target.value)}
                  className="min-h-[300px] font-mono text-sm border-amber-200 focus:border-amber-400 focus:ring-amber-400 bg-white"
                />
              </div>

              {/* Validation Status */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {validationErrors.length === 0 && quizJson ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <Badge className="bg-green-100 text-green-800 border-2 border-green-200 font-medium">
                        ✓ Valid JSON Format
                      </Badge>
                    </>
                  ) : quizJson ? (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <Badge className="bg-red-100 text-red-800 border-2 border-red-200 font-medium">
                        ⚠️ {validationErrors.length} Error(s) Found
                      </Badge>
                    </>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-600 border-2 border-gray-200 font-medium">
                      📝 Waiting for JSON input...
                    </Badge>
                  )}
                </div>

                {validationErrors.length > 0 && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-lg p-4 space-y-2">
                    <div className="text-sm font-bold text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Validation Errors:
                    </div>
                    <div className="space-y-1">
                      {validationErrors.slice(0, 5).map((error, index) => (
                        <div key={index} className="text-xs text-red-700 bg-white p-2 rounded border border-red-200">
                          • {error}
                        </div>
                      ))}
                      {validationErrors.length > 5 && (
                        <div className="text-xs text-red-600 italic">
                          ... and {validationErrors.length - 5} more errors
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upload Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleUpload}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium px-8 py-3 text-lg shadow-md"
              disabled={!isValid || !quizName || !selectedYear || !uploaderName}
            >
              <Upload className="w-5 h-5 mr-2" />
              Create Quiz
              {previewQuiz && ` (${previewQuiz.questions.length} questions)`}
            </Button>
          </div>
        </div>

        {/* Preview Panel */}
        {showPreview && previewQuiz && (
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <QuizPreview quiz={previewQuiz} />
          </div>
        )}
      </div>
    </div>
  );
};