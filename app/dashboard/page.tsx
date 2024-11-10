import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4 pt-0">
        <div className="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-3">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </main>
    </>
  );
}

function ItemCard() {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-3xl bg-secondary/80 p-3">
      <div className="group flex aspect-square w-full items-center justify-center overflow-clip rounded-3xl bg-background">
        <Image
          src="/macbook.jpg"
          width={1000}
          height={1000}
          alt="macbook M3 2024"
          className="object-cover transition-transform delay-200 duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between px-2">
        <div className="flex w-full flex-col justify-center text-sm font-semibold">
          <p>Macbook M3 2024</p>
          <p>$899</p>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="aspect-square rounded-full"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
