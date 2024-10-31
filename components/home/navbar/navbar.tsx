import { Menu, Terminal } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex w-full max-w-screen-lg items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-2 py-1 text-sm backdrop-blur-lg dark:bg-background/40 md:px-3">
      <div className="flex items-center gap-2">
        <Terminal strokeWidth={3} className="size-6 rounded-full border p-1" />
        <p className="font-semibold">Dev Store</p>
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
