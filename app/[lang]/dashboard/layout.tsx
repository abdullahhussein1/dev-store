import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Locale } from "@/types/language-types";
import { Inbox, Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Dev Store",
    default: "Dashboard",
  },
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const lang = (await params).lang;
  return (
    <SidebarProvider dir={lang == "en" ? "ltr" : "rtl"}>
      <AppSidebar side={lang == "en" ? "left" : "right"} />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex shrink-0 items-center justify-between gap-5 bg-background/90 p-4 backdrop-blur-xl transition-[width,height] ease-linear">
          <SidebarTrigger />
          <Link
            href="/dashboard/search"
            className="relative mx-auto flex w-full max-w-lg flex-1 rounded-[11px] border bg-secondary/20 px-2 py-1 ps-9 text-sm text-muted-foreground/80 transition-colors hover:bg-secondary/40"
          >
            <p>Search</p>
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3">
              <Search className="size-4" />
            </div>
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className="size-7 text-accent-foreground/90"
          >
            <Inbox />
          </Button>
        </header>
        <main className="z-30 flex h-fit p-4 pt-2">{children}</main>
        <DotPattern className="fixed opacity-20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
      </SidebarInset>
    </SidebarProvider>
  );
}
