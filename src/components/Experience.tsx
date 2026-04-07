/* Work experience timeline */
import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Software Implementation Engineer",
    company: "B'catalyst Pvt. Ltd.",
    period: "2025 – Present",
    points: [
      "Client training, walkthroughs & technical support",
      "BRD/SRS creation and meeting documentation",
      "Cross-team coordination for custom solutions",
    ],
  },
  {
    title: "Project Coordinator",
    company: "Spine Technologies Pvt. Ltd.",
    period: "2023 – 2024",
    points: [
      "Managed Payroll-HRMS & Asset Management implementations",
      "Oversaw projects for Holy Spirit Hospital, Vee Tee, Le Sutra",
      "Bridge between technical team and clients",
    ],
  },
  {
    title: "System Support & Implementation Engineer",
    company: "Spine Technologies Pvt. Ltd.",
    period: "2022 – 2023",
    points: [
      "Installed & configured Asset Management software",
      "Conducted client training and troubleshooting",
      "Maintained implementation documentation",
    ],
  },
];

const Experience = () => (
  <section id="experience" aria-labelledby="exp-heading" className="py-20 px-4 bg-muted/40">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 id="exp-heading" className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink via-navy-light to-sky bg-clip-text text-transparent inline-block">
          Experience
        </h2>
      </ScrollReveal>

      <div className="space-y-8" role="list" aria-label="Work experience">
        {jobs.map((job, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <article role="listitem" className="relative pl-8 border-l-2 border-pink/30">
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-pink flex items-center justify-center" aria-hidden="true">
                <Briefcase size={14} className="text-white" />
              </div>
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-sm text-pink font-medium">{job.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{job.company}</p>
                <ul className="space-y-1" aria-label={`Responsibilities at ${job.company}`}>
                  {job.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-sky mt-1" aria-hidden="true">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
