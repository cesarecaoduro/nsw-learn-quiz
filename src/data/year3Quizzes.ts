import { Quiz } from "@/types/quiz";

export const year3Quizzes: Quiz[] = [
  {
    id: "year3-english-literature",
    name: "English Language & Literature",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is a verb?",
        options: ["A naming word", "An action word", "A describing word", "A connecting word"],
        correct: 1,
        explanation: "A verb is an action word that tells us what someone or something is doing, like 'run', 'jump', or 'think'."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence uses correct punctuation?",
        options: ["What time is it.", "What time is it?", "what time is it?", "What time is it,"],
        correct: 1,
        explanation: "Questions end with a question mark (?), and sentences start with a capital letter."
      },
      {
        id: 3,
        subject: "English",
        question: "What is the plural of 'mouse'?",
        options: ["mouses", "mice", "mouse's", "mousies"],
        correct: 1,
        explanation: "'Mouse' has an irregular plural form - 'mice'. Not all plurals end in 's'."
      },
      {
        id: 4,
        subject: "English",
        question: "Which word is an adjective in this sentence: 'The tall tree swayed gently'?",
        options: ["tree", "tall", "swayed", "gently"],
        correct: 1,
        explanation: "'Tall' is an adjective because it describes the tree. Adjectives give us more information about nouns."
      },
      {
        id: 5,
        subject: "English",
        question: "What does the prefix 'un-' mean in the word 'unhappy'?",
        options: ["very", "not", "again", "before"],
        correct: 1,
        explanation: "The prefix 'un-' means 'not'. So 'unhappy' means 'not happy'."
      },
      {
        id: 6,
        subject: "English",
        question: "Which word completes this sentence correctly: 'There ___ three cats in the garden'?",
        options: ["is", "are", "am", "was"],
        correct: 1,
        explanation: "'Are' is correct because we're talking about more than one cat (three cats), so we need a plural verb."
      },
      {
        id: 7,
        subject: "English",
        question: "What is a compound word?",
        options: ["A very long word", "Two words joined together", "A word with many syllables", "A describing word"],
        correct: 1,
        explanation: "A compound word is made by joining two smaller words together, like 'sunshine' (sun + shine) or 'football' (foot + ball)."
      },
      {
        id: 8,
        subject: "English",
        question: "In the word 'jumping', what is 'jump'?",
        options: ["A suffix", "A prefix", "The root word", "An adjective"],
        correct: 2,
        explanation: "'Jump' is the root word - the main part that gives the word its basic meaning. '-ing' is the suffix."
      },
      {
        id: 9,
        subject: "English",
        question: "Which sentence shows the correct use of speech marks?",
        options: ["Sam said hello to me.", "Sam said, hello to me.", "Sam said, \"Hello\" to me.", "Sam said \"Hello to me.\""],
        correct: 2,
        explanation: "Speech marks (quotation marks) go around the exact words someone says. The comma comes before opening the quote."
      },
      {
        id: 10,
        subject: "English",
        question: "What type of text would you use to tell someone how to make a sandwich?",
        options: ["A story", "A poem", "Instructions", "A letter"],
        correct: 2,
        explanation: "Instructions tell someone how to do something step by step. They often use command words like 'cut', 'spread', 'place'."
      },
      {
        id: 11,
        subject: "English",
        question: "Which word rhymes with 'night'?",
        options: ["not", "light", "net", "note"],
        correct: 1,
        explanation: "'Light' rhymes with 'night' because they both end with the same 'ight' sound."
      },
      {
        id: 12,
        subject: "English",
        question: "What is the past tense of 'eat'?",
        options: ["eated", "ate", "eaten", "eats"],
        correct: 1,
        explanation: "The past tense of 'eat' is 'ate'. We say 'I ate lunch yesterday' but 'I eat lunch today'."
      }
    ]
  },
  {
    id: "year3-number-algebra",
    name: "Number & Algebra",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 7 × 8?",
        options: ["54", "56", "63", "64"],
        correct: 1,
        explanation: "7 × 8 = 56. This is part of the multiplication tables you should learn."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 84 ÷ 7?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "84 ÷ 7 = 12. You can think: how many 7s make 84? The answer is 12."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "Which number is closest to 500?",
        options: ["456", "523", "478", "497"],
        correct: 3,
        explanation: "497 is only 3 away from 500, making it the closest. 456 is 44 away, 523 is 23 away, 478 is 22 away."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What is the value of the 6 in the number 362?",
        options: ["6", "60", "600", "360"],
        correct: 1,
        explanation: "In 362, the 6 is in the tens place, so its value is 60 (6 tens)."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is 1/3 of 15?",
        options: ["3", "5", "12", "45"],
        correct: 1,
        explanation: "1/3 of 15 = 15 ÷ 3 = 5. To find one third, divide by 3."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "Which number comes next in this pattern: 25, 50, 75, 100, ___?",
        options: ["115", "120", "125", "150"],
        correct: 2,
        explanation: "The pattern increases by 25 each time. After 100, add 25 to get 125."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "What is 248 rounded to the nearest 10?",
        options: ["240", "250", "200", "300"],
        correct: 1,
        explanation: "248 rounds to 250. Since the ones digit (8) is 5 or more, we round up."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "If Anna has 3 packets of stickers with 12 stickers in each packet, how many stickers does she have altogether?",
        options: ["15", "24", "36", "39"],
        correct: 2,
        explanation: "3 × 12 = 36. She has 3 groups of 12 stickers, which equals 36 stickers total."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is the difference between 156 and 89?",
        options: ["67", "77", "245", "68"],
        correct: 0,
        explanation: "156 - 89 = 67. Subtract to find the difference between two numbers."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "Which fraction is equivalent to 1/2?",
        options: ["1/4", "2/4", "1/3", "3/4"],
        correct: 1,
        explanation: "2/4 equals 1/2 because both the numerator and denominator have been multiplied by 2."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "What is 6 × 9?",
        options: ["52", "54", "56", "63"],
        correct: 1,
        explanation: "6 × 9 = 54. You can also think of it as 6 × 10 - 6 = 60 - 6 = 54."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "How many hundreds, tens, and ones are in 427?",
        options: ["4 hundreds, 2 tens, 7 ones", "4 hundreds, 27 ones", "42 tens, 7 ones", "427 ones"],
        correct: 0,
        explanation: "427 has 4 hundreds, 2 tens, and 7 ones. Each digit has a different place value."
      }
    ]
  },
  {
    id: "year3-measurement-geometry",
    name: "Measurement & Geometry",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "How many centimeters are in 1 meter?",
        options: ["10", "100", "1000", "50"],
        correct: 1,
        explanation: "There are 100 centimeters in 1 meter. Remember: 1 m = 100 cm."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is the perimeter of a square with sides of 4 cm?",
        options: ["8 cm", "12 cm", "16 cm", "20 cm"],
        correct: 2,
        explanation: "Perimeter = 4 + 4 + 4 + 4 = 16 cm. Add all four sides of the square."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "A pentagon has 5 sides and 5 corners. 'Penta' means five."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What time is it when the hour hand points to 7 and the minute hand points to 6?",
        options: ["6:35", "7:30", "7:06", "6:07"],
        correct: 1,
        explanation: "When the minute hand points to 6, it shows 30 minutes past the hour. So it's 7:30."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is the area of a rectangle that is 5 cm long and 3 cm wide?",
        options: ["8 cm²", "15 cm²", "16 cm²", "8 cm"],
        correct: 1,
        explanation: "Area = length × width = 5 × 3 = 15 cm². Area is always measured in square units."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "How many milliliters are in 1 liter?",
        options: ["10", "100", "1000", "500"],
        correct: 2,
        explanation: "There are 1000 milliliters in 1 liter. Remember: 1 L = 1000 mL."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "Which angle is smaller than a right angle?",
        options: ["Obtuse angle", "Straight angle", "Acute angle", "Full angle"],
        correct: 2,
        explanation: "An acute angle is smaller than a right angle (less than 90 degrees). It looks 'sharp'."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "A cube has 6 faces (flat surfaces). Think of a dice - it has 6 sides."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "If it takes 25 minutes to walk to school, and you leave home at 8:40, what time will you arrive?",
        options: ["8:65", "9:05", "9:15", "8:15"],
        correct: 1,
        explanation: "8:40 + 25 minutes = 9:05. Add 20 minutes to get to 9:00, then add 5 more minutes."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "What unit would be best for measuring the length of a pencil?",
        options: ["kilometers", "meters", "centimeters", "millimeters"],
        correct: 2,
        explanation: "Centimeters are best for measuring small objects like pencils. A pencil is about 18-20 cm long."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "How many grams are in 2 kilograms?",
        options: ["20", "200", "2000", "20000"],
        correct: 2,
        explanation: "1 kg = 1000 g, so 2 kg = 2 × 1000 = 2000 g."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "What is the name of a shape with 8 sides?",
        options: ["hexagon", "heptagon", "octagon", "nonagon"],
        correct: 2,
        explanation: "An octagon has 8 sides and 8 corners. 'Octo' means eight, like an octopus has 8 arms."
      }
    ]
  },
  {
    id: "year3-living-world",
    name: "Science - Living World",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What process do plants use to make their own food?",
        options: ["respiration", "photosynthesis", "digestion", "circulation"],
        correct: 1,
        explanation: "Photosynthesis is how plants make food using sunlight, water, and carbon dioxide from the air."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which part of a plant transports water from the roots to the leaves?",
        options: ["flowers", "stem", "fruits", "seeds"],
        correct: 1,
        explanation: "The stem acts like pipes, carrying water and nutrients from the roots up to the leaves and other parts."
      },
      {
        id: 3,
        subject: "Science",
        question: "What do we call animals that eat both plants and meat?",
        options: ["herbivores", "carnivores", "omnivores", "decomposers"],
        correct: 2,
        explanation: "Omnivores eat both plants and animals. Humans, bears, and pigs are examples of omnivores."
      },
      {
        id: 4,
        subject: "Science",
        question: "Which animal group breathes through gills?",
        options: ["mammals", "birds", "fish", "reptiles"],
        correct: 2,
        explanation: "Fish breathe through gills, which extract oxygen from water. Mammals and birds breathe through lungs."
      },
      {
        id: 5,
        subject: "Science",
        question: "What is the life cycle order for a butterfly?",
        options: ["egg, butterfly, caterpillar, chrysalis", "egg, caterpillar, chrysalis, butterfly", "caterpillar, egg, butterfly, chrysalis", "chrysalis, egg, caterpillar, butterfly"],
        correct: 1,
        explanation: "Butterfly life cycle: egg → caterpillar (larva) → chrysalis (pupa) → butterfly (adult). This is called metamorphosis."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which part of a flower attracts bees and other pollinators?",
        options: ["roots", "stem", "colorful petals", "leaves"],
        correct: 2,
        explanation: "Bright, colorful petals attract bees and other insects to help pollinate the flower."
      },
      {
        id: 7,
        subject: "Science",
        question: "What do we call a group of the same animals living together?",
        options: ["habitat", "population", "ecosystem", "community"],
        correct: 1,
        explanation: "A population is a group of the same type of animal living in the same area, like a population of kangaroos."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which animals are warm-blooded?",
        options: ["fish and reptiles", "birds and mammals", "insects and spiders", "all animals"],
        correct: 1,
        explanation: "Birds and mammals are warm-blooded - they can control their body temperature. Fish and reptiles are cold-blooded."
      },
      {
        id: 9,
        subject: "Science",
        question: "What do plants release into the air during photosynthesis?",
        options: ["carbon dioxide", "oxygen", "nitrogen", "water vapor"],
        correct: 1,
        explanation: "Plants release oxygen during photosynthesis. This oxygen is what we breathe to stay alive."
      },
      {
        id: 10,
        subject: "Science",
        question: "Which characteristic do all living things share?",
        options: ["they can fly", "they need water", "they live in trees", "they are green"],
        correct: 1,
        explanation: "All living things need water to survive. Water is essential for all life processes."
      },
      {
        id: 11,
        subject: "Science",
        question: "What is the main function of roots in plants?",
        options: ["to make food", "to attract insects", "to absorb water and nutrients", "to produce flowers"],
        correct: 2,
        explanation: "Roots absorb water and nutrients from the soil and anchor the plant in the ground."
      },
      {
        id: 12,
        subject: "Science",
        question: "Which animals undergo complete metamorphosis?",
        options: ["dogs and cats", "butterflies and frogs", "birds and fish", "snakes and lizards"],
        correct: 1,
        explanation: "Butterflies and frogs undergo complete metamorphosis, changing their body form as they develop."
      }
    ]
  },
  {
    id: "year3-physical-world",
    name: "Science - Physical World",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What happens when you heat ice?",
        options: ["it gets colder", "it melts into water", "it becomes steam", "nothing happens"],
        correct: 1,
        explanation: "When ice is heated, it melts and changes from a solid to a liquid (water)."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which material is the best conductor of electricity?",
        options: ["wood", "plastic", "metal", "rubber"],
        correct: 2,
        explanation: "Metals like copper and aluminum are good conductors of electricity. That's why electrical wires are made of metal."
      },
      {
        id: 3,
        subject: "Science",
        question: "What force pulls objects toward the ground?",
        options: ["magnetism", "gravity", "friction", "electricity"],
        correct: 1,
        explanation: "Gravity is the force that pulls all objects toward the center of the Earth."
      },
      {
        id: 4,
        subject: "Science",
        question: "What do we call the amount of space an object takes up?",
        options: ["weight", "mass", "volume", "density"],
        correct: 2,
        explanation: "Volume is the amount of space an object occupies. It can be measured in liters or cubic centimeters."
      },
      {
        id: 5,
        subject: "Science",
        question: "Which type of energy do we get from the sun?",
        options: ["sound energy", "light and heat energy", "electrical energy", "chemical energy"],
        correct: 1,
        explanation: "The sun gives us light energy (which we can see) and heat energy (which warms us)."
      },
      {
        id: 6,
        subject: "Science",
        question: "What happens when you mix oil and water?",
        options: ["they mix completely", "oil floats on top of water", "water floats on top of oil", "they turn into gas"],
        correct: 1,
        explanation: "Oil is less dense than water, so it floats on top. Oil and water don't mix because they have different properties."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which simple machine helps you lift heavy objects more easily?",
        options: ["wheel", "lever", "screw", "wedge"],
        correct: 1,
        explanation: "A lever uses a fulcrum to help you lift heavy objects with less effort. Think of a crowbar or seesaw."
      },
      {
        id: 8,
        subject: "Science",
        question: "What causes an echo?",
        options: ["light bouncing back", "sound bouncing back", "heat bouncing back", "electricity bouncing back"],
        correct: 1,
        explanation: "An echo is caused when sound waves bounce back from a surface, like a wall or cliff."
      },
      {
        id: 9,
        subject: "Science",
        question: "Which material would be best for keeping a drink cold?",
        options: ["metal", "plastic foam", "paper", "glass"],
        correct: 1,
        explanation: "Plastic foam (like polystyrene) is a good insulator, meaning it doesn't let heat pass through easily."
      },
      {
        id: 10,
        subject: "Science",
        question: "What happens to most materials when they are heated?",
        options: ["they shrink", "they expand", "they change color", "nothing happens"],
        correct: 1,
        explanation: "Most materials expand (get bigger) when heated because their particles move around more and take up more space."
      },
      {
        id: 11,
        subject: "Science",
        question: "Which of these is a renewable source of energy?",
        options: ["coal", "oil", "solar power", "natural gas"],
        correct: 2,
        explanation: "Solar power from the sun is renewable because the sun keeps shining. Coal and oil will eventually run out."
      }
    ]
  },
  {
    id: "year3-australian-history",
    name: "Australian History",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "What does 'ANZAC' stand for?",
        options: ["Australian and New Zealand Army Corps", "Australian National Zone and Coast", "All Nations Zone and Community", "Australian Navy and Zone Command"],
        correct: 0,
        explanation: "ANZAC stands for Australian and New Zealand Army Corps, formed during World War I."
      },
      {
        id: 2,
        subject: "History",
        question: "Which European explorer first mapped Australia's east coast?",
        options: ["Willem Janszoon", "Captain James Cook", "Abel Tasman", "Matthew Flinders"],
        correct: 1,
        explanation: "Captain James Cook mapped Australia's east coast in 1770 during his first Pacific voyage."
      },
      {
        id: 3,
        subject: "History",
        question: "What were the First Fleet ships mainly used for?",
        options: ["exploring", "trading", "bringing convicts to Australia", "fishing"],
        correct: 2,
        explanation: "The First Fleet brought convicts and soldiers to establish the first European settlement in Australia."
      },
      {
        id: 4,
        subject: "History",
        question: "How did Aboriginal people traditionally pass on their stories and knowledge?",
        options: ["through books", "through oral storytelling", "through newspapers", "through letters"],
        correct: 1,
        explanation: "Aboriginal people passed on their knowledge through oral storytelling, often accompanied by art, dance, and song."
      },
      {
        id: 5,
        subject: "History",
        question: "What significant event happened in 1901 for Australia?",
        options: ["The First Fleet arrived", "Gold was discovered", "Australia became a federation", "World War I started"],
        correct: 2,
        explanation: "In 1901, the six colonies united to become the Commonwealth of Australia through federation."
      },
      {
        id: 6,
        subject: "History",
        question: "What is the Dreamtime?",
        options: ["When people sleep", "Aboriginal creation stories and beliefs", "A type of dance", "The time before sunrise"],
        correct: 1,
        explanation: "The Dreamtime refers to Aboriginal creation stories that explain how the world and everything in it came to be."
      },
      {
        id: 7,
        subject: "History",
        question: "Why did many people come to Australia during the 1850s?",
        options: ["for better weather", "to find gold", "to see kangaroos", "to build houses"],
        correct: 1,
        explanation: "The 1850s gold rushes brought thousands of people to Australia hoping to find gold and become wealthy."
      },
      {
        id: 8,
        subject: "History",
        question: "What was the main purpose of early European settlements in Australia?",
        options: ["tourism", "farming only", "convict settlement", "mining only"],
        correct: 2,
        explanation: "The British established Australia as a penal colony to house convicted criminals from overcrowded British prisons."
      },
      {
        id: 9,
        subject: "History",
        question: "What tools did Aboriginal people traditionally use for hunting?",
        options: ["guns and nets", "spears and boomerangs", "bows and arrows", "traps only"],
        correct: 1,
        explanation: "Aboriginal people used spears, boomerangs, clubs, and other tools made from natural materials for hunting."
      },
      {
        id: 10,
        subject: "History",
        question: "When did the First Fleet arrive in Australia?",
        options: ["1770", "1788", "1801", "1850"],
        correct: 1,
        explanation: "The First Fleet arrived at Sydney Cove on January 26, 1788, which is why we celebrate Australia Day on this date."
      },
      {
        id: 11,
        subject: "History",
        question: "What is significant about Gallipoli for Australians?",
        options: ["It's where gold was found", "It's where ANZAC soldiers fought in WWI", "It's the first settlement", "It's where Captain Cook landed"],
        correct: 1,
        explanation: "Gallipoli is where ANZAC soldiers first fought in World War I. Many Australians see this as when Australia proved itself as a nation."
      },
      {
        id: 12,
        subject: "History",
        question: "How long have Aboriginal people been living in Australia?",
        options: ["200 years", "1,000 years", "10,000 years", "over 50,000 years"],
        correct: 3,
        explanation: "Aboriginal people have been living in Australia for over 50,000 years, making them the world's oldest continuous culture."
      }
    ]
  },
  {
    id: "year3-australian-geography",
    name: "Australian Geography",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Geography",
        question: "What is Australia's highest mountain?",
        options: ["Mount Kosciuszko", "Mount Wellington", "Mount Cradle", "Mount Bogong"],
        correct: 0,
        explanation: "Mount Kosciuszko in NSW is Australia's highest mountain at 2,228 meters above sea level."
      },
      {
        id: 2,
        subject: "Geography",
        question: "Which Australian state is known as the 'Island State'?",
        options: ["Queensland", "Western Australia", "Tasmania", "South Australia"],
        correct: 2,
        explanation: "Tasmania is called the 'Island State' because it's an island separated from mainland Australia by Bass Strait."
      },
      {
        id: 3,
        subject: "Geography",
        question: "What is the largest desert in Australia?",
        options: ["Simpson Desert", "Great Sandy Desert", "Great Victoria Desert", "Gibson Desert"],
        correct: 2,
        explanation: "The Great Victoria Desert is Australia's largest desert, covering parts of South and Western Australia."
      },
      {
        id: 4,
        subject: "Geography",
        question: "Which river system is the longest in Australia?",
        options: ["Murray-Darling", "Fitzroy", "Cooper Creek", "Mitchell"],
        correct: 0,
        explanation: "The Murray-Darling river system is Australia's longest, flowing through several states and providing water for farming."
      },
      {
        id: 5,
        subject: "Geography",
        question: "What type of climate does most of northern Australia have?",
        options: ["temperate", "tropical", "desert", "alpine"],
        correct: 1,
        explanation: "Northern Australia has a tropical climate with wet and dry seasons, making it hot and humid."
      },
      {
        id: 6,
        subject: "Geography",
        question: "Which city is the capital of Victoria?",
        options: ["Sydney", "Brisbane", "Melbourne", "Adelaide"],
        correct: 2,
        explanation: "Melbourne is the capital city of Victoria and was Australia's capital from 1901 to 1927."
      },
      {
        id: 7,
        subject: "Geography",
        question: "What is the Great Barrier Reef?",
        options: ["A mountain range", "The world's largest coral reef system", "A desert", "A river"],
        correct: 1,
        explanation: "The Great Barrier Reef off Queensland's coast is the world's largest coral reef system and home to thousands of marine species."
      },
      {
        id: 8,
        subject: "Geography",
        question: "Which ocean lies to the west of Australia?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
        correct: 2,
        explanation: "The Indian Ocean lies to the west of Australia, while the Pacific Ocean is to the east."
      },
      {
        id: 9,
        subject: "Geography",
        question: "What is the Australian mainland's southernmost point?",
        options: ["Cape York", "Cape Byron", "Wilson's Promontory", "Cape Leeuwin"],
        correct: 2,
        explanation: "Wilson's Promontory in Victoria is the southernmost point of mainland Australia."
      },
      {
        id: 10,
        subject: "Geography",
        question: "Which Australian city is closest to Asia?",
        options: ["Sydney", "Melbourne", "Darwin", "Perth"],
        correct: 2,
        explanation: "Darwin in the Northern Territory is Australia's northernmost capital city and closest to Asia."
      },
      {
        id: 11,
        subject: "Geography",
        question: "What causes Australia's seasons to be opposite to those in Europe?",
        options: ["Different climate", "Australia is in the Southern Hemisphere", "Different time zones", "Distance from the equator"],
        correct: 1,
        explanation: "Australia is in the Southern Hemisphere, so when it's summer in Europe (Northern Hemisphere), it's winter in Australia."
      },
      {
        id: 12,
        subject: "Geography",
        question: "Which state has the most people?",
        options: ["Queensland", "Victoria", "New South Wales", "Western Australia"],
        correct: 2,
        explanation: "New South Wales has the largest population of any Australian state, with Sydney being the most populous city."
      }
    ]
  },
  {
    id: "year3-mixed-review-1",
    name: "Mixed Review 1",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 9 × 7?",
        options: ["56", "63", "72", "81"],
        correct: 1,
        explanation: "9 × 7 = 63. This is an important multiplication fact to remember."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence is punctuated correctly?",
        options: ["We saw lions tigers and bears.", "We saw lions, tigers, and bears.", "We saw lions tigers, and bears.", "We saw, lions tigers and bears."],
        correct: 1,
        explanation: "Items in a list are separated by commas, with 'and' before the last item."
      },
      {
        id: 3,
        subject: "Science",
        question: "Which of these is NOT a living thing?",
        options: ["tree", "rock", "bird", "bacteria"],
        correct: 1,
        explanation: "A rock is not living because it doesn't grow, reproduce, breathe, or need food like living things do."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What do we call a map that shows the height of land?",
        options: ["political map", "road map", "topographic map", "weather map"],
        correct: 2,
        explanation: "A topographic map uses contour lines to show the height and shape of the land."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "How many faces does a triangular prism have?",
        options: ["3", "5", "6", "8"],
        correct: 1,
        explanation: "A triangular prism has 5 faces: 2 triangular ends and 3 rectangular sides."
      },
      {
        id: 6,
        subject: "Science",
        question: "What type of animal is a shark?",
        options: ["mammal", "fish", "reptile", "amphibian"],
        correct: 1,
        explanation: "Sharks are fish. They have gills, live in water, and are cold-blooded."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the main idea of a paragraph?",
        options: ["the first sentence", "what the paragraph is mostly about", "the longest sentence", "the last sentence"],
        correct: 1,
        explanation: "The main idea is what the paragraph is mostly about - the most important point the author wants to make."
      },
      {
        id: 8,
        subject: "History",
        question: "What do we call objects from the past that teach us about history?",
        options: ["antiques", "artifacts", "artworks", "ancient things"],
        correct: 1,
        explanation: "Artifacts are objects made or used by people in the past that help us learn about history."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is 3/4 of 20?",
        options: ["12", "15", "16", "18"],
        correct: 1,
        explanation: "3/4 of 20: First find 1/4 of 20 = 5, then 3/4 = 3 × 5 = 15."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call the path that planets follow around the sun?",
        options: ["rotation", "revolution", "orbit", "cycle"],
        correct: 2,
        explanation: "An orbit is the path that planets follow as they travel around the sun."
      }
    ]
  },
  {
    id: "year3-mixed-review-2",
    name: "Mixed Review 2",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "If a book costs $8.50 and you pay with a $10 note, how much change should you get?",
        options: ["$1.50", "$2.50", "$1.60", "$2.60"],
        correct: 0,
        explanation: "$10.00 - $8.50 = $1.50. Subtract the cost from the amount paid to find the change."
      },
      {
        id: 2,
        subject: "English",
        question: "Which word is a synonym for 'big'?",
        options: ["small", "large", "little", "tiny"],
        correct: 1,
        explanation: "A synonym is a word that means the same thing. 'Large' means the same as 'big'."
      },
      {
        id: 3,
        subject: "Science",
        question: "What happens to water when it freezes?",
        options: ["it becomes gas", "it becomes solid", "it disappears", "it becomes warmer"],
        correct: 1,
        explanation: "When water freezes, it changes from liquid to solid (ice). This happens at 0°C."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What do we call the imaginary line that divides Earth into northern and southern halves?",
        options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"],
        correct: 1,
        explanation: "The Equator is the imaginary line around the middle of Earth that divides it into Northern and Southern hemispheres."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is the next number in this pattern: 4, 8, 12, 16, ___?",
        options: ["18", "20", "24", "32"],
        correct: 1,
        explanation: "The pattern increases by 4 each time: 4, 8, 12, 16, 20. These are multiples of 4."
      },
      {
        id: 6,
        subject: "English",
        question: "In the sentence 'The quick brown fox jumps', which word is an adverb?",
        options: ["quick", "brown", "fox", "there is no adverb"],
        correct: 3,
        explanation: "There is no adverb in this sentence. 'Quick' and 'brown' are adjectives describing the fox."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which part of the eye controls how much light enters?",
        options: ["pupil", "lens", "retina", "cornea"],
        correct: 0,
        explanation: "The pupil is the black circle in the center of your eye that gets bigger or smaller to control light."
      },
      {
        id: 8,
        subject: "History",
        question: "What was the main reason the First Fleet came to Australia?",
        options: ["to explore", "to find gold", "to establish a convict settlement", "to trade with Aboriginal people"],
        correct: 2,
        explanation: "The British sent the First Fleet to establish a penal colony for convicts because British prisons were overcrowded."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "How many degrees are in a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        correct: 1,
        explanation: "A right angle is exactly 90 degrees. It looks like the corner of a square."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call animals that are active during the day?",
        options: ["nocturnal", "diurnal", "hibernating", "migrating"],
        correct: 1,
        explanation: "Diurnal animals are active during the day and sleep at night. Most humans are diurnal."
      }
    ]
  },
  {
    id: "year3-challenge-quiz",
    name: "Challenge Quiz",
    year: "3",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "A farmer has 144 eggs. He puts them into boxes of 12. How many boxes does he need?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "144 ÷ 12 = 12. The farmer needs 12 boxes to hold all 144 eggs."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence uses the correct form of 'there', 'their', or 'they're'?",
        options: ["There going to the park.", "Their going to the park.", "They're going to the park.", "There going to they're park."],
        correct: 2,
        explanation: "'They're' is the contraction for 'they are'. The sentence means 'They are going to the park'."
      },
      {
        id: 3,
        subject: "Science",
        question: "Why do we see lightning before we hear thunder?",
        options: ["Light travels faster than sound", "Sound travels faster than light", "They happen at different times", "Lightning is closer than thunder"],
        correct: 0,
        explanation: "Light travels much faster than sound, so we see lightning almost instantly but hear thunder seconds later."
      },
      {
        id: 4,
        subject: "Geography",
        question: "Which Australian city would be experiencing summer when London is experiencing winter?",
        options: ["All Australian cities", "Only northern cities", "Only southern cities", "No Australian cities"],
        correct: 0,
        explanation: "All Australian cities experience summer when London has winter because Australia is in the Southern Hemisphere."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "If it takes 3 hours to drive 180 km, what is the average speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correct: 1,
        explanation: "Speed = distance ÷ time. 180 km ÷ 3 hours = 60 km/h."
      },
      {
        id: 6,
        subject: "Science",
        question: "What would happen to the food chain if all the producers (plants) disappeared?",
        options: ["Only carnivores would survive", "The whole food chain would collapse", "Herbivores would become carnivores", "Nothing would change"],
        correct: 1,
        explanation: "Producers (plants) are the foundation of all food chains. Without them, herbivores would die, then carnivores would follow."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the collective noun for a group of fish?",
        options: ["pack", "herd", "school", "flock"],
        correct: 2,
        explanation: "A group of fish is called a 'school'. Different animals have different collective nouns."
      },
      {
        id: 8,
        subject: "History",
        question: "How did the discovery of gold change Australia in the 1850s?",
        options: ["Nothing changed", "Population increased rapidly", "Only mining towns were built", "People left Australia"],
        correct: 1,
        explanation: "The gold rushes brought hundreds of thousands of people to Australia, dramatically increasing the population and economy."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is the area of a triangle with a base of 8 cm and height of 6 cm?",
        options: ["24 cm²", "48 cm²", "14 cm²", "28 cm²"],
        correct: 0,
        explanation: "Area of triangle = (base × height) ÷ 2 = (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²."
      },
      {
        id: 10,
        subject: "Science",
        question: "Which simple machine is found in a pair of scissors?",
        options: ["wheel and axle", "lever", "pulley", "inclined plane"],
        correct: 1,
        explanation: "Scissors are a type of lever. The fulcrum is where the blades cross, and force is applied to the handles."
      },
      {
        id: 11,
        subject: "English",
        question: "What type of text would have a contents page, index, and glossary?",
        options: ["story book", "poem", "information book", "diary"],
        correct: 2,
        explanation: "Information books (non-fiction) have contents pages, indexes, and glossaries to help readers find specific information."
      },
      {
        id: 12,
        subject: "Geography",
        question: "Why is it important to protect the Great Barrier Reef?",
        options: ["It looks pretty", "It's a unique ecosystem with many species", "It's good for swimming", "It's made of gold"],
        correct: 1,
        explanation: "The Great Barrier Reef is home to thousands of unique marine species and is an important ecosystem that needs protection."
      },
      {
        id: 13,
        subject: "Mathematics",
        question: "If 1/4 of a class of 28 students are absent, how many students are present?",
        options: ["7", "14", "21", "25"],
        correct: 2,
        explanation: "1/4 of 28 = 7 students absent. So 28 - 7 = 21 students are present."
      }
    ]
  }
];