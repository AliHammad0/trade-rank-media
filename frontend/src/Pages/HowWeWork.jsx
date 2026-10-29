
import React, { useEffect, useRef } from "react";

const process = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us your target niche, preferred countries, organic traffic range, placement type, and specific website requirements. You can also share your own target-site list.",
    tags: ["Target Niche", "Countries", "Placement Type"],
  },
  {
    number: "02",
    title: "Research & Evaluate Publishers",
    description:
      "We review publisher opportunities against your campaign criteria, considering niche relevance, available SEO metrics, traffic trends, and publishing requirements.",
    tags: ["Niche Relevance", "SEO Metrics", "Traffic Review"],
  },
  {
    number: "03",
    title: "Review Your Options",
    description:
      "We share suitable available opportunities with relevant details and quoted prices. You review the options and approve placements that fit your campaign and budget before we proceed.",
    tags: ["Available Options", "Clear Pricing", "Your Approval"],
  },
  {
    number: "04",
    title: "Content & Placement Coordination",
    description:
      "Once you approve the details, we coordinate with the publisher. We can work with your supplied content or arrange content writing where available, subject to publisher guidelines.",
    tags: ["Content Support", "Publisher Coordination", "Guidelines"],
  },
  {
    number: "05",
    title: "Verify the Live Placement",
    description:
      "After publication, we check the live URL and confirm the agreed placement details, including the link and its attributes where verifiable. We then share the published URL with you.",
    tags: ["Live URL", "Link Verification", "Delivery"],
  },
  {
    number: "06",
    title: "Ongoing Campaign Support",
    description:
      "For repeat orders and ongoing campaigns, we help coordinate additional placements according to your changing requirements and publisher availability.",
    tags: ["Repeat Orders", "Campaign Support", "New Opportunities"],
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, user-focused websites designed around your business goals.",
    href: "/services/web-development",
  },
  {
    title: "Guest Posting",
    description:
      "Relevant publishing opportunities to support your content and SEO strategy.",
    href: "/services/guest-post",
  },
  {
    title: "Link Building",
    description:
      "Publisher research and link placement coordination based on your requirements.",
    href: "/services/link-building",
  },
  {
    title: "Link Insertion",
    description:
      "Relevant existing-content placement opportunities, subject to availability.",
    href: "/services/link-building",
  },
];

const HowWeWork = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const elements = main.querySelectorAll(".scroll-reveal-target");

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
      element.classList.add("scroll-reveal");

      if (element.hasAttribute("data-reveal-stagger")) {
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
      className="min-h-screen overflow-hidden bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translate3d(0, 26px, 0);
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

        @media (prefers-reduced-motion: reduce) {
          .scroll-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
            will-change: auto !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="scroll-reveal-target border-b border-gray-200 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:text-xs sm:tracking-[0.3em]">
            HOW WE WORK
          </p>

          <h1 className="max-w-5xl text-3xl font-bold leading-[1.15] tracking-tight min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            A Simple, Transparent
            <span className="mt-1 block">Link Building Process</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
            From your campaign requirements to live placements, we focus on
            relevant opportunities, clear communication, and a smooth delivery
            process.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row sm:mt-9">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-black bg-black px-6 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-neutral-800 sm:px-8"
            >
              Request a Quote
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-gray-300 bg-white px-6 py-3 text-center text-sm font-bold text-black transition-colors duration-200 hover:bg-gray-50 sm:px-8"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Process Introduction */}
      <section className="scroll-reveal-target px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 sm:mb-14 md:grid-cols-2 md:items-end md:gap-8 lg:mb-16">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
                OUR WORKFLOW
              </p>

              <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-tight min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
                From your requirements to live placements.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:justify-self-end">
              Every campaign starts with your goals. We review suitable
              opportunities, communicate the details, and proceed with
              placements after your approval.
            </p>
          </div>

          {/* Process Steps */}
          <div className="border-t border-gray-200">
            {process.map((step, index) => (
              <article
                key={step.number}
                data-reveal-stagger
                className="scroll-reveal-target grid gap-4 border-b border-gray-200 py-7 sm:gap-5 sm:py-9 md:grid-cols-[64px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-7 md:py-10 lg:grid-cols-[90px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-12"
              >
                <div className="flex items-start">
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-500 sm:text-sm">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="max-w-md text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
                    {step.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {step.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 bg-gray-50 px-2.5 py-2 text-[10px] font-medium text-gray-700 min-[375px]:text-[11px] sm:px-3 sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="scroll-reveal-target border-y border-gray-200 bg-[#fafafa] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
              WHAT WE DO
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
              Digital services built around your goals.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              From website development to publisher outreach, explore the
              services available for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {services.map((service, index) => (
              <a
                key={service.title}
                href={service.href}
                data-reveal-stagger
                className="scroll-reveal-target group flex min-h-[180px] flex-col border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-black sm:min-h-[200px] sm:p-6"
              >
                <h3 className="text-base font-bold leading-snug sm:text-lg">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
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

      {/* Final CTA */}
      <section className="scroll-reveal-target px-4 py-16 text-center sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
            LET'S WORK TOGETHER
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            Ready to Discuss Your Campaign?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
            Tell us what you need, and we'll review your requirements to
            identify suitable placement opportunities based on your campaign
            and publisher availability.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 min-[400px]:flex-row sm:mt-8">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-black bg-black px-6 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-neutral-800 sm:px-8"
            >
              Request a Quote
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-gray-300 bg-white px-6 py-3 text-center text-sm font-bold text-black transition-colors duration-200 hover:bg-gray-50 sm:px-8"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
