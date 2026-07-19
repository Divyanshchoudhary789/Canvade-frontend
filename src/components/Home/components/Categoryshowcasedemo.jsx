import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryShowcase from './Categoryshowcase';
import { categories } from '../constants/Categoriesdata';

const ROTATE_INTERVAL_MS = 6000;
const FADE_DURATION_MS = 600;

// Single showcase slot that cycles through every category on its own:
// starts on a random category on page load, then smoothly crossfades to
// the next one on a timer for as long as the page stays open.
export default function CategoryShowcaseDemo() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * categories.length)
  );
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const rotateTimer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
        setIsVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(rotateTimer);
  }, [isPaused]);

  const cat = categories[currentIndex];
  if (!cat) return null;

  const handleExplore = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <div
      className="py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CategoryShowcase
        key={cat.id}
        image={cat.image}
        images={cat.images}
        category={cat.category}
        description={cat.description}
        features={cat.features}
        onCtaClick={() => handleExplore(cat.category)}
        className={`transition-opacity duration-[600ms] ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
