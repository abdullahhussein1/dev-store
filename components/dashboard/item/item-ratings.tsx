import { Item } from "@/types/types";
import { Star } from "lucide-react";

export default function ItemRatings({
  rating,
  numberOfRatings,
}: {
  rating: Item["rating"];
  numberOfRatings: Item["numberOfRatings"];
}) {
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
      <p className="ps-1 text-[11px] leading-none text-foreground/50">
        {numberOfRatings}
      </p>
    </div>
  );
}
