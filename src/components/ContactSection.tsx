import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sedes = [
  { value: "anzoategui-lecheria", label: "Anzoátegui - Lechería", email: "osicarecepcionlecheria1@gmail.com" },
  { value: "anzoategui-eltigre", label: "Anzoátegui - El Tigre", email: "osicaeltigreocupacional@gmail.com" },
  { value: "anzoategui-puertolacruz", label: "Anzoátegui - Puerto La Cruz", email: "osicapuertolacruz@gmail.com" },
  { value: "monagas-maturin", label: "Monagas - Maturín", email: "ocupacionalosimca@gmail.com" },
];

const sedesWithLinks: { name: string; url: string }[] = [
  {
    name: "Lechería, Edo. Anzoátegui — Avenida Principal de Lechería, C.C. Aventura Plaza, Nivel Calle.",
    url: "https://maps.app.goo.gl/zuxsdYve2Qvb4epJ7?g_st=ac",
  },
  {
    name: "El Tigre, Edo. Anzoátegui — Centro Comercial Doral Center.",
    url: "https://maps.app.goo.gl/SwdqM75rRUYNnQa46?g_st=ac",
  },
  {
    name: "Puerto La Cruz, Edo. Anzoátegui — Av. Estadium, C.C. Novocentro II, Piso 2.",
    url: "https://maps.app.goo.gl/wNAK8iaaQdUw1sG37",
  },
  {
    name: "Maturín, Edo. Monagas — Avenida Fuerzas Armadas, Casa 10, Sector Las Avenidas.",
    url: "https://maps.app.goo.gl/E6jwMVVGYcxg42QP7?g_st=ac",
  },
];

const socialLinks = [
  {
    unit: "Anzoátegui",
    instagram: "https://www.instagram.com/osica.salud/",
    facebook: "https://www.facebook.com/osicanoticias",
  },
  {
    unit: "Monagas",
    instagram: "https://www.instagram.com/osimcasalud?igsh=MWN2ejJmbzFkdjk0OQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/OSIMCASALUD",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sede: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedSede = sedes.find((s) => s.value === formData.sede);
    if (!selectedSede) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/contacto.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          sede: selectedSede.label,
          sedeEmail: selectedSede.email,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Error en el servidor");

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      });
      setFormData({ name: "", company: "", email: "", phone: "", sede: "", message: "" });
    } catch {
      toast({
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Intente nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6" ref={ref}>
        {/* 1. Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Contáctanos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contáctenos y descubra cómo <strong className="text-foreground">OSISALUD</strong> puede llevar el bienestar de su empresa al siguiente nivel.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-12">
            <SidebarInfo isInView={isInView} />
            <FormBlock isInView={isInView} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>

          {/* Mobile layout */}
          <div className="flex flex-col gap-10 lg:hidden">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="font-display font-bold text-lg text-foreground mb-5">Información de Contacto</h3>
              <div className="space-y-4">
                <ContactLink href="mailto:saludcorporativa@osisalud.com" icon={<Mail className="h-5 w-5 text-primary" />} label="saludcorporativa@osisalud.com" />
                <ContactLink href="tel:+584148114028" icon={<Phone className="h-5 w-5 text-primary" />} label="+58 414 811.40.28" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Nuestras Sedes</h3>
              <SedesList />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
              <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }}>
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Síguenos</h3>
              <SocialBlock />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- Sub-components ---- */

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a href={href} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <span className="text-sm">{label}</span>
  </a>
);

const SedesList = () => (
  <div className="space-y-3">
    {sedesWithLinks.map((sede) => (
      <div key={sede.name} className="flex items-center gap-3 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
        {sede.url ? (
          <a href={sede.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            {sede.name}
          </a>
        ) : (
          sede.name
        )}
      </div>
    ))}
  </div>
);

const SocialBlock = () => (
  <div className="space-y-4">
    {socialLinks.map((unit) => (
      <div key={unit.unit}>
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">{unit.unit}</p>
        <div className="flex gap-3">
          <a href={unit.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={unit.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    ))}
  </div>
);

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting }: { formData: any; handleChange: any; handleSubmit: any; isSubmitting: boolean }) => (
  <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 space-y-5 shadow-lg border border-border">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Su nombre completo" className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Nombre de la empresa" className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all" />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Correo</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="correo@empresa.com" className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+58 XXX XXX XXXX" className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all" />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">Sede de Interés</label>
      <select name="sede" value={formData.sede} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all appearance-none cursor-pointer">
        <option value="" disabled>Seleccione una sede</option>
        {sedes.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">Mensaje (opcional)</label>
      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Cuéntenos sobre las necesidades de su empresa..." className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-secondary outline-none transition-all resize-none" />
    </div>
    <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed">
      {isSubmitting ? (
        <>
          Enviando...
          <Loader2 className="h-4 w-4 animate-spin" />
        </>
      ) : (
        <>
          Enviar Mensaje
          <Send className="h-4 w-4" />
        </>
      )}
    </button>
  </form>
);

/* Desktop sidebar */
const SidebarInfo = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="lg:col-span-2 space-y-8"
  >
    <div>
      <h3 className="font-display font-bold text-lg text-foreground mb-6">Información de Contacto</h3>
      <div className="space-y-5">
        <ContactLink href="mailto:saludcorporativa@osisalud.com" icon={<Mail className="h-5 w-5 text-primary" />} label="saludcorporativa@osisalud.com" />
        <ContactLink href="tel:+584148114028" icon={<Phone className="h-5 w-5 text-primary" />} label="+58 414 811.40.28" />
      </div>
    </div>
    <div>
      <h3 className="font-display font-bold text-lg text-foreground mb-4">Síguenos</h3>
      <SocialBlock />
    </div>
    <div>
      <h3 className="font-display font-bold text-lg text-foreground mb-4">Nuestras Sedes</h3>
      <SedesList />
    </div>
  </motion.div>
);

const FormBlock = ({ isInView, formData, handleChange, handleSubmit, isSubmitting }: { isInView: boolean; formData: any; handleChange: any; handleSubmit: any; isSubmitting: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="lg:col-span-3"
  >
    <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
  </motion.div>
);

export default ContactSection;
