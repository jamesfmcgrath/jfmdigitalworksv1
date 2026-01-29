export default function HowWeWork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              How We Work
            </h2>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                I leverage AI-assisted development tools (Claude, Cursor, local
                LLMs) to accelerate project delivery by 40% while maintaining
                enterprise-quality standards. This means faster turnaround,
                competitive rates, and more time focusing on what matters—solving
                your technical challenges and delivering accessible solutions that
                serve your community.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Experience &amp; Expertise
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>25 years of front-end engineering experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Specialist in LocalGov Drupal implementations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>WCAG 2.1 AA accessibility expertise</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Track Record &amp; Location
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Proven track record with Irish and UK councils
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Based in Ireland, serving EU clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Award-winning projects recognized by industry leaders
                      </span>
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
