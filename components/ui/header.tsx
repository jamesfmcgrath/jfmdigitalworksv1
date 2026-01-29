'use client';

import { useEffect, useState } from 'react';
import Logo from './logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header role="banner" className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors min-h-[44px] flex items-center"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors min-h-[44px] flex items-center"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="btn-sm bg-blue-500 text-white hover:bg-blue-600 transition-colors min-h-[44px] flex items-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          {mounted && (
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ?
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                : <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                }
              </svg>
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {mounted && mobileMenuOpen && (
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden mt-2 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs overflow-hidden bg-white/95"
          >
            <div className="px-4 py-3 space-y-3">
              <a
                href="#services"
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block text-center btn-sm bg-blue-500 text-white hover:bg-blue-600 transition-colors mt-3 min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
