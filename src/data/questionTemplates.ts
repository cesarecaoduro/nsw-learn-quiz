import { Question } from "@/types/quiz";

export interface QuestionTemplate {
  id: string;
  subject: string;
  yearLevel: string;
  category: string;
  template: Partial<Question>;
  description: string;
}

export const questionTemplates: QuestionTemplate[] = [
  // English Templates
  {
    id: "english-vocabulary-k",
    subject: "English",
    yearLevel: "K",
    category: "Vocabulary",
    description: "Simple word recognition and meaning",
    template: {
      subject: "English",
      question: "What does [WORD] mean?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      explanation: "Explain the meaning of the word in simple terms."
    }
  },
  {
    id: "english-grammar-1-2",
    subject: "English",
    yearLevel: "1-2",
    category: "Grammar",
    description: "Basic sentence structure and parts of speech",
    template: {
      subject: "English",
      question: "Which word is a [PART OF SPEECH] in this sentence?",
      options: ["Word 1", "Word 2", "Word 3", "Word 4"],
      explanation: "Explain what a [PART OF SPEECH] is and why this word fits."
    }
  },
  {
    id: "english-comprehension-3-4",
    subject: "English",
    yearLevel: "3-4",
    category: "Reading Comprehension",
    description: "Understanding text meaning and context",
    template: {
      subject: "English",
      question: "Based on the passage, what can we conclude about [TOPIC]?",
      options: ["Conclusion A", "Conclusion B", "Conclusion C", "Conclusion D"],
      explanation: "Reference specific parts of the text to support the answer."
    }
  },
  {
    id: "english-analysis-5-6",
    subject: "English",
    yearLevel: "5-6",
    category: "Literary Analysis",
    description: "Theme, character analysis, and literary devices",
    template: {
      subject: "English",
      question: "What literary device is used in the phrase '[PHRASE]'?",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      explanation: "Define the literary device and explain how it's used in the example."
    }
  },

  // Mathematics Templates
  {
    id: "math-counting-k",
    subject: "Mathematics",
    yearLevel: "K",
    category: "Number Recognition",
    description: "Basic counting and number identification",
    template: {
      subject: "Mathematics",
      question: "How many [OBJECTS] are there?",
      options: ["1", "2", "3", "4"],
      explanation: "Count each object one by one to find the total."
    }
  },
  {
    id: "math-operations-1-2",
    subject: "Mathematics",
    yearLevel: "1-2",
    category: "Basic Operations",
    description: "Simple addition and subtraction",
    template: {
      subject: "Mathematics",
      question: "What is [NUMBER] + [NUMBER]?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      explanation: "Show the addition process step by step."
    }
  },
  {
    id: "math-problem-solving-3-4",
    subject: "Mathematics",
    yearLevel: "3-4",
    category: "Problem Solving",
    description: "Word problems with multiple steps",
    template: {
      subject: "Mathematics",
      question: "Sarah has [NUMBER] [ITEMS]. If she [ACTION], how many does she have now?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      explanation: "Break down the problem into steps and show the calculation."
    }
  },
  {
    id: "math-fractions-5-6",
    subject: "Mathematics",
    yearLevel: "5-6",
    category: "Fractions & Decimals",
    description: "Understanding fractions, decimals, and percentages",
    template: {
      subject: "Mathematics",
      question: "What is [FRACTION] as a decimal?",
      options: ["0.25", "0.5", "0.75", "1.0"],
      explanation: "Show how to convert the fraction to a decimal by dividing."
    }
  },

  // Science Templates
  {
    id: "science-observation-k-1",
    subject: "Science",
    yearLevel: "K-1",
    category: "Observation",
    description: "Using senses to observe the world",
    template: {
      subject: "Science",
      question: "Which sense would you use to [ACTION]?",
      options: ["Sight", "Hearing", "Touch", "Smell"],
      explanation: "Explain which sense is most appropriate for the given action."
    }
  },
  {
    id: "science-living-things-2-3",
    subject: "Science",
    yearLevel: "2-3",
    category: "Living Things",
    description: "Characteristics of living and non-living things",
    template: {
      subject: "Science",
      question: "Which of these is a characteristic of living things?",
      options: ["They grow", "They are made of metal", "They never change", "They are always big"],
      explanation: "Living things share certain characteristics that distinguish them from non-living things."
    }
  },
  {
    id: "science-forces-4-5",
    subject: "Science",
    yearLevel: "4-5",
    category: "Forces & Motion",
    description: "Understanding push, pull, and motion",
    template: {
      subject: "Science",
      question: "What type of force is needed to [ACTION]?",
      options: ["Push", "Pull", "Twist", "Squeeze"],
      explanation: "Explain the type of force and how it creates the described motion."
    }
  },
  {
    id: "science-earth-6",
    subject: "Science",
    yearLevel: "6",
    category: "Earth & Space",
    description: "Weather, seasons, and Earth's place in space",
    template: {
      subject: "Science",
      question: "What causes [WEATHER PHENOMENON]?",
      options: ["Cause A", "Cause B", "Cause C", "Cause D"],
      explanation: "Describe the scientific process that leads to this weather phenomenon."
    }
  },

  // History Templates
  {
    id: "history-past-present-k-1",
    subject: "History",
    yearLevel: "K-1",
    category: "Past & Present",
    description: "Understanding time and change",
    template: {
      subject: "History",
      question: "Which of these shows how life was different in the past?",
      options: ["Old photo", "Modern car", "Current building", "Today's clothes"],
      explanation: "Historical evidence helps us understand how life has changed over time."
    }
  },
  {
    id: "history-community-2-3",
    subject: "History",
    yearLevel: "2-3",
    category: "Community History",
    description: "Local history and community changes",
    template: {
      subject: "History",
      question: "How has [ASPECT OF COMMUNITY] changed over time?",
      options: ["Change A", "Change B", "Change C", "Change D"],
      explanation: "Compare how things were in the past with how they are today."
    }
  },
  {
    id: "history-australian-4-6",
    subject: "History",
    yearLevel: "4-6",
    category: "Australian History",
    description: "Key events and people in Australian history",
    template: {
      subject: "History",
      question: "Who were the [HISTORICAL GROUP] and what did they do?",
      options: ["Description A", "Description B", "Description C", "Description D"],
      explanation: "Provide historical context and explain the significance of this group."
    }
  },

  // Geography Templates
  {
    id: "geography-location-k-2",
    subject: "Geography",
    yearLevel: "K-2",
    category: "Places & Location",
    description: "Understanding location and direction",
    template: {
      subject: "Geography",
      question: "Where is the [OBJECT/PLACE] in relation to [REFERENCE POINT]?",
      options: ["North", "South", "East", "West"],
      explanation: "Use directional language to describe the location."
    }
  },
  {
    id: "geography-features-3-4",
    subject: "Geography",
    yearLevel: "3-4",
    category: "Natural Features",
    description: "Landforms and geographical features",
    template: {
      subject: "Geography",
      question: "Which of these is an example of a [LANDFORM]?",
      options: ["Example A", "Example B", "Example C", "Example D"],
      explanation: "Describe the characteristics that make this a [LANDFORM]."
    }
  },
  {
    id: "geography-human-5-6",
    subject: "Geography",
    yearLevel: "5-6",
    category: "Human Geography",
    description: "How people interact with places",
    template: {
      subject: "Geography",
      question: "How do people adapt to living in [ENVIRONMENT]?",
      options: ["Adaptation A", "Adaptation B", "Adaptation C", "Adaptation D"],
      explanation: "Explain how environmental factors influence human behavior and settlement."
    }
  }
];

export const getTemplatesBySubject = (subject: string): QuestionTemplate[] => {
  return questionTemplates.filter(template => template.subject === subject);
};

export const getTemplatesByYearLevel = (yearLevel: string): QuestionTemplate[] => {
  return questionTemplates.filter(template => 
    template.yearLevel === yearLevel || 
    template.yearLevel.includes(yearLevel) ||
    (template.yearLevel.includes('-') && 
     template.yearLevel.split('-').some(level => level === yearLevel))
  );
};

export const getTemplatesBySubjectAndYear = (subject: string, yearLevel: string): QuestionTemplate[] => {
  const subjectTemplates = getTemplatesBySubject(subject);
  return subjectTemplates.filter(template => 
    template.yearLevel === yearLevel || 
    template.yearLevel.includes(yearLevel) ||
    (template.yearLevel.includes('-') && 
     template.yearLevel.split('-').some(level => level === yearLevel))
  );
};