import React from 'react';
import { TrendingDown, BarChart3, Shield } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Problems Is Evolance Solving?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Based on global mental health data and behavioral studies, Evolance targets three core, interrelated problems that affect millions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1: Emotional Unawareness */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-red-400/30 hover:border-red-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                <TrendingDown className="w-8 h-8 text-red-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Emotional Unawareness & Disconnect</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-400/20">
                <p className="text-2xl font-bold text-red-300 mb-2">76%</p>
                <p className="text-white/90 text-sm">of people report difficulty understanding or expressing their emotions clearly</p>
                <p className="text-white/60 text-xs mt-2">Source: APA, 2023</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Emotional literacy is rarely taught, yet crucial for mental well-being, decision-making, and relationships. Most people lack the vocabulary and awareness to navigate their emotional landscape effectively.
              </p>
            </div>
          </div>

          {/* Problem 2: No Emotional Growth Tracking */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-orange-400/30 hover:border-orange-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">No Way to Track Emotional Growth</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-400/20">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-2xl font-bold text-orange-300">300M+</p>
                  <p className="text-white/60 text-xs">users</p>
                </div>
                <p className="text-white/90 text-sm">use mental wellness apps, but <span className="font-bold text-orange-300">less than 5%</span> offer emotional trend tracking</p>
                <p className="text-white/60 text-xs mt-2">Source: SensorTower, 2023</p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Users lack tools to reflect on emotional progress, triggers, or behavior patterns. Current solutions provide static snapshots rather than meaningful insights into emotional evolution.
              </p>
            </div>
          </div>

          {/* Problem 3: Lack of Private Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-yellow-400/30 hover:border-yellow-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Lack of Private, 24/7 Support</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20">
                <p className="text-2xl font-bold text-yellow-300 mb-2">65%</p>
                <p className="text-white/90 text-sm">of Gen Z and Millennials prefer AI-based mental support due to privacy concerns</p>
                <p className="text-white/60 text-xs mt-2">Source: McKinsey, 2022</p>
              </div>
              <div className="bg-yellow-500/5 rounded-lg p-3 border border-yellow-400/10">
                <p className="text-white/80 text-sm">
                  <span className="font-bold text-yellow-300">$100–$250/hour</span> for traditional therapy, often waitlisted
                </p>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Traditional therapy is expensive and inaccessible, while stigma prevents many from seeking help. People need judgment-free, always-available emotional support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-lg text-white/90 font-light mb-4">
              These problems create a <span className="font-bold text-white">$121.5B global mental wellness market</span> that's ready for disruption
            </p>
            <p className="text-white/70 text-sm">Source: Deloitte, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;