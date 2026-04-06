/* About section */
import ScrollReveal from "./ScrollReveal";

const About = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">About Me</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Detail-oriented professional with strong analytical and communication skills. 
          I specialize in ensuring seamless software implementation and smooth go-live processes 
          with end-to-end project coordination, system configuration, and successful client onboarding. 
          Currently pursuing my MCA from Little Flower Institute (Pune University).
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Experience", value: "3+ Years" },
            { label: "Projects", value: "10+" },
            { label: "Clients", value: "15+" },
            { label: "Location", value: "Mumbai" },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-card border text-center">
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
