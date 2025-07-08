import React from 'react';

const Research: React.FC = () => {
  const researchData = [
    {
      title: "Basic Models",
      description: "90% use simple journaling models",
      source: "CB Insights, 2023"
    },
    {
      title: "Poor Retention", 
      description: "6% average 30-day retention",
      source: "Adjust, 2023"
    },
    {
      title: "No Visualization",
      description: "<5% offer emotional tracking",
      source: "SensorTower, 2023"
    },
    {
      title: "No Forecasting",
      description: "Zero emotional impact simulation",
      source: "Market Research, 2024"
    },
    {
      title: "Surface AI",
      description: "Lack emotional intelligence depth",
      source: "AI Research Review, 2024"
    },
    {
      title: "No Identity",
      description: "No unique emotional fingerprint",
      source: "UX Research, 2024"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Current Platforms Fail</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Our research reveals critical gaps in existing AI platforms' emotional intelligence capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 shadow-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/80 mb-4 text-lg">{item.description}</p>
              <p className="text-sm text-blue-300 font-medium">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 