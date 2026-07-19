import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const REEL_DATA = [
  {
    id: 1,
    video: "/Find%20the%20right%20course%20faster.mp4",
    offset: "",
    title: "Find the Right Course Faster",
  },
  {
    id: 2,
    video: "/Compare%20before%20you%20choose.mp4",
    offset: "lg:-mt-10",
    title: "Compare Before You Choose",
  },
  {
    id: 3,
    video: "/Enquire%20and%20enroll%20safely.mp4",
    offset: "",
    title: "Enquire and Enroll Safely",
  },
];

function ReelCard({ reel, onPlay }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Play muted preview on hover
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay preview block: ", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      // Reset back to 1.5 to show the post-intro snapshot
      videoRef.current.currentTime = 1.5;
    }
  };

  return (
    <div
      className={`group cursor-pointer relative ${reel.offset}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPlay(reel)}
    >
      <div className="relative aspect-[9/16] rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)] bg-gray-900 isolate transform-gpu will-change-transform">
        {/* Video preview serving as the snapshot (preloaded at t=1.5s) and hover player */}
        <video
          ref={videoRef}
          src={`${reel.video}#t=1.5`}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />


        {/* Play Button Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-all duration-500 ${isHovered
            ? "scale-75 opacity-0 bg-emerald-500/80 border-emerald-400"
            : "group-hover:scale-110 group-hover:bg-emerald-500/85 group-hover:border-emerald-400/50"
            }`}>
            <svg
              className="w-7 h-7 text-white fill-current ml-0.5 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-emerald-600">
          {reel.title}
        </p>
      </div>
    </div>
  );
}

function VideoModal({ reel, onClose }) {
  const videoRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Programmatically handle playing with sound on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay with sound prevented by browser. Falling back to muted autoplay...", error);
          // If browser blocks sound playback, play muted so it still starts playing
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.error("Muted fallback play failed: ", e));
          }
        });
      }
    }
  }, [reel]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[78vh] bg-black rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.25)] border border-white/10 flex flex-col transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/90 to-transparent z-10 flex items-center justify-between">
          <h3 className="text-white font-medium text-sm md:text-base drop-shadow-md select-none font-sans">
            {reel.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all hover:scale-105"
            aria-label="Close video"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video element */}
        <video
          ref={videoRef}
          src={reel.video}
          controls
          playsInline
          className="w-full h-full object-contain bg-black"
        />
      </div>
    </div>
  );
}

export default function UnderstandCanvade() {
  const [selectedReel, setSelectedReel] = useState(null);

  return (
    <section className="px-6 md:px-10 py-10 bg-white select-none">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-20 relative z-20">
          <h2 className="text-2xl md:text-4xl font-heading font-medium text-gray-800 mb-6 tracking-tight">
            Understand{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">CANVADE</span>
            </span>{" "}
            in Seconds
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed -mt-3">
            Watch quick reels to see how Canvade helps you discover courses,
            compare institutes, and choose the right path - all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {REEL_DATA.map((reel) => (
            <ReelCard key={reel.id} reel={reel} onPlay={setSelectedReel} />
          ))}
        </div>
      </div>

      {selectedReel && (
        <VideoModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
      )}
    </section>
  );
}
