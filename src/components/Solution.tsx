import React from 'react';
import { MessageCircle, CheckCircle, Eye, TrendingUp } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            Our Solution
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Evolance is an AI-powered emotional operating system designed to listen, reflect, 
            and guide users through emotional healing and identity growth.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 inline-block border border-white/10">
            <p className="text-lg text-white font-light">
              <span className="font-semibold text-blue-300">Instead of content</span>, we offer inner clarity.<br/>
              <span className="font-semibold text-blue-300">Instead of notifications</span>, we offer peace.<br/>
              <span className="font-semibold text-blue-300">Instead of performance metrics</span>, we help users celebrate their truth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[260px]">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-7 h-7 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Overcome and Appreciate</h3>
              </div>
              <p className="text-white/80 text-base mb-4 leading-relaxed">
                After each bubble session, Evolance generates a personalized To-Do list with small, 
                meaningful challenges to help users overcome stuck thoughts and practice self-appreciation.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-auto">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                  <span className="text-sm text-white/90">Write a letter to your younger self</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                  <span className="text-sm text-white/90">Practice saying "no" to one thing today</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                  <span className="text-sm text-white/90">Celebrate a small win from this week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[260px]">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-7 h-7 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Visualize Your Decisions</h3>
              </div>
              <p className="text-white/80 text-base mb-4 leading-relaxed">
                Deep Awareness Mode guides users to examine their emotions and choices deeply. 
                It helps them realign decisions with their values, not pressure.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-auto">
              <svg className="w-full h-16 mb-4" viewBox="0 0 300 60">
                <path d="M50,30 L100,15 L150,30 L200,15 L250,30" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
                <circle cx="50" cy="30" r="4" fill="white" opacity="0.7"/>
                <circle cx="150" cy="30" r="5" fill="white" opacity="0.8"/>
                <circle cx="250" cy="30" r="4" fill="white" opacity="0.7"/>
              </svg>
              <p className="text-sm text-white/90 italic">Clarity through conscious choice</p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[260px]">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-7 h-7 text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Your Consciousness Journey</h3>
              </div>
              <p className="text-white/80 text-base mb-4 leading-relaxed">
                The entire platform is structured as a guided journey through levels of awareness. 
                Evolance helps users move from confusion to clarity — building identity, resilience, and self-trust.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-auto">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full mb-2"></div>
                  <span className="text-xs text-white/90">Confusion</span>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-white/40 rounded-full mb-2"></div>
                  <span className="text-xs text-white/90">Awareness</span>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-white/60 rounded-full mb-2"></div>
                  <span className="text-xs text-white/90">Clarity</span>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-white/80 rounded-full mb-2"></div>
                  <span className="text-xs text-white/90">Wholeness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;