/* Hero — avatar, typing name & CTA */
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.png";

const fullName = "Mayuri Thackrey";

const Hero = () => {
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setName(fullName.slice(0, ++i));
      if (i >= fullName.length) { clearInterval(timer); setDone(true); }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" aria-label="Introduction" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-8">
          <img src={avatar} alt="Portrait of Mayuri Thackrey" width={180} height={180} loading="eager" className="mx-auto rounded-full border-4 border-sky/30 shadow-[0_0_40px_hsl(197_70%_55%/0.25)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          aria-label={`Hi, I'm ${fullName}`}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-navy-light via-sky to-pink bg-clip-text text-transparent">
            {name}
            {!done && <span className="inline-block w-0.5 h-8 md:h-12 bg-sky ml-0.5 animate-pulse align-middle" aria-hidden="true" />}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Software Implementation Engineer — ensuring seamless implementations & client success.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="mailto:mayuthackrey@gmail.com?subject=Hey"
            aria-label="Send email to Mayuri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink text-white font-medium hover:bg-pink-dark transition-colors"
          >
            <Mail size={18} aria-hidden="true" /> Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
