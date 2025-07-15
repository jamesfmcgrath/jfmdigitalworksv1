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
              Recent projects showcasing our expertise in modern web development
              and digital solutions.
            </p>
          </div>

          {/* Case studies grid */}
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Case Study 1 */}
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
                  Drupal Accessibility Overhaul
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive accessibility audit and implementation for a
                  government website, ensuring WCAG 2.1 AA compliance and
                  improved user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Drupal
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Accessibility
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    WCAG 2.1
                  </span>
                </div>
              </div>

              {/* Case Study 2 */}
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Decoupled React App Prototype
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern React application with TypeScript, featuring headless
                  CMS integration and progressive web app capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    PWA
                  </span>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Secure, Compliant Website for EU-based Nonprofit
                </h3>
                <p className="text-gray-600 mb-4">
                  GDPR-compliant website with enhanced security features, modern
                  design, and multi-language support for European nonprofit
                  organization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    GDPR
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    Security
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    i18n
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
