/* Education — accurate resume data */
import ScrollReveal from "./ScrollReveal";
import { GraduationCap } from "lucide-react";

const edu = [
  { degree: "MCA", school: "Little Flower Institute, Pune University", year: "2024 – Present", note: "Currently pursuing" },
  { degree: "BCA", school: "S.N.D.T. Women's College, Mumbai (S.N.D.T. University)", year: "2020", note: "Completed" },
  { degree: "H.S.C.", school: "S.N.D.T. Junior Women's College, Mumbai (Maharashtra State Board)", year: "2017", note: "Passed" },
  { degree: "S.S.C.", school: "Sacred Heart High School, Mumbai (Maharashtra State Board)", year: "2015", note: "Passed" },
];

const Education = () => (
  <section id="education" aria-labelledby="edu-heading" className="py-20 px-4 bg-muted/40">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 id="edu-heading" className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-navy-light via-sky to-pink bg-clip-text text-transparent inline-block">
          Education
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6" role="list" aria-label="Education history">
        {edu.map((e, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <article role="listitem" className="p-6 rounded-xl bg-card border hover:shadow-[0_0_30px_hsl(330_80%_60%/0.15)] transition-shadow duration-300">
              <GraduationCap size={24} className="text-navy-light dark:text-sky mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-lg">{e.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-pink font-medium">{e.year}</span>
                <span className="text-xs text-muted-foreground">— {e.note}</span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
