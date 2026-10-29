import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvErr0qMRlBxdnmW3zq_ZIOANBvvKS5bX7ZQQumDPeA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ayqOr3y3pl5Kqm4CcNDRPB9FuAiPBqrPwvPNb4c5bM9qBRTIuG5PuAhb&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnzMiRkrAdWN_phpPH72mtKim_EyN2OLiiv1NyCVLyg&s=10",
];

const benefits = [
  {
    number: "01",
    title: "Niche Relevance",
    description:
      "Publishing opportunities aligned with your target industry.",
  },
  {
    number: "02",
    title: "Traffic & SEO Metric Review",
    description:
      "Evaluate available organic traffic trends and SEO metrics.",
  },
  {
    number: "03",
    title: "Campaign-Specific Research",
    description:
      "Options based on your target countries and campaign requirements.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".hero-reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("hero-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section overflow-hidden bg-white text-black"
    >
      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.2, 0.65, 0.3, 1);
        }

        .hero-reveal.hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-delay-1 { transition-delay: 100ms; }
        .hero-delay-2 { transition-delay: 200ms; }
        .hero-delay-3 { transition-delay: 300ms; }
        .hero-delay-4 { transition-delay: 400ms; }

        .hero-image {
          transform: scale(1.06);
          transition:
            opacity 1000ms ease,
            transform 6500ms ease;
        }

        .hero-image-active {
          transform: scale(1);
        }

        .hero-cta {
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background-color 250ms ease,
            color 250ms ease;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .hero-benefit {
          transition:
            border-color 300ms ease,
            transform 300ms ease;
        }

        .hero-benefit:hover {
          transform: translateY(-5px);
        }

        .hero-indicator {
          transition: width 300ms ease, background-color 300ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-image,
          .hero-cta,
          .hero-benefit,
          .hero-indicator {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }

          .hero-reveal {
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* Main Hero */}
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-14 lg:py-20">
        {/* Hero Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="hero-reveal mb-6 inline-flex items-center gap-3">
            <span className="h-[2px] w-9 bg-pink-500" />
            <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-xs font-bold uppercase tracking-[0.24em] text-transparent sm:text-sm">
              Trade Rank Media
            </span>
          </div>

          <p className="hero-reveal hero-delay-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black sm:text-sm">
            Link Building & Digital PR
          </p>

          <h1 className="hero-reveal hero-delay-2 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-[68px]">
            Relevant Links.
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Trusted Publishers.
            </span>
            Smarter Growth.
          </h1>

          <p className="hero-reveal hero-delay-3 mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Strategic guest posting, niche edits, and editorial placement
            opportunities tailored to your industry, target market, and
            campaign requirements.
          </p>

          <p className="hero-reveal hero-delay-3 mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Supporting SEO agencies, freelancers, and businesses across
            crypto, forex, finance, technology, and other industries.
          </p>

          {/* CTA Buttons */}
          <div className="hero-reveal hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="hero-cta inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-teal-400 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Request a Quote
            </Link>

            <Link
              to="/services"
              className="hero-cta inline-flex min-h-12 items-center justify-center rounded-md border border-black bg-white px-7 py-3.5 text-sm font-bold text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Contact Details */}
          <div className="hero-reveal hero-delay-4 mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-5 text-sm text-neutral-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            {/* Contact links can be added here */}
          </div>
        </div>

        {/* Image Slider */}
        <div className="hero-reveal order-1 lg:order-2">
          <div className="group relative h-[260px] overflow-hidden rounded-xl bg-neutral-100 sm:h-[380px] md:h-[440px] lg:h-[500px]">
            {images.map((image, index) => (
              <div
                key={image}
                className={`hero-image absolute inset-0 ${
                  current === index
                    ? "hero-image-active z-10 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Trade Rank Media campaign visual ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  draggable="false"
                />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 z-20 text-white transition-transform duration-500 group-hover:translate-y-[-3px] sm:bottom-7 sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Built Around Your Campaign
              </p>
              <p className="mt-2 text-xl font-bold sm:text-2xl">
                Research. Relevance. Placement.
              </p>
            </div>

            {/* Slider Indicators */}
            <div className="absolute right-5 top-5 z-20 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={current === index}
                  className={`hero-indicator h-2 rounded-full ${
                    current === index
                      ? "w-7 bg-teal-400"
                      : "w-2 bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Points */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
          <div className="hero-reveal mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#77716A]">
              Built Around Your Requirements
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              A more considered approach to link building.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.number}
                style={{ transitionDelay: `${index * 120}ms` }}
                className="hero-reveal hero-benefit border-t-2 border-neutral-200 pt-5 hover:border-teal-500"
              >
                <span className="text-xs font-bold tracking-[0.15em] text-teal-700">
                  {benefit.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-black sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}