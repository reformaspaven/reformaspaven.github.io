import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLang = languages.find(l => l.code === language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="PAVEN REFORMAS" className="h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent/10' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button
              variant="accent"
              size="sm"
              className="hidden sm:flex"
              onClick={() => scrollToSection('contacto')}
            >
              {t.nav.quote}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="py-2 font-medium text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="py-2 font-medium text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="py-2 font-medium text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="py-2 font-medium text-foreground/80 hover:text-foreground transition-colors text-left"
            >
              {t.nav.contact}
            </button>
            <Button
              variant="accent"
              className="w-full mt-2"
              onClick={() => scrollToSection('contacto')}
            >
              {t.nav.quote}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
