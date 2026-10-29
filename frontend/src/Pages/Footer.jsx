
import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaLinkedinIn as LinkedInIcon,
} from "react-icons/fa";

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
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const elements = footer.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--footer-delay", `${index * 120}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="trm-footer border-t border-white/20 bg-black text-white"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <style>{`
        .trm-footer .footer-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--footer-delay, 0ms);
        }

        .trm-footer .footer-reveal.footer-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .trm-footer .footer-link {
          display: inline-block;
          transition:
            color 250ms ease,
            transform 250ms ease;
        }

        .trm-footer .footer-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .trm-footer .footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition:
            color 250ms ease,
            transform 250ms ease;
        }

        .trm-footer .footer-social:hover {
          color: #5eead4;
          transform: translateY(-4px);
        }

        .trm-footer .trm-cta {
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .trm-footer .trm-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(45, 212, 191, 0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .trm-footer .footer-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .trm-footer .footer-link,
          .trm-footer .footer-social,
          .trm-footer .trm-cta {
            transition: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="footer-reveal">
            <a href="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                Trade Rank Media.
              </h2>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              We help businesses build a stronger online presence through
              professional web development and reliable digital solutions.
              We also provide link-building support for SEO campaigns.
            </p>

            <a
              href="/contact"
              className="trm-cta mt-5 hidden shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-emerald-600 px-4 py-3 text-xs font-bold text-black xl:inline-flex 2xl:px-5"
            >
              Let's Talk
            </a>
          </div>

          {/* Services */}
          <div className="footer-reveal">
            <h3 className="text-base font-bold">Our Services</h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="footer-link text-sm text-white/70"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-reveal">
            <h3 className="text-base font-bold">Company</h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link text-sm text-white/70"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-bold">Our Focus</h3>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Website design, development, responsive interfaces, and
              link-building solutions tailored to project requirements.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-reveal">
            <h3 className="text-base font-bold">Get In Touch</h3>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Have a website project or link-building campaign in mind?
              Contact us to discuss your requirements.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-block border-b border-white pb-1 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-70"
            >
              Discuss Your Project
            </a>

            {/* Email */}
            <a
              href="mailto:traderankmedia@gmail.com"
              className="mt-5 flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              <FaEnvelope size={15} />
              traderankmedia@gmail.com
            </a>

            {/* Official Social Media Icons */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=61594190817808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trade Rank Media on Facebook"
                className="footer-social text-white/70"
              >
                <FaFacebookF size={19} />
              </a>

              <a
                href="https://www.instagram.com/traderankmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trade Rank Media on Instagram"
                className="footer-social text-white/70"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href="https://www.linkedin.com/company/trade-rank-media/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trade Rank Media on LinkedIn"
                className="footer-social text-white/70"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="footer-reveal mt-12 border-t border-white/20 pt-7"
          style={{ "--footer-delay": "200ms" }}
        >
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Trade Rank Media. All rights reserved.
            </p>

            <p className="text-sm text-white/60">
              Web Development First. Digital Growth Always.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
