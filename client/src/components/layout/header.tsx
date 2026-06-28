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
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={cn(
          "mobile-menu fixed bottom-0 left-0 top-0 z-50 w-[min(22rem,85vw)] overflow-hidden border-r border-[#e5ddd0] bg-[#fffaf3] text-[#1f2e27] shadow-2xl dark:border-[#244238] dark:bg-[#102019] dark:text-[#f5efe3] md:hidden",
          mobileMenuOpen && "open",
        )}
      >
        <div className="mobile-menu-panel flex h-[100dvh] flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xl font-bold text-primary font-display">AFH Web Studio</span>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/plan-my-site", label: "Plan My Site" }, { href: "/contact", label: "Contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-[#1f2e27] transition-colors hover:bg-[#efe8dc] hover:text-primary dark:text-[#f5efe3] dark:hover:bg-[#1b332a]"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full" data-testid="mobile-cta">
              Start My Site
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
