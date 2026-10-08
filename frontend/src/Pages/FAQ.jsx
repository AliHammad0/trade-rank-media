import React, { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // =========================================================
  // SCROLL / ENTRANCE ANIMATION
  // =========================================================
  const [visibleSections, setVisibleSections] = useState({
    heading: false,
    faqs: false,
    contact: false,
    cta: false,
  });

  const headingRef = useRef(null);
  const faqsRef = useRef(null);
  const contactRef = useRef(null);
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
      headingRef.current,
      faqsRef.current,
      contactRef.current,
      ctaRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What makes Digital Trade Rank Media different?",
      answer:
        "Performance-driven and transparent approach. Sustainable growth, ethical strategies, measurable outcomes — not shortcuts or vanity metrics.",
    },
    {
      question: "How do you build a digital marketing strategy?",
      answer:
        "We start by understanding your business, target audience, competitors and goals. Then we create a customised strategy focused on traffic, leads, conversions and sustainable growth.",
    },
    {
      question: "Which industries do you specialise in?",
      answer:
        "We work with businesses across different industries, creating customised digital marketing strategies based on their specific goals, audience and market.",
    },
    {
      question: "Do you offer customised packages?",
      answer:
        "Yes. Our services and packages can be customised according to your business requirements, goals and budget.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "Results depend on the service, industry, competition and starting point. Some campaigns can generate early improvements, while SEO and organic growth usually require more time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">

      {/* ================= FAQ ================= */}
      <section className="relative overflow-hidden bg-white px-6 py-24">

        {/* Background Glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          {/* Heading */}
          <div
            ref={headingRef}
            data-section="heading"
            className={`mb-14 text-center scroll-entrance ${
              visibleSections.heading ? "scroll-entrance-visible" : ""
            }`}
          >

            <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
              FAQ
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              Questions{" "}
              <span className="text-black">
                Answered
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Everything you need to know before working with us.
            </p>

          </div>

          {/* FAQ + Contact */}
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

            {/* FAQ Questions */}
            <div
              ref={faqsRef}
              data-section="faqs"
              className={`space-y-4 scroll-entrance ${
                visibleSections.faqs ? "scroll-entrance-visible" : ""
              }`}
            >

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`faq-item overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-blue-500 shadow-lg shadow-blue-500/10"
                        : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >

                    {/* Question */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >

                      <span className="text-base font-bold text-black sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl font-bold transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-red-500 bg-red-500 text-white"
                            : "border-blue-200 bg-blue-50 text-blue-600"
                        }`}
                      >
                        +
                      </span>

                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <p className="px-6 pb-6 leading-7 text-gray-600">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Contact Card */}
            <div
              ref={contactRef}
              data-section="contact"
              className={`h-fit rounded-3xl border border-blue-100 bg-blue-50 p-8 scroll-entrance-right ${
                visibleSections.contact
                  ? "scroll-entrance-right-visible"
                  : ""
              }`}
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/20">
                ✦
              </div>

              <h3 className="text-2xl font-extrabold text-black">
                Still have questions?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Our team is ready to discuss your business and help you find
                the right digital strategy.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Contact Us
                <span>→</span>
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white px-6 pb-24">

        <div
          ref={ctaRef}
          data-section="cta"
          className={`relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-red-50 px-6 py-16 text-center shadow-xl shadow-gray-200/50 sm:px-12 scroll-entrance ${
            visibleSections.cta ? "scroll-entrance-visible" : ""
          }`}
        >

          {/* Decorative Glow */}
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-red-500/10 blur-2xl" />

          <div className="relative">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
              Get Started Today
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-black sm:text-5xl">
              Ready to Grow
              <br />

              <span className="text-black">
                Your Business?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Let's create a digital strategy that drives real traffic,
              qualified leads and sustainable business growth.
            </p>

            {/* ================= WHATSAPP BUTTON ================= */}
            <a
              href="https://wa.me/923266023011?text=Hello%20Trade%20Rank%20Media%2C%20I%20would%20like%20to%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              Get a Free Quote
              <span>→</span>
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

        .scroll-entrance-right {
          opacity: 0;
          transform: translateX(60px);
          transition:
            opacity 0.9s ease-out,
            transform 0.9s ease-out;
          will-change: opacity, transform;
        }

        .scroll-entrance-right-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .faq-item {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease-out,
            transform 0.7s ease-out,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .scroll-entrance-visible .faq-item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-entrance,
          .scroll-entrance-right,
          .faq-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

    </div>
  );
};

export default FAQ;