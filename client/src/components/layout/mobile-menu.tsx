import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />
      <div className="mobile-menu fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border md:hidden open">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary">AFH Web Studio</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
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
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/templates" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/features" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            <Link href="/contact" onClick={onClose}>
              <Button className="w-full bg-primary text-primary-foreground font-medium">
                Start My Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
