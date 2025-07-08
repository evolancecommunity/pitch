import React from 'react';

// Placeholder chart component
const EmotionChart = ({ emotion, color }: { emotion: string; color: string }) => (
  <div className="bg-white/5 rounded-2xl p-4 flex flex-col items-center shadow border border-white/10">
    <h3 className="text-lg font-bold mb-2 text-white">{emotion}</h3>
    <div className="w-full h-24 flex items-end">
      {/* Placeholder for chart - replace with real chart lib if needed */}
      <div className="w-full h-full bg-gradient-to-t from-transparent to-[var(--color)]" style={{ background: `linear-gradient(to top, ${color}33 0%, transparent 100%)` }} />
    </div>
  </div>
);

// 3D Human Body SVG with color overlays for emotions
const HumanBody3D = ({ emotionColors }: { emotionColors: { [region: string]: string } }) => (
  <svg viewBox="0 0 120 300" className="w-32 h-64 mx-auto mb-4">
    {/* Head */}
    <ellipse cx="60" cy="40" rx="22" ry="28" fill={emotionColors.head || '#eee'} fillOpacity="0.7" />
    {/* Torso */}
    <rect x="38" y="68" width="44" height="80" rx="22" fill={emotionColors.torso || '#eee'} fillOpacity="0.7" />
    {/* Left Arm */}
    <rect x="10" y="80" width="20" height="70" rx="10" fill={emotionColors.leftArm || '#eee'} fillOpacity="0.7" />
    {/* Right Arm */}
    <rect x="90" y="80" width="20" height="70" rx="10" fill={emotionColors.rightArm || '#eee'} fillOpacity="0.7" />
    {/* Left Leg */}
    <rect x="40" y="150" width="14" height="80" rx="7" fill={emotionColors.leftLeg || '#eee'} fillOpacity="0.7" />
    {/* Right Leg */}
    <rect x="66" y="150" width="14" height="80" rx="7" fill={emotionColors.rightLeg || '#eee'} fillOpacity="0.7" />
    {/* Outline */}
    <ellipse cx="60" cy="40" rx="22" ry="28" fill="none" stroke="#fff" strokeWidth="2" />
    <rect x="38" y="68" width="44" height="80" rx="22" fill="none" stroke="#fff" strokeWidth="2" />
    <rect x="10" y="80" width="20" height="70" rx="10" fill="none" stroke="#fff" strokeWidth="2" />
    <rect x="90" y="80" width="20" height="70" rx="10" fill="none" stroke="#fff" strokeWidth="2" />
    <rect x="40" y="150" width="14" height="80" rx="7" fill="none" stroke="#fff" strokeWidth="2" />
    <rect x="66" y="150" width="14" height="80" rx="7" fill="none" stroke="#fff" strokeWidth="2" />
  </svg>
);

const Emolytics: React.FC = () => {
  // Example emotion color mapping for the 3D body
  const emotionColors = {
    head: '#facc15', // Joy (yellow)
    torso: '#3b82f6', // Sadness (blue)
    leftArm: '#ef4444', // Anger (red)
    rightArm: '#a21caf', // Fear (purple)
    leftLeg: '#06b6d4', // Surprise (cyan)
    rightLeg: '#22c55e', // Disgust (green)
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Emolytics</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Your Emotional Analytics — visualized and explained.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <EmotionChart emotion="Joy" color="#facc15" />
          <EmotionChart emotion="Sadness" color="#3b82f6" />
          <EmotionChart emotion="Anger" color="#ef4444" />
          <EmotionChart emotion="Fear" color="#a21caf" />
          <EmotionChart emotion="Surprise" color="#06b6d4" />
          <EmotionChart emotion="Disgust" color="#22c55e" />
        </div>

        {/* Insights and 3D Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Insights Card */}
          <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Insights</h3>
            <ul className="text-white/90 text-base space-y-3">
              <li><span className="font-semibold text-blue-300">Past:</span> Before July 1, Joy and Fear were dominant emotions.</li>
              <li><span className="font-semibold text-blue-300">Present:</span> Joy is rising, Sadness is falling, and Anger is stable.</li>
              <li><span className="font-semibold text-blue-300">Future:</span> If current trends continue, Joy will remain high and Sadness will stay low.</li>
              <li><span className="font-semibold text-blue-300">Decision Impact:</span> After your job change on July 1, Joy increased, Fear decreased, and Sadness dropped sharply.</li>
            </ul>
          </div>

          {/* 3D Human Body Visualization */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">3D Emotional Body Map</h4>
            <HumanBody3D emotionColors={emotionColors} />
            <div className="flex flex-wrap gap-2 justify-center mt-2 text-xs text-white/80">
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#facc15'}}></span>Joy</span>
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#3b82f6'}}></span>Sadness</span>
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#ef4444'}}></span>Anger</span>
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#a21caf'}}></span>Fear</span>
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#06b6d4'}}></span>Surprise</span>
              <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:'#22c55e'}}></span>Disgust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emolytics; 