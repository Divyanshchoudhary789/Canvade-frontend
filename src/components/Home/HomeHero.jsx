/**
 * HomeHero Component
 * Main hero section component with full responsive support
 * Senior engineer level: clean architecture, performance optimized, accessible
 *
 * Features:
 * - Fully responsive (mobile, tablet, desktop)
 * - Smooth animations and transitions
 * - Form state management with validation ready
 * - Accessible (ARIA labels, semantic HTML)
 * - Performance optimized (memoization, hooks)
 * - Clean separation of concerns
 * - TypeScript ready structure
 */

// import React, { useMemo, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   useResponsiveDesign,
//   useFadeInAnimation,
//   useBackgroundRotation,
//   useFormState,
// } from './hooks/useHeroHooks';
// import { HERO_IMAGES } from './constants/heroConstants';
// import HeroContainer from './components/HeroContainer';
// import SocialBar from './components/SocialBar';
// import ScrollToTopButton from './components/ScrollToTopButton';

// /**
//  * Validates form data
//  * @param {Object} formData - Form data to validate
//  * @returns {Object} Validation errors object
//  */
// function validateFormData(formData) {
//   const errors = {};

//   if (!formData.programs?.trim()) {
//     errors.programs = 'Please select a program or institution';
//   }

//   if (!formData.location?.trim()) {
//     errors.location = 'Please enter a location';
//   }

//   return errors;
// }

// function HomeHero() {
//   const navigate = useNavigate();

//   // Responsive design hook
//   const { isMobile, isTablet, isDesktop } = useResponsiveDesign();

//   // Animation hooks
//   const isVisible = useFadeInAnimation();
//   const { currentIndex: currentImageIndex, isFading } = useBackgroundRotation(
//     HERO_IMAGES
//   );

//   // Form state management
//   const initialFormState = useMemo(
//     () => ({
//       programs: '',
//       location: '',
//       searchFor: '',
//       feeRange: '',
//       learningMode: '',
//       courseDuration: '',
//     }),
//     []
//   );

//   const { formData, errors, touched, handleChange, handleBlur, reset } =
//     useFormState(initialFormState);

//   /**
//    * Handle form submission
//    * Validates form and navigates to search results with filters
//    */
//   const handleFormSubmit = useCallback(() => {
//     const validationErrors = validateFormData(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       console.error('Form validation failed:', validationErrors);
//       return;
//     }

//     // Build query parameters from form data
//     const queryParams = new URLSearchParams();

//     // Add programs/location as search query
//     if (formData.programs) {
//       queryParams.append('q', formData.programs);
//     }

//     // Add optional filters
//     if (formData.searchFor) {
//       queryParams.append('searchFor', formData.searchFor);
//     }
//     if (formData.feeRange) {
//       queryParams.append('feeRange', formData.feeRange);
//     }
//     if (formData.learningMode) {
//       queryParams.append('learningMode', formData.learningMode);
//     }
//     if (formData.courseDuration) {
//       queryParams.append('courseDuration', formData.courseDuration);
//     }

//     // Navigate to search results page
//     navigate(`/search?${queryParams.toString()}`);

//     // Optional: Reset form after navigation
//     reset();
//   }, [formData, navigate, reset]);

//   // Memoize handlers to prevent unnecessary re-renders
//   const memoizedHandleChange = useCallback(handleChange, [handleChange]);
//   const memoizedHandleBlur = useCallback(handleBlur, [handleBlur]);
//   const memoizedHandleSubmit = useCallback(
//     handleFormSubmit,
//     [handleFormSubmit]
//   );


//   return (
//     <>
//       {/* Main Hero Section */}
//       <section 
//         className="bg-white py-6 md:py-8"
//         style={{
//           marginTop: isMobile ? '4.5rem' : '4.65rem',
//         }}
//       >
//         <div className="mx-auto max-w-[1700px] px-4 md:px-8 lg:px-12 relative overflow-visible">
//           {/* Social Bar - Desktop Only */}
//           {isDesktop && <SocialBar />}

//           {/* Hero Container */}
//           <HeroContainer
//             currentImageIndex={currentImageIndex}
//             isFading={isFading}
//             isVisible={isVisible}
//             isMobile={isMobile}
//             isTablet={isTablet}
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={memoizedHandleChange}
//             onFieldBlur={memoizedHandleBlur}
//             onFormSubmit={memoizedHandleSubmit}
//           />
//         </div>
//       </section>
//       <ScrollToTopButton />

//       {/* Global Styles - Only include if not already in global CSS */}
//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default HomeHero;





// import React, { useMemo, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   useResponsiveDesign,
//   useFadeInAnimation,
//   useBackgroundRotation,
//   useFormState,
// } from './hooks/useHeroHooks';
// import { HERO_IMAGES } from './constants/heroConstants';
// import HeroContainer from './components/HeroContainer';
// import SocialBar from './components/SocialBar';
// import ScrollToTopButton from './components/ScrollToTopButton';

// function validateFormData(formData) {
//   const errors = {};
//   if (!formData.programs?.trim()) {
//     errors.programs = 'Please select a program or institution';
//   }
//   if (!formData.location?.trim()) {
//     errors.location = 'Please enter a location';
//   }
//   return errors;
// }

// function HomeHero() {
//   const navigate = useNavigate();
//   const { isMobile, isTablet, isDesktop } = useResponsiveDesign();
//   const isVisible = useFadeInAnimation();
//   const { currentIndex: currentImageIndex, isFading } = useBackgroundRotation(HERO_IMAGES);

//   const initialFormState = useMemo(
//     () => ({
//       programs: '',
//       location: '',
//       searchFor: '',
//       feeRange: '',
//       learningMode: '',
//       courseDuration: '',
//     }),
//     []
//   );

//   const { formData, errors, touched, handleChange, handleBlur, reset } =
//     useFormState(initialFormState);

//   const handleFormSubmit = useCallback(() => {
//     const validationErrors = validateFormData(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       console.error('Form validation failed:', validationErrors);
//       return;
//     }
//     const queryParams = new URLSearchParams();
//     if (formData.programs) queryParams.append('q', formData.programs);
//     if (formData.searchFor) queryParams.append('searchFor', formData.searchFor);
//     if (formData.feeRange) queryParams.append('feeRange', formData.feeRange);
//     if (formData.learningMode) queryParams.append('learningMode', formData.learningMode);
//     if (formData.courseDuration) queryParams.append('courseDuration', formData.courseDuration);
//     navigate(`/search?${queryParams.toString()}`);
//     reset();
//   }, [formData, navigate, reset]);

//   const memoizedHandleChange = useCallback(handleChange, [handleChange]);
//   const memoizedHandleBlur = useCallback(handleBlur, [handleBlur]);
//   const memoizedHandleSubmit = useCallback(handleFormSubmit, [handleFormSubmit]);

//   return (
//     <>
//       <section
//         className="bg-white"
//         style={{
//           paddingTop: isMobile ? '4.5rem' : '4.65rem',
//           paddingBottom: isMobile ? '0' : '0.5rem',
//         }}
//       >
//         <div
//           className="mx-auto relative"
//           style={{
//             maxWidth: '1700px',
//             paddingLeft: isMobile ? '0.75rem' : isTablet ? '1.5rem' : '2rem',
//             paddingRight: isMobile ? '0.75rem' : isTablet ? '1.5rem' : '2rem',
//             paddingTop: isMobile ? '0.5rem' : '0.75rem',
//             paddingBottom: isMobile ? '0.5rem' : '0.75rem',
//           }}
//         >
//           {/* Social Bar — desktop only, sits outside hero overlay */}
//           {isDesktop && <SocialBar />}

//           <HeroContainer
//             currentImageIndex={currentImageIndex}
//             isFading={isFading}
//             isVisible={isVisible}
//             isMobile={isMobile}
//             isTablet={isTablet}
//             formData={formData}
//             errors={errors}
//             touched={touched}
//             onFieldChange={memoizedHandleChange}
//             onFieldBlur={memoizedHandleBlur}
//             onFormSubmit={memoizedHandleSubmit}
//           />
//         </div>
//       </section>

//       <ScrollToTopButton />

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default HomeHero;




import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useResponsiveDesign,
  useFadeInAnimation,
  useBackgroundRotation,
  useFormState,
} from './hooks/useHeroHooks';
import { HERO_IMAGES } from './constants/heroConstants';
import HeroContainer from './components/HeroContainer';
import SocialBar from './components/SocialBar';
import ScrollToTopButton from './components/ScrollToTopButton';

function validateFormData(formData) {
  const errors = {};
  if (!formData.programs?.trim()) {
    errors.programs = 'Please select a program or institution';
  }
  if (!formData.location?.trim()) {
    errors.location = 'Please enter a location';
  }
  return errors;
}

function HomeHero() {
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useResponsiveDesign();
  const isVisible = useFadeInAnimation();
  const { currentIndex: currentImageIndex, isFading } = useBackgroundRotation(HERO_IMAGES);

  const initialFormState = useMemo(
    () => ({
      programs: '',
      location: '',
      searchFor: '',
      feeRange: '',
      learningMode: '',
      courseDuration: '',
    }),
    []
  );

  const { formData, errors, touched, handleChange, handleBlur, reset } =
    useFormState(initialFormState);

  const handleFormSubmit = useCallback(() => {
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      console.error('Form validation failed:', validationErrors);
      return;
    }
    const queryParams = new URLSearchParams();
    if (formData.programs) queryParams.append('q', formData.programs);
    if (formData.searchFor) queryParams.append('searchFor', formData.searchFor);
    if (formData.feeRange) queryParams.append('feeRange', formData.feeRange);
    if (formData.learningMode) queryParams.append('learningMode', formData.learningMode);
    if (formData.courseDuration) queryParams.append('courseDuration', formData.courseDuration);
    navigate(`/search?${queryParams.toString()}`);
    reset();
  }, [formData, navigate, reset]);

  const memoizedHandleChange = useCallback(handleChange, [handleChange]);
  const memoizedHandleBlur = useCallback(handleBlur, [handleBlur]);
  const memoizedHandleSubmit = useCallback(handleFormSubmit, [handleFormSubmit]);

  return (
    <>
      <section
        className="bg-white"
        style={{
          paddingTop: isMobile ? '4.5rem' : '4.65rem',
          paddingBottom: isMobile ? '0' : '0.5rem',
        }}
      >
        {/* Match navbar: max-w-[1700px] + px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 */}
        <div
          className="mx-auto relative w-full max-w-[1700px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
          style={{
            paddingTop: isMobile ? '0.5rem' : '0.75rem',
            paddingBottom: isMobile ? '0.5rem' : '0.75rem',
          }}
        >
          {/* Social Bar — desktop only, sits outside hero overlay */}
          {isDesktop && <SocialBar />}

          <HeroContainer
            currentImageIndex={currentImageIndex}
            isFading={isFading}
            isVisible={isVisible}
            isMobile={isMobile}
            isTablet={isTablet}
            formData={formData}
            errors={errors}
            touched={touched}
            onFieldChange={memoizedHandleChange}
            onFieldBlur={memoizedHandleBlur}
            onFormSubmit={memoizedHandleSubmit}
          />
        </div>
      </section>

      <ScrollToTopButton />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

export default HomeHero;