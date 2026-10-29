
import { useEffect, useRef, useState } from "react";
import logo from "../assets/farazchange.jpeg";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "HOW WE WORK", href: "/how-we-work" },
  // { name: "TEAM", href: "/team" },
  { name: "CONTACT", href: "/contact" },
];

function MenuIcon({ open }) {
  return (
    <svg
      width="22"
      height="22"
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHeaderVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .trm-header,
        .trm-header * {
          font-family: Arial, Helvetica, sans-serif !important;
          box-sizing: border-box;
        }

        .trm-header {
          transform: translateY(-14px);
          opacity: 0;
          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .trm-header.trm-header-visible {
          transform: translateY(0);
          opacity: 1;
        }

        .trm-nav-link {
          transition:
            color 200ms ease,
            background 200ms ease;
        }

        .trm-nav-link:hover {
          color: #111111;
          background: #f5f5f5;
        }

        .trm-cta {
          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease;
        }

        .trm-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 9px 22px -10px rgba(0, 0, 0, .3);
        }

        .trm-logo {
          display: block;
          width: auto;
          height: 45px;
          max-width: min(45vw, 170px);
          object-fit: contain;
          object-position: left center;
          transition: transform 300ms ease;
        }

        .trm-logo:hover {
          transform: scale(1.025);
        }

        .trm-mobile-menu-button {
          transition:
            background 200ms ease,
            border-color 200ms ease,
            transform 200ms ease;
        }

        .trm-mobile-menu-button:hover {
          background: #f5f5f5;
          border-color: #bdbdbd;
        }

        .trm-mobile-menu-button:active {
          transform: scale(.95);
        }

        .trm-mobile-link {
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity 250ms ease,
            transform 250ms ease,
            background 200ms ease;
        }

        .trm-mobile-link.trm-mobile-link-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .trm-mobile-link:hover {
          background: #f8f8f8;
        }

        .trm-mobile-panel {
          transition:
            max-height 350ms ease,
            opacity 250ms ease,
            visibility 350ms ease;
        }

        @media (min-width: 375px) {
          .trm-logo {
            height: 49px;
            max-width: 185px;
          }
        }

        @media (min-width: 480px) {
          .trm-logo {
            height: 55px;
            max-width: 210px;
          }
        }

        @media (min-width: 640px) {
          .trm-logo {
            height: 62px;
            max-width: 230px;
          }
        }

        @media (min-width: 768px) {
          .trm-logo {
            height: 68px;
            max-width: 250px;
          }
        }

        @media (min-width: 1280px) {
          .trm-logo {
            height: 76px;
            max-width: 280px;
          }
        }

        @media (max-width: 359px) {
          .trm-mobile-cta {
            padding-left: 9px !important;
            padding-right: 9px !important;
            font-size: 9px !important;
          }

          .trm-mobile-menu-button {
            width: 36px !important;
            height: 36px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trm-header,
          .trm-header *,
          .trm-mobile-panel {
            animation: none !important;
            transition: none !important;
          }

          .trm-header {
            transform: none;
            opacity: 1;
          }

          .trm-mobile-link {
            opacity: 1;
            transform: none;
          }

          .trm-cta:hover,
          .trm-logo:hover {
            transform: none;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`trm-header sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-black shadow-sm ${
          headerVisible ? "trm-header-visible" : ""
        }`}
      >
        <div className="h-[3px] w-full bg-black" />

        <div className="mx-auto flex min-h-[64px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 min-[375px]:px-4 sm:min-h-[76px] sm:px-6 lg:min-h-[84px] lg:px-8 xl:min-h-[92px] xl:gap-4 xl:px-10 2xl:px-14">
          {/* Logo */}
          <a
            href="/"
            aria-label="Trade Rank Media home"
            onClick={closeMenu}
            className="flex min-w-0 shrink items-center py-1"
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
            className="hidden min-w-0 items-center gap-0 xl:flex"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${index * 45}ms` }}
                className="trm-nav-link whitespace-nowrap rounded-lg px-2.5 py-3 text-[11px] font-bold tracking-wide text-black 2xl:px-3 2xl:text-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            onClick={closeMenu}
            className="trm-cta hidden shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-emerald-600 px-4 py-3 text-xs font-bold text-black xl:inline-flex 2xl:px-5"
          >
            Request Quote
          </a>

          {/* Mobile and Tablet Controls */}
          <div className="flex shrink-0 items-center gap-1.5 min-[375px]:gap-2 xl:hidden">
            <a
              href="/contact"
              onClick={closeMenu}
              className="trm-cta trm-mobile-cta inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-black px-3 text-[10px] font-bold text-white min-[375px]:px-3.5 sm:min-h-10 sm:px-4 sm:text-xs"
            >
              LET'S TALK
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="trm-mobile-menu-button flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-black sm:h-10 sm:w-10"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Navigation */}
        <div
          id="mobile-navigation"
          className={`trm-mobile-panel overflow-hidden border-t border-gray-100 bg-white xl:hidden ${
            menuOpen
              ? "max-h-[90vh] overflow-y-auto opacity-100"
              : "pointer-events-none invisible max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-2xl flex-col px-3 pb-5 pt-2 min-[375px]:px-4 sm:px-6"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                }}
                className={`trm-mobile-link flex min-h-[48px] items-center gap-3 border-b border-gray-100 px-2 text-[13px] font-semibold text-black sm:text-sm ${
                  menuOpen ? "trm-mobile-link-visible" : ""
                }`}
              >
                <span className="w-5 shrink-0 text-[10px] font-bold text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {link.name}
              </a>
            ))}

            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-3 min-[375px]:p-4">
              <p className="text-sm font-bold text-black sm:text-base">
                Ready to grow your business?
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-600 sm:text-sm">
                Let's improve your online visibility and build your next
                opportunity.
              </p>

              <a
                href="/contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="trm-cta mt-3 inline-flex min-h-10 items-center justify-center rounded-md bg-black px-4 py-3 text-xs font-bold text-white"
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
