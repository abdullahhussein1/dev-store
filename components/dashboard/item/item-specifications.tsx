import { Item } from "@/types/types";
import SpecificationItem from "./specification-item";

export default function ItemSpecifications({
  specifications,
}: {
  specifications: Item["specifications"];
}) {
  return (
    <div className="grid flex-1 grid-cols-2 place-content-start gap-1 overflow-clip py-1">
      {specifications.slice(0, 4).map((specification) => (
        <SpecificationItem
          key={specification.key}
          Icon={specification.icon}
          title={specification.key}
          value={specification.value}
        />
      ))}
    </div>
  );
}
