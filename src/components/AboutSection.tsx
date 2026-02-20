import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, Building2 } from "lucide-react";
import logoOsica from "@/assets/logo-osica.png";
import logoOsimca from "@/assets/logo-osimca.png";

const units = [
{
  logo: logoOsica,
  name: "OSICA",
  fullName: "Oriental de Salud Integral, C.A.",
  region: "Anzoátegui",
  link: "https://www.instagram.com/osica.salud?igsh=MTZiM2dtbmNmdXQ3cw=="
},
{
  logo: logoOsimca,
  name: "OSIMCA",
  fullName: "Oriental de Salud Integral Monagas, C.A.",
  region: "Monagas",
  link: "https://www.instagram.com/osimcasalud?igsh=YXYxejVnMndwZHF0"
}];


const values = [
{ icon: Heart, title: "Compromiso", text: "Humanización del servicio, responsabilidad social y excelencia en la atención." },
{ icon: Shield, title: "Calidad", text: "Diagnóstico adecuado con un equipo multidisciplinario de alto nivel." },
{ icon: Users, title: "Cobertura", text: "Presencia en Anzoátegui y Monagas a través de nuestras unidades operativas." },
{ icon: Building2, title: "Experiencia", text: "Respuesta profesional y oportuna a las necesidades de empresas e instituciones." }];


const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="acerca" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16">

          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Quiénes Somos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Organización de Servicios Integrales de Salud
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos una organización dedicada a la atención integral en Medicina Preventiva, Salud Ocupacional e Higiene y Seguridad laboral, comprometida con el bienestar de la salud y ambientes laborales seguros.
          </p>
        </motion.div>

        {/* Operative Units */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16">

          <h3 className="font-display font-bold text-xl text-foreground text-center mb-10">
            Nuestras Unidades Operativas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {units.map((unit, i) =>
            <motion.a
              key={unit.name}
              href={unit.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-muted rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform block">

                <img
                src={unit.logo}
                alt={unit.fullName}
                className="h-20 w-auto mx-auto mb-5 object-contain" />

                <h4 className="font-display font-bold text-foreground mb-1">{unit.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{unit.fullName}</p>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wider">
                  Estado {unit.region}
                </p>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-16">

          <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
            El Grupo <strong className="text-foreground">OSISALUD</strong> incluye unidades operativas en Lechería, El Tigre, Puerto La Cruz, y Maturín, lo que nos permite ofrecer atención médica oportuna y especializada en distintas ciudades del país.
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Con visión estratégica y un enfoque integral, atendemos las necesidades de empresas, instituciones, y familias a través de un equipo multidisciplinario, con un diagnóstico preciso, excelencia operativa, responsabilidad social y la humanización del servicio.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10">

          <p className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Nuestros Valores
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            className="bg-muted rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform">

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-secondary mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;