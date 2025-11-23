import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wl-teal via-wl-purple to-wl-yellow flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="text-9xl mb-8 animate-bounce">🤔</div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Oops! Page Not Found
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Looks like this page went on an adventure without us! Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="secondary" size="lg">
              🏠 Go Home
            </Button>
          </Link>
          <Link to="/zones">
            <Button variant="outline" size="lg">
              🗺️ Explore Zones
            </Button>
          </Link>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
          <p className="text-sm text-white/90">
            💡 <strong>Did you know?</strong> WonderLeap has 21 exciting missions across 7 career zones!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;