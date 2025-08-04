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
      title: "No Insights",
      description: "Zero emotional pattern insights",
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
    <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Current Platforms Fail</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Our research reveals critical gaps in existing AI platforms' emotional intelligence capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, index) => (
            <div key={index} className="rounded-2xl p-6 shadow-xl border border-white/10 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.05), #2A7B9B10)'}}>
              <h3 className="text-xl font-bold mb-3" style={{color: '#ffffff'}}>{item.title}</h3>
              <p className="mb-4 text-lg" style={{color: '#87CEEB'}}>{item.description}</p>
              <p className="text-sm font-medium" style={{color: '#B0E0E6'}}>{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 