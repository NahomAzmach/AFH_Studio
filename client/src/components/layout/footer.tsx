import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary font-display">AFH Web Studio</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Beautiful, compliant, conversion‑ready websites for Adult Family Homes.
            </p>
            <p className="text-sm text-muted-foreground">
              Helping families find the right care through better websites.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/templates" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-templates">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-features">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/plan-my-site" className="text-primary font-medium transition-colors hover:opacity-80" data-testid="footer-plan-my-site">
                  Plan My Site
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground" data-testid="footer-terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © {currentYear} AFH Web Studio. All rights reserved. | Built with care for Adult Family Homes.
          </p>
        </div>
      </div>
    </footer>
  );
}
