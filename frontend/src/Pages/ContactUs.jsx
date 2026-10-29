
import { useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import ceoImage from "../assets/ceo.jpeg";
import hammadImage from "../assets/hammad.jpeg";
import farazImage from "../assets/faraz.jpeg";

const teamMembers = [
  {
    name: "Muhammad Huzaifa",
    role: "Founder & CEO",
    description:
      "Muhammad Huzaifa leads performance-driven link building and digital outreach at Trade Rank Media. He specializes in white-label SEO outreach, high-DR publisher placements, and topical authority strategies for international agencies and B2B brands.",
    email: "traderakmedia@gmail.com",
    phone: "923266023011",
    linkedin: "https://www.linkedin.com/in/huzaifa-linkbuilding/",
    image: ceoImage,
  },
  {
    name: "Faraz Ahmad",
    role: "Link Building & Outreach",
    description:
      "Faraz Ahmad specializes in data-driven backlink strategies and building valuable digital partnerships. He focuses on securing authoritative, niche-relevant link placements that improve domain authority, increase organic search visibility, and support sustainable growth.",
    email: "mughalfaraz810@gmail.com",
    phone: "923136347962",
    linkedin: "https://www.linkedin.com/in/faraz-ahmad-linkbuilding/",
    image: farazImage,
  },
  {
    name: "Ali Hammad",
    role: "Web Developer & Designer",
    description:
      "Ali Hammad builds modern, fast, and user-friendly websites that help businesses grow online. He creates responsive websites for mobile, tablet, and desktop, focusing on clean design, smooth performance, and professional results tailored to business needs.",
    email: "alihammadzk@gmail.com",
    phone: "923114237376",
    linkedin: "https://www.linkedin.com/in/ali-hammad-123334440/",
    image: hammadImage,
  },
];

export default function ContactUs() {
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const elements = main.querySelectorAll(".contact-reveal");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--reveal-delay",
        `${(index % 3) * 100}ms`
      );

      observer.observe(element);
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-[#faf9f6] font-[Arial,sans-serif] text-[#191919]"
    >
      <style>{`
        .contact-reveal {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
          will-change: opacity, transform;
        }

        .contact-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .contact-team-card {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .contact-team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px -22px rgba(25, 25, 25, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal,
          .contact-team-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
            will-change: auto !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-reveal px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#8c7650]">
            Trade Rank Media
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Discuss Your{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
              <br />
              Link Building
            </span>{" "}
            Needs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Looking for relevant publishers, quality guest posts, or niche
            edits for your website? Tell us about your goals and let&apos;s
            explore the right opportunities for your campaign.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="contact-reveal mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c7650]">
              Meet Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Talk to the Right Person
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Connect with our professionals to discuss your business goals,
              link-building campaigns, and website development requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                style={{ "--reveal-delay": `${index * 120}ms` }}
                className="contact-reveal contact-team-card overflow-hidden rounded-2xl border border-[#e9e5dd] bg-white"
              >
                <div className="flex h-72 items-center justify-center overflow-hidden bg-[#f0ede6]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#8c7650]">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {member.description}
                  </p>

                  <div className="mt-6 flex gap-3 border-t border-gray-100 pt-5">
                    <a
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${member.name}`}
                      title="WhatsApp"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#25D366] transition duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                    >
                      <FaWhatsapp size={21} />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn ${member.name}`}
                      title="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#0A66C2] transition duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                    >
                      <FaLinkedin size={20} />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      title="Email"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#EA4335] transition duration-300 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-reveal px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#eee8dc] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c7650]">
            Your Next Campaign Starts Here
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Let&apos;s Find the Right Opportunities for Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Whether you need guest posts, niche edits, quality backlinks,
            or a professional website, our team is ready to discuss your
            goals and help your business grow online.
          </p>

          <a
            href="mailto:traderankmedia@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#191919] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#8c7650]"
          >
            <FaEnvelope size={17} />
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
