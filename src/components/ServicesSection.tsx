import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HeartPulse,
  HardHat,
  Stethoscope,
  Microscope,
  Check,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Higiene y Seguridad Laboral",
    details: [
      "Análisis y notificación de riesgos (ART/NR)",
      "Implementación del servicio de seguridad y salud en el trabajo mancomunado (SSST)",
      "Programa de seguridad y salud en el trabajo (PSST)",
      "Vigilancia epidemiológica trimestral",
      "Asesoría en delegados de prevención y comité de seguridad y salud laboral",
    ],
  },
  {
    icon: Stethoscope,
    title: "Salud Ocupacional",
    details: [
      "Evaluación médica: pre y post empleo, pre y post vacacional, tutorial, enfermedad y accidente laboral, convalidación de reposo y reintegro laboral",
      "Estudios especiales: examen visual, audiometría, espirometría",
    ],
  },
  {
    icon: Microscope,
    title: "Apoyo Diagnóstico",
    details: [
      "Laboratorio clínico.",
      "Radiodiagnóstico (rayos X, ecosonogramas).",
      "Estudios especiales: electrocardiograma, espirometría, densitometría, campo visual, citología.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medicina Preventiva",
    details: [
      "Medicina Familiar y Medicina General.",
      "Especialidades Médicas: Fisiatría, gastroenterología, ginecología, medicina interna, nefrología, pediatría, traumatología, urología, etc.",
      "Telemedicina.",
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 md:py-32 bg-royal">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/70 font-semibold tracking-widest uppercase text-sm mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Atención Médica Integral
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas en Medicina Preventiva, Salud Ocupacional e Higiene y Seguridad laboral para empresas de todos los tamaños.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:-translate-y-1 transition-all border border-white/10"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-base text-white/70">
                        <Check className="h-5 w-5 text-white/50 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
