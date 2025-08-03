import React from 'react';
import { ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';
import mongoLogoPng from '../assets/MongoDB_forStartups_SlateBlue.png';
import logoPng from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{background: '#2A7B9B20'}}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl" style={{background: '#87CEEB15'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{background: '#B0E0E610'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              {/* Logo */}
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <img 
                  src={logoPng} 
                  alt="Evolance Logo" 
                  className="h-12 sm:h-16 md:h-20 filter drop-shadow-lg"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
            Evolance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Starting with <span style={{fontWeight: 'bold', color: '#87CEEB'}}>Emolytics</span> for emotional trends, evolving into a comprehensive platform for 
            <span style={{fontWeight: 'bold', color: '#87CEEB'}}> all age groups</span> - from kids to elderly - helping everyone 
            <span style={{fontWeight: 'bold', color: '#87CEEB'}}> grow emotionally</span>.
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
          <div className="rounded-2xl p-6 sm:p-8 shadow-2xl border-2 transition-all duration-300 touch-manipulation" style={{borderColor: '#2A7B9B', background: 'linear-gradient(135deg, #1D2224, #2A7B9B20)', color: '#ffffff'}}>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{background: '#2A7B9B20'}}>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#2A7B9B'}} />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{color: '#ffffff'}}>Emolytics First</h3>
            <p className="text-sm leading-relaxed font-medium" style={{color: '#87CEEB'}}>Start with emotional trends and analytics</p>
          </div>
          
          <div className="rounded-2xl p-6 sm:p-8 shadow-2xl border-2 transition-all duration-300 touch-manipulation" style={{borderColor: '#87CEEB', background: 'linear-gradient(135deg, #1D2224, #87CEEB20)', color: '#ffffff'}}>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{background: '#87CEEB20'}}>
                <Brain className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#87CEEB'}} />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{color: '#ffffff'}}>Age-Group Focus</h3>
            <p className="text-sm leading-relaxed font-medium" style={{color: '#87CEEB'}}>Kids, teens, adults, elderly - everyone grows</p>
          </div>
          
          <div className="rounded-2xl p-6 sm:p-8 shadow-2xl border-2 transition-all duration-300 touch-manipulation sm:col-span-2 lg:col-span-1" style={{borderColor: '#B0E0E6', background: 'linear-gradient(135deg, #1D2224, #B0E0E620)', color: '#ffffff'}}>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{background: '#B0E0E620'}}>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#B0E0E6'}} />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{color: '#ffffff'}}>Creative Evolution</h3>
            <p className="text-sm leading-relaxed font-medium" style={{color: '#87CEEB'}}>Innovative approaches for each life stage</p>
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