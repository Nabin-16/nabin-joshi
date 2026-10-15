import Link from "next/link";
import { site } from "@/data/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Nabin Joshi home">
        ᓚᘏᗢ
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {site.navigation.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <MobileNav />
      </div>
    </header>
  );
}
