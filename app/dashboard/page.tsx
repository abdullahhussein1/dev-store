import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  BadgeDollarSignIcon,
  Cpu,
  Heart,
  Keyboard,
  Laptop,
  LucideIcon,
  ShoppingCart,
  Speaker,
  Star,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

type DashboardCardType = {
  title?: string;
  content: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

const overviewCardItems: DashboardCardType[] = [
  {
    title: "My Cart",
    content: "4",
    icon: ShoppingCart,
    className: "row-span-2",
    iconClassName: "text-sky-400 fill-sky-400/20 group-hover:text-sky-400",
  },
  {
    title: "Favourites",
    content: "8",
    icon: Heart,
    className: "col-span-2",
    iconClassName: "text-red-400 fill-red-400/20 group-hover:text-red-400",
  },
  {
    title: "Purchased",
    content: "21",
    icon: BadgeDollarSignIcon,
    iconClassName:
      "text-green-400 fill-green-400/20 group-hover:text-green-400",
  },
  {
    title: "Reviewed",
    content: "10",
    icon: Star,
    iconClassName:
      "text-yellow-400 fill-yellow-400/20 group-hover:text-yellow-400",
  },
];

const categoryCardItems: DashboardCardType[] = [
  {
    content: "Laptop",
    icon: Laptop,
  },
  {
    content: "Keyboard",
    icon: Keyboard,
  },
  {
    content: "Hardware",
    icon: Cpu,
  },
  {
    content: "Accessory",
    icon: Speaker,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-12">
      <OverviewCards />
      <TopCategoriesCards />
      <DotPattern className="opacity-15" />
    </div>
  );
}

function OverviewCards() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="z-20 grid w-full grid-cols-3 grid-rows-2 gap-4">
        {overviewCardItems.map((item) => (
          <DashboardCard
            key={item.title}
            item={item}
            className="text-2xl md:text-3xl"
          />
        ))}
      </div>
    </div>
  );
}

function TopCategoriesCards() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Top Categories</h1>
        <Link href="/dashboard/categories">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground dark:hover:bg-secondary/40 md:text-base"
          >
            See All
          </Button>
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-auto-fit-200">
        {categoryCardItems.map((item) => (
          <DashboardCard key={item.title} variant="category" item={item} />
        ))}
      </div>
    </div>
  );
}

function DashboardCard({
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
          "absolute bottom-2 right-2 size-10 fill-muted-foreground/15 text-muted-foreground transition-all group-hover:scale-105 group-hover:text-foreground md:size-14",
          item.iconClassName,
        )}
      />
    </Card>
  );
}
