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
            className={`w-full max-w-[1600px] mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[460px] sm:min-h-[500px] md:min-h-[520px] transition-all duration-500 ease-in-out ${className}`}
        >
            {/* Left Column: Image collage container with stable min-height */}
            <div className="w-full flex items-center justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden relative">
                {image ? (
                    <img
                        src={image.src}
                        alt={image.alt || ''}
                        className="w-full max-w-[500px] h-auto max-h-[380px] object-contain mx-auto transition-all duration-500"
                        loading="eager"
                        decoding="async"
                    />
                ) : (
                    <div className="relative w-full mx-auto" style={{ maxWidth: 460, aspectRatio: '11 / 9' }}>
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
            <div className="flex flex-col justify-center min-h-[280px] sm:min-h-[320px]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight min-h-[40px] sm:min-h-[48px]">
                    {eyebrow} <span className={`font-bold ${accentText}`}>{category}</span>
                </h2>

                {description && (
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 min-h-[64px]">
                        {description}
                    </p>
                )}

                <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 min-h-[120px]">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="flex gap-3.5 sm:gap-4 items-start">
                                <span
                                    className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full ${iconBgClass} flex items-center justify-center shadow-xs`}
                                >
                                    {Icon && <Icon className="w-4 h-4 text-slate-900" strokeWidth={2.25} />}
                                </span>
                                <div>
                                    <p className="font-semibold text-sm sm:text-base text-slate-900">{feature.title}</p>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {ctaLabel && (
                    <div className="mt-6 sm:mt-7">
                        <button
                            type="button"
                            onClick={onCtaClick}
                            className={`inline-flex items-center px-6 py-2.5 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer shadow-sm hover:shadow-md ${accentButton}`}
                        >
                            {ctaLabel}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}