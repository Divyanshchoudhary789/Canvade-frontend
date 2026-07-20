import React, { memo } from 'react';
import { HERO_CONTENT } from '../constants/heroConstants';

const HeroText = memo(function HeroText() {
  return (
    <div className="font-sans select-none max-w-xl">
      {/* Badge */}
      <p className="text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-2 sm:mb-3 drop-shadow-xs">
        {HERO_CONTENT.badge}
      </p>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-3 sm:mb-4 drop-shadow-sm">
        {HERO_CONTENT.heading.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < HERO_CONTENT.heading.length - 1 && <br className="hidden sm:inline" />}
            {idx < HERO_CONTENT.heading.length - 1 && ' '}
          </React.Fragment>
        ))}
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-3 sm:mb-4 max-w-lg font-normal drop-shadow-xs">
        Discover{' '}
        {HERO_CONTENT.description.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < HERO_CONTENT.description.length - 1 && <br className="hidden md:inline" />}
            {idx < HERO_CONTENT.description.length - 1 && ' '}
          </React.Fragment>
        ))}
      </p>

      {/* Tagline */}
      <p className="text-xs sm:text-sm font-semibold text-emerald-200/90 tracking-wide drop-shadow-xs">
        {HERO_CONTENT.tagline}
      </p>
    </div>
  );
});

export default HeroText;