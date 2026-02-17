import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="PAVEN REFORMAS"
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a href="tel:+34633737769" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  🇪🇸 +34 633 737 769
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a href="tel:+46760336580" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  🇸🇪 +46 76 033 65 80
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-foreground/70" />
                <a href="mailto:info@reformaspaven.com" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  info@reformaspaven.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-primary-foreground/70 text-sm text-center">
            © {currentYear} REFORMAS PAVEN. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};
