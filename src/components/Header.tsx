import { Building2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 items-center justify-between" style={{ maxWidth: '1140px' }}>
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">RealtyHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Buy
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Sell
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Companies
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Agents
          </a>
          <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Sign In
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Buy
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Sell
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Companies
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Agents
            </a>
            <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
