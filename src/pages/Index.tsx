/* Portfolio landing page — assembles all sections */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Education />
    <Contact />
    <footer className="py-6 text-center text-sm text-muted-foreground border-t">
      © {new Date().getFullYear()} Mayuri Thackrey. All rights reserved.
    </footer>
  </div>
);

export default Index;
