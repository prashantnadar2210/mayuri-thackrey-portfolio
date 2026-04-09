import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";

// Lazy loaded pages (code splitting)
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// React Query client (optimized defaults)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache for 5 mins
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />

        <BrowserRouter>
          {/* Global SEO */}
          <Helmet>
            <title>Mayuri Thackrey — Software Implementation Engineer</title>
            <meta
              name="description"
              content="Portfolio of Mayuri Thackrey, Software Implementation Engineer with 3+ years of experience in client onboarding and project coordination."
            />

            {/* Optional but recommended */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Mayuri Thackrey Portfolio" />
            <meta
              property="og:description"
              content="Software Implementation Engineer portfolio showcasing projects and experience."
            />
          </Helmet>

          {/*  Error Boundary wraps Suspense + Routes */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense
              fallback={
                <div role="status" aria-live="polite">
                  <LoadingSpinner />
                </div>
              }
            >
              <main>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
