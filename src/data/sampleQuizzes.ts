import { Quiz } from "@/types/quiz";

export const sampleQuizzes: Quiz[] = [
  {
    id: "year4-nsw",
    name: "Year 4 NSW Curriculum Quiz",
    year: "4",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is a noun?",
        options: [
          "A describing word",
          "A naming word for a person, place or thing",
          "An action word",
          "A connecting word"
        ],
        correct: 1,
        explanation: "A noun is a naming word that identifies a person, place, or thing."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 6 × 7?",
        options: ["35", "42", "48", "54"],
        correct: 1,
        explanation: "6 × 7 = 42. This is part of the times tables."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do plants need to grow?",
        options: ["Only water", "Only sunlight", "Water, sunlight, air and nutrients", "Only soil"],
        correct: 2,
        explanation: "Plants need water, sunlight, air (carbon dioxide), and nutrients from soil to grow properly."
      }
    ]
  },
  {
    id: "year5-nsw",
    name: "Year 5 NSW Curriculum Quiz",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is an adjective?",
        options: [
          "A word that describes a noun",
          "A word that shows action",
          "A naming word",
          "A connecting word"
        ],
        correct: 0,
        explanation: "An adjective is a word that describes or gives more information about a noun."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "144 ÷ 12 = 12. You can think of this as 'how many 12s go into 144?'"
      },
      {
        id: 3,
        subject: "Science",
        question: "What are the three states of matter?",
        options: ["Hot, warm, cold", "Solid, liquid, gas", "Big, medium, small", "Hard, soft, smooth"],
        correct: 1,
        explanation: "The three states of matter are solid, liquid, and gas."
      }
    ]
  },
  {
    id: "year6-nsw",
    name: "Year 6 NSW Curriculum Quiz",
    year: "6",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is a simile?",
        options: [
          "A comparison using 'like' or 'as'",
          "A word that sounds like what it describes",
          "Giving human qualities to non-human things",
          "An exaggerated statement"
        ],
        correct: 0,
        explanation: "Similes compare two things using the words 'like' or 'as' (e.g., 'as brave as a lion')"
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        correct: 1,
        explanation: "25% = 1/4, so 25% of 80 = 80 ÷ 4 = 20"
      },
      {
        id: 3,
        subject: "Science",
        question: "What type of animal is a dolphin?",
        options: ["Fish", "Mammal", "Reptile", "Amphibian"],
        correct: 1,
        explanation: "Dolphins are mammals because they are warm-blooded, breathe air, and feed milk to their young"
      },
      {
        id: 4,
        subject: "History",
        question: "Which explorer is credited with mapping the east coast of Australia?",
        options: ["Willem Janszoon", "James Cook", "Abel Tasman", "Matthew Flinders"],
        correct: 1,
        explanation: "Captain James Cook mapped Australia's east coast in 1770"
      },
      {
        id: 5,
        subject: "Geography",
        question: "What is the capital city of Queensland?",
        options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
        correct: 2,
        explanation: "Brisbane is the capital city of Queensland, Australia"
      },
      {
        id: 6,
        subject: "English",
        question: "What is the plural form of 'child'?",
        options: ["childs", "childes", "children", "child's"],
        correct: 2,
        explanation: "'Child' has an irregular plural form - 'children'"
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "If a rectangle has a length of 8cm and width of 5cm, what is its area?",
        options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
        correct: 2,
        explanation: "Area of rectangle = length × width = 8 × 5 = 40 cm²"
      },
      {
        id: 8,
        subject: "Science",
        question: "Which part of a plant absorbs water from the soil?",
        options: ["Leaves", "Stem", "Roots", "Flowers"],
        correct: 2,
        explanation: "Roots absorb water and nutrients from the soil to feed the plant"
      },
      {
        id: 9,
        subject: "History",
        question: "When did the First Fleet arrive in Australia?",
        options: ["1770", "1788", "1801", "1815"],
        correct: 1,
        explanation: "The First Fleet arrived at Sydney Cove on 26 January 1788"
      },
      {
        id: 10,
        subject: "Geography",
        question: "Which is Australia's longest river?",
        options: ["Murray River", "Darling River", "Murrumbidgee River", "Lachlan River"],
        correct: 1,
        explanation: "The Darling River is Australia's longest river at 1,472 km"
      }
    ]
  }
];