import React from 'react';
import { TrendingDown, BarChart3, Shield } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4">
            The Problems We're Solving
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Three critical gaps in emotional wellness that affect millions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Problem 1: Emotional Unawareness */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-red-400/30 hover:border-red-500 active:border-red-500 hover:shadow-2xl transition-all duration-300 touch-manipulation">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-red-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Emotional Blindness</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-red-500/10 rounded-lg p-3 sm:p-4 border border-red-400/20">
                <p className="text-xl sm:text-2xl font-bold text-red-300 mb-2">76%</p>
                <p className="text-white/90 text-sm">struggle to understand or express emotions</p>
                <p className="text-white/60 text-xs mt-2">APA, 2023</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Most people lack emotional vocabulary and self-awareness. They can't identify what they're feeling or why.
              </p>
            </div>
          </div>

          {/* Problem 2: No Growth Tracking */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-orange-400/30 hover:border-orange-500 active:border-orange-500 hover:shadow-2xl transition-all duration-300 touch-manipulation">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-orange-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">No Emotional Growth Tracking</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-orange-500/10 rounded-lg p-3 sm:p-4 border border-orange-400/20">
                <p className="text-xl sm:text-2xl font-bold text-orange-300 mb-2">&lt;5%</p>
                <p className="text-white/90 text-sm">of 300M+ mental health app users get emotional trend tracking</p>
                <p className="text-white/60 text-xs mt-2">SensorTower, 2023</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Users can't see their emotional progress, patterns, or growth over time. No tools for meaningful reflection.
              </p>
            </div>
          </div>

          {/* Problem 3: Lack of Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-yellow-400/30 hover:border-yellow-500 active:border-yellow-500 hover:shadow-2xl transition-all duration-300 touch-manipulation">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">No Private, 24/7 Support</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-yellow-500/10 rounded-lg p-3 sm:p-4 border border-yellow-400/20">
                <p className="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">65%</p>
                <p className="text-white/90 text-sm">prefer AI support over traditional therapy</p>
                <p className="text-white/60 text-xs mt-2">McKinsey, 2022</p>
              </div>
              <div className="bg-yellow-500/5 rounded-lg p-3 border border-yellow-400/10">
                <p className="text-white/80 text-sm">
                  Therapy costs <span className="font-bold text-yellow-300">$100–$250/hour</span> and often has waitlists
                </p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Traditional therapy is expensive, inaccessible, and stigmatized. People need judgment-free, always-available help.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 inline-block">
            <p className="text-base sm:text-lg text-white/90 font-light mb-3 sm:mb-4 px-4">
              These gaps create a <span className="font-bold text-white">$121.5B global mental wellness market</span> ready for disruption
            </p>
            <p className="text-white/70 text-sm">Deloitte, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;