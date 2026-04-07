/* Skills & certifications — accurate resume data */
import ScrollReveal from "./ScrollReveal";

const skills = ["Communication", "Teamwork", "Strong Coordination", "Time Management", "Project Management"];
const certs = ["SQL Management Studio", "Computer Software Networking", "MS-CIT Certification from MKCL", "Computer Basic, MS-Office & Internet"];

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink via-navy-light to-sky bg-clip-text text-transparent inline-block">
          Skills & Certifications
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-10">
        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-3" role="list" aria-label="Core skills">
            {skills.map((s) => (
              <span key={s} role="listitem" className="px-4 py-2 rounded-full bg-pink/10 text-pink dark:bg-pink/15 text-sm font-medium border border-pink/20">
                {s}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="space-y-3" role="list" aria-label="Certifications">
            {certs.map((c) => (
              <div key={c} role="listitem" className="flex items-center gap-3 p-3 rounded-lg bg-card border">
                <div className="w-2 h-2 rounded-full bg-sky shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{c}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Skills;
