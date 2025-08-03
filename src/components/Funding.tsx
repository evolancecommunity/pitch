import React from 'react';
import { DollarSign, TrendingUp, Users, Target, BarChart3, Brain } from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-teal-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Invest in Evolance
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Be part of the next wave in emotional growth technology. Evolance starts with Emolytics for emotional trends, then evolves into a comprehensive platform for all age groups - from kids to elderly - helping everyone grow emotionally through innovative, age-appropriate approaches.
          </p>
          <div className="mt-6 sm:mt-8 mb-2 text-xl sm:text-2xl font-semibold px-4" style={{color: '#87CEEB'}}>
            We are raising <span style={{color: '#2A7B9B'}}>$1M</span>
          </div>
          <div className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 font-medium px-4">
            At $179/year, we need just 5,600 subscribers to hit $1M in ARR.
          </div>
        </div>

        {/* Market & Traction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Market Opportunity */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-green-400/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Market Opportunity</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-300 mb-2">$121.5B</p>
                <p className="text-white/90 text-sm">Global Mental Wellness Tech</p>
                <p className="text-white/60 text-xs">Deloitte, 2023</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-emerald-300 mb-2">~$6B</p>
                <p className="text-white/90 text-sm">Emotion-focused AI Tools</p>
              </div>
            </div>
          </div>

          {/* Early Traction */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-400/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Early Traction</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-emerald-300 mb-2">43</p>
                <p className="text-white/90 text-sm">Waitlist Signups</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-teal-300 mb-2">40+</p>
                <p className="text-white/90 text-sm">Discovery Interviews</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-purple-300 mb-2">Prototype</p>
                <p className="text-white/90 text-sm">In Development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model & Pricing */}
        <div className="mb-12 sm:mb-20 mt-12 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Business Model & Pricing</h3>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-8 shadow-xl border border-white/20">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-[600px] sm:min-w-0">
                <table className="w-full text-white text-center border-separate border-spacing-y-2">
                  <thead>
                    <tr className="bg-slate-900/60">
                      <th className="py-3 px-2 sm:px-4 font-bold text-sm sm:text-base">Plan</th>
                      <th className="py-3 px-2 sm:px-4 font-bold text-sm sm:text-base">Price (Monthly)</th>
                      <th className="py-3 px-2 sm:px-4 font-bold text-sm sm:text-base">Price (Yearly)</th>
                      <th className="py-3 px-2 sm:px-4 font-bold text-sm sm:text-base">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-800/60">
                      <td className="py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Free Trial</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">$0 (21 days)</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">-</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">All features, cancel anytime</td>
                    </tr>
                    <tr className="bg-slate-800/40">
                      <td className="py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Pro</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">$13.99/mo</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">$139.99/year</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">Core features, standard analytics</td>
                    </tr>
                    <tr className="bg-slate-800/60">
                      <td className="py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Plus</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">$17.99/mo</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">$179.99/year</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">Pro + advanced analytics, priority, export</td>
                    </tr>
                    <tr className="bg-slate-800/40">
                      <td className="py-3 px-2 sm:px-4 font-semibold text-sm sm:text-base">Enterprise</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">Custom</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">Custom</td>
                      <td className="py-3 px-2 sm:px-4 text-sm sm:text-base">Team dashboard, admin, onboarding, custom integrations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 text-white/90 text-sm sm:text-base space-y-2 text-center px-4">
              <div><span className="font-bold">21-day free trial</span> for all users</div>
              <div>No commitment, <span className="font-bold">cancel anytime</span></div>
              <div>Pro & Plus plans unlock advanced analytics and support</div>
              <div>Enterprise: <span className="font-bold">Custom pricing</span> for organizations (future)</div>
              <div>Simple, transparent, scalable</div>
            </div>
          </div>
        </div>

        {/* Vision & Differentiator - Hero style */}
        <div className="mt-16 sm:mt-24 mb-16 sm:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight w-full px-4">
            Invest in Evolance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-5xl mx-auto leading-relaxed font-light px-4">
            Be part of the next wave in emotional growth technology.<br className="hidden sm:block" />
            Evolance starts with <span className="font-semibold text-green-300">Emolytics</span> for emotional trends, then evolves into a comprehensive platform for <span className="font-semibold text-blue-300">all age groups</span> - from kids to elderly - helping everyone grow emotionally through <span className="font-semibold text-purple-300">innovative, age-appropriate approaches</span>.
          </p>
          <a href="mailto:founder@evolance.info" className="bg-white hover:bg-gray-50 active:bg-gray-100 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-flex items-center gap-3 min-h-[48px] touch-manipulation">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;