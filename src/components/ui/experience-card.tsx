import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ExperienceCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string;
  description?: string;
  responsibilities?: readonly string[];
}

export function ExperienceCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location,
  description,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <Card className="group flex gap-4 p-4 border-border/60 transition-all duration-200 hover:border-primary/40 hover:shadow-sm">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-background">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow min-w-0">
        <CardContent className="flex flex-col h-full flex-grow p-0">
          <div className="flex items-start justify-between gap-x-3 text-base">
            <h3 className="inline-flex items-center font-semibold leading-none text-sm sm:text-base">
              {href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  {title}
                  <ChevronRightIcon aria-hidden="true" className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ) : (
                title
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs sm:text-sm text-muted-foreground mt-0.5">{subtitle}</div>}

          {(badges || location) && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {badges?.map((badge, index) => (
                <Badge variant="secondary" className="text-xs" key={index}>
                  {badge}
                </Badge>
              ))}
              {location && (
                <Badge variant="outline" className="text-xs">
                  {location}
                </Badge>
              )}
            </div>
          )}

          {description && (
            <div className="text-pretty font-sans text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
              {description}
            </div>
          )}
          {responsibilities && responsibilities.length > 0 && (
            <div className="mt-3">
              <h4 className="text-xs font-semibold mb-1.5">Key Responsibilities</h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
