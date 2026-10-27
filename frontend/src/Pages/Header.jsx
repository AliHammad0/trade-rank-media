import { useState } from "react";
import logo from "../assets/medialogo.jpeg";

const navLinks = [
  { name: "HOME", href: "/" },
  {
    name: "SERVICES",
    href: "/services",
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Guest Posting", href: "/services/guest-post" },
      { name: "Link Building", href: "/services/link-building" },
      { name: "Facebook Ads", href: "/services/facebook-ads" },
      { name: "Trading Backlinks", href: "/services/trading-backlinks" },
    ],
  },
  { name: "ABOUT", href: "/about" },
  { name: "HOW WE WORK", href: "/how-we-work" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACT", href: "/contact" },
];

function MenuIcon({ open }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6 18 18M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <style>{`
        .trm-header,
        .trm-header * {
          font-family: Arial, Helvetica, sans-serif !important;
        }

        .trm-nav-link {
          transition: color 200ms ease, background 200ms ease;
        }

        .trm-nav-link:hover,
        .trm-dropdown-item:hover {
          color: #111111;
          background: #f5f5f5;
        }

        .trm-cta {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .trm-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 9px 22px -10px rgba(0, 0, 0, .3);
        }

        .trm-dropdown-item {
          transition: background 180ms ease, color 180ms ease;
        }

        /* Logo Size Updated */
        .trm-logo {
          display: block;
          width: auto;
          height: 110px;
          max-width: 320px;
          object-fit: contain;
          object-position: left center;
        }

        @media (min-width: 640px) {
          .trm-logo {
            height: 130px;
            max-width: 380px;
          }
        }

        @media (min-width: 1024px) {
          .trm-logo {
            height: 150px;
            max-width: 440px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trm-nav-link,
          .trm-cta,
          .trm-dropdown-item {
            transition: none !important;
          }

          .trm-cta:hover {
            transform: none;
          }
        }
      `}</style>

      <header className="trm-header sticky top-0 z-50 w-full border-b border-gray-200 bg-white font-[Arial,Helvetica,sans-serif] text-black shadow-sm">
        <div className="h-[3px] w-full bg-black" />

        <div className="mx-auto flex min-h-[96px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:min-h-[110px] sm:px-6 lg:min-h-[130px] lg:gap-5 lg:px-10 xl:px-14">
          {/* Logo */}
          <a
            href="/"
            aria-label="Trade Rank Media home"
            onClick={closeMenu}
            className="flex shrink-0 items-center py-2"
          >
            <img
              src={logo}
              alt="Trade Rank Media"
              className="trm-logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex xl:gap-1"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((prev) => !prev)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setServicesOpen(false);
                      }
                    }}
                    className="trm-nav-link flex items-center gap-2 rounded-lg px-3 py-3 text-[11px] font-bold tracking-wide text-black xl:px-3.5 xl:text-xs"
                  >
                    {link.name}
                    <ChevronIcon open={servicesOpen} />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-50 w-64 pt-2">
                      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                        <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                          Our Services
                        </p>

                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="trm-dropdown-item block rounded-lg px-3 py-3 text-sm font-medium text-black"
                          >
                            {item.name}
                          </a>
                        ))}

                        <div className="mt-1 border-t border-gray-100 pt-2">
                          <a
                            href={link.href}
                            onClick={closeMenu}
                            className="block rounded-lg px-3 py-3 text-xs font-bold text-black hover:bg-neutral-50"
                          >
                            View All Services
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="trm-nav-link whitespace-nowrap rounded-lg px-3 py-3 text-[11px] font-bold tracking-wide text-black xl:px-3.5 xl:text-xs"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            onClick={closeMenu}
            className="trm-cta hidden shrink-0 items-center justify-center rounded-lg bg-black px-4 py-3.5 text-xs font-bold text-white lg:inline-flex xl:px-5"
          >
            LET'S TALK
          </a>

          {/* Mobile Controls */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="/contact"
              onClick={closeMenu}
              className="trm-cta inline-flex min-h-9 items-center justify-center rounded-lg bg-black px-3 text-[10px] font-bold text-white sm:min-h-10 sm:px-4 sm:text-xs"
            >
              LET'S TALK
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-black"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[850px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-2xl flex-col px-4 pb-5 pt-3 sm:px-6"
          >
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={link.name} className="border-b border-gray-100">
                  <div className="flex min-h-[49px] items-center">
                    <a
                      href={link.href}
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={closeMenu}
                      className="flex flex-1 items-center gap-3 px-2 py-3 text-[13px] font-semibold text-black sm:text-sm"
                    >
                      <span className="w-5 text-[10px] font-bold text-neutral-500">
                        0{index + 1}
                      </span>
                      {link.name}
                    </a>

                    <button
                      type="button"
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={() =>
                        setMobileServicesOpen((prev) => !prev)
                      }
                      aria-label="Toggle services submenu"
                      aria-expanded={mobileServicesOpen}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-black hover:bg-gray-50"
                    >
                      <ChevronIcon open={mobileServicesOpen} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="mb-3 ml-7 border-l-2 border-neutral-200 pl-3">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          tabIndex={menuOpen ? 0 : -1}
                          onClick={closeMenu}
                          className="block rounded-md px-3 py-3 text-sm font-medium text-black hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex min-h-[49px] items-center gap-3 border-b border-gray-100 px-2 text-[13px] font-semibold text-black last:border-b-0 sm:text-sm"
                >
                  <span className="w-5 text-[10px] font-bold text-neutral-500">
                    0{index + 1}
                  </span>
                  {link.name}
                </a>
              )
            )}

            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm font-bold text-black">
                Ready to grow your business?
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-600">
                Let's improve your online visibility and build your next
                opportunity.
              </p>

              <a
                href="/contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="mt-3 inline-flex items-center rounded-md bg-black px-4 py-3 text-xs font-bold text-white"
              >
                Discuss Your Project
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}