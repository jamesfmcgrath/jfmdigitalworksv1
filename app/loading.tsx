export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-jfm-base">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jfm-tech-blue mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
