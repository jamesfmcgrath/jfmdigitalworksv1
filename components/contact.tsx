'use client';

import { useState } from 'react';

// Email validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Spam detection functions
const isLikelySpam = (message: string): boolean => {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here',
    'free money', 'guaranteed', 'act now', 'limited time', 'no obligation',
    'risk free', 'credit card', 'loan', 'debt', 'weight loss', 'pharmacy',
    'prescription', 'supplements', 'bitcoin', 'cryptocurrency', 'investment',
    'trading', 'profit', 'earn money', 'work from home', 'mlm', 'pyramid'
  ];
  
  const lowerMessage = message.toLowerCase();
  return spamKeywords.some(keyword => lowerMessage.includes(keyword));
};

const hasExcessiveLinks = (message: string): boolean => {
  const linkRegex = /https?:\/\/[^\s]+/g;
  const links = message.match(linkRegex);
  return links ? links.length > 2 : false;
};

const hasSuspiciousPatterns = (message: string): boolean => {
  // Check for excessive repetition
  const words = message.toLowerCase().split(/\s+/);
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const hasExcessiveRepetition = Object.values(wordCount).some(count => count > 5);
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /(.)\1{4,}/g, // Repeated characters
    /[A-Z]{10,}/g, // Too many capitals
    /\d{10,}/g, // Too many numbers
  ];
  
  return hasExcessiveRepetition || suspiciousPatterns.some(pattern => pattern.test(message));
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [lastSubmission, setLastSubmission] = useState<number>(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const now = Date.now();
    
    // Rate limiting: prevent submissions within 30 seconds
    if (now - lastSubmission < 30000) {
      setSubmitMessage('Please wait before submitting another message.');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    
    // Check for honeypot fields
    if (formData.get('botcheck') || formData.get('website')) {
      setSubmitMessage('Spam detected. Please try again.');
      setIsSubmitting(false);
      return;
    }

    // Enhanced spam detection
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const name = formData.get('name') as string;

    // Validate email format
    if (!validateEmail(email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Check for spam patterns
    if (isLikelySpam(message) || hasExcessiveLinks(message) || hasSuspiciousPatterns(message)) {
      setSubmitMessage('Your message appears to be spam. Please try again with a different message.');
      setIsSubmitting(false);
      return;
    }

    // Check for suspicious name patterns
    if (name.length < 2 || name.length > 50 || /[0-9]/.test(name)) {
      setSubmitMessage('Please enter a valid name.');
      setIsSubmitting(false);
      return;
    }

    // Check if Web3Forms API key is configured
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      setSubmitMessage('Contact form is not properly configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    // Add additional metadata for spam protection
    const submissionData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      name,
      email,
      message,
      subject: 'New Contact Form Submission from JFM Digital Works',
      from_name: 'JFM Digital Works Contact Form',
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'direct',
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
        setSubmitMessage("Thank you for your message! We'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
        setLastSubmission(now);
      } else {
        setSubmitMessage('Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    }
    
    setIsSubmitting(false);
  }
  return (
    <section id="contact" className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Ready to start your next project? Let's discuss how we can help
              you create modern, secure web solutions.
            </p>
          </div>

          {/* Contact content */}
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Let's Work Together
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're always excited to work on new projects and help
                    businesses create better digital experiences. Whether you
                    need a complete web application, accessibility audit, or
                    ongoing consulting, we're here to help.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">Email</p>
                      <a
                        href="mailto:info@jfmdigitalworks.com"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        info@jfmdigitalworks.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        Location
                      </p>
                      <p className="text-gray-600">Ireland & EU</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                        <svg
                          className="h-5 w-5"
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
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-800">
                        Response Time
                      </p>
                      <p className="text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot fields for spam protection - must be hidden */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-md ${
                        submitMessage.includes('Thank you') ?
                          'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
