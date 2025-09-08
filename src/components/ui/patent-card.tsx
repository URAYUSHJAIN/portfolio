import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PatentCardProps {
  title: string;
  applicationNumber: string;
  publicationNumber: string;
  date: string;
}

export function PatentCard({
  title,
  applicationNumber,
  publicationNumber,
  date,
}: PatentCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <CardContent className="flex flex-col gap-2 p-6">
        <div className="space-y-2">
          <h3 className="font-semibold tracking-tight text-base">
            {title}
          </h3>
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span className="font-medium">Application No:</span>
              <span className="font-mono">{applicationNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Publication No:</span>
              <span className="font-mono">{publicationNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
