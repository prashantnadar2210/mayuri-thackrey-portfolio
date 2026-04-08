/* About section — accurate resume data */
import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "Experience", value: "3+ Years" },
  { label: "Clients", value: "Multiple" },
  { label: "Education", value: "MCA (Pursuing)" },
  { label: "Location", value: "Mumbai" },
];

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-navy-light via-sky to-pink bg-clip-text text-transparent inline-block">
          About Me
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Detail-oriented professional with strong analytical and communication skills,
          ensuring seamless software implementation and smooth go-live processes with
          end-to-end project coordination, system configuration, and successful client onboarding.
          Currently pursuing MCA from Little Flower Institute, affiliated with Pune University.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Key statistics">
          {stats.map((s) => (
            <div key={s.label} role="listitem" className="p-4 rounded-xl bg-card border text-center">
              <p className="text-2xl font-bold text-pink">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
