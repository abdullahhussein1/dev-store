import { LucideIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function SpecificationItem({
  Icon,
  title,
  value,
}: {
  Icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex w-fit items-center gap-2 text-xs font-semibold text-foreground/50 transition-all hover:text-foreground/70">
            <Icon className="size-4" />
            <p className="max-w-20 truncate">{value}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">
            {title}: {value}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
