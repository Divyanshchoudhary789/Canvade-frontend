import React, { memo } from 'react';
import HeroText from './HeroText';
import SearchForm from './SearchForm';
import { HERO_IMAGES } from '../constants/heroConstants';
import { Award, Laptop, GraduationCap, Palette } from 'lucide-react';

const COURSE_CHIPS = [
  { label: 'Professional Courses', icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Online Learning', icon: Laptop, color: 'text-teal-600', bg: 'bg-teal-50' },
  { label: 'University Programs', icon: GraduationCap, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Creative & Design', icon: Palette, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const BackgroundImage = memo(function BackgroundImage({ src, isFading }) {
  return (
    <img
      src={src}
      alt="Hero Background"
      className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out"
      style={{
        opacity: isFading ? 0 : 1,
      }}
      loading="eager"
      decoding="async"
    />
  );
});

const HeroContainer = memo(function HeroContainer({
  currentImageIndex,
  isFading,
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
      className="hero-root relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#004D40] via-[#005C53] to-[#042F2C] shadow-2xl transition-all duration-300"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background image for Desktop / Large screens */}
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        <BackgroundImage src={backgroundImage} isFading={isFading} />
        {/* Soft overlay gradient to preserve background elements & keep text crisp */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Decorative subtle background grid pattern for mobile/tablet */}
      <div className="absolute inset-0 lg:hidden opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Hero Container Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 lg:gap-10 min-h-0 lg:min-h-[560px] xl:min-h-[600px]">
          
          {/* Left Column: Hero Text & Mobile Highlights */}
          <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col justify-center gap-6">
            <HeroText />

            {/* Mobile & Tablet category badges preview */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden pt-1">
              {COURSE_CHIPS.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 shadow-sm"
                  >
                    <div className={`p-1.5 rounded-lg ${chip.bg} ${chip.color} shrink-0`}>
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-gray-800 truncate">{chip.label}</p>
                      <div className="flex text-amber-400 text-[10px]">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Search Form Card */}
          <div className="w-full lg:w-[430px] xl:w-[470px] shrink-0 self-stretch lg:self-center">
            <SearchForm
              formData={formData}
              errors={errors}
              touched={touched}
              onFieldChange={onFieldChange}
              onFieldBlur={onFieldBlur}
              onSubmit={onFormSubmit}
            />
          </div>

        </div>
      </div>
    </div>
  );
});

export default HeroContainer;