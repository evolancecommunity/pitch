import React from 'react';
import { AlertTriangle, Smartphone, Brain, Users } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            The Problem We're Solving
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Despite the proliferation of mental health apps and AI tools, no system today helps people feel truly understood — 
            especially when they can't even explain what's wrong.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[220px]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-white">Disconnected Generation</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Gen Z and immigrant users feel disconnected, overstimulated, and unsupported — 
              especially those dealing with cultural or psychological duality.
            </p>
            <div className="bg-blue-50/10 rounded-lg p-4 border border-blue-100/20 mt-auto">
              <p className="text-sm text-blue-100 italic font-semibold">
                "I don't fit into any box. I need something built for people like me."
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[220px]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-7 h-7 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-white">Emotional Invisibility</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Most people don't feel safe expressing what they're going through — and when they try, 
              there's no system to truly hear them.
            </p>
            <div className="bg-red-50/10 rounded-lg p-4 border border-red-100/20 mt-auto">
              <p className="text-sm text-red-100 italic font-semibold">
                "I feel overwhelmed but I can't explain why. Nothing understands me."
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[220px]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Smartphone className="w-7 h-7 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-white">Digital Burnout</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Platforms like Instagram, TikTok, and even ChatGPT optimize for dopamine and distraction — 
              not reflection or resilience.
            </p>
            <div className="bg-orange-50/10 rounded-lg p-4 border border-orange-100/20 mt-auto">
              <p className="text-sm text-orange-100 italic font-semibold">
                "I'm constantly stimulated but never satisfied. I need peace, not more content."
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full bg-white/10 rounded-2xl p-8 border border-white/10 shadow-lg min-h-[220px]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-white">Surface-Level Tools</h3>
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Mental health apps track mood or provide CBT tips but don't build long-term emotional identity.
            </p>
            <div className="bg-purple-50/10 rounded-lg p-4 border border-purple-100/20 mt-auto">
              <p className="text-sm text-purple-100 italic font-semibold">
                "I need depth, not just tracking. I want to understand myself, not just my patterns."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-10 text-white border border-white/10">
          <h3 className="text-2xl font-semibold mb-4">
            We're not solving loneliness.
          </h3>
          <p className="text-lg font-light">
            We're solving <span className="font-semibold text-blue-300">the collapse of inner clarity and self-worth.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;