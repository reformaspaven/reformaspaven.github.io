import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import reformasImg from '@/assets/service-reformas.jpg';
import impermeabilizacionImg from '@/assets/service-impermeabilizacion.jpg';
import pinturaImg from '@/assets/service-pintura.jpg';

export const Services = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'reformas',
      image: reformasImg,
      title: t.services.reformas.title,
      description: t.services.reformas.description,
    },
    {
      id: 'impermeabilizacion',
      image: impermeabilizacionImg,
      title: t.services.impermeabilizacion.title,
      description: t.services.impermeabilizacion.description,
    },
    {
      id: 'pintura',
      image: pinturaImg,
      title: t.services.pintura.title,
      description: t.services.pintura.description,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-heading font-bold text-primary-foreground">
                  {service.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-accent hover:text-accent/80 font-semibold group/btn"
                  onClick={scrollToContact}
                >
                  {t.services.learnMore}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
