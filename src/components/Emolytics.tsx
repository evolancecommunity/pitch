import React, { useState, useEffect, useRef } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush
} from 'recharts';
import { BarChart3, Brain, MessageCircle } from 'lucide-react';
import InteractiveAvatar, { EvIcon, EvBubble } from './InteractiveAvatar';
import avatar from '../assets/avatar.png';
import '../EmolyticsAnimations.css';

// Example data for each emotion
const emotionData = {
  Joy: [
    { date: 'Jun 24', intensity: 60, trigger: 'Morning walk', reasoning: 'Fresh air boosted mood' },
    { date: 'Jun 26', intensity: 70, trigger: 'Team lunch', reasoning: 'Positive social interaction' },
    { date: 'Jun 28', intensity: 50, trigger: 'Work deadline', reasoning: 'Mild stress reduced joy' },
    { date: 'Jul 1', intensity: 80, trigger: 'Job offer', reasoning: 'Excitement about new opportunity' },
    { date: 'Jul 3', intensity: 90, trigger: 'Family call', reasoning: 'Supportive conversation' },
    { date: 'Jul 5', intensity: 75, trigger: 'Gym session', reasoning: 'Physical activity uplifted mood' },
    { date: 'Jul 7', intensity: 85, trigger: 'Weekend trip', reasoning: 'Relaxation and fun' }
  ],
  Sadness: [
    { date: 'Jun 24', intensity: 40, trigger: 'Rainy weather', reasoning: 'Gloomy day affected mood' },
    { date: 'Jun 26', intensity: 35, trigger: 'Missed call', reasoning: 'Felt disconnected' },
    { date: 'Jun 28', intensity: 50, trigger: 'Work stress', reasoning: 'Overwhelmed by tasks' },
    { date: 'Jul 1', intensity: 30, trigger: 'Job offer', reasoning: 'Hopeful for change' },
    { date: 'Jul 3', intensity: 20, trigger: 'Family call', reasoning: 'Reassurance from loved ones' },
    { date: 'Jul 5', intensity: 25, trigger: 'Gym session', reasoning: 'Endorphins helped' },
    { date: 'Jul 7', intensity: 15, trigger: 'Weekend trip', reasoning: 'Distraction from worries' }
  ],
  Anger: [
    { date: 'Jun 24', intensity: 30, trigger: 'Traffic jam', reasoning: 'Frustration with commute' },
    { date: 'Jun 26', intensity: 45, trigger: 'Work conflict', reasoning: 'Disagreement with colleague' },
    { date: 'Jun 28', intensity: 20, trigger: 'Missed appointment', reasoning: 'Disappointment in self' },
    { date: 'Jul 1', intensity: 25, trigger: 'Job offer', reasoning: 'Hopeful for change' },
    { date: 'Jul 3', intensity: 35, trigger: 'Family call', reasoning: 'Supportive conversation' },
    { date: 'Jul 5', intensity: 30, trigger: 'Gym session', reasoning: 'Physical activity uplifted mood' },
    { date: 'Jul 7', intensity: 40, trigger: 'Weekend trip', reasoning: 'Relaxation and fun' }
  ],
  Fear: [
    { date: 'Jun 24', intensity: 50, trigger: 'Dark room', reasoning: 'Fear of the unknown' },
    { date: 'Jun 26', intensity: 40, trigger: 'Missed call', reasoning: 'Felt disconnected' },
    { date: 'Jun 28', intensity: 30, trigger: 'Work deadline', reasoning: 'Mild stress reduced joy' },
    { date: 'Jul 1', intensity: 20, trigger: 'Job offer', reasoning: 'Hopeful for change' },
    { date: 'Jul 3', intensity: 25, trigger: 'Family call', reasoning: 'Reassurance from loved ones' },
    { date: 'Jul 5', intensity: 15, trigger: 'Gym session', reasoning: 'Endorphins helped' },
    { date: 'Jul 7', intensity: 20, trigger: 'Weekend trip', reasoning: 'Distraction from worries' }
  ],
  Surprise: [
    { date: 'Jun 24', intensity: 20, trigger: 'Morning surprise', reasoning: 'Unexpected pleasant interaction' },
    { date: 'Jun 26', intensity: 30, trigger: 'Team lunch', reasoning: 'Positive social interaction' },
    { date: 'Jun 28', intensity: 40, trigger: 'Work deadline', reasoning: 'Mild stress reduced joy' },
    { date: 'Jul 1', intensity: 60, trigger: 'Job offer', reasoning: 'Excitement about new opportunity' },
    { date: 'Jul 3', intensity: 55, trigger: 'Family call', reasoning: 'Supportive conversation' },
    { date: 'Jul 5', intensity: 65, trigger: 'Gym session', reasoning: 'Physical activity uplifted mood' },
    { date: 'Jul 7', intensity: 70, trigger: 'Weekend trip', reasoning: 'Relaxation and fun' }
  ],
  Disgust: [
    { date: 'Jun 24', intensity: 35, trigger: 'Food taste', reasoning: 'Dislike of meal' },
    { date: 'Jun 26', intensity: 25, trigger: 'Work conflict', reasoning: 'Disagreement with colleague' },
    { date: 'Jun 28', intensity: 30, trigger: 'Work deadline', reasoning: 'Mild stress reduced joy' },
    { date: 'Jul 1', intensity: 40, trigger: 'Job offer', reasoning: 'Hopeful for change' },
    { date: 'Jul 3', intensity: 45, trigger: 'Family call', reasoning: 'Reassurance from loved ones' },
    { date: 'Jul 5', intensity: 50, trigger: 'Gym session', reasoning: 'Endorphins helped' },
    { date: 'Jul 7', intensity: 30, trigger: 'Weekend trip', reasoning: 'Distraction from worries' }
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

// Custom Tooltip for emotion analytics
interface EmolyticsTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
}
const EmolyticsTooltip: React.FC<EmolyticsTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
              <div className="relative min-w-[240px] max-w-xs px-0 py-0">
        {/* Chat bubble */}
        <div className="text-white rounded-2xl px-6 py-5 shadow-xl font-medium relative animate-fade-in-up" style={{backgroundColor: '#2A7B9B'}}>
          {/* ev avatar icon */}
          <div className="absolute -top-6 left-4 flex items-center">
            <EvIcon size={36} />
          </div>
          {/* Chat bubble tail */}
          <span className="absolute left-8 -bottom-4 w-6 h-6 rotate-45 rounded-sm" style={{clipPath:'polygon(0 0, 100% 0, 100% 100%)', backgroundColor: '#2A7B9B'}}></span>
          <div className="mb-2 mt-2 text-base font-semibold">Here's what I see in your Emolytics for <span style={{color: '#B0E0E6', fontWeight: 'bold'}}>{label?.toString()}</span>:</div>
          <div className="mb-1"><span style={{fontWeight: 'bold', color: '#B0E0E6'}}>Trigger:</span> {d.trigger || '—'}</div>
          <div className="mb-1"><span style={{fontWeight: 'bold', color: '#B0E0E6'}}>Reasoning:</span> {d.reasoning || '—'}</div>
          <div><span style={{fontWeight: 'bold', color: '#B0E0E6'}}>Intensity:</span> {d.intensity}</div>
        </div>
      </div>
    );
  }
  return null;
};

// Scroll reveal hook
function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const Emolytics: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const insightSegments = [
    'wow! you were really ',
    <span key="joy" style={{color: emotionColors.Joy}}>joyful</span>,
    ' about that job offer, weren\'t you? and i can see you\'ve been feeling more ',
    <span key="joy" style={{color: emotionColors.Joy}}>happy</span>,
    ' about your morning walks too. when you do things that make you ',
    <span key="joy" style={{color: emotionColors.Joy}}>joyful</span>,
    ', it really shows in your energy!'
  ];
  const feelingText = 'feeling amazing!';

  function useTypingAnimation(fullText: string, speed: number = 18, onDone?: () => void) {
    const [displayed, setDisplayed] = useState('');
    useEffect(() => {
      let i = 0;
      let timeout: ReturnType<typeof setTimeout>;
      function type() {
        setDisplayed(fullText.slice(0, i));
        if (i < fullText.length) {
          timeout = setTimeout(() => {
            i++;
            type();
          }, speed);
        } else if (onDone) {
          onDone();
        }
      }
      type();
      return () => clearTimeout(timeout);
    }, [fullText, speed, onDone]);
    return displayed;
  }

  const [insightDone, setInsightDone] = useState(false);
  // Custom node-based typing animation for insight (glitch-free)
  const [insightTypedNodes, setInsightTypedNodes] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    let i = 0;
    let j = 0;
    let current: React.ReactNode[] = [];
    let timeout: ReturnType<typeof setTimeout>;
    function type() {
      if (i >= insightSegments.length) {
        setInsightTypedNodes(current);
        setInsightDone(true);
        return;
      }
      const seg = insightSegments[i];
      if (typeof seg === 'string') {
        if (j < seg.length) {
          setInsightTypedNodes([...current, seg.slice(0, j + 1)]);
          j++;
          timeout = setTimeout(type, 18);
          return;
        } else {
          current = [...current, seg];
          i++;
          j = 0;
          timeout = setTimeout(type, 18);
          return;
        }
      } else {
        current = [...current, seg];
        setInsightTypedNodes(current);
        i++;
        j = 0;
        timeout = setTimeout(type, 18);
        return;
      }
    }
    type();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);
  const feelingTyped = useTypingAnimation(feelingText, 22, undefined);

  // Journal typing animation with typo
  function useJournalTypingAnimation() {
    const [journalText, setJournalText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    useEffect(() => {
      const fullText = "Feeling grateful today. The morning walk really helped clear my mind. I noticed I was more patient with my team during the meeting. Small wins, but they matter.";
      
      let currentIndex = 0;
      let isBackspacing = false;
      let backspaceIndex = 0;
      let hasTypo = false;
      let hasBackspaced = false;
      
      const typeSpeed = 50;
      const backspaceSpeed = 30;
      
      const type = () => {
        if (!isBackspacing) {
          if (currentIndex < fullText.length) {
            let currentText = fullText.slice(0, currentIndex + 1);
            
            // Introduce a typo at "patient" -> "patinet" around word 65-70
            if (currentIndex >= 65 && currentIndex < 70 && !hasTypo) {
              currentText = fullText.slice(0, 65) + "patinet" + fullText.slice(71);
              hasTypo = true;
            }
            
            setJournalText(currentText);
            currentIndex++;
            
            // Start backspacing in the middle after typing "patinet"
            if (currentIndex === 72 && hasTypo && !hasBackspaced) {
              setTimeout(() => {
                isBackspacing = true;
                backspaceIndex = currentIndex;
                backspace();
              }, 800);
            } else {
              setTimeout(type, typeSpeed);
            }
          }
        }
      };
      
      const backspace = () => {
        if (backspaceIndex > 65) {
          let currentText = fullText.slice(0, backspaceIndex - 1);
          setJournalText(currentText);
          backspaceIndex--;
          setTimeout(backspace, backspaceSpeed);
        } else {
          // Continue typing from where we backspaced
          hasBackspaced = true;
          isBackspacing = false;
          currentIndex = backspaceIndex;
          setTimeout(type, 300);
        }
      };
      
      setIsTyping(true);
      type();
      
      return () => {
        setIsTyping(false);
      };
    }, []);
    
    return { journalText, isTyping };
  }

  const { journalText, isTyping } = useJournalTypingAnimation();

  // Chat companion typing animation: strict sequence
  const evBubble1 = 'How are you feeling today?';
  const userBubble = 'I feel a bit anxious about my new job.';
  const evBubble2 = `I totally get that! New jobs can be really overwhelming. What's making you feel most anxious about it?`;

  // No typing animation: just show full text
  const ev1Typed = evBubble1;
  const userTyped = userBubble;
  const ev2Typed = evBubble2;

  const [showAvatar, setShowAvatar] = useState(false);
  useEffect(() => {
    if (insightDone) {
      setTimeout(() => setShowAvatar(true), 100);
    }
  }, [insightDone]);

  // Scroll reveal for each section - independent animations
  const [companionRef, companionVisible] = useScrollReveal(0.2);
  const [chartsRef, chartsVisible] = useScrollReveal(0.1);
  const [insightRef, insightVisible] = useScrollReveal(0.3);

  return (
    <section id="emolytics-section" className="py-16 sm:py-24 relative overflow-hidden" style={{backgroundColor: '#1D2224'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight px-4">A Glimpse of Our Features</h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4">
            Explore your emotional analytics — interactive, visual, and deeply insightful.
          </p>
        </div>

        {/* AI Chat Companion - Left/Right Layout */}
        <div ref={companionRef} className={`w-full flex flex-col items-center mb-16 sm:mb-24 mt-16 sm:mt-24 transition-all duration-700 ease-out ${companionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Blurred gradient background behind chat */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[60vw] h-[40vw] sm:h-[32vw] max-w-4xl max-h-96 rounded-3xl blur-3xl z-0" style={{pointerEvents:'none', background: 'linear-gradient(135deg, #2A7B9B20, #87CEEB15, #B0E0E610)'}}></div>
          <div className="w-full flex justify-center relative z-10">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-4">
              {/* Left Side - Meet Ev */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up drop-shadow-glow" style={{color: '#87CEEB'}}>meet ev!</h3>
                <p className="text-white/80 text-base sm:text-lg max-w-xs">Your AI companion for emotional growth</p>
              </div>
              
              {/* Right Side - Chat Bubbles */}
              <div className="flex-1 flex flex-col gap-6 sm:gap-8 items-center">
                <div className="flex w-full fade-in-bubble-1">
                  <div className="flex-shrink-0 mr-3 sm:mr-5"><EvIcon size={36} /></div>
                  <div className="px-6 sm:px-10 py-4 sm:py-5 rounded-3xl text-white/80 text-base sm:text-lg text-center max-w-2xl font-light shadow-xl animate-float-bubble-1 backdrop-blur-md border border-white/20 fade-in-bubble-1" style={{backgroundColor: '#2A7B9B80'}}>
                    {ev1Typed}
                  </div>
                </div>
                <div className="flex w-full justify-end fade-in-bubble-2">
                  <div className="px-6 sm:px-10 py-4 sm:py-5 rounded-3xl bg-white/20 text-white/80 text-base sm:text-lg text-center max-w-2xl font-light border border-white/20 shadow-xl animate-float-bubble-2 backdrop-blur-md bg-opacity-60 fade-in-bubble-2">
                    {userTyped}
                  </div>
                  <img src={avatar} alt="User avatar" className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-cover ml-3 sm:ml-5 shadow-lg border-2 border-white/20" />
                </div>
                <div className="flex w-full fade-in-bubble-3">
                  <div className="flex-shrink-0 mr-3 sm:mr-5"><EvIcon size={36} /></div>
                  <div className="px-6 sm:px-10 py-4 sm:py-5 rounded-3xl text-white/80 text-base sm:text-lg text-center max-w-2xl font-light shadow-xl animate-float-bubble-3 backdrop-blur-md border border-white/20 fade-in-bubble-3" style={{backgroundColor: '#2A7B9B80'}}>
                    {ev2Typed}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journal Space - Left/Right Layout */}
        <div className="w-full flex flex-col items-center mb-16 sm:mb-24 mt-16 sm:mt-24">
          {/* Blurred gradient background behind journal */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[60vw] h-[40vw] sm:h-[32vw] max-w-4xl max-h-96 rounded-3xl blur-3xl z-0" style={{pointerEvents:'none', background: 'linear-gradient(135deg, #8B5CF620, #A78BFA15, #C084FC10)'}}></div>
          <div className="w-full flex justify-center relative z-10">
            <div className="w-full max-w-full flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-4">
              {/* Left Side - Journal Entry */}
              <div className="flex-[4]">
                <div className="w-full backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20 shadow-xl animate-ethereal-rgb">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm font-medium">Today's Reflection</span>
                    </div>
                    <span className="text-white/60 text-xs">2 hours ago</span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-white/80 text-sm leading-relaxed">
                          "{journalText}{isTyping && <span className="animate-pulse">|</span>}"
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs border border-green-500/30">Grateful</span>
                          <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">Calm</span>
                          <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">Focused</span>
                        </div>
                      </div>
                      {/* Music Player - Right Side */}
                      <div className="flex flex-col items-center gap-2 ml-4">
                        {/* Song Details */}
                        <div className="text-center">
                          <p className="text-xs font-medium text-purple-300">Weightless</p>
                          <p className="text-xs text-purple-400/70">Marconi Union</p>
                        </div>
                        
                        {/* Music Animation */}
                        <div className="flex items-end gap-0.5 h-4">
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '6px', animationDelay: '0ms'}}></div>
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '9px', animationDelay: '150ms'}}></div>
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '12px', animationDelay: '300ms'}}></div>
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '8px', animationDelay: '450ms'}}></div>
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '10px', animationDelay: '600ms'}}></div>
                          <div className="w-0.5 bg-purple-400 rounded-full music-bar" style={{height: '7px', animationDelay: '750ms'}}></div>
                        </div>
                        
                        {/* Control Buttons */}
                        <div className="flex items-center gap-1">
                          {/* Shuffle */}
                          <button className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                            <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M10.59 9.17L5.41 4L4 5.41l5.17 5.17L10.59 9.17zM14.5 4l2.04 2.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4h-5.5zM14.83 13.41l-1.41 1.41l3.13 3.13L14.83 13.41z"/>
                            </svg>
                          </button>
                          
                          {/* Previous */}
                          <button className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                            <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                            </svg>
                          </button>
                          
                          {/* Play/Pause */}
                          <button className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                          
                          {/* Next */}
                          <button className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                            <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                            </svg>
                          </button>
                          
                          {/* Repeat */}
                          <button className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                            <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - How was your day? */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up drop-shadow-glow" style={{color: '#87CEEB'}}>how was your day?</h3>
                <p className="text-white/80 text-base sm:text-lg max-w-xs">Reflect and grow with ambient mood settings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Creative transition: Ev generates your Emolytics */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 px-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#2A7B9B'}}>
              <svg width="16" height="16" fill="none" viewBox="0 0 20 20" className="sm:w-5 sm:h-5"><path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2m12 0h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold drop-shadow-glow font-display" style={{color: '#87CEEB'}}>ev then generates your emolytics</span>
          </div>
          <div className="mt-2 text-white/80 text-base sm:text-lg text-center max-w-2xl font-light">Watch as your emotional data transforms into beautiful, interactive analytics—personalized just for you.</div>
        </div>

        {/* Ev illustration and speech bubble before Emolytics charts */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 sm:mb-10">
          {/* Remove the avatar and speech bubble before the Emolytics charts (delete the flex div with img and message) */}
        </div>

        {/* Unified Trend Graphs & Emotional Avatar */}
        <div className="w-full flex flex-col items-center mb-16 sm:mb-24 mt-16 sm:mt-24">
          {/* Blurred gradient background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[60vw] h-[40vw] sm:h-[32vw] max-w-4xl max-h-96 rounded-3xl blur-3xl z-0" style={{pointerEvents:'none', background: 'linear-gradient(135deg, #2A7B9B20, #87CEEB15, #B0E0E610)'}}></div>
          <div className="w-full flex justify-center relative z-10">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-8 sm:gap-12 px-4">
              
              {/* Left Side - Trend Graphs (Larger) */}
              <div className="flex-1 lg:flex-[2]">
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up drop-shadow-glow" style={{color: '#87CEEB'}}>your emotional trends</h3>
                  <p className="text-white/80 text-base sm:text-lg">Real-time analytics & patterns</p>
                </div>
                
                <div ref={chartsRef} className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 transition-all duration-700 ease-out ${chartsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {Object.keys(emotionData).slice(0, 4).map((emotion) => (
                    <div key={emotion} className="bg-white/5 rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow border border-white/10 touch-manipulation">
                      <h3 className="text-base sm:text-lg font-bold mb-3 text-white">{emotion}</h3>
                      <ResponsiveContainer width="100%" height={120} className="sm:h-[140px]">
                        <LineChart data={emotionData[emotion as keyof typeof emotionData]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                          <XAxis dataKey="date" tick={{ fill: '#cbd5e1', fontSize: 10 }} axisLine={false} tickLine={false} />
                          <YAxis domain={[0, 100]} hide />
                          <Tooltip 
                            content={(props) => <EmolyticsTooltip {...props} />} 
                            allowEscapeViewBox={{ x: true, y: true }}
                            wrapperStyle={{ pointerEvents: 'none', background: 'rgba(30,41,59,0.92)', boxShadow: '0 8px 32px 0 rgba(56,189,248,0.18)', borderRadius: '1rem', border: '1px solid #60a5fa', zIndex: 50 }}
                            offset={30}
                          />
                          <Line type="monotone" dataKey="intensity" stroke={emotionColors[emotion as keyof typeof emotionColors]} strokeWidth={3} dot={false} />
                          <Brush 
                            dataKey="date" 
                            height={25} 
                            stroke={emotionColors[emotion as keyof typeof emotionColors]}
                            fill={emotionColors[emotion as keyof typeof emotionColors] + '20'}
                            strokeWidth={2}
                            gap={10}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Reflective Insights (Compact) */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 lg:max-w-sm">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up drop-shadow-glow" style={{color: '#87CEEB'}}>Your Reflective Insights!</h3>
                  <p className="text-white/80 text-base sm:text-lg">AI-powered emotional insights</p>
                </div>
                
                <div ref={insightRef} className={`transition-all duration-700 ease-out ${insightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex items-center gap-3 sm:gap-5 mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center"><EvIcon size={36} /></div>
                    <div className="text-white/80 text-base sm:text-lg text-center lg:text-left max-w-xl font-light">
                      {insightTypedNodes}
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <img 
                      src={avatar} 
                      alt="Your current feel-moji" 
                      className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl object-cover mb-4 transition-all duration-700 ease-out ${showAvatar ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} 
                    />
                    <div className="text-white/80 text-base sm:text-lg text-center lg:text-left">
                      {insightDone ? (
                        <span>
                          {feelingTyped}
                          {feelingTyped.length < feelingText.length && <span className="typing-cursor">|</span>}
                        </span>
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Starting with <span style={{color: '#87CEEB'}}>Emolytics</span> for emotional trends
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-4 leading-relaxed max-w-4xl mx-auto">
            We're building a comprehensive platform for <span style={{fontWeight: 'bold', color: '#87CEEB'}}>all age groups</span> - from kids to elderly - helping everyone grow emotionally through innovative, age-appropriate approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Kids</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">Teens</span>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">Adults</span>
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">Elderly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emolytics; 