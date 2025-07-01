import React from 'react';
import { ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Illuminated Infinity Symbol */}
              <div className="w-32 h-16 flex items-center justify-center mb-8 mx-auto">
                <svg 
                  className="w-28 h-14 text-white drop-shadow-[0_0_16px_rgba(80,200,120,0.5)]" 
                  viewBox="0 0 100 50" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  style={{ filter: 'drop-shadow(0 0 24px #4ade80)' }}
                >
                  <path d="M20,25 C20,10 45,10 50,25 C55,40 80,40 80,25 C80,10 55,10 50,25 C45,40 20,40 20,25 Z" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Evolance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            The world's first <span className="font-semibold text-blue-300">emotionally intelligent AI platform</span> designed to help people 
            <span className="font-semibold text-blue-300"> understand what they can't articulate</span>, process it, and 
            <span className="font-semibold text-blue-300"> embrace their authentic selves</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="https://www.evolance.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/70 text-sm">
            Invest in your emotional well-being
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Emotionally Present</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">AI that truly listens and understands your inner world with genuine empathy</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Identity Growth</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">Structured journey from confusion to clarity and self-understanding</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Healing Focused</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">Built to heal and support, not entertain or exploit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// MongoDB Accelerator Section
export const MongoDBAccelerator: React.FC = () => (
  <section className="w-full flex justify-center items-center py-14 bg-gradient-to-r from-slate-100 via-white to-slate-100">
    <div className="flex items-center gap-6 bg-white/80 rounded-2xl shadow-lg px-8 py-6 border border-slate-200 w-full max-w-5xl justify-center">
      <img src="/src/assets/mongodb-logo.svg" alt="MongoDB Logo" className="h-16 w-auto" />
      <span className="text-2xl md:text-3xl font-semibold text-slate-800 text-center">
        Backed by <span className="text-green-600">MongoDB Startup Accelerator</span>
      </span>
    </div>
  </section>
);