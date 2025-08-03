import React from 'react';
import { MessageCircle, BarChart3, BookOpen } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">


        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg" style={{background: '#2A7B9B20'}}>
              <MessageCircle className="w-8 h-8" style={{color: '#2A7B9B'}} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{color: '#ffffff'}}>AI Chat Companion</h3>
            <p className="text-sm" style={{color: '#87CEEB'}}>
              Always-available emotional support with intelligent conversation and personalized guidance.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg" style={{background: '#87CEEB20'}}>
              <BookOpen className="w-8 h-8" style={{color: '#87CEEB'}} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{color: '#ffffff'}}>Journal Space</h3>
            <p className="text-sm" style={{color: '#87CEEB'}}>
              Personal reflection space with music integration for a complete emotional wellness experience.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg" style={{background: '#B0E0E620'}}>
              <BarChart3 className="w-8 h-8" style={{color: '#B0E0E6'}} />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{color: '#ffffff'}}>Emotional Analytics</h3>
            <p className="text-sm" style={{color: '#87CEEB'}}>
              Real-time tracking of your emotional patterns with insights and growth recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 