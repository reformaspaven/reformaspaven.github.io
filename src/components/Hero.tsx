import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-renovation.jpg';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Reforma de cocina profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          {/* Logo in Hero */}
          <img 
            src={logo} 
            alt="PAVEN REFORMAS" 
            className="h-24 md:h-32 w-auto mb-8 brightness-0 invert opacity-90"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            {t.hero.title}
            <span className="block text-accent">{t.hero.subtitle}</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              variant="accent"
              size="lg"
              className="text-lg shadow-button"
              onClick={() => scrollToSection('contacto')}
            >
              {t.hero.cta}
            </Button>
            <Button
              variant="hero"
              size="lg"
              className="text-lg"
              onClick={() => scrollToSection('servicios')}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('servicios')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};
