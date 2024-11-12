import { Item } from "@/types/types";
import { Star } from "lucide-react";

export default function ItemRatings({ rating }: { rating: Item["rating"] }) {
  const totalStars = 5;
  const roundedRating = Math.round(rating);
  return (
    <div className="flex items-center gap-1 text-foreground/30 [&_svg]:size-4">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={index < roundedRating ? "fill-foreground/20" : "fill-none"}
        />
      ))}
    </div>
  );
}
