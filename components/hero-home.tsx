import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-8">
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Modernising your digital presence <br className="max-lg:hidden" />
              with clarity and care
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                JFM Digital Works helps councils, small businesses, and
                community groups create secure, accessible, and easy-to-manage
                websites. We connect your online world with the real one so your
                team can focus on the work that matters.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full btn-jfm-primary shadow-sm sm:mb-0 sm:w-auto min-h-[44px]"
                    href="#contact"
                    aria-label="Get In Touch"
                  >
                    <span className="relative inline-flex items-center">
                      Get In Touch{' '}
                      <span
                        className="ml-1 tracking-normal text-blue-200 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full btn-jfm-secondary shadow-sm sm:ml-4 sm:w-auto min-h-[44px]"
                    href="#services"
                    aria-label="Our Services"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
