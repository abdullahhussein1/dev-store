import { Menu, Terminal } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import GitHubIcon, { GithubButton } from "@/components/github-icon";
import DevStoreLogoType from "@/components/dev-store-logotype";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import MenuIcon from "@/components/menu-icon";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex h-12 w-full max-w-screen-lg items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-2 py-1 text-sm backdrop-blur-lg dark:bg-background/40 md:px-3">
      <DevStoreLogoType />
      <NavMenu />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <GithubButton />
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <MenuIcon className="text-foreground/50 hover:text-foreground" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
