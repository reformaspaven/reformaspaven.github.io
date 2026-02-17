import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="tel:+34633737769"
              className="flex flex-col items-center p-6 rounded-2xl bg-card shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <span className="text-2xl mb-1">🇪🇸</span>
              <span className="text-foreground font-semibold">+34 633 737 769</span>
            </a>

            <a
              href="tel:+46760336580"
              className="flex flex-col items-center p-6 rounded-2xl bg-card shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <span className="text-2xl mb-1">🇸🇪</span>
              <span className="text-foreground font-semibold">+46 76 033 65 80</span>
            </a>

            <a
              href="mailto:info@reformaspaven.com"
              className="flex flex-col items-center p-6 rounded-2xl bg-card shadow-card hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <span className="text-foreground font-semibold">info@reformaspaven.com</span>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{t.footer.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
