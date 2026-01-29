export default function HowWeWork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Experience That Delivers
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                With 25 years of front-end engineering experience, I&apos;ve built
                everything from enterprise applications to award-winning government
                websites. My work has won a Gold dotCOMM Award and the NAGW Pinnacle
                Award—recognition that comes from delivering accessible, secure,
                high-performance solutions that work.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I leverage AI-assisted development tools (Claude, Cursor, local LLMs)
                to accelerate delivery by 40% while maintaining enterprise-quality
                standards. This means faster turnaround and competitive rates without
                compromising on security, accessibility, or code quality.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Whether you need modern Drupal architecture, WCAG compliance, security
                hardening, or complex migrations, you&apos;re working with someone
                who&apos;s solved these challenges across multiple sectors and
                delivered results that win awards.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Expertise &amp; Technology
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>25 years of front-end engineering experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Modern Drupal expertise (Drupal 8-11, SDCs, decoupled
                        architectures)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Government-grade security and accessibility standards
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>WCAG 2.1 AA/AAA compliance across sectors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Awards &amp; Recognition
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Award-winning work (dotCOMM Gold, NAGW Pinnacle)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Proven track record across enterprise and government sectors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        AI-accelerated delivery for competitive advantage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Based in Ireland, serving EU and international clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
