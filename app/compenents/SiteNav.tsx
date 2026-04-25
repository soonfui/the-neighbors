"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const navItems = [
  { label: "Coffee" },
  { label: "Menu" },
  { label: "About Us" },
];

export function SiteNav() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // only open desktop nav when enough width
  const [desktopNav, setDesktopNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // space enough = full nav
      setDesktopNav(window.innerWidth >= 1180);
    };

    const handleScroll = () => setScrollY(window.scrollY);

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSize = desktopNav
    ? scrollY < 40
      ? "text-[58px]"
      : scrollY < 140
        ? "text-[38px]"
        : "text-[28px]"
    : "text-[34px]";

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div
          className={clsx(
            "transition-all duration-500",
            scrollY > 10
              ? "bg-[#f3ead7]/90 backdrop-blur-xl border-b border-[#1f3b2f]/10"
              : "bg-transparent"
          )}
        >
          {/* Apple spacing */}
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24">
            <div className="flex h-18 md:h-24 items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className={clsx(
                  "font-black tracking-[-0.06em] leading-none text-[#1f3b2f] whitespace-nowrap transition-all duration-500"
                )}
              >
                <span className={logoSize}>the neighbors</span>
              </Link>

              {/* Full nav only if enough space */}
              {desktopNav ? (
                <nav className="flex items-center gap-10 whitespace-nowrap">
                  {navItems.map((item) => (
                    <span
                      key={item.label}
                      className="text-[18px] font-bold text-[#1f3b2f]"
                    >
                      {item.label}
                    </span>
                  ))}

                  <a
                    href="https://wa.me/97433646262"
                    target="_blank"
                    className="rounded-full bg-[#1f3b2f] px-7 py-3 text-[16px] font-bold text-[#f3ead7]"
                  >
                    Contact
                  </a>
                </nav>
              ) : (
                /* Auto collapse menu */
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="flex flex-col gap-1.5"
                  aria-label="Open menu"
                >
                  <span className="block h-[2px] w-7 bg-[#1f3b2f]" />
                  <span className="block h-[2px] w-7 bg-[#1f3b2f]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-[#f3ead7] transition-all duration-500",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col px-6 pt-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl text-[#1f3b2f]"
            >
              ×
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-10 text-[#1f3b2f]">
            {navItems.map((item) => (
              <span
                key={item.label}
                className="text-4xl font-black whitespace-nowrap"
              >
                {item.label}
              </span>
            ))}

            <a
              href="https://wa.me/97433646262"
              target="_blank"
              className="rounded-full bg-[#1f3b2f] px-8 py-4 text-lg font-bold text-[#f3ead7]"
            >
              WhatsApp
            </a>

            <span className="text-sm opacity-60 font-medium">
              +974 3364 6262
            </span>
          </div>
        </div>
      </div>
    </>
  );
}