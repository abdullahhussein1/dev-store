import { Terminal } from "lucide-react";
import React from "react";
import { GithubButton } from "../github-icon";

export default function Footer() {
  return (
    <footer className="mt-6 flex w-full items-center justify-between border-t p-4 text-xs md:mx-auto md:max-w-screen-lg">
      <div className="flex items-center gap-1">
        <Terminal strokeWidth={3} className="size-5 rounded-full border p-1" />
        <p className="font-medium text-foreground/70">© 2024</p>
      </div>
      <div className="flex gap-1 font-medium text-foreground/70">
        <p>Stands with</p>
        <p className="font-semibold text-foreground/90 transition-all hover:text-foreground">
          Palestine 🇵🇸 Sudan 🇸🇩 Syria 🇸🇾
        </p>
      </div>
      <GithubButton className="p-px" />
    </footer>
  );
}
