export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Discovery (Free 15-Min Call)',
      items: [
        'Understand your specific challenge',
        'Assess technical fit and requirements',
        'Outline potential approach',
        'Answer your questions',
      ],
      investment: 'Your investment: 15 minutes',
      nextStep: 'Next step: You decide if it makes sense to continue',
    },
    {
      number: '2',
      title: 'Proposal (Delivered in 24-48 Hours)',
      items: [
        'Clear project scope',
        'Fixed timeline with milestones',
        'Transparent pricing',
        'Terms and expectations',
      ],
      investment: 'Your investment: Time to review proposal',
      nextStep: 'Next step: Approve, request changes, or decline',
    },
    {
      number: '3',
      title: 'Delivery (Agile Collaboration)',
      items: [
        'Regular updates (you\'re never wondering what\'s happening)',
        'Collaborative tools (Slack, GitHub, your preferred platform)',
        'Milestone-based payments (pay as we progress)',
        'Direct communication (no account manager intermediary)',
      ],
      investment: 'Your investment: Depends on project scope',
      nextStep: 'Next step: Launch and celebrate',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How We Work Together
          </h2>
          <p className="text-lg text-gray-600">
            Transparent process. No surprises. Clear next steps at every stage.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}

              {/* Step content */}
              <div className="relative bg-gray-50 rounded-xl p-6 h-full">
                {/* Step number */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>

                {/* Step title */}
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* What happens/What you receive */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {step.number === '1' ? 'What happens:' : step.number === '2' ? 'What you receive:' : 'How we work:'}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment */}
                <div className="mb-4 rounded-lg bg-white p-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {step.investment}
                  </p>
                </div>

                {/* Next step */}
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">{step.nextStep}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
