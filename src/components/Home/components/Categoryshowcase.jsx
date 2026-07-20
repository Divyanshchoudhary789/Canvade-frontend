import React from 'react';

/**
 * CategoryShowcase
 * ------------------------------------------------------------------
 * Reusable component for "Know About <Category>" card layout
 * Optimized for zero-flicker transitions, stable height layout,
 * and smooth image crossfades.
 */
export default function CategoryShowcase({
    image,
    images = [],
    category,
    eyebrow = 'Know About',
    description,
    features = [],
    ctaLabel = 'Explore Here',
    onCtaClick,
    accentColor = 'emerald',
    iconBg = 'amber',
    className = '',
}) {
    const [topLeft, topRight, bottomCenter] = images;

    const accentText = {
        emerald: 'text-emerald-600',
        teal: 'text-teal-600',
        green: 'text-green-600',
        blue: 'text-blue-600',
        indigo: 'text-indigo-600',
    }[accentColor] || 'text-emerald-600';

    const accentButton = {
        emerald: 'bg-emerald-600 hover:bg-emerald-700',
        teal: 'bg-teal-600 hover:bg-teal-700',
        green: 'bg-green-600 hover:bg-green-700',
        blue: 'bg-blue-600 hover:bg-blue-700',
        indigo: 'bg-indigo-600 hover:bg-indigo-700',
    }[accentColor] || 'bg-emerald-600 hover:bg-emerald-700';

    const iconBgClass = {
        amber: 'bg-amber-400',
        yellow: 'bg-yellow-400',
        orange: 'bg-orange-400',
        sky: 'bg-sky-400',
    }[iconBg] || 'bg-amber-400';

    return (
        <div
            className={`w-full max-w-[1600px] mx-auto bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] transition-all duration-500 ease-in-out ${className}`}
        >
            {/* Left Column: Image collage container with stable min-height */}
            <div className="w-full flex items-center justify-center min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] overflow-hidden relative">
                {image ? (
                    <img
                        src={image.src}
                        alt={image.alt || ''}
                        className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[640px] h-auto max-h-[260px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[480px] xl:max-h-[500px] object-contain mx-auto transition-all duration-500"
                        loading="eager"
                        decoding="async"
                    />
                ) : (
                    <div className="relative w-full mx-auto" style={{ maxWidth: 280, aspectRatio: '11 / 9' }}>
                        {topLeft && (
                            <img
                                src={topLeft.src}
                                alt={topLeft.alt || ''}
                                className="absolute top-0 left-0 object-cover rounded-2xl shadow-lg transition-all duration-500"
                                style={{ width: '58%', aspectRatio: '1' }}
                                loading="eager"
                            />
                        )}
                        {topRight && (
                            <img
                                src={topRight.src}
                                alt={topRight.alt || ''}
                                className="absolute top-11 -right-11 object-cover rounded-2xl shadow-lg transition-all duration-500"
                                style={{ width: '46%', aspectRatio: '4/4' }}
                                loading="eager"
                            />
                        )}
                        {bottomCenter && (
                            <img
                                src={bottomCenter.src}
                                alt={bottomCenter.alt || ''}
                                className="absolute -bottom-11 left-1/2 object-cover rounded-2xl shadow-xl transition-all duration-500"
                                style={{ width: '62%', aspectRatio: '1', transform: 'translateX(-50%)' }}
                                loading="eager"
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Right Column: Text content with stable height flow */}
            <div className="flex flex-col justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight min-h-[32px] sm:min-h-[36px] md:min-h-[40px] lg:min-h-[48px]">
                    {eyebrow} <span className={`font-bold ${accentText}`}>{category}</span>
                </h2>

                {description && (
                    <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed line-clamp-3 min-h-[40px] sm:min-h-[48px] md:min-h-[56px] lg:min-h-[64px]">
                        {description}
                    </p>
                )}

                <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 space-y-3 sm:space-y-4 md:space-y-5 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="flex gap-2.5 sm:gap-3.5 md:gap-4 items-start">
                                <span
                                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full ${iconBgClass} flex items-center justify-center shadow-xs`}
                                >
                                    {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 text-slate-900" strokeWidth={2.25} />}
                                </span>
                                <div>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{feature.title}</p>
                                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 mt-0.5 leading-snug">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {ctaLabel && (
                    <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                        <button
                            type="button"
                            onClick={onCtaClick}
                            className={`inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer shadow-sm hover:shadow-md ${accentButton}`}
                        >
                            {ctaLabel}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}