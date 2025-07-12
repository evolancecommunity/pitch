import React from 'react';
import { Globe } from 'lucide-react';

type LinkedInIconProps = { className?: string };
const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = "inline ml-2 mb-1" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
);

const Team: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight px-4">
            Meet the mind behind Evolance
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4">
            Building Evolance from lived experience — not theory.
          </p>
        </div>
        <div className="flex justify-center gap-6 sm:gap-8 mt-6 sm:mt-8 mb-6 sm:mb-8">
          <div className="bg-white/5 rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10 hover:border-blue-400/30 active:border-blue-400/50 transition-all duration-300 w-full max-w-3xl flex flex-col md:flex-row items-start gap-4 sm:gap-6 touch-manipulation">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mr-0 md:mr-6 mb-3 sm:mb-4 md:mb-0">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center">
                <a href="https://www.linkedin.com/in/indraneel24/" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline flex items-center min-h-[44px] touch-manipulation">Indraneel Bhattacharjee <LinkedInIcon /></a>
              </h3>
              <div className="mb-2 sm:mb-3" />
              <p className="text-white text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed font-normal">Founder & CEO (US)</p>
              <div className="mb-2 sm:mb-3" />
              <p className="text-white/80 text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed font-light">Indraneel is a builder, engineer, and founder passionate about emotional intelligence and AI. He created Evolance to help people process what they can't articulate and find clarity in their lives.</p>
              <div className="mb-2 sm:mb-3" />
              <ul className="space-y-2 sm:space-y-4 text-white/80 text-sm sm:text-base mb-0 list-disc list-inside leading-relaxed">
                <li>Graduated CS with 3 internships in just 2 years</li>
                <li>Built multiple AI systems (LLM agents, voice bots, scraping infra)</li>
                <li>Accepted into the MongoDB Startup Accelerator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;