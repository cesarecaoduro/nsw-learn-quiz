import { Quiz } from "@/types/quiz";

export const year2Quizzes: Quiz[] = [
  {
    id: "year2-english-literature",
    name: "English Language & Literature",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "Which of these is a noun?",
        options: ["run", "happy", "dog", "quickly"],
        correct: 2,
        explanation: "A noun is a naming word. 'Dog' names an animal, so it's a noun."
      },
      {
        id: 2,
        subject: "English",
        question: "What sound does 'sh' make in the word 'ship'?",
        options: ["s sound", "h sound", "sh sound", "ch sound"],
        correct: 2,
        explanation: "The letters 'sh' together make the 'sh' sound, like in 'ship' or 'fish'."
      },
      {
        id: 3,
        subject: "English",
        question: "Which word rhymes with 'cat'?",
        options: ["dog", "hat", "pig", "cow"],
        correct: 1,
        explanation: "'Hat' rhymes with 'cat' because they both end with the same 'at' sound."
      },
      {
        id: 4,
        subject: "English",
        question: "What is the opposite of 'big'?",
        options: ["huge", "large", "small", "tall"],
        correct: 2,
        explanation: "'Small' is the opposite of 'big'. They mean different sizes."
      },
      {
        id: 5,
        subject: "English",
        question: "Which sentence uses a capital letter correctly?",
        options: ["my name is sam.", "My name is sam.", "my Name is Sam.", "My name is Sam."],
        correct: 3,
        explanation: "Sentences start with capital letters, and names (like Sam) always have capital letters."
      },
      {
        id: 6,
        subject: "English",
        question: "What type of word is 'happy'?",
        options: ["naming word", "doing word", "describing word", "connecting word"],
        correct: 2,
        explanation: "'Happy' is a describing word (adjective) because it describes how someone feels."
      },
      {
        id: 7,
        subject: "English",
        question: "Which word completes this sentence: 'The sun ___ bright.'?",
        options: ["are", "is", "am", "be"],
        correct: 1,
        explanation: "'Is' is correct because 'sun' is one thing (singular), so we use 'is'."
      },
      {
        id: 8,
        subject: "English",
        question: "What comes at the end of a telling sentence?",
        options: ["!", "?", ".", ","],
        correct: 2,
        explanation: "A telling sentence (statement) ends with a full stop (period)."
      },
      {
        id: 9,
        subject: "English",
        question: "Which word has the 'oo' sound like in 'book'?",
        options: ["moon", "look", "food", "room"],
        correct: 1,
        explanation: "'Look' has the short 'oo' sound like 'book'. The others have the long 'oo' sound."
      },
      {
        id: 10,
        subject: "English",
        question: "What do we call words like 'and', 'but', 'or'?",
        options: ["naming words", "doing words", "describing words", "connecting words"],
        correct: 3,
        explanation: "Words like 'and', 'but', and 'or' are connecting words that join other words together."
      }
    ]
  },
  {
    id: "year2-number-algebra",
    name: "Number & Counting",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What number comes after 29?",
        options: ["28", "30", "31", "39"],
        correct: 1,
        explanation: "When counting, 30 comes right after 29."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 7 + 5?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "7 + 5 = 12. You can count on from 7: 8, 9, 10, 11, 12."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "Which number is the biggest?",
        options: ["25", "52", "15", "21"],
        correct: 1,
        explanation: "52 is the biggest number. The tens place (5) is bigger than all the others."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What is 15 - 6?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "15 - 6 = 9. You can count back from 15 six times to get 9."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "How many tens are in the number 47?",
        options: ["4", "7", "47", "74"],
        correct: 0,
        explanation: "In 47, there are 4 tens and 7 ones. The 4 is in the tens place."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What is double 6?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "Double means times 2. Double 6 is 6 + 6 = 12."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "Which is an odd number?",
        options: ["4", "6", "8", "9"],
        correct: 3,
        explanation: "9 is odd because it can't be shared equally between 2 groups."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "What is the next number in the pattern: 2, 4, 6, 8, ___?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "This pattern goes up by 2 each time. After 8 comes 10."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "How many ones are in 73?",
        options: ["3", "7", "73", "37"],
        correct: 0,
        explanation: "In 73, there are 7 tens and 3 ones. The 3 is in the ones place."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "What is half of 10?",
        options: ["4", "5", "6", "20"],
        correct: 1,
        explanation: "Half means divide by 2. Half of 10 is 5 because 5 + 5 = 10."
      }
    ]
  },
  {
    id: "year2-measurement-geometry",
    name: "Measurement & Geometry",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A triangle always has exactly 3 sides and 3 corners."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "Which is longer: your hand or your foot?",
        options: ["hand", "foot", "they're the same", "can't tell"],
        correct: 1,
        explanation: "For most people, their foot is longer than their hand."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What shape is a ball?",
        options: ["circle", "square", "triangle", "sphere"],
        correct: 3,
        explanation: "A ball is a sphere - it's round in all directions like a 3D circle."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "How many corners does a square have?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "A square has 4 corners (also called vertices) and 4 equal sides."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Which unit would you use to measure how tall you are?",
        options: ["grams", "litres", "centimetres", "kilograms"],
        correct: 2,
        explanation: "We measure height (how tall things are) using centimetres or metres."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What time is shown when the big hand is on 12 and little hand is on 3?",
        options: ["12 o'clock", "3 o'clock", "6 o'clock", "9 o'clock"],
        correct: 1,
        explanation: "When the little hand (hour hand) points to 3 and big hand points to 12, it's 3 o'clock."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "There are 7 days in a week: Monday through Sunday."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Which holds more water: a cup or a bucket?",
        options: ["cup", "bucket", "same amount", "can't tell"],
        correct: 1,
        explanation: "A bucket is much bigger than a cup, so it can hold much more water."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What comes after Wednesday?",
        options: ["Tuesday", "Thursday", "Friday", "Monday"],
        correct: 1,
        explanation: "The days of the week in order: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "How many sides does a circle have?",
        options: ["0", "1", "2", "3"],
        correct: 0,
        explanation: "A circle has no sides - it's one continuous curved line."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "Which season comes after winter?",
        options: ["summer", "autumn", "spring", "winter again"],
        correct: 2,
        explanation: "The seasons go: summer, autumn, winter, spring, then back to summer."
      }
    ]
  },
  {
    id: "year2-living-world",
    name: "Science - Living World",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What do plants need to grow?",
        options: ["only water", "water and sunlight", "water, sunlight and air", "only sunlight"],
        correct: 2,
        explanation: "Plants need water, sunlight, and air (carbon dioxide) to make their own food and grow."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which animal is a mammal?",
        options: ["fish", "bird", "cat", "butterfly"],
        correct: 2,
        explanation: "A cat is a mammal. Mammals have fur or hair and feed milk to their babies."
      },
      {
        id: 3,
        subject: "Science",
        question: "Where do fish live?",
        options: ["in trees", "in water", "underground", "in the air"],
        correct: 1,
        explanation: "Fish live in water - rivers, lakes, and oceans. They breathe through gills."
      },
      {
        id: 4,
        subject: "Science",
        question: "What do we call baby chickens?",
        options: ["puppies", "kittens", "chicks", "cubs"],
        correct: 2,
        explanation: "Baby chickens are called chicks. They hatch from eggs."
      },
      {
        id: 5,
        subject: "Science",
        question: "Which part of a plant makes seeds?",
        options: ["roots", "leaves", "stem", "flower"],
        correct: 3,
        explanation: "Flowers make seeds. After the flower is pollinated, it grows into a fruit with seeds inside."
      },
      {
        id: 6,
        subject: "Science",
        question: "What do bees collect from flowers?",
        options: ["water", "nectar", "leaves", "roots"],
        correct: 1,
        explanation: "Bees collect nectar (sweet liquid) from flowers and use it to make honey."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which animals lay eggs?",
        options: ["cats and dogs", "birds and fish", "only birds", "only fish"],
        correct: 1,
        explanation: "Many animals lay eggs, including birds, fish, reptiles, and insects."
      },
      {
        id: 8,
        subject: "Science",
        question: "What covers a bird's body?",
        options: ["fur", "scales", "feathers", "skin"],
        correct: 2,
        explanation: "Birds have feathers covering their bodies. Feathers help them fly and stay warm."
      },
      {
        id: 9,
        subject: "Science",
        question: "Where do plants get their food?",
        options: ["from soil only", "they make it themselves", "from other plants", "from animals"],
        correct: 1,
        explanation: "Plants make their own food using sunlight, water, and air in a process called photosynthesis."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call animals that eat only plants?",
        options: ["carnivores", "herbivores", "omnivores", "predators"],
        correct: 1,
        explanation: "Animals that eat only plants are called herbivores. Examples include rabbits and cows."
      },
      {
        id: 11,
        subject: "Science",
        question: "Which animal changes completely as it grows up?",
        options: ["dog", "cat", "butterfly", "bird"],
        correct: 2,
        explanation: "Butterflies change completely: egg → caterpillar → chrysalis → butterfly. This is called metamorphosis."
      }
    ]
  },
  {
    id: "year2-physical-world",
    name: "Science - Physical World",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What happens to ice when it gets warm?",
        options: ["it gets harder", "it melts", "it grows bigger", "nothing happens"],
        correct: 1,
        explanation: "When ice gets warm, it melts and becomes liquid water."
      },
      {
        id: 2,
        subject: "Science",
        question: "What do we need to see things?",
        options: ["water", "air", "light", "food"],
        correct: 2,
        explanation: "We need light to see things. Without light, everything would be dark and we couldn't see."
      },
      {
        id: 3,
        subject: "Science",
        question: "Which object will float in water?",
        options: ["rock", "metal spoon", "wooden stick", "marble"],
        correct: 2,
        explanation: "Wood usually floats in water because it's lighter than water. Heavy things like rocks sink."
      },
      {
        id: 4,
        subject: "Science",
        question: "What makes sound?",
        options: ["light", "vibrations", "water", "air only"],
        correct: 1,
        explanation: "Sound is made by vibrations. When things shake or vibrate, they make sound waves we can hear."
      },
      {
        id: 5,
        subject: "Science",
        question: "What happens when you mix red and yellow paint?",
        options: ["blue", "green", "orange", "purple"],
        correct: 2,
        explanation: "Red and yellow mixed together make orange. This is how we create new colors."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which material is magnetic?",
        options: ["wood", "plastic", "iron", "glass"],
        correct: 2,
        explanation: "Iron is magnetic. Magnets stick to things made of iron, like some metals."
      },
      {
        id: 7,
        subject: "Science",
        question: "What happens to water when it gets very hot?",
        options: ["it freezes", "it turns to steam", "it disappears", "nothing happens"],
        correct: 1,
        explanation: "When water gets very hot (boiling), it turns into steam (water vapor) that rises into the air."
      },
      {
        id: 8,
        subject: "Science",
        question: "Why do things fall down instead of up?",
        options: ["because of wind", "because of gravity", "because of light", "because of sound"],
        correct: 1,
        explanation: "Gravity pulls everything toward the ground. That's why things fall down, not up."
      },
      {
        id: 9,
        subject: "Science",
        question: "What do we call the three main states of matter?",
        options: ["hot, warm, cold", "solid, liquid, gas", "big, medium, small", "hard, soft, smooth"],
        correct: 1,
        explanation: "The three states of matter are solid (like ice), liquid (like water), and gas (like steam)."
      },
      {
        id: 10,
        subject: "Science",
        question: "Which sense do we use to hear sounds?",
        options: ["eyes", "nose", "ears", "mouth"],
        correct: 2,
        explanation: "We use our ears to hear sounds. Our ears detect sound waves and send signals to our brain."
      }
    ]
  },
  {
    id: "year2-australian-history",
    name: "Australian History",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "Who were the first people to live in Australia?",
        options: ["English people", "Aboriginal people", "Chinese people", "Dutch people"],
        correct: 1,
        explanation: "Aboriginal and Torres Strait Islander people were the first people to live in Australia, thousands of years ago."
      },
      {
        id: 2,
        subject: "History",
        question: "What day do we celebrate Australia Day?",
        options: ["January 1st", "January 26th", "April 25th", "December 25th"],
        correct: 1,
        explanation: "Australia Day is celebrated on January 26th each year to remember when the First Fleet arrived."
      },
      {
        id: 3,
        subject: "History",
        question: "What is a boomerang?",
        options: ["a type of food", "a musical instrument", "a hunting tool", "a type of house"],
        correct: 2,
        explanation: "A boomerang is a hunting tool used by Aboriginal people. Some boomerangs can come back when thrown."
      },
      {
        id: 4,
        subject: "History",
        question: "What are Dreamtime stories?",
        options: ["bedtime stories", "Aboriginal stories about creation", "stories about dreams", "fairy tales"],
        correct: 1,
        explanation: "Dreamtime stories are special Aboriginal stories that explain how the world and everything in it was created."
      },
      {
        id: 5,
        subject: "History",
        question: "What did early European settlers bring to Australia?",
        options: ["only people", "animals and plants from Europe", "only tools", "only food"],
        correct: 1,
        explanation: "European settlers brought many animals (like sheep and cattle) and plants that weren't originally in Australia."
      },
      {
        id: 6,
        subject: "History",
        question: "What do we call the ships that brought the first Europeans to Australia?",
        options: ["The First Fleet", "The Last Fleet", "The Big Ships", "The Explorer Ships"],
        correct: 0,
        explanation: "The First Fleet was the name given to the 11 ships that brought the first European settlers to Australia in 1788."
      },
      {
        id: 7,
        subject: "History",
        question: "What is ANZAC Day?",
        options: ["Australia's birthday", "A day to remember soldiers", "Christmas Day", "New Year's Day"],
        correct: 1,
        explanation: "ANZAC Day (April 25th) is when we remember Australian and New Zealand soldiers who fought in wars."
      },
      {
        id: 8,
        subject: "History",
        question: "What did Aboriginal people use to make tools?",
        options: ["plastic", "metal from shops", "natural materials like stone and wood", "glass"],
        correct: 2,
        explanation: "Aboriginal people made tools from natural materials like stone, wood, bone, and shells found in nature."
      },
      {
        id: 9,
        subject: "History",
        question: "What is the name of Australia's flag symbol?",
        options: ["Southern Cross", "Northern Star", "Big Dipper", "Moon and Stars"],
        correct: 0,
        explanation: "The Southern Cross is a group of stars on the Australian flag that can be seen in the southern sky."
      },
      {
        id: 10,
        subject: "History",
        question: "How did Aboriginal people travel long distances before cars?",
        options: ["by horse", "by walking", "by bicycle", "by boat only"],
        correct: 1,
        explanation: "Aboriginal people traveled by walking long distances across the land, following traditional pathways and tracks."
      }
    ]
  },
  {
    id: "year2-australian-geography",
    name: "Australian Geography",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Geography",
        question: "What is the biggest city in Australia?",
        options: ["Melbourne", "Sydney", "Brisbane", "Perth"],
        correct: 1,
        explanation: "Sydney is Australia's biggest city with the most people living there."
      },
      {
        id: 2,
        subject: "Geography",
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2,
        explanation: "Canberra is the capital city of Australia, where the government meets."
      },
      {
        id: 3,
        subject: "Geography",
        question: "Australia is surrounded by what?",
        options: ["mountains", "deserts", "water", "forests"],
        correct: 2,
        explanation: "Australia is an island continent completely surrounded by water (oceans and seas)."
      },
      {
        id: 4,
        subject: "Geography",
        question: "Which animal is found only in Australia?",
        options: ["elephant", "kangaroo", "lion", "tiger"],
        correct: 1,
        explanation: "Kangaroos are native to Australia - they live naturally only in Australia and nowhere else in the world."
      },
      {
        id: 5,
        subject: "Geography",
        question: "What do we call the red, sandy middle of Australia?",
        options: ["The Green Center", "The Outback", "The Wetlands", "The Mountains"],
        correct: 1,
        explanation: "The Outback is the name for the hot, dry, red sandy areas in the middle and interior of Australia."
      },
      {
        id: 6,
        subject: "Geography",
        question: "Which ocean is on the east coast of Australia?",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
        correct: 1,
        explanation: "The Pacific Ocean is on Australia's east coast, where cities like Sydney and Brisbane are located."
      },
      {
        id: 7,
        subject: "Geography",
        question: "What is special about Uluru (Ayers Rock)?",
        options: ["It's the tallest mountain", "It's a big red rock in the center of Australia", "It's near the ocean", "It's covered in snow"],
        correct: 1,
        explanation: "Uluru is a massive red rock formation in the center of Australia. It's sacred to Aboriginal people."
      },
      {
        id: 8,
        subject: "Geography",
        question: "What type of climate does northern Australia have?",
        options: ["very cold", "hot and wet", "always snowy", "always dry"],
        correct: 1,
        explanation: "Northern Australia has a tropical climate - it's hot and has wet and dry seasons."
      },
      {
        id: 9,
        subject: "Geography",
        question: "Which is bigger: Australia or other countries?",
        options: ["Australia is very small", "Australia is medium-sized", "Australia is one of the biggest countries", "All countries are the same size"],
        correct: 2,
        explanation: "Australia is the 6th largest country in the world by land area - it's very big!"
      },
      {
        id: 10,
        subject: "Geography",
        question: "What do we call the colorful fish area off Australia's coast?",
        options: ["The Great Barrier Reef", "The Fish Garden", "The Coral Castle", "The Ocean Park"],
        correct: 0,
        explanation: "The Great Barrier Reef is off the coast of Queensland. It's full of colorful fish and coral."
      }
    ]
  },
  {
    id: "year2-mixed-review-1",
    name: "Mixed Review 1",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "How many syllables are in the word 'elephant'?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "El-e-phant has 3 syllables. Clap while saying each part to count them."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "If you have 3 apples and eat 1, how many do you have left?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "3 - 1 = 2. You started with 3 apples and ate 1, so 2 are left."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do animals need to survive?",
        options: ["only food", "only water", "food, water, and shelter", "only shelter"],
        correct: 2,
        explanation: "All animals need food for energy, water to drink, and shelter to stay safe and warm."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What do we call a large area of water surrounded by land?",
        options: ["river", "lake", "ocean", "stream"],
        correct: 1,
        explanation: "A lake is a large area of water that is completely surrounded by land."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Which number is between 15 and 20?",
        options: ["14", "17", "21", "25"],
        correct: 1,
        explanation: "17 is between 15 and 20. It's bigger than 15 but smaller than 20."
      },
      {
        id: 6,
        subject: "English",
        question: "What punctuation mark goes at the end of a question?",
        options: [".", "!", "?", ","],
        correct: 2,
        explanation: "Questions end with a question mark (?). It shows someone is asking something."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which weather is best for drying clothes outside?",
        options: ["rainy", "sunny and windy", "cloudy and still", "snowy"],
        correct: 1,
        explanation: "Sunny and windy weather helps water evaporate quickly, so clothes dry fast."
      },
      {
        id: 8,
        subject: "History",
        question: "What do we call old objects that tell us about the past?",
        options: ["new things", "artifacts", "toys", "books only"],
        correct: 1,
        explanation: "Artifacts are old objects (like tools, pottery, or jewelry) that teach us about how people lived long ago."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is the total of 4 + 4 + 4?",
        options: ["8", "12", "16", "20"],
        correct: 1,
        explanation: "4 + 4 + 4 = 12. You can also think of this as 3 groups of 4: 3 × 4 = 12."
      },
      {
        id: 10,
        subject: "Science",
        question: "What happens to a shadow when you move closer to a light?",
        options: ["it gets smaller", "it gets bigger", "it disappears", "it stays the same"],
        correct: 1,
        explanation: "When you move closer to a light source, your shadow gets bigger because you block more light."
      }
    ]
  },
  {
    id: "year2-mixed-review-2",
    name: "Mixed Review 2",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many minutes are in 1 hour?",
        options: ["30", "60", "100", "24"],
        correct: 1,
        explanation: "There are 60 minutes in 1 hour. The minute hand goes around the clock once in an hour."
      },
      {
        id: 2,
        subject: "English",
        question: "Which word is a verb (doing word)?",
        options: ["red", "jump", "table", "big"],
        correct: 1,
        explanation: "'Jump' is a verb because it shows an action - something you can do."
      },
      {
        id: 3,
        subject: "Science",
        question: "What part of your body helps you balance?",
        options: ["eyes", "ears", "nose", "mouth"],
        correct: 1,
        explanation: "Your ears help you balance. Inside your ears are special parts that tell your brain which way is up."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What do we call the imaginary line around the middle of Earth?",
        options: ["North Pole", "South Pole", "Equator", "Prime Line"],
        correct: 2,
        explanation: "The Equator is an imaginary line around the middle of Earth. It's the hottest part of our planet."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "If a pattern goes 5, 10, 15, 20, what comes next?",
        options: ["21", "22", "25", "30"],
        correct: 2,
        explanation: "The pattern adds 5 each time: 5, 10, 15, 20, 25. We're counting by fives."
      },
      {
        id: 6,
        subject: "Science",
        question: "What do we call baby frogs?",
        options: ["chicks", "puppies", "tadpoles", "cubs"],
        correct: 2,
        explanation: "Baby frogs are called tadpoles. They live in water and look very different from adult frogs."
      },
      {
        id: 7,
        subject: "English",
        question: "Which sentence is written correctly?",
        options: ["the dog ran fast", "The dog ran fast.", "the Dog ran Fast.", "THE DOG RAN FAST"],
        correct: 1,
        explanation: "Sentences start with a capital letter and end with a full stop. Only proper nouns need capital letters inside."
      },
      {
        id: 8,
        subject: "History",
        question: "What do we call a person who studies old things?",
        options: ["doctor", "teacher", "archaeologist", "artist"],
        correct: 2,
        explanation: "An archaeologist is a person who digs up and studies old objects to learn about the past."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "Which fraction is bigger: 1/2 or 1/4?",
        options: ["1/2", "1/4", "they're the same", "can't tell"],
        correct: 0,
        explanation: "1/2 is bigger than 1/4. Half of something is bigger than a quarter of something."
      },
      {
        id: 10,
        subject: "Science",
        question: "What gas do plants give off that we need to breathe?",
        options: ["carbon dioxide", "oxygen", "nitrogen", "water vapor"],
        correct: 1,
        explanation: "Plants give off oxygen, which is what we need to breathe. We breathe in oxygen and breathe out carbon dioxide."
      }
    ]
  },
  {
    id: "year2-challenge-quiz",
    name: "Challenge Quiz",
    year: "2",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "Sarah has 18 stickers. She gives away 9 stickers. How many does she have left?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "18 - 9 = 9. Sarah started with 18 and gave away 9, so she has 9 left."
      },
      {
        id: 2,
        subject: "English",
        question: "Which word has the same meaning as 'big'?",
        options: ["small", "large", "little", "tiny"],
        correct: 1,
        explanation: "'Large' means the same as 'big'. Words that mean the same are called synonyms."
      },
      {
        id: 3,
        subject: "Science",
        question: "Why do leaves change color in autumn?",
        options: ["They get dirty", "The green color breaks down", "They get painted", "They get sick"],
        correct: 1,
        explanation: "In autumn, the green color (chlorophyll) in leaves breaks down, showing other colors like yellow and red underneath."
      },
      {
        id: 4,
        subject: "Geography",
        question: "If you travel north from Sydney, which city would you reach first?",
        options: ["Melbourne", "Brisbane", "Adelaide", "Perth"],
        correct: 1,
        explanation: "Brisbane is north of Sydney along Australia's east coast. Melbourne and Adelaide are south of Sydney."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Tom has 3 bags with 4 marbles in each bag. How many marbles does he have altogether?",
        options: ["7", "10", "12", "15"],
        correct: 2,
        explanation: "3 bags × 4 marbles in each bag = 12 marbles. You can also add: 4 + 4 + 4 = 12."
      },
      {
        id: 6,
        subject: "Science",
        question: "What happens to your muscles when you exercise regularly?",
        options: ["They get weaker", "They get stronger", "They stay the same", "They disappear"],
        correct: 1,
        explanation: "Regular exercise makes your muscles stronger. The more you use them, the stronger they become."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the past tense of 'run'?",
        options: ["runned", "ran", "runs", "running"],
        correct: 1,
        explanation: "'Ran' is the past tense of 'run'. We say 'I ran yesterday' but 'I run today'."
      },
      {
        id: 8,
        subject: "History",
        question: "Why did early people paint on cave walls?",
        options: ["To decorate", "To tell stories and record events", "Because they were bored", "To practice art"],
        correct: 1,
        explanation: "Cave paintings were used to tell stories, record important events, and share information with others."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "Lisa counts by 2s: 2, 4, 6, 8, 10. What type of numbers is she counting?",
        options: ["odd numbers", "even numbers", "big numbers", "small numbers"],
        correct: 1,
        explanation: "Even numbers can be divided by 2 with no remainder: 2, 4, 6, 8, 10, etc."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call animals that are active at night?",
        options: ["day animals", "nocturnal animals", "sleeping animals", "lazy animals"],
        correct: 1,
        explanation: "Nocturnal animals are active at night and sleep during the day. Examples include owls and bats."
      },
      {
        id: 11,
        subject: "Geography",
        question: "What causes day and night on Earth?",
        options: ["The sun moving around Earth", "Earth spinning around", "Clouds covering the sun", "The moon blocking the sun"],
        correct: 1,
        explanation: "Day and night happen because Earth spins (rotates). As Earth turns, different parts face the sun."
      },
      {
        id: 12,
        subject: "English",
        question: "In the sentence 'The cat sat on the mat', which words rhyme?",
        options: ["cat and mat", "cat and sat", "sat and mat", "all three words"],
        correct: 3,
        explanation: "Cat, sat, and mat all rhyme because they all end with the same 'at' sound."
      }
    ]
  }
];