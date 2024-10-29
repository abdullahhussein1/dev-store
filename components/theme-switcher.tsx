"use client";

import * as React from "react";
import { Laptop, LucideIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  return (
    <div className="group-hover:bg-background bg-secondary dark:bg-secondary/30 border rounded-full text-foreground/60 w-fit">
      <ThemeButton Icon={Sun} themeTitle="light" />
      <ThemeButton Icon={Moon} themeTitle="dark" />
      <ThemeButton Icon={Laptop} themeTitle="system" />
    </div>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ThemeButton({
  Icon,
  themeTitle,
}: {
  Icon: LucideIcon;
  themeTitle: "light" | "dark" | "system";
}) {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-full [&_svg]:size-3 size-6 p-0 border border-transparent hover:text-foreground hover:bg-transparent hover:rotate-6 transition-transform",
              theme == themeTitle && "text-foreground border-foreground/20"
            )}
            onClick={() => setTheme(themeTitle)}
          >
            <Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{themeTitle}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
