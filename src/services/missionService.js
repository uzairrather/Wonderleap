import api from './api';

export const missionService = {
  // Get all missions
  getMissions: async () => {
    const response = await api.get('/missions');
    return response.data;
  },

  // Get mission by ID
  getMissionById: async (missionId) => {
    const response = await api.get(`/missions/${missionId}`);
    return response.data;
  },

  // Get missions by zone
  getMissionsByZone: async (zoneId) => {
    const response = await api.get(`/missions/zone/${zoneId}`);
    return response.data;
  },

  // Start a mission
  startMission: async (missionId) => {
    const response = await api.post(`/missions/${missionId}/start`, {
      started_at: new Date().toISOString()
    });
    return response.data;
  },

  // 🆕 NEW: Complete mission with skill scores and career exposure
  completeMission: async (missionId, results) => {
    const response = await api.post(`/missions/${missionId}/complete`, {
      completed_at: new Date().toISOString(),
      time_elapsed: results.timeElapsed,
      score: results.score,
      skill_scores: results.skillScores || {}, // { skill_id: score }
      careers_exposed: results.careersExposed || [], // [career_id1, career_id2]
      events: results.events || [], // Array of gameplay events
      badges_earned: results.badgesEarned || []
    });
    return response.data;
  },

  // 🆕 NEW: Log career exposure during mission
  logCareerExposure: async (missionId, careerIds) => {
    const response = await api.post(`/missions/${missionId}/career-exposure`, {
      career_ids: careerIds,
      timestamp: new Date().toISOString()
    });
    return response.data;
  },

  // 🆕 NEW: Submit interest feedback during/after mission
  submitInterestFeedback: async (missionId, careerId, feedbackType) => {
    const response = await api.post(`/missions/${missionId}/interest-feedback`, {
      career_id: careerId,
      feedback_type: feedbackType, // 'love', 'like', 'learn-more', 'not-interested'
      timestamp: new Date().toISOString()
    });
    return response.data;
  },

  // Get mission attempts/history
  getMissionAttempts: async (studentId) => {
    const response = await api.get(`/missions/attempts/${studentId}`);
    return response.data;
  },

  // Get mission statistics
  getMissionStats: async (missionId) => {
    const response = await api.get(`/missions/${missionId}/stats`);
    return response.data;
  }
};

export default missionService;