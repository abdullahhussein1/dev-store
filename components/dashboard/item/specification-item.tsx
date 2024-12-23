import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Key } from "@/types/types";
import { iconMap } from "@/utils/utils";

export default function SpecificationItem({
  title,
  value,
}: {
  title: Key;
  value: string;
}) {
  const Icon = iconMap[title];
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex max-w-fit items-center gap-2 overflow-hidden text-xs font-semibold text-foreground/50 transition-all hover:text-foreground/70">
            <div>
              <Icon className="size-4" />
            </div>
            <p className="truncate">{value}</p>
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
