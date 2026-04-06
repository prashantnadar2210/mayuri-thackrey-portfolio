/* Hero section with avatar, tagline & CTA */
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import avatar from "@/assets/avatar.png";

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <img
          src={avatar}
          alt="Mayuri Thackrey"
          width={180}
          height={180}
          className="mx-auto rounded-full border-4 border-primary/30 glow-shadow"
        />
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
      >
        Hi, I'm <span className="gradient-text">Mayuri Thackrey</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
      >
        Software Implementation Engineer — turning complex systems into seamless client experiences.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="mailto:mayuthackrey@gmail.com?subject=Hey"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Mail size={18} /> Get in Touch
        </a>
        <a
          href="/Mayuri_Thackrey_Resume.docx"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-accent transition-colors"
        >
          <Download size={18} /> Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
