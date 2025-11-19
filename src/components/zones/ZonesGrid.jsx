import React from 'react';
import { zonesData } from '../../utils/zonesData';
import ZoneCard from './ZoneCard';

const ZonesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any zone to see the missions and start exploring careers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zonesData.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-10 text-center flex flex-col items-center justify-center border-4 border-gray-100 min-h-[400px]">
            <div className="text-7xl mb-6">🎉</div>
            <h3 className="text-3xl font-display font-bold text-gray-700 mb-4">
              More Coming Soon!
            </h3>
            <p className="text-gray-600 text-lg">
              New zones and missions are being developed. Stay tuned for more exciting career adventures!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesGrid;