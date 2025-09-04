import { Quiz } from "@/types/quiz";

export const kindergartenQuizzes: Quiz[] = [
  {
    id: "kindergarten-letters-sounds",
    name: "Letters and Sounds",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What sound does the letter 'A' make?",
        options: ["ah", "eh", "oh", "uh"],
        correct: 0,
        explanation: "The letter 'A' makes the 'ah' sound like in 'apple' and 'ant'."
      },
      {
        id: 2,
        subject: "English",
        question: "Which letter comes after 'B'?",
        options: ["A", "C", "D", "E"],
        correct: 1,
        explanation: "The letter 'C' comes after 'B' in the alphabet."
      },
      {
        id: 3,
        subject: "English",
        question: "What letter does 'cat' start with?",
        options: ["B", "C", "D", "K"],
        correct: 1,
        explanation: "'Cat' starts with the letter 'C' which makes the 'c' sound."
      },
      {
        id: 4,
        subject: "English",
        question: "How many letters are in your first name if your name is 'Sam'?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "The name 'Sam' has 3 letters: S-A-M."
      },
      {
        id: 5,
        subject: "English",
        question: "Which letter makes the 'sss' sound like a snake?",
        options: ["C", "S", "T", "Z"],
        correct: 1,
        explanation: "The letter 'S' makes the 'sss' sound like a snake."
      },
      {
        id: 6,
        subject: "English",
        question: "What letter does 'dog' start with?",
        options: ["B", "C", "D", "G"],
        correct: 2,
        explanation: "'Dog' starts with the letter 'D' which makes the 'd' sound."
      },
      {
        id: 7,
        subject: "English",
        question: "Which of these is a vowel?",
        options: ["B", "E", "M", "T"],
        correct: 1,
        explanation: "'E' is a vowel. The vowels are A, E, I, O, U."
      },
      {
        id: 8,
        subject: "English",
        question: "What sound does 'M' make?",
        options: ["mmm", "nnn", "bbb", "rrr"],
        correct: 0,
        explanation: "The letter 'M' makes the 'mmm' sound like in 'mum' and 'mouse'."
      }
    ]
  },
  {
    id: "kindergarten-counting-numbers",
    name: "Counting and Numbers",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many fingers do you have on one hand?",
        options: ["4", "5", "6", "10"],
        correct: 1,
        explanation: "You have 5 fingers on one hand."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What number comes after 3?",
        options: ["2", "4", "5", "6"],
        correct: 1,
        explanation: "The number 4 comes after 3 when counting: 1, 2, 3, 4..."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "Count the dots: • • •",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "There are 3 dots. Count them: 1, 2, 3."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "Which number is bigger: 2 or 5?",
        options: ["2", "5", "they're the same", "I don't know"],
        correct: 1,
        explanation: "5 is bigger than 2. When counting, 5 comes after 2."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "How many eyes do you have?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "You have 2 eyes - one left eye and one right eye."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What number comes before 5?",
        options: ["3", "4", "6", "7"],
        correct: 1,
        explanation: "The number 4 comes before 5 when counting: 3, 4, 5."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "If you have 1 apple and someone gives you 1 more, how many do you have?",
        options: ["1", "2", "3", "0"],
        correct: 1,
        explanation: "1 apple plus 1 more apple equals 2 apples."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Which group has more? 🍎🍎 or 🍎🍎🍎?",
        options: ["first group", "second group", "they're the same", "can't tell"],
        correct: 1,
        explanation: "The second group has 3 apples, which is more than the first group with 2 apples."
      }
    ]
  },
  {
    id: "kindergarten-shapes-patterns",
    name: "Shapes and Patterns",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A triangle has 3 sides. Count them: 1, 2, 3."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What shape is a ball?",
        options: ["square", "triangle", "circle", "rectangle"],
        correct: 2,
        explanation: "A ball is round like a circle."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "How many corners does a square have?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "A square has 4 corners. You can count them on each corner of the square."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What comes next in this pattern: red, blue, red, blue, ___?",
        options: ["red", "blue", "green", "yellow"],
        correct: 0,
        explanation: "The pattern is red, blue, red, blue, so red comes next."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Which shape has no corners?",
        options: ["square", "triangle", "circle", "rectangle"],
        correct: 2,
        explanation: "A circle is round and has no corners or straight sides."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What shape is a window usually?",
        options: ["circle", "triangle", "rectangle", "star"],
        correct: 2,
        explanation: "Most windows are rectangles - they have 4 sides with opposite sides being the same length."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "Complete the pattern: big, small, big, small, ___?",
        options: ["big", "small", "medium", "tiny"],
        correct: 0,
        explanation: "The pattern alternates: big, small, big, small, so big comes next."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "How many sides does a rectangle have?",
        options: ["2", "3", "4", "6"],
        correct: 2,
        explanation: "A rectangle has 4 sides - 2 long sides and 2 short sides."
      }
    ]
  },
  {
    id: "kindergarten-my-world",
    name: "My World",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What do plants need to grow?",
        options: ["only dirt", "water and sunlight", "only water", "only sunlight"],
        correct: 1,
        explanation: "Plants need both water and sunlight to grow big and strong."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which animal says 'moo'?",
        options: ["pig", "sheep", "cow", "horse"],
        correct: 2,
        explanation: "Cows say 'moo'. This is the sound they make."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do you use to see things?",
        options: ["ears", "eyes", "nose", "mouth"],
        correct: 1,
        explanation: "You use your eyes to see things around you."
      },
      {
        id: 4,
        subject: "Science",
        question: "Which animal can fly?",
        options: ["dog", "fish", "bird", "cat"],
        correct: 2,
        explanation: "Birds can fly with their wings."
      },
      {
        id: 5,
        subject: "Science",
        question: "What happens when it rains?",
        options: ["everything gets dry", "everything gets wet", "it gets very hot", "snow falls"],
        correct: 1,
        explanation: "When it rains, water falls from the clouds and everything gets wet."
      },
      {
        id: 6,
        subject: "Science",
        question: "Where do fish live?",
        options: ["in trees", "in water", "in the sky", "underground"],
        correct: 1,
        explanation: "Fish live in water - in rivers, lakes, and oceans."
      },
      {
        id: 7,
        subject: "Science",
        question: "What makes things warm?",
        options: ["the moon", "the stars", "the sun", "the clouds"],
        correct: 2,
        explanation: "The sun makes things warm with its heat and light."
      },
      {
        id: 8,
        subject: "Science",
        question: "What do bees make?",
        options: ["milk", "honey", "eggs", "cheese"],
        correct: 1,
        explanation: "Bees make honey, which is sweet and good to eat."
      }
    ]
  },
  {
    id: "kindergarten-colors-senses",
    name: "Colors and Our Senses",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What color do you get when you mix red and yellow?",
        options: ["purple", "green", "orange", "blue"],
        correct: 2,
        explanation: "Red and yellow mixed together make orange, like the color of an orange fruit."
      },
      {
        id: 2,
        subject: "Science",
        question: "What do you use to hear sounds?",
        options: ["eyes", "ears", "nose", "fingers"],
        correct: 1,
        explanation: "You use your ears to hear all different sounds."
      },
      {
        id: 3,
        subject: "Science",
        question: "What color is the sun usually painted as?",
        options: ["blue", "yellow", "green", "purple"],
        correct: 1,
        explanation: "The sun is usually painted yellow because it looks bright and yellow in the sky."
      },
      {
        id: 4,
        subject: "Science",
        question: "Which sense do you use to smell flowers?",
        options: ["sight", "hearing", "smell", "taste"],
        correct: 2,
        explanation: "You use your sense of smell through your nose to smell flowers."
      },
      {
        id: 5,
        subject: "Science",
        question: "What color do you get when you mix blue and yellow?",
        options: ["purple", "orange", "green", "red"],
        correct: 2,
        explanation: "Blue and yellow mixed together make green, like the color of grass."
      },
      {
        id: 6,
        subject: "Science",
        question: "How do you know if something is soft or hard?",
        options: ["look at it", "listen to it", "smell it", "touch it"],
        correct: 3,
        explanation: "You touch things with your hands to feel if they are soft or hard."
      },
      {
        id: 7,
        subject: "Science",
        question: "What are the three main colors?",
        options: ["red, yellow, blue", "green, orange, purple", "black, white, gray", "pink, brown, gold"],
        correct: 0,
        explanation: "Red, yellow, and blue are the three primary colors that can't be made by mixing other colors."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which part of your body do you use to taste food?",
        options: ["nose", "ears", "tongue", "eyes"],
        correct: 2,
        explanation: "You use your tongue to taste if food is sweet, sour, salty, or bitter."
      }
    ]
  },
  {
    id: "kindergarten-family-community",
    name: "Family and Community",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "Who are the people in your family?",
        options: ["only parents", "parents, children, and other relatives", "only children", "only grandparents"],
        correct: 1,
        explanation: "Families can include parents, children, grandparents, aunts, uncles, and other people who care for each other."
      },
      {
        id: 2,
        subject: "History",
        question: "What do firefighters do?",
        options: ["teach children", "help sick people", "put out fires and keep people safe", "sell food"],
        correct: 2,
        explanation: "Firefighters put out fires and help keep people safe from danger."
      },
      {
        id: 3,
        subject: "Geography",
        question: "Where do you live?",
        options: ["in a place with an address", "only in houses", "only in apartments", "in cars"],
        correct: 0,
        explanation: "Everyone lives somewhere with an address - it could be a house, apartment, or other type of home."
      },
      {
        id: 4,
        subject: "History",
        question: "What do doctors do?",
        options: ["cook food", "help people feel better", "build houses", "teach reading"],
        correct: 1,
        explanation: "Doctors help people when they are sick or hurt to make them feel better."
      },
      {
        id: 5,
        subject: "Geography",
        question: "What is your address used for?",
        options: ["to know where you live", "to know your age", "to know your name", "to know what you like"],
        correct: 0,
        explanation: "Your address tells people where your home is located."
      },
      {
        id: 6,
        subject: "History",
        question: "What do police officers do?",
        options: ["cook meals", "help keep people safe", "teach school", "fix cars"],
        correct: 1,
        explanation: "Police officers help keep people safe and make sure everyone follows the rules."
      },
      {
        id: 7,
        subject: "History",
        question: "Who helps you learn at school?",
        options: ["doctors", "teachers", "firefighters", "cooks"],
        correct: 1,
        explanation: "Teachers help you learn new things at school."
      },
      {
        id: 8,
        subject: "Geography",
        question: "What do you call the place where many families live close together?",
        options: ["forest", "community", "ocean", "mountain"],
        correct: 1,
        explanation: "A community is a place where many families live close together and share things like schools and shops."
      }
    ]
  },
  {
    id: "kindergarten-time-seasons",
    name: "Time and Seasons",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "When do you eat breakfast?",
        options: ["at night", "in the morning", "in the afternoon", "before bed"],
        correct: 1,
        explanation: "You eat breakfast in the morning when you wake up to start your day."
      },
      {
        id: 2,
        subject: "Science",
        question: "What happens in winter?",
        options: ["it's very hot", "leaves grow on trees", "it's cold and sometimes snowy", "flowers bloom"],
        correct: 2,
        explanation: "Winter is the cold season when it might snow and many trees have no leaves."
      },
      {
        id: 3,
        subject: "Science",
        question: "When is it dark outside?",
        options: ["morning", "afternoon", "night", "lunchtime"],
        correct: 2,
        explanation: "It's dark outside at night when the sun has gone down."
      },
      {
        id: 4,
        subject: "Science",
        question: "What do you do when you're tired?",
        options: ["run around", "sleep", "eat more food", "make noise"],
        correct: 1,
        explanation: "When you're tired, you sleep to rest your body and mind."
      },
      {
        id: 5,
        subject: "Science",
        question: "Which season comes after winter?",
        options: ["summer", "autumn", "spring", "winter again"],
        correct: 2,
        explanation: "Spring comes after winter, when flowers start to bloom and it gets warmer."
      },
      {
        id: 6,
        subject: "Science",
        question: "When do flowers usually bloom?",
        options: ["winter", "spring", "when it's very cold", "at night"],
        correct: 1,
        explanation: "Flowers usually bloom in spring when the weather gets warmer and there's more sunlight."
      },
      {
        id: 7,
        subject: "Science",
        question: "How many days are in a week?",
        options: ["5", "6", "7", "10"],
        correct: 2,
        explanation: "There are 7 days in a week."
      },
      {
        id: 8,
        subject: "Science",
        question: "What do you call the time when you eat lunch?",
        options: ["breakfast time", "dinner time", "lunchtime", "snack time"],
        correct: 2,
        explanation: "The time when you eat lunch is called lunchtime, usually in the middle of the day."
      }
    ]
  },
  {
    id: "kindergarten-feelings-friends",
    name: "Feelings and Friendship",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "How do you feel when someone is kind to you?",
        options: ["sad", "angry", "happy", "scared"],
        correct: 2,
        explanation: "When someone is kind to you, it usually makes you feel happy and good inside."
      },
      {
        id: 2,
        subject: "English",
        question: "What should you say when someone gives you something?",
        options: ["nothing", "thank you", "go away", "give me more"],
        correct: 1,
        explanation: "When someone gives you something, you should say 'thank you' to show you're grateful."
      },
      {
        id: 3,
        subject: "English",
        question: "What makes a good friend?",
        options: ["someone who is mean", "someone who is kind and shares", "someone who takes your toys", "someone who makes you sad"],
        correct: 1,
        explanation: "A good friend is someone who is kind, shares, and cares about your feelings."
      },
      {
        id: 4,
        subject: "English",
        question: "What should you do if you hurt someone's feelings?",
        options: ["run away", "say sorry", "laugh at them", "do nothing"],
        correct: 1,
        explanation: "If you hurt someone's feelings, you should say 'sorry' and try to make them feel better."
      },
      {
        id: 5,
        subject: "English",
        question: "How can you show someone you care about them?",
        options: ["ignore them", "be kind and helpful", "take their things", "be mean to them"],
        correct: 1,
        explanation: "You can show someone you care by being kind, helpful, and thinking about their feelings."
      },
      {
        id: 6,
        subject: "English",
        question: "What should you do if you feel sad?",
        options: ["keep it secret always", "talk to someone who cares about you", "be mean to others", "hide forever"],
        correct: 1,
        explanation: "If you feel sad, it's good to talk to someone who cares about you, like a parent or teacher."
      },
      {
        id: 7,
        subject: "English",
        question: "How do you make new friends?",
        options: ["by being mean", "by being kind and friendly", "by taking their toys", "by ignoring them"],
        correct: 1,
        explanation: "You make new friends by being kind, friendly, and showing interest in playing with them."
      },
      {
        id: 8,
        subject: "English",
        question: "What should you do when you feel angry?",
        options: ["hit someone", "take deep breaths and talk about it", "break things", "yell at everyone"],
        correct: 1,
        explanation: "When you feel angry, you should take deep breaths and talk to someone about how you feel."
      }
    ]
  },
  {
    id: "kindergarten-mixed-review-1",
    name: "Mixed Review 1",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many wheels does a bike have?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "A bicycle has 2 wheels - one in the front and one in the back."
      },
      {
        id: 2,
        subject: "English",
        question: "What letter does 'ball' start with?",
        options: ["A", "B", "C", "D"],
        correct: 1,
        explanation: "'Ball' starts with the letter 'B' which makes the 'b' sound."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do you need to brush your teeth?",
        options: ["soap", "toothbrush and toothpaste", "water only", "a towel"],
        correct: 1,
        explanation: "You need a toothbrush and toothpaste to clean your teeth properly."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "Which is bigger: 1 or 3?",
        options: ["1", "3", "they're the same", "can't tell"],
        correct: 1,
        explanation: "3 is bigger than 1. When you count 1, 2, 3 - the numbers get bigger."
      },
      {
        id: 5,
        subject: "Science",
        question: "What color is grass usually?",
        options: ["red", "blue", "green", "purple"],
        correct: 2,
        explanation: "Grass is usually green in color."
      },
      {
        id: 6,
        subject: "English",
        question: "What do you say when you meet someone new?",
        options: ["goodbye", "hello", "go away", "nothing"],
        correct: 1,
        explanation: "When you meet someone new, you say 'hello' to greet them nicely."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "What shape is the sun usually drawn as?",
        options: ["square", "triangle", "circle", "rectangle"],
        correct: 2,
        explanation: "The sun is usually drawn as a circle with lines coming out of it."
      },
      {
        id: 8,
        subject: "Science",
        question: "What do cats say?",
        options: ["woof", "moo", "meow", "oink"],
        correct: 2,
        explanation: "Cats say 'meow'. This is the sound cats make."
      }
    ]
  },
  {
    id: "kindergarten-mixed-review-2",
    name: "Mixed Review 2",
    year: "K",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "How many letters are in the word 'dog'?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "The word 'dog' has 3 letters: D-O-G."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "If you have 2 cookies and eat 1, how many are left?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "If you start with 2 cookies and eat 1, you have 1 cookie left."
      },
      {
        id: 3,
        subject: "Science",
        question: "Where do birds build their homes?",
        options: ["underground", "in water", "in trees", "in cars"],
        correct: 2,
        explanation: "Birds usually build their nests in trees where they are safe and high up."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What number comes between 4 and 6?",
        options: ["3", "5", "7", "8"],
        correct: 1,
        explanation: "The number 5 comes between 4 and 6 when counting: 4, 5, 6."
      },
      {
        id: 5,
        subject: "English",
        question: "What letter makes the first sound in 'sun'?",
        options: ["R", "S", "T", "N"],
        correct: 1,
        explanation: "'Sun' starts with the letter 'S' which makes the 's' sound."
      },
      {
        id: 6,
        subject: "Science",
        question: "What do you wear when it's raining?",
        options: ["swimsuit", "coat or raincoat", "shorts", "sandals"],
        correct: 1,
        explanation: "When it's raining, you wear a coat or raincoat to stay dry."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "How many legs does a dog have?",
        options: ["2", "3", "4", "6"],
        correct: 2,
        explanation: "A dog has 4 legs - count them: front left, front right, back left, back right."
      },
      {
        id: 8,
        subject: "English",
        question: "What do you say when someone says 'thank you' to you?",
        options: ["nothing", "you're welcome", "go away", "thank you too"],
        correct: 1,
        explanation: "When someone says 'thank you', you can say 'you're welcome' to be polite."
      }
    ]
  }
];