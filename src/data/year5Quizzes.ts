import { Quiz } from "@/types/quiz";

export const year5Quizzes: Quiz[] = [
  {
    id: "year5-english-literature",
    name: "English Language & Literature",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "What is the main purpose of a persuasive text?",
        options: ["to entertain", "to inform", "to convince someone of your opinion", "to tell a story"],
        correct: 2,
        explanation: "Persuasive texts aim to convince readers to agree with the writer's opinion or take a particular action."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence contains a complex sentence structure?",
        options: ["The dog barked.", "I went to school and then came home.", "Although it was raining, we went outside.", "She likes pizza."],
        correct: 2,
        explanation: "A complex sentence has an independent clause and a dependent clause. 'Although it was raining' is dependent on 'we went outside'."
      },
      {
        id: 3,
        subject: "English",
        question: "What is hyperbole?",
        options: ["A comparison using 'like' or 'as'", "Giving human qualities to objects", "Extreme exaggeration for effect", "Words that sound the same"],
        correct: 2,
        explanation: "Hyperbole is deliberate exaggeration for dramatic effect, like 'I'm so hungry I could eat a horse'."
      },
      {
        id: 4,
        subject: "English",
        question: "Which word is the abstract noun?",
        options: ["happiness", "tree", "car", "book"],
        correct: 0,
        explanation: "Abstract nouns name things you cannot touch or see, like emotions, ideas, or qualities. 'Happiness' is an abstract noun."
      },
      {
        id: 5,
        subject: "English",
        question: "What is the difference between 'affect' and 'effect'?",
        options: ["They mean the same thing", "'Affect' is a verb, 'effect' is a noun", "'Effect' is a verb, 'affect' is a noun", "There is no difference"],
        correct: 1,
        explanation: "'Affect' is usually a verb meaning to influence something. 'Effect' is usually a noun meaning the result of something."
      },
      {
        id: 6,
        subject: "English",
        question: "Which sentence uses the passive voice?",
        options: ["The teacher marked the tests.", "The tests were marked by the teacher.", "The teacher is marking tests.", "The teacher will mark the tests."],
        correct: 1,
        explanation: "Passive voice occurs when the subject receives the action rather than performing it. 'The tests were marked' is passive."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the climax of a story?",
        options: ["The beginning", "The most exciting or important part", "The ending", "The introduction of characters"],
        correct: 1,
        explanation: "The climax is the turning point or most exciting moment in a story where the main conflict reaches its peak."
      },
      {
        id: 8,
        subject: "English",
        question: "Which technique is used in: 'The classroom was a zoo'?",
        options: ["simile", "metaphor", "personification", "alliteration"],
        correct: 1,
        explanation: "This is a metaphor because it directly compares the classroom to a zoo without using 'like' or 'as'."
      },
      {
        id: 9,
        subject: "English",
        question: "What is a synonym for 'enormous'?",
        options: ["tiny", "huge", "average", "narrow"],
        correct: 1,
        explanation: "A synonym has the same or similar meaning. 'Huge' means the same as 'enormous' - very large."
      },
      {
        id: 10,
        subject: "English",
        question: "Which sentence shows correct use of apostrophes?",
        options: ["The childrens' toys", "The children's toys", "The childrens toys", "The children's toy's"],
        correct: 1,
        explanation: "'Children' is already plural, so we add 's to show possession: 'children's toys'."
      },
      {
        id: 11,
        subject: "English",
        question: "What is onomatopoeia?",
        options: ["Repeated beginning sounds", "Words that sound like their meaning", "Comparing two things", "Exaggerating for effect"],
        correct: 1,
        explanation: "Onomatopoeia are words that imitate sounds, like 'buzz', 'crash', 'sizzle', or 'bang'."
      },
      {
        id: 12,
        subject: "English",
        question: "Which text type would include a thesis statement?",
        options: ["narrative", "persuasive essay", "poem", "recipe"],
        correct: 1,
        explanation: "Persuasive essays include thesis statements that clearly state the writer's main argument or position."
      },
      {
        id: 13,
        subject: "English",
        question: "What is the purpose of using dialogue in a story?",
        options: ["To make it longer", "To show character personality and advance plot", "To confuse readers", "To use quotation marks"],
        correct: 1,
        explanation: "Dialogue reveals character personalities, relationships, and helps move the story forward by showing rather than telling."
      },
      {
        id: 14,
        subject: "English",
        question: "Which word is a collective noun?",
        options: ["dogs", "pack", "running", "quickly"],
        correct: 1,
        explanation: "A collective noun names a group of things or people. 'Pack' refers to a group of dogs or wolves."
      }
    ]
  },
  {
    id: "year5-number-algebra",
    name: "Number & Algebra",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 16 × 25?",
        options: ["400", "350", "450", "300"],
        correct: 0,
        explanation: "16 × 25 = 400. You can think of it as 16 × 25 = 4 × 4 × 25 = 4 × 100 = 400."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 7.5 + 2.8?",
        options: ["9.3", "10.3", "9.13", "10.13"],
        correct: 1,
        explanation: "7.5 + 2.8 = 10.3. Line up the decimal points: 7.5 + 2.8 = 10.3."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What is 3/4 × 2/3?",
        options: ["6/12", "5/7", "6/7", "5/12"],
        correct: 0,
        explanation: "3/4 × 2/3 = (3×2)/(4×3) = 6/12 = 1/2. Multiply numerators together and denominators together."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "What is 40% of 150?",
        options: ["40", "60", "80", "100"],
        correct: 1,
        explanation: "40% of 150 = 0.40 × 150 = 60. You can also think: 40% = 40/100 = 2/5, so 2/5 × 150 = 60."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "If n + 15 = 32, what is the value of n?",
        options: ["47", "17", "15", "32"],
        correct: 1,
        explanation: "n + 15 = 32, so n = 32 - 15 = 17. Check: 17 + 15 = 32 ✓"
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What is the lowest common multiple (LCM) of 6 and 8?",
        options: ["14", "48", "24", "12"],
        correct: 2,
        explanation: "Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The lowest common multiple is 24."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "What is 2³ × 3²?",
        options: ["36", "72", "108", "24"],
        correct: 1,
        explanation: "2³ = 2×2×2 = 8, and 3² = 3×3 = 9. So 2³ × 3² = 8 × 9 = 72."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "Which fraction is in its simplest form?",
        options: ["6/9", "4/6", "3/5", "8/12"],
        correct: 2,
        explanation: "3/5 cannot be simplified further because 3 and 5 have no common factors other than 1."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is 4.62 rounded to one decimal place?",
        options: ["4.6", "4.7", "5.0", "4.0"],
        correct: 0,
        explanation: "Look at the second decimal place (2). Since 2 < 5, round down: 4.62 rounds to 4.6."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "If a recipe serves 4 people and uses 3 cups of flour, how much flour is needed for 6 people?",
        options: ["4 cups", "4.5 cups", "5 cups", "6 cups"],
        correct: 1,
        explanation: "6 ÷ 4 = 1.5 times as many people. So 3 × 1.5 = 4.5 cups of flour needed."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "What is the greatest common factor (GCF) of 24 and 36?",
        options: ["6", "12", "24", "4"],
        correct: 1,
        explanation: "Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The greatest common factor is 12."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "What is 5/8 as a decimal?",
        options: ["0.58", "0.625", "0.85", "0.65"],
        correct: 1,
        explanation: "5/8 = 5 ÷ 8 = 0.625. You can also think: 5/8 = 625/1000 = 0.625."
      },
      {
        id: 13,
        subject: "Mathematics",
        question: "In the number 573,642, what is the value of the digit 7?",
        options: ["7", "70", "700", "70,000"],
        correct: 3,
        explanation: "In 573,642, the 7 is in the ten-thousands place, so its value is 70,000."
      }
    ]
  },
  {
    id: "year5-measurement-geometry",
    name: "Measurement & Geometry",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is the volume of a rectangular prism with length 6cm, width 4cm, and height 3cm?",
        options: ["13 cm³", "72 cm³", "48 cm³", "26 cm³"],
        correct: 1,
        explanation: "Volume = length × width × height = 6 × 4 × 3 = 72 cm³."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "How many degrees are in the interior angles of a triangle combined?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        explanation: "The sum of all interior angles in any triangle is always 180°."
      },
      {
        id: 3,
        subject: "Mathematics",
        question: "What is the circumference of a circle with radius 5cm? (Use π ≈ 3.14)",
        options: ["15.7 cm", "31.4 cm", "78.5 cm", "25 cm"],
        correct: 1,
        explanation: "Circumference = 2πr = 2 × 3.14 × 5 = 31.4 cm."
      },
      {
        id: 4,
        subject: "Mathematics",
        question: "If it's 3:45 PM and a meeting lasts 2 hours 20 minutes, what time does it end?",
        options: ["5:65 PM", "6:05 PM", "6:15 PM", "5:25 PM"],
        correct: 1,
        explanation: "3:45 PM + 2 hours 20 minutes = 5:65 PM = 6:05 PM (since 65 minutes = 1 hour 5 minutes)."
      },
      {
        id: 5,
        subject: "Mathematics",
        question: "What is the area of a triangle with base 8cm and height 6cm?",
        options: ["48 cm²", "24 cm²", "14 cm²", "28 cm²"],
        correct: 1,
        explanation: "Area of triangle = (base × height) ÷ 2 = (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm²."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "How many centimeters are in 2.7 meters?",
        options: ["27 cm", "270 cm", "2,700 cm", "0.27 cm"],
        correct: 1,
        explanation: "1 meter = 100 cm, so 2.7 meters = 2.7 × 100 = 270 cm."
      },
      {
        id: 7,
        subject: "Mathematics",
        question: "What type of triangle has all sides of different lengths?",
        options: ["equilateral", "isosceles", "scalene", "right-angled"],
        correct: 2,
        explanation: "A scalene triangle has all sides of different lengths and all angles of different sizes."
      },
      {
        id: 8,
        subject: "Mathematics",
        question: "What is the area of a circle with radius 4cm? (Use π ≈ 3.14)",
        options: ["12.56 cm²", "25.12 cm²", "50.24 cm²", "6.28 cm²"],
        correct: 2,
        explanation: "Area of circle = πr² = 3.14 × 4² = 3.14 × 16 = 50.24 cm²."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "How many vertices does a pentagonal prism have?",
        options: ["7", "10", "12", "15"],
        correct: 1,
        explanation: "A pentagonal prism has 5 vertices on top pentagon and 5 vertices on bottom pentagon = 10 vertices total."
      },
      {
        id: 10,
        subject: "Mathematics",
        question: "What is 3.5 kilograms in grams?",
        options: ["35 g", "350 g", "3,500 g", "35,000 g"],
        correct: 2,
        explanation: "1 kg = 1,000 g, so 3.5 kg = 3.5 × 1,000 = 3,500 g."
      },
      {
        id: 11,
        subject: "Mathematics",
        question: "Which quadrilateral has exactly one pair of parallel sides?",
        options: ["rectangle", "rhombus", "trapezium", "square"],
        correct: 2,
        explanation: "A trapezium (trapezoid) has exactly one pair of parallel sides. Other quadrilaterals have 0 or 2 pairs."
      },
      {
        id: 12,
        subject: "Mathematics",
        question: "What is the perimeter of a regular hexagon with sides of 7cm?",
        options: ["42 cm", "49 cm", "35 cm", "21 cm"],
        correct: 0,
        explanation: "A regular hexagon has 6 equal sides, so perimeter = 6 × 7 = 42 cm."
      },
      {
        id: 13,
        subject: "Mathematics",
        question: "How many faces does a triangular pyramid have?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "A triangular pyramid has 1 triangular base and 3 triangular faces = 4 faces total."
      }
    ]
  },
  {
    id: "year5-living-world",
    name: "Science - Living World",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What is the primary function of chloroplasts in plant cells?",
        options: ["to store water", "to conduct photosynthesis", "to provide structure", "to control cell activities"],
        correct: 1,
        explanation: "Chloroplasts contain chlorophyll and are responsible for photosynthesis - converting sunlight into food energy."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which organ system is responsible for transporting oxygen around the body?",
        options: ["digestive system", "respiratory system", "circulatory system", "nervous system"],
        correct: 2,
        explanation: "The circulatory system (heart, blood, blood vessels) transports oxygen, nutrients, and waste around the body."
      },
      {
        id: 3,
        subject: "Science",
        question: "What is adaptation in living things?",
        options: ["changing color only", "features that help survival in an environment", "becoming bigger", "learning new skills"],
        correct: 1,
        explanation: "Adaptations are physical or behavioral features that help organisms survive and reproduce in their environment."
      },
      {
        id: 4,
        subject: "Science",
        question: "Which type of reproduction produces offspring identical to the parent?",
        options: ["sexual reproduction", "asexual reproduction", "cross-pollination", "fertilization"],
        correct: 1,
        explanation: "Asexual reproduction involves only one parent and produces genetically identical offspring (clones)."
      },
      {
        id: 5,
        subject: "Science",
        question: "What is the main function of roots in plants?",
        options: ["photosynthesis", "reproduction", "absorbing water and nutrients", "producing flowers"],
        correct: 2,
        explanation: "Roots absorb water and nutrients from soil, anchor the plant, and sometimes store food."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which characteristic distinguishes mammals from other animals?",
        options: ["laying eggs", "having scales", "producing milk for offspring", "living in water"],
        correct: 2,
        explanation: "All mammals produce milk to feed their young, even though they may differ in other ways."
      },
      {
        id: 7,
        subject: "Science",
        question: "What happens during cellular respiration?",
        options: ["cells make food", "cells release energy from food", "cells divide", "cells grow bigger"],
        correct: 1,
        explanation: "Cellular respiration is when cells break down glucose (food) to release energy for life processes."
      },
      {
        id: 8,
        subject: "Science",
        question: "Which factor most affects the rate of photosynthesis?",
        options: ["soil color", "plant age", "light intensity", "plant height"],
        correct: 2,
        explanation: "Light intensity is crucial for photosynthesis - more light generally means faster photosynthesis (up to a point)."
      },
      {
        id: 9,
        subject: "Science",
        question: "What is a predator-prey relationship?",
        options: ["animals living together peacefully", "one animal hunting another for food", "animals competing for the same food", "animals helping each other"],
        correct: 1,
        explanation: "In a predator-prey relationship, the predator hunts and eats the prey, forming an important part of food webs."
      },
      {
        id: 10,
        subject: "Science",
        question: "How do plants respond to environmental stimuli?",
        options: ["they don't respond", "through tropisms like growing toward light", "by making sounds", "by changing color only"],
        correct: 1,
        explanation: "Plants show tropisms - growth responses to stimuli like light (phototropism) or gravity (geotropism)."
      },
      {
        id: 11,
        subject: "Science",
        question: "What is the role of decomposers in nutrient cycling?",
        options: ["they eat live plants", "they break down dead matter and recycle nutrients", "they produce oxygen", "they pollinate flowers"],
        correct: 1,
        explanation: "Decomposers like bacteria and fungi break down dead organisms, returning nutrients to the soil for plants to use."
      },
      {
        id: 12,
        subject: "Science",
        question: "Which structure controls what enters and leaves a cell?",
        options: ["nucleus", "cell wall", "cell membrane", "cytoplasm"],
        correct: 2,
        explanation: "The cell membrane is selectively permeable, controlling what substances can enter or leave the cell."
      },
      {
        id: 13,
        subject: "Science",
        question: "What is the difference between inherited and learned characteristics?",
        options: ["there is no difference", "inherited come from parents, learned come from experience", "learned come from parents, inherited from experience", "both are the same"],
        correct: 1,
        explanation: "Inherited characteristics (like eye color) come from parents' genes. Learned characteristics (like language) come from experience."
      }
    ]
  },
  {
    id: "year5-physical-world",
    name: "Science - Physical World",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Science",
        question: "What is the difference between mass and weight?",
        options: ["they are exactly the same", "mass is constant, weight depends on gravity", "weight is constant, mass depends on gravity", "mass is always heavier than weight"],
        correct: 1,
        explanation: "Mass is the amount of matter in an object (constant everywhere). Weight is the force of gravity on that mass (varies with gravity)."
      },
      {
        id: 2,
        subject: "Science",
        question: "Which type of energy is stored in a stretched rubber band?",
        options: ["kinetic energy", "thermal energy", "elastic potential energy", "chemical energy"],
        correct: 2,
        explanation: "A stretched rubber band stores elastic potential energy, which converts to kinetic energy when released."
      },
      {
        id: 3,
        subject: "Science",
        question: "What causes the phases of the moon?",
        options: ["Earth's shadow on the moon", "the moon changing shape", "different amounts of the sunlit moon visible from Earth", "clouds covering the moon"],
        correct: 2,
        explanation: "Moon phases occur because we see different portions of the moon's sunlit side as it orbits Earth."
      },
      {
        id: 4,
        subject: "Science",
        question: "How does sound travel through different materials?",
        options: ["fastest through gases, slowest through solids", "same speed through all materials", "fastest through solids, slowest through gases", "only travels through air"],
        correct: 2,
        explanation: "Sound travels fastest through solids (particles close together), slower through liquids, slowest through gases."
      },
      {
        id: 5,
        subject: "Science",
        question: "What is the relationship between force, mass, and acceleration?",
        options: ["Force = Mass + Acceleration", "Force = Mass × Acceleration", "Force = Mass ÷ Acceleration", "Force = Mass - Acceleration"],
        correct: 1,
        explanation: "Newton's Second Law: Force = Mass × Acceleration (F = ma). Greater force or less mass means greater acceleration."
      },
      {
        id: 6,
        subject: "Science",
        question: "Which property determines whether a material will sink or float?",
        options: ["size", "color", "density", "temperature"],
        correct: 2,
        explanation: "Density determines floating or sinking. Objects less dense than water float; objects more dense sink."
      },
      {
        id: 7,
        subject: "Science",
        question: "What happens to particles when a substance changes from liquid to gas?",
        options: ["particles get bigger", "particles move faster and spread out", "particles disappear", "particles move slower"],
        correct: 1,
        explanation: "When liquids become gases, particles gain energy, move much faster, and spread far apart."
      },
      {
        id: 8,
        subject: "Science",
        question: "Why do objects fall at the same rate in a vacuum?",
        options: ["because they have the same mass", "because there's no air resistance", "because gravity doesn't work in a vacuum", "they don't fall at the same rate"],
        correct: 1,
        explanation: "In a vacuum, there's no air resistance, so all objects fall at the same rate regardless of mass or shape."
      },
      {
        id: 9,
        subject: "Science",
        question: "Which type of circuit component limits the flow of electric current?",
        options: ["battery", "wire", "resistor", "switch"],
        correct: 2,
        explanation: "Resistors are designed to limit or control the flow of electric current in a circuit."
      },
      {
        id: 10,
        subject: "Science",
        question: "What causes tides on Earth?",
        options: ["wind patterns", "gravitational pull of the moon", "Earth's rotation only", "temperature changes"],
        correct: 1,
        explanation: "Tides are primarily caused by the gravitational pull of the moon (and to a lesser extent, the sun) on Earth's oceans."
      },
      {
        id: 11,
        subject: "Science",
        question: "How does a lever make work easier?",
        options: ["by changing the direction of force only", "by multiplying force or changing direction", "by reducing the work needed", "levers don't make work easier"],
        correct: 1,
        explanation: "Levers can multiply the force applied, change the direction of force, or both, making tasks easier to perform."
      },
      {
        id: 12,
        subject: "Science",
        question: "What is refraction of light?",
        options: ["light bouncing off surfaces", "light bending when moving between materials", "light getting brighter", "light disappearing"],
        correct: 1,
        explanation: "Refraction occurs when light changes speed and bends as it passes from one transparent material to another."
      },
      {
        id: 13,
        subject: "Science",
        question: "Which energy transformation occurs in a solar panel?",
        options: ["light to chemical", "light to electrical", "chemical to electrical", "thermal to electrical"],
        correct: 1,
        explanation: "Solar panels convert light energy (photons) directly into electrical energy through the photovoltaic effect."
      }
    ]
  },
  {
    id: "year5-australian-history",
    name: "Australian History",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "History",
        question: "How did the discovery of gold change Australian society in the 1850s?",
        options: ["only men came to Australia", "population became more diverse and democratic", "nothing significant changed", "only the economy changed"],
        correct: 1,
        explanation: "Gold rushes brought people from many countries, leading to cultural diversity and demands for democratic rights and reforms."
      },
      {
        id: 2,
        subject: "History",
        question: "What was the main impact of the Eureka Stockade on Australian democracy?",
        options: ["it had no impact", "it led to voting rights and representation reforms", "it stopped mining", "it created new states"],
        correct: 1,
        explanation: "The Eureka Stockade rebellion led to mining license reforms and helped establish the principle of 'no taxation without representation'."
      },
      {
        id: 3,
        subject: "History",
        question: "How did federation in 1901 change Australia?",
        options: ["six colonies became one nation", "Australia became independent from Britain", "new cities were built", "the gold rushes began"],
        correct: 0,
        explanation: "Federation united six separate colonies into the Commonwealth of Australia, though it remained part of the British Empire."
      },
      {
        id: 4,
        subject: "History",
        question: "What was the significance of the White Australia Policy?",
        options: ["it encouraged immigration from all countries", "it restricted non-European immigration", "it was about clothing colors", "it only affected Aboriginal people"],
        correct: 1,
        explanation: "The White Australia Policy restricted immigration from non-European countries from 1901 until the 1970s."
      },
      {
        id: 5,
        subject: "History",
        question: "How did World War I affect Australian society?",
        options: ["it had no effect on Australia", "it created a sense of national identity", "it only affected soldiers", "it ended immigration"],
        correct: 1,
        explanation: "WWI, especially the ANZAC legend, helped create a distinct Australian national identity separate from Britain."
      },
      {
        id: 6,
        subject: "History",
        question: "What was the impact of the Great Depression on Australia?",
        options: ["everyone became wealthy", "high unemployment and social hardship", "more people immigrated", "new industries started"],
        correct: 1,
        explanation: "The Great Depression (1929-1939) caused widespread unemployment, poverty, and social difficulties across Australia."
      },
      {
        id: 7,
        subject: "History",
        question: "How did post-WWII immigration change Australia?",
        options: ["no changes occurred", "Australia became more multicultural", "only British people immigrated", "immigration stopped completely"],
        correct: 1,
        explanation: "Post-WWII immigration brought people from Europe and later Asia, making Australia increasingly multicultural."
      },
      {
        id: 8,
        subject: "History",
        question: "What was the purpose of the Stolen Generations policy?",
        options: ["to help Aboriginal families", "to assimilate Aboriginal children into European culture", "to provide education only", "to protect Aboriginal culture"],
        correct: 1,
        explanation: "The Stolen Generations policy aimed to assimilate Aboriginal children by removing them from their families and culture."
      },
      {
        id: 9,
        subject: "History",
        question: "How did women's roles change during World War II?",
        options: ["they stayed exactly the same", "women entered the workforce in large numbers", "women only worked in farms", "women stopped working"],
        correct: 1,
        explanation: "WWII saw women take on many jobs previously done by men, including in factories, offices, and services."
      },
      {
        id: 10,
        subject: "History",
        question: "What was significant about the 1967 referendum?",
        options: ["it gave women the vote", "it recognized Aboriginal people in the Constitution", "it created new states", "it ended World War II"],
        correct: 1,
        explanation: "The 1967 referendum allowed Aboriginal people to be counted in the census and gave the federal government power to make laws for them."
      },
      {
        id: 11,
        subject: "History",
        question: "How did the convict system shape early Australian society?",
        options: ["it had no lasting impact", "it created distinct social classes and work ethics", "it only affected criminals", "it made everyone equal"],
        correct: 1,
        explanation: "The convict system created social hierarchies between free settlers, emancipists (ex-convicts), and convicts, influencing Australian society."
      },
      {
        id: 12,
        subject: "History",
        question: "What role did Aboriginal people play in early European exploration?",
        options: ["they avoided all contact", "they served as guides and provided local knowledge", "they only caused problems", "they weren't involved"],
        correct: 1,
        explanation: "Many Aboriginal people assisted European explorers as guides, sharing their knowledge of water sources, food, and travel routes."
      },
      {
        id: 13,
        subject: "History",
        question: "How did the development of the railways change Australia?",
        options: ["it connected colonies and boosted trade", "it had no significant impact", "it only helped mining", "it caused more problems than benefits"],
        correct: 0,
        explanation: "Railways connected remote areas to cities, boosted trade and agriculture, and helped unify the colonies economically."
      },
      {
        id: 14,
        subject: "History",
        question: "What was the impact of the 1970s multicultural policies?",
        options: ["they restricted immigration", "they officially recognized Australia's cultural diversity", "they only affected Europeans", "they had no real impact"],
        correct: 1,
        explanation: "Multiculturalism policies in the 1970s officially recognized and celebrated Australia's growing cultural diversity."
      }
    ]
  },
  {
    id: "year5-australian-geography",
    name: "Australian Geography",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Geography",
        question: "How do Australia's latitude and longitude affect its climate?",
        options: ["they don't affect climate", "latitude affects temperature, longitude affects rainfall", "they only affect seasons", "they make everywhere the same"],
        correct: 1,
        explanation: "Latitude affects temperature (closer to equator = warmer). Longitude affects when seasonal weather patterns arrive."
      },
      {
        id: 2,
        subject: "Geography",
        question: "What causes the different climate zones across Australia?",
        options: ["only distance from the ocean", "latitude, altitude, distance from ocean, and landforms", "only the time zone", "only the size of the continent"],
        correct: 1,
        explanation: "Australia's climate zones result from multiple factors: latitude (north-south position), altitude, distance from ocean, and mountain barriers."
      },
      {
        id: 3,
        subject: "Geography",
        question: "Why is most of Australia's population concentrated along the coast?",
        options: ["government laws require it", "coastal areas have better climate and water access", "the interior is too mountainous", "it's closer to other countries"],
        correct: 1,
        explanation: "Coastal areas offer milder climate, reliable water supply, better farming conditions, and access to trade routes."
      },
      {
        id: 4,
        subject: "Geography",
        question: "How do the Great Dividing Range affect Australia's rainfall patterns?",
        options: ["they increase rainfall everywhere", "they create a rain shadow effect on the western side", "they have no effect on rainfall", "they only affect temperature"],
        correct: 1,
        explanation: "The Great Dividing Range blocks moisture-laden winds, creating high rainfall on the east side and dry conditions on the west side."
      },
      {
        id: 5,
        subject: "Geography",
        question: "What is the relationship between Australia's landforms and population distribution?",
        options: ["people live everywhere equally", "most people avoid mountains and deserts, preferring plains and coasts", "people only live in mountains", "landforms don't affect where people live"],
        correct: 1,
        explanation: "People concentrate in coastal plains and river valleys, avoiding harsh desert areas and difficult mountain terrain."
      },
      {
        id: 6,
        subject: "Geography",
        question: "How does Australia's position in the Southern Hemisphere affect its seasons?",
        options: ["seasons are the same as the Northern Hemisphere", "seasons are opposite to the Northern Hemisphere", "Australia has no seasons", "seasons change every month"],
        correct: 1,
        explanation: "Australia's seasons are opposite to the Northern Hemisphere: December-February is summer, June-August is winter."
      },
      {
        id: 7,
        subject: "Geography",
        question: "What natural hazards are common in northern Australia?",
        options: ["earthquakes and volcanoes", "tropical cyclones and flooding", "blizzards and ice storms", "tsunamis only"],
        correct: 1,
        explanation: "Northern Australia's tropical climate brings cyclones (November-April) and seasonal flooding during the wet season."
      },
      {
        id: 8,
        subject: "Geography",
        question: "How does Australia's size affect its time zones?",
        options: ["Australia has one time zone", "Australia spans three main time zones", "size doesn't affect time zones", "Australia changes time zones monthly"],
        correct: 1,
        explanation: "Australia's width of about 4,000 km spans three main time zones: Eastern, Central, and Western Australian time."
      },
      {
        id: 9,
        subject: "Geography",
        question: "What role do Australia's rivers play in agriculture?",
        options: ["they're not important for agriculture", "they provide irrigation water for farming", "they only provide transportation", "they prevent farming"],
        correct: 1,
        explanation: "Rivers like the Murray-Darling system provide crucial irrigation water for Australia's agricultural regions."
      },
      {
        id: 10,
        subject: "Geography",
        question: "How do ocean currents affect Australia's coastal climate?",
        options: ["they have no effect", "warm currents make coasts warmer, cold currents make them cooler", "they only affect the tides", "they make all coasts the same temperature"],
        correct: 1,
        explanation: "The warm East Australian Current warms the east coast, while cooler currents affect the west and south coasts."
      },
      {
        id: 11,
        subject: "Geography",
        question: "What is the significance of Uluru in Australian geography?",
        options: ["it's just a big rock", "it's a significant landform and cultural site", "it's the highest point in Australia", "it's near the coast"],
        correct: 1,
        explanation: "Uluru is a massive monolith in central Australia, significant both geologically and as a sacred Aboriginal site."
      },
      {
        id: 12,
        subject: "Geography",
        question: "How does altitude affect climate in Australian mountain regions?",
        options: ["altitude has no effect", "higher altitude means cooler temperatures", "altitude only affects rainfall", "higher altitude is always warmer"],
        correct: 1,
        explanation: "Temperature decreases with altitude. Australian alpine regions can have snow while nearby lowlands are warm."
      },
      {
        id: 13,
        subject: "Geography",
        question: "What environmental challenges does Australia's arid interior face?",
        options: ["too much rainfall", "water scarcity and extreme temperatures", "constant flooding", "too many people living there"],
        correct: 1,
        explanation: "Australia's interior faces challenges of very low rainfall, extreme heat, water scarcity, and harsh living conditions."
      }
    ]
  },
  {
    id: "year5-mixed-review-1",
    name: "Mixed Review 1",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "What is 25% of 240?",
        options: ["50", "60", "70", "80"],
        correct: 1,
        explanation: "25% of 240 = 0.25 × 240 = 60. You can also think: 25% = 1/4, so 240 ÷ 4 = 60."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence is written in passive voice?",
        options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing the mouse.", "The cat will chase the mouse."],
        correct: 1,
        explanation: "In passive voice, the subject receives the action. 'The mouse was chased by the cat' is passive."
      },
      {
        id: 3,
        subject: "Science",
        question: "Which organ system breaks down food for the body to use?",
        options: ["circulatory", "respiratory", "digestive", "nervous"],
        correct: 2,
        explanation: "The digestive system breaks down food into nutrients that the body can absorb and use for energy and growth."
      },
      {
        id: 4,
        subject: "History",
        question: "What was the main result of Australian federation in 1901?",
        options: ["Australia became independent from Britain", "Six colonies became one nation", "Women gained the right to vote", "The gold rushes began"],
        correct: 1,
        explanation: "Federation united the six Australian colonies into the Commonwealth of Australia, creating one nation."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Why do coastal areas generally have milder climates than inland areas?",
        options: ["they're closer to other countries", "oceans moderate temperature changes", "they get more sunlight", "they're at higher altitudes"],
        correct: 1,
        explanation: "Large bodies of water heat up and cool down slowly, moderating temperature extremes in coastal areas."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "What is the area of a parallelogram with base 12 cm and height 7 cm?",
        options: ["19 cm²", "38 cm²", "84 cm²", "42 cm²"],
        correct: 2,
        explanation: "Area of parallelogram = base × height = 12 × 7 = 84 cm²."
      },
      {
        id: 7,
        subject: "English",
        question: "What is the purpose of a topic sentence in a paragraph?",
        options: ["to end the paragraph", "to introduce the main idea", "to provide examples", "to connect to other paragraphs"],
        correct: 1,
        explanation: "A topic sentence introduces the main idea that the rest of the paragraph will develop and support."
      },
      {
        id: 8,
        subject: "Science",
        question: "What type of energy does food provide to living things?",
        options: ["light energy", "sound energy", "chemical energy", "electrical energy"],
        correct: 2,
        explanation: "Food contains chemical energy that organisms convert into other forms of energy for life processes."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "If 3x = 27, what is the value of x?",
        options: ["6", "9", "24", "81"],
        correct: 1,
        explanation: "3x = 27, so x = 27 ÷ 3 = 9. Check: 3 × 9 = 27 ✓"
      },
      {
        id: 10,
        subject: "History",
        question: "How did the gold rushes change Australia's population?",
        options: ["population decreased", "only men immigrated", "population increased rapidly and became more diverse", "nothing changed"],
        correct: 2,
        explanation: "Gold rushes brought hundreds of thousands of people from around the world, rapidly increasing and diversifying Australia's population."
      }
    ]
  },
  {
    id: "year5-mixed-review-2",
    name: "Mixed Review 2",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "English",
        question: "Which literary technique is used in 'The wind whispered through the trees'?",
        options: ["simile", "metaphor", "personification", "alliteration"],
        correct: 2,
        explanation: "Personification gives human qualities (whispering) to non-human things (wind)."
      },
      {
        id: 2,
        subject: "Mathematics",
        question: "What is 3/5 + 1/4?",
        options: ["4/9", "17/20", "4/20", "12/20"],
        correct: 1,
        explanation: "3/5 + 1/4: Find common denominator (20). 3/5 = 12/20, 1/4 = 5/20. So 12/20 + 5/20 = 17/20."
      },
      {
        id: 3,
        subject: "Science",
        question: "What causes day and night?",
        options: ["Earth orbiting the sun", "Earth rotating on its axis", "the moon blocking sunlight", "clouds covering the sun"],
        correct: 1,
        explanation: "Earth rotates on its axis once every 24 hours, causing different parts to face the sun (day) or face away (night)."
      },
      {
        id: 4,
        subject: "Geography",
        question: "What creates a rain shadow effect?",
        options: ["oceans", "deserts", "mountains", "cities"],
        correct: 2,
        explanation: "Mountains block moisture-laden air, causing rainfall on one side and dry conditions on the other side (rain shadow)."
      },
      {
        id: 5,
        subject: "History",
        question: "What was significant about the Eureka Stockade?",
        options: ["it was where gold was first found", "it was a rebellion that led to democratic reforms", "it was the first Australian city", "it was a type of mining equipment"],
        correct: 1,
        explanation: "The Eureka Stockade was a miners' rebellion in 1854 that led to democratic reforms and voting rights."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "How many milliliters are in 2.5 liters?",
        options: ["25 mL", "250 mL", "2,500 mL", "25,000 mL"],
        correct: 2,
        explanation: "1 liter = 1,000 mL, so 2.5 L = 2.5 × 1,000 = 2,500 mL."
      },
      {
        id: 7,
        subject: "Science",
        question: "Which part of a plant cell contains genetic material?",
        options: ["cell wall", "chloroplast", "nucleus", "vacuole"],
        correct: 2,
        explanation: "The nucleus contains DNA, which carries genetic information and controls cell activities."
      },
      {
        id: 8,
        subject: "English",
        question: "What is an antonym for 'ancient'?",
        options: ["old", "modern", "historical", "past"],
        correct: 1,
        explanation: "An antonym is a word with the opposite meaning. 'Modern' is the opposite of 'ancient'."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "What is the volume of a cube with edges of 5 cm?",
        options: ["15 cm³", "25 cm³", "75 cm³", "125 cm³"],
        correct: 3,
        explanation: "Volume of cube = edge³ = 5³ = 5 × 5 × 5 = 125 cm³."
      },
      {
        id: 10,
        subject: "Science",
        question: "What happens to sound waves when they hit a hard surface?",
        options: ["they disappear", "they get louder", "they reflect back creating echoes", "they change color"],
        correct: 2,
        explanation: "Sound waves reflect off hard surfaces, creating echoes. This is why you hear your voice bounce back in empty rooms."
      }
    ]
  },
  {
    id: "year5-challenge-quiz",
    name: "Challenge Quiz",
    year: "5",
    questions: [
      {
        id: 1,
        subject: "Mathematics",
        question: "A rectangular swimming pool is 25m long, 15m wide, and 2m deep. How many liters of water does it hold?",
        options: ["750 liters", "7,500 liters", "75,000 liters", "750,000 liters"],
        correct: 3,
        explanation: "Volume = 25×15×2 = 750 m³. Since 1 m³ = 1,000 liters, 750 m³ = 750,000 liters."
      },
      {
        id: 2,
        subject: "English",
        question: "Which sentence demonstrates the most sophisticated vocabulary?",
        options: ["The big dog ran fast.", "The enormous canine sprinted rapidly.", "The huge dog moved quickly.", "The large dog ran very fast."],
        correct: 1,
        explanation: "'Enormous canine sprinted rapidly' uses more sophisticated vocabulary: enormous (big), canine (dog), sprinted (ran fast)."
      },
      {
        id: 3,
        subject: "Science",
        question: "How would removing all producers from an ecosystem affect the entire food web?",
        options: ["only herbivores would be affected", "the ecosystem would completely collapse", "carnivores would become stronger", "nothing significant would happen"],
        correct: 1,
        explanation: "Removing all producers (plants) would eliminate the base of all food chains, causing the entire ecosystem to collapse."
      },
      {
        id: 4,
        subject: "History",
        question: "How did the gold rushes contribute to the development of Australian democracy?",
        options: ["they had no political impact", "they led to demands for voting rights and representation", "they only affected mining laws", "they created separate governments"],
        correct: 1,
        explanation: "Gold rushes brought diverse populations who demanded democratic rights, leading to reforms like the secret ballot and expanded voting."
      },
      {
        id: 5,
        subject: "Geography",
        question: "Analyze how Australia's location affects its relationships with other countries.",
        options: ["location doesn't matter", "close to Asia for trade, isolated from Europe/America", "only affects climate", "makes all relationships equal"],
        correct: 1,
        explanation: "Australia's location near Asia facilitates trade and cultural exchange, while distance from Europe/America affects those relationships."
      },
      {
        id: 6,
        subject: "Mathematics",
        question: "If the probability of rain is 3/5, what is the probability it will NOT rain?",
        options: ["2/5", "3/5", "5/3", "1"],
        correct: 0,
        explanation: "Probabilities of opposite events add to 1. If P(rain) = 3/5, then P(no rain) = 1 - 3/5 = 2/5."
      },
      {
        id: 7,
        subject: "Science",
        question: "Compare the energy efficiency of different simple machines in real-world applications.",
        options: ["all simple machines are equally efficient", "efficiency depends on the specific application and conditions", "pulleys are always most efficient", "levers are always least efficient"],
        correct: 1,
        explanation: "Simple machine efficiency depends on factors like friction, load, and specific application. Different machines suit different tasks."
      },
      {
        id: 8,
        subject: "English",
        question: "How does changing from active to passive voice affect the emphasis of a sentence?",
        options: ["it doesn't change anything", "it shifts emphasis from the doer to the receiver of the action", "it makes sentences longer only", "it makes writing more casual"],
        correct: 1,
        explanation: "Passive voice emphasizes what happened to the subject rather than who did it, shifting focus in the sentence."
      },
      {
        id: 9,
        subject: "Mathematics",
        question: "A recipe for 8 people calls for 3.2 kg of flour. How much flour is needed for 15 people?",
        options: ["6 kg", "6.4 kg", "5.8 kg", "7.2 kg"],
        correct: 0,
        explanation: "15 ÷ 8 = 1.875 times as many people. 3.2 × 1.875 = 6 kg of flour needed."
      },
      {
        id: 10,
        subject: "History",
        question: "Evaluate the long-term consequences of the White Australia Policy on modern Australian society.",
        options: ["it had no lasting effects", "it shaped immigration patterns and attitudes for decades", "it only affected the early 1900s", "it immediately made Australia more diverse"],
        correct: 1,
        explanation: "The White Australia Policy significantly shaped Australian immigration and social attitudes, with effects lasting well beyond its official end."
      },
      {
        id: 11,
        subject: "Science",
        question: "How do adaptations demonstrate the relationship between organisms and their environment?",
        options: ["adaptations are random", "adaptations show how organisms change to survive in specific environments", "all organisms have the same adaptations", "adaptations don't relate to environment"],
        correct: 1,
        explanation: "Adaptations are specific features that help organisms survive in particular environments, showing the close relationship between life and habitat."
      },
      {
        id: 12,
        subject: "Geography",
        question: "How do Australia's climate zones influence agricultural production and population distribution?",
        options: ["climate zones don't affect these factors", "different climate zones support different crops and population densities", "all areas are suitable for the same agriculture", "population ignores climate zones"],
        correct: 1,
        explanation: "Different climate zones support different agricultural activities (tropical: sugar cane, temperate: wheat) and influence where people live."
      }
    ]
  }
];