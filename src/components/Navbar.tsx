/* Sticky navbar with smooth scroll & theme toggle */
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["About", "Experience", "Skills", "Education", "Hobbies", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          className="text-xl font-bold bg-gradient-to-r from-pink to-sky bg-clip-text text-transparent"
          onClick={() => scroll("hero")}
          aria-label="Scroll to top"
        >
          MT
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6" role="menubar">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} role="menuitem" className="text-sm text-muted-foreground hover:text-sky transition-colors">
              {l}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="p-2 text-foreground">
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md" role="menu">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} role="menuitem" className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-pink hover:bg-pink/5 transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
