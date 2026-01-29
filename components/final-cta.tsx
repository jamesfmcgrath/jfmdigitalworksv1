export default function FinalCTA() {
  return (
    <section className="bg-blue-600 py-12 md:py-16" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 id="cta-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Ready to Start?
        </h2>
        <p className="mb-8 text-lg text-blue-100 md:text-xl">
          Book a free 15-minute discovery call. No obligation, no sales pressure. Just a conversation about your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 min-h-[44px] transition-colors"
            aria-label="Book Discovery Call"
          >
            Book Discovery Call
            <svg
              className="ml-2 h-5 w-5"
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
          <span className="text-blue-100">or</span>
          <a
            href="mailto:hello@jfmdigitalworks.com"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 min-h-[44px] transition-colors"
            aria-label="Send Email Instead"
          >
            Send Email Instead
          </a>
        </div>
      </div>
    </section>
  );
}
