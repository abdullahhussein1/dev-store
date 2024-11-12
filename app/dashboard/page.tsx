import { Button } from "@/components/ui/button";
import {
  Battery,
  Cpu,
  Heart,
  LucideIcon,
  Maximize2,
  MemoryStick,
  Star,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4 pt-0">
        <div className="grid-cols-auto-fit-300 grid gap-4">
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </div>
      </main>
    </>
  );
}

function ItemCart() {
  return (
    <div className="group relative flex cursor-pointer justify-center gap-2 rounded-3xl bg-secondary/50 p-2">
      <div className="flex aspect-square w-1/3 items-center justify-center overflow-clip rounded-3xl border border-secondary/70 bg-white">
        <Image
          src="/macbook.jpg"
          width={1000}
          height={1000}
          alt="macbook M3 2024"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <Button
        size="icon"
        variant="outline"
        className="absolute right-2 top-2 aspect-square size-7 rounded-full bg-secondary/40 text-foreground/30 backdrop-blur-md transition-all group-hover:text-foreground/60"
      >
        <Heart />
      </Button>
      <div className="flex flex-1 flex-col gap-1 p-2 text-foreground/90 transition-all group-hover:text-foreground">
        <p className="text-lg font-semibold">Macbook M3 2024</p>
        <div className="flex items-center gap-1 text-foreground/30 [&_svg]:size-4">
          <Star className="fill-foreground/20" />
          <Star className="fill-foreground/20" />
          <Star className="fill-foreground/20" />
          <Star className="fill-foreground/20" />
          <Star className="fill-none" />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">$899.99</p>
          <p className="text-sm text-foreground/70">5 left in Stack</p>
        </div>
        <div className="grid flex-1 grid-cols-2 place-content-start py-1 text-sm font-semibold text-foreground/50 [&_svg]:size-4">
          <FeatureItem Icon={Cpu} title="CPU" value="M3" />
          <FeatureItem Icon={Maximize2} title="Display" value="14'" />
          <FeatureItem Icon={MemoryStick} title="RAM" value="8" />
          <FeatureItem Icon={Battery} title="Battery" value="3600" />
        </div>
      </div>
    </div>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function FeatureItem({
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
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-fit items-center gap-2"
          >
            <Icon /> <p>{value}</p>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {title}: {value}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
