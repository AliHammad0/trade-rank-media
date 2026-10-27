
import React from "react";

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We understand your business, goals, target audience, and challenges to build a clear digital strategy tailored to your needs.",
    tags: ["Research", "Planning", "Strategy"],
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We create a structured plan and a user-focused design that reflects your brand identity and delivers a seamless experience.",
    tags: ["Wireframes", "UI/UX", "Brand Identity"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "We turn the approved design into a responsive, fast, and reliable website built around your business objectives.",
    tags: ["Development", "Performance", "Responsive"],
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We carefully test the website across devices, fix issues, and prepare everything for a smooth and confident launch.",
    tags: ["Quality Check", "Optimization", "Launch"],
  },
  {
    number: "05",
    title: "Growth & Support",
    description:
      "After launch, we help you improve your digital presence through ongoing support, SEO strategies, and performance improvements.",
    tags: ["Support", "SEO", "Growth"],
  },
];

const services = [
  "Web Development",
  "SEO & Guest Posting",
  "Link Building",
  "Digital Marketing",
];

const HowWeWork = () => {
  return (
    <main
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-black">
            Our Process
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Great results start with
            <span className="block">the right process.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            From the first conversation to the final launch, we follow a clear
            and collaborative process to help your business grow online.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center justify-center border border-black bg-black px-8 py-4 text-sm font-bold text-white"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-black">
                How We Work
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                A clear path from idea to impact.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-gray-700 md:justify-self-end">
              Every project is different, but our commitment stays the same:
              thoughtful planning, quality execution, and measurable progress.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {process.map((step) => (
              <article
                key={step.number}
                className="grid gap-6 border-b border-gray-200 py-9 sm:px-5 md:grid-cols-[90px_1fr_1fr] md:gap-10 md:py-12"
              >
                <div className="text-sm font-bold tracking-widest text-gray-500">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {step.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-gray-700 sm:text-base">
                    {step.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-300 px-3 py-2 text-xs font-medium text-black"
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
      <section className="border-y border-gray-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-black">
              What We Deliver
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-5xl">
              Everything your business needs to grow digitally.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="border border-gray-200 p-6"
              >
                <h3 className="text-base font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-black">
            Let's Work Together
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-700">
            Tell us what you want to achieve. We'll help you find the right
            approach to move your business forward.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center border border-black bg-black px-8 py-4 text-sm font-bold text-white"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
