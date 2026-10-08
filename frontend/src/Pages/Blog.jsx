
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: "SEO",
      date: "Oct 03, 2026",
      title: "How SEO Can Help Your Business Grow Online",
      description:
        "Discover how a strong SEO strategy can improve your search rankings, increase organic traffic, and bring more potential customers to your website.",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    },
    {
      id: 2,
      category: "Web Development",
      date: "Sep 28, 2026",
      title: "Why Your Business Needs a Modern Website",
      description:
        "A professional and responsive website can improve your brand image, user experience, and help turn visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
    {
      id: 3,
      category: "Digital Marketing",
      date: "Sep 22, 2026",
      title: "Digital Marketing Strategies That Drive Results",
      description:
        "Learn how businesses can combine SEO, social media, content, and paid advertising to build a stronger online presence.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 4,
      category: "Google Ads",
      date: "Sep 15, 2026",
      title: "Google Ads: How Paid Advertising Works",
      description:
        "Understand the basics of Google Ads and how targeted campaigns can help businesses reach customers who are actively searching.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 5,
      category: "Social Media",
      date: "Sep 08, 2026",
      title: "How Social Media Can Build Your Brand",
      description:
        "Explore practical ways to use social media content and campaigns to increase engagement and build customer trust.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    },
    {
      id: 6,
      category: "E-Commerce",
      date: "Sep 01, 2026",
      title: "How to Improve Your E-Commerce Website",
      description:
        "From product pages to checkout, discover important improvements that can create a smoother shopping experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 py-24 sm:py-28">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block mb-5 px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-semibold">
            OUR BLOG
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Insights That Help Your
            <span className="text-blue-400"> Business Grow</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore digital marketing tips, SEO strategies, web development
            insights, and practical ideas to grow your business online.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
              Latest Articles
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Digital Marketing Insights
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-600">
              Stay updated with useful strategies, trends, and ideas that can
              help your business build a stronger digital presence.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white rounded-full text-xs font-bold">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-sm leading-7">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 mt-6 font-bold text-blue-600 hover:text-red-600 transition-colors duration-300"
                  >
                    Read More
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 px-6 sm:px-12 py-14 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-blue-100">
            Let's build a digital strategy that brings more traffic, leads,
            and growth to your business.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Get Started →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Blog;

