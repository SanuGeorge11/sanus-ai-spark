import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding border-t border-border/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/9da8b5f8-0cff-4611-8a2a-71824747684b.png" 
                  alt="SG Logo" 
                  className="h-8 w-8 object-contain brightness-0 invert"
                />
                <span className="font-poppins font-semibold text-xl">Sanu George</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                AI Automation & Prompt Engineering specialist creating intelligent 
                solutions that bridge technology and business innovation.
              </p>
              <div className="flex space-x-4">
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground p-2"
                >
                  <a href="mailto:sanuxxxx@gmail.com" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-accent hover:text-accent-foreground p-2"
                >
                  <a 
                    href="https://www.linkedin.com/in/sanu-george-a424291b7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>AI Automation</p>
                <p>Prompt Engineering</p>
                <p>Web Development</p>
                <p>Business Innovation</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sanu George. All rights reserved.
            </p>
            
            <Button 
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="hover:bg-accent hover:text-accent-foreground group"
            >
              Back to Top
              <ArrowUp size={16} className="ml-2 group-hover:-translate-y-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;