import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/theme-toggle";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/templates", label: "Templates", testId: "nav-templates" },
  { href: "/features", label: "Features", testId: "nav-features" },
  { href: "/pricing", label: "Pricing", testId: "nav-pricing" },
  { href: "/case-studies", label: "Case Studies", testId: "nav-case-studies" },
  { href: "/about", label: "About", testId: "nav-about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-primary font-display" data-testid="logo-link">
          AFH Web Studio
        </Link>

        <nav className="hidden items-center space-x-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                location === link.href && "text-foreground",
              )}
              data-testid={link.testId}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plan-my-site"
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:opacity-80",
              location === "/plan-my-site" && "underline",
            )}
            data-testid="nav-plan-my-site"
          >
            <Sparkles className="h-4 w-4" />
            Plan My Site
          </Link>
          <Link href="/contact">
            <Button data-testid="header-cta">Start My Site</Button>
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#e5ddd0] bg-[#fffaf3] px-4 py-5 shadow-xl dark:border-[#244238] dark:bg-[#102019] md:hidden">
          <nav className="container mx-auto max-w-6xl">
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/plan-my-site", label: "Plan My Site" }, { href: "/contact", label: "Contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-semibold text-[#1f2e27] transition-colors hover:bg-[#efe8dc] dark:text-[#f5efe3] dark:hover:bg-[#1b332a]",
                        location === link.href && "bg-[#efe8dc] text-primary dark:bg-[#1b332a]",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="mt-4 w-full" data-testid="mobile-cta">
                Start My Site
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
