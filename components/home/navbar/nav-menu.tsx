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
import { Terminal } from "lucide-react";

interface Component {
  title: string;
  href: string;
  description: string;
}

const components: Component[] = [
  {
    title: "Marketplace",
    href: "/features/marketplace",
    description:
      "An all-in-one platform where users can browse, buy, and sell products or services.",
  },
  {
    title: "Security",
    href: "/features/security",
    description:
      "Top-tier protection measures to ensure the safety of user data and transactions.",
  },
  {
    title: "Performance",
    href: "/features/performance",
    description:
      "Lightning-fast response times and optimized processes for a smooth user experience.",
  },
  {
    title: "Community",
    href: "/features/community",
    description:
      "A thriving ecosystem of users, fostering engagement and collaboration.",
  },
  {
    title: "Global Reach",
    href: "/features/global-reach",
    description:
      "Expand your horizons with worldwide accessibility and multi-language support.",
  },
  {
    title: "24/7 Availability",
    href: "/features/availability",
    description:
      "Round-the-clock access to services, ensuring convenience for users in all time zones.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem className="text-foreground/70 hover:text-foreground">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Terminal className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Dev Store
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Dev Store is Crafted for a Fast, Intuitive, and
                      Developer-Centric Shopping Experience.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#features" title="Features">
                Explore the powerful capabilities of our developer tools.
              </ListItem>
              <ListItem href="#stacks" title="Stacks">
                Discover the cutting-edge technologies powering our products.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-foreground/70 hover:text-foreground">
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
