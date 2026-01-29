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
              Specialized LocalGov Drupal expertise for Irish and UK councils
              and government agencies.
            </p>
          </div>

          {/* Services grid */}
          <div className="mx-auto max-w-sm items-start gap-6 sm:max-w-none sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1: LocalGov Drupal Implementation & Migration */}
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
                LocalGov Drupal Implementation &amp; Migration
              </h3>
              <p className="text-gray-600 flex-grow">
                Specialized expertise in LocalGov Drupal for Irish and UK
                councils. From initial architecture to full migration, delivering
                accessible, scalable solutions that serve communities effectively.
              </p>
            </div>

            {/* Service 2: Accessibility Audits & WCAG Compliance */}
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
                Accessibility Audits &amp; WCAG Compliance
              </h3>
              <p className="text-gray-600 flex-grow">
                Comprehensive accessibility audits and remediation for government
                websites. WCAG 2.1 AA compliance, automated testing pipelines,
                and ongoing accessibility support to meet legal requirements.
              </p>
            </div>

            {/* Service 3: Technical Consulting & Problem Solving */}
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
                Technical Consulting &amp; Problem Solving
              </h3>
              <p className="text-gray-600 flex-grow">
                Expert troubleshooting for complex Drupal challenges. Module
                conflicts, performance bottlenecks, deployment issues—get rapid
                resolution from someone who&apos;s solved these problems before.
              </p>
            </div>

            {/* Service 4: Ongoing Drupal Support & Retainers */}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Ongoing Drupal Support &amp; Retainers
              </h3>
              <p className="text-gray-600 flex-grow">
                Post-launch support and maintenance for councils and agencies.
                Security updates, feature enhancements, performance monitoring,
                and technical guidance when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
