/**
 * HeroText Component
 * Displays hero section typography with responsive sizing
 */

// import React, { memo } from 'react';
// import { TYPOGRAPHY, HERO_CONTENT, COLORS } from '../constants/heroConstants';

// const HeroText = memo(function HeroText({ isMobile, isTablet }) {
//   const getTextSize = (config) => {
//     if (isMobile) return config.mobile;
//     if (isTablet) return config.tablet;
//     return config.desktop;
//   };

//   const badgeSize = getTextSize(TYPOGRAPHY.badge);
//   const headingSize = getTextSize(TYPOGRAPHY.h1);

//   return (
//     <div className="font-heading">
//       {/* Badge */}
//       <p
//         className={`${badgeSize} mb-2.5 md:mb-3.5 font-bold uppercase tracking-wider transition-all`}
//         style={{ color: COLORS.badge }}
//       >
//         {HERO_CONTENT.badge}
//       </p>

//       {/* Main Heading */}
//       <h1
//         className={`${headingSize} mb-3 md:mb-4 font-bold`}
//         style={{ color: COLORS.text.white }}
//       >
//         {HERO_CONTENT.heading.map((line, idx) => (
//           <React.Fragment key={idx}>
//             {line}
//             {idx < HERO_CONTENT.heading.length - 1 && <br />}
//           </React.Fragment>
//         ))}
//       </h1>

//       {/* Description */}
//       <p
//         className="mb-4 md:mb-5 leading-relaxed"
//         style={{ color: COLORS.text.white }}
//       >
//         {HERO_CONTENT.description.map((line, idx) => (
//           <React.Fragment key={idx}>
//             {line}
//             {idx < HERO_CONTENT.description.length - 1 && <br />}
//           </React.Fragment>
//         ))}
//       </p>

//       {/* Tagline */}
//       <p
//         className="leading-relaxed"
//         style={{ color: COLORS.text.white, marginTop: '-15px' }}
//       >
//         {HERO_CONTENT.tagline}
//       </p>
//     </div>
//   );
// });

// export default HeroText;





import React, { memo } from 'react';
import { HERO_CONTENT, COLORS } from '../constants/heroConstants';

const HeroText = memo(function HeroText({ isMobile, isTablet, isDesktop }) {
  return (
    <div className="font-heading select-none">
      {/* Badge */}
      <p
        className="font-bold uppercase tracking-widest mb-3"
        style={{
          color: COLORS.badge,
          fontSize: isMobile ? '11px' : isTablet ? '12px' : '13px',
          letterSpacing: '0.12em',
        }}
      >
        {HERO_CONTENT.badge}
      </p>

      {/* Main Heading */}
      <h1
        className="font-bold leading-[1.06] mb-4"
        style={{
          color: COLORS.text.white,
          fontSize: isMobile
            ? 'clamp(1.7rem, 7.5vw, 2.1rem)'
            : isTablet
            ? 'clamp(2.1rem, 5vw, 2.6rem)'
            : 'clamp(1.9rem, 2.6vw, 2.4rem)',
        }}
      >
        {HERO_CONTENT.heading.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < HERO_CONTENT.heading.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>

      {/* Description */}
      <p
        className="leading-relaxed mb-3"
        style={{
          color: 'rgba(255,255,255,0.88)',
          fontSize: isMobile ? '14px' : '15px',
          maxWidth: isDesktop ? '400px' : '100%',
        }}
      >
        Discover{' '}
        {HERO_CONTENT.description.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < HERO_CONTENT.description.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>

      {/* Tagline */}
      <p
        className="font-medium leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: isMobile ? '13px' : '14px',
        }}
      >
        {HERO_CONTENT.tagline}
      </p>
    </div>
  );
});

export default HeroText;