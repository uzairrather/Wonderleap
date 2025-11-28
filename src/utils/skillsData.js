// Skills rubric and measurement data for WonderLeap

export const skills = [
  {
    skill_id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Cognitive',
    description: 'The ability to find solutions to challenges and overcome obstacles',
    rubric: {
      beginner: { level: 1, description: 'Needs help to solve simple problems', points: 0-30 },
      developing: { level: 2, description: 'Can solve simple problems with guidance', points: 31-60 },
      proficient: { level: 3, description: 'Solves problems independently', points: 61-85 },
      advanced: { level: 4, description: 'Solves complex problems creatively', points: 86-100 }
    },
    icon: '🧩',
    color: 'blue'
  },
  {
    skill_id: 'creativity',
    name: 'Creativity',
    category: 'Cognitive',
    description: 'The ability to think of new ideas and express yourself in original ways',
    rubric: {
      beginner: { level: 1, description: 'Copies existing ideas', points: 0-30 },
      developing: { level: 2, description: 'Makes small changes to ideas', points: 31-60 },
      proficient: { level: 3, description: 'Creates original ideas', points: 61-85 },
      advanced: { level: 4, description: 'Develops innovative solutions', points: 86-100 }
    },
    icon: '🎨',
    color: 'pink'
  },
  {
    skill_id: 'digital-literacy',
    name: 'Digital Literacy',
    category: 'Digital',
    description: 'Understanding how to use technology and digital tools effectively',
    rubric: {
      beginner: { level: 1, description: 'Basic computer use', points: 0-30 },
      developing: { level: 2, description: 'Uses common software and apps', points: 31-60 },
      proficient: { level: 3, description: 'Comfortable with various digital tools', points: 61-85 },
      advanced: { level: 4, description: 'Creates digital content expertly', points: 86-100 }
    },
    icon: '💻',
    color: 'blue'
  },
  {
    skill_id: 'teamwork',
    name: 'Teamwork',
    category: 'Social',
    description: 'Working well with others to achieve common goals',
    rubric: {
      beginner: { level: 1, description: 'Struggles to work with others', points: 0-30 },
      developing: { level: 2, description: 'Participates in group activities', points: 31-60 },
      proficient: { level: 3, description: 'Collaborates effectively', points: 61-85 },
      advanced: { level: 4, description: 'Leads and inspires teams', points: 86-100 }
    },
    icon: '🤝',
    color: 'green'
  },
  {
    skill_id: 'communication',
    name: 'Communication',
    category: 'Social',
    description: 'Sharing ideas clearly and listening to others',
    rubric: {
      beginner: { level: 1, description: 'Basic communication skills', points: 0-30 },
      developing: { level: 2, description: 'Expresses ideas simply', points: 31-60 },
      proficient: { level: 3, description: 'Communicates clearly and confidently', points: 61-85 },
      advanced: { level: 4, description: 'Persuades and presents expertly', points: 86-100 }
    },
    icon: '💬',
    color: 'yellow'
  },
  {
    skill_id: 'critical-thinking',
    name: 'Critical Thinking',
    category: 'Cognitive',
    description: 'Analyzing information carefully before making decisions',
    rubric: {
      beginner: { level: 1, description: 'Accepts information without question', points: 0-30 },
      developing: { level: 2, description: 'Asks basic questions', points: 31-60 },
      proficient: { level: 3, description: 'Evaluates information thoughtfully', points: 61-85 },
      advanced: { level: 4, description: 'Makes well-reasoned judgments', points: 86-100 }
    },
    icon: '🧠',
    color: 'purple'
  },
  {
    skill_id: 'leadership',
    name: 'Leadership',
    category: 'Social',
    description: 'Guiding and motivating others toward goals',
    rubric: {
      beginner: { level: 1, description: 'Prefers to follow', points: 0-30 },
      developing: { level: 2, description: 'Occasionally takes initiative', points: 31-60 },
      proficient: { level: 3, description: 'Leads groups effectively', points: 61-85 },
      advanced: { level: 4, description: 'Inspires and empowers others', points: 86-100 }
    },
    icon: '👑',
    color: 'gold'
  },
  {
    skill_id: 'resilience',
    name: 'Resilience',
    category: 'Self-Management',
    description: 'Bouncing back from setbacks and keeping trying',
    rubric: {
      beginner: { level: 1, description: 'Gives up easily', points: 0-30 },
      developing: { level: 2, description: 'Tries again after encouragement', points: 31-60 },
      proficient: { level: 3, description: 'Perseveres through challenges', points: 61-85 },
      advanced: { level: 4, description: 'Thrives under pressure', points: 86-100 }
    },
    icon: '💪',
    color: 'red'
  },
  {
    skill_id: 'organization',
    name: 'Organization',
    category: 'Self-Management',
    description: 'Planning and managing time and tasks effectively',
    rubric: {
      beginner: { level: 1, description: 'Disorganized approach', points: 0-30 },
      developing: { level: 2, description: 'Basic planning skills', points: 31-60 },
      proficient: { level: 3, description: 'Plans and organizes well', points: 61-85 },
      advanced: { level: 4, description: 'Highly systematic and efficient', points: 86-100 }
    },
    icon: '📋',
    color: 'teal'
  },
  {
    skill_id: 'attention-to-detail',
    name: 'Attention to Detail',
    category: 'Cognitive',
    description: 'Noticing small details and ensuring accuracy',
    rubric: {
      beginner: { level: 1, description: 'Often misses details', points: 0-30 },
      developing: { level: 2, description: 'Notices some details', points: 31-60 },
      proficient: { level: 3, description: 'Consistently accurate', points: 61-85 },
      advanced: { level: 4, description: 'Exceptionally precise', points: 86-100 }
    },
    icon: '🔍',
    color: 'indigo'
  }
];

// Skill categories
export const skillCategories = {
  cognitive: 'Cognitive',
  social: 'Social',
  digital: 'Digital',
  selfManagement: 'Self-Management'
};

// Helper functions
export const getSkillById = (skillId) => {
  return skills.find(skill => skill.skill_id === skillId);
};

export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};

export const getSkillLevel = (skillId, score) => {
  const skill = getSkillById(skillId);
  if (!skill) return null;

  if (score >= 86) return skill.rubric.advanced;
  if (score >= 61) return skill.rubric.proficient;
  if (score >= 31) return skill.rubric.developing;
  return skill.rubric.beginner;
};

export const calculateSkillProgress = (currentScore, targetScore) => {
  return Math.round((currentScore / targetScore) * 100);
};

export default skills;