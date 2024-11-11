"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Heart,
  Home,
  LayoutGrid,
  Settings,
  Settings2,
  ShoppingCart,
  SquareTerminal,
} from "lucide-react";

import { NavFilters } from "@/components/dashboard/sidebar/nav-filters";
import { NavMain } from "@/components/dashboard/sidebar/nav-main";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";
import { Header } from "@/components/dashboard/sidebar/sidabar-header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Abdullah",
    email: "abdullah@moon.dev",
    avatar: "/avatars/profile.jpeg",
  },
  main: [
    {
      name: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      name: "Categories",
      url: "/categories",
      icon: LayoutGrid,
    },
    {
      name: "Shopping Cart",
      url: "/shopping-cart",
      icon: ShoppingCart,
    },
    {
      name: "Favourites",
      url: "/favourites",
      icon: Heart,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
  filters: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Header />
      <SidebarContent>
        <NavMain items={data.main} />
        <NavFilters items={data.filters} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
