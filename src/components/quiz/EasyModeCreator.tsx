import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Quiz, Question } from "@/types/quiz";
import { QuizPreview } from "./QuizPreview";
import { questionTemplates, getTemplatesBySubjectAndYear } from "@/data/questionTemplates";
import { MacOSPlusIcon } from "@/components/ui/macos-icon";
import { ArrowLeft, Trash2, Save, Eye, EyeOff } from "lucide-react";

interface EasyModeCreatorProps {
  onQuizUploaded: (quiz: Quiz) => void;
  onBack: () => void;
}

export const EasyModeCreator = ({ onQuizUploaded, onBack }: EasyModeCreatorProps) => {
  const [quizName, setQuizName] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [questions, setQuestions] = useState<Partial<Question>[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const subjects = ["English", "Mathematics", "Science", "History", "Geography", "Creative Arts"];
  const years = ['K', '1', '2', '3', '4', '5', '6'];

  const createEmptyQuestion = (): Partial<Question> => ({
    subject: "",
    question: "",
    options: ["", "", "", ""],
    correct: 0,
    explanation: ""
  });

  const addQuestion = () => {
    setQuestions([...questions, createEmptyQuestion()]);
  };

  const addQuestionFromTemplate = (templateId: string) => {
    const template = questionTemplates.find(t => t.id === templateId);
    if (template) {
      const newQuestion: Partial<Question> = {
        ...template.template,
        options: [...(template.template.options || ["", "", "", ""])]
      };
      setQuestions([...questions, newQuestion]);
      toast({
        title: "Template Added",
        description: "Question template has been added. You can now customize it.",
      });
    }
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    const updatedQuestions = [...questions];
    if (field === 'options') {
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        options: [...value]
      };
    } else {
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        [field]: value
      };
    }
    setQuestions(updatedQuestions);
  };

  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    const options = [...(updatedQuestions[questionIndex].options || ["", "", "", ""])];
    options[optionIndex] = value;
    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      options
    };
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    toast({
      title: "Question Removed",
      description: "Question has been removed from your quiz.",
    });
  };

  const validateQuiz = (): string[] => {
    const errors: string[] = [];
    
    if (!quizName.trim()) errors.push("Quiz name is required");
    if (!selectedYear) errors.push("Year level is required");
    if (!uploaderName.trim()) errors.push("Your name is required");
    if (questions.length === 0) errors.push("At least one question is required");

    questions.forEach((q, index) => {
      if (!q.subject) errors.push(`Question ${index + 1}: Subject is required`);
      if (!q.question?.trim()) errors.push(`Question ${index + 1}: Question text is required`);
      if (!q.options?.every(opt => opt.trim())) errors.push(`Question ${index + 1}: All options must be filled`);
      if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
        errors.push(`Question ${index + 1}: Must select a correct answer`);
      }
      if (!q.explanation?.trim()) errors.push(`Question ${index + 1}: Explanation is required`);
    });

    return errors;
  };

  const handleSave = () => {
    const errors = validateQuiz();
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive",
      });
      return;
    }

    const newQuiz: Quiz = {
      id: `quiz-${Date.now()}`,
      name: quizName,
      year: selectedYear,
      uploader: uploaderName,
      questions: questions.map((q, index) => ({
        id: index + 1,
        subject: q.subject!,
        question: q.question!,
        options: q.options!,
        correct: q.correct!,
        explanation: q.explanation!
      }))
    };

    onQuizUploaded(newQuiz);
    toast({
      title: "Quiz Created Successfully!",
      description: `${newQuiz.name} has been created with ${questions.length} questions.`,
    });
  };

  const getAvailableTemplates = () => {
    if (!selectedYear) return [];
    return getTemplatesBySubjectAndYear("", selectedYear).slice(0, 6); // Show max 6 templates
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-amber-900">
              🎯 Easy Quiz Builder
            </CardTitle>
            <p className="text-amber-800 mt-2 font-medium">
              Create your quiz step by step with our guided interface
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 font-medium"
            >
              {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button
              onClick={onBack}
              variant="outline"
              className="bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className={`grid gap-6 ${showPreview ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Quiz Builder */}
        <div className="space-y-6">
          {/* Quiz Details */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-lg font-fredoka font-bold text-amber-900">
                📝 Quiz Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quiz-name">Quiz Name</Label>
                <Input
                  id="quiz-name"
                  placeholder="e.g., Year 5 Science - Living Things"
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
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year === 'K' ? 'Kindergarten' : `Year ${year}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="uploader-name">Your Name</Label>
                <Input
                  id="uploader-name"
                  placeholder="e.g., Ms. Smith"
                  value={uploaderName}
                  onChange={(e) => setUploaderName(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Templates Section */}
          {selectedYear && (
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg font-fredoka font-bold text-amber-900">
                  🎨 Quick Start Templates
                </CardTitle>
                <p className="text-sm text-amber-800">
                  Add pre-built question templates that you can customize
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getAvailableTemplates().map((template) => (
                    <Button
                      key={template.id}
                      variant="outline"
                      onClick={() => addQuestionFromTemplate(template.id)}
                      className="h-auto p-3 text-left justify-start bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-400 font-medium shadow-sm"
                    >
                      <div>
                        <div className="font-medium text-sm">{template.subject}</div>
                        <div className="text-xs text-amber-600">{template.category}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Questions Section */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-fredoka font-bold text-amber-900">
                ❓ Questions ({questions.length})
              </CardTitle>
              <Button onClick={addQuestion} className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium">
                <MacOSPlusIcon size="sm" className="mr-2 text-white" />
                Add Question
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions.length === 0 ? (
                <div className="text-center py-8 text-amber-700">
                  <div className="text-4xl mb-4">📝</div>
                  <p>No questions yet. Click "Add Question" or use a template to get started!</p>
                </div>
              ) : (
                questions.map((question, index) => (
                  <Card key={index} className="border-2 border-amber-100 bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-3">
                      <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-300">
                        Question {index + 1}
                      </Badge>
                      <Button
                        onClick={() => removeQuestion(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <Select
                          value={question.subject || ""}
                          onValueChange={(value) => updateQuestion(index, 'subject', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Question</Label>
                        <Textarea
                          placeholder="Enter your question here..."
                          value={question.question || ""}
                          onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                          className="min-h-[80px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Answer Options</Label>
                        <div className="space-y-3">
                          {(question.options || ["", "", "", ""]).map((option, optionIndex) => (
                            <div key={optionIndex} className="flex gap-3 items-center">
                              <Badge
                                variant={question.correct === optionIndex ? "default" : "outline"}
                                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer font-bold ${
                                  question.correct === optionIndex
                                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none"
                                    : "hover:bg-amber-50 border-amber-300"
                                }`}
                                onClick={() => updateQuestion(index, 'correct', optionIndex)}
                              >
                                {String.fromCharCode(65 + optionIndex)}
                              </Badge>
                              <Input
                                placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                value={option}
                                onChange={(e) => updateOption(index, optionIndex, e.target.value)}
                                className="flex-1"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Click on the letter badge to mark it as the correct answer
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Explanation</Label>
                        <Textarea
                          placeholder="Explain why this answer is correct..."
                          value={question.explanation || ""}
                          onChange={(e) => updateQuestion(index, 'explanation', e.target.value)}
                          className="min-h-[60px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </CardContent>
          </Card>

          {/* Save Button */}
          {questions.length > 0 && (
            <div className="flex justify-center">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium px-8 py-3 text-lg shadow-md"
              >
                <Save className="w-5 h-5 mr-2" />
                Create Quiz ({questions.length} questions)
              </Button>
            </div>
          )}
        </div>

        {/* Preview Panel */}
        {showPreview && (
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <QuizPreview
              quiz={{
                id: "preview",
                name: quizName || "Preview Quiz",
                year: selectedYear || "K",
                uploader: uploaderName || "You",
                questions: questions.map((q, index) => ({
                  id: index + 1,
                  subject: q.subject || "Subject",
                  question: q.question || "Sample question...",
                  options: q.options || ["Option A", "Option B", "Option C", "Option D"],
                  correct: q.correct || 0,
                  explanation: q.explanation || "Sample explanation..."
                }))
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};