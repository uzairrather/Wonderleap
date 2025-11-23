import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { zonesData } from '../../utils/zonesData';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';

const MissionPlayPage = () => {
  const { zoneId, missionId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Find zone and mission
  const zone = zonesData.find(z => z.id === parseInt(zoneId));
  const mission = zone?.missions.find(m => m.id === parseInt(missionId));

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);

    // Timer
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Mission complete - redirect to results
      navigate(`/missions/${zoneId}/${missionId}/results`, {
        state: { 
          timeElapsed, 
          score: 95, 
          badgesEarned: ['Quick Learner', 'Perfect Score']
        }
      });
    }
  };

  const handleQuit = () => {
    if (window.confirm('Are you sure you want to quit this mission? Your progress will be lost.')) {
      navigate('/dashboard/student');
    }
  };

  if (!zone || !mission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mission Not Found</h1>
          <Button onClick={() => navigate('/zones')}>Back to Zones</Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wl-teal to-wl-purple flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-8xl mb-6 animate-bounce">{zone.emoji}</div>
          <h2 className="text-4xl font-display font-bold mb-4">Loading Mission...</h2>
          <p className="text-xl mb-8">{mission.title}</p>
          <Loader size="lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-800 border-b-4 border-wl-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mission Info */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{zone.emoji}</div>
              <div>
                <h1 className="text-xl font-display font-bold text-white">
                  {mission.title}
                </h1>
                <p className="text-sm text-gray-400">{zone.name}</p>
              </div>
            </div>

            {/* Progress & Timer */}
            <div className="flex items-center space-x-6">
              {/* Progress */}
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1">Progress</p>
                <div className="flex items-center space-x-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div 
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index + 1 <= currentStep 
                          ? 'bg-wl-teal text-white' 
                          : 'bg-gray-700 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timer */}
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1">Time</p>
                <p className="text-2xl font-mono font-bold text-wl-yellow">
                  {formatTime(timeElapsed)}
                </p>
              </div>

              {/* Quit Button */}
              <Button variant="danger" size="sm" onClick={handleQuit}>
                Quit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Step Content */}
          <div className="text-center mb-8">
            <div className="inline-block bg-wl-purple/10 rounded-full px-6 py-2 mb-6">
              <span className="text-wl-purple font-bold">Step {currentStep} of {totalSteps}</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              {currentStep === 1 && "Understanding the Problem"}
              {currentStep === 2 && "Planning Your Solution"}
              {currentStep === 3 && "Building the Circuit"}
              {currentStep === 4 && "Testing Your Work"}
              {currentStep === 5 && "Final Challenge"}
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              {currentStep === 1 && "Let's learn about electrical circuits and why the lights aren't working."}
              {currentStep === 2 && "Now that you understand the problem, let's plan how to fix it."}
              {currentStep === 3 && "Time to build! Connect the components in the right order."}
              {currentStep === 4 && "Great job! Now let's test if your circuit works."}
              {currentStep === 5 && "Final challenge: Can you fix a more complex circuit?"}
            </p>
          </div>

          {/* Interactive Content Area */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 mb-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-6">
                {currentStep === 1 && "💡"}
                {currentStep === 2 && "📋"}
                {currentStep === 3 && "🔧"}
                {currentStep === 4 && "⚡"}
                {currentStep === 5 && "🏆"}
              </div>
              <p className="text-gray-600 text-lg">
                Interactive mission content would load here<br/>
                (Game mechanics, quizzes, drag-and-drop activities, etc.)
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="secondary"
              disabled={currentStep === 1}
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              ← Previous
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </p>
            </div>

            <Button 
              variant="primary"
              onClick={handleNextStep}
            >
              {currentStep === totalSteps ? 'Complete Mission' : 'Next →'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPlayPage;