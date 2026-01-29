export default function Services() {
  const services = [
    {
      icon: '🚀',
      name: 'Rapid Web Development',
      for: 'Startups and SMEs needing fast time-to-market without compromising quality',
      deliverables: [
        'Modern web applications (Drupal, React, WordPress)',
        '40% faster delivery via AI-assisted workflows',
        'Mobile-first responsive design',
        'Security best practices built-in',
        '30-day post-launch support',
      ],
      whyNow: 'Every week of delay is lost revenue and competitive advantage. Fast execution = faster validation.',
      timeline: 'Most projects delivered in 4-8 weeks',
    },
    {
      icon: '🔒',
      name: 'Security & Compliance Audits',
      for: 'Organizations facing regulatory requirements, recent security concerns, or preparing for audits',
      deliverables: [
        'Comprehensive security assessment',
        'Vulnerability identification and prioritization',
        'Detailed remediation recommendations',
        'Compliance documentation (GDPR, WCAG, etc.)',
        'Executive summary for stakeholders',
      ],
      whyNow: 'Fines for non-compliance can reach millions. Reputational damage from breaches is permanent.',
      timeline: 'Audits completed in 1-2 weeks, remediation timeline varies by scope',
    },
    {
      icon: '♿',
      name: 'Accessibility Remediation',
      for: 'Businesses, healthcare, education, and government organizations with WCAG requirements',
      deliverables: [
        'Full accessibility audit (automated + manual testing)',
        'Code fixes for WCAG 2.1 AA/AAA compliance',
        'Accessibility documentation',
        'Team training on accessibility best practices',
        'Ongoing compliance monitoring setup',
      ],
      whyNow: '70% of websites fail basic accessibility tests. Legal risk is real and growing.',
      timeline: 'Most sites remediated in 2-4 weeks',
    },
    {
      icon: '🔄',
      name: 'Platform Modernization',
      for: 'Companies stuck on legacy Drupal 7, outdated WordPress, or aging custom systems',
      deliverables: [
        'Migration to modern platform (Drupal 11, latest WordPress, or custom)',
        'Data migration with zero loss',
        'Design refresh (optional)',
        'Team training and documentation',
        '30-day post-migration support',
      ],
      whyNow: 'Security vulnerabilities multiply daily. Maintenance costs increase. Modern features blocked.',
      timeline: '6-12 weeks depending on complexity',
    },
    {
      icon: '🚨',
      name: 'Emergency Technical Rescue',
      for: 'Teams facing production issues, failed audits, critical bugs, or system failures',
      deliverables: [
        'Rapid diagnosis (usually within hours)',
        'Critical issue resolution',
        'Documentation of what went wrong',
        'Prevention recommendations',
        'Temporary or permanent fix options',
      ],
      whyNow: 'Every hour of downtime = lost revenue, reputation damage, and user frustration.',
      timeline: 'Initial response within 24 hours, resolution depends on issue complexity',
    },
    {
      icon: '🤝',
      name: 'Ongoing Development Partner',
      for: 'Organizations needing reliable technical capacity without full-time hire overhead',
      deliverables: [
        'Monthly retainer for predictable capacity',
        'Feature development, maintenance, monitoring',
        'Priority response time',
        'Regular check-ins and roadmap planning',
        'No long-term contract required',
      ],
      whyNow: 'Flexibility without recruiting costs. Continuity without employment overhead.',
      timeline: 'Month-to-month engagement, typically 20-40 hours/month',
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 py-12 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="services-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How I Can Help
          </h2>
          <p className="text-lg text-gray-600">
            Choose the service that matches your current challenge.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl" aria-hidden="true">
                {service.icon}
              </div>

              {/* Service name */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.name}
              </h3>

              {/* For */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">For:</p>
                <p className="text-gray-600">{service.for}</p>
              </div>

              {/* What you get */}
              <div className="mb-4 flex-grow">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  What you get:
                </p>
                <ul className="space-y-1 text-gray-600">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start">
                      <svg
                        className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why now */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Why now:
                </p>
                <p className="text-gray-600 italic">{service.whyNow}</p>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Timeline:
                </p>
                <p className="text-gray-600">{service.timeline}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] transition-colors"
              >
                Discuss This Project
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
