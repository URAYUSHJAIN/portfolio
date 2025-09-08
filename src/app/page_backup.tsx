import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { ProjectCard } from "@/components/project-card";
import { CertificateCard } from "@/components/ui/certificates";
import { ResumeCard } from "@/components/ui/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import './globals.css';
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <NeonGradientCard className="max-w-4xl items-center justify-center text-center">
              <div className="gap-2 flex justify-between items-center p-4">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </NeonGradientCard>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <NeonGradientCard className="max-w-4xl mx-auto">
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
          </NeonGradientCard>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
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
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <NeonGradientCard 
              className="max-w-4xl mx-auto"
              neonColors={{
                firstColor: "#ff00aa",
                secondColor: "#00FFF1",
              }}
            >
              <div className="flex flex-wrap gap-2 p-2">
                {DATA.skills.map((skill, id) => (
                  <Badge 
                    key={skill}
                    className="px-3 py-1 text-sm bg-background/50 hover:bg-background/70 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </NeonGradientCard>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <NeonGradientCard 
              className="max-w-4xl mx-auto"
              neonColors={{
                firstColor: "#8b5cf6",
                secondColor: "#06b6d4",
              }}
              borderSize={3}
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground/10 text-foreground px-3 py-1 text-sm backdrop-blur-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These projects are a glimpse into what I've been working on. I'm always refining my approach and slowly building new things, with much more to come.
                  </p>
                </div>
              </div>
            </NeonGradientCard>
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
      <section id="UpcomingProjects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <NeonGradientCard 
              className="max-w-4xl mx-auto"
              neonColors={{
                firstColor: "#f59e0b",
                secondColor: "#10b981",
              }}
              borderSize={2}
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground/10 text-foreground px-3 py-1 text-sm backdrop-blur-sm">
                    Upcoming Projects...
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my upcoming projects
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These projects are what I'm working on right now and soon will be available in the future
                  </p>
                </div>
              </div>
            </NeonGradientCard>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.UpcomingProjects.map((project, id) => (
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
      <section id="certificate">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <NeonGradientCard 
              className="max-w-4xl mx-auto"
              neonColors={{
                firstColor: "#dc2626",
                secondColor: "#fbbf24",
              }}
              borderSize={2}
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground/10 text-foreground px-3 py-1 text-sm backdrop-blur-sm">
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
            </NeonGradientCard>
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
            <NeonGradientCard 
              className="max-w-3xl mx-auto"
              neonColors={{
                firstColor: "#00d4ff",
                secondColor: "#ff6b6b",
              }}
            >
              <div className="space-y-3 p-6">
                <div className="inline-block rounded-lg bg-foreground/10 text-foreground px-3 py-1 text-sm backdrop-blur-sm">
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
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    LinkedIn
                  </Link>
                  {" "} 
                </p>
              </div>
            </NeonGradientCard>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
