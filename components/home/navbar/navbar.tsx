import { Menu, Terminal } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex w-full items-center justify-between rounded-2xl border border-border/60 bg-background/40 px-2 py-px text-sm backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <Terminal className="size-6 rounded-md border p-1" />
        <p className="font-semibold">Dev store</p>
      </div>
      <div className="flex items-center gap-1">
        <NavMenu />
        <ThemeSwitcher />
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground/70 hover:text-foreground md:hidden"
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
}
