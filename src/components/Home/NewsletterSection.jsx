import React, { useState, useEffect } from "react";
import UpdateCard from "../Updates/UpdateCard";

export default function NewsletterSection() {
  // API Integration States
  const [updates, setUpdates] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://canvade-backend.onrender.com";

  // Fetch data exactly matching your backend API payload structure
  useEffect(() => {
    const fetchNewsletterUpdates = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/updates/all`);
        const json = await response.json();
        if (json && json.success && Array.isArray(json.data)) {
          setUpdates(json.data);
        }
      } catch (error) {
        console.error("Error fetching updates for newsletter:", error);
      }
    };
    fetchNewsletterUpdates();
  }, []);

  return (
    <section className="px-2 md:px-16 py-12 bg-white ">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center w-full max-w-[1100px] mx-auto mb-10 px-2">
          <h2 className="text-2xl md:text-4xl font-heading font-medium text-gray-800 mb-6 tracking-tight">
            Stay Updated with <span className="text-[#008566]">What's Happening</span>{" "}
            in <span className="text-[#008566]">Education</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[920px] mx-auto -mt-3">
            Discover the latest announcements, student achievements, workshops, admissions, events, press releases, and institute updates from across the CANVADE network. Follow the institutions and categories you care about and stay informed about opportunities that could shape your future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {updates.slice(0, 4).map((item, idx) => (
            <UpdateCard 
              key={item.updateId || `newsletter-${idx}`} 
              {...item}
              // Explicit property key alignments matching your database response:
              image={item.thumbnail || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500"} 
              date={item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}