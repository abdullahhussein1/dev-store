import DashboardCard from "@/components/dashboard/dashboard.card";
import { Button } from "@/components/ui/button";
import { categoryCardItems, overviewCardItems } from "@/data/data";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-12">
      <OverviewCards />
      <TopCategoriesCards />
    </div>
  );
}

function OverviewCards() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid w-full grid-cols-3 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        {overviewCardItems.map((item, index) => (
          <DashboardCard
            key={index}
            item={item}
            className="text-2xl md:text-3xl"
          />
        ))}
      </div>
    </div>
  );
}

function TopCategoriesCards() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Top Categories</h1>
        <Link href="/dashboard/categories">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground dark:hover:bg-secondary/40 md:text-base"
          >
            See All
          </Button>
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-auto-fit-200">
        {categoryCardItems.slice(0, 4).map((item, index) => (
          <DashboardCard key={index} variant="category" item={item} />
        ))}
      </div>
    </div>
  );
}
