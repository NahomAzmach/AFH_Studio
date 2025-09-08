import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
      data-testid="theme-toggle"
    >
      <Moon className="w-5 h-5" />
    </Button>
  );
}
