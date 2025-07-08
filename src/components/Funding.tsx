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
            Fundraising Metrics (Pre-Seed)
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Data-driven market opportunity with clear traction and strategic use of funds to build the world's first emotionally intelligent AI companion.
          </p>
        </div>

        {/* Market Sizing */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Market Sizing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-green-400/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="w-8 h-8 text-green-300" />
                </div>
                <h4 className="text-2xl font-bold text-white">TAM</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                  <p className="text-3xl font-bold text-green-300 mb-2">$121.5B</p>
                  <p className="text-white/90 text-sm">Global Mental Wellness Tech</p>
                  <p className="text-white/60 text-xs mt-2">Source: Deloitte, 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-emerald-400/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-emerald-300" />
                </div>
                <h4 className="text-2xl font-bold text-white">SAM</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-400/20">
                  <p className="text-3xl font-bold text-emerald-300 mb-2">~$6B</p>
                  <p className="text-white/90 text-sm">Emotion-focused AI Tools</p>
                  <p className="text-white/60 text-xs mt-2">Subset of mental tech</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-teal-400/30">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-teal-300" />
                </div>
                <h4 className="text-2xl font-bold text-white">SOM</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-400/20">
                  <p className="text-3xl font-bold text-teal-300 mb-2">~$60M</p>
                  <p className="text-white/90 text-sm">1% of Tier 1 Professionals</p>
                  <p className="text-white/60 text-xs mt-2">US, EU, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Traction */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Early Traction</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-400/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-300" />
                </div>
                <p className="text-2xl font-bold text-green-300 mb-2">26</p>
                <p className="text-white/90 text-sm">Waitlist Signups</p>
                <p className="text-white/60 text-xs">Organic, soft launch</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-emerald-400/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-300" />
                </div>
                <p className="text-2xl font-bold text-emerald-300 mb-2">40+</p>
                <p className="text-white/90 text-sm">Discovery Interviews</p>
                <p className="text-white/60 text-xs">Across 3 continents</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-teal-400/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-teal-300" />
                </div>
                <p className="text-2xl font-bold text-teal-300 mb-2">2</p>
                <p className="text-white/90 text-sm">Accelerator Acceptance</p>
                <p className="text-white/60 text-xs">MongoDB, Fast Forward AI</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-400/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-300" />
                </div>
                <p className="text-2xl font-bold text-blue-300 mb-2">MVP v1</p>
                <p className="text-white/90 text-sm">Core Product Readiness</p>
                <p className="text-white/60 text-xs">Emolytics + AI check-in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Use of Funds ($1M SAFE @ $5M Cap)</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-300" />
                </div>
                <p className="text-2xl font-bold text-green-300 mb-2">$600K</p>
                <p className="text-white/90 text-sm font-semibold mb-2">AI Model Development</p>
                <p className="text-white/70 text-xs">Emotion + NLP models</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-300" />
                </div>
                <p className="text-2xl font-bold text-emerald-300 mb-2">$100K</p>
                <p className="text-white/90 text-sm font-semibold mb-2">Mobile App Launch</p>
                <p className="text-white/70 text-xs">iOS/Android development</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-300" />
                </div>
                <p className="text-2xl font-bold text-teal-300 mb-2">$200K</p>
                <p className="text-white/90 text-sm font-semibold mb-2">Engineering & Infrastructure</p>
                <p className="text-white/70 text-xs">Team + cloud costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-300" />
                </div>
                <p className="text-2xl font-bold text-blue-300 mb-2">$75K</p>
                <p className="text-white/90 text-sm font-semibold mb-2">Brand & GTM</p>
                <p className="text-white/70 text-xs">Marketing + partnerships</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-300" />
                </div>
                <p className="text-2xl font-bold text-purple-300 mb-2">$25K</p>
                <p className="text-white/90 text-sm font-semibold mb-2">Academic R&D</p>
                <p className="text-white/70 text-xs">Research + evaluation</p>
              </div>
            </div>

            {/* Timeline & Goals */}
            <div className="mt-12 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4 text-center">Timeline & Goals</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-green-300 mb-2">6 Months</p>
                  <p className="text-white/80 text-sm">Launch MVP with core Emolytics</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-emerald-300 mb-2">12 Months</p>
                  <p className="text-white/80 text-sm">AI decision forecasting beta</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-teal-300 mb-2">18 Months</p>
                  <p className="text-white/80 text-sm">Full platform with 3D avatar</p>
                </div>
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