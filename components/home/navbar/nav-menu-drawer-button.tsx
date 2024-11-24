"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MenuIcon from "@/components/menu-icon";
import { useIsMobile } from "@/hooks/use-mobile";
import { Layers2, Star, ChevronUp } from "lucide-react";

export default function NavMenuDrawerButton() {
  const isMobile = useIsMobile();

  if (!isMobile)
    return (
      <MenuIcon className="size-6 text-foreground/50 hover:text-foreground md:hidden" />
    );
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <MenuIcon className="size-6 text-foreground/50 hover:text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="p-5">
        <MenuList />
      </DrawerContent>
    </Drawer>
  );
}

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: ChevronUp,
    name: "Dev Store",
    href: "/",
    description:
      "Crafted for a Fast, Intuitive, and Developer-Centric Shopping Experience.",
    className: "aspect-square",
  },
  {
    Icon: Star,
    name: "Features",
    href: "#features",
    description: "Explore the powerful capabilities of our developer tools.",
    className: "aspect-square",
  },
  {
    Icon: Layers2,
    href: "#stacks",
    name: "Stacks",
    description:
      "Discover the cutting-edge technologies powering our products.",
    className: "col-span-2",
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
