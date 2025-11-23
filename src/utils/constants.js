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

// Routes
export const ROUTES = {
  HOME: '/',
  TEACHERS: '/teachers',
  STUDENTS: '/students',
  PARENTS: '/parents',
  ZONES: '/zones',
  PRICING: '/pricing',
  HELP: '/help',
  ABOUT: '/about',
  CONTACT: '/contact',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TEACHER_DASHBOARD: '/dashboard/teacher',
  STUDENT_DASHBOARD: '/dashboard/student',
  PARENT_DASHBOARD: '/dashboard/parent',
  ADMIN_DASHBOARD: '/dashboard/admin'
};