import React from 'react';
import { Zap, Brain, Eye, TrendingUp } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What's Truly Novel About Evolance
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Our research reveals that existing AI platforms fail in emotional intelligence. Here's how Evolance breaks new ground.
          </p>
        </div>

        {/* Research Grid - Evidence of Current Failures */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Evidence: Why Current AI Platforms Fail</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-red-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-red-300" />
                </div>
                <h4 className="text-lg font-bold text-white">Limited Emotional Depth</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">90% of mental wellness apps use basic journaling models</p>
              <p className="text-white/60 text-xs">Source: CB Insights, 2023</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-orange-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-orange-300" />
                </div>
                <h4 className="text-lg font-bold text-white">Poor Retention Rates</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">Average 30-day retention = 6% for mental health apps</p>
              <p className="text-white/60 text-xs">Source: Adjust, 2023</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Eye className="w-6 h-6 text-yellow-300" />
                </div>
                <h4 className="text-lg font-bold text-white">No Emotional Visualization</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">Less than 5% offer emotional trend tracking</p>
              <p className="text-white/60 text-xs">Source: SensorTower, 2023</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="w-6 h-6 text-green-300" />
                </div>
                <h4 className="text-lg font-bold text-white">No Decision Forecasting</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">Zero platforms offer emotional impact simulation</p>
              <p className="text-white/60 text-xs">Source: Market Research, 2024</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-lg font-bold text-white">Surface-Level AI</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">AI companions lack emotional intelligence depth</p>
              <p className="text-white/60 text-xs">Source: AI Research Review, 2024</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-400/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="text-lg font-bold text-white">No Emotional Fingerprint</h4>
              </div>
              <p className="text-white/80 text-sm mb-3">No platform creates unique emotional identity</p>
              <p className="text-white/60 text-xs">Source: UX Research, 2024</p>
            </div>
          </div>
        </div>

        {/* Novelty Section */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Evolance's Novel Technical Approach</h3>
          
          {/* Novelty 1: Emolytics Engine */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-400/30">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Brain className="w-8 h-8 text-indigo-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">"Emolytics" Engine</h4>
                <div className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Evolance uses <span className="font-bold text-indigo-300">advanced time-series analysis</span> (like exponential smoothing and clustering) to detect emotional triggers, anomalies, and progress over time.
                  </p>
                  <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-400/20">
                    <p className="text-white/90 text-sm font-semibold mb-2">Technical Innovation</p>
                    <p className="text-white/80 text-sm">This exceeds the journaling-based emotional models of over 90% of current mental wellness apps</p>
                    <p className="text-white/60 text-xs mt-2">Source: CB Insights, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Novelty 2: AI-Powered Decision Visualization */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-400/30">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Eye className="w-8 h-8 text-purple-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">AI-Powered Decision Visualization</h4>
                <div className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Evolance introduces a <span className="font-bold text-purple-300">first-of-its-kind emotional forecasting engine</span>: simulates how a decision might affect your emotional trajectory using NLP and past user data.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-400/20">
                    <p className="text-white/90 text-sm font-semibold mb-2">Market First</p>
                    <p className="text-white/80 text-sm">No existing platform offers emotional impact simulation for life decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Novelty 3: Visual Emotional Fingerprint + Avatar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-400/30">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Visual Emotional Fingerprint + Avatar</h4>
                <div className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    A <span className="font-bold text-blue-300">3D emotional avatar</span> and evolving fingerprint let users <span className="font-bold text-blue-300">see</span> their growth — not just read logs.
                  </p>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                    <p className="text-white/90 text-sm font-semibold mb-2">Engagement Innovation</p>
                    <p className="text-white/80 text-sm">This gamified emotional self-awareness increases engagement and reduces drop-off rates, addressing the major issue with current apps</p>
                    <p className="text-white/60 text-xs mt-2">Source: Retention Benchmarks, Adjust, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-lg text-white/90 font-light mb-4">
              Evolance combines <span className="font-bold text-indigo-300">advanced analytics</span>, <span className="font-bold text-purple-300">AI decision forecasting</span>, and <span className="font-bold text-blue-300">visual emotional intelligence</span> in a way no platform has attempted before.
            </p>
            <p className="text-white/70 text-sm">Creating the world's first emotionally intelligent AI companion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 