import React from 'react';
import { ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';
import mongoLogoPng from '../assets/MongoDB_forStartups_SlateBlue.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              {/* Illuminated Infinity Symbol */}
              <div className="w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                <svg 
                  className="w-20 h-10 sm:w-28 sm:h-14 text-white drop-shadow-[0_0_16px_rgba(80,200,120,0.5)]" 
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
            Evolance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-light px-4">
            The world's first <span className="font-semibold text-blue-300">emotionally intelligent AI platform</span> that helps you 
            <span className="font-semibold text-blue-300"> achieve emotional clarity</span>, make better decisions, and 
            <span className="font-semibold text-blue-300"> unlock your full potential</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <a 
            href="https://www.evolance.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 active:bg-gray-100 text-slate-900 px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-3 min-h-[48px] touch-manipulation"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <p className="text-white/70 text-sm sm:text-base">
            Transform your emotional intelligence today
          </p>
        </div>

        {/* Key Goals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-blue-200 hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 touch-manipulation">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Achieve Emotional Clarity</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">Understand your emotions deeply and make confident life decisions</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-purple-200 hover:bg-purple-50 active:bg-purple-100 transition-all duration-300 touch-manipulation">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Build Self-Mastery</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">Develop emotional intelligence and unlock your authentic potential</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-indigo-200 hover:bg-indigo-50 active:bg-indigo-100 transition-all duration-300 touch-manipulation sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Create Lasting Change</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">Transform your life through evidence-based emotional healing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// MongoDB Accelerator Section
export const MongoDBAccelerator: React.FC = () => (
  <section className="w-full flex justify-center items-center py-10 sm:py-14 bg-gradient-to-r from-slate-100 via-white to-slate-100 px-4">
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/80 rounded-2xl shadow-lg px-6 sm:px-8 py-4 sm:py-6 border border-slate-200 w-full max-w-5xl justify-center">
      <img src={mongoLogoPng} alt="MongoDB for Startups Logo" className="h-8 sm:h-12 w-auto" />
      <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-800 text-center">
        Backed by <span className="text-green-600">MongoDB Startup Accelerator</span>
      </span>
    </div>
  </section>
);