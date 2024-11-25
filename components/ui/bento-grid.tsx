import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-screen-sm grid-cols-2 grid-rows-2 gap-6 p-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  className,
  Icon,
  description,
  href,
}: {
  title: string;
  className?: string;
  Icon: any;
  href: string;
  description: string;
}) => (
  <Link
    href={href}
    draggable="false"
    className={cn(
      "group relative col-span-1 flex aspect-square select-none flex-col justify-between overflow-hidden rounded-[45px] backdrop-blur-md",
      // light styles
      "bg-background/70 font-semibold text-foreground/90 hover:text-foreground",
      // dark styles
      "dark:bg-secondary/30",
      className,
    )}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-5 transition-all duration-300">
      <div className="flex size-8 items-center justify-center rounded-sm border bg-secondary/70 p-1 dark:bg-secondary/40 sm:size-11">
        <Icon className="size-5 fill-background/70 sm:size-8" />
      </div>
      <h3 className="text-sm sm:text-xl">{title}</h3>
      <p className="text-xs text-foreground/60 sm:text-sm">{description}</p>
    </div>
  </Link>
);

export { BentoCard, BentoGrid };
