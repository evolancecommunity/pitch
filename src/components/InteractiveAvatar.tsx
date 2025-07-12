import React from 'react';
import Tilt from 'react-parallax-tilt';
import avatar from '../assets/avatar.png';
import clsx from 'clsx';

// Animated ev icon with spinner
export const EvIcon: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px 0 rgba(236,72,153,0.18)',
      position: 'relative',
    }}
  >
    <svg
      width={size * 0.55}
      height={size * 0.55}
      fill="none"
      viewBox="0 0 20 20"
      style={{ display: 'block' }}
    >
      <path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2m12 0h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

export const EvBubble: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties; iconSize?: number }> = ({ children, className = '', style = {}, iconSize = 44 }) => (
  <div className={clsx('flex items-center justify-center gap-4 w-full', className)} style={style}>
    <div className="flex-shrink-0 flex items-center justify-center" style={{height: iconSize}}>
      <EvIcon size={iconSize} />
    </div>
    <div
      className="px-8 py-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white font-medium text-lg md:text-xl animate-fade-in-up transition-none w-full"
      style={{
        minWidth: 220,
        maxWidth: 520,
        ...style,
      }}
    >
      <span className="block w-full">{children}</span>
    </div>
  </div>
);

const InteractiveAvatar: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full py-6">
      <div
        className="rounded-3xl flex items-center justify-center"
        style={{
          width: 240,
          height: 240,
          background: 'linear-gradient(135deg, #232e4d 60%, #1a1a2e 100%)',
          padding: 0,
        }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.18}
          glareColor="#a78bfa"
          glarePosition="all"
          scale={1.05}
          tiltMaxAngleX={18}
          tiltMaxAngleY={18}
          transitionSpeed={1400}
          style={{ width: 180, height: 180, background: 'none', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img
            src={avatar}
            alt="Interactive Avatar"
            className="w-full h-full object-contain"
            draggable={false}
            style={{ display: 'block' }}
          />
        </Tilt>
      </div>
    </div>
  );
};

export default InteractiveAvatar; 