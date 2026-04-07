/* Hero — avatar, typing tagline & CTAs */
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png";

const fullText = "Software Implementation Engineer — turning complex systems into seamless client experiences.";

const Hero = () => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, ++i));
      if (i >= fullText.length) { clearInterval(timer); setDone(true); }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" aria-label="Introduction" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-8">
          <img
            src={avatar}
            alt="Portrait of Mayuri Thackrey"
            width={180}
            height={180}
            loading="eager"
            className="mx-auto rounded-full border-4 border-pink/30 shadow-[0_0_40px_hsl(330_80%_60%/0.2)]"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink via-navy-light to-sky bg-clip-text text-transparent">
            Mayuri Thackrey
          </span>
        </motion.h1>

        {/* Typing tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 min-h-[3.5rem]"
          aria-label={fullText}
        >
          {text}
          {!done && <span className="inline-block w-0.5 h-5 bg-pink ml-0.5 animate-pulse" aria-hidden="true" />}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          role="group"
          aria-label="Call to action"
        >
          <a
            href="mailto:mayuthackrey@gmail.com?subject=Hey"
            aria-label="Send email to Mayuri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink text-white font-medium hover:bg-pink-dark transition-colors"
          >
            <Mail size={18} aria-hidden="true" /> Get in Touch
          </a>
          <a
            href="/Mayuri_Thackrey_Resume.docx"
            download
            aria-label="Download Mayuri's resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-pink text-pink font-medium hover:bg-pink/10 transition-colors"
          >
            <Download size={18} aria-hidden="true" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
