import React, { useEffect, useRef, useState } from "react";

const Process = () => {
  const process = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We understand your market, competitors, and audience to find the right opportunities for your business.",
    },
    {
      number: "02",
      title: "Strategy Design",
      description:
        "A customised digital strategy built around your goals, budget, and industry. We focus on practical solutions that deliver real value and meaningful results.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team handles every project with care — from technical work and content to campaigns and design, delivered on time.",
    },
    {
      number: "04",
      title: "Measure & Optimise",
      description:
        "Clear reporting, regular reviews, and ongoing improvements. We focus on the numbers that matter to your business.",
    },
  ];

  // ================= SCROLL / ENTRANCE ANIMATION =================
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: false,
    bottom: false,
  });

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;

            setIsVisible((prev) => ({
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
      cardsRef.current,
      bottomRef.current,
    ];

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 py-20 font-[Arial,sans-serif] font-bold sm:px-6 lg:px-10">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft Blue Glow */}
        <div
          className="
            absolute
            -top-32
            left-[10%]
            h-72
            w-72
            rounded-full
            bg-blue-100/60
            blur-3xl
            animate-[floatOne_8s_ease-in-out_infinite]
          "
        />

        {/* Soft Red Glow */}
        <div
          className="
            absolute
            top-[35%]
            -right-32
            h-80
            w-80
            rounded-full
            bg-red-100/50
            blur-3xl
            animate-[floatTwo_10s_ease-in-out_infinite]
          "
        />

        {/* Small Floating Circle */}
        <div
          className="
            absolute
            bottom-20
            left-[8%]
            h-16
            w-16
            rounded-full
            border-2
            border-blue-100
            animate-[floatThree_6s_ease-in-out_infinite]
          "
        />

        {/* Small Red Circle */}
        <div
          className="
            absolute
            right-[10%]
            top-28
            h-10
            w-10
            rounded-full
            border-2
            border-red-200
            animate-[floatThree_7s_ease-in-out_infinite_reverse]
          "
        />
      </div>

      {/* ================= HEADER ================= */}

      <div
        ref={headerRef}
        data-section="header"
        className={`relative z-10 mx-auto mb-16 max-w-7xl text-center scroll-entrance ${
          isVisible.header ? "scroll-entrance-visible" : ""
        }`}
      >

        <span className="mb-4 inline-block text-lg text-blue-600">
          How We Work
        </span>

        <h2 className="text-4xl font-black text-black sm:text-5xl lg:text-6xl">
          Our <span className="text-black">Process</span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600" />

        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-gray-600">
          From first conversation to measurable growth — transparent every
          step of the way.
        </p>

        {/* CTA */}

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-red-600
            px-7
            py-4
            text-lg
            font-black
            text-white
            shadow-lg
            transition-all
            duration-300
          "
        >
          Start Your Project
          <span className="text-xl">→</span>
        </a>
      </div>

      {/* ================= PROCESS CARDS ================= */}

      <div
        ref={cardsRef}
        data-section="cards"
        className={`relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 scroll-entrance ${
          isVisible.cards ? "scroll-entrance-visible" : ""
        }`}
      >

        {process.map((item, index) => (
          <div
            key={item.number}
            className="
              relative
              min-h-[390px]
              overflow-hidden
              rounded-3xl
              border-2
              border-gray-200
              bg-white
              p-7
              shadow-lg
              animate-[cardFloat_5s_ease-in-out_infinite]
              process-card-entrance
            "
            style={{
              animationDelay: `${index * 0.7}s`,
              transitionDelay: `${index * 0.15}s`,
            }}
          >

            {/* Animated Shine */}

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                top-0
                h-full
                w-24
                rotate-[20deg]
                bg-gradient-to-r
                from-transparent
                via-blue-100/40
                to-transparent
                animate-[shine_6s_ease-in-out_infinite]
              "
              style={{
                animationDelay: `${index * 0.8}s`,
              }}
            />

            {/* Background Number */}

            <span
              className="
                absolute
                -right-3
                -top-5
                text-[120px]
                font-black
                text-gray-100
              "
            >
              {item.number}
            </span>

            {/* Number Circle */}

            <div
              className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-red-600
                text-xl
                font-black
                text-white
                shadow-lg
                animate-[numberPulse_4s_ease-in-out_infinite]
              "
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {item.number}
            </div>

            {/* Step Line */}

            {index !== process.length - 1 && (
              <div
                className="
                  absolute
                  right-[-25px]
                  top-[60px]
                  hidden
                  h-[2px]
                  w-[50px]
                  bg-blue-200
                  lg:block
                "
              />
            )}

            {/* Content */}

            <div className="relative mt-10">

              <h3 className="text-2xl font-black leading-tight text-black">
                {item.title}
              </h3>

              <p className="mt-5 text-base font-semibold leading-7 text-gray-600">
                {item.description}
              </p>

            </div>

            {/* Bottom Accent */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-1
                w-full
                bg-gradient-to-r
                from-blue-600
                via-red-600
                to-blue-600
                bg-[length:200%_100%]
                animate-[gradientMove_4s_linear_infinite]
              "
            />

          </div>
        ))}
      </div>

      {/* ================= BOTTOM MESSAGE ================= */}

      <div
        ref={bottomRef}
        data-section="bottom"
        className={`relative z-10 mx-auto mt-16 max-w-4xl text-center scroll-entrance ${
          isVisible.bottom ? "scroll-entrance-visible" : ""
        }`}
      >

        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-6
            py-3
            text-blue-600
          "
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-600" />
          Simple Process. Real Results.
        </div>

      </div>

      {/* ================= CUSTOM ANIMATIONS ================= */}

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

          .process-card-entrance {
            opacity: 0;
            transform: translateY(50px);
            transition:
              opacity 0.8s ease-out,
              transform 0.8s ease-out;
          }

          .scroll-entrance-visible .process-card-entrance {
            opacity: 1;
            transform: translateY(0);
          }

          /* ================= EXISTING ANIMATIONS ================= */

          @keyframes floatOne {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(70px, 40px) scale(1.15);
            }
          }

          @keyframes floatTwo {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-60px, -50px) scale(1.1);
            }
          }

          @keyframes floatThree {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(180deg);
            }
          }

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes numberPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.06);
            }
          }

          @keyframes shine {
            0% {
              left: -140px;
            }
            45%, 100% {
              left: 120%;
            }
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .scroll-entrance,
            .process-card-entrance {
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

export default Process;