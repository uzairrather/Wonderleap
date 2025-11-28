// Complete careers data structure for WonderLeap

export const careers = [
  // STEM & Future Tech Zone
  {
    career_id: 'electrician',
    name: 'Electrician',
    zone_id: 'stem-tech',
    sector: 'STEM',
    short_description: 'Fix electrical problems and make sure buildings have safe power and lighting',
    typical_tasks: [
      'Install electrical wiring and systems',
      'Fix broken lights and electrical equipment',
      'Test electrical systems for safety',
      'Read electrical diagrams and plans'
    ],
    key_tools: ['Wire cutters', 'Voltage tester', 'Screwdrivers', 'Electrical tape'],
    key_skills: ['problem-solving', 'technical-knowledge', 'safety-awareness', 'attention-to-detail'],
    future_demand: 'high',
    skills_shortage: true,
    icon: '⚡',
    color: 'blue'
  },
  {
    career_id: 'software-developer',
    name: 'Software Developer',
    zone_id: 'stem-tech',
    sector: 'STEM',
    short_description: 'Create apps, games, and computer programs that people use every day',
    typical_tasks: [
      'Write code to build apps and games',
      'Fix bugs in software',
      'Design how programs work',
      'Test programs to make sure they work properly'
    ],
    key_tools: ['Computer', 'Programming languages', 'Development software', 'Testing tools'],
    key_skills: ['problem-solving', 'creativity', 'logical-thinking', 'teamwork'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '💻',
    color: 'blue'
  },
  {
    career_id: 'robotics-engineer',
    name: 'Robotics Engineer',
    zone_id: 'stem-tech',
    sector: 'STEM',
    short_description: 'Design and build robots that can help people with different tasks',
    typical_tasks: [
      'Design robot parts and systems',
      'Program robots to do specific tasks',
      'Test and improve robot performance',
      'Work with teams to solve problems'
    ],
    key_tools: ['Computer', 'Robot parts', 'Programming software', '3D design tools'],
    key_skills: ['engineering', 'problem-solving', 'creativity', 'technical-knowledge'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '🤖',
    color: 'blue'
  },

  // Creative & Performance Zone
  {
    career_id: 'stage-designer',
    name: 'Stage Designer',
    zone_id: 'creative-performance',
    sector: 'Creative',
    short_description: 'Create exciting sets and backgrounds for theater shows and performances',
    typical_tasks: [
      'Design stage sets and props',
      'Choose colors and materials',
      'Work with directors and actors',
      'Create drawings and models of designs'
    ],
    key_tools: ['Sketch pad', 'Paint', 'Measuring tools', 'Design software'],
    key_skills: ['creativity', 'artistic-ability', 'teamwork', 'planning'],
    future_demand: 'medium',
    skills_shortage: false,
    icon: '🎭',
    color: 'pink'
  },
  {
    career_id: 'musician',
    name: 'Musician',
    zone_id: 'creative-performance',
    sector: 'Creative',
    short_description: 'Play instruments and create music that people enjoy listening to',
    typical_tasks: [
      'Practice playing instruments',
      'Perform for audiences',
      'Create or compose music',
      'Work with other musicians'
    ],
    key_tools: ['Musical instruments', 'Music sheets', 'Recording equipment', 'Amplifiers'],
    key_skills: ['creativity', 'dedication', 'teamwork', 'performance'],
    future_demand: 'medium',
    skills_shortage: false,
    icon: '🎵',
    color: 'pink'
  },
  {
    career_id: 'theater-director',
    name: 'Theater Director',
    zone_id: 'creative-performance',
    sector: 'Creative',
    short_description: 'Lead theater productions and help actors bring stories to life on stage',
    typical_tasks: [
      'Choose plays and scripts',
      'Direct actors in rehearsals',
      'Make creative decisions about the show',
      'Work with designers and crew'
    ],
    key_tools: ['Scripts', 'Staging plans', 'Communication devices', 'Production notes'],
    key_skills: ['leadership', 'creativity', 'communication', 'organization'],
    future_demand: 'medium',
    skills_shortage: false,
    icon: '🎬',
    color: 'pink'
  },

  // Makers & Builders Zone
  {
    career_id: 'civil-engineer',
    name: 'Civil Engineer',
    zone_id: 'makers-builders',
    sector: 'Engineering',
    short_description: 'Design and build bridges, roads, and buildings that are safe and strong',
    typical_tasks: [
      'Design bridges and buildings',
      'Calculate if structures are safe',
      'Visit construction sites',
      'Work with architects and builders'
    ],
    key_tools: ['Design software', 'Calculator', 'Measuring tools', 'Safety equipment'],
    key_skills: ['problem-solving', 'mathematics', 'planning', 'teamwork'],
    future_demand: 'high',
    skills_shortage: true,
    icon: '🏗️',
    color: 'orange'
  },
  {
    career_id: 'architect',
    name: 'Architect',
    zone_id: 'makers-builders',
    sector: 'Engineering',
    short_description: 'Design beautiful and practical buildings where people live, work, and play',
    typical_tasks: [
      'Draw building designs',
      'Create 3D models',
      'Work with clients to understand their needs',
      'Ensure buildings are safe and functional'
    ],
    key_tools: ['Design software', 'Drawing tools', '3D modeling programs', 'Measuring equipment'],
    key_skills: ['creativity', 'technical-drawing', 'problem-solving', 'communication'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '🏛️',
    color: 'orange'
  },
  {
    career_id: 'carpenter',
    name: 'Carpenter',
    zone_id: 'makers-builders',
    sector: 'Construction',
    short_description: 'Build things from wood like furniture, houses, and playground equipment',
    typical_tasks: [
      'Measure and cut wood',
      'Build furniture and structures',
      'Read building plans',
      'Use power and hand tools safely'
    ],
    key_tools: ['Saw', 'Hammer', 'Drill', 'Measuring tape', 'Wood'],
    key_skills: ['craftsmanship', 'precision', 'problem-solving', 'safety-awareness'],
    future_demand: 'high',
    skills_shortage: true,
    icon: '🔨',
    color: 'orange'
  },

  // Nature & Environment Zone
  {
    career_id: 'environmental-scientist',
    name: 'Environmental Scientist',
    zone_id: 'nature-environment',
    sector: 'Environment',
    short_description: 'Study nature and find ways to protect the environment and wildlife',
    typical_tasks: [
      'Study plants and animals',
      'Test water and soil quality',
      'Find ways to protect nature',
      'Teach people about the environment'
    ],
    key_tools: ['Testing equipment', 'Computer', 'Field notebook', 'Camera'],
    key_skills: ['observation', 'research', 'problem-solving', 'communication'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '🌿',
    color: 'green'
  },
  {
    career_id: 'gardener',
    name: 'Gardener/Horticulturist',
    zone_id: 'nature-environment',
    sector: 'Environment',
    short_description: 'Grow plants, flowers, and vegetables and take care of gardens',
    typical_tasks: [
      'Plant seeds and care for plants',
      'Water and feed plants',
      'Design beautiful gardens',
      'Control pests and weeds'
    ],
    key_tools: ['Shovel', 'Rake', 'Watering can', 'Gardening gloves', 'Seeds'],
    key_skills: ['patience', 'knowledge-of-plants', 'planning', 'physical-fitness'],
    future_demand: 'medium',
    skills_shortage: false,
    icon: '🌱',
    color: 'green'
  },
  {
    career_id: 'climate-scientist',
    name: 'Climate Scientist',
    zone_id: 'nature-environment',
    sector: 'Environment',
    short_description: 'Study weather and climate patterns to help protect our planet',
    typical_tasks: [
      'Collect weather data',
      'Study climate change',
      'Predict future climate patterns',
      'Advise on environmental policies'
    ],
    key_tools: ['Weather equipment', 'Computer models', 'Research tools', 'Data analysis software'],
    key_skills: ['research', 'data-analysis', 'critical-thinking', 'communication'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '🌍',
    color: 'green'
  },

  // Health & Care Zone
  {
    career_id: 'nurse',
    name: 'Nurse',
    zone_id: 'health-care',
    sector: 'Health',
    short_description: 'Help doctors care for sick people and make them feel better',
    typical_tasks: [
      'Check patients health',
      'Give medicine',
      'Help doctors with treatments',
      'Talk to patients and families'
    ],
    key_tools: ['Stethoscope', 'Thermometer', 'Medicine', 'Medical equipment'],
    key_skills: ['caring', 'communication', 'teamwork', 'attention-to-detail'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '👩‍⚕️',
    color: 'red'
  },
  {
    career_id: 'dentist',
    name: 'Dentist',
    zone_id: 'health-care',
    sector: 'Health',
    short_description: 'Take care of peoples teeth and help them have healthy smiles',
    typical_tasks: [
      'Check teeth for problems',
      'Clean teeth',
      'Fix cavities',
      'Teach people about dental care'
    ],
    key_tools: ['Dental mirror', 'Drill', 'X-ray machine', 'Dental tools'],
    key_skills: ['precision', 'caring', 'communication', 'steady-hands'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '🦷',
    color: 'red'
  },
  {
    career_id: 'doctor',
    name: 'Doctor',
    zone_id: 'health-care',
    sector: 'Health',
    short_description: 'Diagnose illnesses and help people get better when theyre sick',
    typical_tasks: [
      'Examine patients',
      'Diagnose illnesses',
      'Prescribe medicine',
      'Perform medical procedures'
    ],
    key_tools: ['Stethoscope', 'Medical scanner', 'Prescription pad', 'Medical equipment'],
    key_skills: ['knowledge', 'problem-solving', 'caring', 'decision-making'],
    future_demand: 'very-high',
    skills_shortage: true,
    icon: '⚕️',
    color: 'red'
  },

  // Community & Service Zone
  {
    career_id: 'police-officer',
    name: 'Police Officer',
    zone_id: 'community-service',
    sector: 'Public Service',
    short_description: 'Keep communities safe and help people who need assistance',
    typical_tasks: [
      'Patrol neighborhoods',
      'Respond to emergencies',
      'Investigate crimes',
      'Help people in the community'
    ],
    key_tools: ['Radio', 'Police vehicle', 'Safety equipment', 'Computer'],
    key_skills: ['bravery', 'problem-solving', 'communication', 'physical-fitness'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '👮',
    color: 'indigo'
  },
  {
    career_id: 'firefighter',
    name: 'Firefighter',
    zone_id: 'community-service',
    sector: 'Public Service',
    short_description: 'Put out fires and rescue people in emergencies',
    typical_tasks: [
      'Respond to fire emergencies',
      'Rescue people from danger',
      'Inspect buildings for fire safety',
      'Maintain fire equipment'
    ],
    key_tools: ['Fire hose', 'Fire truck', 'Safety gear', 'Rescue equipment'],
    key_skills: ['bravery', 'teamwork', 'physical-fitness', 'quick-thinking'],
    future_demand: 'medium',
    skills_shortage: false,
    icon: '🚒',
    color: 'indigo'
  },
  {
    career_id: 'teacher',
    name: 'Teacher',
    zone_id: 'community-service',
    sector: 'Education',
    short_description: 'Help children learn new things and reach their full potential',
    typical_tasks: [
      'Plan and teach lessons',
      'Help students learn',
      'Grade assignments',
      'Communicate with parents'
    ],
    key_tools: ['Books', 'Whiteboard', 'Computer', 'Teaching materials'],
    key_skills: ['communication', 'patience', 'creativity', 'organization'],
    future_demand: 'high',
    skills_shortage: true,
    icon: '👩‍🏫',
    color: 'indigo'
  },

  // Business & Enterprise Zone
  {
    career_id: 'entrepreneur',
    name: 'Entrepreneur',
    zone_id: 'business-enterprise',
    sector: 'Business',
    short_description: 'Start your own business and create products or services people need',
    typical_tasks: [
      'Come up with business ideas',
      'Create business plans',
      'Manage money and resources',
      'Market products or services'
    ],
    key_tools: ['Computer', 'Business plan', 'Calculator', 'Marketing materials'],
    key_skills: ['creativity', 'leadership', 'risk-taking', 'problem-solving'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '💼',
    color: 'purple'
  },
  {
    career_id: 'product-designer',
    name: 'Product Designer',
    zone_id: 'business-enterprise',
    sector: 'Business',
    short_description: 'Design new products that people will love to use',
    typical_tasks: [
      'Sketch product ideas',
      'Create prototypes',
      'Test products with users',
      'Improve designs based on feedback'
    ],
    key_tools: ['Sketch pad', 'Design software', '3D printer', 'Prototyping materials'],
    key_skills: ['creativity', 'user-focus', 'problem-solving', 'technical-skills'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '✏️',
    color: 'purple'
  },
  {
    career_id: 'accountant',
    name: 'Accountant',
    zone_id: 'business-enterprise',
    sector: 'Business',
    short_description: 'Manage money for businesses and help them make smart financial decisions',
    typical_tasks: [
      'Track income and expenses',
      'Prepare financial reports',
      'Help with tax planning',
      'Advise on financial decisions'
    ],
    key_tools: ['Calculator', 'Accounting software', 'Computer', 'Spreadsheets'],
    key_skills: ['mathematics', 'attention-to-detail', 'organization', 'integrity'],
    future_demand: 'high',
    skills_shortage: false,
    icon: '💰',
    color: 'purple'
  }
];

// Helper functions
export const getCareersByZone = (zoneId) => {
  return careers.filter(career => career.zone_id === zoneId);
};

export const getCareerById = (careerId) => {
  return careers.find(career => career.career_id === careerId);
};

export const getCareersBySector = (sector) => {
  return careers.filter(career => career.sector === sector);
};

export const getHighDemandCareers = () => {
  return careers.filter(career => career.future_demand === 'very-high' || career.future_demand === 'high');
};

export const getCareersWithShortage = () => {
  return careers.filter(career => career.skills_shortage === true);
};

export default careers;