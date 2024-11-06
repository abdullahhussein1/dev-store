import { Terminal } from "lucide-react";
import Link from "next/link";
import React from "react";
import GitHubIcon from "../GitHubIcon";

export default function Footer() {
  return (
    <footer className="mt-6 flex w-full items-center justify-between border-t border-secondary/40 p-4 text-xs md:mx-auto md:max-w-screen-lg">
      <div className="flex items-center gap-1">
        <Terminal strokeWidth={3} className="size-5 rounded-full border p-1" />
        <p className="font-medium text-foreground/70">© 2024</p>
      </div>
      <p className="font-medium text-foreground/70">
        Developed by
        <Link
          href="https://github.com/abdullahhussein1"
          className="px-1 font-semibold text-foreground/90 transition-all hover:text-foreground"
        >
          A Palestine 🇵🇸 and Sudan 🇸🇩 Supporter
        </Link>
      </p>
      <Link href="https://github.com/abdullahhussein1/dev-store">
        <GitHubIcon className="text-foreground/90 hover:text-foreground" />
      </Link>
    </footer>
  );
}
