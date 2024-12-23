import { Metadata } from "next";
import { itemsData } from "@/data/data";
import ItemCart from "@/components/dashboard/item/item-cart";

export const metadata: Metadata = {
  title: "Store",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Store</h1>
      <div className="grid h-fit w-full grid-cols-auto-fit-300 gap-4">
        {itemsData.map((item) => (
          <ItemCart key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
