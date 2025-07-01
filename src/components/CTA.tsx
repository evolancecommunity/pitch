import React from 'react';
import { ArrowRight, Heart, Sparkles, Globe } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Join the Movement
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            Evolance isn't just a product — it's a new category.<br/>
            We're building the first emotional AI system for identity, clarity, and self-trust — 
            <span className="font-semibold text-blue-300"> especially for people who've never had a system built for them before.</span>
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 max-w-3xl mx-auto border border-white/10">
            <p className="text-lg text-white/95 mb-4 font-light">
              If you believe the future of AI should make people 
              <span className="font-semibold text-blue-300"> stronger</span>, 
              <span className="font-semibold text-blue-300"> clearer</span>, and 
              <span className="font-semibold text-blue-300"> more themselves</span>,
            </p>
            <p className="text-2xl font-semibold text-white">
              Join us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="https://www.evolance.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Globe className="w-6 h-6" />
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <div className="text-center">
              <p className="text-white/70 text-sm mb-2">
                Invest in your emotional well-being
              </p>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-blue-300 font-semibold">www.evolance.info</span>
                <Sparkles className="w-4 h-4 text-blue-300" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <svg className="w-7 h-7 text-white" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10 Z"/>
                  <circle cx="50" cy="45" r="6" fill="white"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Replace Performance</h3>
              <p className="text-white/80 text-sm">with Presence</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Build Emotional</h3>
              <p className="text-white/80 text-sm">Clarity & Self-Trust</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Celebrate</h3>
              <p className="text-white/80 text-sm">Who You Are</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-white mb-4">
            Let's build Evolance.
          </p>
          <p className="text-white/80 text-lg font-light">
            The future of emotionally intelligent AI starts here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;