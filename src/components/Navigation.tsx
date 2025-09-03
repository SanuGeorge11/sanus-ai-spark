import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <nav className="container-custom flex items-center justify-between py-4">
        {/* SG Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/9da8b5f8-0cff-4611-8a2a-71824747684b.png" 
            alt="SG Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="font-poppins font-semibold text-xl">Sanu George</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium hover:text-accent transition-smooth"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="font-medium hover:text-accent transition-smooth"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="font-medium hover:text-accent transition-smooth"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium hover:text-accent transition-smooth"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-gold"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-medium md:hidden">
            <div className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-6 py-3 text-left font-medium hover:bg-muted transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 text-left font-medium hover:bg-muted transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 text-left font-medium hover:bg-muted transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 text-left font-medium hover:bg-muted transition-smooth"
              >
                Contact
              </button>
              <div className="px-6 py-3">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-gold w-full"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;