import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush
} from 'recharts';

// Example data for each emotion
const emotionData = {
  Joy: [
    { date: 'Jun 24', value: 60 }, { date: 'Jun 26', value: 70 }, { date: 'Jun 28', value: 50 }, { date: 'Jul 1', value: 80 }, { date: 'Jul 3', value: 90 }, { date: 'Jul 5', value: 75 }, { date: 'Jul 7', value: 85 }
  ],
  Sadness: [
    { date: 'Jun 24', value: 40 }, { date: 'Jun 26', value: 35 }, { date: 'Jun 28', value: 50 }, { date: 'Jul 1', value: 30 }, { date: 'Jul 3', value: 20 }, { date: 'Jul 5', value: 25 }, { date: 'Jul 7', value: 15 }
  ],
  Anger: [
    { date: 'Jun 24', value: 30 }, { date: 'Jun 26', value: 45 }, { date: 'Jun 28', value: 20 }, { date: 'Jul 1', value: 25 }, { date: 'Jul 3', value: 35 }, { date: 'Jul 5', value: 30 }, { date: 'Jul 7', value: 40 }
  ],
  Fear: [
    { date: 'Jun 24', value: 50 }, { date: 'Jun 26', value: 40 }, { date: 'Jun 28', value: 30 }, { date: 'Jul 1', value: 20 }, { date: 'Jul 3', value: 25 }, { date: 'Jul 5', value: 15 }, { date: 'Jul 7', value: 20 }
  ],
  Surprise: [
    { date: 'Jun 24', value: 20 }, { date: 'Jun 26', value: 30 }, { date: 'Jun 28', value: 40 }, { date: 'Jul 1', value: 60 }, { date: 'Jul 3', value: 55 }, { date: 'Jul 5', value: 65 }, { date: 'Jul 7', value: 70 }
  ],
  Disgust: [
    { date: 'Jun 24', value: 35 }, { date: 'Jun 26', value: 25 }, { date: 'Jun 28', value: 30 }, { date: 'Jul 1', value: 40 }, { date: 'Jul 3', value: 45 }, { date: 'Jul 5', value: 50 }, { date: 'Jul 7', value: 30 }
  ]
};

const emotionColors = {
  Joy: '#facc15',
  Sadness: '#3b82f6',
  Anger: '#ef4444',
  Fear: '#a21caf',
  Surprise: '#06b6d4',
  Disgust: '#22c55e',
};

const HolographicHuman = () => (
  <svg viewBox="0 0 200 400" className="w-48 h-[28rem] mx-auto mb-4" fill="none">
    {/* Light beams under feet */}
    <g>
      <ellipse cx="100" cy="390" rx="50" ry="10" fill="url(#beamGlow)" filter="url(#beamBlur)" />
      <rect x="85" y="320" width="8" height="70" fill="url(#beamGrad)" opacity="0.5" />
      <rect x="107" y="320" width="8" height="70" fill="url(#beamGrad)" opacity="0.5" />
    </g>
    {/* Human wireframe body */}
    <g filter="url(#bodyGlow)">
      {/* Body outline (anatomically correct) */}
      <path d="M100 60 Q120 80 120 130 Q120 200 130 260 Q140 320 120 370 Q110 390 100 390 Q90 390 80 370 Q60 320 70 260 Q80 200 80 130 Q80 80 100 60 Z" stroke="#60a5fa" strokeWidth="2.5" fill="url(#bodyGradient)" fillOpacity="0.13" />
      {/* Head */}
      <ellipse cx="100" cy="40" rx="20" ry="24" fill="url(#headGradient)" stroke="#60a5fa" strokeWidth="2" />
      {/* Arms */}
      <path d="M80 130 Q40 180 80 230" stroke="#60a5fa" strokeWidth="2" fill="none" />
      <path d="M120 130 Q160 180 120 230" stroke="#60a5fa" strokeWidth="2" fill="none" />
      {/* Hands */}
      <ellipse cx="80" cy="230" rx="7" ry="10" fill="#60a5fa" fillOpacity="0.15" />
      <ellipse cx="120" cy="230" rx="7" ry="10" fill="#60a5fa" fillOpacity="0.15" />
      {/* Feet */}
      <ellipse cx="90" cy="380" rx="7" ry="6" fill="#60a5fa" fillOpacity="0.18" />
      <ellipse cx="110" cy="380" rx="7" ry="6" fill="#60a5fa" fillOpacity="0.18" />
      {/* Wireframe mesh lines */}
      <path d="M100 64 L100 390" stroke="#38bdf8" strokeWidth="1.1" opacity="0.7" />
      <path d="M85 120 Q100 140 115 120" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      <path d="M83 180 Q100 200 117 180" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      <path d="M80 260 Q100 280 120 260" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      <path d="M80 320 Q100 340 120 320" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      {/* Shoulders */}
      <path d="M85 80 Q100 100 115 80" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      {/* Chest glow */}
      <circle cx="100" cy="120" r="10" fill="url(#chestGlow)" />
    </g>
    {/* Particles */}
    <g>
      <circle cx="30" cy="60" r="1.5" fill="#60a5fa" opacity="0.5" />
      <circle cx="170" cy="90" r="1.2" fill="#38bdf8" opacity="0.4" />
      <circle cx="50" cy="200" r="1.8" fill="#60a5fa" opacity="0.3" />
      <circle cx="120" cy="300" r="1.1" fill="#38bdf8" opacity="0.4" />
      <circle cx="180" cy="250" r="1.3" fill="#60a5fa" opacity="0.3" />
    </g>
    {/* Gradients and filters */}
    <defs>
      <radialGradient id="beamGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="bodyGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="headGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1e293b" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="chestGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
      </radialGradient>
      <filter id="bodyGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="beamBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
  </svg>
);

const Emolytics: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">A Glimpse of Our Features</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Explore your emotional analytics — interactive, visual, and deeply insightful.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.keys(emotionData).map((emotion) => (
            <div key={emotion} className="bg-white/5 rounded-2xl p-4 flex flex-col items-center shadow border border-white/10">
              <h3 className="text-lg font-bold mb-2 text-white">{emotion}</h3>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={emotionData[emotion as keyof typeof emotionData]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" tick={{ fill: '#cbd5e1', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} hide />
                  <Tooltip contentStyle={{ background: '#1e293b', border: 'none', color: '#fff' }} />
                  <Line type="monotone" dataKey="value" stroke={emotionColors[emotion as keyof typeof emotionColors]} strokeWidth={3} dot={false} />
                  <Brush dataKey="date" height={30} stroke={emotionColors[emotion as keyof typeof emotionColors]} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>

        {/* Insights and 3D Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Insights Card */}
          <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Insights</h3>
            <ul className="text-white/90 text-base space-y-3">
              <li><span className="font-semibold text-blue-300">Past:</span> Before July 1, Joy and Fear were dominant emotions.</li>
              <li><span className="font-semibold text-blue-300">Present:</span> Joy is rising, Sadness is falling, and Anger is stable.</li>
              <li><span className="font-semibold text-blue-300">Decision Impact:</span> After your job change on July 1, Joy increased, Fear decreased, and Sadness dropped sharply.</li>
              <li><span className="font-semibold text-blue-300">Emotional Forecasting:</span> Based on your current emotional state, if you decide to move cities, we predict your Joy will increase by 15% and Fear will decrease by 20%.</li>
            </ul>
          </div>

          {/* Modern Human Silhouette Visualization */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">3D Emotional Body Map</h4>
            <div className="bg-blue-900/30 rounded-xl px-6 py-8 text-center text-blue-200 text-base font-medium shadow border border-blue-400/20">
              3D Emotional Body Map coming soon.<br />We are actively working on this feature.
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-2 text-xs text-white/80">
              {Object.entries(emotionColors).map(([emotion, color]) => (
                <span key={emotion} className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{background:color}}></span>{emotion}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emolytics; 