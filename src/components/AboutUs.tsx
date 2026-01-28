import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';
import logo from '@/assets/logo.png';

export const AboutUs = () => {
  const { t } = useLanguage();

  const experienceStat = {
    icon: Award,
    value: '15+',
    label: t.about.experience,
  };

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t.about.title}
            </h2>
            <p className="mt-2 text-lg text-accent font-semibold">
              {t.about.subtitle}
            </p>
            
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>{t.about.description}</p>
              <p>{t.about.commitment}</p>
              <p>{t.about.priority}</p>
            </div>

            {/* Experience Stat - Centered */}
            <div className="mt-10 flex justify-center">
              <div className="text-center p-6 rounded-lg bg-secondary">
                <experienceStat.icon className="h-10 w-10 mx-auto text-accent mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {experienceStat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {experienceStat.label}
                </div>
              </div>
            </div>
          </div>

          {/* Logo / Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
              <img
                src={logo}
                alt="PAVEN REFORMAS"
                className="relative w-64 md:w-80 lg:w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
