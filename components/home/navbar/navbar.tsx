import { NavMenu } from "./nav-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GithubButton } from "@/components/github-icon";
import DevStoreLogoType from "@/components/dev-store-logotype";
import NavMenuDrawerButton from "./nav-menu-drawer-button";

export default function Navbar() {
  return (
    <nav className="sticky top-5 z-50 flex h-14 w-full max-w-screen-lg items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-3 py-1 text-sm backdrop-blur-lg dark:bg-background/40 md:h-12 md:px-3">
      <DevStoreLogoType />
      <NavMenu />
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <GithubButton />
        <NavMenuDrawerButton />
      </div>
    </nav>
  );
}
