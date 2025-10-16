import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/ui/certificates";
import { ResumeCard } from "@/components/ui/resume-card";
import { ExperienceCard } from "@/components/ui/experience-card";
import { PatentCard } from "@/components/ui/patent-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import dynamic from "next/dynamic";

// Lazy load heavy components for better performance
const NeonGradientCard = dynamic(
  () => import("@/components/magicui/neon-gradient-card").then(mod => ({ default: mod.NeonGradientCard })),
  { 
    ssr: false,
    loading: () => <div className="h-48 animate-pulse bg-gray-200 rounded-lg" />
  }
);

const BLUR_FADE_DELAY = 0.02; // Reduced for better performance

export default function Page() {
  return (
    <div className="relative">
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ayush Jain - Full-Stack Developer & Web3 Enthusiast
              </h1>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-lg font-medium text-muted-foreground"
                yOffset={8}
                text="Specializing in Generative AI, Web3, and Modern Web Development"
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
        
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={`${DATA.name} - Full-Stack Developer and Web3 Enthusiast`} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" aria-labelledby="about-heading">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 id="about-heading" className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown
            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            components={{
              a: ({ href, children }) => (
                <a href={href} className="custom-link">
                  {children}
                </a>
              ),
            }}
          >
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education" aria-labelledby="education-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 id="education-heading" className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="experience" aria-labelledby="experience-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 id="experience-heading" className="text-xl font-bold">Experience</h2>
          </BlurFade>
          {DATA.experience.map((experience, id) => (
            <BlurFade
              key={experience.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ExperienceCard
                key={experience.company}
                logoUrl={experience.logoUrl}
                altText={experience.company}
                title={experience.company}
                subtitle={experience.role}
                href={experience.href}
                period={`${experience.start} - ${experience.end}`}
                description={experience.description}
                responsibilities={experience.responsibilities}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 id="skills-heading" className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <ul className="flex flex-wrap gap-1" role="list">
            {DATA.skills.map((skill, id) => (
              <li key={skill}>
                <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These projects are a glimpse into what I've been working on. I'm always refining my approach and slowly building new things, with much more to come.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="patents">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Patents
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Patent Portfolio
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As a 5x patent holder, I've contributed to innovation in smart energy systems, blockchain technology, and AI-powered solutions.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.patents.map((patent, id) => (
              <BlurFade
                key={patent.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <NeonGradientCard className="items-center justify-center text-center">
                  <PatentCard
                    title={patent.title}
                    applicationNumber={patent.applicationNumber}
                    publicationNumber={patent.publicationNumber}
                    date={patent.date}
                  />
                </NeonGradientCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="certificate">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like learning more
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I have completed{" "}
                  {DATA.certificate.length}+ certificates. And I plan on keep my learning accelerated.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.certificate.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <CertificateCard
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm with a direct question on {" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                {" "} 
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
    </div>
  );
}
