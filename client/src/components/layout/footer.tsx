import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">AFH Web Studio</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Beautiful, compliant, conversion‑ready websites for Adult Family Homes.
            </p>
            <p className="text-muted-foreground text-sm">
              Helping families find the right care through better websites.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/templates" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-templates"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/features" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-case-studies"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © {currentYear} AFH Web Studio. All rights reserved. | Built with care for Adult Family Homes.
          </p>
        </div>
      </div>
    </footer>
  );
}
