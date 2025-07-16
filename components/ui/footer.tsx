import FooterLogo from './footer-logo';

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? 'border-t border-gray-700' : ''}`}
        >
          {/* 1st block */}
          <div className="space-y-4 sm:col-span-12 lg:col-span-6">
            <div>
              <FooterLogo />
            </div>
            <div className="text-sm text-gray-400 max-w-md">
              Modern, security-first web consultancy focused on building
              accessible, performant, and cloud-native digital experiences for
              clients in Ireland and across the EU.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#services"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#services"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#services"
                >
                  Performance Audits
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#services"
                >
                  AI Workflows
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#work"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-white"
                  href="mailto:info@jfmdigitalworks.com"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-white">Connect</h3>
            <ul className="flex gap-2">
              <li>
                <a
                  className="flex items-center justify-center text-gray-400 transition hover:text-white"
                  href="https://www.linkedin.com/company/jfm-digital-works/"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-gray-400 transition hover:text-white"
                  href="https://bsky.app/profile/jfmdigitalworks.bsky.social"
                  aria-label="Bluesky"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 600 530"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.45-163.25-81.433C20.15 217.613 9.997 86.535 9.997 68.825c0-88.687 77.742-60.816 125.72-24.795z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 JFM Digital Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
