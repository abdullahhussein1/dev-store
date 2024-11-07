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
      className={cn("grid w-full grid-cols-2 grid-rows-2 gap-3 p-3", className)}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
}: {
  name: string;
  className?: string;
  Icon: any;
  href: string;
  description: string;
}) => (
  <Link
    href={href}
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl",
      // light styles
      "bg-background/80 font-semibold text-foreground/80 hover:text-foreground",
      // dark styles
      "dark:bg-secondary/30",
      className,
    )}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      <div className="flex size-12 items-center justify-center rounded-sm border bg-secondary/70 p-1 dark:bg-secondary/40">
        <Icon className="size-8 fill-background/70" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-foreground/60">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    ></div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </Link>
);

export { BentoCard, BentoGrid };
