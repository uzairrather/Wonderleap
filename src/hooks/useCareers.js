import { useState, useEffect } from 'react';
import careerService from '../services/careerService';
import { careers as staticCareers, getCareerById, getCareersByZone } from '../utils/careersData';

export const useCareers = () => {
  const [careers, setCareers] = useState(staticCareers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch careers from API (when backend is ready)
  const fetchCareers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await careerService.getCareers();
      setCareers(data);
    } catch (err) {
      console.error('Failed to fetch careers:', err);
      // Fallback to static data
      setCareers(staticCareers);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get career by ID
  const getCareer = (careerId) => {
    return getCareerById(careerId);
  };

  // Get careers by zone
  const getCareersByZoneId = (zoneId) => {
    return getCareersByZone(zoneId);
  };

  // Log career exploration
  const logExploration = async (careerId, missionId) => {
    try {
      await careerService.logCareerExploration(careerId, missionId);
    } catch (err) {
      console.error('Failed to log career exploration:', err);
    }
  };

  // Submit interest feedback
  const submitFeedback = async (careerId, feedbackType) => {
    try {
      await careerService.submitInterestFeedback(careerId, feedbackType);
    } catch (err) {
      console.error('Failed to submit interest feedback:', err);
    }
  };

  return {
    careers,
    loading,
    error,
    fetchCareers,
    getCareer,
    getCareersByZoneId,
    logExploration,
    submitFeedback
  };
};

export default useCareers;