"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className={cn(item.name === "Search" && "pb-2")}
          >
            <SidebarMenuButton
              tooltip={item.name}
              asChild
              isActive={pathname === item.url}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            {["My Cart", "Favourites"].includes(item.name) && (
              <SidebarMenuBadge className="text-muted-foreground">
                4
              </SidebarMenuBadge>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
