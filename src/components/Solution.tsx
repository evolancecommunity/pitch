import React from 'react';
import { BarChart3, Brain, MessageCircle, Check, X } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden mobile-section-padding" style={{backgroundColor: '#1D2224'}}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl" style={{background: '#2A7B9B15'}}></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full blur-2xl" style={{background: '#87CEEB10'}}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full blur-2xl" style={{background: '#B0E0E610'}}></div>
      </div>

      <div className="mobile-container relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="mobile-text-3xl sm:mobile-text-4xl md:mobile-text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            The Solution: Evolance
          </h2>
          <p className="mobile-text-responsive text-white/90 max-w-4xl mx-auto mobile-leading-relaxed font-light">
            Starting with Emolytics for emotional trends, evolving into a comprehensive platform for all age groups - helping everyone grow emotionally through innovative, age-appropriate approaches.
          </p>
        </div>

        {/* Three Core Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-20">
          {/* Solution 1: Emolytics + AI Insights - Blue-Purple Gradient Theme */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border transition-all duration-300" style={{borderColor: '#3B82F640', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #3B82F610, #8B5CF610)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{background: 'linear-gradient(135deg, #3B82F620, #8B5CF620)'}}>
                <BarChart3 className="w-6 h-6" style={{color: '#3B82F6'}} />
              </div>
              <h3 className="text-lg font-bold text-white">Emolytics & Reflective Insights</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg p-3 border" style={{background: '#3B82F610', borderColor: '#3B82F620'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Live Emotional Analytics</p>
                <p className="text-xs" style={{color: '#60A5FA'}}>Real-time trends, triggers, and patterns</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#3B82F605', borderColor: '#3B82F610'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Personal Fingerprint</p>
                <p className="text-xs" style={{color: '#60A5FA'}}>Unique emotional identity</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#8B5CF605', borderColor: '#8B5CF610'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Emotional Pattern Insights</p>
                <p className="text-xs" style={{color: '#A78BFA'}}>Understand emotional patterns</p>
              </div>
            </div>
          </div>

          {/* Solution 3: Journal Space - Green Theme */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border transition-all duration-300" style={{borderColor: '#10B98140', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #10B98110)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{background: '#10B98120'}}>
                <svg className="w-6 h-6" style={{color: '#10B981'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Journal Space</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg p-3 border" style={{background: '#10B98110', borderColor: '#10B98120'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Quick Action Slider</p>
                <p className="text-xs" style={{color: '#34D399'}}>Quick logging of emotions for events</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#10B98105', borderColor: '#10B98110'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Ambient Mood Settings</p>
                <p className="text-xs" style={{color: '#34D399'}}>Personalized environment</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#10B98105', borderColor: '#10B98110'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Music Integration</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-white/70">Spotify, iTunes, YouTube Music</span>
                </div>
                {/* Music Playing Animation */}
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex items-end gap-0.5 h-4">
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '8px', animationDelay: '0ms'}}></div>
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '12px', animationDelay: '150ms'}}></div>
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '16px', animationDelay: '300ms'}}></div>
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '10px', animationDelay: '450ms'}}></div>
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '14px', animationDelay: '600ms'}}></div>
                    <div className="w-0.5 bg-green-400 rounded-full music-bar" style={{height: '8px', animationDelay: '750ms'}}></div>
                  </div>
                  <span className="text-xs text-green-400 ml-1">Now Playing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 4: Private AI Support - Orange Theme */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border transition-all duration-300" style={{borderColor: '#F59E0B40', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #F59E0B10)'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{background: '#F59E0B20'}}>
                <MessageCircle className="w-6 h-6" style={{color: '#F59E0B'}} />
              </div>
              <h3 className="text-lg font-bold text-white">24/7 AI Companion</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg p-3 border" style={{background: '#F59E0B10', borderColor: '#F59E0B20'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Quick Action Slider</p>
                <p className="text-xs" style={{color: '#FBBF24'}}>Quick logging of emotions for events</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#F59E0B05', borderColor: '#F59E0B10'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Non-Judgmental Support</p>
                <p className="text-xs" style={{color: '#FBBF24'}}>Always-available AI chat</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#F59E0B05', borderColor: '#F59E0B10'}}>
                <p className="text-white/90 text-xs font-semibold mb-1">Personalized Learning</p>
                <p className="text-xs" style={{color: '#FBBF24'}}>Adapts to your patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;