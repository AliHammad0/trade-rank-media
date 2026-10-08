import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Web Development",
    "Graphic Designe",
    "Trading Backlinks",
    "Guest Post",
    "Contant writting",
    "Facebook Ads",
  ];

  const company = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-5">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">Trade Rank</span>{" "}
              <span className="text-white">Media</span>
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-white">
              We drive traffic, leads, and sales for businesses ready
              to grow online.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">

              {/* Email */}
              <a
                href="mailto:info@traderankmedia.com"
                className="flex items-center gap-3 text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                  <MdEmail size={21} className="text-blue-600" />
                </span>

                <span className="text-white">
                  info@traderankmedia.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923266023011"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
                  <FaWhatsapp size={22} className="text-green-600" />
                </span>

                <span className="text-white">
                  +92 3266023011
                </span>
              </a>

            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Our Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Our Company
            </h3>

            <ul className="mt-6 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="flex items-center gap-3 text-white"
                  >
                    <span className="text-white">
                      →
                    </span>

                    <span className="text-white">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61594190817808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaFacebookF size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/traderankmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaInstagram size={21} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/trade-rank-media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn size={21} />
              </a>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 border-t border-gray-800 pt-5">

          <div className="flex flex-col items-center justify-center text-center">

            <p className="text-sm text-white">
              © 2026{" "}
              <span className="font-semibold text-white">
                Trade Rank Media
              </span>
              . All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;