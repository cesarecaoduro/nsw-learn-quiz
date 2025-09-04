import { Quiz } from "@/types/quiz";

export const year1Quizzes: Quiz[] = [
  {
    id: "year1-reading-writing",
    name: "Reading and Writing",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is a sentence?",
        options: ["A single letter", "A group of words that makes sense", "Just a word", "A number"],
        correct: 1,
        explanation: "A sentence is a group of words that makes complete sense and tells us something."
      },
      {
        id: 2,
        subject: "English",
        question: "Which word rhymes with 'cat'?",
        options: ["dog", "mat", "run", "big"],
        correct: 1,
        explanation: "'Mat' rhymes with 'cat' because they both end with the same 'at' sound."
      },
      {
        id: 3,
        subject: "English",
        question: "What do we put at the beginning of a sentence?",
        options: ["small letter", "capital letter", "number", "picture"],
        correct: 1,
        explanation: "We always start a sentence with a capital letter."
      },
      {
        id: 4,
        subject: "English",
        question: "Which word has 4 letters?",
        options: ["go", "book", "I", "running"],
        correct: 1,
        explanation: "The word 'book' has 4 letters: B-O-O-K."
      },
      {
        id: 5,
        subject: "English",
        question: "What sound does 'ch' make in 'chair'?",
        options: ["k sound", "s sound", "ch sound", "sh sound"],
        correct: 2,
        explanation: "The letters 'ch' together make the 'ch' sound like in 'chair' and 'cheese'."
      },
      {
        id: 6,
        subject: "English",
        question: "Which is the correct way to write this sentence?",
        options: ["the dog is big", "The dog is big.", "THE DOG IS BIG", "the dog is big,"],
        correct: 1,
        explanation: "Sentences start with a capital letter and end with a full stop: 'The dog is big.'"
      },
      {
        id: 7,
        subject: "English",
        question: "What are the vowels?",
        options: ["A, E, I, O, U", "B, C, D, F, G", "All the letters", "Only A and E"],
        correct: 0,
        explanation: "The vowels are A, E, I, O, U. These letters can make different sounds in words."
      },
      {
        id: 8,
        subject: "English",
        question: "Which word means the opposite of 'hot'?",
        options: ["warm", "cold", "big", "fast"],
        correct: 1,
        explanation: "'Cold' is the opposite of 'hot'. They are opposite temperatures."
      },
      {
        id: 9,
        subject: "English",
        question: "What do we call a word that describes an animal, person, or thing?",
        options: ["doing word", "naming word", "describing word", "connecting word"],
        correct: 1,
        explanation: "A naming word (noun) tells us the name of a person, animal, place, or thing."
      },
      {
        id: 10,
        subject: "English",
        question: "Which sentence asks a question?",
        options: ["The cat is sleeping.", "Where is the cat?", "The cat ran away.", "I like cats."],
        correct: 1,
        explanation: "'Where is the cat?' is a question because it asks something and ends with a question mark."
      }
    ]
  },
  {
    id: "year1-numbers-counting",
    name: "Numbers and Counting",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 5 + 3?",
        options: ["7", "8", "9", "6"],
        correct: 1,
        explanation: "5 + 3 = 8. You can count: 5, 6, 7, 8 or use your fingers to add."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "Which number is smaller: 12 or 7?",
        options: ["12", "7", "they're the same", "can't tell"],
        correct: 1,
        explanation: "7 is smaller than 12. When we count up, 7 comes before 12."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What is 10 - 4?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "10 - 4 = 6. You can count back from 10: 9, 8, 7, 6."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "How do you write the number 'fifteen' using digits?",
        options: ["51", "15", "5", "50"],
        correct: 1,
        explanation: "The number word 'fifteen' is written as 15 using digits."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What number comes between 18 and 20?",
        options: ["17", "19", "21", "16"],
        correct: 1,
        explanation: "19 comes between 18 and 20 when counting: 18, 19, 20."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "Which is an even number?",
        options: ["3", "5", "8", "7"],
        correct: 2,
        explanation: "8 is an even number. Even numbers end in 0, 2, 4, 6, or 8."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "What is 2 + 2 + 2?",
        options: ["4", "6", "8", "2"],
        correct: 1,
        explanation: "2 + 2 + 2 = 6. You can add step by step: 2 + 2 = 4, then 4 + 2 = 6."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "If you count by 10s, what comes after 30?",
        options: ["31", "35", "40", "50"],
        correct: 2,
        explanation: "When counting by 10s: 10, 20, 30, 40. So 40 comes after 30."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is half of 6?",
        options: ["2", "3", "4", "12"],
        correct: 1,
        explanation: "Half of 6 is 3. Half means dividing into 2 equal parts: 6 ÷ 2 = 3."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "Which number has 1 ten and 4 ones?",
        options: ["41", "14", "104", "4"],
        correct: 1,
        explanation: "1 ten and 4 ones makes 14. The 1 is in the tens place and 4 is in the ones place."
      }
    ]
  },
  {
    id: "year1-shapes-measurement",
    name: "Shapes and Measurement",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "A pentagon has 5 sides. You can count them by going around the shape."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "Which is longer: a pencil or a ruler?",
        options: ["pencil", "ruler", "they're the same", "can't tell without measuring"],
        correct: 1,
        explanation: "Usually a ruler is longer than a pencil, but we should measure to be sure."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What shape has 6 sides?",
        options: ["pentagon", "hexagon", "octagon", "square"],
        correct: 1,
        explanation: "A hexagon has 6 sides. Think of a bee's honeycomb - those shapes are hexagons."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "How many corners does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A triangle has 3 corners (also called vertices) where the sides meet."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Which unit would you use to measure how long your desk is?",
        options: ["centimeters", "kilograms", "liters", "minutes"],
        correct: 0,
        explanation: "We use centimeters to measure length or distance, like how long a desk is."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What time does the clock show when the big hand points to 12 and the little hand points to 8?",
        options: ["12 o'clock", "8 o'clock", "4 o'clock", "6 o'clock"],
        correct: 1,
        explanation: "When the little hand (hour hand) points to 8 and the big hand points to 12, it's 8 o'clock."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "A cube has 6 faces. Think of a dice - you can count the 6 flat sides."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Which container holds more water: a cup or a bucket?",
        options: ["cup", "bucket", "they hold the same", "depends on the water"],
        correct: 1,
        explanation: "A bucket is much bigger than a cup, so it can hold much more water."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What comes next in this pattern: circle, square, circle, square, ___?",
        options: ["triangle", "circle", "square", "rectangle"],
        correct: 1,
        explanation: "The pattern alternates: circle, square, circle, square, so circle comes next."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "How many minutes are in 1 hour?",
        options: ["30", "60", "100", "24"],
        correct: 1,
        explanation: "There are 60 minutes in 1 hour. The minute hand goes all the way around the clock once in an hour."
      }
    ]
  },
  {
    id: "year1-living-things",
    name: "Living Things",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What do all living things need to survive?",
        options: ["only food", "only water", "food, water, air, and shelter", "only shelter"],
        correct: 2,
        explanation: "All living things need food for energy, water to drink, air to breathe, and shelter for protection."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which of these is NOT a living thing?",
        options: ["tree", "bird", "rock", "fish"],
        correct: 2,
        explanation: "A rock is not living because it doesn't grow, breathe, eat, or reproduce like living things do."
      },
      {
        id: 3,
        subject: "Science",
        question: "How do plants make their food?",
        options: ["they eat other plants", "they use sunlight, water, and air", "they buy it from stores", "they don't need food"],
        correct: 1,
        explanation: "Plants make their own food using sunlight, water from their roots, and carbon dioxide from the air."
      },
      {
        id: 4,
        subject: "Science",
        question: "What do baby animals need from their parents?",
        options: ["nothing", "food and protection", "only food", "only protection"],
        correct: 1,
        explanation: "Baby animals need food and protection from their parents until they can take care of themselves."
      },
      {
        id: 5,
        subject: "Science",
        question: "Which animal group has feathers?",
        options: ["mammals", "birds", "fish", "reptiles"],
        correct: 1,
        explanation: "Birds are the only animals that have feathers. Feathers help them fly and keep warm."
      },
      {
        id: 6,
        subject: "Science",
        question: "Where do most plants grow from?",
        options: ["leaves", "flowers", "seeds", "rocks"],
        correct: 2,
        explanation: "Most plants grow from seeds. Seeds contain everything a new plant needs to start growing."
      },
      {
        id: 7,
        subject: "Science",
        question: "What do fish use to breathe underwater?",
        options: ["lungs", "gills", "nose", "mouth"],
        correct: 1,
        explanation: "Fish use gills to breathe underwater. Gills take oxygen from the water."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which animals are mammals?",
        options: ["birds and fish", "cats and dogs", "insects and spiders", "frogs and lizards"],
        correct: 1,
        explanation: "Cats and dogs are mammals. Mammals have fur or hair and feed milk to their babies."
      },
      {
        id: 9,
        subject: "Science",
        question: "What part of a plant takes in water?",
        options: ["leaves", "flowers", "roots", "stem"],
        correct: 2,
        explanation: "Roots take in water and nutrients from the soil to feed the plant."
      },
      {
        id: 10,
        subject: "Science",
        question: "How do animals help plants?",
        options: ["they don't help plants", "they spread seeds and pollinate flowers", "they eat all the plants", "they give plants water"],
        correct: 1,
        explanation: "Animals help plants by spreading their seeds to new places and by pollinating flowers."
      }
    ]
  },
  {
    id: "year1-materials-objects",
    name: "Materials and Objects",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What happens to an ice cube when you leave it in the sun?",
        options: ["it gets bigger", "it melts", "it gets harder", "nothing happens"],
        correct: 1,
        explanation: "When ice is heated by the sun, it melts and becomes liquid water."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which material is best for making a raincoat?",
        options: ["paper", "waterproof plastic", "cotton fabric", "metal"],
        correct: 1,
        explanation: "Waterproof plastic is best for raincoats because water can't go through it, keeping you dry."
      },
      {
        id: 3,
        subject: "Science",
        question: "What makes objects fall to the ground?",
        options: ["wind", "gravity", "magnetism", "light"],
        correct: 1,
        explanation: "Gravity is the force that pulls objects toward the ground."
      },
      {
        id: 4,
        subject: "Science",
        question: "Which object will float in water?",
        options: ["metal coin", "wooden block", "glass marble", "stone"],
        correct: 1,
        explanation: "Wood usually floats because it's lighter than water. Heavy objects like coins and stones sink."
      },
      {
        id: 5,
        subject: "Science",
        question: "What do we call materials that let light pass through them?",
        options: ["hard", "soft", "transparent", "heavy"],
        correct: 2,
        explanation: "Transparent materials, like clear glass, let light pass through so you can see through them."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which material is magnetic?",
        options: ["wood", "plastic", "iron", "paper"],
        correct: 2,
        explanation: "Iron is magnetic, which means magnets will stick to it."
      },
      {
        id: 7,
        subject: "Science",
        question: "What happens when you mix oil and water?",
        options: ["they mix together completely", "oil floats on top of water", "water floats on top of oil", "they turn into soap"],
        correct: 1,
        explanation: "Oil and water don't mix. Oil is lighter, so it floats on top of the water."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which material is flexible (can bend)?",
        options: ["glass", "rubber", "stone", "metal"],
        correct: 1,
        explanation: "Rubber is flexible, which means it can bend and stretch without breaking."
      },
      {
        id: 9,
        subject: "Science",
        question: "What do we use to measure how hot or cold something is?",
        options: ["ruler", "scale", "thermometer", "clock"],
        correct: 2,
        explanation: "A thermometer measures temperature - how hot or cold something is."
      },
      {
        id: 10,
        subject: "Science",
        question: "Which of these materials can be recycled?",
        options: ["plastic bottles", "broken glass", "old paper", "all of these"],
        correct: 3,
        explanation: "Plastic bottles, glass, and paper can all be recycled to make new things instead of throwing them away."
      }
    ]
  },
  {
    id: "year1-my-place",
    name: "My Place",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Geography",
        question: "What is an address?",
        options: ["your age", "where you live", "your name", "what you like"],
        correct: 1,
        explanation: "An address tells people exactly where you live - the street name and number."
      },
      {
        id: 2,
        subject: "Geography",
        question: "What do we call a drawing that shows where things are?",
        options: ["picture", "map", "book", "story"],
        correct: 1,
        explanation: "A map is a drawing that shows where different places are and how to get from one place to another."
      },
      {
        id: 3,
        subject: "Geography",
        question: "Which direction does the sun rise?",
        options: ["north", "south", "east", "west"],
        correct: 2,
        explanation: "The sun rises in the east every morning and sets in the west every evening."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What do you call the place where you learn at school?",
        options: ["bedroom", "kitchen", "classroom", "garden"],
        correct: 2,
        explanation: "A classroom is the room at school where you learn with your teacher and classmates."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Which of these is a natural feature?",
        options: ["house", "mountain", "car", "school"],
        correct: 1,
        explanation: "A mountain is a natural feature made by nature, not built by people."
      },
      {
        id: 6,
        subject: "Geography",
        question: "What do we call the area around your home?",
        options: ["country", "neighborhood", "city", "world"],
        correct: 1,
        explanation: "Your neighborhood is the area around your home where you live, including nearby houses and streets."
      },
      {
        id: 7,
        subject: "Geography",
        question: "Which weather would you expect in summer?",
        options: ["snow", "hot and sunny", "very cold", "ice everywhere"],
        correct: 1,
        explanation: "Summer is usually hot and sunny, with warm weather for playing outside."
      },
      {
        id: 8,
        subject: "Geography",
        question: "What do you use to find your way if you're lost?",
        options: ["clock", "map", "book", "toy"],
        correct: 1,
        explanation: "A map shows you where you are and helps you find your way to where you want to go."
      },
      {
        id: 9,
        subject: "Geography",
        question: "What makes day and night?",
        options: ["clouds", "rain", "Earth spinning around", "wind"],
        correct: 2,
        explanation: "Day and night happen because Earth spins around. When your side faces the sun, it's day."
      },
      {
        id: 10,
        subject: "Geography",
        question: "Which place would you go to borrow books?",
        options: ["library", "hospital", "fire station", "post office"],
        correct: 0,
        explanation: "You go to a library to borrow books to read at home."
      }
    ]
  },
  {
    id: "year1-past-present",
    name: "Past and Present",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "What do we call things that happened before you were born?",
        options: ["future", "past", "present", "now"],
        correct: 1,
        explanation: "The past is everything that happened before now, including before you were born."
      },
      {
        id: 2,
        subject: "History",
        question: "How do we learn about the past?",
        options: ["only by guessing", "from old photos, objects, and stories", "we can't learn about it", "only from TV"],
        correct: 1,
        explanation: "We learn about the past from old photographs, objects people used, and stories passed down."
      },
      {
        id: 3,
        subject: "History",
        question: "What is something that has changed from your grandparents' time?",
        options: ["the sun", "people need food", "how we talk to people far away", "trees grow"],
        correct: 2,
        explanation: "How we communicate has changed a lot - your grandparents might not have had mobile phones or computers."
      },
      {
        id: 4,
        subject: "History",
        question: "What do old photographs tell us?",
        options: ["nothing useful", "what people and places looked like in the past", "only about animals", "about the future"],
        correct: 1,
        explanation: "Old photographs show us what people wore, how they lived, and what places looked like long ago."
      },
      {
        id: 5,
        subject: "History",
        question: "Who are the people in your family who lived before your parents?",
        options: ["your brothers and sisters", "your grandparents", "your friends", "your teachers"],
        correct: 1,
        explanation: "Your grandparents are your parents' parents - they lived before your parents were born."
      },
      {
        id: 6,
        subject: "History",
        question: "What is a tradition?",
        options: ["something new", "something people do the same way for a long time", "a type of food", "a game"],
        correct: 1,
        explanation: "A tradition is something families or communities do the same way year after year, like celebrating birthdays."
      },
      {
        id: 7,
        subject: "History",
        question: "How did people travel long distances before cars?",
        options: ["they didn't travel", "by walking or using horses", "by airplane", "by bicycle only"],
        correct: 1,
        explanation: "Before cars, people walked long distances or rode horses to get from place to place."
      },
      {
        id: 8,
        subject: "History",
        question: "What do we call the story of your life from when you were born until now?",
        options: ["your future", "your personal history", "your dreams", "your wishes"],
        correct: 1,
        explanation: "Your personal history is the story of your life - all the things that have happened to you since you were born."
      },
      {
        id: 9,
        subject: "History",
        question: "What might your parents tell you about when they were children?",
        options: ["what will happen tomorrow", "the games they played and how they lived", "about other planets", "about dinosaurs they saw"],
        correct: 1,
        explanation: "Your parents can tell you about their childhood - what games they played, where they lived, and what school was like."
      },
      {
        id: 10,
        subject: "History",
        question: "Why is it important to remember the past?",
        options: ["it's not important", "to learn from what happened and understand our families", "only for tests", "to become sad"],
        correct: 1,
        explanation: "Remembering the past helps us understand our families, learn from what happened, and appreciate how we live today."
      }
    ]
  },
  {
    id: "year1-mixed-review-1",
    name: "Mixed Review 1",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 6 + 2?",
        options: ["7", "8", "9", "4"],
        correct: 1,
        explanation: "6 + 2 = 8. You can count up from 6: 7, 8."
      },
      {
        id: 2,
        subject: "English",
        question: "Which word means more than one cat?",
        options: ["cat", "cats", "cat's", "catted"],
        correct: 1,
        explanation: "'Cats' means more than one cat. We add 's' to make most words plural."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do you use to see in the dark?",
        options: ["your ears", "a light or torch", "your nose", "nothing"],
        correct: 1,
        explanation: "You need a light or torch to see in the dark because your eyes need light to see."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "Which number is odd?",
        options: ["2", "4", "5", "6"],
        correct: 2,
        explanation: "5 is an odd number. Odd numbers are 1, 3, 5, 7, 9..."
      },
      {
        id: 5,
        subject: "English",
        question: "What do you put at the end of a telling sentence?",
        options: ["?", "!", ".", ","],
        correct: 2,
        explanation: "A telling sentence ends with a full stop (.). Questions end with ? and exciting sentences end with !"
      },
      {
        id: 6,
        subject: "Science",
        question: "Which season comes after summer?",
        options: ["winter", "spring", "autumn", "summer again"],
        correct: 2,
        explanation: "Autumn comes after summer. The seasons go: summer, autumn, winter, spring."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "How many edges does a cube have?",
        options: ["6", "8", "12", "4"],
        correct: 2,
        explanation: "A cube has 12 edges. An edge is where two faces of the cube meet."
      },
      {
        id: 8,
        subject: "Geography",
        question: "Which direction is opposite to north?",
        options: ["east", "west", "south", "up"],
        correct: 2,
        explanation: "South is opposite to north. The four main directions are north, south, east, and west."
      },
      {
        id: 9,
        subject: "Science",
        question: "What do plants need from the soil?",
        options: ["water and nutrients", "only water", "only air", "nothing"],
        correct: 0,
        explanation: "Plants get water and nutrients (food) from the soil through their roots."
      },
      {
        id: 10,
        subject: "English",
        question: "Which word describes how a rabbit moves?",
        options: ["flies", "swims", "hops", "crawls"],
        correct: 2,
        explanation: "Rabbits hop by jumping with their strong back legs."
      }
    ]
  },
  {
    id: "year1-mixed-review-2",
    name: "Mixed Review 2",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "How many syllables are in the word 'banana'?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Ba-na-na has 3 syllables. Clap your hands for each part when you say it."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 9 - 5?",
        options: ["3", "4", "5", "14"],
        correct: 1,
        explanation: "9 - 5 = 4. You can count back from 9: 8, 7, 6, 5, 4."
      },
      {
        id: 3,
        subject: "Science",
        question: "What makes your heart beat faster?",
        options: ["sleeping", "running and playing", "sitting still", "reading"],
        correct: 1,
        explanation: "When you run and play, your heart beats faster to pump blood around your body."
      },
      {
        id: 4,
        subject: "History",
        question: "What can old toys tell us about the past?",
        options: ["nothing", "what children played with long ago", "about the weather", "about food"],
        correct: 1,
        explanation: "Old toys show us what games children played and what materials were used to make toys in the past."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "If today is Wednesday, what day was yesterday?",
        options: ["Monday", "Tuesday", "Thursday", "Friday"],
        correct: 1,
        explanation: "If today is Wednesday, then yesterday was Tuesday."
      },
      {
        id: 6,
        subject: "English",
        question: "Which word sounds the same as 'two'?",
        options: ["three", "to", "twelve", "twin"],
        correct: 1,
        explanation: "'Two' and 'to' sound exactly the same even though they're spelled differently."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which animal lays eggs?",
        options: ["dog", "chicken", "cow", "cat"],
        correct: 1,
        explanation: "Chickens lay eggs. Birds, fish, and some other animals lay eggs instead of having live babies."
      },
      {
        id: 8,
        subject: "Geography",
        question: "What do you call water that falls from clouds?",
        options: ["snow", "rain", "hail", "all of these"],
        correct: 3,
        explanation: "Rain, snow, and hail are all different types of water that can fall from clouds."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "Which container would hold the most juice?",
        options: ["teaspoon", "cup", "bottle", "swimming pool"],
        correct: 3,
        explanation: "A swimming pool would hold much more juice than any of the other containers."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call the hard parts inside your body that give it shape?",
        options: ["muscles", "bones", "skin", "hair"],
        correct: 1,
        explanation: "Bones are the hard parts inside your body that give you shape and protect your organs."
      }
    ]
  },
  {
    id: "year1-fun-challenge",
    name: "Fun Challenge Quiz",
    year: "1",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "If you have 3 red balloons and 4 blue balloons, how many balloons do you have altogether?",
        options: ["6", "7", "8", "1"],
        correct: 1,
        explanation: "3 red balloons + 4 blue balloons = 7 balloons altogether."
      },
      {
        id: 2,
        subject: "English",
        question: "What type of word is 'quickly' in the sentence 'The rabbit ran quickly'?",
        options: ["naming word", "doing word", "describing word", "word that tells us how"],
        correct: 3,
        explanation: "'Quickly' tells us how the rabbit ran. It describes the action."
      },
      {
        id: 3,
        subject: "Science",
        question: "Why do we need to eat different types of food?",
        options: ["to grow big and strong", "just for fun", "because parents say so", "to make noise"],
        correct: 0,
        explanation: "We eat different foods because our bodies need different nutrients to grow, be healthy, and have energy."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What is the pattern rule for: 2, 4, 6, 8, ___?",
        options: ["add 1 each time", "add 2 each time", "add 3 each time", "subtract 1 each time"],
        correct: 1,
        explanation: "The pattern adds 2 each time: 2, 4, 6, 8, 10. So the next number is 10."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Why do different places have different weather?",
        options: ["because people want it that way", "because of where they are on Earth", "weather is the same everywhere", "nobody knows"],
        correct: 1,
        explanation: "Different places have different weather because of where they are on Earth - some places are closer to the sun or the ocean."
      },
      {
        id: 6,
        subject: "English",
        question: "If someone writes a story about their real life, what do we call it?",
        options: ["fairy tale", "true story", "poem", "recipe"],
        correct: 1,
        explanation: "When someone writes about their real life, it's called a true story because it really happened."
      },
      {
        id: 7,
        subject: "Science",
        question: "What would happen if there were no bees?",
        options: ["nothing would change", "flowers couldn't make seeds as easily", "more honey", "trees would grow faster"],
        correct: 1,
        explanation: "Bees help flowers make seeds by carrying pollen from flower to flower. Without bees, many plants couldn't reproduce."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Emma has 12 stickers. She gives 3 to her friend and uses 4 for her project. How many does she have left?",
        options: ["4", "5", "7", "9"],
        correct: 1,
        explanation: "Emma started with 12, gave away 3, and used 4. So 12 - 3 - 4 = 5 stickers left."
      },
      {
        id: 9,
        subject: "History",
        question: "How do we know what dinosaurs looked like?",
        options: ["from movies", "from fossils (old bones)", "people saw them", "from pictures"],
        correct: 1,
        explanation: "Scientists study dinosaur fossils (old bones that turned to stone) to learn what dinosaurs looked like."
      },
      {
        id: 10,
        subject: "Science",
        question: "Why do things look smaller when they are far away?",
        options: ["they really get smaller", "our eyes see them differently", "they hide", "they move"],
        correct: 1,
        explanation: "Things look smaller when far away because of how our eyes work. They don't actually get smaller."
      }
    ]
  }
];