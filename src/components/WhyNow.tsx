import React from 'react';

const whyNowData = [
  {
    stat: 'AI Adoption at All-Time High',
    insight: 'Global AI adoption has doubled since 2019, with 77% of businesses now using AI (IBM, 2023).',
    source: 'IBM Global AI Adoption Index, 2023'
  },
  {
    stat: 'Mental Health Crisis',
    insight: '1 in 4 people will be affected by mental or neurological disorders at some point in their lives (WHO, 2023).',
    source: 'World Health Organization, 2023'
  },
  {
    stat: 'Demand for Emotional Intelligence',
    insight: 'Jobs requiring emotional intelligence are growing 6x faster than others (LinkedIn, 2023).',
    source: 'LinkedIn Global Talent Trends, 2023'
  }
];

const WhyNow: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Now?</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            The convergence of AI adoption, mental health urgency, and demand for emotional intelligence makes this the perfect moment for Evolance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyNowData.map((item, idx) => (
            <div key={idx} className="bg-white/10 rounded-2xl p-8 shadow-xl border border-blue-400/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">{item.stat}</h3>
              <p className="text-white/80 mb-4 text-lg">{item.insight}</p>
              <p className="text-sm text-blue-300 font-medium">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNow; 