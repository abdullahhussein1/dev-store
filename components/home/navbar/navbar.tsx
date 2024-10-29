import { Menu, Terminal } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal className="size-7 rounded-md border p-1" />
        <p className="font-semibold">Dev store</p>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="text-foreground/70 hover:text-foreground md:hidden"
      >
        <Menu />
      </Button>
      <NavMenu />
    </nav>
  );
}
