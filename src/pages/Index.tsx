/* Portfolio landing — lazy-loaded sections with Helmet SEO */
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import BackToTop from "@/components/BackToTop";

const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => (
  <>
    <Helmet>
      <title>Mayuri Thackrey — Software Implementation Engineer Portfolio</title>
      <meta name="description" content="Portfolio of Mayuri Thackrey, Software Implementation Engineer with 3+ years of experience in client onboarding, project coordination, and system configuration." />
      <meta name="keywords" content="Mayuri Thackrey, Software Implementation Engineer, Portfolio, Project Coordinator, Mumbai" />
      <link rel="canonical" href="https://mayurithackrey.lovable.app/" />
      <meta property="og:title" content="Mayuri Thackrey — Portfolio" />
      <meta property="og:description" content="Software Implementation Engineer — seamless implementations & client success." />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mayuri Thackrey",
        jobTitle: "Software Implementation Engineer",
        url: "https://mayurithackrey.lovable.app",
        email: "mayuthackrey@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
      })}</script>
    </Helmet>

    <div className="min-h-screen">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </Suspense>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t" role="contentinfo">
        © {new Date().getFullYear()} Mayuri Thackrey. All rights reserved.
      </footer>
      <BackToTop />
    </div>
  </>
);

export default Index;
