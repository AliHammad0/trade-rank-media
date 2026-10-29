
import React, { useEffect, useRef } from "react";
import image from "../assets/com.jpeg";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, professional websites designed around your business goals, brand identity, and technical requirements.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "Guest Posting",
    description:
      "Relevant publisher opportunities based on your target niche, campaign requirements, and preferred countries.",
    href: "/services/guest-post",
  },
  {
    number: "03",
    title: "Link Building",
    description:
      "Publisher research and placement coordination for agencies, freelancers, and businesses.",
    href: "/services/link-building",
  },
  {
    number: "04",
    title: "Link Insertion",
    description:
      "Relevant existing-content placement opportunities, subject to publisher availability and guidelines.",
    href: "/services/link-building",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Industry-Specific Campaigns",
    description:
      "We work with requirements across crypto, forex, trading, finance, technology, and other business niches.",
  },
  {
    number: "02",
    title: "Publisher Research",
    description:
      "We evaluate opportunities according to niche relevance, target geography, available SEO metrics, and campaign requirements.",
  },
  {
    number: "03",
    title: "Agency Collaboration",
    description:
      "We support SEO agencies, freelancers, and businesses with placement coordination for individual and ongoing campaigns.",
  },
];

const team = [
  {
    initials: "HS",
    name: "Hammad Shah",
    role: "Developer",
    description:
      "Website development, responsive user experiences, and technical implementation.",
  },
  {
    initials: "FA",
    name: "Faraz Ahmed",
    role: "Outreach & Link Building",
    description:
      "Publisher outreach, opportunity research, and link placement coordination.",
  },
  {
    initials: "MH",
    name: "Muhammad Huzaifa",
    role: "Founder & Link Builder",
    description:
      "Client requirements, link-building activities, and campaign coordination.",
  },
];

const audiences = [
  "SEO agencies managing client campaigns",
  "Freelancers seeking publishing opportunities",
  "Businesses looking for relevant placements",
  "Marketing teams with specific niche or country requirements",
];

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-neutral-500 sm:text-xs">
      {children}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function About() {
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const elements = main.querySelectorAll(
      ":scope > section, .about-card, .about-image-wrap, .about-feature"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
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
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");

      if (element.matches(".about-card")) {
        element.style.setProperty(
          "--reveal-delay",
          `${(index % 4) * 90}ms`
        );
      }

      observer.observe(element);
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="overflow-hidden bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
        }

        /* Scroll entrance animation */
        .scroll-reveal {
          opacity: 0;
          transform: translate3d(0, 28px, 0);
          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
          will-change: opacity, transform;
        }

        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .about-image {
          transition: transform .6s ease;
        }

        .about-image-wrap:hover .about-image {
          transform: scale(1.035);
        }

        .about-card {
          transition:
            border-color .2s ease,
            box-shadow .2s ease,
            transform .2s ease;
        }

        @media (hover: hover) {
          .about-card:hover {
            transform: translateY(-4px);
            border-color: #a3a3a3;
            box-shadow: 0 16px 35px -24px rgba(0, 0, 0, .25);
          }
        }

        .about-button {
          transition: background .2s ease, color .2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-reveal,
          .about-image,
          .about-card,
          .about-button {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            will-change: auto !important;
          }
        }
      `}</style>

      {/* HERO WITH IMAGE */}
      <section className="about-hero border-b border-neutral-200">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] sm:text-xs">
              About Trade Rank Media
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight min-[375px]:text-5xl sm:text-6xl lg:text-[58px] xl:text-[66px]">
              Built Around
              <span className="mt-1 block text-neutral-500">
                <span className="text-black">Better</span>{" "}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
                  Digital Growth
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Trade Rank Media helps businesses strengthen their digital
              presence through web development, guest posting, link building,
              and publisher-based placements tailored to campaign requirements.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              We work with SEO agencies, freelancers, and businesses that
              value relevant opportunities, clear communication, and
              professional coordination.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="/contact"
                className="about-button inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-7 py-3 text-center text-sm font-bold text-white hover:bg-neutral-800"
              >
                Get in Touch
              </a>

              <a
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3 text-center text-sm font-bold text-black hover:bg-neutral-50"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-neutral-600 sm:text-sm">
              {[
                "Clear communication",
                "Flexible collaboration",
                "Requirement-led",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-black">
                    <CheckIcon />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="about-image-wrap relative mx-auto w-full max-w-[580px]">
            <div className="absolute -inset-3 rounded-3xl bg-neutral-100 sm:-inset-4" />

            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl sm:rounded-3xl">
              <img
                src={image}
                alt="Trade Rank Media digital services and business growth"
                className="about-image block h-[280px] w-full object-cover min-[375px]:h-[320px] sm:h-[400px] lg:h-[470px]"
                loading="eager"
                fetchPriority="high"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 pt-16 text-white sm:p-7 sm:pt-20">
                <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/75 sm:text-xs">
                  Trade Rank Media
                </p>

                <h2 className="mt-2 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                  Digital Services. Real Business Priorities.
                </h2>

                <p className="mt-2 max-w-md text-xs leading-6 text-white/85 sm:text-sm">
                  Web development, publisher outreach, and link-building
                  coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A Focused Partner for Digital and Publishing Needs.
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Trade Rank Media supports businesses and SEO professionals
              looking for web development services and relevant publisher
              opportunities across different industries.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Our publishing work includes guest posting, link insertion,
              and link-building coordination. We consider requirements such
              as industry relevance, target geography, traffic expectations,
              and publisher guidelines.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              We also help businesses establish and improve their websites
              with responsive designs and business-focused development.
            </p>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {[
              {
                title: "Relevant Opportunities",
                description:
                  "We consider your niche and campaign goals when reviewing available placements.",
              },
              {
                title: "Clear Communication",
                description:
                  "We share available options and quoted prices for review before proceeding.",
              },
              {
                title: "Flexible Collaboration",
                description:
                  "You can provide your own target-site list or request suitable available options.",
              },
              {
                title: "Realistic Expectations",
                description:
                  "Placements depend on publisher availability and individual publishing guidelines.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6"
              >
                <p className="text-[10px] font-bold tracking-[2px] text-neutral-400">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <SectionLabel>Our Services</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Practical Services for Your Business.
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              From building your website to coordinating publishing
              opportunities, our services are shaped around your goals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                className="about-card flex min-h-[220px] flex-col rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
              >
                <span className="text-xs font-bold tracking-[2px] text-neutral-400">
                  {service.number}
                </span>

                <h3 className="mt-5 text-lg font-extrabold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {service.description}
                </p>

                <span className="mt-auto pt-5 text-xs font-bold text-black">
                  Explore Service
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN FOCUS */}
      <section className="px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>Our Areas of Focus</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Built Around Your Campaign Requirements.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            We take your campaign criteria into account when evaluating
            opportunities and coordinating placements.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => (
              <article
                key={item.number}
                className="about-card rounded-2xl border border-neutral-200 p-5 sm:p-7"
              >
                <p className="text-xs font-bold tracking-[2px] text-neutral-400">
                  {item.number}
                </p>

                <h3 className="mt-5 text-lg font-extrabold leading-snug sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionLabel>Who We Work With</SectionLabel>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Collaboration That Fits Your Workflow.
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Whether you manage client campaigns or need support for your
              own website, we aim to understand your requirements and
              coordinate suitable next steps.
            </p>
          </div>

          <div className="space-y-3">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                  <CheckIcon />
                </span>

                <p className="text-sm font-semibold leading-6 text-neutral-800 sm:text-base">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>Meet the Team</SectionLabel>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            The People Behind the Work.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            A team combining web development, publisher outreach, and
            link-building coordination.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="about-card rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-lg font-extrabold">
                  {member.initials}
                </div>

                <h3 className="mt-5 text-lg font-extrabold">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-neutral-500 sm:text-sm">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 text-center min-[375px]:px-5 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Let's Work Together</SectionLabel>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let's Discuss Your Next Project.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            Share your website goals or campaign requirements. We'll review
            the details and discuss suitable next steps based on your needs
            and available opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
            <a
              href="/contact"
              className="about-button inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-7 py-3 text-center text-sm font-bold text-white hover:bg-neutral-800"
            >
              Contact Our Team
            </a>

            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3 text-center text-sm font-bold text-black hover:bg-white"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
