import DashboardCard from "@/components/dashboard/dashboard.card";
import { categoryCardItems } from "@/data/data";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-auto-fit-200">
        {categoryCardItems.map((item, index) => (
          <DashboardCard key={index} variant="category" item={item} />
        ))}
      </div>
    </div>
  );
}
