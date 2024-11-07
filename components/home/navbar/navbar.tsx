import { NavMenu } from "./nav-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GithubButton } from "@/components/github-icon";
import DevStoreLogoType from "@/components/dev-store-logotype";
import NavMenuButton from "./nav-menu-button";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex h-12 w-full max-w-screen-lg items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-2 py-1 text-sm backdrop-blur-lg dark:bg-background/40 md:px-3">
      <DevStoreLogoType />
      <NavMenu />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <GithubButton />
        <NavMenuButton />
      </div>
    </nav>
  );
}
