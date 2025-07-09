import React from 'react';
import { BarChart3, Brain, MessageCircle, Check, X } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Solution
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Three integrated components that create the world's first emotionally intelligent AI companion.
          </p>
        </div>

        {/* Three Core Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Solution 1: Emolytics */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-green-400/30 hover:border-green-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Emolytics Dashboard</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                <p className="text-white/90 text-sm font-semibold mb-2">Live Emotional Analytics</p>
                <p className="text-white/80 text-sm">Real-time dashboard showing emotional trends, triggers, and patterns</p>
              </div>
              <div className="bg-green-500/5 rounded-lg p-4 border border-green-400/10">
                <p className="text-white/90 text-sm font-semibold mb-2">Personal Fingerprint</p>
                <p className="text-white/80 text-sm">Unique emotional identity that evolves with your growth</p>
              </div>
            </div>
          </div>

          {/* Solution 2: AI Avatar + Decision Forecasting */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-400/30 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI Decision Forecasting</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <p className="text-white/90 text-sm font-semibold mb-2">3D Emotional Avatar</p>
                <p className="text-white/80 text-sm">Visual representation of your emotional state in real-time</p>
              </div>
              <div className="bg-blue-500/5 rounded-lg p-4 border border-blue-400/10">
                <p className="text-white/90 text-sm font-semibold mb-2">Decision Impact Simulation</p>
                <p className="text-white/80 text-sm">See how life decisions might affect your emotional trajectory</p>
              </div>
            </div>
          </div>

          {/* Solution 3: Private AI Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-400/30 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                <MessageCircle className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7 AI Companion</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20">
                <p className="text-white/90 text-sm font-semibold mb-2">Non-Judgmental Support</p>
                <p className="text-white/80 text-sm">Always-available AI chat with intelligent emotional guidance</p>
              </div>
              <div className="bg-purple-500/5 rounded-lg p-4 border border-purple-400/10">
                <p className="text-white/90 text-sm font-semibold mb-2">Personalized Learning</p>
                <p className="text-white/80 text-sm">Adapts to your patterns for truly personalized support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;