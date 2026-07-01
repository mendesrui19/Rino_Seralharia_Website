import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import {
  locationPages,
  services,
  geoDistricts,
  geoCoverage,
  coverageCityList,
  business,
} from "../../lib/seo-data";

export function LocalSEO() {
  const cityPages = locationPages.filter((p) => !p.service);
  const servicePages = locationPages.filter((p) => p.service);

  return (
    <section
      id="zonas"
      className="section-light py-[100px] bg-bg-light border-y border-black/[0.04]"
      aria-labelledby="local-seo-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={business.name} />
      <meta itemProp="telephone" content={business.phone} />
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
        <meta itemProp="latitude" content={String(business.geo.latitude)} />
        <meta itemProp="longitude" content={String(business.geo.longitude)} />
      </div>

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[860px] mb-14"
        >
          <div className="section-tag">Georeferenciação · Minho até Porto</div>
          <h2 id="local-seo-heading" className="section-h2 text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] mb-6">
            Serralharia em <span className="text-accent">Guimarães</span>, Braga, Porto e Todo o Norte
          </h2>
          <p className="section-desc text-[clamp(0.95rem,2.5vw,1.05rem)] leading-[1.9]">
            Procura <strong>serralharia perto de si</strong> no Minho ou no Porto? A nossa oficina fica em{" "}
            <strong>Vila Nova de Sande, Guimarães</strong> (GPS 41.036861, -8.604583) e cobrimos um raio de{" "}
            <strong>{geoCoverage.radiusKm} km</strong> — desde <strong>Guimarães e Braga</strong> até{" "}
            <strong>Porto, Maia, Gondomar</strong> e <strong>Viana do Castelo</strong>. Fabricamos{" "}
            <strong>corrimãos inox</strong>, <strong>portões ferro</strong>, grades, escadarias e estruturas
            metálicas com deslocação e montagem em todos os concelhos abaixo.
          </p>
        </motion.div>

        {/* Raio de cobertura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-4 bg-white border border-black/[0.06] p-6 mb-14"
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Navigation className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-display text-lg text-text-dark tracking-wide">Área de Cobertura Geográfica</p>
            <p className="text-[0.85rem] text-text-dark-sec mt-1">
              {geoCoverage.description}. Orçamento e montagem em {coverageCityList.length}+ concelhos.
            </p>
          </div>
        </motion.div>

        {/* Distritos */}
        {geoDistricts.map((district, di) => (
          <motion.div
            key={district.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: di * 0.1 }}
            className="mb-12"
          >
            <h3 className="font-display text-2xl text-text-dark mb-2">{district.name}</h3>
            <p className="text-[0.85rem] text-text-dark-sec mb-5">{district.tagline}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityPages
                .filter(
                  (p) =>
                    !p.service &&
                    (district.cities as readonly string[]).includes(p.city),
                )
                .map((page) => (
                  <Link
                    key={page.slug}
                    to={page.path}
                    className="group flex items-start gap-3 bg-white border border-black/[0.05] p-5 hover:border-accent/40 hover:shadow-md transition-all"
                  >
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display text-lg text-text-dark group-hover:text-accent transition-colors block">
                        {page.h1}
                      </span>
                      <span className="text-[0.72rem] text-text-dark-sec uppercase tracking-wider">
                        Orçamento grátis · Montagem incluída
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        ))}

        {/* Páginas por serviço + cidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="font-display text-xl mb-6 text-text-dark">Serviços por localização</h3>
          <div className="flex flex-wrap gap-2">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                to={page.path}
                className="text-[0.72rem] uppercase tracking-wider text-text-dark-sec border border-black/[0.08] bg-white hover:bg-accent/10 hover:border-accent/30 hover:text-accent px-4 py-2.5 rounded-full transition-all"
              >
                {page.h1}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl mb-6 text-text-dark">O que fabricamos em toda a zona</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {services.map((svc) => (
              <div key={svc.slug} className="bg-white/80 border border-black/[0.04] p-5">
                <h4 className="font-display text-lg mb-2 text-text-dark">{svc.name}</h4>
                <p className="text-[0.82rem] text-text-dark-sec leading-[1.7]">{svc.description}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-lg mb-4 text-text-dark-sec">Todos os concelhos com deslocação</h3>
          <div className="flex flex-wrap gap-2">
            {coverageCityList.map((area) => (
              <span
                key={area}
                className="text-[0.68rem] uppercase tracking-wider text-text-dark-sec border border-black/[0.06] bg-white px-3 py-1.5 rounded-full"
              >
                Serralharia {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
