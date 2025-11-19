// All 7 Career Zones with 3 Missions each
export const zonesData = [
  {
    id: 1,
    name: 'STEM & Future Tech Lab',
    emoji: '🔬',
    description: 'Explore science, technology, engineering, and mathematics through hands-on experiments and digital innovation.',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-500',
    missions: [
      {
        id: 1,
        title: 'Fix the Classroom Lights',
        description: 'Learn about electrical circuits by helping repair the school lights.',
        status: 'live',
        duration: '20 mins',
        skills: ['Problem Solving', 'Electrical Safety', 'Critical Thinking'],
        keyStage: 'KS2',
        releaseDate: '2024-09-01'
      },
      {
        id: 2,
        title: 'Code Your First Game',
        description: 'Create a simple game using block-based programming.',
        status: 'live',
        duration: '25 mins',
        skills: ['Coding', 'Logic', 'Creativity'],
        keyStage: 'KS2',
        releaseDate: '2024-10-01'
      },
      {
        id: 3,
        title: 'Robot Rescue Mission',
        description: 'Program a robot to navigate obstacles and save the day.',
        status: 'coming-soon',
        duration: '30 mins',
        skills: ['Robotics', 'Programming', 'Teamwork'],
        keyStage: 'KS2',
        releaseDate: '2025-01-15'
      }
    ]
  },
  {
    id: 2,
    name: 'Creative & Performance Studio',
    emoji: '🎭',
    description: 'Unleash your creativity through art, music, drama, and performance.',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-500',
    missions: [
      {
        id: 4,
        title: 'Design Your Dream Stage',
        description: 'Create a stage design for a school performance.',
        status: 'live',
        duration: '25 mins',
        skills: ['Design', 'Creativity', 'Planning'],
        keyStage: 'KS2',
        releaseDate: '2024-09-15'
      },
      {
        id: 5,
        title: 'Compose a Theme Song',
        description: 'Create music using digital instruments and sounds.',
        status: 'live',
        duration: '20 mins',
        skills: ['Music', 'Digital Literacy', 'Expression'],
        keyStage: 'KS2',
        releaseDate: '2024-10-15'
      },
      {
        id: 6,
        title: 'Direct Your Own Play',
        description: 'Plan and direct a short dramatic performance.',
        status: 'coming-soon',
        duration: '30 mins',
        skills: ['Leadership', 'Communication', 'Drama'],
        keyStage: 'KS2',
        releaseDate: '2025-02-01'
      }
    ]
  },
  {
    id: 3,
    name: 'Makers & Builders Workshop',
    emoji: '🔨',
    description: 'Design, build, and create with hands-on construction and engineering challenges.',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-500',
    missions: [
      {
        id: 7,
        title: 'Build a Bridge',
        description: 'Engineer a strong bridge using different materials.',
        status: 'live',
        duration: '25 mins',
        skills: ['Engineering', 'Design', 'Testing'],
        keyStage: 'KS2',
        releaseDate: '2024-09-20'
      },
      {
        id: 8,
        title: 'Design a Treehouse',
        description: 'Plan and design the perfect treehouse with blueprints.',
        status: 'coming-soon',
        duration: '30 mins',
        skills: ['Architecture', 'Planning', 'Creativity'],
        keyStage: 'KS2',
        releaseDate: '2025-01-20'
      },
      {
        id: 9,
        title: 'Fix the Playground',
        description: 'Repair playground equipment and learn about maintenance.',
        status: 'coming-soon',
        duration: '20 mins',
        skills: ['Problem Solving', 'Safety', 'Practical Skills'],
        keyStage: 'KS2',
        releaseDate: '2025-03-01'
      }
    ]
  },
  {
    id: 4,
    name: 'Nature & Environment Explorers',
    emoji: '🌿',
    description: 'Discover careers in environmental science, conservation, and sustainable living.',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-500',
    missions: [
      {
        id: 10,
        title: 'Save the Rainforest',
        description: 'Learn about conservation and protect endangered habitats.',
        status: 'live',
        duration: '25 mins',
        skills: ['Environmental Science', 'Conservation', 'Research'],
        keyStage: 'KS2',
        releaseDate: '2024-10-01'
      },
      {
        id: 11,
        title: 'Garden Detective',
        description: 'Identify plants and learn about ecosystems in your garden.',
        status: 'coming-soon',
        duration: '20 mins',
        skills: ['Biology', 'Observation', 'Classification'],
        keyStage: 'KS1',
        releaseDate: '2025-02-15'
      },
      {
        id: 12,
        title: 'Climate Change Heroes',
        description: 'Understand climate change and take action to help the planet.',
        status: 'coming-soon',
        duration: '30 mins',
        skills: ['Climate Science', 'Problem Solving', 'Action Planning'],
        keyStage: 'KS2',
        releaseDate: '2025-03-15'
      }
    ]
  },
  {
    id: 5,
    name: 'Health & Care Heroes Hub',
    emoji: '🏥',
    description: 'Explore healthcare careers from doctors to mental health professionals.',
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-500',
    missions: [
      {
        id: 13,
        title: 'First Aid Champion',
        description: 'Learn basic first aid skills to help in emergencies.',
        status: 'live',
        duration: '20 mins',
        skills: ['First Aid', 'Safety', 'Care'],
        keyStage: 'KS2',
        releaseDate: '2024-09-25'
      },
      {
        id: 14,
        title: 'Dental Detective',
        description: 'Discover how dentists keep teeth healthy and strong.',
        status: 'live',
        duration: '15 mins',
        skills: ['Health Education', 'Care', 'Communication'],
        keyStage: 'KS1',
        releaseDate: '2024-10-20'
      },
      {
        id: 15,
        title: 'Hospital Hero',
        description: 'Explore different roles in a hospital and how they help patients.',
        status: 'coming-soon',
        duration: '25 mins',
        skills: ['Healthcare', 'Teamwork', 'Empathy'],
        keyStage: 'KS2',
        releaseDate: '2025-02-20'
      }
    ]
  },
  {
    id: 6,
    name: 'Community & Service Champions',
    emoji: '👮',
    description: 'Learn about careers that keep communities safe and thriving.',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-500',
    missions: [
      {
        id: 16,
        title: 'Police Officer for a Day',
        description: 'Learn how police officers keep the community safe.',
        status: 'live',
        duration: '20 mins',
        skills: ['Safety', 'Problem Solving', 'Community'],
        keyStage: 'KS2',
        releaseDate: '2024-10-05'
      },
      {
        id: 17,
        title: 'Firefighter Challenge',
        description: 'Experience a day in the life of a firefighter.',
        status: 'coming-soon',
        duration: '25 mins',
        skills: ['Bravery', 'Teamwork', 'Physical Fitness'],
        keyStage: 'KS2',
        releaseDate: '2025-01-25'
      },
      {
        id: 18,
        title: 'Community Helper',
        description: 'Discover how social workers help families and communities.',
        status: 'coming-soon',
        duration: '20 mins',
        skills: ['Empathy', 'Communication', 'Problem Solving'],
        keyStage: 'KS2',
        releaseDate: '2025-03-10'
      }
    ]
  },
  {
    id: 7,
    name: 'Business & Enterprise Village',
    emoji: '💼',
    description: 'Start your own business and learn about entrepreneurship and finance.',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-500',
    missions: [
      {
        id: 19,
        title: 'Start Your Own Shop',
        description: 'Set up a business, price products, and serve customers.',
        status: 'live',
        duration: '25 mins',
        skills: ['Business', 'Math', 'Customer Service'],
        keyStage: 'KS2',
        releaseDate: '2024-10-10'
      },
      {
        id: 20,
        title: 'Design a Product',
        description: 'Invent a new product and create a marketing plan.',
        status: 'coming-soon',
        duration: '30 mins',
        skills: ['Innovation', 'Design', 'Marketing'],
        keyStage: 'KS2',
        releaseDate: '2025-02-01'
      },
      {
        id: 21,
        title: 'Money Management Master',
        description: 'Learn to budget, save, and make smart money decisions.',
        status: 'coming-soon',
        duration: '20 mins',
        skills: ['Financial Literacy', 'Math', 'Planning'],
        keyStage: 'KS2',
        releaseDate: '2025-03-20'
      }
    ]
  }
];