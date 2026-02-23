import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Users, ArrowRight } from "lucide-react";

const corporatePlans = [
  {
    name: "Básico",
    price: "190",
    consultasWeek: "2",
    labProfiles: "2",
  },
  {
    name: "Avanzado",
    price: "350",
    consultasWeek: "4",
    labProfiles: "4",
  },
  {
    name: "Premium",
    price: "630",
    consultasWeek: "8",
    labProfiles: "8",
  },
];

const corporateFeatures = [
  "Consultas médicas semanales incluidas",
  "Perfiles de laboratorio incluidos",
  "Pago mensual fijo y predecible",
  "Servicios acumulables hasta por un año",
  "Precios preferenciales en exámenes especializados",
  "Planes personalizables según su empresa",
];

const familyPricing = [
  { people: "1 persona", perMember: "$16", total: "$16" },
  { people: "2 personas", perMember: "$15", total: "$30" },
  { people: "3 personas", perMember: "$14", total: "$42" },
  { people: "4 personas", perMember: "$13", total: "$52" },
  { people: "5+ personas", perMember: "$12", total: "—" },
];

const familyIncludes = [
  "4 consultas de atención primaria y/u ocupacional al año",
  "2 perfiles de laboratorio al año",
  "10% de descuento en todos nuestros otros servicios",
];

const MembershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="membresia" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Corporate Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            AlcanceSALUD
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Planes Empresariales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grupo OSISALUD ha diseñado planes de salud empresariales adaptados a las necesidades y tamaño de su compañía,
            con soluciones de cuidado médico de alta calidad, accesibles y flexibles.
          </p>
        </motion.div>

        {/* Plans Grid - Equal weight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {corporatePlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl p-8 bg-muted hover:-translate-y-1 transition-all"
            >
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground mb-1">Plan</p>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">{plan.name}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>

                <div className="space-y-3 text-left text-sm text-muted-foreground">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span>Consultas / semana</span>
                    <span className="font-semibold text-foreground">{plan.consultasWeek}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span>Perfiles de laboratorio</span>
                    <span className="font-semibold text-foreground">{plan.labProfiles}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Acumulable hasta 1 año</span>
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full mt-6 py-3 rounded-lg font-semibold text-sm transition-all bg-secondary text-secondary-foreground hover:opacity-90"
                >
                  Solicitar Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto mb-24"
        >
          <h3 className="font-display font-bold text-lg text-foreground text-center mb-6">
            Todos los planes incluyen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corporateFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Family Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Nuevo
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Plan Familiar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proteja a su familia con acceso a atención médica de calidad a precios accesibles.
            Mientras más miembros incluya, menor es el costo por persona.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {/* Family Pricing Table */}
          <div className="bg-muted rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-secondary text-secondary-foreground text-sm font-semibold">
              <div className="px-6 py-4">Personas</div>
              <div className="px-6 py-4 text-center">Por Miembro / mes</div>
              <div className="px-6 py-4 text-center">Total / mes</div>
            </div>
            {familyPricing.map((row, i) => (
              <div
                key={row.people}
                className={`grid grid-cols-3 text-sm ${
                  i < familyPricing.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="px-6 py-4 font-medium text-foreground">{row.people}</div>
                <div className="px-6 py-4 text-center text-muted-foreground">{row.perMember}</div>
                <div className="px-6 py-4 text-center font-semibold text-foreground">{row.total}</div>
              </div>
            ))}
          </div>

          {/* Family Includes */}
          <div className="bg-muted rounded-2xl p-8 mb-8">
            <h3 className="font-display font-bold text-foreground mb-4">¿Qué incluye?</h3>
            <ul className="space-y-3">
              {familyIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-secondary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-sm transition-all hover:opacity-90"
            >
              Consultar Plan Familiar
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
