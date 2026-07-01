import { useEffect } from "react";
import {
  business,
  faqs,
  services,
  primaryKeywords,
  geoCities,
  geoCoverage,
  geoDistricts,
  googleReviews,
  SITE_URL,
} from "../../lib/seo-data";

function injectJsonLd(id: string, data: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function StructuredData() {
  useEffect(() => {
    const businessId = `${SITE_URL}/#business`;
    const websiteId = `${SITE_URL}/#website`;
    const placeId = `${SITE_URL}/#place`;

    const citiesWithGeo = geoCities.map((c) => ({
      "@type": "City",
      name: c.name,
      geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng },
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `Distrito de ${c.district}`,
      },
    }));

    const districts = geoDistricts.map((d) => ({
      "@type": "AdministrativeArea",
      name: d.name,
      description: d.tagline,
    }));

    const localBusiness = {
      "@type": "HomeAndConstructionBusiness",
      "@id": businessId,
      name: business.name,
      legalName: business.legalName,
      image: business.image,
      url: SITE_URL,
      telephone: business.phone,
      email: business.email,
      priceRange: business.priceRange,
      description: business.description,
      foundingDate: String(business.foundedYear),
      hasMap: business.googleMapsUrl,
      knowsAbout: primaryKeywords,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "Google Place ID",
          value: business.googlePlaceId,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Google CID",
          value: business.googleCid,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.locality,
        postalCode: business.address.postalCode,
        addressRegion: business.address.region,
        addressCountry: business.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      areaServed: [
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: business.geo.latitude,
            longitude: business.geo.longitude,
          },
          geoRadius: geoCoverage.radiusMeters,
        },
        ...districts,
        ...citiesWithGeo,
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "12:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "13:30",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.rating.value,
        reviewCount: business.rating.count,
        bestRating: 5,
      },
      review: googleReviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
        publisher: { "@type": "Organization", name: "Google" },
      })),
      sameAs: business.sameAs,
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/#contacto`,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Pedir Orçamento Grátis",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serralharia em Guimarães, Braga, Porto e Minho",
        itemListElement: services.map((svc, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: svc.name,
            description: svc.description,
            provider: { "@id": businessId },
            areaServed: citiesWithGeo,
            serviceType: svc.name,
          },
        })),
      },
      mainEntityOfPage: { "@id": websiteId },
      location: { "@id": placeId },
    };

    const place = {
      "@type": "Place",
      "@id": placeId,
      name: business.name,
      url: SITE_URL,
      hasMap: business.googleMapsUrl,
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.locality,
        postalCode: business.address.postalCode,
        addressRegion: business.address.region,
        addressCountry: business.address.country,
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Google Place ID",
        value: business.googlePlaceId,
      },
    };

    const website = {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: business.name,
      description: business.tagline,
      publisher: { "@id": businessId },
      inLanguage: "pt-PT",
      mainEntity: { "@id": businessId },
    };

    const faqPage = {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };

    const breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Serralharia Guimarães, Braga e Porto", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Zonas de Cobertura", item: `${SITE_URL}/#zonas` },
        { "@type": "ListItem", position: 3, name: "Serviços", item: `${SITE_URL}/#servicos` },
        { "@type": "ListItem", position: 4, name: "Contacto", item: `${SITE_URL}/#contacto` },
      ],
    };

    injectJsonLd("jsonld-graph", {
      "@context": "https://schema.org",
      "@graph": [website, localBusiness, place, faqPage, breadcrumb],
    });

    return () => document.getElementById("jsonld-graph")?.remove();
  }, []);

  return null;
}
