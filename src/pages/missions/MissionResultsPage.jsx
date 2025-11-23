import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { zonesData } from '../../utils/zonesData';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const MissionResultsPage = () => {
  const { zoneId, missionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get results from navigation state
  const { timeElapsed = 0, score = 0, badgesEarned = [] } = location.state || {};

  // Find zone and mission
  const zone = zonesData.find(z => z.id === parseInt(zoneId));
  const mission = zone?.missions.find(m => m.id === parseInt(missionId));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreMessage = () => {
    if (score >= 90) return { message: 'Outstanding!', emoji: '🌟', color: 'text-yellow-500' };
    if (score >= 75) return { message: 'Great Job!', emoji: '⭐', color: 'text-blue-500' };
    if (score >= 60) return { message: 'Well Done!', emoji: '👍', color: 'text-green-500' };
    return { message: 'Keep Trying!', emoji: '💪', color: 'text-gray-500' };
  };

  const scoreInfo = getScoreMessage();

  const skillsLearned = mission?.skills || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wl-yellow via-wl-teal to-wl-purple">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="text-9xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-5xl font-display font-bold text-white mb-4">
            Mission Complete!
          </h1>
          <p className="text-2xl text-white/90">
            {mission?.title}
          </p>
        </div>

        {/* Results Card */}
        <Card padding="lg" className="mb-8">
          {/* Score */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <p className={`text-6xl mb-4 ${scoreInfo.emoji}`}>{scoreInfo.emoji}</p>
            <p className={`text-4xl font-bold mb-2 ${scoreInfo.color}`}>
              {score}%
            </p>
            <p className="text-2xl font-display font-bold text-gray-900">
              {scoreInfo.message}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">⏱️</div>
              <p className="text-2xl font-bold text-gray-900">{formatTime(timeElapsed)}</p>
              <p className="text-sm text-gray-600">Time Taken</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-2xl font-bold text-gray-900">{badgesEarned.length}</p>
              <p className="text-sm text-gray-600">Badges Earned</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-2xl font-bold text-gray-900">{skillsLearned.length}</p>
              <p className="text-sm text-gray-600">Skills Learned</p>
            </div>
          </div>

          {/* Badges Earned */}
          {badgesEarned.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
                🎖️ New Badges Unlocked!
              </h3>
              <div className="flex justify-center space-x-4">
                {badgesEarned.map((badge, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-wl-yellow to-wl-yellow-dark text-white rounded-xl p-6 text-center transform hover:scale-110 transition-transform"
                  >
                    <div className="text-4xl mb-2">
                      {badge === 'Quick Learner' && '🚀'}
                      {badge === 'Perfect Score' && '💎'}
                      {badge === 'Mission Master' && '⭐'}
                    </div>
                    <p className="font-bold text-sm">{badge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Learned */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
              📚 Skills You Developed
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsLearned.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-wl-teal/10 text-wl-teal px-6 py-3 rounded-full font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/dashboard/student')}
            >
              🏠 Back to Dashboard
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate(`/zones/${zoneId}`)}
            >
              🗺️ Explore More Missions
            </Button>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.location.reload()}
            >
              🔄 Play Again
            </Button>
          </div>
        </Card>

        {/* Share Results */}
        <Card className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Share Your Achievement! 🎉
          </h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              📧 Email Parents
            </Button>
            <Button variant="outline" size="sm">
              📥 Download Certificate
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MissionResultsPage;