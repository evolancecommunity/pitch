import React from 'react';
import { DollarSign, TrendingUp, Users, Target, BarChart3, Brain } from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-teal-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Fundraising
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Pre-seed round to build the world's first emotionally intelligent AI companion.
          </p>
        </div>

        {/* Market & Traction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Market Opportunity */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Market Opportunity</h3>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-300 mb-2">$121.5B</p>
                <p className="text-white/90 text-sm">Global Mental Wellness Tech</p>
                <p className="text-white/60 text-xs">Deloitte, 2023</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-300 mb-2">~$6B</p>
                <p className="text-white/90 text-sm">Emotion-focused AI Tools</p>
              </div>
            </div>
          </div>

          {/* Early Traction */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-emerald-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Early Traction</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-300 mb-2">26</p>
                <p className="text-white/90 text-sm">Waitlist Signups</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-300 mb-2">40+</p>
                <p className="text-white/90 text-sm">Discovery Interviews</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-300 mb-2">2</p>
                <p className="text-white/90 text-sm">Accelerators</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-300 mb-2">MVP v1</p>
                <p className="text-white/90 text-sm">Product Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Use of Funds ($1M)</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-2xl font-bold text-green-300 mb-2">$600K</p>
                <p className="text-white/90 text-sm font-semibold">AI Model Development</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-300" />
                </div>
                <p className="text-2xl font-bold text-emerald-300 mb-2">$300K</p>
                <p className="text-white/90 text-sm font-semibold">Product & Team</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-teal-300" />
                </div>
                <p className="text-2xl font-bold text-teal-300 mb-2">$100K</p>
                <p className="text-white/90 text-sm font-semibold">Launch & Marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-lg text-white/90 font-light mb-4">
              Ready to invest in the future of emotionally intelligent AI?
            </p>
            <p className="text-white/70 text-sm">Join us in building the world's first AI companion that truly understands human emotions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;