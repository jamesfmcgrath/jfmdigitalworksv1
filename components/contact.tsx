'use client';

import { useState } from 'react';
import AccessibleButton from './ui/accessible-button';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);

    // Check for honeypot fields
    if (formData.get('botcheck')) {
      setSubmitMessage('Spam detected. Please try again.');
      setIsSubmitting(false);
      return;
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;

    // Basic validation
    if (!name || name.length < 2) {
      setSubmitMessage('Please enter a valid name.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Check if Web3Forms API key is configured
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      setSubmitMessage(
        'Contact form is not properly configured. Please try again later or email hello@jfmdigitalworks.com directly.'
      );
      setIsSubmitting(false);
      return;
    }

    const submissionData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name,
      email,
      subject: `New Contact Form Submission: ${projectType}`,
      message: `Project Type: ${projectType}\n\nSubmitted via contact form on jfmdigitalworks.com`,
      from_name: 'JFM Digital Works Contact Form',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage(
          "Thanks! I'll respond within 24 hours."
        );
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage(
          'Something went wrong. Please try again or email hello@jfmdigitalworks.com directly.'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage(
        'Network error. Please check your connection and try again, or email hello@jfmdigitalworks.com directly.'
      );
    }

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="bg-gray-100 py-12 md:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="contact-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Free 15-minute discovery call or email response within 24 hours.
          </p>
        </div>

        {/* Contact form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="botcheck">Bot Check (leave unchecked)</label>
                <input
                  type="checkbox"
                  id="botcheck"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-required="true"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              {/* Project Type dropdown */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Type <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-required="true"
                >
                  <option value="">Select a project type...</option>
                  <option value="Rapid Web Development">Rapid Web Development</option>
                  <option value="Security & Compliance Audit">Security & Compliance Audit</option>
                  <option value="Accessibility Remediation">Accessibility Remediation</option>
                  <option value="Platform Modernization">Platform Modernization</option>
                  <option value="Emergency Technical Rescue">Emergency Technical Rescue</option>
                  <option value="Ongoing Development Partner">Ongoing Development Partner</option>
                  <option value="Not Sure / Just Exploring">Not Sure / Just Exploring</option>
                </select>
              </div>

              {/* Success/Error message */}
              {submitMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`rounded-md p-4 ${
                    submitMessage.includes('Thanks') ?
                      'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {submitMessage.includes('Thanks') ?
                      <svg
                        className="mr-2 h-5 w-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    : <svg
                        className="mr-2 h-5 w-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    }
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <div>
                <AccessibleButton
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full min-h-[44px]"
                  ariaLabel={isSubmitting ? 'Sending message...' : 'Send message'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </AccessibleButton>
              </div>
            </form>

            {/* Direct email option */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Or email directly:{' '}
                <a
                  href="mailto:hello@jfmdigitalworks.com"
                  className="font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  hello@jfmdigitalworks.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
