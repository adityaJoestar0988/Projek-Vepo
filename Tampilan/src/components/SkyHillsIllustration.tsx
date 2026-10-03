import React from 'react';

const SkyHillsIllustration = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Sky gradient - violet themed */}
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE9FE" />
          <stop offset="100%" stopColor="#F3F4F6" />
        </linearGradient>
        <linearGradient id="hillGradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="hillGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="hillGradient3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#6C47D9" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="400" height="250" fill="url(#skyGradient)" rx="12" />

      {/* Clouds */}
      <g className="animate-cloud-drift" opacity="0.7">
        {/* Cloud 1 */}
        <ellipse cx="100" cy="60" rx="35" ry="18" fill="white" />
        <ellipse cx="80" cy="55" rx="22" ry="15" fill="white" />
        <ellipse cx="120" cy="55" rx="22" ry="15" fill="white" />
        
        {/* Cloud 2 */}
        <ellipse cx="280" cy="45" rx="30" ry="14" fill="white" />
        <ellipse cx="265" cy="40" rx="18" ry="12" fill="white" />
        <ellipse cx="295" cy="40" rx="18" ry="12" fill="white" />
      </g>

      <g opacity="0.5">
        {/* Cloud 3 (smaller, more distant) */}
        <ellipse cx="200" cy="75" rx="20" ry="10" fill="white" />
        <ellipse cx="190" cy="72" rx="13" ry="8" fill="white" />
        <ellipse cx="210" cy="72" rx="13" ry="8" fill="white" />
      </g>

      {/* Back hills (darkest violet) */}
      <path
        d="M0 180 Q50 120 120 155 Q180 130 240 150 Q300 110 360 140 Q400 125 400 155 L400 250 L0 250 Z"
        fill="url(#hillGradient3)"
      />

      {/* Middle hills */}
      <path
        d="M0 190 Q60 140 140 170 Q200 145 260 165 Q320 130 380 160 Q400 150 400 170 L400 250 L0 250 Z"
        fill="url(#hillGradient2)"
      />

      {/* Front hills (lightest violet) */}
      <path
        d="M0 210 Q80 160 160 190 Q220 170 280 195 Q340 165 400 185 L400 250 L0 250 Z"
        fill="url(#hillGradient1)"
      />
    </svg>
  );
};

export default SkyHillsIllustration;
