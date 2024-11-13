import { Item } from "@/types/types";
import SpecificationItem from "./specification-item";

export default function ItemSpecifications({
  specifications,
}: {
  specifications: Item["specifications"];
}) {
  return (
    <div className="grid-cols-auto-fit-60 grid max-h-11 flex-1 place-content-start gap-1 overflow-clip py-1">
      {specifications.map((specification) => (
        <SpecificationItem
          key={specification.key}
          title={specification.key}
          value={specification.value}
        />
      ))}
    </div>
  );
}
