import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

const branches = [
  {
    name: "Lechería",
    region: "Anzoátegui",
    phone: "584140864078",
  },
  {
    name: "Puerto La Cruz",
    region: "Anzoátegui",
    phone: "584140846083",
  },
  {
    name: "El Tigre",
    region: "Anzoátegui",
    phone: "584248464743",
  },
  {
    name: "Maturín",
    region: "Monagas",
    phone: "584148114043",
  },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.594c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.796-8.064-7.112-.23-.316-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.002.908.016.292.014.682-.11 1.068.814.39.938 1.332 3.27 1.45 3.508.118.236.196.512.04.828-.158.316-.236.512-.472.79-.236.276-.496.618-.71.828-.236.236-.482.492-.206.964.276.472 1.226 2.024 2.634 3.278 1.81 1.612 3.336 2.112 3.81 2.348.472.236.75.198 1.026-.118.276-.316 1.186-1.382 1.502-1.858.316-.478.632-.396 1.068-.236.434.158 2.766 1.304 3.238 1.54.472.236.79.354.908.55.118.198.118 1.14-.272 2.236Z" />
  </svg>
);

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (phone: string, branch: string) => {
    const message = encodeURIComponent(
      `Hola, me comunico desde el sitio web de OSISALUD. Me interesa obtener información sobre los servicios disponibles en la sede de ${branch}.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 bg-card rounded-2xl shadow-elevated overflow-hidden mb-2"
          >
            <div className="bg-[#25D366] p-4">
              <h3 className="text-white font-display font-bold text-sm">
                OSISALUD WhatsApp
              </h3>
              <p className="text-white/70 text-xs mt-1">
                Seleccione una sede para contactar
              </p>
            </div>
            <div className="p-3 space-y-1">
              {branches.map((branch) => (
                <button
                  key={branch.name}
                  onClick={() => openWhatsApp(branch.phone, branch.name)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{branch.name}</p>
                    <p className="text-xs text-muted-foreground">{branch.region}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated hover:scale-105 transition-transform"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <WhatsAppIcon />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
