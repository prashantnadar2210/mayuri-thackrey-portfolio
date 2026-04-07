/* Hobbies section — from resume */
import ScrollReveal from "./ScrollReveal";
import { Camera, MapPin, UtensilsCrossed, Music, PersonStanding } from "lucide-react";

const hobbies = [
  { name: "Running", icon: PersonStanding },
  { name: "Photography", icon: Camera },
  { name: "Traveling", icon: MapPin },
  { name: "Cooking", icon: UtensilsCrossed },
  { name: "Dancing", icon: Music },
];

const Hobbies = () => (
  <section id="hobbies" aria-labelledby="hobbies-heading" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 id="hobbies-heading" className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-pink via-navy-light to-sky bg-clip-text text-transparent inline-block">
          Hobbies
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-4 justify-center" role="list" aria-label="Hobbies">
          {hobbies.map((h) => (
            <div key={h.name} role="listitem" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border hover:shadow-[0_0_20px_hsl(330_80%_60%/0.12)] transition-shadow duration-300">
              <h.icon size={20} className="text-pink" aria-hidden="true" />
              <span className="text-sm font-medium">{h.name}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hobbies;
