import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  // =========================================================
  // COUNTERS
  // =========================================================
  const [counters, setCounters] = useState({
    seo: 0,
    roi: 0,
    speed: 0,
    clients: 0,
    services: 0,
  });

  const [counterStarted, setCounterStarted] = useState(false);

  // =========================================================
  // REFS
  // =========================================================
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const sliderRef = useRef(null);

  // =========================================================
  // SCROLL / ENTRANCE ANIMATION
  // =========================================================
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    stats: false,
    slider: false,
  });

  useEffect(() => {
    const elements = [
      { ref: heroRef, key: "hero" },
      { ref: statsRef, key: "stats" },
      { ref: sliderRef, key: "slider" },
    ];

    const observers = [];

    elements.forEach(({ ref, key }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [key]: true,
            }));

            observer.disconnect();
          }
        },
        {
          threshold: 0.15,
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // =========================================================
  // COUNTER OBSERVER
  // =========================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counterStarted) {
          setCounterStarted(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [counterStarted]);

  // =========================================================
  // COUNTER ANIMATION
  // =========================================================
  useEffect(() => {
    if (!counterStarted) return;

    const targets = {
      seo: 52,
      roi: 3,
      speed: 2,
      clients: 100,
      services: 12,
    };

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4);

      setCounters({
        seo: Math.round(targets.seo * eased),
        roi: Math.round(targets.roi * eased),
        speed: Math.round(targets.speed * eased),
        clients: Math.round(targets.clients * eased),
        services: Math.round(targets.services * eased),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounters(targets);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [counterStarted]);

  // =========================================================
  // SERVICES SLIDER
  // =========================================================
  const services = [
    "WEB DEVELOPMENT",
    "GUEST POST",
    "TRADING BACKLINKS",
    "CONTENT WRITING",
    "FACEBOOK ADS",
    "GRAPHIC DESIGN",
  ];

  const sliderServices = [...services, ...services];

  // =========================================================
  // STAT DATA
  // =========================================================
  const stats = [
    {
      title: "SEO Performance",
      description:
        "Average organic traffic increase across all clients",
      value: `${counters.seo}%`,
      progress: `${counters.seo}%`,
    },
    {
      title: "Campaign ROI",
      description: "Average return on ad spend",
      value: `${counters.roi}x`,
      progress: `${(counters.roi / 3) * 100}%`,
    },
    {
      title: "Web Speed",
      description: "Average page load after build",
      value: `${counters.speed}s`,
      progress: `${(counters.speed / 2) * 100}%`,
    },
    {
      title: "Clients Scaled",
      description: "Businesses grown online",
      value: `${counters.clients}+`,
      progress: `${counters.clients}%`,
    },
    {
      title: "Services",
      description: "Digital specialisms",
      value: `${counters.services}+`,
      progress: `${(counters.services / 12) * 100}%`,
    },
  ];

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-black
        font-[Arial,sans-serif]
        overflow-hidden
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-white
          px-5
          py-12
          sm:px-8
          lg:px-12
        "
      >
        {/* Soft Background Shapes */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-80
            h-80
            rounded-full
            bg-blue-500/10
            blur-3xl
            animate-float-slow
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-32
            w-96
            h-96
            rounded-full
            bg-red-500/10
            blur-3xl
            animate-float-slow-reverse
          "
        />

        {/* Decorative Lines */}

        <div className="absolute top-24 right-10 hidden lg:block">
          <div className="w-20 h-[2px] bg-black/10 mb-2" />
          <div className="w-12 h-[2px] bg-blue-600/40 ml-8" />
        </div>

        <div className="absolute bottom-24 left-10 hidden lg:block">
          <div className="w-12 h-[2px] bg-red-600/40" />
          <div className="w-20 h-[2px] bg-black/10 mt-2" />
        </div>

        {/* =================================================
            MAIN CONTAINER
        ================================================== */}

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            min-h-[calc(100vh-6rem)]
            flex
            items-center
          "
        >
          <div
            className="
              w-full
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              ref={heroRef}
              className={`
                text-left
                scroll-entrance
                ${
                  visibleSections.hero
                    ? "scroll-entrance-visible"
                    : ""
                }
              `}
            >
              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  text-black
                  text-base
                  sm:text-lg
                  font-semibold
                  shadow-sm
                "
              >
                <span className="relative flex w-2.5 h-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-blue-500
                      opacity-60
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-blue-600
                    "
                  />
                </span>

                Digital Marketing Agency
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-7
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-black
                  leading-[0.98]
                  tracking-tight
                  text-black
                "
              >
                We Build Brands

                <span className="block mt-2">
                  That Grow.
                </span>
              </h1>

              {/* Animated Accent */}

              <div className="mt-7 flex items-center gap-2">
                <span
                  className="
                    block
                    w-16
                    h-1
                    rounded-full
                    bg-blue-600
                    animate-width
                  "
                />

                <span
                  className="
                    block
                    w-5
                    h-1
                    rounded-full
                    bg-red-500
                  "
                />
              </div>

              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-8
                  text-gray-600
                  font-normal
                "
              >
                From{" "}
                <strong className="text-black">
                  SEO
                </strong>{" "}
                and strategic{" "}
                <strong className="text-black">
                  Link Building
                </strong>{" "}
                to{" "}
                <strong className="text-black">
                  Web Development
                </strong>
                ,{" "}
                <strong className="text-black">
                  Content Writing
                </strong>
                ,{" "}
                <strong className="text-black">
                  Paid Advertising
                </strong>
                , and{" "}
                <strong className="text-black">
                  Creative Design
                </strong>
                , we provide practical digital solutions that help
                businesses attract the right audience and grow online.
              </p>

              {/* CTA BUTTONS */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >
                {/* WhatsApp */}

                <a
                  href="https://wa.me/923266023011"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    px-6
                    py-3
                    rounded-lg
                    bg-[#25D366]
                    text-white
                    text-base
                    font-bold
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#1ebe5d]
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <FaWhatsapp
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  Message Now
                </a>

                {/* Gmail Consultation */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mhuzaifa6939@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    px-6
                    py-3
                    rounded-lg
                    bg-black
                    text-white
                    text-base
                    font-bold
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-blue-600
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover:rotate-6
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="
                        M8 7V3
                        m8 4V3
                        m-9 4h10
                        M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z
                      "
                    />
                  </svg>

                  Book a Free Consultation
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div>
              {/* =================================================
                  STATS
              ================================================== */}

              <div
                ref={statsRef}
                className={`
                  w-full
                  grid
                  grid-cols-1
                  gap-4
                  scroll-entrance
                  scroll-entrance-delay-2
                  ${
                    visibleSections.stats
                      ? "scroll-entrance-visible"
                      : ""
                  }
                `}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      p-5
                      sm:p-6
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-xl
                      animate-stat
                    "
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        w-1
                        h-full
                        bg-blue-600
                      "
                    />

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <h3
                          className="
                            text-lg
                            sm:text-xl
                            font-bold
                            text-black
                          "
                        >
                          {stat.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            text-sm
                            sm:text-base
                            text-gray-500
                            font-normal
                          "
                        >
                          {stat.description}
                        </p>
                      </div>

                      <div
                        className="
                          text-3xl
                          sm:text-4xl
                          font-black
                          text-blue-600
                          whitespace-nowrap
                        "
                      >
                        {stat.value}
                      </div>
                    </div>

                    <div
                      className="
                        mt-5
                        h-1.5
                        w-full
                        rounded-full
                        bg-gray-100
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                          h-full
                          rounded-full
                          transition-all
                          duration-300
                          bg-blue-600
                        "
                        style={{
                          width: stat.progress,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES SLIDER
      ====================================================== */}

      <section
        ref={sliderRef}
        className="
          relative
          overflow-hidden
          border-y
          border-gray-200
          bg-white
          py-5
        "
      >
        <div className="relative overflow-hidden">
          {/* Left Fade */}

          <div
            className="
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              sm:w-28
              bg-gradient-to-r
              from-white
              to-transparent
              pointer-events-none
            "
          />

          {/* Right Fade */}

          <div
            className="
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              sm:w-28
              bg-gradient-to-l
              from-white
              to-transparent
              pointer-events-none
            "
          />

          {/* Moving Track */}

          <div
            className="
              flex
              w-max
              items-center
              service-track
            "
          >
            {sliderServices.map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="
                  flex
                  items-center
                  shrink-0
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    px-5
                    sm:px-8
                    text-[11px]
                    sm:text-sm
                    font-bold
                    tracking-wide
                    text-black
                  "
                >
                  {service}
                </span>

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-black
                    shrink-0
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>
        {`
          /* ================================================
             SCROLL / ENTRANCE ANIMATION
          ================================================= */

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

          .scroll-entrance-delay-2 {
            transition-delay: 0.2s;
          }

          /* ================================================
             STATS ENTRANCE
          ================================================= */

          .animate-stat {
            opacity: 0;
            transform: translateY(35px);
            animation: statEntrance 0.7s ease-out forwards;
            animation-play-state: paused;
          }

          .scroll-entrance-visible .animate-stat {
            animation-play-state: running;
          }

          @keyframes statEntrance {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ================================================
             SERVICES SLIDER
          ================================================= */

          @keyframes serviceSlider {
            0% {
              transform: translate3d(0, 0, 0);
            }

            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .service-track {
            width: max-content;
            animation: serviceSlider 30s linear infinite;
            will-change: transform;
          }

          .service-track:hover {
            animation-play-state: paused;
          }

          /* ================================================
             REDUCED MOTION
          ================================================= */

          @media (prefers-reduced-motion: reduce) {
            .scroll-entrance {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }

            .animate-stat {
              opacity: 1 !important;
              transform: none !important;
              animation: none !important;
            }

            .service-track {
              animation: none !important;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Hero;