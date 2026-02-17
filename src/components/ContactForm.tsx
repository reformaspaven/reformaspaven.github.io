import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido').max(255),
  phone: z.string().min(9, 'El teléfono debe tener al menos 9 dígitos').max(20),
  service: z.string().min(1, 'Selecciona un servicio'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
});

export const ContactForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const serviceOptions = [
    { value: 'reformas', label: t.services.reformas.title },
    { value: 'impermeabilizacion', label: t.services.impermeabilizacion.title },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting - prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: t.contact.rateLimit,
      });
      return;
    }

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error.errors[0].message,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend)
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: '✓',
      description: t.contact.success,
    });

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setLastSubmitTime(now);
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Teléfono</h4>
                  <a href="tel:+34600000000" className="text-muted-foreground hover:text-accent transition-colors">
                    +34 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Email</h4>
                  <a href="mailto:info@reformaspaven.com" className="text-muted-foreground hover:text-accent transition-colors">
                    info@reformaspaven.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Ubicación</h4>
                  <p className="text-muted-foreground">{t.footer.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                  className="mt-1.5"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email">{t.contact.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.contact.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={20}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service">{t.contact.service}</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder={t.contact.selectService} />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  maxLength={1000}
                  className="mt-1.5 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full shadow-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.submit}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
