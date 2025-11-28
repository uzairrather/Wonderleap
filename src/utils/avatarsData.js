export const avatars = [
  // Farm Animals
  { id: 'dog', name: 'Dog', emoji: '🐶', category: 'farm', order: 1 },
  { id: 'cat', name: 'Cat', emoji: '🐱', category: 'farm', order: 2 },
  { id: 'horse', name: 'Horse', emoji: '🐴', category: 'farm', order: 3 },
  { id: 'cow', name: 'Cow', emoji: '🐮', category: 'farm', order: 4 },
  { id: 'pig', name: 'Pig', emoji: '🐷', category: 'farm', order: 5 },
  { id: 'sheep', name: 'Sheep', emoji: '🐑', category: 'farm', order: 6 },
  { id: 'goat', name: 'Goat', emoji: '🐐', category: 'farm', order: 7 },
  { id: 'chicken', name: 'Chicken', emoji: '🐔', category: 'farm', order: 8 },
  { id: 'duck', name: 'Duck', emoji: '🦆', category: 'farm', order: 9 },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', category: 'farm', order: 10 },
  
  // Small Pets
  { id: 'mouse', name: 'Mouse', emoji: '🐭', category: 'pets', order: 11 },
  { id: 'rat', name: 'Rat', emoji: '🐀', category: 'pets', order: 12 },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', category: 'pets', order: 13 },
  { id: 'guinea-pig', name: 'Guinea Pig', emoji: '🦔', category: 'pets', order: 14 },
  { id: 'goldfish', name: 'Goldfish', emoji: '🐠', category: 'pets', order: 15 },
  { id: 'parrot', name: 'Parrot', emoji: '🦜', category: 'pets', order: 16 },
  { id: 'frog', name: 'Frog', emoji: '🐸', category: 'pets', order: 17 },
  { id: 'turtle', name: 'Turtle', emoji: '🐢', category: 'pets', order: 18 },
  { id: 'snake', name: 'Snake', emoji: '🐍', category: 'pets', order: 19 },
  { id: 'lizard', name: 'Lizard', emoji: '🦎', category: 'pets', order: 20 },
  
  // Wild Animals
  { id: 'elephant', name: 'Elephant', emoji: '🐘', category: 'wild', order: 21 },
  { id: 'lion', name: 'Lion', emoji: '🦁', category: 'wild', order: 22 },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', category: 'wild', order: 23 },
  { id: 'bear', name: 'Bear', emoji: '🐻', category: 'wild', order: 24 },
  { id: 'monkey', name: 'Monkey', emoji: '🐵', category: 'wild', order: 25 },
  { id: 'gorilla', name: 'Gorilla', emoji: '🦍', category: 'wild', order: 26 },
  { id: 'zebra', name: 'Zebra', emoji: '🦓', category: 'wild', order: 27 },
  { id: 'giraffe', name: 'Giraffe', emoji: '🦒', category: 'wild', order: 28 },
  { id: 'kangaroo', name: 'Kangaroo', emoji: '🦘', category: 'wild', order: 29 },
  { id: 'panda', name: 'Panda', emoji: '🐼', category: 'wild', order: 30 },
  
  // Sea Creatures
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', category: 'sea', order: 31 },
  { id: 'whale', name: 'Whale', emoji: '🐋', category: 'sea', order: 32 },
  { id: 'shark', name: 'Shark', emoji: '🦈', category: 'sea', order: 33 },
  { id: 'octopus', name: 'Octopus', emoji: '🐙', category: 'sea', order: 34 },
  { id: 'crab', name: 'Crab', emoji: '🦀', category: 'sea', order: 35 },
  { id: 'lobster', name: 'Lobster', emoji: '🦞', category: 'sea', order: 36 },
  { id: 'starfish', name: 'Starfish', emoji: '⭐', category: 'sea', order: 37 },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', category: 'sea', order: 38 },
  { id: 'seal', name: 'Seal', emoji: '🦭', category: 'sea', order: 39 },
  { id: 'polar-bear', name: 'Polar Bear', emoji: '🐻‍❄️', category: 'sea', order: 40 },
  
  // Birds & Insects
  { id: 'owl', name: 'Owl', emoji: '🦉', category: 'birds', order: 41 },
  { id: 'eagle', name: 'Eagle', emoji: '🦅', category: 'birds', order: 42 },
  { id: 'flamingo', name: 'Flamingo', emoji: '🦩', category: 'birds', order: 43 },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', category: 'birds', order: 44 },
  { id: 'butterfly', name: 'Butterfly', emoji: '🦋', category: 'insects', order: 45 },
  { id: 'bee', name: 'Bee', emoji: '🐝', category: 'insects', order: 46 },
  { id: 'ladybug', name: 'Ladybug', emoji: '🐞', category: 'insects', order: 47 },
  { id: 'ant', name: 'Ant', emoji: '🐜', category: 'insects', order: 48 },
  { id: 'spider', name: 'Spider', emoji: '🕷️', category: 'insects', order: 49 },
  { id: 'snail', name: 'Snail', emoji: '🐌', category: 'insects', order: 50 }
];

export const getAvatarsByCategory = (category) => {
  return avatars.filter(a => a.category === category);
};

export const getAvatarById = (id) => {
  return avatars.find(a => a.id === id);
};

export default avatars;
// ```

// ---

// ## 📊 **UPDATED PROJECT STATUS WITH AVATAR SYSTEM:**
// ```
// ┌───────────────────────────────────────────┐
// │  WONDERLEAP - COMPLETE STATUS UPDATE      │
// ├───────────────────────────────────────────┤
// │                                           │
// │  ✅ Frontend (Original)        100%       │
// │  ████████████████████████████████         │
// │                                           │
// │  ❌ Avatar System (NEW)          0%       │
// │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         │
// │  - 3 new components needed                │
// │  - Avatar data file needed                │
// │  - Backend avatar validation              │
// │                                           │
// │  ❌ Backend Core                 0%       │
// │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         │
// │                                           │
// │  ❌ CMS System                   0%       │
// │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         │
// │                                           │
// ├───────────────────────────────────────────┤
// │  OVERALL: 30% Complete                    │
// │  ██████████░░░░░░░░░░░░░░░░░░░            │
// └───────────────────────────────────────────┘