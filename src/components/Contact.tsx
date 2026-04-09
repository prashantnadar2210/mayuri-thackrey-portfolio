/* Contact CTA with availability badge */
import ScrollReveal from "./ScrollReveal";
import { Mail, Clock, Link } from "lucide-react";

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="py-20 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 border border-sky/20 text-sm text-sky mb-6" role="status">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          Ready for freelancing or full-time — just contact me!
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <Clock size={16} aria-hidden="true" />
          <span className="text-sm">Usually responds within 24 hours</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-4" role="group" aria-label="Contact options">
          <a
            href="mailto:mayuthackrey@gmail.com"
            aria-label="Send email to Mayuri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy text-white font-medium hover:bg-navy-dark transition-colors"
          >
            <Mail size={18} aria-hidden="true" /> Email Me
          </a>
          <a
            href="https://www.instagram.com/myu_thackrey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Mayuri on Instagram"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-tr from-[hsl(37,97%,60%)] via-[hsl(330,80%,55%)] to-[hsl(270,70%,55%)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            Follow Me
          </a>
          <a
            href="/Mayuri_Thackrey_Resume.docx"
            download
            aria-label="Download Mayuri's resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-navy-light text-navy-light dark:text-sky dark:border-sky font-medium hover:bg-navy/10 dark:hover:bg-sky/10 transition-colors"
          >
            <Download size={18} aria-hidden="true" /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/mayurithackrey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mayuri's LinkedIn profile"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-sky text-sky font-medium hover:bg-sky/10 transition-colors"
          >
            <Link size={18} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Contact;
