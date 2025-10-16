"use client";

import { DATA } from "@/data/resume";

export function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DATA.name,
    "url": DATA.url,
    "image": `${DATA.url}${DATA.avatarUrl}`,
    "jobTitle": "Full-Stack Developer & Web3 Enthusiast",
    "description": "Computer Science student and 5x patent holder specializing in Generative AI, Web3, and blockchain technologies",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "ABES Engineering College"
    },
    "knowsAbout": [
      "Full-Stack Development",
      "Web3",
      "Generative AI",
      "React",
      "Node.js",
      "Blockchain",
      "JavaScript",
      "TypeScript"
    ],
    "sameAs": [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      "https://x.com/urayushjain"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${DATA.name} Portfolio`,
    "url": DATA.url,
    "author": {
      "@type": "Person",
      "name": DATA.name
    },
    "description": "Portfolio showcasing full-stack development projects, patents, and expertise in AI and Web3 technologies"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}