import { Metadata } from "next";
import { itemsData } from "@/data/data";
import ItemCart from "@/components/dashboard/item/item-cart";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <div className="grid h-fit w-full grid-cols-auto-fit-300 gap-4">
      {itemsData.map((item) => (
        <ItemCart key={item.title} item={item} />
      ))}
    </div>
  );
}
