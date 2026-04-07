/* Full-page loading spinner for Suspense fallback */
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background" role="status" aria-label="Loading page">
    <div className="w-10 h-10 border-4 border-pink/30 border-t-pink rounded-full animate-spin" />
    <span className="sr-only">Loading…</span>
  </div>
);

export default LoadingSpinner;
