import { Metadata } from "next";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { itemsData } from "@/data/data";
import ItemCart from "@/components/dashboard/item/item-cart";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 bg-background/90 backdrop-blur-xl transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-4 pt-0">
        <div className="grid-cols-auto-fit-300 grid gap-4">
          {itemsData.map((item) => (
            <ItemCart key={item.title} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
