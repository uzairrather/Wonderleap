// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 30000
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent'
};

// Mission Status
export const MISSION_STATUS = {
  LIVE: 'live',
  COMING_SOON: 'coming-soon',
  LOCKED: 'locked'
};

// Key Stages
export const KEY_STAGES = {
  KS1: 'KS1',
  KS2: 'KS2'
};

// Badge Types
export const BADGE_TYPES = {
  MISSION_MASTER: 'mission_master',
  ZONE_CHAMPION: 'zone_champion',
  QUICK_LEARNER: 'quick_learner',
  PERFECT_SCORE: 'perfect_score',
  WEEK_STREAK: 'week_streak',
  SKILL_MASTER: 'skill_master',
  EXPLORER: 'explorer',
  ULTIMATE_PRO: 'ultimate_pro'
};

// Skills
export const SKILLS = [
  'Problem Solving',
  'Creativity',
  'Digital Literacy',
  'Teamwork',
  'Communication',
  'Critical Thinking',
  'Leadership',
  'Research',
  'Planning',
  'Innovation'
];

// 🆕 NEW: Skill IDs (for backend integration)
export const SKILL_IDS = {
  PROBLEM_SOLVING: 'problem-solving',
  CREATIVITY: 'creativity',
  DIGITAL_LITERACY: 'digital-literacy',
  TEAMWORK: 'teamwork',
  COMMUNICATION: 'communication',
  CRITICAL_THINKING: 'critical-thinking',
  LEADERSHIP: 'leadership',
  RESILIENCE: 'resilience',
  ORGANIZATION: 'organization',
  ATTENTION_TO_DETAIL: 'attention-to-detail'
};

// 🆕 NEW: Skill Categories
export const SKILL_CATEGORIES = {
  COGNITIVE: 'Cognitive',
  SOCIAL: 'Social',
  DIGITAL: 'Digital',
  SELF_MANAGEMENT: 'Self-Management'
};

// 🆕 NEW: Career Sectors
export const CAREER_SECTORS = {
  STEM: 'STEM',
  CREATIVE: 'Creative',
  ENGINEERING: 'Engineering',
  ENVIRONMENT: 'Environment',
  HEALTH: 'Health',
  PUBLIC_SERVICE: 'Public Service',
  BUSINESS: 'Business'
};

// 🆕 NEW: Interest Feedback Types
export const INTEREST_FEEDBACK_TYPES = {
  LOVE: 'love',
  LIKE: 'like',
  LEARN_MORE: 'learn-more',
  NOT_INTERESTED: 'not-interested'
};

// 🆕 NEW: Future Demand Levels
export const FUTURE_DEMAND = {
  VERY_HIGH: 'very-high',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

// 🆕 NEW: Gatsby Benchmarks
export const GATSBY_BENCHMARKS = [
  { id: 1, name: 'A stable careers programme' },
  { id: 2, name: 'Learning from career and labour market information' },
  { id: 3, name: 'Addressing the needs of each pupil' },
  { id: 4, name: 'Linking curriculum learning to careers' },
  { id: 5, name: 'Encounters with employers and employees' },
  { id: 6, name: 'Experiences of workplaces' },
  { id: 7, name: 'Encounters with further and higher education' },
  { id: 8, name: 'Personal guidance' }
];

// 🆕 NEW: NI Skills Barometer Categories
export const NI_SKILLS_BAROMETER = [
  'digital',
  'technical',
  'creative',
  'social',
  'analytical',
  'entrepreneurial',
  'practical'
];

// 🆕 NEW: Standards Alignment
export const STANDARDS = {
  GATSBY: 'gatsby',
  NI_SKILLS_BAROMETER: 'ni_skills_barometer',
  CURRICULUM: 'curriculum'
};

// 🆕 NEW: Mission Modes
export const MISSION_MODES = {
  FREE_EXPLORE: 'free-explore',
  GUIDED_SESSION: 'guided-session',
  ASSESSMENT: 'assessment'
};

// 🆕 NEW: Assignment Status
export const ASSIGNMENT_STATUS = {
  DRAFT: 'draft',
  SCHEDULED: 'scheduled',
  LIVE: 'live',
  COMPLETED: 'completed'
};

// Routes
export const ROUTES = {
  HOME: '/',
  TEACHERS: '/teachers',
  STUDENTS: '/students',
  PARENTS: '/parents',
  ZONES: '/zones',
  CAREERS: '/careers', // 🆕 NEW
  PRICING: '/pricing',
  HELP: '/help',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  TEACHER_DASHBOARD: '/dashboard/teacher',
  STUDENT_DASHBOARD: '/dashboard/student',
  PARENT_DASHBOARD: '/dashboard/parent',
  ADMIN_DASHBOARD: '/dashboard/admin',
  MISSION_PLAY: '/missions/:zoneId/:missionId/play',
  MISSION_RESULTS: '/missions/:zoneId/:missionId/results'
};

// 🆕 NEW: Zone Colors
export const ZONE_COLORS = {
  'stem-tech': 'blue',
  'creative-performance': 'pink',
  'makers-builders': 'orange',
  'nature-environment': 'green',
  'health-care': 'red',
  'community-service': 'indigo',
  'business-enterprise': 'purple'
};

// 🆕 NEW: Notification Types
export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

// 🆕 NEW: License Types
export const LICENSE_TYPES = {
  SINGLE_SCHOOL: 'single-school',
  MULTI_ACADEMY: 'multi-academy',
  LOCAL_AUTHORITY: 'local-authority',
  PARENT_HOME: 'parent-home'
};

// 🆕 NEW: Pricing Tiers
export const PRICING_TIERS = {
  SINGLE_SCHOOL: {
    name: 'Single School',
    price: 499,
    currency: '£',
    period: 'year',
    features: [
      'Up to 300 pupils',
      'Unlimited teachers',
      'All 7 zones',
      'Live missions',
      'Progress tracking',
      'Teacher dashboard',
      'Parent reports',
      'Email support'
    ]
  },
  MULTI_ACADEMY: {
    name: 'Multi-Academy Trust',
    price: 1999,
    currency: '£',
    period: 'year',
    features: [
      'Up to 1,500 pupils',
      'Multiple schools',
      'All 7 zones',
      'Live missions',
      'Advanced analytics',
      'Trust-wide reporting',
      'Dedicated support',
      'Training sessions'
    ]
  },
  LOCAL_AUTHORITY: {
    name: 'Local Authority',
    price: 'Custom',
    currency: '£',
    period: null,
    features: [
      'Unlimited pupils',
      'All schools in authority',
      'All zones & missions',
      'Custom reporting',
      'Priority support',
      'Implementation support',
      'Quarterly reviews',
      'Custom integrations'
    ]
  }
};

// 🆕 NEW: Dashboard Stats Icons
export const DASHBOARD_ICONS = {
  STUDENTS: '👥',
  CLASSES: '📚',
  MISSIONS: '🎮',
  COMPLETION: '📊',
  ZONES: '🗺️',
  BADGES: '🏆',
  STREAK: '🔥',
  SKILLS: '⭐',
  SCHOOLS: '🏫',
  REVENUE: '💰',
  USERS: '👤',
  HOURS: '⏱️'
};

// Export all
export default {
  API_CONFIG,
  USER_ROLES,
  MISSION_STATUS,
  KEY_STAGES,
  BADGE_TYPES,
  SKILLS,
  SKILL_IDS,
  SKILL_CATEGORIES,
  CAREER_SECTORS,
  INTEREST_FEEDBACK_TYPES,
  FUTURE_DEMAND,
  GATSBY_BENCHMARKS,
  NI_SKILLS_BAROMETER,
  STANDARDS,
  MISSION_MODES,
  ASSIGNMENT_STATUS,
  ROUTES,
  ZONE_COLORS,
  NOTIFICATION_TYPES,
  LICENSE_TYPES,
  PRICING_TIERS,
  DASHBOARD_ICONS
};