import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const cards = [
    {
      number: "01",
      title: "Our Mission",
      text: "We help businesses grow online with simple, useful, and high-quality digital services.",
    },
    {
      number: "02",
      title: "Our Vision",
      text: "Our goal is to become a trusted digital partner for businesses that want to grow online.",
    },
    {
      number: "03",
      title: "Our Values",
      text: "We believe in honest work, clear communication, quality service, and long-term relationships.",
    },
    {
      number: "04",
      title: "Our Approach",
      text: "First, we understand your business and goals. Then, we create a solution that fits your needs.",
    },
    {
      number: "05",
      title: "Our Promise",
      text: "We focus on quality work, clear communication, and delivering work on time.",
    },
    {
      number: "06",
      title: "Our Team",
      text: "Our team works together to create websites and digital solutions that help businesses move forward.",
    },
  ];

  const reasons = [
    "Professional and modern solutions",
    "Simple and clear communication",
    "Solutions made for your business",
    "Quality work at a fair price",
  ];

  // ================= SCROLL / ENTRANCE ANIMATION =================
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    cards: false,
    whyUs: false,
    stats: false,
    cta: false,
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const cardsRef = useRef(null);
  const whyUsRef = useRef(null);
  const statsRef = useRef(null);
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
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const sections = [
      heroRef.current,
      aboutRef.current,
      cardsRef.current,
      whyUsRef.current,
      statsRef.current,
      ctaRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ================= COUNTER COMPONENT =================
  const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.3,
        }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!hasStarted) return;

      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // Smooth ease-out effect
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, end, duration]);

    return (
      <span ref={counterRef}>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className="bg-white text-black overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative border-b border-gray-100">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-70" />

        <div
          ref={heroRef}
          data-section="hero"
          className={`relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center scroll-entrance ${
            visibleSections.hero ? "scroll-entrance-visible" : ""
          }`}
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black text-sm font-bold text-black">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            About Trade Rank Media
          </span>

          <h1 className="mt-7 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-black">
            We Help Businesses
            <span className="block text-black">
              Grow Online
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-black leading-8">
            Trade Rank Media helps businesses get noticed online, reach more
            customers, and get more leads with smart digital solutions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-7 py-4 font-bold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 shadow-lg"
            >
              Start Your Project →
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border-2 border-black bg-white px-7 py-4 font-bold text-black transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
            >
              View Our Services
            </Link>

          </div>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div
        ref={aboutRef}
        data-section="about"
        className={`max-w-6xl mx-auto px-6 py-20 md:py-24 scroll-entrance ${
          visibleSections.about ? "scroll-entrance-visible" : ""
        }`}
      >

        <div className="max-w-3xl mb-14">

          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Simple Ideas.
            <span className="block">
              Better Digital Results.
            </span>
          </h2>

          <p className="mt-6 text-lg text-black leading-8">
            We work with businesses that want a stronger online presence.
            From websites to digital marketing, we provide practical services
            that are made to support real business growth.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div
          ref={cardsRef}
          data-section="cards"
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-entrance ${
            visibleSections.cards ? "scroll-entrance-visible" : ""
          }`}
        >

          {cards.map((card, index) => (
            <div
              key={card.number}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
              className="group relative rounded-2xl border-2 border-black bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl card-entrance"
            >

              <div className="flex items-center justify-between">

                <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                  {card.number}
                </div>

                <span className="text-black text-2xl group-hover:text-blue-600 transition-colors">
                  →
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold text-black">
                {card.title}
              </h3>

              <p className="mt-3 text-black leading-7">
                {card.text}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />

            </div>
          ))}

        </div>
      </div>

      {/* ================= WHY US ================= */}
      <div className="bg-white border-y-2 border-black">

        <div
          ref={whyUsRef}
          data-section="whyUs"
          className={`max-w-6xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center scroll-entrance ${
            visibleSections.whyUs ? "scroll-entrance-visible" : ""
          }`}
        >

          <div>

            <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-black">
              We Make Digital Work
              <span className="block text-black">
                Simple For You
              </span>
            </h2>

            <p className="mt-6 text-lg text-black leading-8">
              You don't need to understand everything about digital marketing
              or websites. Tell us what you need, and we will help you find
              the right solution.
            </p>

            <div className="mt-8 space-y-4">

              {reasons.map((item, index) => (
                <div
                  key={item}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                  }}
                  className="reason-entrance flex items-center gap-4 border-2 border-black rounded-xl p-4 transition-all duration-300 hover:border-blue-600 hover:-translate-y-1"
                >

                  <div className="w-8 h-8 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <span className="font-bold text-black">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* ================= STATS ================= */}
          <div
            ref={statsRef}
            data-section="stats"
            className={`grid grid-cols-2 gap-5 scroll-entrance ${
              visibleSections.stats ? "scroll-entrance-visible" : ""
            }`}
          >

            <div className="stat-entrance rounded-2xl bg-white border-2 border-black p-7 shadow-sm hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-4xl md:text-5xl font-extrabold text-black">
                <Counter
                  end={100}
                  suffix="%"
                  duration={2000}
                />
              </h3>

              <p className="mt-2 text-black font-bold">
                Commitment
              </p>

            </div>

            <div className="stat-entrance rounded-2xl bg-white border-2 border-black p-7 shadow-sm hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-4xl md:text-5xl font-extrabold text-black">
                <Counter
                  end={24}
                  suffix="/7"
                  duration={2000}
                />
              </h3>

              <p className="mt-2 text-black font-bold">
                Support
              </p>

            </div>

            <div className="stat-entrance rounded-2xl bg-white border-2 border-black p-7 shadow-sm hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-4xl md:text-5xl font-extrabold text-black">
                <Counter
                  end={100}
                  suffix="+"
                  duration={2000}
                />
              </h3>

              <p className="mt-2 text-black font-bold">
                Ideas Delivered
              </p>

            </div>

            <div className="stat-entrance rounded-2xl bg-white border-2 border-black p-7 shadow-sm hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-4xl md:text-5xl font-extrabold text-black">
                <Counter
                  end={1}
                  duration={1000}
                />
              </h3>

              <p className="mt-2 text-black font-bold">
                Goal — Your Growth
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* ================= CTA ================= */}
      <div
        ref={ctaRef}
        data-section="cta"
        className={`max-w-6xl mx-auto px-6 py-20 md:py-28 scroll-entrance ${
          visibleSections.cta ? "scroll-entrance-visible" : ""
        }`}
      >

        <div className="relative overflow-hidden rounded-3xl bg-black text-white px-7 py-14 md:px-16 md:py-20 text-center">

          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />

          <div className="relative">

            <p className="text-blue-400 font-bold uppercase tracking-wider text-sm">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
              Ready to Grow Your Business?
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-white text-lg leading-8">
              Tell us about your business and what you need. Let's find the
              right solution for you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-8 rounded-xl bg-white text-black px-8 py-4 font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 shadow-xl"
            >
              Get Started →
            </Link>

          </div>
        </div>

      </div>

      {/* ================= SCROLL ANIMATION CSS ================= */}
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

        .card-entrance {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.7s ease-out,
            transform 0.7s ease-out,
            border-color 0.3s,
            box-shadow 0.3s;
        }

        .scroll-entrance-visible .card-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        .reason-entrance {
          opacity: 0;
          transform: translateX(-35px);
          transition:
            opacity 0.7s ease-out,
            transform 0.7s ease-out,
            border-color 0.3s;
        }

        .scroll-entrance-visible .reason-entrance {
          opacity: 1;
          transform: translateX(0);
        }

        .stat-entrance {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.7s ease-out,
            transform 0.7s ease-out,
            border-color 0.3s,
            box-shadow 0.3s;
        }

        .scroll-entrance-visible .stat-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        .card-entrance:nth-child(1),
        .stat-entrance:nth-child(1) {
          transition-delay: 0.1s;
        }

        .card-entrance:nth-child(2),
        .stat-entrance:nth-child(2) {
          transition-delay: 0.2s;
        }

        .card-entrance:nth-child(3),
        .stat-entrance:nth-child(3) {
          transition-delay: 0.3s;
        }

        .card-entrance:nth-child(4),
        .stat-entrance:nth-child(4) {
          transition-delay: 0.4s;
        }

        .card-entrance:nth-child(5) {
          transition-delay: 0.5s;
        }

        .card-entrance:nth-child(6) {
          transition-delay: 0.6s;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-entrance,
          .card-entrance,
          .reason-entrance,
          .stat-entrance {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

    </section>
  );
};

export default AboutUs;