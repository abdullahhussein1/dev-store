"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MenuIcon from "@/components/menu-icon";
import { useIsMobile } from "@/hooks/use-mobile";
import { Layers2, Star, ChevronUp, LucideIcon } from "lucide-react";

export default function NavMenuDrawerButton() {
  const isMobile = useIsMobile();

  if (!isMobile)
    return (
      <MenuIcon className="size-6 text-foreground/50 hover:text-foreground md:hidden" />
    );
  return (
    <Drawer direction="top">
      <DrawerTrigger className="md:hidden">
        <MenuIcon className="size-6 text-foreground/50 hover:text-foreground" />
      </DrawerTrigger>
      <DrawerContent className="top-0 mb-16 mt-0 p-5">
        <MenuList />
      </DrawerContent>
    </Drawer>
  );
}

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useLanguage } from "@/hooks/use-language";

export function MenuList() {
  const { dict } = useLanguage();
  const navbarIcons: LucideIcon[] = [ChevronUp, Star, Layers2];
  const classNames: string[] = ["col-span-2", "aspect-square", "aspect-square"];

  return (
    <BentoGrid>
      {dict.navbar.map((feature, i) => (
        <BentoCard
          key={feature.title}
          {...feature}
          Icon={navbarIcons[i]}
          className={classNames[i]}
        />
      ))}
    </BentoGrid>
  );
}
