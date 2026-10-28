
import React from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive, user-focused websites built around your business goals, brand identity, and technical requirements.",
    href: "/services/web-development",
    icon: "code",
  },
  {
    number: "02",
    title: "Guest Posting",
    description:
      "Publisher opportunities for relevant content campaigns, based on your target niche and campaign requirements.",
    href: "/services/guest-post",
    icon: "document",
  },
  {
    number: "03",
    title: "Link Building",
    description:
      "Requirement-based publisher research and link placement coordination for agencies, freelancers, and businesses.",
    href: "/services/link-building",
    icon: "link",
  },
  {
    number: "04",
    title: "Link Insertion",
    description:
      "Opportunities for relevant links within existing content, subject to publisher availability and guidelines.",
    href: "/services/link-building",
    icon: "search",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Industry-Specific Campaigns",
    description:
      "We work with specialized requirements across crypto, forex, trading, finance, technology, and other business niches.",
  },
  {
    number: "02",
    title: "Publisher Relationships",
    description:
      "We source and evaluate publisher opportunities according to niche relevance, target geography, available SEO metrics, and campaign requirements.",
  },
  {
    number: "03",
    title: "Agency-Friendly Collaboration",
    description:
      "We support SEO agencies and independent professionals with flexible placement coordination for individual and ongoing campaigns.",
  },
];

const audiences = [
  "SEO agencies managing multiple client campaigns",
  "Freelancers seeking publishing support",
  "Businesses looking for relevant placements",
  "Marketing teams with specific niche or country requirements",
];

const team = [
  {
    name: "Hammad Shah",
    role: "Developer",
    description:
      "Supports website development, responsive experiences, and technical implementation.",
    initials: "HS",
  },
  {
    name: "Faraz Ahmed",
    role: "Outreach & Link Building",
    description:
      "Supports publisher outreach, opportunity research, and link placement coordination.",
    initials: "FA",
  },
  {
    name: "Muhammad Huzaifa",
    role: "Founder & Link Builder",
    description:
      "Oversees client requirements, link-building activities, and campaign coordination.",
    initials: "MH",
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

  const icons = {
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
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
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{icons[name] || null}</svg>;
}

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-neutral-600 sm:text-xs">
      <span className="h-0.5 w-5 rounded-full bg-black" />
      {children}
    </span>
  );
}

export default function About() {
  return (
    <main
      className="overflow-hidden bg-white font-[Arial,sans-serif] text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <style>{`
        .about-hero {
          background:
            radial-gradient(ellipse at 85% 40%, rgba(0,0,0,.045), transparent 38%),
            linear-gradient(135deg, #ffffff 0%, #ffffff 62%, #fafafa 100%);
        }

        .about-grid {
          background-image: radial-gradient(rgba(0,0,0,.09) .8px, transparent .8px);
          background-size: 22px 22px;
          mask-image: linear-gradient(to right, transparent, black);
        }

        .about-card {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        @media (hover: hover) {
          .about-card:hover {
            transform: translateY(-4px);
            border-color: #a3a3a3;
            box-shadow: 0 18px 36px -24px rgba(0,0,0,.2);
          }
        }

        .about-cta {
          transition: background .2s ease, transform .2s ease;
        }

        .about-cta:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-card,
          .about-cta {
            transition: none !important;
          }

          .about-cta:hover {
            transform: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="about-hero relative isolate overflow-hidden border-b border-neutral-200">
        <div className="about-grid pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-neutral-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24 xl:px-16">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-black sm:text-xs">
              About Trade Rank Media
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight min-[375px]:text-5xl sm:text-6xl lg:text-[58px] xl:text-[66px]">
              Built Around
              <span className="mt-1 block text-neutral-500">
                Better Digital Growth.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Trade Rank Media helps businesses establish a stronger digital
              presence through web development, guest posting, niche edits,
              and publisher-based link placements tailored to campaign
              requirements.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              We work with SEO agencies, freelancers, and businesses that value
              relevant opportunities, transparent communication, and dependable
              coordination.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="/contact"
                className="about-cta inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-6 py-3 text-center text-sm font-bold text-white hover:bg-neutral-800"
              >
                Get in Touch
              </a>

              <a
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-center text-sm font-bold text-black hover:bg-neutral-50"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-neutral-600 sm:text-sm">
              {["Requirement-led", "Clear communication", "Flexible collaboration"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-black">
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* DIGITAL SERVICES PANEL */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.07)] sm:rounded-3xl sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-neutral-500">
                    Trade Rank Media
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                    Our Areas of Focus
                  </h2>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-black">
                  <Icon name="target" size={24} />
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    title: "Web Development",
                    text: "Business-focused digital experiences",
                    icon: "code",
                  },
                  {
                    title: "Guest Posting",
                    text: "Relevant publisher opportunities",
                    icon: "document",
                  },
                  {
                    title: "Link Building",
                    text: "Campaign-based placement coordination",
                    icon: "link",
                  },
                  {
                    title: "Niche Research",
                    text: "Opportunities based on your requirements",
                    icon: "search",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-black sm:h-11 sm:w-11">
                      <Icon name={item.icon} size={21} />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-bold sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                        {item.text}
                      </p>
                    </div>

                    <span className="ml-auto shrink-0 text-xs font-bold text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-neutral-50 p-4 sm:p-5">
                <p className="text-sm font-bold">A practical, clear approach</p>
                <p className="mt-1 text-xs leading-6 text-neutral-600 sm:text-sm">
                  Understand the campaign. Evaluate opportunities. Coordinate
                  the agreed work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A Focused Partner for Digital and Publishing Needs.
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Trade Rank Media is a link-building service provider focused on
              helping SEO agencies, freelancers, and businesses access relevant
              publishing opportunities across different industries.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Our work centers on guest posting, niche edits, and other
              publisher-based link placements. We understand that each
              campaign has different requirements, from industry relevance
              and target geography to traffic expectations and publisher
              guidelines.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              We also provide web development services, helping businesses
              establish and improve the websites that support their online
              presence.
            </p>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                title: "Relevant Opportunities",
                description:
                  "We consider your niche, campaign goals, and requirements before identifying suitable available options.",
              },
              {
                title: "Clear Communication",
                description:
                  "We explain available options and quoted prices so you can review and approve placements before proceeding.",
              },
              {
                title: "Flexible Collaboration",
                description:
                  "We can work with your own target-site list or help identify publishers that fit your campaign.",
              },
              {
                title: "Realistic Expectations",
                description:
                  "Our recommendations depend on actual publisher availability, requirements, and publishing guidelines.",
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
              opportunities, our services are shaped around your goals and
              requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                className="about-card flex min-h-[220px] flex-col rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-black">
                    <Icon name={service.icon} size={23} />
                  </span>

                  <span className="text-xs font-bold tracking-[2px] text-neutral-400">
                    {service.number}
                  </span>
                </div>

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

      {/* AREAS OF FOCUS */}
      <section className="bg-white px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <SectionLabel>Our Areas of Focus</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Built Around Your Campaign Requirements.
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              We take your campaign criteria into account when evaluating
              opportunities and coordinating placements.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-neutral-200 p-5 sm:p-7"
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
              Whether you manage client campaigns or work on your own
              website, we aim to understand your requirements and coordinate
              opportunities that suit your needs.
            </p>
          </div>

          <div className="space-y-3">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-black">
                  <Icon name="check" size={14} />
                </span>

                <p className="text-sm font-semibold leading-6 text-neutral-800 sm:text-base">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-white px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1000px] rounded-2xl border border-neutral-200 bg-white p-6 sm:p-9 lg:p-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-black">
            <Icon name="target" size={25} />
          </span>

          <SectionLabel>Our Commitment</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Clear Communication. Careful Evaluation. Professional Coordination.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            We aim to assess requirements carefully, communicate available
            options clearly, and coordinate work according to agreed
            expectations. Placement recommendations depend on publisher
            availability, campaign criteria, and individual publishing
            guidelines. Our goal is to build lasting professional
            relationships through consistent and transparent collaboration.
          </p>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-9 max-w-2xl sm:mb-12">
            <SectionLabel>Meet the Team</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The People Behind the Work.
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              A team combining web development, publisher outreach, and
              link-building coordination.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-lg font-extrabold text-black">
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
      <section className="bg-white px-4 py-16 text-center min-[375px]:px-5 sm:px-8 sm:py-20 lg:py-24">
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
              className="about-cta inline-flex min-h-12 items-center justify-center rounded-lg bg-black px-7 py-3 text-center text-sm font-bold text-white hover:bg-neutral-800"
            >
              Contact Our Team
            </a>

            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-7 py-3 text-center text-sm font-bold text-black hover:bg-neutral-50"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
