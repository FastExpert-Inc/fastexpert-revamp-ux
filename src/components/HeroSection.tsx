import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Top Real Estate Companies in the U.S.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in">
            Featuring 3,500+ vetted real estate brokerages across the United States
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-card-hover p-2 flex gap-2 animate-scale-in">
            <Input
              placeholder="Enter City, State or ZIP"
              className="flex-1 border-0 focus-visible:ring-0 text-base"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground">4,743</div>
              <div className="text-sm text-primary-foreground/80">Companies Listed</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground">7,038</div>
              <div className="text-sm text-primary-foreground/80">Active Agents</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground">196,976</div>
              <div className="text-sm text-primary-foreground/80">Total Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
