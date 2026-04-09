type Props = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  // Log error (can be replaced with Sentry, LogRocket, etc.)
  console.error("ErrorBoundary caught:", error);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="p-6 text-center flex flex-col items-center"
    >
      <h1 className="text-lg font-semibold">Something went wrong</h1>

      <p className="text-sm text-muted-foreground mt-2">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={resetErrorBoundary}
        className="mt-4 underline font-medium"
        aria-label="Retry loading the page"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
