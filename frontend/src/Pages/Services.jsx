import React from "react";
import { Link } from "react-router-dom";
import {
  FiUsers,
  FiLink,
  FiMonitor,
  FiEdit3,
  FiSearch,
  FiTrendingUp,
  FiShield,
  FiTarget,
  FiCheckCircle,
  FiLayers,
  FiBriefcase,
  FiFileText,
  FiGlobe,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Niche Edits & Link Insertion",
    description:
      "We coordinate contextual link placements within existing articles where the publisher permits them and the page fits your campaign.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFsDs3iIJPqoIoc6PUKAnvRL8pOQ1asaROCutDYHffw&s=10",
    icon: FiLink,
    tags: ["Contextual Links", "Page Relevance", "Placement Coordination"],
  },
  {
    number: "02",
    title: "Homepage & Banner Placements",
    description:
      "We check publisher availability for homepage links, banner placements, and other agreed positions based on campaign requirements.",
    image:
      "https://cdn.dribbble.com/userupload/25953681/file/original-49c0ee6a37ed6888bd862681d826e113.jpg",
    icon: FiMonitor,
    tags: ["Homepage Visibility", "Banner Placements", "Publisher Terms"],
  },
  {
    number: "03",
    title: "Digital PR & News Publications",
    description:
      "We help coordinate relevant editorial and press release opportunities through suitable news and media publishers, subject to their policies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWDtrA2mVvKl7Nc0WlqFFu14Vq8e8zv9VEKe9C7Ul-7tLHelQ-0InwqUh&s=10",
    icon: FiFileText,
    tags: ["Press Releases", "Editorial Coverage", "News Publications"],
  },
  {
    number: "04",
    title: "Custom Publisher Research",
    description:
      "We research available publishers according to your target niche, countries, traffic requirements, and other campaign criteria.",
    image:
      "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/15882/direct/1773417928724/cabinets%20and%20curiosities%20homepage.png",
    icon: FiSearch,
    tags: ["Niche Research", "Target GEO", "Publisher Shortlists"],
  },
  {
    number: "05",
    title: "Industry-Specific Link Building",
    description:
      "We explore placement opportunities across crypto, forex, trading, finance, technology, business, and other industries, subject to availability.",
    image:
      "https://www.ecommercebridge.com/wp-content/uploads/2024/11/link-building-4-1024x536.jpg",
    icon: FiTarget,
    tags: ["Crypto & Forex", "Finance & Trading", "Technology"],
  },
];

const vettingSteps = [
  {
    number: "01",
    title: "Organic Traffic Review",
    description:
      "Review available organic traffic data instead of relying on Domain Rating alone.",
    icon: FiTrendingUp,
  },
  {
    number: "02",
    title: "Link-Farm Risk Screening",
    description:
      "Look for signs of excessive unrelated commercial content and suspicious publishing patterns.",
    icon: FiShield,
  },
  {
    number: "03",
    title: "Traffic Trend Analysis",
    description:
      "Review historical traffic patterns where reliable data is available.",
    icon: FiSearch,
  },
  {
    number: "04",
    title: "Topical Relevance",
    description:
      "Prioritize websites whose subject matter aligns with the target industry and campaign.",
    icon: FiTarget,
  },
  {
    number: "05",
    title: "SEO Metric Assessment",
    description:
      "Consider available Domain Rating, keyword visibility, referring domains, and other relevant metrics together.",
    icon: FiLayers,
  },
  {
    number: "06",
    title: "Placement Terms Verification",
    description:
      "Confirm publisher requirements, link attributes, content rules, and placement duration before proceeding.",
    icon: FiCheckCircle,
  },
];

const audiences = [
  {
    title: "SEO Agencies",
    description:
      "Publisher options and link placement coordination for different client campaigns.",
    icon: FiBriefcase,
  },
  {
    title: "Freelance SEO Professionals",
    description:
      "Placement options tailored to your campaign's niche, target countries, and requirements.",
    icon: FiUsers,
  },
  {
    title: "Businesses & Marketing Teams",
    description:
      "Publishing opportunities selected around your brand's industry and campaign objectives.",
    icon: FiGlobe,
  },
];

const Services = () => {
  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <section className="border-b border-neutral-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#77716A]">
            Trade Rank Media / Our Services
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Services Built Around Your Goals
            </h1>

            <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              We provide niche edits, link insertion, homepage placements,
              digital PR, and custom publisher research to support your
              link-building campaigns and online visibility.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-teal-400 to-emerald-600 px-7 py-3.5 text-sm font-bold text-black transition-colors hover:opacity-90"
            >
              Request a Quote
            </Link>

            <a
              href="#core-services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-black px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-black hover:text-white bg-[#77716A]"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <section
        id="core-services"
        className="bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-b border-neutral-200 pb-6 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#77716A]">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Services
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              Flexible publisher placements and research tailored to your
              industry, target audience, and campaign requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex min-w-0 flex-col overflow-hidden border border-neutral-200 bg-white transition-colors duration-300 hover:border-[#b69a68]"
                >
                  <div className="relative h-52 overflow-hidden bg-neutral-100 sm:h-56">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white text-[#8c7650]">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-bold tracking-[0.15em] text-[#8c7650]">
                      SERVICE {service.number}
                    </p>

                    <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs leading-4 text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="mt-7 inline-flex w-fit border-b border-[#8c7650] pb-1 text-sm font-bold text-black transition-colors hover:text-[#8c7650]"
                    >
                      Discuss This Service
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c7650]">
              Our Review Process
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Our 6-Point Publisher Vetting Process
            </h2>

            <p className="mt-5 text-base leading-8 text-neutral-600">
              We assess available publisher data and publishing conditions
              before recommending opportunities. Checks depend on the data
              and information available for each website.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {vettingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="border border-neutral-200 p-6 transition-colors hover:border-[#b69a68] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#8c7650]">
                      {step.number}
                    </span>
                    <Icon size={23} className="text-neutral-500" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c7650]">
              Quality Over One Metric
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Why Domain Rating Isn't Everything
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">
            <p>
              A high Domain Rating does not automatically mean a website is
              relevant, receives genuine search traffic, or offers a suitable
              publishing opportunity.
            </p>

            <p>
              We look beyond headline metrics by considering topical
              relevance, organic traffic trends, keyword visibility, website
              content, and available publisher information.
            </p>

            <p className="font-bold text-black">
              Our goal is to help you evaluate the overall suitability of a
              placement, not just a number in a spreadsheet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="overflow-hidden bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85"
              alt="Editorial and digital publishing"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c7650]">
              Editorial & Digital PR
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Editorial Visibility for an Evolving Search Landscape
            </h2>

            <p className="mt-5 text-sm leading-8 text-neutral-600 sm:text-base">
              Relevant editorial coverage and credible brand mentions can
              support a brand's online visibility across different discovery
              channels.
            </p>

            <p className="mt-4 text-sm leading-8 text-neutral-600 sm:text-base">
              We help coordinate suitable publishing opportunities that may
              contribute to brand awareness and a stronger online presence.
            </p>

            <p className="mt-4 border-l-2 border-[#b69a68] pl-4 text-sm leading-7 text-neutral-500">
              Editorial placement does not guarantee citations or mentions in
              ChatGPT, Perplexity, Google AI Overviews, or any other AI search
              platform.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-[#8c7650] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#6f5c3d]"
            >
              Discuss Your Campaign
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8c7650]">
              Who We Work With
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Support for Different Campaign Needs
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              We work with professionals and businesses looking for relevant
              digital services and publishing opportunities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article
                  key={audience.title}
                  className="border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <Icon size={26} className="text-[#8c7650]" />

                  <h3 className="mt-5 text-xl font-bold">
                    {audience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {audience.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5ad83]">
              Let's Work Together
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let's Discuss Your Project
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
              Share your link-building campaign criteria, including your
              target niche, countries, and preferred placement types. We'll
              discuss the available options with you.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#8c7650] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#6f5c3d]"
            >
              Request a Quote
            </Link>

            {/* <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Contact Our Team
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;