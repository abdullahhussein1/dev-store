import { cn } from "@/lib/utils";

export default function MenuIcon({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Menu</title>
      <desc>Menu icon</desc>
      <g id="Menu / Menu_Duo_LG">
        <path
          id="Vector"
          d="M3 15H21M3 9H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
