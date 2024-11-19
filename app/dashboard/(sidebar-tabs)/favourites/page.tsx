import ItemCart from "@/components/dashboard/item/item-cart";
import { itemsData } from "@/data/data";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Favourites</h1>
      <div className="grid h-fit w-full grid-cols-auto-fit-300 gap-4">
        {itemsData.slice(3, 7).map((item) => (
          <ItemCart key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
