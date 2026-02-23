import logo from "@/assets/logo-osisalud.png";
import { Instagram, Facebook, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="OSISALUD" className="h-11 w-auto mb-4 object-contain" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              Grupo <strong className="text-primary-foreground/80">OSISALUD</strong> — Organización de Servicios Integrales de Salud. Líderes en
              salud preventiva, ocupacional e higiene y seguridad laboral con presencia en Anzoátegui y Monagas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Acerca de", href: "#acerca" },
                { label: "Servicios", href: "#servicios" },
                { label: "Contáctanos", href: "#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Physical Addresses */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
              Sedes
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-primary-foreground/40 mb-1">Lechería — Anzoátegui</p>
                <a
                  href="https://maps.app.goo.gl/zuxsdYve2Qvb4epJ7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <MapPin className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-primary-foreground/50 group-hover:text-primary-foreground leading-relaxed transition-colors">
                    Avenida Principal de Lechería, C.C. Aventura Plaza, Nivel Calle.
                  </address>
                </a>
              </li>
              <li>
                <p className="text-xs text-primary-foreground/40 mb-1">Puerto La Cruz — Anzoátegui</p>
                <a
                  href="https://maps.app.goo.gl/wNAK8iaaQdUw1sG37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <MapPin className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-primary-foreground/50 group-hover:text-primary-foreground leading-relaxed transition-colors">
                    Av. Estadium, C.C. Novocentro II, Piso 2.
                  </address>
                </a>
              </li>
              <li>
                <p className="text-xs text-primary-foreground/40 mb-1">El Tigre — Anzoátegui</p>
                <a
                  href="https://maps.app.goo.gl/SwdqM75rRUYNnQa46?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <MapPin className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-primary-foreground/50 group-hover:text-primary-foreground leading-relaxed transition-colors">
                    Centro Comercial Doral Center.
                  </address>
                </a>
              </li>
              <li>
                <p className="text-xs text-primary-foreground/40 mb-1">Maturín — Monagas</p>
                <a
                  href="https://maps.app.goo.gl/E6jwMVVGYcxg42QP7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <MapPin className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors flex-shrink-0 mt-0.5" />
                  <address className="not-italic text-sm text-primary-foreground/50 group-hover:text-primary-foreground leading-relaxed transition-colors">
                    Avenida Fuerzas Armadas, Casa 10, Sector Las Avenidas.
                  </address>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50 mb-6">
              <li>
                <a href="mailto:saludcorporativa@osisalud.com" className="hover:text-primary-foreground transition-colors">
                  saludcorporativa@osisalud.com
                </a>
              </li>
              <li>
                <a href="tel:+584148114028" className="hover:text-primary-foreground transition-colors">
                  +58 414 811.40.28
                </a>
              </li>
            </ul>

            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-3">
              Síguenos
            </h4>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-primary-foreground/40 mb-1">OSICA</p>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/osica.salud?igsh=MTZiM2dtbmNmdXQ3cw==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://www.facebook.com/osicanoticias" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://youtube.com/@osisalud?si=giMSDBzSg3sw_jdt" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs text-primary-foreground/40 mb-1">OSIMCA</p>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/osimcasalud?igsh=YXYxejVnMndwZHF0" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://www.facebook.com/OSIMCASALUD" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://youtube.com/@osisalud?si=giMSDBzSg3sw_jdt" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Grupo OSISALUD — Organización de Servicios Integrales de Salud.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
