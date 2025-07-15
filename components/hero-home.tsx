import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Modern, secure web solutions <br className="max-lg:hidden" />
              for a digital-first world
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                JFM Digital Works is a modern, security-first web consultancy
                focused on building accessible, performant, and cloud-native
                digital experiences. We specialize in creating high-quality web
                applications that prioritize user experience and security,
                serving clients in Ireland and across the EU.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full btn-jfm-primary shadow-sm sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get In Touch{' '}
                      <span className="ml-1 tracking-normal text-blue-200 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full btn-jfm-secondary shadow-sm sm:ml-4 sm:w-auto"
                    href="#services"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  jfmdigitalworks.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm run build
                </span>{' '}
                <span className="animate-[code-2_10s_infinite]">
                  --production
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  ✓ Compiled successfully
                </span>{' '}
                <span className="animate-[code-4_10s_infinite]">
                  Performance: 98/100
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  vercel deploy
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  ✓ Deployed to production
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
