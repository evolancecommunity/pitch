import React from 'react';
import { Globe, Code, Palette } from 'lucide-react';

type LinkedInIconProps = { className?: string };
const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = "inline ml-2 mb-1" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
);

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Meet the minds behind Evolance
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We're building Evolance from lived experience — not theory.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white inline-block border border-white/10">
            <p className="text-lg font-light">
              Our mission:<br/>
              <span className="font-semibold text-blue-300">To build AI that doesn't just understand humans — but heals them.</span>
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Evolance Company Card - Full Width */}
          <div className="backdrop-blur-md bg-gradient-to-br from-indigo-700/60 via-purple-700/60 to-blue-700/60 rounded-2xl p-10 shadow-2xl border border-white/20 flex flex-col justify-between items-center w-full">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-extrabold text-white mb-2 flex items-center drop-shadow-lg tracking-wide">
                Evolance
                <a href="https://www.linkedin.com/company/theempoweredcommunity" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline"><LinkedInIcon className="w-7 h-7 text-blue-300 drop-shadow" /></a>
              </h3>
              <p className="text-white/90 text-center mb-6 font-medium text-lg max-w-2xl">Follow us on LinkedIn for updates, stories, and opportunities to join our mission.</p>
              <a href="https://www.linkedin.com/company/theempoweredcommunity" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg tracking-wide drop-shadow-lg">Follow us on LinkedIn</a>
            </div>
          </div>

          {/* Team Tree Structure */}
          <div className="flex flex-col items-center space-y-8">
            {/* Indraneel - Founder & CEO (Top) */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-blue-400/30 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 w-full max-w-2xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6">
                  <Globe className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <a href="https://www.linkedin.com/in/indraneel24/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">Indraneel Bhattacharjee <LinkedInIcon /></a>
                  </h3>
                  <p className="text-white/80 text-lg">Founder & CEO (India)</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/80 text-sm mb-6">
                <li>• Indian immigrant on OPT</li>
                <li>• Graduated CS with 3 internships in just 2 years</li>
                <li>• Built multiple AI systems (LLM agents, voice bots, scraping infra)</li>
                <li>• Accepted into the MongoDB Startup Accelerator</li>
              </ul>
              <blockquote className="bg-blue-100/10 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-white/90 italic text-sm">
                  "I didn't build Evolance for users. I built it for the kid I used to be — overwhelmed, invisible, and still trying to survive."
                </p>
              </blockquote>
            </div>

            {/* Connection Line */}
            <div className="w-px h-12 bg-gradient-to-b from-blue-400/50 to-transparent"></div>

            {/* Two Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Engineer Member */}
              <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-indigo-400/30 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-7 h-7 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Kyle Padayachee</h3>
                    <p className="text-white/80 text-sm">Lead Engineer (South Africa)</p>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li>• Full-stack engineer: frontend, backend, and AI systems</li>
                  <li>• Built the AI Companion interface, Verified Feed, and session tracking logic</li>
                  <li>• Developed emotional To-Do generators and growth feedback systems</li>
                  <li>• Focuses on secure emotional data handling and high-performance UI</li>
                </ul>
                <blockquote className="bg-indigo-100/10 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="text-white/90 italic text-sm">
                    "I believe in building products that make people feel seen and safe. From backend AI to the UI you touch, Evolance is the most meaningful code I've ever written."
                  </p>
                </blockquote>
              </div>

              {/* Designer Member */}
              <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-purple-400/30 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Palette className="w-7 h-7 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Rosemary Parades Vasquez</h3>
                    <p className="text-white/80 text-sm">Lead Designer (Bolivia)</p>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80 text-sm mb-6">
                  <li>• Human-centered designer with deep focus on emotional UX</li>
                  <li>• Designed Evolance's bubble experience and deep awareness journey</li>
                  <li>• Specializes in creating interfaces that support stillness, reflection, and safety</li>
                </ul>
                <blockquote className="bg-purple-100/10 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="text-white/90 italic text-sm">
                    "Design is about creating space for people to feel safe being themselves. Evolance is my way of making that space real."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;