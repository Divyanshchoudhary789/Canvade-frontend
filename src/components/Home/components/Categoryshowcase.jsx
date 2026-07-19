import React from 'react';

/**
 * CategoryShowcase
 * ------------------------------------------------------------------
 * One reusable component that reproduces the "Know About <Category>"
 * card layout (3-photo collage + heading + description + 2 feature
 * rows + CTA button). Pass different props to render each of your
 * 12+ category variants from the SAME component.
 *
 * Props
 * ------------------------------------------------------------------
 * image         { src: string, alt: string }  — a single pre-composed
 *               collage graphic. Takes priority over `images` when set.
 * images        Array<{ src: string, alt: string }>  — fallback: exactly
 *               3 images, in this order: [topLeft, topRight, bottomCenter],
 *               rendered as a CSS collage when `image` is not provided.
 * category      string   — the highlighted (colored) part of the heading,
 *               e.g. "Government Exams Preparation"
 * eyebrow       string   — text before the highlighted category,
 *               default: "Know About"
 * description   string   — paragraph under the heading
 * features      Array<{ icon: React.ComponentType, title: string, description: string }>
 *               — exactly 2 items rendered as icon rows
 * ctaLabel      string   — button text, default "Explore Here"
 * onCtaClick    () => void — click handler for the button
 * accentColor   string   — tailwind color name driving the highlighted
 *               heading text + button background, default "emerald"
 * iconBg        string   — tailwind color name for the small icon circles,
 *               default "amber"
 * className     string   — extra classes for the outer wrapper
 * ------------------------------------------------------------------
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

    // Tailwind needs full class names at build time (no dynamic string
    // interpolation of the color into a class), so we map the handful
    // of colors we support to static class strings.
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
            className={`w-full max-w-[1600px] mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 grid md:grid-cols-2 gap-10 items-center ${className}`}
        >
            {/* Image collage */}
            {image ? (
                <img
                    src={image.src}
                    alt={image.alt || ''}
                    className="w-full h-auto mx-auto"
                    style={{ maxWidth: 500 }}
                />
            ) : (
                <div className="relative w-full mx-auto " style={{ maxWidth: 460, aspectRatio: '11 / 9' }}>
                    {topLeft && (
                        <img
                            src={topLeft.src}
                            alt={topLeft.alt || ''}
                            className="absolute top-0 left-0 object-cover rounded-2xl shadow-lg"
                            style={{ width: '58%', aspectRatio: "1 " }}
                        />
                    )}
                    {topRight && (
                        <img
                            src={topRight.src}
                            alt={topRight.alt || ''}
                            className="absolute top-11 -right-11 object-cover rounded-2xl shadow-lg"
                            style={{ width: '46%', aspectRatio: '4/4' }}
                        />
                    )}
                    {bottomCenter && (
                        <img
                            src={bottomCenter.src}
                            alt={bottomCenter.alt || ''}
                            className="absolute -bottom-11 left-1/2 object-cover rounded-2xl shadow-xl "
                            style={{ width: '62%', aspectRatio: '1 ', transform: 'translateX(-50%)' }}
                        />
                    )}
                </div>
            )}

            {/* Text content */}
            <div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                    {eyebrow} <span className={`font-bold ${accentText}`}>{category}</span>
                </h2>

                {description && (
                    <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
                )}

                <div className="mt-6 space-y-5">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="flex gap-4 items-start">
                                <span
                                    className={`flex-shrink-0 w-9 h-9 rounded-full ${iconBgClass} flex items-center justify-center`}
                                >
                                    {Icon && <Icon className="w-4 h-4 text-slate-900" strokeWidth={2.25} />}
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">{feature.title}</p>
                                    <p className="text-sm text-slate-600 mt-0.5">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {ctaLabel && (
                    <button
                        type="button"
                        onClick={onCtaClick}
                        className={`mt-7 inline-flex items-center px-6 py-2.5 rounded-lg text-white font-medium transition-colors ${accentButton}`}
                    >
                        {ctaLabel}
                    </button>
                )}
            </div>
        </div>
    );
}