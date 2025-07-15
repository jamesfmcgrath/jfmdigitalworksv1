import Link from 'next/link';

export default function FooterLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="JFM Digital Works"
    >
      <div className="flex items-center space-x-2">
        {/* Code-style logo */}
        <div className="flex items-center font-mono text-lg font-bold text-white">
          <span className="text-blue-400">&lt;</span>
          <span className="text-white">JFM</span>
          <span className="text-blue-400">/&gt;</span>
        </div>
        {/* Company name */}
        <span className="text-lg font-semibold text-white">Digital Works</span>
      </div>
    </Link>
  );
}
