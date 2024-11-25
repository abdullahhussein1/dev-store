"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronUp } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function NavMenu() {
  const { dict, lang } = useLanguage();
  return (
    <NavigationMenu
      className="hidden md:block"
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <NavigationMenuList>
        <NavigationMenuItem className="text-foreground/70 hover:text-foreground">
          <NavigationMenuTrigger>
            {lang == "en" ? "Getting Started" : "دەست پێبکە"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ChevronUp className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {dict.navbar[0].title}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {dict.navbar[0].description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="#features"
                title={lang == "en" ? "Features" : "تایبەتمەندیەکان"}
              >
                {dict.navbar[1].description}
              </ListItem>
              <ListItem
                href="#stacks"
                title={lang == "en" ? "Stacks" : "تەکنەلۆجیاکان"}
              >
                {dict.navbar[2].description}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-foreground/70 hover:text-foreground">
          <NavigationMenuTrigger>
            {lang == "en" ? "Features" : "تایبەتمەندیەکان"}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {dict.features.cards.map((card) => (
                <div
                  key={card.title}
                  className={cn(
                    "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    {card.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
