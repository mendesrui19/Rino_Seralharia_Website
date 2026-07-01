import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";
import { PageMeta } from "../seo/PageMeta";
import { business, locationPages, SITE_URL } from "../../lib/seo-data";

type LocationPageData = (typeof locationPages)[number];

interface LocationPageProps {
  page: LocationPageData;
}

export function LocationPage({ page }: LocationPageProps) {
  const canonical = `${SITE_URL}${page.path}`;
  const otherPages = locationPages
    .filter((p) => p.slug !== page.slug && (!p.service || p.city === page.city))
    .slice(0, 8);

  useEffect(() => {
    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "pt-PT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: {
        "@type": "Service",
        name: page.service ?? `Serralharia em ${page.city}`,
        areaServed: {
          "@type": "City",
          name: page.city,
          geo: {
            "@type": "GeoCoordinates",
            latitude: page.lat,
            longitude: page.lng,
          },
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `Distrito de ${page.district}`,
          },
        },
        provider: { "@id": `${SITE_URL}/#business` },
      },
    };

    const script = document.createElement("script");
    script.id = "jsonld-location-page";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(webPage);
    document.head.appendChild(script);
    return () => document.getElementById("jsonld-location-page")?.remove();
  }, [canonical, page]);

  return (
    <>
      <PageMeta title={page.title} description={page.metaDescription} canonical={canonical} />

      <div className="min-h-screen bg-bg-base text-white">
        <header className="border-b border-white/[0.06] bg-[#050505]">
          <div className="container max-w-[1000px] mx-auto px-5 md:px-8 py-5 flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3 text-dim hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">serralhariarinos.pt</span>
            </Link>
            <a href="tel:+351913255102" className="text-accent text-sm font-medium hover:underline">
              {business.phoneDisplay}
            </a>
          </div>
        </header>

        <main className="container max-w-[1000px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag mb-4">
              {page.service ? `${page.service} · ${page.city}` : `Serralharia · ${page.city}`}
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[0.02em] mb-4">
              {page.h1}
            </h1>
            <p className="text-accent text-[0.85rem] tracking-[0.15em] uppercase font-bold mb-8">
              {page.subtitle}
            </p>

            <p className="text-[#e8e6e1]/75 text-[1rem] leading-[1.9] max-w-[720px] mb-12">
              {page.intro}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <ShimmerButton
                href="/#contacto"
                background="#c8a96e"
                shimmerColor="#ffffff"
                className="text-bg-base font-bold tracking-[0.14em] uppercase text-xs px-8 py-4 shadow-[0_0_40px_rgba(200,169,110,0.4)]"
              >
                Pedir Orçamento Grátis
              </ShimmerButton>
              <a
                href={`tel:${business.phone}`}
                className="btn btn-ghost flex items-center gap-2 py-4"
              >
                <Phone className="w-4 h-4" />
                Ligar {business.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl mb-6 tracking-wide">
                Serviços em {page.city}
              </h2>
              <ul className="flex flex-col gap-3">
                {page.servicesHighlight.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.92rem] text-[#e8e6e1]/70">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-sec border border-white/[0.06] p-8 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h2 className="font-display text-xl">Zonas servidas</h2>
              </div>
              <p className="text-[0.88rem] text-dim mb-4 leading-relaxed">
                Deslocamo-nos a {page.city} e concelhos vizinhos para orçamento, medição e montagem.
              </p>
              <div className="flex flex-wrap gap-2">
                {page.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="text-[0.72rem] uppercase tracking-wider border border-white/10 px-3 py-1.5 rounded-full text-dim"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          <section className="border-t border-white/[0.06] pt-12 mb-12">
            <h2 className="font-display text-xl mb-6 text-dim">Porquê escolher a nossa serralharia</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "+1200", label: "Obras" },
                { val: "5.0★", label: "Google" },
                { val: "100%", label: "Por Medida" },
                { val: "24h", label: "Resposta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-accent">{stat.val}</div>
                  <div className="text-[0.65rem] uppercase tracking-widest text-dim mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {otherPages.length > 0 && (
            <section className="border-t border-white/[0.06] pt-12">
              <h2 className="font-display text-lg mb-4 text-dim">Outras áreas e serviços</h2>
              <div className="flex flex-wrap gap-3">
                {otherPages.map((p) => (
                  <Link
                    key={p.slug}
                    to={p.path}
                    className="text-sm text-[#e8e6e1]/60 hover:text-accent border border-white/10 hover:border-accent/40 px-4 py-2 rounded-full transition-colors"
                  >
                    {p.h1}
                  </Link>
                ))}
                <Link
                  to="/"
                  className="text-sm text-[#e8e6e1]/60 hover:text-accent border border-white/10 hover:border-accent/40 px-4 py-2 rounded-full transition-colors"
                >
                  Ver site completo
                </Link>
              </div>
            </section>
          )}
        </main>

        <footer className="border-t border-white/[0.06] py-8 text-center text-dim text-[0.75rem]">
          <p>
            {business.legalName} · {business.address.street}, {business.address.postalCode}{" "}
            {business.address.locality}
          </p>
          <p className="mt-2">
            <a href={`mailto:${business.email}`} className="hover:text-accent">{business.email}</a>
            {" · "}
            <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              Google Maps
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
