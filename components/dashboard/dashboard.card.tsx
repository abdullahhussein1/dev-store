import { DashboardCardType } from "@/types/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function DashboardCard({
  item,
  className,
  variant = "default",
}: {
  item: DashboardCardType;
  className?: string;
  variant?: "default" | "category";
}) {
  return (
    <Card
      className={cn(
        "group relative flex h-full w-full flex-col gap-1.5 truncate rounded-3xl bg-secondary/30 p-3 text-xl backdrop-blur-xl transition-all hover:bg-secondary/50 dark:bg-secondary/20 dark:hover:bg-secondary/30 md:p-4",
        variant === "category" && "aspect-video",
        className,
        item.className,
      )}
    >
      {item.title && (
        <CardTitle className="text-base text-muted-foreground md:text-xl">
          {item.title}
        </CardTitle>
      )}
      <CardContent className="px-0 font-black">{item.content}</CardContent>
      <item.icon
        strokeWidth={1}
        className={cn(
          "absolute bottom-2 right-2 size-10 fill-muted-foreground/15 text-muted-foreground transition-all group-hover:scale-105 group-hover:text-foreground md:size-12",
          item.iconClassName,
        )}
      />
    </Card>
  );
}
