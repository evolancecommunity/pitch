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
            Invest in Evolance
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Be part of the next wave in emotionally intelligent technology. Evolance is building the world’s first platform that combines emotional analytics, decision forecasting, and adaptive AI support—empowering people to truly understand and grow their emotional lives.
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

        {/* Business Model & Pricing */}
        <div className="mb-20 mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Business Model & Pricing</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="overflow-x-auto">
              <table className="min-w-full text-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-slate-900/60">
                    <th className="py-3 px-4 font-bold">Plan</th>
                    <th className="py-3 px-4 font-bold">Price (Monthly)</th>
                    <th className="py-3 px-4 font-bold">Price (Yearly)</th>
                    <th className="py-3 px-4 font-bold">Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-800/60">
                    <td className="py-3 px-4 font-semibold">Free Trial</td>
                    <td className="py-3 px-4">$0 (1 month)</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">All features, cancel anytime</td>
                  </tr>
                  <tr className="bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold">Pro</td>
                    <td className="py-3 px-4">$13.99/mo</td>
                    <td className="py-3 px-4">$139.99/year</td>
                    <td className="py-3 px-4">Core features, standard analytics</td>
                  </tr>
                  <tr className="bg-slate-800/60">
                    <td className="py-3 px-4 font-semibold">Plus</td>
                    <td className="py-3 px-4">$17.99/mo</td>
                    <td className="py-3 px-4">$179.99/year</td>
                    <td className="py-3 px-4">Pro + advanced analytics, priority, export</td>
                  </tr>
                  <tr className="bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold">B2B</td>
                    <td className="py-3 px-4">Custom</td>
                    <td className="py-3 px-4">Custom</td>
                    <td className="py-3 px-4">Team dashboard, API, admin, onboarding</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-white/90 text-base space-y-2 text-center">
              <div><span className="font-bold">1 month free trial</span> for all users</div>
              <div>No commitment, <span className="font-bold">cancel anytime</span></div>
              <div>Pro & Plus plans unlock advanced analytics and support</div>
              <div>B2B SaaS: <span className="font-bold">Custom pricing</span> for organizations (future)</div>
              <div>Simple, transparent, scalable</div>
            </div>
          </div>
        </div>

        {/* Vision & Differentiator - Hero style */}
        <div className="mt-24 mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight w-full">
            Invest in Evolance
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-5xl mx-auto leading-relaxed font-light">
            Be part of the next wave in emotionally intelligent technology.<br />
            Evolance is building the world’s first platform that combines <span className="font-semibold text-green-300">emotional analytics</span>, <span className="font-semibold text-blue-300">decision forecasting</span>, and <span className="font-semibold text-purple-300">adaptive AI support</span>—empowering people to truly understand and grow their emotional lives.
          </p>
          <a href="mailto:founder@evolance.info" className="bg-white hover:bg-gray-50 text-slate-900 px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;