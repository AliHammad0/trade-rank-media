
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white text-black">
      {/* Main Hero */}
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-14 lg:py-20">
        {/* Hero Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-[2px] w-9 bg-pink-500" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-600 sm:text-sm">
              Trade Rank Media
            </span>
          </div>

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-pink-600 sm:text-sm">
            Link Building & Digital PR
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-[68px]">
            Relevant Links.
            <span className="block text-pink-600">
              Trusted Publishers.
            </span>
            Smarter Growth.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Strategic guest posting, niche edits, and editorial placement
            opportunities tailored to your industry, target market, and
            campaign requirements.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Supporting SEO agencies, freelancers, and businesses across
            crypto, forex, finance, technology, and other industries.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-pink-600 px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Request a Quote
            </Link>

            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-black bg-white px-7 py-3.5 text-sm font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-5 text-sm text-neutral-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <a
              href="https://wa.me/923114237376"
              target="_blank"
              rel="noreferrer"
              className="w-fit transition-colors hover:text-pink-600"
            >
              WhatsApp: +92 311 4237376
            </a>

            <a
              href="mailto:traderankmedia@gmail.com"
              className="w-fit break-all transition-colors hover:text-pink-600"
            >
              traderankmedia@gmail.com
            </a>
          </div>
        </div>

        {/* Image Slider */}
        <div className="order-1 lg:order-2">
          <div className="relative h-[260px] overflow-hidden rounded-xl bg-neutral-100 sm:h-[380px] md:h-[440px] lg:h-[500px]">
            {images.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  current === index
                    ? "z-10 opacity-100"
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

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 z-20 text-white sm:bottom-7 sm:left-7">
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-pink-500"
                      : "w-2 bg-white/80"
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
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Built Around Your Requirements
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              A more considered approach to link building.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border-t-2 border-neutral-200 pt-5 transition-colors duration-300 hover:border-pink-500"
              >
                <span className="text-xs font-bold tracking-[0.15em] text-pink-600">
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
