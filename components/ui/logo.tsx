import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="JFM Digital Works"
    >
      <div className="flex items-center space-x-2">
        {/* Code-style logo */}
        <div className="flex items-center font-mono text-lg font-bold text-gray-800">
          <span className="text-blue-500">&lt;</span>
          <span className="text-gray-800">JFM</span>
          <span className="text-blue-500">/&gt;</span>
        </div>
        {/* Company name */}
        <span className="text-lg font-semibold text-gray-800">
          Digital Works
        </span>
      </div>
    </Link>
  );
}
