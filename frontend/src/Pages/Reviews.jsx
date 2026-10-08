import React, { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // ================= SCROLL / ENTRANCE =================
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    testimonials: false,
    bottom: false,
  });

  const headerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bottomRef = useRef(null);

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
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = [
      headerRef.current,
      testimonialsRef.current,
      bottomRef.current,
    ];

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "Trade Rank Media transformed our online presence. Within weeks, traffic increased and leads became more qualified. Professional, responsive, and truly expert at modern SEO.",
      name: "Sara Malik",
      role: "Head of Growth, EduNova",
    },
    {
      quote:
        "Our new site loads in under 2 seconds and the booking flow is super smooth. They handled everything from UX to SEO like true partners.",
      name: "Omar Farooq",
      role: "Founder, QuickShip Logistics",
    },
    {
      quote:
        "They rebuilt our WordPress stack with WooCommerce. Organic traffic is up 52% and our team can edit pages in minutes. Zero hassle.",
      name: "Ali Raza",
      role: "COO, FreshFarm Foods",
    },
    {
      quote:
        "The team understood our goals from day one and delivered exactly what we needed. Communication was easy and the results speak for themselves.",
      name: "Hamza Ahmed",
      role: "Founder, TechZone",
    },
    {
      quote:
        "From design to SEO, everything was handled professionally. Our website looks better, performs faster, and we are getting more enquiries.",
      name: "Ayesha Khan",
      role: "Marketing Manager, StyleHub",
    },
  ];

  // ================= AUTO SLIDER =================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 py-20 font-[Arial,sans-serif] font-bold sm:px-6 lg:px-10">

      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute left-10 top-20
          h-32 w-32 rounded-full
          bg-blue-500/10 blur-2xl
          animate-[float_6s_ease-in-out_infinite]
        "
      />

      <div
        className="
          absolute bottom-20 right-10
          h-40 w-40 rounded-full
          bg-red-500/10 blur-3xl
          animate-[float_8s_ease-in-out_infinite]
        "
      />

      <div
        className="
          absolute left-1/2 top-1/2
          h-24 w-24 rotate-45
          bg-blue-600/10 blur-xl
          animate-[spin_12s_linear_infinite]
        "
      />

      {/* ================= HEADER ================= */}

      <div
        ref={headerRef}
        data-section="header"
        className={`relative mx-auto mb-16 max-w-7xl text-center scroll-entrance ${
          visibleSections.header ? "scroll-entrance-visible" : ""
        }`}
      >

        <span
          className="
            inline-block rounded-full
            border border-blue-200
            bg-blue-50 px-5 py-2
            text-lg text-blue-600
          "
        >
          Client Results
        </span>

        <h2 className="mt-5 text-4xl font-black text-black sm:text-5xl lg:text-6xl">
          What They <span>Say</span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600" />

        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-gray-600">
          Real experiences from businesses that trusted us with their digital
          growth.
        </p>

      </div>

      {/* ================= DESKTOP ================= */}

      <div
        ref={testimonialsRef}
        data-section="testimonials"
        className={`relative mx-auto hidden max-w-7xl grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 scroll-entrance ${
          visibleSections.testimonials
            ? "scroll-entrance-visible"
            : ""
        }`}
      >

        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="testimonial-entrance"
            style={{
              transitionDelay: `${index * 0.15}s`,
            }}
          >
            <TestimonialCard
              testimonial={testimonial}
              index={index}
            />
          </div>
        ))}

      </div>

      {/* ================= MOBILE SLIDER ================= */}

      <div
        className={`relative mx-auto block max-w-md md:hidden scroll-entrance ${
          visibleSections.testimonials
            ? "scroll-entrance-visible"
            : ""
        }`}
      >

        <div className="overflow-hidden">

          <div
            key={current}
            className="animate-[slideIn_500ms_ease-in-out]"
          >
            <TestimonialCard
              testimonial={testimonials[current]}
              index={current}
              mobile
            />
          </div>

        </div>

        {/* ================= CONTROLS ================= */}

        <div className="mt-8 flex items-center justify-between">

          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-gray-200
              bg-white text-xl text-black
              shadow-md active:scale-90
            "
          >
            ←
          </button>

          {/* DOTS */}

          <div className="flex items-center gap-2">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${
                    current === index
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-gray-300"
                  }
                `}
              />
            ))}

          </div>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-gray-200
              bg-white text-xl text-black
              shadow-md active:scale-90
            "
          >
            →
          </button>

        </div>

      </div>

      {/* ================= BOTTOM CTA ================= */}

      <div
        ref={bottomRef}
        data-section="bottom"
        className={`relative mx-auto mt-16 max-w-4xl text-center scroll-entrance ${
          visibleSections.bottom ? "scroll-entrance-visible" : ""
        }`}
      >

        <div
          className="
            inline-flex items-center gap-3
            rounded-full border border-blue-200
            bg-blue-50 px-6 py-3
            text-blue-600 shadow-sm
          "
        >
          <span className="h-3 w-3 animate-pulse rounded-full bg-red-600" />
          Your Success Could Be Next
        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>
        {`
          /* ================= SCROLL / ENTRANCE ================= */

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

          .testimonial-entrance {
            opacity: 0;
            transform: translateY(50px);
            transition:
              opacity 0.8s ease-out,
              transform 0.8s ease-out;
          }

          .scroll-entrance-visible .testimonial-entrance {
            opacity: 1;
            transform: translateY(0);
          }

          /* ================= EXISTING ANIMATIONS ================= */

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }

            50% {
              transform: translateY(-25px) rotate(8deg);
            }
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(40px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .scroll-entrance,
            .testimonial-entrance {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

    </section>
  );
};


/* ================================================== */
/* TESTIMONIAL CARD */
/* ================================================== */

const TestimonialCard = ({ testimonial, index, mobile }) => {
  return (
    <div
      className={`
        relative min-h-[430px]
        overflow-hidden rounded-[32px]
        border-2 border-gray-200
        bg-white p-8 shadow-xl
        ${
          mobile
            ? ""
            : `
              group
              transition-all duration-700
              hover:-translate-y-5
              hover:rotate-[1deg]
              hover:shadow-2xl
              hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translateY(-20px)]
            `
        }
      `}
    >

      {/* Circle */}

      <div
        className={`
          absolute -right-16 -top-16
          h-44 w-44 rounded-full
          bg-red-600/10
          ${
            mobile
              ? ""
              : "transition-all duration-700 group-hover:scale-150 group-hover:bg-white/10"
          }
        `}
      />

      {/* Quote */}

      <div
        className={`
          relative text-8xl font-black leading-none text-red-600
          ${mobile ? "" : "group-hover:text-"}
        `}
      >
        "
      </div>

      {/* Text */}

      <p
        className={`
          relative mt-2 text-lg font-semibold leading-8 text-gray-600
          ${
            mobile
              ? ""
              : "transition-colors duration-500 group-hover:text-black"
          }
        `}
      >
        {testimonial.quote}
      </p>

      {/* Divider */}

      <div
        className={`
          mt-7 h-1 w-16 rounded-full bg-blue-600
          ${
            mobile
              ? ""
              : "transition-all duration-500 group-hover:w-24 group-hover:bg-white"
          }
        `}
      />

      {/* User */}

      <div className="relative mt-7 flex items-center gap-4">

        <div
          className={`
            flex h-14 w-14 items-center justify-center
            rounded-full bg-black
            text-xl font-black text-black shadow-lg
            ${
              mobile
                ? ""
                : "group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:text-blue-600"
            }
          `}
        >
          {testimonial.name.charAt(0)}
        </div>

        <div>

          <h3
            className={`
              text-lg font-black text-black
              ${mobile ? "" : "group-hover:text-black"}
            `}
          >
            {testimonial.name}
          </h3>

          <p
            className={`
              mt-1 text-sm font-semibold text-gray-500
              ${mobile ? "" : "group-hover:text-black/80"}
            `}
          >
            {testimonial.role}
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div
        className={`
          absolute bottom-0 left-0 h-1 w-full bg-red-600
          ${mobile ? "" : "group-hover:h-2 group-hover:bg-white"}
        `}
      />

      {/* Number */}

      <span
        className={`
          absolute bottom-5 right-7
          text-5xl font-black text-gray-100
          ${mobile ? "" : "group-hover:text-black/10"}
        `}
      >
        0{index + 1}
      </span>

    </div>
  );
};

export default Testimonials;