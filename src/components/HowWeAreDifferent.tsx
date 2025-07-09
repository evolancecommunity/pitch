import React from 'react';
import { Check, X } from 'lucide-react';

const HowWeAreDifferent: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
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
                <td className="py-4 px-4 text-white/90 font-medium">Decision Forecasting</td>
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
                <td className="py-4 px-4 text-white/90 font-medium">3D Emotional Avatar</td>
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
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-white/10">
            <p className="text-lg text-white/90 font-semibold mb-2">Key Differentiator</p>
            <p className="text-white/80 text-sm">
              Only Evolance combines <span className="font-bold text-green-300">analytics</span>, <span className="font-bold text-blue-300">decision forecasting</span>, and <span className="font-bold text-purple-300">visual emotional intelligence</span> in one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeAreDifferent; 