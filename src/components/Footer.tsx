import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="PAVEN REFORMAS" 
              className="h-12 w-auto brightness-0 invert" 
            />
          </div>
          
          <p className="text-primary-foreground/70 text-sm text-center">
            © {currentYear} PAVEN REFORMAS. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};
