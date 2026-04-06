/* Contact CTA with availability badge */
import ScrollReveal from "./ScrollReveal";
import { Mail, Download, Clock } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border text-sm text-accent-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Ready for freelancing or full-time — just contact me!
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <Clock size={16} />
          <span className="text-sm">Usually responds within 24 hours</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:mayuthackrey@gmail.com?subject=Hii"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href="/Mayuri_Thackrey_Resume.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-accent transition-colors"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Contact;
