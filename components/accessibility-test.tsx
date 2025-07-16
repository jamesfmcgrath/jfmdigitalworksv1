/**
 * Accessibility Testing Component
 * This component helps test and verify accessibility improvements
 */

'use client';

import { useEffect, useState } from 'react';

interface AccessibilityTestProps {
  onReport: (report: AccessibilityReport) => void;
}

interface AccessibilityReport {
  colorContrastIssues: string[];
  missingLabels: string[];
  focusIssues: string[];
  ariaIssues: string[];
  keyboardNavigation: string[];
}

export default function AccessibilityTest({
  onReport,
}: AccessibilityTestProps) {
  const [report, setReport] = useState<AccessibilityReport>({
    colorContrastIssues: [],
    missingLabels: [],
    focusIssues: [],
    ariaIssues: [],
    keyboardNavigation: [],
  });

  useEffect(() => {
    const runAccessibilityTests = () => {
      const issues: AccessibilityReport = {
        colorContrastIssues: [],
        missingLabels: [],
        focusIssues: [],
        ariaIssues: [],
        keyboardNavigation: [],
      };

      // Test for missing labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const id = input.getAttribute('id');
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledby = input.getAttribute('aria-labelledby');

        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          if (!label && !ariaLabel && !ariaLabelledby) {
            issues.missingLabels.push(
              `Input with id "${id}" has no associated label`
            );
          }
        } else if (!ariaLabel && !ariaLabelledby) {
          issues.missingLabels.push(
            'Input found without id, aria-label, or aria-labelledby'
          );
        }
      });

      // Test for missing alt text on images
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        const alt = img.getAttribute('alt');
        const role = img.getAttribute('role');

        if (alt === null && role !== 'presentation') {
          issues.ariaIssues.push(`Image ${index + 1} missing alt text`);
        }
      });

      // Test for proper button accessibility
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        const ariaLabel = button.getAttribute('aria-label');
        const textContent = button.textContent?.trim();

        if (!ariaLabel && !textContent) {
          issues.ariaIssues.push(`Button ${index + 1} has no accessible name`);
        }
      });

      // Test for proper focus management
      const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element, index) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex && parseInt(tabIndex) > 0) {
          issues.focusIssues.push(
            `Element ${index + 1} has positive tabindex (${tabIndex})`
          );
        }
      });

      // Test for proper ARIA attributes
      const elementsWithAriaDescribedby =
        document.querySelectorAll('[aria-describedby]');
      elementsWithAriaDescribedby.forEach((element) => {
        const describedby = element.getAttribute('aria-describedby');
        if (describedby) {
          const describedbyIds = describedby.split(' ');
          describedbyIds.forEach((id) => {
            const describingElement = document.getElementById(id);
            if (!describingElement) {
              issues.ariaIssues.push(
                `Element references non-existent id "${id}" in aria-describedby`
              );
            }
          });
        }
      });

      setReport(issues);
      onReport(issues);
    };

    // Run tests after a short delay to ensure DOM is ready
    const timer = setTimeout(runAccessibilityTests, 1000);

    return () => clearTimeout(timer);
  }, [onReport]);

  const totalIssues = Object.values(report).reduce(
    (sum, issues) => sum + issues.length,
    0
  );

  if (process.env.NODE_ENV !== 'development') {
    return null; // Only show in development
  }

  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
      <h3 className="text-lg font-semibold mb-2">
        Accessibility Report
        <span
          className={`ml-2 px-2 py-1 text-xs rounded ${
            totalIssues === 0 ?
              'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {totalIssues === 0 ? 'No issues' : `${totalIssues} issues`}
        </span>
      </h3>

      {totalIssues > 0 && (
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {report.missingLabels.length > 0 && (
            <div>
              <h4 className="font-medium text-red-600">Missing Labels:</h4>
              <ul className="text-sm text-red-600 list-disc list-inside">
                {report.missingLabels.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {report.colorContrastIssues.length > 0 && (
            <div>
              <h4 className="font-medium text-red-600">
                Color Contrast Issues:
              </h4>
              <ul className="text-sm text-red-600 list-disc list-inside">
                {report.colorContrastIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {report.ariaIssues.length > 0 && (
            <div>
              <h4 className="font-medium text-red-600">ARIA Issues:</h4>
              <ul className="text-sm text-red-600 list-disc list-inside">
                {report.ariaIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {report.focusIssues.length > 0 && (
            <div>
              <h4 className="font-medium text-red-600">Focus Issues:</h4>
              <ul className="text-sm text-red-600 list-disc list-inside">
                {report.focusIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {totalIssues === 0 && (
        <p className="text-sm text-green-600">
          ✅ All basic accessibility tests passed!
        </p>
      )}
    </div>
  );
}
