/* Sticky navbar with smooth scroll links & theme toggle */
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["About", "Experience", "Skills", "Education", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scroll("hero")}>
          MT
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
