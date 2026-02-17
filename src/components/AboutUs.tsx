import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center">
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
      </div>
    </section>
  );
};
