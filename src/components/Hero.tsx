import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* AI-Generated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles size={18} className="text-accent" />
            <span className="text-sm font-medium">AI-Enhanced Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
              Sanu George
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
            Turning ideas into{' '}
            <span className="font-semibold text-accent">intelligent solutions</span>{' '}
            with AI & automation
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            AI Automation & Prompt Engineering specialist bridging technology and business needs 
            through smart, efficient workflows and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-gold group"
              size="lg"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline"
              variant="outline"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;