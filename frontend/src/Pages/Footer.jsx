
import React from "react";

const services = [
  "Web Development",
  "Business Websites",
  "Landing Pages",
  "Frontend Development",
  "Website Redesign",
  "Guest Posting",
  "Link Building",
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer
      className="border-t border-gray-200 bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                Trade Rank Media.
              </h2>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              We help businesses build a stronger online presence through
              professional web development and reliable digital solutions.
              We also provide link-building support for SEO campaigns.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-sm font-bold text-white"
            >
              Let's Talk
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold">Our Services</h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-sm text-gray-600"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold">Company</h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-bold">Our Focus</h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Website design, development, responsive interfaces, and
              link-building solutions tailored to project requirements.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">Get In Touch</h3>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Have a website project or link-building campaign in mind?
              Contact us to discuss your requirements.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-block border-b border-black pb-1 text-sm font-bold text-black"
            >
              Discuss Your Project
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-7">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Trade Rank Media. All rights reserved.
            </p>

            <p className="text-sm text-gray-600">
              Web Development First. Digital Growth Always.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
