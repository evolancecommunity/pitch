import React from 'react';
import { Globe } from 'lucide-react';

type LinkedInIconProps = { className?: string };
const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = "inline ml-2 mb-1" }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
);

const Team: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
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
        <div className="flex justify-center gap-8 sm:gap-12 mt-6 sm:mt-8 mb-6 sm:mb-8">
          <div className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full animate-ethereal-rgb" style={{background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.3))'}}></div>
            <img 
              src="/src/assets/dp.jpeg" 
              alt="Indraneel Bhattacharjee" 
              className="w-full h-full rounded-full object-cover border-2 border-white/20 relative z-10"
              style={{filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'}}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center">
              <a href="https://www.linkedin.com/in/indraneel24/" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline flex items-center min-h-[44px] touch-manipulation">Indraneel Bhattacharjee <LinkedInIcon /></a>
            </h3>
            <p className="text-white text-lg sm:text-xl mb-4 leading-relaxed font-normal">Founder & CEO (US)</p>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed font-light" style={{color: '#87CEEB'}}>Indraneel is a builder, engineer, and founder passionate about emotional intelligence and AI. He created Evolance to help people process what they can't articulate and find clarity in their lives.</p>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg mb-0 list-disc list-inside leading-relaxed" style={{color: '#B0E0E6'}}>
              <li>Helped business owners with 40+ years of experience build strategies to introduce and sell AI products for their growth</li>
              <li>Graduated CS with 3 internships in just 2 years</li>
              <li>Built multiple AI systems (LLM agents, voice bots, scraping infra)</li>
              <li>Accepted into the MongoDB Startup Accelerator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;