export default function Services() {
  return (
    <section id="services" className="bg-jfm-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-jfm-heading md:text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We deliver modern, secure, and accessible web solutions tailored
              to your business needs.
            </p>
          </div>

          {/* Services grid */}
          <div className="mx-auto max-w-sm items-start gap-6 sm:max-w-none sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-jfm-tech-blue text-white">
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
              <h3 className="mb-2 text-lg font-semibold text-jfm-heading">
                Web Development
              </h3>
              <p className="text-gray-600 flex-grow">
                Custom web applications built with modern frameworks like React,
                Next.js, and TypeScript for performance and scalability.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-jfm-tech-blue text-white">
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
              <h3 className="mb-2 text-lg font-semibold text-jfm-heading">
                Front-end Engineering & Accessibility
              </h3>
              <p className="text-gray-600 flex-grow">
                Accessible, performant user interfaces that work for everyone.
                WCAG compliance and modern best practices.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-jfm-tech-blue text-white">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-jfm-heading">
                Site Audits & Performance
              </h3>
              <p className="text-gray-600 flex-grow">
                Comprehensive audits covering performance, security, and
                accessibility. Get actionable insights to improve your site.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow sm:mb-0 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-jfm-tech-blue text-white">
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
              <h3 className="mb-2 text-lg font-semibold text-jfm-heading">
                AI-Powered Workflows
              </h3>
              <p className="text-gray-600 flex-grow">
                Streamline your development process with AI-assisted code
                generation, testing, and deployment workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
