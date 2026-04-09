/* Portfolio landing — optimized SEO + performance */
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Hobbies = lazy(() => import("@/components/Hobbies"));
const Contact = lazy(() => import("@/components/Contact"));

const currentYear = new Date().getFullYear();

const Index = () => (
  <>
    <Helmet>
      <title>
        Mayuri Thackrey — Software Implementation Engineer Portfolio
      </title>
      <meta
        name="description"
        content="Portfolio of Mayuri Thackrey, Software Implementation Engineer with 3+ years of experience in client onboarding, project coordination, and system configuration."
      />
      <link rel="canonical" href="https://mayuri-thackrey.vercel.app/" />

      <meta property="og:title" content="Mayuri Thackrey — Portfolio" />
      <meta
        property="og:description"
        content="Software Implementation Engineer — seamless implementations & client success."
      />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mayuri Thackrey",
          jobTitle: "Software Implementation Engineer",
          url: "https://mayuri-thackrey.vercel.app",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressCountry: "IN",
          },
        })}
      </script>
    </Helmet>

    <header>
      <Navbar />
    </header>

    <main className="min-h-screen">
      <Hero />

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <Experience />
      </Suspense>

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <Skills />
      </Suspense>

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <Education />
      </Suspense>

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <Hobbies />
      </Suspense>

      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            <LoadingSpinner />
          </div>
        }
      >
        <Contact />
      </Suspense>
    </main>

    <footer
      className="py-6 text-center text-sm text-muted-foreground border-t"
      role="contentinfo"
      aria-label="Footer"
    >
      © 2026{currentYear > 2026 && `–${currentYear}`} Mayuri Thackrey. All
      rights reserved.
    </footer>

    <BackToTop />
  </>
);

export default Index;
