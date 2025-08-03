import React from 'react';
import { Check, X } from 'lucide-react';

const HowWeAreDifferent: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center tracking-tight">How We’re Different</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white/90 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-white/90 font-semibold">Evolance</th>
                <th className="text-center py-4 px-4 text-white/70 font-semibold">Mood Trackers</th>
                <th className="text-center py-4 px-4 text-white/70 font-semibold">AI Companions</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Emotional Analytics</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                  <span className="text-white/60 text-xs block">basic charts</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Reflective Insights</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Quick Action Slider</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Adaptive AI Companion</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                  <span className="text-white/60 text-xs block">limited</span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Emotional Fingerprint</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 text-white/90 font-medium">Journal Space with Music</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-white/90 font-medium">Privacy-First Design</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <div className="rounded-lg p-6 border border-white/10" style={{background: 'linear-gradient(135deg, #2A7B9B10, #87CEEB10, #B0E0E610)'}}>
            <p className="text-lg text-white/90 font-semibold mb-2">Key Differentiator</p>
            <p className="text-white/80 text-sm">
              Only Evolance focuses on <span style={{fontWeight: 'bold', color: '#2A7B9B'}}>preventive self-awareness</span>, <span style={{fontWeight: 'bold', color: '#87CEEB'}}>reflective insights</span>, and <span style={{fontWeight: 'bold', color: '#B0E0E6'}}>quick emotional logging</span> with integrated music therapy in one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeAreDifferent; 