import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, Copy, Sparkles, Bot, FileText, Wand2 } from "lucide-react";

interface AIAssistantModeProps {
  onBack: () => void;
}

export const AIAssistantMode = ({ onBack }: AIAssistantModeProps) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [questionCount, setQuestionCount] = useState("10");
  const [difficulty, setDifficulty] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const { toast } = useToast();

  const years = ['K', '1', '2', '3', '4', '5', '6'];
  const subjects = ["English", "Mathematics", "Science", "History", "Geography", "Creative Arts"];
  
  const curriculumStages = {
    'K': 'Early Stage 1',
    '1': 'Stage 1',
    '2': 'Stage 1', 
    '3': 'Stage 2',
    '4': 'Stage 2',
    '5': 'Stage 3',
    '6': 'Stage 3'
  };

  const subjectOutcomes = {
    'English': {
      'K': 'Basic phonics, letter recognition, simple vocabulary',
      '1': 'Reading simple texts, basic writing, spelling patterns',
      '2': 'Comprehension, grammar basics, creative writing',
      '3': 'Text analysis, persuasive writing, advanced grammar',
      '4': 'Literary devices, complex texts, research skills',
      '5': 'Critical analysis, sophisticated vocabulary, essay writing',
      '6': 'Advanced comprehension, debate skills, complex compositions'
    },
    'Mathematics': {
      'K': 'Number recognition, counting, basic patterns',
      '1': 'Addition/subtraction, measurement basics, 2D shapes',
      '2': 'Multiplication tables, fractions, data collection',
      '3': 'Division, decimals, area and perimeter',
      '4': 'Fractions and decimals, angles, probability',
      '5': 'Percentages, algebraic thinking, coordinate geometry',
      '6': 'Ratios, advanced geometry, statistical analysis'
    },
    'Science': {
      'K': 'Observing with senses, living vs non-living',
      '1': 'Animal needs, weather, materials and their uses',
      '2': 'Life cycles, forces and motion, Earth and space',
      '3': 'Classification, energy sources, Earth\'s resources',
      '4': 'Ecosystems, states of matter, Earth in space',
      '5': 'Adaptation, chemical reactions, the solar system',
      '6': 'Evolution, electricity, natural disasters'
    },
    'History': {
      'K': 'Past and present, family history',
      '1': 'Personal and family histories, celebrations',
      '2': 'Local community history, significant people',
      '3': 'Australian symbols, colonial life',
      '4': 'First Australians, early settlements',
      '5': 'Australian colonies, gold rush era',
      '6': 'Federation, significant events and people'
    },
    'Geography': {
      'K': 'Places and their features, directions',
      '1': 'Local places, maps and location',
      '2': 'Australian places, environments',
      '3': 'Diverse places, interconnections',
      '4': 'Landforms and landscapes, human impact',
      '5': 'Factors shaping places, sustainability',
      '6': 'Global connections, environmental change'
    },
    'Creative Arts': {
      'K': 'Exploring art materials, music and movement',
      '1': 'Basic art techniques, rhythm and beat',
      '2': 'Color theory, simple compositions',
      '3': 'Art elements, musical instruments',
      '4': 'Art styles, performance skills',
      '5': 'Cultural art, composition techniques',
      '6': 'Art criticism, advanced performance'
    }
  };

  const generatePrompt = () => {
    if (!selectedYear || !selectedSubject) {
      toast({
        title: "Missing Information",
        description: "Please select both year level and subject",
        variant: "destructive",
      });
      return;
    }

    const stage = curriculumStages[selectedYear as keyof typeof curriculumStages];
    const outcomes = (subjectOutcomes[selectedSubject as keyof typeof subjectOutcomes] as any)?.[selectedYear];
    const topicFocus = customTopic || "General curriculum topics";
    
    const prompt = `Create a NSW curriculum-aligned quiz for Year ${selectedYear === 'K' ? 'Kindergarten (K)' : selectedYear} ${selectedSubject} with ${questionCount} multiple-choice questions.

**Requirements:**
- Align with NSW ${selectedSubject} ${stage} curriculum outcomes
- Age-appropriate for ${selectedYear === 'K' ? '5-6 year olds' : `${parseInt(selectedYear) + 5}-${parseInt(selectedYear) + 6} year olds`}
- Each question must have exactly 4 options (A, B, C, D)
- Include detailed explanations for learning
- ${difficulty ? `Difficulty level: ${difficulty}` : 'Mixed difficulty levels appropriate for year level'}
- Focus on: ${topicFocus}

**Curriculum Context:**
- Stage: ${stage}
- Learning Focus: ${outcomes}

**JSON Format Required:**
\`\`\`json
[
  {
    "subject": "${selectedSubject}",
    "question": "Your question here",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0,
    "explanation": "Detailed explanation linking to learning outcomes"
  }
]
\`\`\`

**Question Types to Include:**
- Knowledge recall (30%)
- Comprehension (40%) 
- Application (30%)

**Example Question Style for ${selectedSubject} Year ${selectedYear}:**
${getExampleQuestion()}

Please ensure all questions:
1. Are factually accurate
2. Have clear, unambiguous language
3. Include distractors that are plausible but clearly incorrect
4. Connect explanations to real-world examples when possible
5. Support the specific learning outcomes for ${stage}

Generate the ${questionCount} questions now in the exact JSON format specified above.`;

    setGeneratedPrompt(prompt);
    toast({
      title: "Prompt Generated!",
      description: "Your customized LLM prompt has been created.",
    });
  };

  const getExampleQuestion = () => {
    const examples = {
      'English': {
        'K': '"Which letter makes the /m/ sound?" with options showing different letters',
        '1': '"What type of word is \'dog\' in this sentence?" focusing on parts of speech',
        '2': '"Which sentence uses correct punctuation?" with grammar examples',
        '3': '"What is the main idea of this paragraph?" for comprehension',
        '4': '"Which literary device is used in \'The stars danced\'?" for language features',
        '5': '"What can you infer from this passage?" for critical thinking',
        '6': '"Which argument technique is most persuasive?" for advanced analysis'
      },
      'Mathematics': {
        'K': '"How many apples are in the picture?" with counting exercises',
        '1': '"What is 5 + 3?" with basic addition problems',
        '2': '"Which fraction is larger: 1/2 or 1/4?" comparing fractions',
        '3': '"What is the area of a rectangle 4cm × 3cm?" for measurement',
        '4': '"What percentage is 3 out of 12?" for percentage calculations',
        '5': '"If x + 5 = 12, what is x?" for algebraic thinking',
        '6': '"What is the probability of rolling an even number?" for probability'
      },
      'Science': {
        'K': '"Which sense do we use to hear sounds?" about the five senses',
        '1': '"What do plants need to grow?" about living things\' needs',
        '2': '"What happens when you push a ball?" about forces and motion',
        '3': '"How do animals adapt to their environment?" about ecosystems',
        '4': '"What causes day and night on Earth?" about Earth and space',
        '5': '"Why do some materials conduct electricity?" about physical sciences',
        '6': '"How does natural selection work?" about biological sciences'
      }
    };
    
    return (examples[selectedSubject as keyof typeof examples] as any)?.[selectedYear] || 
           'Age-appropriate questions that test understanding of key concepts';
  };

  const copyPrompt = () => {
    if (!generatedPrompt) return;
    
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      toast({
        title: "Copied to Clipboard!",
        description: "Paste this prompt into ChatGPT, Claude, or your preferred LLM.",
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Could not copy to clipboard. Please select and copy manually.",
        variant: "destructive",
      });
    });
  };

  const downloadPrompt = () => {
    if (!generatedPrompt) return;

    const fileName = `NSW-Quiz-Prompt-${selectedSubject}-Year${selectedYear}.txt`;
    const blob = new Blob([generatedPrompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Prompt Downloaded",
      description: `${fileName} has been saved to your downloads.`,
    });
  };

  const llmProviders = [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      description: "OpenAI's conversational AI - great for educational content",
      icon: "🤖"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "Anthropic's AI assistant - excellent for detailed explanations",
      icon: "🧠"
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com",
      description: "Google's AI - good for research and fact-checking",
      icon: "💫"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-fredoka font-bold text-purple-800">
              ✨ AI Quiz Assistant
            </CardTitle>
            <p className="text-purple-700 mt-2">
              Generate customized prompts for ChatGPT, Claude, or other LLMs to create curriculum-aligned quizzes
            </p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quiz Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-fredoka font-bold text-gray-800 flex items-center">
                <Wand2 className="w-5 h-5 mr-2 text-purple-600" />
                Quiz Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Year Level *</Label>
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
                  <Label>Subject *</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
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
                  <Label>Number of Questions</Label>
                  <Select value={questionCount} onValueChange={setQuestionCount}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 questions</SelectItem>
                      <SelectItem value="10">10 questions</SelectItem>
                      <SelectItem value="15">15 questions</SelectItem>
                      <SelectItem value="20">20 questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Difficulty (Optional)</Label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Mixed difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Mixed difficulty</SelectItem>
                      <SelectItem value="Basic">Basic level</SelectItem>
                      <SelectItem value="Standard">Standard level</SelectItem>
                      <SelectItem value="Challenging">Challenging level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Specific Topic (Optional)</Label>
                <Input
                  placeholder="e.g., Fractions and Decimals, Australian Animals, etc."
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                />
              </div>

              {selectedYear && selectedSubject && (
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <div className="text-sm font-medium text-blue-800 mb-1">
                    📚 Curriculum Context:
                  </div>
                  <div className="text-xs text-blue-700">
                    <strong>Stage:</strong> {curriculumStages[selectedYear as keyof typeof curriculumStages]}
                  </div>
                  <div className="text-xs text-blue-700 mt-1">
                    <strong>Focus:</strong> {(subjectOutcomes[selectedSubject as keyof typeof subjectOutcomes] as any)?.[selectedYear]}
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  onClick={generatePrompt}
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-3"
                  disabled={!selectedYear || !selectedSubject}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate AI Prompt
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Generated Prompt */}
          {generatedPrompt && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-fredoka font-bold text-gray-800 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  Generated Prompt
                </CardTitle>
                <div className="flex gap-2">
                  <Button onClick={copyPrompt} variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button onClick={downloadPrompt} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border border-gray-200 rounded p-4 max-h-96 overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap text-gray-700 font-mono leading-relaxed">
                    {generatedPrompt}
                  </pre>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                  <div className="text-sm font-medium text-green-800 mb-2">
                    📋 Next Steps:
                  </div>
                  <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                    <li>Copy the prompt above</li>
                    <li>Open your preferred AI assistant</li>
                    <li>Paste the prompt and send it</li>
                    <li>Copy the JSON response from the AI</li>
                    <li>Use Advanced Mode to import the JSON into NSW Quiz Fun</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* LLM Providers Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-fredoka font-bold text-gray-800 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-600" />
                AI Providers
              </CardTitle>
              <p className="text-sm text-gray-600">
                Choose your preferred AI assistant
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {llmProviders.map((provider) => (
                <Card key={provider.name} className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{provider.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{provider.name}</h3>
                          <p className="text-xs text-gray-600 leading-tight">{provider.description}</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open(provider.url, '_blank')}
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3 text-xs"
                    >
                      Open {provider.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-fredoka font-bold text-gray-800">
                💡 Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">1</Badge>
                  <p>Be specific about your topic for better results</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">2</Badge>
                  <p>Review AI responses for accuracy before importing</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1">3</Badge>
                  <p>You can ask the AI to modify questions if needed</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-orange-100 text-orange-800 text-xs px-2 py-1">4</Badge>
                  <p>Use Advanced Mode to import the generated JSON</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};