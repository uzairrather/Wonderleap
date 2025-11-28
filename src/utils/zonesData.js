// Complete WonderLeap Zones and Missions Data with Career Integration

export const zonesData = [
  {
    id: 'stem-tech',
    name: 'STEM & Future Tech Lab',
    emoji: '🔬',
    description: 'Explore science, technology, engineering, and mathematics through hands-on missions',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
    skills_focus: ['problem-solving', 'digital-literacy', 'critical-thinking', 'creativity']
  },
  {
    id: 'creative-performance',
    name: 'Creative & Performance Studio',
    emoji: '🎭',
    description: 'Express yourself through art, music, drama, and creative projects',
    color: 'pink',
    gradient: 'from-pink-400 to-pink-600',
    skills_focus: ['creativity', 'communication', 'teamwork', 'resilience']
  },
  {
    id: 'makers-builders',
    name: 'Makers & Builders Workshop',
    emoji: '🔨',
    description: 'Design and build amazing things with your hands and mind',
    color: 'orange',
    gradient: 'from-orange-400 to-orange-600',
    skills_focus: ['problem-solving', 'creativity', 'attention-to-detail', 'organization']
  },
  {
    id: 'nature-environment',
    name: 'Nature & Environment Explorers',
    emoji: '🌿',
    description: 'Discover the natural world and learn how to protect our planet',
    color: 'green',
    gradient: 'from-green-400 to-green-600',
    skills_focus: ['critical-thinking', 'resilience', 'teamwork', 'organization']
  },
  {
    id: 'health-care',
    name: 'Health & Care Heroes Hub',
    emoji: '🏥',
    description: 'Learn how to help people stay healthy and feel better',
    color: 'red',
    gradient: 'from-red-400 to-red-600',
    skills_focus: ['communication', 'attention-to-detail', 'teamwork', 'resilience']
  },
  {
    id: 'community-service',
    name: 'Community & Service Champions',
    emoji: '👮',
    description: 'Discover careers that help and protect our communities',
    color: 'indigo',
    gradient: 'from-indigo-400 to-indigo-600',
    skills_focus: ['leadership', 'communication', 'teamwork', 'resilience']
  },
  {
    id: 'business-enterprise',
    name: 'Business & Enterprise Village',
    emoji: '💼',
    description: 'Learn about running businesses and creating amazing products',
    color: 'purple',
    gradient: 'from-purple-400 to-purple-600',
    skills_focus: ['creativity', 'organization', 'leadership', 'critical-thinking']
  }
];

export const missions = {
  'stem-tech': [
    {
      id: 'fix-lights',
      title: 'Fix the Classroom Lights',
      description: 'Learn about electrical circuits by fixing broken classroom lights',
      status: 'live',
      duration: '20 mins',
      skills: ['Problem Solving', 'Technical Skills', 'Safety'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'attention-to-detail', 'critical-thinking'],
      career_ids: ['electrician', 'robotics-engineer'],
      career_tags: ['electrical', 'engineering', 'technical', 'STEM'],
      standards_alignment: {
        gatsby: [1, 4],
        ni_skills_barometer: ['digital', 'technical'],
        curriculum: 'KS2 Science - Electricity'
      }
    },
    {
      id: 'code-game',
      title: 'Code Your First Game',
      description: 'Create a simple computer game using basic coding concepts',
      status: 'live',
      duration: '25 mins',
      skills: ['Coding', 'Logic', 'Creativity'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'creativity', 'digital-literacy', 'critical-thinking'],
      career_ids: ['software-developer'],
      career_tags: ['coding', 'programming', 'game-design', 'STEM'],
      standards_alignment: {
        gatsby: [1, 2, 4],
        ni_skills_barometer: ['digital', 'creative'],
        curriculum: 'KS2 Computing'
      }
    },
    {
      id: 'robot-rescue',
      title: 'Robot Rescue Mission',
      description: 'Program a robot to navigate obstacles and rescue someone in need',
      status: 'coming-soon',
      duration: '30 mins',
      skills: ['Programming', 'Problem Solving', 'Engineering'],
      keyStage: 'KS2',
      releaseDate: '2025-01-15',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'digital-literacy', 'critical-thinking', 'resilience'],
      career_ids: ['robotics-engineer', 'software-developer'],
      career_tags: ['robotics', 'programming', 'engineering', 'STEM'],
      standards_alignment: {
        gatsby: [1, 2, 4],
        ni_skills_barometer: ['digital', 'technical'],
        curriculum: 'KS2 Design & Technology'
      }
    }
  ],
  'creative-performance': [
    {
      id: 'design-stage',
      title: 'Design Your Dream Stage',
      description: 'Create an amazing stage set for a school play',
      status: 'live',
      duration: '25 mins',
      skills: ['Creativity', 'Design', 'Planning'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['creativity', 'organization', 'communication'],
      career_ids: ['stage-designer', 'theater-director'],
      career_tags: ['theater', 'design', 'creative', 'performing-arts'],
      standards_alignment: {
        gatsby: [2, 3],
        ni_skills_barometer: ['creative'],
        curriculum: 'KS2 Art & Design'
      }
    },
    {
      id: 'compose-song',
      title: 'Compose Your Theme Song',
      description: 'Write and record your own musical theme song',
      status: 'live',
      duration: '20 mins',
      skills: ['Music', 'Creativity', 'Expression'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['creativity', 'resilience'],
      career_ids: ['musician'],
      career_tags: ['music', 'composition', 'creative', 'performing-arts'],
      standards_alignment: {
        gatsby: [2, 3],
        ni_skills_barometer: ['creative'],
        curriculum: 'KS2 Music'
      }
    },
    {
      id: 'direct-play',
      title: 'Direct Your Own Play',
      description: 'Take charge as a director and bring a story to life on stage',
      status: 'coming-soon',
      duration: '30 mins',
      skills: ['Leadership', 'Communication', 'Creativity'],
      keyStage: 'KS2',
      releaseDate: '2025-02-01',
      // 🆕 NEW FIELDS
      skills_measured: ['leadership', 'communication', 'creativity', 'organization'],
      career_ids: ['theater-director'],
      career_tags: ['theater', 'directing', 'leadership', 'performing-arts'],
      standards_alignment: {
        gatsby: [2, 3, 5],
        ni_skills_barometer: ['creative', 'social'],
        curriculum: 'KS2 Drama'
      }
    }
  ],
  'makers-builders': [
    {
      id: 'build-bridge',
      title: 'Build a Bridge',
      description: 'Design and test a strong bridge that can hold weight',
      status: 'live',
      duration: '25 mins',
      skills: ['Engineering', 'Problem Solving', 'Testing'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'critical-thinking', 'attention-to-detail'],
      career_ids: ['civil-engineer', 'architect'],
      career_tags: ['engineering', 'construction', 'design', 'STEM'],
      standards_alignment: {
        gatsby: [1, 4],
        ni_skills_barometer: ['technical'],
        curriculum: 'KS2 Design & Technology'
      }
    },
    {
      id: 'design-treehouse',
      title: 'Design a Treehouse',
      description: 'Create plans for an awesome treehouse using architectural skills',
      status: 'coming-soon',
      duration: '30 mins',
      skills: ['Design', 'Planning', 'Creativity'],
      keyStage: 'KS2',
      releaseDate: '2025-01-20',
      // 🆕 NEW FIELDS
      skills_measured: ['creativity', 'organization', 'problem-solving'],
      career_ids: ['architect', 'carpenter'],
      career_tags: ['architecture', 'design', 'construction'],
      standards_alignment: {
        gatsby: [1, 4],
        ni_skills_barometer: ['creative', 'technical'],
        curriculum: 'KS2 Design & Technology'
      }
    },
    {
      id: 'fix-playground',
      title: 'Fix the Playground',
      description: 'Use carpentry skills to repair and improve playground equipment',
      status: 'coming-soon',
      duration: '20 mins',
      skills: ['Carpentry', 'Safety', 'Practical Skills'],
      keyStage: 'KS2',
      releaseDate: '2025-03-01',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'attention-to-detail'],
      career_ids: ['carpenter'],
      career_tags: ['carpentry', 'construction', 'practical-skills'],
      standards_alignment: {
        gatsby: [1, 4],
        ni_skills_barometer: ['technical'],
        curriculum: 'KS2 Design & Technology'
      }
    }
  ],
  'nature-environment': [
    {
      id: 'save-rainforest',
      title: 'Save the Rainforest',
      description: 'Learn about ecosystems and find ways to protect the rainforest',
      status: 'live',
      duration: '25 mins',
      skills: ['Research', 'Problem Solving', 'Environmental Awareness'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['critical-thinking', 'problem-solving', 'communication'],
      career_ids: ['environmental-scientist', 'climate-scientist'],
      career_tags: ['environment', 'conservation', 'science', 'sustainability'],
      standards_alignment: {
        gatsby: [1, 4],
        ni_skills_barometer: ['analytical'],
        curriculum: 'KS2 Science - Living Things'
      }
    },
    {
      id: 'garden-detective',
      title: 'Garden Detective',
      description: 'Investigate plants and learn how to grow a healthy garden',
      status: 'coming-soon',
      duration: '20 mins',
      skills: ['Observation', 'Plant Care', 'Science'],
      keyStage: 'KS1',
      releaseDate: '2025-02-15',
      // 🆕 NEW FIELDS
      skills_measured: ['attention-to-detail', 'resilience', 'organization'],
      career_ids: ['gardener'],
      career_tags: ['gardening', 'horticulture', 'nature'],
      standards_alignment: {
        gatsby: [1],
        ni_skills_barometer: ['practical'],
        curriculum: 'KS1 Science - Plants'
      }
    },
    {
      id: 'climate-heroes',
      title: 'Climate Change Heroes',
      description: 'Understand climate change and become a climate action hero',
      status: 'coming-soon',
      duration: '30 mins',
      skills: ['Research', 'Critical Thinking', 'Action Planning'],
      keyStage: 'KS2',
      releaseDate: '2025-03-15',
      // 🆕 NEW FIELDS
      skills_measured: ['critical-thinking', 'problem-solving', 'leadership'],
      career_ids: ['climate-scientist', 'environmental-scientist'],
      career_tags: ['climate', 'science', 'environment', 'sustainability'],
      standards_alignment: {
        gatsby: [1, 4, 7],
        ni_skills_barometer: ['analytical', 'social'],
        curriculum: 'KS2 Geography - Environmental Change'
      }
    }
  ],
  'health-care': [
    {
      id: 'first-aid',
      title: 'First Aid Champion',
      description: 'Learn basic first aid skills to help people in emergencies',
      status: 'live',
      duration: '20 mins',
      skills: ['First Aid', 'Caring', 'Quick Thinking'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['attention-to-detail', 'communication', 'resilience'],
      career_ids: ['nurse', 'doctor'],
      career_tags: ['healthcare', 'first-aid', 'medical', 'caring'],
      standards_alignment: {
        gatsby: [1, 3],
        ni_skills_barometer: ['social'],
        curriculum: 'KS2 PSHE - Health & Wellbeing'
      }
    },
    {
      id: 'dental-detective',
      title: 'Dental Detective',
      description: 'Explore teeth and learn how to keep them healthy and strong',
      status: 'live',
      duration: '15 mins',
      skills: ['Health Awareness', 'Science', 'Care'],
      keyStage: 'KS1',
      // 🆕 NEW FIELDS
      skills_measured: ['attention-to-detail', 'communication'],
      career_ids: ['dentist'],
      career_tags: ['dentistry', 'healthcare', 'medical', 'hygiene'],
      standards_alignment: {
        gatsby: [1, 3],
        ni_skills_barometer: ['social'],
        curriculum: 'KS1 Science - Health'
      }
    },
    {
      id: 'hospital-hero',
      title: 'Hospital Hero',
      description: 'Experience a day in the life of a hospital healthcare professional',
      status: 'coming-soon',
      duration: '25 mins',
      skills: ['Caring', 'Teamwork', 'Medical Knowledge'],
      keyStage: 'KS2',
      releaseDate: '2025-02-20',
      // 🆕 NEW FIELDS
      skills_measured: ['communication', 'teamwork', 'problem-solving', 'resilience'],
      career_ids: ['doctor', 'nurse'],
      career_tags: ['healthcare', 'hospital', 'medical', 'caring'],
      standards_alignment: {
        gatsby: [1, 3, 5],
        ni_skills_barometer: ['social'],
        curriculum: 'KS2 PSHE - Health & Wellbeing'
      }
    }
  ],
  'community-service': [
    {
      id: 'police-day',
      title: 'Police Officer for a Day',
      description: 'Learn what police officers do to keep communities safe',
      status: 'live',
      duration: '20 mins',
      skills: ['Problem Solving', 'Communication', 'Safety'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['problem-solving', 'communication', 'critical-thinking'],
      career_ids: ['police-officer'],
      career_tags: ['police', 'safety', 'community', 'public-service'],
      standards_alignment: {
        gatsby: [1, 3, 6],
        ni_skills_barometer: ['social'],
        curriculum: 'KS2 Citizenship'
      }
    },
    {
      id: 'firefighter-challenge',
      title: 'Firefighter Challenge',
      description: 'Experience the bravery and teamwork needed to fight fires',
      status: 'coming-soon',
      duration: '25 mins',
      skills: ['Bravery', 'Teamwork', 'Physical Fitness'],
      keyStage: 'KS2',
      releaseDate: '2025-01-25',
      // 🆕 NEW FIELDS
      skills_measured: ['teamwork', 'resilience', 'problem-solving'],
      career_ids: ['firefighter'],
      career_tags: ['firefighting', 'emergency', 'community', 'public-service'],
      standards_alignment: {
        gatsby: [1, 3, 5],
        ni_skills_barometer: ['social'],
        curriculum: 'KS2 PE & PSHE'
      }
    },
    {
      id: 'community-helper',
      title: 'Community Helper',
      description: 'Discover different ways to help and support your community',
      status: 'coming-soon',
      duration: '20 mins',
      skills: ['Empathy', 'Communication', 'Leadership'],
      keyStage: 'KS2',
      releaseDate: '2025-03-10',
      // 🆕 NEW FIELDS
      skills_measured: ['communication', 'leadership', 'teamwork'],
      career_ids: ['teacher', 'police-officer'],
      career_tags: ['community', 'helping', 'public-service', 'education'],
      standards_alignment: {
        gatsby: [3, 5, 6],
        ni_skills_barometer: ['social'],
        curriculum: 'KS2 Citizenship'
      }
    }
  ],
  'business-enterprise': [
    {
      id: 'start-shop',
      title: 'Start Your Own Shop',
      description: 'Learn the basics of running a business by opening a virtual shop',
      status: 'live',
      duration: '25 mins',
      skills: ['Business', 'Money Management', 'Planning'],
      keyStage: 'KS2',
      // 🆕 NEW FIELDS
      skills_measured: ['creativity', 'organization', 'problem-solving', 'critical-thinking'],
      career_ids: ['entrepreneur'],
      career_tags: ['business', 'entrepreneurship', 'money', 'enterprise'],
      standards_alignment: {
        gatsby: [2, 4, 7],
        ni_skills_barometer: ['entrepreneurial'],
        curriculum: 'KS2 Maths - Money'
      }
    },
    {
      id: 'design-product',
      title: 'Design a Product',
      description: 'Create and market your own product from idea to launch',
      status: 'coming-soon',
      duration: '30 mins',
      skills: ['Design', 'Marketing', 'Innovation'],
      keyStage: 'KS2',
      releaseDate: '2025-02-01',
      // 🆕 NEW FIELDS
      skills_measured: ['creativity', 'critical-thinking', 'communication'],
      career_ids: ['product-designer', 'entrepreneur'],
      career_tags: ['design', 'product', 'innovation', 'business'],
      standards_alignment: {
        gatsby: [2, 4],
        ni_skills_barometer: ['creative', 'entrepreneurial'],
        curriculum: 'KS2 Design & Technology'
      }
    },
    {
      id: 'money-master',
      title: 'Money Management Master',
      description: 'Learn about budgeting, saving, and managing money wisely',
      status: 'coming-soon',
      duration: '20 mins',
      skills: ['Financial Literacy', 'Planning', 'Decision Making'],
      keyStage: 'KS2',
      releaseDate: '2025-03-20',
      // 🆕 NEW FIELDS
      skills_measured: ['critical-thinking', 'organization', 'attention-to-detail'],
      career_ids: ['accountant', 'entrepreneur'],
      career_tags: ['finance', 'accounting', 'money', 'business'],
      standards_alignment: {
        gatsby: [2, 7],
        ni_skills_barometer: ['analytical'],
        curriculum: 'KS2 Maths - Money & Financial Education'
      }
    }
  ]
};

// Helper functions
export const getAllMissions = () => {
  return Object.values(missions).flat();
};

export const getMissionsByZone = (zoneId) => {
  return missions[zoneId] || [];
};

export const getMissionById = (zoneId, missionId) => {
  const zoneMissions = missions[zoneId] || [];
  return zoneMissions.find(mission => mission.id === missionId);
};

export const getLiveMissions = () => {
  return getAllMissions().filter(mission => mission.status === 'live');
};

export const getComingSoonMissions = () => {
  return getAllMissions().filter(mission => mission.status === 'coming-soon');
};

export const getMissionsByCareer = (careerId) => {
  return getAllMissions().filter(mission => 
    mission.career_ids && mission.career_ids.includes(careerId)
  );
};

export const getMissionsBySkill = (skillId) => {
  return getAllMissions().filter(mission => 
    mission.skills_measured && mission.skills_measured.includes(skillId)
  );
};

export default { zonesData, missions };