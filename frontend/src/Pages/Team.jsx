import React, { useEffect, useRef, useState } from "react";
// import Header from "./Header";
import faraz from "../assets/faraz don alazzi.jpeg";
import hammad from "../assets/hammad.jpeg";
import ceo from "../assets/ceo.jpeg";

import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

const Team = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    team: false,
    cta: false,
  });

  const headerRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;

            setVisibleSections((prev) => ({
              ...prev,
              [section]: true,
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const sections = [
      headerRef.current,
      teamRef.current,
      ctaRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "M.Huzaifa",
      role: "CO Founder & CEO",
      image: ceo,
      description:
        "M Huzaifa is the Founder of Trade Rank Media, a performance-driven link building and digital outreach agency. He specializes in white-label SEO outreach, high-DR publisher placements, and topical authority strategy for international agencies and B2B brands.",
      email: "marketing@traderankmedia.com",
      linkedin: "https://www.linkedin.com/in/huzaifa-linkbuilding/",
      facebook:
        "https://www.facebook.com/people/%D9%85%D8%AD%D9%85%D8%AF-%D8%AD%D8%B0%DB%8C%D9%81%DB%81/61561928338899/",
    },
    {
      name: "Faraz Ahmad",
      role: "Link Building & Outreach Expert",
      image: faraz,
      description:
        "As a Link Building & Outreach Expert, I specialize in crafting data-driven backlink strategies and establishing high-value digital partnerships. My focus is on securing authoritative, niche-relevant link placements that elevate brand domain authority, maximize organic search visibility, and drive sustainable growth.",
      email: "advertising@traderankmedia.com",
      linkedin: "https://www.linkedin.com/in/faraz-ahmad-linkbuilding/",
      facebook: "https://www.facebook.com/faraz.mughal.694367",
    },
    {
      name: "Ali Hammad",
      role: "Web Developer",
      image: hammad,
      description:
        "I build modern, fast, and user-friendly websites that help businesses grow online. I create responsive websites for mobile, tablet, and desktop with clean design, smooth performance, and a professional look. I focus on delivering quality work that matches your needs and helps you achieve your goals.",
      email: "info@traderankmedia.com",
      linkedin: "https://www.linkedin.com/in/ali-hammad-123334440/",
      facebook: "#",
    },
  ];

  return (
    <>
      {/* <Header /> */}

      <section className="min-h-screen bg-white text-black px-6 py-24 font-[Arial,sans-serif]">

        {/* Header */}
        <div
          ref={headerRef}
          data-section="header"
          className={`max-w-4xl mx-auto text-center mb-16 scroll-entrance ${
            visibleSections.header
              ? "scroll-entrance-visible"
              : ""
          }`}
        >

          <span className="inline-block px-4 py-2 mb-5 rounded-full border border-red-200 bg-red-50 text-red-600 text-sm font-bold tracking-wider">
            OUR TEAM
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Meet the{" "}
            <span className="text-black">
              Experts
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Meet the people behind our creative ideas, technology and
            digital marketing solutions.
          </p>

        </div>

        {/* Team Cards */}
        <div
          ref={teamRef}
          data-section="team"
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 scroll-entrance ${
            visibleSections.team
              ? "scroll-entrance-visible"
              : ""
          }`}
        >

          {team.map((member, index) => (
            <div
              key={member.name}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className="
                team-card-entrance
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-200
                shadow-xl
                transition-all duration-500
                hover:-translate-y-3
                hover:border-red-500
                hover:shadow-2xl
              "
            >

              {/* Image */}
              <div className="relative h-80 overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                " />

                <span className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  text-red-600
                  font-bold
                  shadow-lg
                ">
                  0{index + 1}
                </span>

              </div>

              {/* Content */}
              <div className="p-7">

                <h2 className="text-2xl font-extrabold text-black">
                  {member.name}
                </h2>

                <p className="mt-1 text-red-600 text-sm font-bold">
                  {member.role}
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Social */}
                <div className="flex gap-3 mt-6">

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target={member.linkedin !== "#" ? "_blank" : undefined}
                    rel={
                      member.linkedin !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={(e) => {
                      if (member.linkedin === "#") {
                        e.preventDefault();
                      }
                    }}
                    className="
                      w-10 h-10
                      rounded-lg
                      border border-gray-300
                      flex items-center justify-center
                      text-black
                      hover:bg-[#0A66C2]
                      hover:text-white
                      hover:border-[#0A66C2]
                      transition-all duration-300
                    "
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  {/* Email */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      member.email
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10
                      rounded-lg
                      border border-gray-300
                      flex items-center justify-center
                      text-black
                      hover:bg-red-600
                      hover:text-white
                      hover:border-red-600
                      transition-all duration-300
                    "
                  >
                    <FaEnvelope size={18} />
                  </a>

                  {/* Facebook */}
                  <a
                    href={member.facebook}
                    target={
                      member.facebook !== "#"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      member.facebook !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={(e) => {
                      if (member.facebook === "#") {
                        e.preventDefault();
                      }
                    }}
                    className="
                      w-10 h-10
                      rounded-lg
                      border border-gray-300
                      flex items-center justify-center
                      text-black
                      hover:bg-[#1877F2]
                      hover:text-white
                      hover:border-[#1877F2]
                      transition-all duration-300
                    "
                  >
                    <FaFacebookF size={18} />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          data-section="cta"
          className={`max-w-5xl mx-auto mt-24 scroll-entrance ${
            visibleSections.cta
              ? "scroll-entrance-visible"
              : ""
          }`}
        >

          <div className="
            rounded-3xl
            bg-black
            p-10
            md:p-14
            text-center
            shadow-2xl
          ">

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Let's Build Something{" "}
              <span className="text-white">
                Great Together
              </span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Have a project in mind? Our team is ready to turn your ideas
              into powerful digital experiences.
            </p>

            <a
              href="/contact"
              className="
                inline-block
                mt-8
                px-8
                py-4
                rounded-xl
                bg-red-600
                text-white
                font-bold
                shadow-lg
                shadow-red-600/30
                transition-all
                duration-300
                hover:bg-red-700
                hover:-translate-y-1
                hover:scale-105
              "
            >
              Get In Touch →
            </a>

          </div>

        </div>

      </section>

      {/* ================= SCROLL ANIMATION ================= */}
      <style>{`
        .scroll-entrance {
          opacity: 0;
          transform: translateY(60px);
          transition:
            opacity 0.9s ease-out,
            transform 0.9s ease-out;
          will-change: opacity, transform;
        }

        .scroll-entrance-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card-entrance {
          opacity: 0;
          transform: translateY(50px);
          transition:
            opacity 0.8s ease-out,
            transform 0.8s ease-out,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .scroll-entrance-visible .team-card-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-entrance,
          .team-card-entrance {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default Team;