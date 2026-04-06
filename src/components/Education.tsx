/* Education timeline */
import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const edu = [
  { degree: "MCA", school: "Little Flower Institute, Pune University", year: "2024 – Present" },
  { degree: "BCA", school: "S.N.D.T. Women's College, Mumbai", year: "2020" },
  { degree: "H.S.C.", school: "S.N.D.T. Junior Women's College, Mumbai", year: "2017" },
  { degree: "S.S.C.", school: "Sacred Heart High School, Mumbai", year: "2015" },
];

const Education = () => (
  <section id="education" className="py-20 px-4 bg-muted/40">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text inline-block">Education</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {edu.map((e, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-6 rounded-xl bg-card border hover:glow-shadow transition-shadow duration-300">
              <GraduationCap size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg">{e.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
              <p className="text-sm text-primary font-medium mt-2">{e.year}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
