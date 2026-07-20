import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, MessageCircle, Upload, Star, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Student Community",
    description:
      "Connect with students from different institutes and backgrounds.",
    iconBg: "#EDE9FE",
    iconColor: "#6D5CE0",
    underline: "#6D5CE0",
  },
  {
    icon: MessageCircle,
    title: "Discussions & Help",
    description:
      "Ask questions, join discussions, and get help from the community.",
    iconBg: "#D9F5E3",
    iconColor: "#1FA855",
    underline: "#1FA855",
  },
  {
    icon: Upload,
    title: "Share & Learn",
    description:
      "Share notes, resources and experiences to help each other grow.",
    iconBg: "#FCE0EC",
    iconColor: "#E91E7A",
    underline: "#E91E7A",
  },
  {
    icon: Star,
    title: "Build Connections",
    description:
      "Build meaningful connections that go beyond classrooms and courses.",
    iconBg: "#FDE8D2",
    iconColor: "#F0781E",
    underline: "#F0781E",
  },
];

export default function CommunityHero() {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-[1700px] mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
    <div className="relative w-full rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#F5F6FA] px-6 py-16 md:px-6">
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-b-[50%] bg-white/70 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Top decorative avatars — hidden on small screens */}
        <div className="pointer-events-none absolute -left-2 top-0 hidden md:block">
          <div className="relative">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-[#E4DEFB] shadow-md">
              <img
                src="/new image.avif"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-8 top-6 flex items-center gap-1 rounded-2xl bg-white px-3 py-2 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6D5CE0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#6D5CE0]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#6D5CE0]" />
            </div>
            <svg
              className="absolute -bottom-6 left-16 h-16 w-40 text-[#C9C2F0]"
              viewBox="0 0 160 70"
              fill="none"
            >
              <path
                d="M0 5 C 40 5, 60 60, 120 55"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              <circle cx="120" cy="55" r="4" fill="#C9C2F0" />
            </svg>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-2 top-0 hidden md:block">
          <div className="relative">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-[#DCE8FB] shadow-md">
              <img
                src="/image.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-10 top-6 rounded-2xl bg-white p-2.5 shadow-md">
              <Heart className="h-5 w-5 fill-[#6D5CE0] text-[#6D5CE0]" />
            </div>
            <svg
              className="absolute -bottom-6 right-16 h-16 w-40 text-[#C9C2F0]"
              viewBox="0 0 160 70"
              fill="none"
            >
              <path
                d="M160 5 C 120 5, 100 60, 40 55"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              <circle cx="40" cy="55" r="4" fill="#C9C2F0" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="relative flex flex-col items-center pt-8 text-center md:pt-4">
          <h1 className="text-3xl font-medium text-[#1A1A2E] sm:text-4xl md:text-5xl">
            Learn{" "}
            <span className="font-extrabold text-[#0F9D58]">Together,</span>{" "}
            Grow{" "}
            <span className="font-extrabold text-[#0F9D58]">Together</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#6B7280]">
            Join a community of learners, share ideas, ask questions, and get
            support from students like you.
          </p>

          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="mt-8 flex items-center gap-3 rounded-full bg-[#5B4FE5] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#5B4FE5]/30 transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <MessageCircle className="h-5 w-5" />
            Connect with other students
          </button>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description, iconBg, iconColor, underline }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-black/5"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="h-7 w-7" style={{ color: iconColor }} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#1A1A2E]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                {description}
              </p>
              <span
                className="mt-5 h-1 w-8 rounded-full"
                style={{ backgroundColor: underline }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}