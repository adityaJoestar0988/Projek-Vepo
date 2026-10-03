import React from 'react';

interface LilyBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
  position?: 'top-right' | 'bottom-left' | 'center' | 'top-left' | 'bottom-right';
}

const LilyBackground = ({
  className = '',
  color = '#A78BFA',
  opacity = 0.08,
  position = 'top-right',
}: LilyBackgroundProps) => {
  const positionClasses: Record<string, string> = {
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] animate-gentle-sway"
      >
        {/* Lily flower 1 - top center */}
        <g transform="translate(300, 100) rotate(15)">
          {/* Petals */}
          <path
            d="M0,-80 C20,-60 30,-20 10,10 C0,20 -10,20 -10,10 C-30,-20 -20,-60 0,-80Z"
            fill={color}
          />
          <path
            d="M0,-80 C30,-50 50,-10 30,20 C20,30 10,25 15,15 C25,-15 15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M0,-80 C-30,-50 -50,-10 -30,20 C-20,30 -10,25 -15,15 C-25,-15 -15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          {/* More petals spread */}
          <path
            d="M30,-60 C60,-30 70,10 50,40 C40,50 30,45 35,30 C50,0 45,-35 30,-60Z"
            fill={color}
            opacity="0.6"
          />
          <path
            d="M-30,-60 C-60,-30 -70,10 -50,40 C-40,50 -30,45 -35,30 C-50,0 -45,-35 -30,-60Z"
            fill={color}
            opacity="0.6"
          />
          {/* Wide petals */}
          <path
            d="M50,-30 C80,0 85,40 60,65 C50,72 40,65 48,50 C65,25 60,-10 50,-30Z"
            fill={color}
            opacity="0.5"
          />
          <path
            d="M-50,-30 C-80,0 -85,40 -60,65 C-50,72 -40,65 -48,50 C-65,25 -60,-10 -50,-30Z"
            fill={color}
            opacity="0.5"
          />
          {/* Center / pistils */}
          <circle cx="0" cy="0" r="8" fill={color} opacity="0.9" />
          <circle cx="5" cy="-5" r="3" fill={color} />
          <circle cx="-5" cy="-5" r="3" fill={color} />
          <circle cx="0" cy="5" r="3" fill={color} />
        </g>

        {/* Lily flower 2 - bottom left */}
        <g transform="translate(120, 420) rotate(-20) scale(0.85)">
          <path
            d="M0,-80 C20,-60 30,-20 10,10 C0,20 -10,20 -10,10 C-30,-20 -20,-60 0,-80Z"
            fill={color}
          />
          <path
            d="M0,-80 C30,-50 50,-10 30,20 C20,30 10,25 15,15 C25,-15 15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M0,-80 C-30,-50 -50,-10 -30,20 C-20,30 -10,25 -15,15 C-25,-15 -15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M30,-60 C60,-30 70,10 50,40 C40,50 30,45 35,30 C50,0 45,-35 30,-60Z"
            fill={color}
            opacity="0.6"
          />
          <path
            d="M-30,-60 C-60,-30 -70,10 -50,40 C-40,50 -30,45 -35,30 C-50,0 -45,-35 -30,-60Z"
            fill={color}
            opacity="0.6"
          />
          <path
            d="M50,-30 C80,0 85,40 60,65 C50,72 40,65 48,50 C65,25 60,-10 50,-30Z"
            fill={color}
            opacity="0.5"
          />
          <path
            d="M-50,-30 C-80,0 -85,40 -60,65 C-50,72 -40,65 -48,50 C-65,25 -60,-10 -50,-30Z"
            fill={color}
            opacity="0.5"
          />
          <circle cx="0" cy="0" r="8" fill={color} opacity="0.9" />
        </g>

        {/* Lily flower 3 - right side */}
        <g transform="translate(480, 280) rotate(30) scale(0.7)">
          <path
            d="M0,-80 C20,-60 30,-20 10,10 C0,20 -10,20 -10,10 C-30,-20 -20,-60 0,-80Z"
            fill={color}
          />
          <path
            d="M0,-80 C30,-50 50,-10 30,20 C20,30 10,25 15,15 C25,-15 15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M0,-80 C-30,-50 -50,-10 -30,20 C-20,30 -10,25 -15,15 C-25,-15 -15,-55 0,-80Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M30,-60 C60,-30 70,10 50,40 C40,50 30,45 35,30 C50,0 45,-35 30,-60Z"
            fill={color}
            opacity="0.6"
          />
          <path
            d="M-30,-60 C-60,-30 -70,10 -50,40 C-40,50 -30,45 -35,30 C-50,0 -45,-35 -30,-60Z"
            fill={color}
            opacity="0.6"
          />
          <circle cx="0" cy="0" r="8" fill={color} opacity="0.9" />
        </g>

        {/* Stems and leaves */}
        <g opacity="0.4">
          {/* Stem 1 */}
          <path
            d="M300,170 C295,250 280,350 260,500"
            stroke={color}
            strokeWidth="3"
            fill="none"
          />
          {/* Leaf 1 */}
          <path
            d="M290,250 C260,240 230,260 220,290 C240,275 270,265 290,250Z"
            fill={color}
          />
          {/* Leaf 2 */}
          <path
            d="M285,320 C310,310 340,325 350,350 C330,335 305,330 285,320Z"
            fill={color}
          />

          {/* Stem 2 */}
          <path
            d="M140,350 C145,400 150,440 160,500"
            stroke={color}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Leaf */}
          <path
            d="M145,400 C170,395 190,410 195,430 C178,418 160,410 145,400Z"
            fill={color}
          />

          {/* Stem 3 */}
          <path
            d="M475,350 C470,400 455,450 440,500"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* Small buds */}
        <g opacity="0.35">
          <ellipse cx="200" cy="200" rx="12" ry="25" fill={color} transform="rotate(-30 200 200)" />
          <ellipse cx="450" cy="150" rx="10" ry="20" fill={color} transform="rotate(20 450 150)" />
          <ellipse cx="100" cy="300" rx="8" ry="18" fill={color} transform="rotate(-15 100 300)" />
        </g>
      </svg>
    </div>
  );
};

export default LilyBackground;
