import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Dev Store",
    default: "Dashboard",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex shrink-0 items-center gap-2 bg-background/90 p-4 backdrop-blur-xl transition-[width,height] ease-linear">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <Link
            href="/dashboard/search"
            className="relative flex max-w-lg flex-1 rounded-[11px] border bg-secondary/20 px-2 py-1 ps-9 text-sm text-muted-foreground/80 transition-colors hover:bg-secondary/40"
          >
            <p>Search</p>
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3">
              <Search className="size-4" />
            </div>
          </Link>
        </header>
        <main className="flex h-fit p-4 pt-2">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
