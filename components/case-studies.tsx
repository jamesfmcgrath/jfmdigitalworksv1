export default function CaseStudies() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Award-winning LocalGov Drupal implementations for government
              agencies and local authorities.
            </p>
          </div>

          {/* Case studies grid */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Case Study 1: Lexington-Fayette Urban Council */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white flex-shrink-0">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2m0 0h4m6 0v-7a2 2 0 00-2-2h-2a2 2 0 00-2 2v7m8-12V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10V9z"
                      />
                    </svg>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                    🏆 Gold Winner - 2025 dotCOMM Awards
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Lexington-Fayette Urban Council Government
                </h3>
                <p className="text-gray-600 mb-4">
                  Full site redesign with adaptive design, multi-language
                  support, and WCAG compliance. Led front-end implementation,
                  accessibility testing, and design system integration. Improved
                  site search by 140%.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    LocalGov Drupal
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Accessibility
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Multi-language
                  </span>
                </div>
                <a
                  href="https://www.lexingtonky.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View Live Site{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              {/* Case Study 2: Metropolitan Water Reclamation District */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white flex-shrink-0">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2m0 0h4m6 0v-7a2 2 0 00-2-2h-2a2 2 0 00-2 2v7m8-12V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10V9z"
                      />
                    </svg>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                    🏆 Pinnacle Award - NAGW
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Metropolitan Water Reclamation District of Greater Chicago
                </h3>
                <p className="text-gray-600 mb-4">
                  Redesign featuring accessibility enhancements, document
                  repositories, and storytelling features. Developed responsive
                  front-end templates with WCAG compliance.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Drupal
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Accessibility
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Government
                  </span>
                </div>
                <a
                  href="https://mwrd.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View Live Site{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              {/* Case Study 3: Johnson County, Kansas */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2m0 0h4m6 0v-7a2 2 0 00-2-2h-2a2 2 0 00-2 2v7m8-12V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10V9z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Johnson County, Kansas
                </h3>
                <p className="text-gray-600 mb-4">
                  Website redesign focused on usability and streamlined content.
                  Front-end development, performance optimizations, and
                  cross-browser QA.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Drupal
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Performance
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    UX
                  </span>
                </div>
                <a
                  href="https://jocogov.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View Live Site{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              {/* Case Study 4: D.C. Public Library */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  D.C. Public Library
                </h3>
                <p className="text-gray-600 mb-4">
                  New digital front door improving navigation and content
                  discovery. Collaborated on front-end component library and
                  accessibility audit.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Drupal
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Component Library
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Accessibility
                  </span>
                </div>
                <a
                  href="https://www.dclibrary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  View Live Site{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
