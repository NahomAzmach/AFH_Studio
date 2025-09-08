import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/theme-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-xl font-bold text-primary" data-testid="logo-link">
          AFH Web Studio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/templates" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-templates"
          >
            Templates
          </Link>
          <Link 
            href="/features" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-features"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-pricing"
          >
            Pricing
          </Link>
          <Link 
            href="/case-studies" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-case-studies"
          >
            Case Studies
          </Link>
          <Link 
            href="/about" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-about"
          >
            About
          </Link>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground font-medium hover:opacity-90" data-testid="header-cta">
              Start My Site
            </Button>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-muted-foreground hover:text-foreground"
            data-testid="mobile-menu-toggle"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Trigger */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border md:hidden ${
        mobileMenuOpen ? 'open' : ''
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary">AFH Web Studio</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="mobile-menu-close"
            >
              ×
            </Button>
          </div>
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/templates" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-templates"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/features" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-case-studies"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground font-medium" data-testid="mobile-cta">
                Start My Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
