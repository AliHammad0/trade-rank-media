
import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "code",
    title: "Web Development",
    description: "Modern, fast and scalable web solutions for your business.",
    href: "/services",
  },
  {
    number: "02",
    icon: "link",
    title: "Link Building",
    description: "High-quality backlinks that build long-term authority.",
    href: "/services",
  },
  {
    number: "03",
    icon: "search",
    title: "SEO Optimization",
    description: "Better rankings, stronger visibility and organic traffic.",
    href: "/services",
  },
  {
    number: "04",
    icon: "ads",
    title: "Digital Advertising",
    description: "Targeted campaigns designed to reach the right audience.",
    href: "/services",
  },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    ads: (
      <>
        <path d="m3 11 18-5v12L3 13v-2Z" />
        <path d="m7 14 2 6h4l-2-5M21 10a2 2 0 0 1 0 4" />
      </>
    ),
    arrow: <circle cx="12" cy="12" r="2" />,
    external: <circle cx="12" cy="12" r="2" />,
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 .7-1 2-1 2h-6s0-1.3-1-2Z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 3 6-7" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || null}</svg>;
}

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-black sm:text-xs">
      <span className="h-0.5 w-5 rounded-full bg-black" />
      {children}
    </span>
  );
}

export default function About() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-white font-[Arial,sans-serif] text-black" style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{`
        .about-hero {
          background:
            radial-gradient(ellipse at 82% 45%, rgba(0,0,0,.04), transparent 35%),
            linear-gradient(135deg, #ffffff 0%, #ffffff 65%, #fafafa 100%);
        }

        .about-grid {
          background-image: radial-gradient(rgba(0,0,0,.08) .8px, transparent .8px);
          background-size: 22px 22px;
          mask-image: linear-gradient(to right, transparent, black);
        }

        .about-orb {
          animation: aboutFloat 6s ease-in-out infinite;
        }

        .about-orb-delayed {
          animation: aboutFloat 7s ease-in-out infinite;
          animation-delay: -2.5s;
        }

        .about-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        @media (hover: hover) {
          .about-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px -24px rgba(0,0,0,.10);
            border-color: #d4d4d4;
          }

          .about-card:hover .about-card-arrow {
            transform: translate(2px, -2px);
            background: #191919;
            color: white;
          }
        }

        .about-card-arrow {
          transition: transform .25s ease, background .25s ease, color .25s ease;
        }

        .about-cta {
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }

        .about-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -12px rgba(0,0,0,.15);
        }

        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-orb, .about-orb-delayed { animation: none; }
          .about-card, .about-card-arrow, .about-cta { transition: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="about-hero relative isolate overflow-hidden">
        <div className="about-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-neutral-100/60 blur-3xl" />

        <div className="relative mx-auto grid min-h-[480px] max-w-[1280px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[520px] lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:px-12 xl:px-16">
          <div className="relative z-10 max-w-[590px]">
            <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[2.5px] text-black sm:text-xs">
              About Trade Rank Media
            </span>

            <h1 className="mt-6 text-[39px] font-extrabold leading-[1.12] tracking-[-1.8px] text-black sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px]">
              Your Partner in
              <span className="mt-1 block bg-gradient-to-r from-neutral-800 to-neutral-500 bg-clip-text text-transparent">
                Digital Growth.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              We help businesses build a stronger online presence through web
              development, guest posting, link building, SEO, digital
              advertising, and niche backlink solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/services"
                className="about-cta inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 hover:bg-black sm:px-6 text-center"
              >
                GET IN TOUCH
                {/* */}
              </a>

             
            </div>
{/* 
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black" />
                Strategy-driven solutions
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neutral-500" />
                Built around your goals
              </span>
            </div> */}
          </div>

          {/* LIGHT DIGITAL GROWTH DASHBOARD */}
          <div className="relative mx-auto mt-2 w-full max-w-[530px] lg:mt-0">
            <div className="about-orb absolute left-[4%] top-[12%] h-24 w-24 rounded-full bg-neutral-200/60 blur-2xl sm:h-36 sm:w-36" />
            <div className="about-orb-delayed absolute bottom-[5%] right-[5%] h-28 w-28 rounded-full bg-neutral-200/70 blur-2xl sm:h-40 sm:w-40" />

            <div className="relative mx-auto w-full max-w-[470px] rounded-[28px] border border-neutral-200 bg-white/90 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-5">
              <div className="rounded-[20px] border border-slate-100 bg-white p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-black">
                      Digital Performance
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-black sm:text-xl">
                      Growth Dashboard
                    </p>
                  </div>

                  <span className="rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[10px] font-semibold text-black">
                    Digital Strategy
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                    <div className="flex items-center justify-between text-black">
                      <Icon name="search" size={19} />
                      <span className="text-[10px] font-semibold text-black">
                        SEO
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-bold text-black sm:text-base">
                      Search Visibility
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Build your presence
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4">
                    <div className="flex items-center justify-between text-black">
                      <Icon name="chart" size={19} />
                      <span className="text-[10px] font-semibold text-black">
                        Growth
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-bold text-black sm:text-base">
                      Organic Reach
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Long-term potential
                    </p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-black">
                        Your growth journey
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Strategy · Technology · Results
                      </p>
                    </div>
                    <div className="rounded-lg bg-neutral-100 p-2 text-black">
                      <Icon name="target" size={21} />
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 400 115"
                    className="mt-4 w-full"
                    fill="none"
                    role="img"
                    aria-label="Illustrative upward growth chart"
                  >
                    <defs>
                      <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#737373" stopOpacity=".35" />
                        <stop offset="100%" stopColor="#191919" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#191919" />
                        <stop offset="100%" stopColor="#a3a3a3" />
                      </linearGradient>
                    </defs>

                    {[20, 45, 70, 95].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="400"
                        y2={y}
                        stroke="#a3a3a3"
                        strokeOpacity=".25"
                        strokeDasharray="4 5"
                      />
                    ))}

                    <path
                      d="M0 98 L55 83 L105 87 L160 57 L210 65 L265 34 L320 42 L375 8 L400 10 L400 115 L0 115 Z"
                      fill="url(#growthFill)"
                    />
                    <path
                      d="M0 98 L55 83 L105 87 L160 57 L210 65 L265 34 L320 42 L375 8 L400 10"
                      stroke="url(#growthLine)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="375" cy="8" r="5" fill="#191919" />
                    <circle cx="375" cy="8" r="9" stroke="#737373" strokeOpacity=".5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="about-orb absolute -left-1 top-[18%] hidden items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-xs font-bold text-black shadow-lg sm:flex md:-left-5">
              <span className="rounded-lg bg-neutral-50 p-1.5 text-black">
                <Icon name="code" size={17} />
              </span>
              Web Development
            </div>

            <div className="about-orb-delayed absolute -right-1 top-[36%] hidden items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-xs font-bold text-black shadow-lg sm:flex md:-right-5">
              <span className="rounded-lg bg-neutral-50 p-1.5 text-black">
                <Icon name="link" size={17} />
              </span>
              Link Building
            </div>

            <div className="about-orb absolute bottom-[4%] left-[8%] hidden items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-xs font-bold text-black shadow-lg sm:flex">
              <span className="rounded-lg bg-neutral-50 p-1.5 text-black">
                <Icon name="search" size={17} />
              </span>
              SEO Strategy
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl">
              Building Brands for a{" "}
              <span className="text-black">Stronger Tomorrow.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              At Trade Rank Media, we believe every business has a story worth
              telling. Our mission is to help brands grow online by combining
              technology, strategy and creativity. We work as your digital
              growth partner, not just a service provider.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From building effective websites to improving search visibility,
              we focus on practical digital solutions tailored to your business
              goals.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5 border-t border-slate-100 pt-7 sm:grid-cols-4 sm:gap-3">
              {[
                { value: "Strategy", label: "Goal-focused planning" },
                { value: "Quality", label: "Careful execution" },
                { value: "Growth", label: "Long-term thinking" },
                { value: "Trust", label: "Clear communication" },
              ].map((item) => (
                <div key={item.value}>
                  <p className="text-lg font-extrabold text-black sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-2xl bg-neutral-100 sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-3 -right-3 h-28 w-28 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-300 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl sm:rounded-3xl sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-black">
                    Our Approach
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-black sm:text-xl">
                    Better strategy.
                    <br />
                    Bigger growth.
                  </p>
                </div>
                <div className="rounded-2xl bg-neutral-100 p-3 text-black sm:p-4">
                  <Icon name="target" size={28} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    title: "Understand",
                    text: "Learn about your business and audience.",
                    width: "w-[65%]",
                  },
                  {
                    title: "Build",
                    text: "Create a focused digital strategy.",
                    width: "w-[82%]",
                  },
                  {
                    title: "Improve",
                    text: "Refine the approach around your goals.",
                    width: "w-full",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-xs font-extrabold text-black">
                      0{index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-black">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.text}
                      </p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-neutral-800 to-neutral-500 ${item.width}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                <span className="rounded-lg bg-white p-2 text-black">
                  <Icon name="chart" size={21} />
                </span>
                <div>
                  <p className="text-sm font-bold text-black">
                    Built for your next step
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    Strategy, technology and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-28 top-0 h-72 w-72 rounded-full bg-neutral-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
            <div>
              <SectionLabel>What We Do</SectionLabel>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl">
                Digital Solutions
                <span className="mt-2 block text-black">
                  Strategy. Technology. Growth.
                </span>
              </h2>

              <div className="mt-5 h-1 w-12 rounded-full bg-black" />

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Bringing web development, search visibility and digital
                marketing together to support your business at every stage.
              </p>

              <a
                href="/services"
                className="about-cta mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 hover:bg-black"
              >
                Explore Our Services
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <a
                  key={service.number}
                  href={service.href}
                  className="about-card group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.035)] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 text-black">
                      <Icon name={service.icon} size={23} />
                    </span>

                    <span className="about-card-arrow flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500">
                    </span>
                  </div>

                  <p className="mt-5 text-[10px] font-bold tracking-[1.5px] text-black">
                    {service.number}
                  </p>

                  <h3 className="mt-1 text-base font-extrabold text-black sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-2xl bg-neutral-100 sm:-left-4 sm:-top-4 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-neutral-200" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-neutral-200" />

              <span className="relative inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-black">
                <Icon name="target" size={27} />
              </span>

              <p className="relative mt-6 text-[10px] font-bold uppercase tracking-[2.5px] text-black">
                Our Mission
              </p>

              <h3 className="relative mt-3 text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Helping Businesses Move Forward.
              </h3>

              <p className="relative mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                To empower businesses with practical digital solutions that
                strengthen their online presence, connect them with their
                audience and support sustainable growth.
              </p>

              <div className="relative mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-black">
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Clear strategy. Meaningful progress.
                </span>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Our Vision</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl">
              More Visibility.
              <span className="block text-black">
                More Opportunities.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our vision is to help businesses unlock their digital potential
              through thoughtful web experiences, stronger search visibility
              and marketing strategies built around real business needs.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: "bulb",
                  title: "Innovation",
                  text: "Thoughtful ideas and evolving solutions.",
                },
                {
                  icon: "users",
                  title: "Partnership",
                  text: "Working together toward shared goals.",
                },
                {
                  icon: "chart",
                  title: "Progress",
                  text: "Focused improvements and lasting value.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-black">
                    <Icon name={item.icon} size={22} />
                  </span>

                  <div>
                    <h3 className="text-sm font-extrabold text-black sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-black"
            >
              Let's discuss your goals
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden border-t border-slate-100 bg-white py-14 text-black sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-neutral-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[35%] h-64 w-96 rounded-full bg-neutral-50 blur-3xl" />

        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel>Let's Grow Together</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
              Ready to Take Your Online Presence to the{" "}
              <span className="text-black">Next Level?</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Tell us about your goals and let's build something meaningful
              together.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="about-cta inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 hover:bg-black"
            >
              Get Started
            </a>

            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


