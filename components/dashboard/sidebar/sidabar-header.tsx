"use client";

import * as React from "react";
import { ChevronUp } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function Header() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <Link href="/">
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <ChevronUp className="size-4" />
              </div>
              <div className="text-sm">
                <span className="truncate font-semibold">Dev Store</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      </SidebarMenu>
    </SidebarHeader>
  );
}
