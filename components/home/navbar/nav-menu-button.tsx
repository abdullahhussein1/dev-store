"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MenuIcon from "@/components/menu-icon";
import { useIsMobile } from "@/hooks/use-mobile";
import { Layers2, SquareTerminal, Star } from "lucide-react";

export default function NavMenuButton() {
  const isMobile = useIsMobile();

  if (!isMobile) return;
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <MenuIcon className="text-foreground/50 hover:text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="rounded-[30px]">
        <MenuList />
      </DrawerContent>
    </Drawer>
  );
}

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: SquareTerminal,
    name: "Dev Store",
    href: "/",
    description:
      "Dev Store is Crafted for a Fast, Intuitive, and Developer-Centric Shopping Experience.",
  },
  {
    Icon: Star,
    name: "Features",
    href: "#features",

    description: "Explore the powerful capabilities of our developer tools.",
    className: "row-span-2",
  },
  {
    Icon: Layers2,
    href: "#stacks",
    name: "Stacks",
    description:
      "Discover the cutting-edge technologies powering our products.",
  },
];

export function MenuList() {
  return (
    <BentoGrid>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
