/**
 * HeroContainer Component
 * Main container with responsive layout handling
 * Manages background image and content positioning
 */

// import React, { memo } from "react";
// import HeroText from "./HeroText";
// import SearchForm from "./SearchForm";
// import { RESPONSIVE_HEIGHT, HERO_IMAGES } from "../constants/heroConstants";

// const BackgroundImage = memo(function BackgroundImage({
//   src,
//   isFading,
//   alt = "Hero Background",
// }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="absolute inset-0 h-full w-full object-cover transition-opacity duration-800 ease-out"
//       style={{
//         objectPosition: "55% center",
//         opacity: isFading ? 0 : 1,
//       }}
//       loading="eager"
//       decoding="async"
//     />
//   );
// });

// const MobileTabletLayout = memo(function MobileTabletLayout({
//   isVisible,
//   isMobile,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   return (
//     <div
//       className="relative z-10 flex flex-col gap-10"
//       style={{
//         padding: isMobile ? "2rem 1.25rem 1.25rem" : "3rem 2.5rem 3rem",
//         animation: "fadeUp 0.6s ease forwards",
//       }}
//     >
//       <HeroText isMobile={isMobile} isTablet={!isMobile} />

//       <SearchForm
//         formData={formData}
//         errors={errors}
//         touched={touched}
//         onFieldChange={onFieldChange}
//         onFieldBlur={onFieldBlur}
//         onSubmit={onFormSubmit}
//         isMobile={isMobile}
//         isTablet={!isMobile}
//       />
//     </div>
//   );
// });

// const DesktopLayout = memo(function DesktopLayout({
//   isVisible,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   return (
//     <>
//       {/* Hero Text - Left Side */}
//       <div
//         className="absolute z-10 w-2/5"
//         style={{
//           left: "48px",
//           top: "28%",
//           transform: isVisible ? "translateY(-50%)" : "translate(-20px,-50%)",
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.8s ease-out",
//           maxWidth: "460px",
//         }}
//       >
//         <HeroText isMobile={false} isTablet={false} />
//       </div>

//       {/* Search Form - Right Side */}
//       <div
//         className="absolute z-10 w-[42%] max-w-[460px] min-w-0"
//         style={{
//           right: "clamp(20px,4vw,48px)",
//           bottom: "-4px",
//           transform: isVisible ? "translateY(0)" : "translateX(20px)",
//           opacity: isVisible ? 1 : 0,
//           transition: "all 0.8s ease-out",
//         }}
//       >
//         <div
//           className="rounded-t-2xl bg-white"
//           style={{
//             minHeight: "500px",
//             boxShadow: "none",
//           }}
//         >
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile={false}
//             isTablet={false}
//           />
//         </div>
//       </div>
//     </>
//   );
// });

// const HeroContainer = memo(function HeroContainer({
//   currentImageIndex,
//   isFading,
//   isVisible,
//   isMobile,
//   isTablet,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   const backgroundImage = HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0];

//   return (
//     <div
//       className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
//       style={{
//         borderRadius: isMobile ? "1.5rem" : "2rem",
//         height: isMobile || isTablet ? "auto" : RESPONSIVE_HEIGHT.desktop,
//         minHeight:
//           isMobile || isTablet ? "unset" : RESPONSIVE_HEIGHT.minHeightDesktop,
//         maxHeight:
//           isMobile || isTablet ? "none" : RESPONSIVE_HEIGHT.maxHeightDesktop,
//       }}
//       role="banner"
//       aria-label="Hero section"
//     >
//       {/* Background Image */}
//       <BackgroundImage src={backgroundImage} isFading={isFading} />

//       {/* Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "transparent",
//           zIndex: 5,
//         }}
//         aria-hidden="true"
//       />

//       {/* Content */}
//       {isMobile || isTablet ? (
//         <MobileTabletLayout
//           isVisible={isVisible}
//           isMobile={isMobile}
//           formData={formData}
//           errors={errors}
//           touched={touched}
//           onFieldChange={onFieldChange}
//           onFieldBlur={onFieldBlur}
//           onFormSubmit={onFormSubmit}
//         />
//       ) : (
//         <DesktopLayout
//           isVisible={isVisible}
//           formData={formData}
//           errors={errors}
//           touched={touched}
//           onFieldChange={onFieldChange}
//           onFieldBlur={onFieldBlur}
//           onFormSubmit={onFormSubmit}
//         />
//       )}
//     </div>
//   );
// });

// export default HeroContainer;







// import React, { memo } from 'react';
// import HeroText from './HeroText';
// import SearchForm from './SearchForm';
// import { HERO_IMAGES } from '../constants/heroConstants';

// const BackgroundImage = memo(function BackgroundImage({ src, isFading, alt = 'Hero Background' }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="absolute inset-0 h-full w-full object-cover"
//       style={{
//         objectPosition: 'center center',
//         opacity: isFading ? 0 : 1,
//         transition: 'opacity 0.8s ease-out',
//       }}
//       loading="eager"
//       decoding="async"
//     />
//   );
// });

// const HeroContainer = memo(function HeroContainer({
//   currentImageIndex,
//   isFading,
//   isVisible,
//   isMobile,
//   isTablet,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   const backgroundImage = HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0];

//   return (
//     <div
//       className="hero-root relative overflow-hidden bg-gradient-to-br from-gray-900 to-teal-900"
//       role="banner"
//       aria-label="Hero section"
//     >
//       {/* Background Image */}
//       <BackgroundImage src={backgroundImage} isFading={isFading} />

//       {/* Dark overlay — stronger on mobile for text legibility */}
//       <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: isMobile
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%)'
//             : isTablet
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 100%)'
//             : 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0.0) 100%)',
//         }}
//         aria-hidden="true"
//       />

//       {/* ── MOBILE layout ── */}
//       {isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-4 pt-8 pb-6 gap-6"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile isTablet={false} isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile
//             isTablet={false}
//           />
//         </div>
//       )}

//       {/* ── TABLET layout ── */}
//       {isTablet && !isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-8 pt-10 pb-8 gap-8"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile={false} isTablet isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile={false}
//             isTablet
//           />
//         </div>
//       )}

//       {/* ── DESKTOP layout ── */}
//       {!isMobile && !isTablet && (
//         <div className="relative z-10 flex items-stretch" style={{ minHeight: 'clamp(640px, 74vh, 800px)' }}>
//           {/* LEFT — hero text, vertically centered */}
//           <div
//             className="flex items-center"
//             style={{
//               width: '48%',
//               paddingLeft: 'clamp(3rem, 5vw, 5rem)',
//               paddingRight: '2rem',
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
//             }}
//           >
//             <HeroText isMobile={false} isTablet={false} isDesktop />
//           </div>

//           {/* RIGHT — search form, vertically centered, flush to right edge */}
//           <div
//             className="flex items-center justify-end"
//             style={{
//               width: '52%',
//               paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
//               paddingTop: '2rem',
//               paddingBottom: '2rem',
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out 0.1s',
//             }}
//           >
//             <div
//               className="w-full rounded-2xl bg-white"
//               style={{ maxWidth: '460px', minWidth: '400px' }}
//             >
//               <SearchForm
//                 formData={formData}
//                 errors={errors}
//                 touched={touched}
//                 onFieldChange={onFieldChange}
//                 onFieldBlur={onFieldBlur}
//                 onSubmit={onFormSubmit}
//                 isMobile={false}
//                 isTablet={false}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default HeroContainer;


// import React, { memo } from 'react';
// import HeroText from './HeroText';
// import SearchForm from './SearchForm';
// import { HERO_IMAGES } from '../constants/heroConstants';

// const BackgroundImage = memo(function BackgroundImage({ src, isFading, alt = 'Hero Background' }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="absolute inset-0 h-full w-full object-cover"
//       style={{
//         objectPosition: 'center center',
//         opacity: isFading ? 0 : 1,
//         transition: 'opacity 0.8s ease-out',
//       }}
//       loading="eager"
//       decoding="async"
//     />
//   );
// });

// const HeroContainer = memo(function HeroContainer({
//   currentImageIndex,
//   isFading,
//   isVisible,
//   isMobile,
//   isTablet,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   const backgroundImage = HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0];

//   return (
//     <div
//       className="hero-root relative overflow-hidden bg-gradient-to-br from-gray-900 to-teal-900"
//       role="banner"
//       aria-label="Hero section"
//       style={{
//         borderRadius: isMobile ? '1rem' : '1.5rem',  // FIX 3: corner radius
//       }}
//     >
//       {/* Background Image */}
//       <BackgroundImage src={backgroundImage} isFading={isFading} />

//       {/* Dark overlay */}
//       <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: isMobile
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%)'
//             : isTablet
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 100%)'
//             : 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0.0) 100%)',
//         }}
//         aria-hidden="true"
//       />

//       {/* ── MOBILE layout ── */}
//       {isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-4 pt-8 pb-6 gap-6"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile isTablet={false} isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile
//             isTablet={false}
//           />
//         </div>
//       )}

//       {/* ── TABLET layout ── */}
//       {isTablet && !isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-8 pt-10 pb-8 gap-8"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile={false} isTablet isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile={false}
//             isTablet
//           />
//         </div>
//       )}

//       {/* ── DESKTOP layout ── */}
//       {!isMobile && !isTablet && (
//         <div
//           className="relative z-10 flex"
//           style={{ minHeight: 'clamp(640px, 74vh, 800px)' }}
//         >
//           {/* LEFT — hero text, top aligned (shoulder level) */}
//           <div
//             className="flex items-start"
//             style={{
//               width: '48%',
//               paddingLeft: 'clamp(3rem, 5vw, 5rem)',
//               paddingRight: '2rem',
//               paddingTop: '10%',           // FIX 2: top aligned at shoulder
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
//             }}
//           >
//             <HeroText isMobile={false} isTablet={false} isDesktop />
//           </div>

//           {/* RIGHT — form bottom aligned at -2px */}
//           <div
//             className="flex items-end justify-end"
//             style={{
//               width: '52%',
//               paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
//               paddingBottom: '0px',        // FIX 1: flush to bottom
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out 0.1s',
//             }}
//           >
//             <div
//               className="w-full bg-white"
//               style={{
//                 maxWidth: '460px',
//                 minWidth: '400px',
//                 borderRadius: '1.25rem 1.25rem 0 0',  // FIX 1: top radius only, bottom flush
//                 marginBottom: '-2px',                   // FIX 1: -2px overlap
//               }}
//             >
//               <SearchForm
//                 formData={formData}
//                 errors={errors}
//                 touched={touched}
//                 onFieldChange={onFieldChange}
//                 onFieldBlur={onFieldBlur}
//                 onSubmit={onFormSubmit}
//                 isMobile={false}
//                 isTablet={false}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default HeroContainer;



// import React, { memo } from 'react';
// import HeroText from './HeroText';
// import SearchForm from './SearchForm';
// import { HERO_IMAGES } from '../constants/heroConstants';

// const BackgroundImage = memo(function BackgroundImage({ src, isFading, alt = 'Hero Background' }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="absolute inset-0 h-full w-full object-cover"
//       style={{
//         objectPosition: 'center center',
//         opacity: isFading ? 0 : 1,
//         transition: 'opacity 0.8s ease-out',
//       }}
//       loading="eager"
//       decoding="async"
//     />
//   );
// });

// const HeroContainer = memo(function HeroContainer({
//   currentImageIndex,
//   isFading,
//   isVisible,
//   isMobile,
//   isTablet,
//   formData,
//   errors,
//   touched,
//   onFieldChange,
//   onFieldBlur,
//   onFormSubmit,
// }) {
//   const backgroundImage = HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0];

//   return (
//     <div
//       className="hero-root relative overflow-hidden bg-gradient-to-br from-gray-900 to-teal-900"
//       role="banner"
//       aria-label="Hero section"
//       style={{
//         borderRadius: isMobile ? '1rem' : '1.5rem',
//       }}
//     >
//       {/* Background Image */}
//       <BackgroundImage src={backgroundImage} isFading={isFading} />

//       {/* FIX: Bright overlay — matches reference image, no heavy dark shadow */}
//       <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: isMobile
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.18) 100%)'
//             : isTablet
//             ? 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 100%)'
//             : 'linear-gradient(to right, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.0) 100%)',
//         }}
//         aria-hidden="true"
//       />

//       {/* MOBILE layout */}
//       {isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-4 pt-8 pb-6 gap-6"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile isTablet={false} isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile
//             isTablet={false}
//           />
//         </div>
//       )}

//       {/* TABLET layout */}
//       {isTablet && !isMobile && (
//         <div
//           className="relative z-10 flex flex-col px-8 pt-10 pb-8 gap-8"
//           style={{ animation: 'fadeUp 0.6s ease forwards' }}
//         >
//           <HeroText isMobile={false} isTablet isDesktop={false} />
//           <SearchForm
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={onFieldChange}
//             onFieldBlur={onFieldBlur}
//             onSubmit={onFormSubmit}
//             isMobile={false}
//             isTablet
//           />
//         </div>
//       )}

//       {/* DESKTOP layout */}
//       {!isMobile && !isTablet && (
//         <div
//           className="relative z-10 flex"
//           style={{ minHeight: 'clamp(640px, 74vh, 800px)' }}
//         >
//           {/* LEFT — FIX: text vertically centered ~40% from top, matches shoulder level in reference */}
//           <div
//             className="flex items-start"
//             style={{
//               width: '48%',
//               paddingLeft: 'clamp(3rem, 5vw, 5rem)',
//               paddingRight: '2rem',
//               paddingTop: 'clamp(5rem, 18%, 10rem)',
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
//             }}
//           >
//             <HeroText isMobile={false} isTablet={false} isDesktop />
//           </div>

//           {/* RIGHT — form bottom aligned at -2px */}
//           <div
//             className="flex items-end justify-end"
//             style={{
//               width: '52%',
//               paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
//               paddingBottom: '0px',
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
//               transition: 'opacity 0.8s ease-out, transform 0.8s ease-out 0.1s',
//             }}
//           >
//             <div
//               className="w-full bg-white"
//               style={{
//                 maxWidth: '460px',
//                 minWidth: '400px',
//                 borderRadius: '1.25rem 1.25rem 0 0',
//                 marginBottom: '-2px',
//               }}
//             >
//               <SearchForm
//                 formData={formData}
//                 errors={errors}
//                 touched={touched}
//                 onFieldChange={onFieldChange}
//                 onFieldBlur={onFieldBlur}
//                 onSubmit={onFormSubmit}
//                 isMobile={false}
//                 isTablet={false}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default HeroContainer;



import React, { memo } from 'react';
import HeroText from './HeroText';
import SearchForm from './SearchForm';
import { HERO_IMAGES } from '../constants/heroConstants';

const BackgroundImage = memo(function BackgroundImage({ src, isFading, alt = 'Hero Background' }) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{
        objectPosition: 'center center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
      }}
      loading="eager"
      decoding="async"
    />
  );
});

const HeroContainer = memo(function HeroContainer({
  currentImageIndex,
  isFading,
  isVisible,
  isMobile,
  isTablet,
  formData,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
  onFormSubmit,
}) {
  const backgroundImage = HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0];

  return (
    <div
      className="hero-root relative overflow-hidden bg-gradient-to-br from-gray-900 to-teal-900"
      role="banner"
      aria-label="Hero section"
      style={{
        borderRadius: isMobile ? '1rem' : '1.5rem',
      }}
    >
      {/* Background Image */}
      <BackgroundImage src={backgroundImage} isFading={isFading} />

      {/* FIX: Bright overlay — matches reference image, no heavy dark shadow */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: isMobile
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.18) 100%)'
            : isTablet
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 100%)'
            : 'linear-gradient(to right, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.0) 100%)',
        }}
        aria-hidden="true"
      />

      {/* MOBILE layout */}
      {isMobile && (
        <div
          className="relative z-10 flex flex-col px-4 pt-8 pb-6 gap-6"
          style={{ animation: 'fadeUp 0.6s ease forwards' }}
        >
          <HeroText isMobile isTablet={false} isDesktop={false} />
          <SearchForm
            formData={formData}
            errors={errors}
            touched={touched}
            onFieldChange={onFieldChange}
            onFieldBlur={onFieldBlur}
            onSubmit={onFormSubmit}
            isMobile
            isTablet={false}
          />
        </div>
      )}

      {/* TABLET layout */}
      {isTablet && !isMobile && (
        <div
          className="relative z-10 flex flex-col px-8 pt-10 pb-8 gap-8"
          style={{ animation: 'fadeUp 0.6s ease forwards' }}
        >
          <HeroText isMobile={false} isTablet isDesktop={false} />
          <SearchForm
            formData={formData}
            errors={errors}
            touched={touched}
            onFieldChange={onFieldChange}
            onFieldBlur={onFieldBlur}
            onSubmit={onFormSubmit}
            isMobile={false}
            isTablet
          />
        </div>
      )}

      {/* DESKTOP layout */}
      {!isMobile && !isTablet && (
        <div
          className="relative z-10 flex"
          style={{ minHeight: 'clamp(640px, 74vh, 800px)' }}
        >
          {/* LEFT — FIX: text vertically centered ~40% from top, matches shoulder level in reference */}
          <div
            className="flex items-center"
            style={{
              width: '48%',
              paddingLeft: 'clamp(2rem, 3vw, 3.5rem)',
              paddingRight: '2rem',
              paddingTop: '0',
              paddingBottom: '18%',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <HeroText isMobile={false} isTablet={false} isDesktop />
          </div>

          {/* RIGHT — form bottom aligned at -2px */}
          <div
            className="flex items-end justify-end"
            style={{
              width: '52%',
              paddingRight: 'clamp(1.5rem, 3vw, 3rem)',
              paddingBottom: '0px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out 0.1s',
            }}
          >
            <div
              className="w-full bg-white"
              style={{
                maxWidth: '460px',
                minWidth: '400px',
                borderRadius: '1.25rem 1.25rem 0 0',
                marginBottom: '-2px',
              }}
            >
              <SearchForm
                formData={formData}
                errors={errors}
                touched={touched}
                onFieldChange={onFieldChange}
                onFieldBlur={onFieldBlur}
                onSubmit={onFormSubmit}
                isMobile={false}
                isTablet={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default HeroContainer;