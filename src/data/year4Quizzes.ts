import { Quiz } from "@/types/quiz";

export const year4Quizzes: Quiz[] = [
  {
    id: "year4-english-literature",
    name: "English Language & Literature",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is a simile?",
        options: ["A comparison using 'like' or 'as'", "A word that sounds like its meaning", "Giving human qualities to objects", "An exaggerated statement"],
        correct: 0,
        explanation: "A simile compares two things using 'like' or 'as', such as 'brave as a lion' or 'busy like a bee'."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence contains a metaphor?",
        options: ["She runs like the wind", "Her voice is music to my ears", "The cat was as quiet as a mouse", "He's taller than his brother"],
        correct: 1,
        explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Her voice is music' compares voice to music."
      },
      {
        id: 3,
        subject: "English",
        question: "What is the past tense of 'fly'?",
        options: ["flied", "flew", "flown", "flying"],
        correct: 1,
        explanation: "'Flew' is the past tense of 'fly'. We say 'The bird flew away yesterday'."
      },
      {
        id: 4,
        subject: "English",
        question: "Which word is a homophone of 'there'?",
        options: ["here", "their", "where", "were"],
        correct: 1,
        explanation: "Homophones are words that sound the same but have different meanings. 'Their' sounds like 'there'."
      },
      {
        id: 5,
        subject: "English",
        question: "What does the suffix '-ful' mean in the word 'helpful'?",
        options: ["without", "full of", "before", "again"],
        correct: 1,
        explanation: "The suffix '-ful' means 'full of'. So 'helpful' means 'full of help'."
      },
      {
        id: 6,
        subject: "English",
        question: "Which sentence uses the correct apostrophe?",
        options: ["The dog's bone is buried", "The dogs bone is buried", "The dogs' bone is buried", "The dog's bone's are buried"],
        correct: 0,
        explanation: "When one dog owns something, we use 's after the word. 'The dog's bone' shows the bone belongs to the dog."
      },
      {
        id: 7,
        subject: "English",
        question: "What is personification?",
        options: ["Comparing two things", "Giving human qualities to non-human things", "Using 'like' or 'as'", "Exaggerating for effect"],
        correct: 1,
        explanation: "Personification gives human qualities to non-human things, like 'The wind whispered through the trees'."
      },
      {
        id: 8,
        subject: "English",
        question: "Which type of text would have chapters?",
        options: ["poem", "novel", "recipe", "advertisement"],
        correct: 1,
        explanation: "Novels are long stories divided into chapters to organize the content and make it easier to read."
      },
      {
        id: 9,
        subject: "English",
        question: "What is the main purpose of a conclusion in a story?",
        options: ["to introduce characters", "to create suspense", "to wrap up the story", "to describe the setting"],
        correct: 2,
        explanation: "A conclusion wraps up the story by resolving problems and showing what happens to the characters."
      },
      {
        id: 10,
        subject: "English",
        question: "Which word shows the superlative form?",
        options: ["big", "bigger", "biggest", "more big"],
        correct: 2,
        explanation: "Superlatives compare three or more things. 'Biggest' is the superlative form of 'big'."
      },
      {
        id: 11,
        subject: "English",
        question: "What do we call words that join sentences together?",
        options: ["adjectives", "conjunctions", "adverbs", "prepositions"],
        correct: 1,
        explanation: "Conjunctions like 'and', 'but', 'so', and 'because' join sentences or parts of sentences together."
      },
      {
        id: 12,
        subject: "English",
        question: "In the sentence 'Quickly, the rabbit ran away', what type of word is 'quickly'?",
        options: ["noun", "verb", "adjective", "adverb"],
        correct: 3,
        explanation: "'Quickly' is an adverb because it describes how the rabbit ran. Adverbs often end in '-ly'."
      },
      {
        id: 13,
        subject: "English",
        question: "What is alliteration?",
        options: ["Words that rhyme", "Words that start with the same sound", "Words that mean the same thing", "Words that sound like their meaning"],
        correct: 1,
        explanation: "Alliteration is when words start with the same sound, like 'silly snake slithered slowly'."
      }
    ]
  },
  {
    id: "year4-number-algebra",
    name: "Number & Algebra",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 8 × 12?",
        options: ["84", "96", "104", "112"],
        correct: 1,
        explanation: "8 × 12 = 96. You can think of it as 8 × 10 + 8 × 2 = 80 + 16 = 96."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 156 ÷ 12?",
        options: ["12", "13", "14", "15"],
        correct: 1,
        explanation: "156 ÷ 12 = 13. You can check: 13 × 12 = 156."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What is 3/8 + 2/8?",
        options: ["5/8", "5/16", "6/8", "1"],
        correct: 0,
        explanation: "When adding fractions with the same denominator, add the numerators: 3/8 + 2/8 = 5/8."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What is 4,567 rounded to the nearest thousand?",
        options: ["4,000", "4,500", "5,000", "4,600"],
        correct: 2,
        explanation: "4,567 is closer to 5,000 than 4,000. The hundreds digit (5) is 5 or more, so we round up."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "Which number is a factor of 24?",
        options: ["5", "7", "8", "9"],
        correct: 2,
        explanation: "8 is a factor of 24 because 24 ÷ 8 = 3 with no remainder. 8 × 3 = 24."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What is the value of the digit 7 in 27,834?",
        options: ["7", "70", "700", "7,000"],
        correct: 3,
        explanation: "In 27,834, the 7 is in the thousands place, so its value is 7,000."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "If a pattern starts at 3 and multiplies by 2 each time, what are the first four numbers?",
        options: ["3, 5, 7, 9", "3, 6, 9, 12", "3, 6, 12, 24", "3, 4, 5, 6"],
        correct: 2,
        explanation: "Multiply by 2 each time: 3, 3×2=6, 6×2=12, 12×2=24."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "What is 2/3 of 18?",
        options: ["6", "9", "12", "15"],
        correct: 2,
        explanation: "2/3 of 18: First find 1/3 of 18 = 6, then 2/3 = 2 × 6 = 12."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "Which decimal is equivalent to 3/4?",
        options: ["0.34", "0.43", "0.75", "0.25"],
        correct: 2,
        explanation: "3/4 = 3 ÷ 4 = 0.75. You can also think: 3/4 = 75/100 = 0.75."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "What is the next prime number after 11?",
        options: ["12", "13", "14", "15"],
        correct: 1,
        explanation: "13 is prime because it can only be divided by 1 and itself. 12, 14, and 15 can be divided by other numbers."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "If 6 × n = 48, what is the value of n?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "48 ÷ 6 = 8, so n = 8. Check: 6 × 8 = 48."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "What is 7² (7 squared)?",
        options: ["14", "49", "21", "28"],
        correct: 1,
        explanation: "7² means 7 × 7 = 49. The small 2 tells us to multiply 7 by itself."
      }
    ]
  },
  {
    id: "year4-measurement-geometry",
    name: "Measurement & Geometry",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is the perimeter of a rectangle with length 12 cm and width 8 cm?",
        options: ["20 cm", "40 cm", "96 cm", "32 cm"],
        correct: 1,
        explanation: "Perimeter = 2 × (length + width) = 2 × (12 + 8) = 2 × 20 = 40 cm."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "How many millimeters are in 2.5 centimeters?",
        options: ["25 mm", "250 mm", "2.5 mm", "0.25 mm"],
        correct: 0,
        explanation: "1 cm = 10 mm, so 2.5 cm = 2.5 × 10 = 25 mm."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What type of angle is 135 degrees?",
        options: ["acute", "right", "obtuse", "straight"],
        correct: 2,
        explanation: "135° is obtuse because it's greater than 90° but less than 180°."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "How many edges does a rectangular prism have?",
        options: ["8", "10", "12", "6"],
        correct: 2,
        explanation: "A rectangular prism (like a box) has 12 edges where faces meet."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "If it's 2:45 PM now, what time will it be in 1 hour and 30 minutes?",
        options: ["3:15 PM", "4:15 PM", "4:45 PM", "3:45 PM"],
        correct: 1,
        explanation: "2:45 PM + 1 hour 30 minutes = 4:15 PM. Add the hours and minutes separately."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What is the area of a square with sides of 9 cm?",
        options: ["18 cm²", "36 cm²", "81 cm²", "72 cm²"],
        correct: 2,
        explanation: "Area of square = side × side = 9 × 9 = 81 cm²."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "How many kilograms equal 3,500 grams?",
        options: ["3.5 kg", "35 kg", "0.35 kg", "350 kg"],
        correct: 0,
        explanation: "1 kg = 1,000 g, so 3,500 g = 3,500 ÷ 1,000 = 3.5 kg."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Which shape has all sides equal and all angles equal?",
        options: ["rectangle", "square", "rhombus", "parallelogram"],
        correct: 1,
        explanation: "A square has all sides equal (like a rhombus) and all angles equal to 90° (like a rectangle)."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is the volume of a cube with sides of 4 cm?",
        options: ["12 cm³", "16 cm³", "48 cm³", "64 cm³"],
        correct: 3,
        explanation: "Volume of cube = side³ = 4 × 4 × 4 = 64 cm³."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "How many degrees does the minute hand move in 15 minutes?",
        options: ["15°", "90°", "180°", "360°"],
        correct: 1,
        explanation: "The minute hand moves 360° in 60 minutes, so in 15 minutes it moves 360° ÷ 4 = 90°."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "What is 1.5 liters in milliliters?",
        options: ["15 mL", "150 mL", "1,500 mL", "15,000 mL"],
        correct: 2,
        explanation: "1 L = 1,000 mL, so 1.5 L = 1.5 × 1,000 = 1,500 mL."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "How many lines of symmetry does a regular hexagon have?",
        options: ["3", "4", "6", "12"],
        correct: 2,
        explanation: "A regular hexagon has 6 lines of symmetry - one through each vertex and one through each side's midpoint."
      }
    ]
  },
  {
    id: "year4-living-world",
    name: "Science - Living World",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What is an ecosystem?",
        options: ["Only the animals in an area", "Only the plants in an area", "All living and non-living things in an area", "Only the weather in an area"],
        correct: 2,
        explanation: "An ecosystem includes all living things (plants, animals) and non-living things (water, soil, air) in an area."
      },
      {
        id: 2,
        subject: "Science",
        question: "What is the role of decomposers in an ecosystem?",
        options: ["To eat plants", "To hunt other animals", "To break down dead material", "To make food"],
        correct: 2,
        explanation: "Decomposers like bacteria and fungi break down dead plants and animals, returning nutrients to the soil."
      },
      {
        id: 3,
        subject: "Science",
        question: "Which part of a plant cell gives it structure and protection?",
        options: ["nucleus", "cell membrane", "cell wall", "cytoplasm"],
        correct: 2,
        explanation: "The cell wall is the tough outer layer that gives plant cells their shape and protection."
      },
      {
        id: 4,
        subject: "Science",
        question: "What do we call the process where animals move to find better conditions?",
        options: ["hibernation", "migration", "adaptation", "evolution"],
        correct: 1,
        explanation: "Migration is when animals move from one place to another, usually seasonally, to find food or better conditions."
      },
      {
        id: 5,
        subject: "Science",
        question: "Which type of teeth are best for cutting food?",
        options: ["molars", "incisors", "canines", "premolars"],
        correct: 1,
        explanation: "Incisors are the flat, sharp front teeth that are perfect for cutting food into smaller pieces."
      },
      {
        id: 6,
        subject: "Science",
        question: "What is the main difference between vertebrates and invertebrates?",
        options: ["Size", "Where they live", "Having a backbone", "What they eat"],
        correct: 2,
        explanation: "Vertebrates have a backbone (spine), while invertebrates do not have a backbone."
      },
      {
        id: 7,
        subject: "Science",
        question: "How do plants reproduce?",
        options: ["Only by seeds", "Only by spores", "By seeds, spores, or parts of the plant", "They don't reproduce"],
        correct: 2,
        explanation: "Plants can reproduce through seeds, spores, or vegetative reproduction using parts like runners or bulbs."
      },
      {
        id: 8,
        subject: "Science",
        question: "What is a food chain?",
        options: ["Animals living together", "The path energy takes through organisms", "Animals fighting for food", "Plants growing in order"],
        correct: 1,
        explanation: "A food chain shows how energy and nutrients pass from one organism to another when they eat."
      },
      {
        id: 9,
        subject: "Science",
        question: "Which gas do animals breathe in?",
        options: ["carbon dioxide", "nitrogen", "oxygen", "hydrogen"],
        correct: 2,
        explanation: "Animals breathe in oxygen from the air and breathe out carbon dioxide."
      },
      {
        id: 10,
        subject: "Science",
        question: "What do we call animals that hunt and eat other animals?",
        options: ["herbivores", "predators", "prey", "scavengers"],
        correct: 1,
        explanation: "Predators are animals that hunt and kill other animals (prey) for food."
      },
      {
        id: 11,
        subject: "Science",
        question: "How do most mammals feed their babies?",
        options: ["with insects", "with milk", "with plants", "with meat"],
        correct: 1,
        explanation: "Mammals produce milk to feed their babies. This is one of the defining characteristics of mammals."
      },
      {
        id: 12,
        subject: "Science",
        question: "What adaptation helps desert animals conserve water?",
        options: ["thick fur", "large ears", "efficient kidneys", "long legs"],
        correct: 2,
        explanation: "Desert animals often have very efficient kidneys that help them conserve water by producing concentrated urine."
      },
      {
        id: 13,
        subject: "Science",
        question: "What is pollination?",
        options: ["Plants making food", "Transfer of pollen between flowers", "Plants growing taller", "Animals eating plants"],
        correct: 1,
        explanation: "Pollination is when pollen moves from one flower to another, allowing plants to reproduce and make seeds."
      }
    ]
  },
  {
    id: "year4-physical-world",
    name: "Science - Physical World",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What causes day and night on Earth?",
        options: ["Earth moving around the sun", "Earth rotating on its axis", "The moon blocking sunlight", "Clouds covering the sun"],
        correct: 1,
        explanation: "Day and night are caused by Earth spinning (rotating) on its axis. Different parts face the sun as Earth turns."
      },
      {
        id: 2,
        subject: "Science",
        question: "What type of energy is stored in food?",
        options: ["kinetic energy", "sound energy", "chemical energy", "light energy"],
        correct: 2,
        explanation: "Food contains chemical energy that our bodies can convert into other forms of energy we need to live."
      },
      {
        id: 3,
        subject: "Science",
        question: "Which material is the best insulator?",
        options: ["metal", "wood", "air", "water"],
        correct: 2,
        explanation: "Air is an excellent insulator because it doesn't conduct heat or electricity well. That's why double-glazed windows have air between the panes."
      },
      {
        id: 4,
        subject: "Science",
        question: "What happens to the particles in a gas when it cools down?",
        options: ["They move faster", "They move slower", "They disappear", "They stay the same"],
        correct: 1,
        explanation: "When gas cools, particles move slower and come closer together. This can cause the gas to condense into liquid."
      },
      {
        id: 5,
        subject: "Science",
        question: "What is friction?",
        options: ["A type of energy", "A force that opposes motion", "A form of light", "A type of sound"],
        correct: 1,
        explanation: "Friction is a force that opposes motion when two surfaces rub against each other."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which simple machine is a doorknob?",
        options: ["lever", "pulley", "wheel and axle", "inclined plane"],
        correct: 2,
        explanation: "A doorknob is a wheel and axle. The knob (wheel) turns a rod (axle) that moves the door mechanism."
      },
      {
        id: 7,
        subject: "Science",
        question: "What makes objects appear different colors?",
        options: ["The light they absorb and reflect", "Their temperature", "Their size", "Their weight"],
        correct: 0,
        explanation: "Objects appear colored because they absorb some colors of light and reflect others. We see the reflected colors."
      },
      {
        id: 8,
        subject: "Science",
        question: "What is the water cycle?",
        options: ["Water moving through rivers", "Water moving between Earth and atmosphere", "Water staying in oceans", "Water disappearing"],
        correct: 1,
        explanation: "The water cycle describes how water moves between the Earth's oceans, land, and atmosphere through evaporation and precipitation."
      },
      {
        id: 9,
        subject: "Science",
        question: "Which type of circuit allows electricity to flow?",
        options: ["open circuit", "closed circuit", "broken circuit", "no circuit"],
        correct: 1,
        explanation: "A closed circuit provides a complete path for electricity to flow from the power source through the components and back."
      },
      {
        id: 10,
        subject: "Science",
        question: "What is the difference between mass and weight?",
        options: ["They are the same thing", "Mass changes with gravity, weight doesn't", "Weight changes with gravity, mass doesn't", "Mass is always heavier"],
        correct: 2,
        explanation: "Mass is the amount of matter in an object and stays the same everywhere. Weight depends on gravity and changes on different planets."
      },
      {
        id: 11,
        subject: "Science",
        question: "What causes lightning?",
        options: ["Wind moving fast", "Static electricity in clouds", "Hot air rising", "Rain falling"],
        correct: 1,
        explanation: "Lightning is caused by the buildup of static electricity in storm clouds, which creates a giant electric spark."
      },
      {
        id: 12,
        subject: "Science",
        question: "Which form of energy travels fastest?",
        options: ["sound", "light", "heat", "electricity"],
        correct: 1,
        explanation: "Light travels at the speed of light (300,000 km/s), which is faster than sound, heat, or electricity through wires."
      }
    ]
  },
  {
    id: "year4-australian-history",
    name: "Australian History",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "Why did the British government decide to establish a colony in Australia?",
        options: ["To find gold", "To solve prison overcrowding", "To grow crops", "To trade with Asia"],
        correct: 1,
        explanation: "British prisons were overcrowded, so they decided to send convicts to Australia to establish a new colony."
      },
      {
        id: 2,
        subject: "History",
        question: "What was life like for convicts in early Australia?",
        options: ["Easy and comfortable", "Hard work with strict rules", "Like a holiday", "They could do whatever they wanted"],
        correct: 1,
        explanation: "Convict life was harsh with hard manual labor, strict discipline, and basic living conditions."
      },
      {
        id: 3,
        subject: "History",
        question: "How did the arrival of Europeans affect Aboriginal people?",
        options: ["It had no effect", "It improved their lives", "It disrupted their way of life", "They became friends immediately"],
        correct: 2,
        explanation: "European settlement disrupted Aboriginal peoples' traditional way of life, taking their land and affecting their culture."
      },
      {
        id: 4,
        subject: "History",
        question: "What was the gold rush period in Australia?",
        options: ["1820s-1830s", "1850s-1860s", "1870s-1880s", "1900s-1910s"],
        correct: 1,
        explanation: "The major Australian gold rushes occurred in the 1850s and 1860s, bringing hundreds of thousands of people to Australia."
      },
      {
        id: 5,
        subject: "History",
        question: "How did the gold rush change Australia?",
        options: ["Nothing changed", "Population increased rapidly", "Only men came to Australia", "Cities became smaller"],
        correct: 1,
        explanation: "The gold rush dramatically increased Australia's population and led to the growth of cities and towns."
      },
      {
        id: 6,
        subject: "History",
        question: "What was significant about the Eureka Stockade?",
        options: ["It was a big building", "Miners protested against unfair treatment", "It was where gold was found", "It was a type of fence"],
        correct: 1,
        explanation: "The Eureka Stockade (1854) was a rebellion by miners against government taxes and lack of voting rights."
      },
      {
        id: 7,
        subject: "History",
        question: "What does federation mean for Australia?",
        options: ["Becoming part of Britain", "Six colonies joining to form one nation", "Discovering new land", "Building railways"],
        correct: 1,
        explanation: "Federation in 1901 meant the six separate colonies joined together to become the Commonwealth of Australia."
      },
      {
        id: 8,
        subject: "History",
        question: "Who was Ned Kelly?",
        options: ["A gold miner", "A famous bushranger", "A politician", "A ship captain"],
        correct: 1,
        explanation: "Ned Kelly was Australia's most famous bushranger (outlaw) who became a folk hero despite his criminal activities."
      },
      {
        id: 9,
        subject: "History",
        question: "How did Aboriginal people adapt to European colonization?",
        options: ["They all moved away", "Some worked on stations and missions", "They ignored the Europeans", "They all became farmers"],
        correct: 1,
        explanation: "Some Aboriginal people worked on cattle stations and lived on missions, adapting to survive the changes to their land."
      },
      {
        id: 10,
        subject: "History",
        question: "What was the White Australia Policy?",
        options: ["Only white clothes could be worn", "A policy to limit non-European immigration", "Painting all buildings white", "A policy about sheep farming"],
        correct: 1,
        explanation: "The White Australia Policy restricted immigration from non-European countries from 1901 to the 1970s."
      },
      {
        id: 11,
        subject: "History",
        question: "How did women's lives change during the gold rush?",
        options: ["They stayed exactly the same", "More opportunities but still limited", "They became miners", "They all became wealthy"],
        correct: 1,
        explanation: "The gold rush brought more opportunities for women (running businesses, nursing) but they still faced many restrictions."
      },
      {
        id: 12,
        subject: "History",
        question: "What role did children play in early colonial Australia?",
        options: ["They didn't work", "They worked alongside adults", "They only went to school", "They only played games"],
        correct: 1,
        explanation: "Children in colonial Australia often worked alongside adults, helping with farming, household tasks, and family businesses."
      }
    ]
  },
  {
    id: "year4-australian-geography",
    name: "Australian Geography",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Geography",
        question: "Which climate zone covers most of central Australia?",
        options: ["tropical", "temperate", "arid", "alpine"],
        correct: 2,
        explanation: "Most of central Australia has an arid (desert) climate with very little rainfall and extreme temperatures."
      },
      {
        id: 2,
        subject: "Geography",
        question: "What is the Australian continent's approximate size compared to other continents?",
        options: ["smallest", "second smallest", "medium sized", "largest"],
        correct: 1,
        explanation: "Australia is the smallest continent, but it's the 6th largest country in the world."
      },
      {
        id: 3,
        subject: "Geography",
        question: "Which mountain range runs along Australia's east coast?",
        options: ["Great Dividing Range", "Blue Mountains", "Flinders Ranges", "MacDonnell Ranges"],
        correct: 0,
        explanation: "The Great Dividing Range runs along the entire east coast from Queensland to Victoria."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What percentage of Australia is considered arid or semi-arid?",
        options: ["25%", "50%", "70%", "90%"],
        correct: 2,
        explanation: "About 70% of Australia is arid or semi-arid, meaning it receives very little rainfall."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Which Australian city has the Mediterranean climate?",
        options: ["Darwin", "Sydney", "Melbourne", "Perth"],
        correct: 3,
        explanation: "Perth has a Mediterranean climate with hot, dry summers and mild, wet winters."
      },
      {
        id: 6,
        subject: "Geography",
        question: "What causes Australia's seasonal differences between north and south?",
        options: ["Distance from the ocean", "Elevation differences", "Latitude differences", "Wind patterns"],
        correct: 2,
        explanation: "Australia stretches across many degrees of latitude, causing different seasonal patterns between north and south."
      },
      {
        id: 7,
        subject: "Geography",
        question: "Which Australian landform is sacred to Anangu people?",
        options: ["Kata Tjuta", "Uluru", "Devils Marbles", "Cradle Mountain"],
        correct: 1,
        explanation: "Uluru (Ayers Rock) is sacred to the Anangu people, the traditional owners of the land."
      },
      {
        id: 8,
        subject: "Geography",
        question: "What type of rock formation is the Great Barrier Reef?",
        options: ["volcanic", "sedimentary", "coral", "granite"],
        correct: 2,
        explanation: "The Great Barrier Reef is made of coral, built up over thousands of years by tiny coral polyps."
      },
      {
        id: 9,
        subject: "Geography",
        question: "Which factor most influences where most Australians live?",
        options: ["mountain heights", "desert areas", "coastal access to water", "mining locations"],
        correct: 2,
        explanation: "Most Australians live near the coast where there's access to water, milder climate, and better growing conditions."
      },
      {
        id: 10,
        subject: "Geography",
        question: "What is Australia's longest river?",
        options: ["Murray River", "Darling River", "Murrumbidgee River", "Cooper Creek"],
        correct: 1,
        explanation: "The Darling River is Australia's longest river at 1,472 km, though the Murray is more famous."
      },
      {
        id: 11,
        subject: "Geography",
        question: "Which natural disaster commonly affects northern Australia?",
        options: ["earthquakes", "tsunamis", "cyclones", "volcanic eruptions"],
        correct: 2,
        explanation: "Tropical cyclones commonly affect northern Australia during the wet season (November-April)."
      },
      {
        id: 12,
        subject: "Geography",
        question: "What connects Australia's eastern and western coasts?",
        options: ["Great Ocean Road", "Pacific Highway", "Trans-Australian Railway", "Murray River"],
        correct: 2,
        explanation: "The Trans-Australian Railway crosses the continent from east to west, connecting Sydney to Perth."
      },
      {
        id: 13,
        subject: "Geography",
        question: "Which state has both tropical and temperate climate zones?",
        options: ["Queensland", "New South Wales", "Western Australia", "All of these"],
        correct: 3,
        explanation: "Queensland, NSW, and WA all have both tropical (north) and temperate (south) climate zones due to their large size."
      }
    ]
  },
  {
    id: "year4-mixed-review-1",
    name: "Mixed Review 1",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "144 ÷ 12 = 12. Think: how many 12s make 144? The answer is 12."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence contains an adjective?",
        options: ["The dog barked loudly", "She ran quickly", "The red car stopped", "They arrived yesterday"],
        correct: 2,
        explanation: "'Red' is an adjective because it describes what the car looks like."
      },
      {
        id: 3,
        subject: "Science",
        question: "What gas do plants release during photosynthesis?",
        options: ["carbon dioxide", "nitrogen", "oxygen", "hydrogen"],
        correct: 2,
        explanation: "Plants release oxygen during photosynthesis, which is what animals need to breathe."
      },
      {
        id: 4,
        subject: "History",
        question: "What was the main reason for the gold rushes in Australia?",
        options: ["People wanted adventure", "Discovery of gold attracted fortune seekers", "The government asked people to come", "There were no jobs elsewhere"],
        correct: 1,
        explanation: "The discovery of gold attracted thousands of people hoping to become wealthy quickly."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is the area of a rectangle 6 cm long and 4 cm wide?",
        options: ["10 cm²", "20 cm²", "24 cm²", "26 cm²"],
        correct: 2,
        explanation: "Area = length × width = 6 × 4 = 24 cm²."
      },
      {
        id: 6,
        subject: "Geography",
        question: "Why do most Australians live near the coast?",
        options: ["It's warmer", "There's more water and milder climate", "The government said they had to", "It's closer to other countries"],
        correct: 1,
        explanation: "Coastal areas have better access to water, milder climate, and more suitable conditions for agriculture and cities."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the plural of 'sheep'?",
        options: ["sheeps", "sheepes", "sheep", "sheepies"],
        correct: 2,
        explanation: "'Sheep' is the same for both singular and plural. One sheep, many sheep."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which simple machine would help you lift a heavy rock?",
        options: ["wheel", "lever", "screw", "wedge"],
        correct: 1,
        explanation: "A lever uses a fulcrum to help you apply force more effectively to lift heavy objects."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "Which fraction is larger: 3/4 or 2/3?",
        options: ["3/4", "2/3", "they're equal", "can't tell"],
        correct: 0,
        explanation: "3/4 = 0.75 and 2/3 = 0.67, so 3/4 is larger."
      },
      {
        id: 10,
        subject: "History",
        question: "How did Aboriginal people pass on their knowledge before European arrival?",
        options: ["through books", "through oral storytelling", "through writing", "through newspapers"],
        correct: 1,
        explanation: "Aboriginal people had a rich oral tradition, passing knowledge through stories, songs, and ceremonies."
      }
    ]
  },
  {
    id: "year4-mixed-review-2",
    name: "Mixed Review 2",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What does the prefix 're-' mean in 'rewrite'?",
        options: ["before", "again", "not", "with"],
        correct: 1,
        explanation: "The prefix 're-' means 'again'. So 'rewrite' means to write again."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "How many seconds are in 3 minutes?",
        options: ["30", "60", "120", "180"],
        correct: 3,
        explanation: "3 minutes × 60 seconds per minute = 180 seconds."
      },
      {
        id: 3,
        subject: "Science",
        question: "What happens when you heat a solid?",
        options: ["It becomes harder", "It might melt into liquid", "It disappears", "Nothing happens"],
        correct: 1,
        explanation: "When solids are heated enough, they melt and change into liquids."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What causes seasons in Australia?",
        options: ["Distance from the sun", "Earth's tilt and orbit around the sun", "Ocean currents", "Wind patterns"],
        correct: 1,
        explanation: "Seasons are caused by Earth's tilt as it orbits the sun, affecting how much sunlight different areas receive."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is 5² + 3²?",
        options: ["64", "34", "28", "16"],
        correct: 1,
        explanation: "5² + 3² = (5×5) + (3×3) = 25 + 9 = 34."
      },
      {
        id: 6,
        subject: "English",
        question: "Which word is a compound word?",
        options: ["running", "unhappy", "basketball", "wonderful"],
        correct: 2,
        explanation: "'Basketball' is made from two words: 'basket' + 'ball' = basketball."
      },
      {
        id: 7,
        subject: "Science",
        question: "What do we call the movement of water between Earth and the atmosphere?",
        options: ["water flow", "water cycle", "water movement", "water change"],
        correct: 1,
        explanation: "The water cycle describes how water moves between oceans, land, and atmosphere through evaporation and precipitation."
      },
      {
        id: 8,
        subject: "History",
        question: "What was significant about Australian federation in 1901?",
        options: ["Australia became independent from Britain", "Six colonies joined to form one nation", "Gold was discovered", "The first railway was built"],
        correct: 1,
        explanation: "Federation created the Commonwealth of Australia when six separate colonies united as one nation."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "If a train travels 240 km in 4 hours, what is its average speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correct: 1,
        explanation: "Speed = distance ÷ time = 240 km ÷ 4 hours = 60 km/h."
      },
      {
        id: 10,
        subject: "Science",
        question: "Why do we see the moon's phases?",
        options: ["Earth's shadow blocks the moon", "The moon moves behind clouds", "We see different amounts of the sunlit side", "The moon changes shape"],
        correct: 2,
        explanation: "Moon phases occur because we see different amounts of the moon's sunlit side as it orbits Earth."
      }
    ]
  },
  {
    id: "year4-challenge-quiz",
    name: "Challenge Quiz",
    year: "4",
    uploader: "Admin",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "A rectangular garden is 15 meters long and 8 meters wide. What is both its area and perimeter?",
        options: ["Area: 120m², Perimeter: 46m", "Area: 23m², Perimeter: 120m", "Area: 46m², Perimeter: 23m", "Area: 60m², Perimeter: 30m"],
        correct: 0,
        explanation: "Area = 15 × 8 = 120 m². Perimeter = 2(15 + 8) = 2 × 23 = 46 m."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence uses correct subject-verb agreement?",
        options: ["The group of students are here", "The group of students is here", "The groups of student is here", "The groups of students are here"],
        correct: 1,
        explanation: "The subject 'group' is singular, so it takes the singular verb 'is'. Don't be confused by 'students' which is just part of a prepositional phrase."
      },
      {
        id: 3,
        subject: "Science",
        question: "In a food web, what would happen if all the primary consumers disappeared?",
        options: ["Nothing would change", "Producers would decrease and secondary consumers would increase", "Producers would increase and secondary consumers would decrease", "Everything would stay balanced"],
        correct: 2,
        explanation: "Without primary consumers eating them, producers (plants) would increase. Secondary consumers would decrease due to lack of food."
      },
      {
        id: 4,
        subject: "History",
        question: "How did the California and Victorian gold rushes influence each other?",
        options: ["They had no connection", "Miners moved from California to Victoria", "They happened at different times", "Only Australians could mine in Australia"],
        correct: 1,
        explanation: "Many experienced miners from the California Gold Rush (1849) came to Victoria when gold was discovered there in 1851."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Why does Darwin have a different climate pattern compared to Melbourne?",
        options: ["Darwin is higher above sea level", "Darwin is much closer to the equator", "Melbourne gets more rain", "Darwin is surrounded by desert"],
        correct: 1,
        explanation: "Darwin is in the tropics (closer to the equator) so it has wet and dry seasons, while Melbourne has four distinct seasons."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "If 3/8 of a pizza was eaten, what fraction of the pizza remains?",
        options: ["3/8", "5/8", "1/8", "6/8"],
        correct: 1,
        explanation: "If 3/8 was eaten, then 8/8 - 3/8 = 5/8 remains. The whole pizza is 8/8."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which type of energy conversion happens in a wind turbine?",
        options: ["chemical to electrical", "kinetic to electrical", "heat to electrical", "light to electrical"],
        correct: 1,
        explanation: "Wind turbines convert kinetic energy (moving air) into electrical energy through the rotating blades and generator."
      },
      {
        id: 8,
        subject: "English",
        question: "What is the effect of using alliteration in poetry?",
        options: ["It makes poems longer", "It creates rhythm and emphasis", "It makes poems rhyme", "It tells a story"],
        correct: 1,
        explanation: "Alliteration (repeated initial sounds) creates rhythm, emphasis, and makes text more memorable and musical."
      },
      {
        id: 9,
        subject: "History",
        question: "What long-term effects did the gold rush have on Australian society?",
        options: ["Only economic changes", "Increased multiculturalism and democratic reforms", "Decreased population", "No lasting effects"],
        correct: 1,
        explanation: "The gold rush brought people from many countries (increasing multiculturalism) and led to demands for democratic rights and reforms."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "A factory produces 1,440 toys per day. How many toys does it produce per hour if it operates 24 hours a day?",
        options: ["60 toys", "120 toys", "144 toys", "240 toys"],
        correct: 0,
        explanation: "1,440 toys ÷ 24 hours = 60 toys per hour."
      },
      {
        id: 11,
        subject: "Science",
        question: "How does the water cycle connect to weather patterns?",
        options: ["It doesn't connect", "Evaporation and condensation create clouds and precipitation", "It only affects oceans", "It makes all weather the same"],
        correct: 1,
        explanation: "The water cycle drives weather: evaporation creates water vapor, which condenses into clouds and falls as precipitation."
      },
      {
        id: 12,
        subject: "Geography",
        question: "How do Australia's landforms affect its climate patterns?",
        options: ["They don't affect climate", "Mountains create rain shadows, deserts are hot and dry", "All landforms have the same climate", "Only coasts affect climate"],
        correct: 1,
        explanation: "Mountains block rain clouds creating dry areas behind them (rain shadows), while deserts create hot, dry conditions."
      }
    ]
  }
];