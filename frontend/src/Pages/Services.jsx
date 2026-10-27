
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive, and modern websites that turn visitors into customers and help your business grow online.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    tags: ["Business Websites", "React Development", "Landing Pages"],
  },
  {
    number: "02",
    title: "Guest Posting",
    description:
      "Expand your online reach with relevant guest posting opportunities that help improve brand visibility and strengthen your website's authority.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
    tags: ["Guest Articles", "Publisher Outreach", "Content Placement"],
  },
  {
    number: "03",
    title: "Link Building",
    description:
      "Strengthen your website's backlink profile with relevant, carefully planned link-building strategies focused on sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    tags: ["Niche Edits", "Backlink Strategy", "Authority Links"],
  },
  {
    number: "04",
    title: "SEO Optimization",
    description:
      "Improve your search visibility, attract relevant organic traffic, and establish a strong SEO foundation for your business.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    tags: ["Technical SEO", "On-Page SEO", "Keyword Research"],
  },
  {
    number: "05",
    title: "Frontend Development",
    description:
      "Create polished, responsive user interfaces with clean layouts, consistent styling, and an excellent experience across devices.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    tags: ["React", "Responsive Design", "UI Development"],
  },
  {
    number: "06",
    title: "Website Redesign",
    description:
      "Give your existing website a fresh, professional look with improved structure, modern design, and better usability.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85",
    tags: ["Modern Layout", "User Experience", "Mobile Friendly"],
  },
];

const Services = () => {
  return (
    <main
      className="min-h-screen overflow-hidden bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Page Heading */}
      <section className="border-b border-gray-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Trade Rank Media
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            We provide web development and digital growth services to help
            businesses build a stronger online presence and reach their goals.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-b border-gray-200 pb-5 sm:mb-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              What We Do
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Explore our services and find the right solution for your
              business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex flex-col border border-gray-200 bg-white"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-52 w-full object-cover sm:h-56"
                />

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold tracking-widest text-gray-500">
                    SERVICE {service.number}
                  </p>

                  <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-700">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 px-3 py-2 text-xs text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex w-fit items-center border-b border-black pb-1 text-sm font-bold text-black"
                  >
                    Discuss This Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Get In Touch
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let's Discuss Your Project
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-700">
              Tell us about your business, your requirements, and what you
              want to achieve. We will help you identify the right service
              for your project.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center border border-black bg-black px-8 py-4 text-sm font-bold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;