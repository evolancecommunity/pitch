import React from 'react';
import { DollarSign, Users, Smartphone, Brain, Shield, Megaphone } from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Use of Funds
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white mb-10 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">$1,000,000 SAFE @ $5M cap</h3>
            <p className="text-lg font-light">
              This $1M round gets us to a working proprietary model, validated emotional safety metrics, and a full beta launch with 10K+ users.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">AI Model Development</h3>
                <p className="text-2xl font-bold text-blue-300">$600,000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Salaries, compute, and data to train our own emotional intelligence model.
            </p>
            <p className="text-white/90 text-xs font-semibold">
              <span className="text-blue-300">Goal:</span> Reach proprietary MVP model that outperforms GPT/Claude in emotion-specific benchmarks.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-3">
                <Smartphone className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mobile Beta Launch</h3>
                <p className="text-2xl font-bold text-green-300">$100,000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Deploy iOS & Android with Bubble, Deep Awareness, and Companion.
            </p>
            <p className="text-white/90 text-xs font-semibold">
              <span className="text-green-300">Goal:</span> Acquire 5K beta users and prove 30-day emotional engagement.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Product & Engineering</h3>
                <p className="text-2xl font-bold text-purple-300">$200,000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Build web/mobile infrastructure and deploy full-stack emotional experiences.
            </p>
            <p className="text-white/90 text-xs font-semibold">
              <span className="text-purple-300">Goal:</span> Achieve seamless app UX + scalable backend infra for 10K+ DAUs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-3">
                <Megaphone className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Brand & Community</h3>
                <p className="text-2xl font-bold text-orange-300">$75,000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Ambassador program, creator partnerships, waitlist expansion, and targeted launch.
            </p>
            <p className="text-white/90 text-xs font-semibold">
              <span className="text-orange-300">Goal:</span> 25K+ waitlist signups and 500+ daily active testers.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Emotional AI Research & Validation</h3>
                <p className="text-2xl font-bold text-indigo-300">$25,000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              Fund clinical advisors, research partnerships, and 3rd-party evaluation to benchmark emotional safety, impact, and model efficacy.
            </p>
            <p className="text-white/90 text-xs font-semibold">
              <span className="text-indigo-300">Goal:</span> Publish internal whitepaper and safety benchmarking report.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Total</h3>
              <p className="text-3xl font-bold text-blue-300">
                $1,000,000
              </p>
              <p className="text-white/80 text-sm mt-2">
                Bringing emotional intelligence to AI — safely, scalably, and responsibly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Competitive Landscape
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-semibold text-white">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">What They Do</th>
                  <th className="text-left py-3 px-4 font-semibold text-white">What They Lack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Replika</td>
                  <td className="py-3 px-4 text-white/80">Simulates AI friend</td>
                  <td className="py-3 px-4 text-white/80">Lacks emotional depth, goal-setting, and structured healing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Wysa</td>
                  <td className="py-3 px-4 text-white/80">CBT AI coach</td>
                  <td className="py-3 px-4 text-white/80">Limited to chat, not real voice or identity transformation</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Woebot</td>
                  <td className="py-3 px-4 text-white/80">AI for therapy</td>
                  <td className="py-3 px-4 text-white/80">Clinical tone, no long-term growth tracking</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Instagram/TikTok</td>
                  <td className="py-3 px-4 text-white/80">Social validation platforms</td>
                  <td className="py-3 px-4 text-white/80">Exploit insecurities, drive emotional fatigue</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-light text-white">
              <span className="font-semibold text-blue-300">Evolance is different</span> — it's not here to assist, entertain, or track. 
              <span className="font-semibold text-blue-300"> It's here to heal.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;