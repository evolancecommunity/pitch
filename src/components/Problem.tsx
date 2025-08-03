import React from 'react';
import { TrendingDown, BarChart3, Shield } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl" style={{background: '#2A7B9B15'}}></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full blur-2xl" style={{background: '#87CEEB10'}}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full blur-2xl" style={{background: '#B0E0E610'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4">
            The Self-Awareness Crisis
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Three critical gaps in self-reflection and self-awareness that affect millions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Problem 1: Emotional Unawareness */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-300 touch-manipulation" style={{borderColor: '#2A7B9B40', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #2A7B9B10)'}}>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mr-3 sm:mr-4" style={{background: '#2A7B9B20'}}>
                <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#2A7B9B'}} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Most People Are Not Self-Aware</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg p-3 sm:p-4 border" style={{background: '#2A7B9B10', borderColor: '#2A7B9B20'}}>
                <p className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#2A7B9B'}}>95%</p>
                <p className="text-white/90 text-sm">believe they are self-aware — but only 10–15% actually are</p>
                <p className="text-white/60 text-xs mt-2">University of Arkansas, 2022</p>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#87CEEB'}}>
                This massive disconnect leads to poor decision-making, miscommunication, and a lack of emotional resilience.
              </p>
            </div>
          </div>

          {/* Problem 2: No Growth Tracking */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-300 touch-manipulation" style={{borderColor: '#87CEEB40', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #87CEEB10)'}}>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mr-3 sm:mr-4" style={{background: '#87CEEB20'}}>
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#87CEEB'}} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">There Are No Tools to Fix It</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg p-3 sm:p-4 border" style={{background: '#87CEEB10', borderColor: '#87CEEB20'}}>
                <p className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#87CEEB'}}>0</p>
                <p className="text-white/90 text-sm">structured systems to build true self-awareness</p>
                <p className="text-white/60 text-xs mt-2">Harvard Business Review, 2018</p>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#87CEEB'}}>
                Feedback systems and mood trackers exist — but they don't build true self-awareness. No tools to track, reflect on, and evolve emotional patterns.
              </p>
            </div>
          </div>

          {/* Problem 3: Lack of Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-300 touch-manipulation" style={{borderColor: '#B0E0E640', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), #B0E0E610)'}}>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mr-3 sm:mr-4" style={{background: '#B0E0E620'}}>
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#B0E0E6'}} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Self-Awareness Drives Real-World Success</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg p-3 sm:p-4 border" style={{background: '#B0E0E610', borderColor: '#B0E0E620'}}>
                <p className="text-xl sm:text-2xl font-bold mb-2" style={{color: '#B0E0E6'}}>58%</p>
                <p className="text-white/90 text-sm">of job success is driven by emotional intelligence</p>
                <p className="text-white/60 text-xs mt-2">Apollo Technical, 2023</p>
              </div>
              <div className="rounded-lg p-3 border" style={{background: '#B0E0E605', borderColor: '#B0E0E610'}}>
                <p className="text-white/80 text-sm">
                  People with higher EI earn <span style={{fontWeight: 'bold', color: '#B0E0E6'}}>$29,000 more annually</span> on average
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#87CEEB'}}>
                The ability to understand and regulate emotions is a top predictor of leadership, performance, and income — yet no one is training or measuring it.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 inline-block" style={{background: 'linear-gradient(135deg, #2A7B9B10, #87CEEB10, #B0E0E610)'}}>
            <p className="text-base sm:text-lg text-white/90 font-light mb-3 sm:mb-4 px-4">
              Evolance fills this void — the <span className="font-bold text-white">$121.5B global mental wellness market</span> has no tools for true self-awareness
            </p>
            <p className="text-white/70 text-sm">Deloitte, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;