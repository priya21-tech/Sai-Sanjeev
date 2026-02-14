import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Services", "Why Choose Me", "Testimonials", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const targetId = id.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button 
          onClick={() => scrollTo("Home")} 
          className="flex items-center gap-2 font-display text-xl tracking-widest text-gold uppercase"
        >
          <img src="/logo.jpg" alt="Sree Sanjeev Logo" className="h-10 w-10 rounded-full object-cover" />
          Sree Sanjeev
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-body text-sm text-foreground/70 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {l}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - Simple without animation */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-gold-subtle">
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="font-body text-left text-foreground/70 hover:text-gold transition-colors py-3 block cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {l}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
