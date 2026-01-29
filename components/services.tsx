export default function Services() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Modern Drupal solutions for enterprise and government organizations.
            </p>
          </div>

          {/* Services grid - 2x3 layout */}
          <div className="mx-auto max-w-sm items-start gap-6 sm:max-w-none sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1: Modern Drupal Development */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                Modern Drupal Development
              </h3>
              <p className="text-gray-600 flex-grow">
                Drupal 8-11 applications built with modern architectures. Single
                Directory Components, headless/decoupled systems, custom modules,
                and scalable solutions for enterprise and government organizations.
              </p>
            </div>

            {/* Service 2: Security Audits & Hardening */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                Security Audits &amp; Hardening
              </h3>
              <p className="text-gray-600 flex-grow">
                Comprehensive security assessments and implementation.
                Vulnerability scanning, secure configuration, penetration testing,
                and ongoing monitoring. Government-grade security standards for any
                organization.
              </p>
            </div>

            {/* Service 3: Accessibility & WCAG Compliance */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Accessibility &amp; WCAG Compliance
              </h3>
              <p className="text-gray-600 flex-grow">
                Full accessibility audits and remediation. WCAG 2.1 AA/AAA
                compliance for legal requirements across healthcare, education,
                finance, government, and enterprise sectors. Automated testing and
                ongoing support.
              </p>
            </div>

            {/* Service 4: AI-Optimized Development */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                AI-Optimized Development
              </h3>
              <p className="text-gray-600 flex-grow">
                Accelerated delivery using AI-assisted workflows (Claude, Cursor,
                local LLMs). 40% faster project turnaround while maintaining
                enterprise quality standards. Modern development practices for
                competitive advantage.
              </p>
            </div>

            {/* Service 5: Drupal Migrations & Upgrades */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Drupal Migrations &amp; Upgrades
              </h3>
              <p className="text-gray-600 flex-grow">
                Expert migrations from legacy systems to modern Drupal. Drupal 7
                to 11 upgrades, platform migrations, LocalGov Drupal
                implementations, and complex data migrations with minimal downtime.
              </p>
            </div>

            {/* Service 6: Technical Consulting & Support */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Technical Consulting &amp; Support
              </h3>
              <p className="text-gray-600 flex-grow">
                Expert troubleshooting and ongoing support. Module conflicts,
                performance optimization, architecture reviews, and retainer-based
                maintenance. 25 years of experience solving complex technical
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
