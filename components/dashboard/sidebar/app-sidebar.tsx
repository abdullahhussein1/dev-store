"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Heart,
  Home,
  LayoutGrid,
  Search,
  Settings2,
  ShoppingCart,
  Store,
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
      name: "Search",
      url: "/dashboard/search",
      icon: Search,
    },
    {
      name: "Store",
      url: "/dashboard/store",
      icon: Store,
    },
    {
      name: "My Cart",
      url: "/dashboard/cart",
      icon: ShoppingCart,
    },
    {
      name: "Categories",
      url: "/dashboard/categories",
      icon: LayoutGrid,
    },
    {
      name: "Favourites",
      url: "/dashboard/favourites",
      icon: Heart,
    },
  ],
  filters: [
    {
      title: "Category",
      url: "#",
      icon: LayoutGrid,
      items: [
        {
          title: "Laptop",
          url: "#",
        },
        {
          title: "Keyboard",
          url: "#",
        },
        {
          title: "Mouse",
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
    <Sidebar collapsible="icon" className="z-50" {...props}>
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
