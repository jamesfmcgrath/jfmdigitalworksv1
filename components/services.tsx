export default function Services() {
  return (
    <section id="services" className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We deliver modern, secure, and accessible web solutions tailored
              to your business needs.
            </p>
          </div>

          {/* Services grid */}
          <div className="mx-auto max-w-sm items-start gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:grid-cols-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Service 1 */}
              <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                  Web Application Development
                </h3>
                <p className="text-gray-600">
                  Modern web applications built with Drupal, React, and
                  TypeScript. From concept to deployment, we create scalable
                  solutions.
                </p>
              </div>

              {/* Service 2 */}
              <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                  Front-end Engineering & Accessibility
                </h3>
                <p className="text-gray-600">
                  Accessible, performant user interfaces that work for everyone.
                  WCAG compliance and modern best practices.
                </p>
              </div>

              {/* Service 3 */}
              <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Site Audits & Performance
                </h3>
                <p className="text-gray-600">
                  Comprehensive audits covering performance, security, and
                  accessibility. Get actionable insights to improve your site.
                </p>
              </div>

              {/* Service 4 */}
              <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
                  AI-Enhanced Workflows
                </h3>
                <p className="text-gray-600">
                  Streamline your team's productivity with AI-powered workflows
                  and automation for small teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
