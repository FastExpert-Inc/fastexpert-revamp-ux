import kellerWilliamsLogo from "@/assets/logo-keller-williams.png";
import coldwellBankerLogo from "@/assets/logo-coldwell-banker.png";
import remaxLogo from "@/assets/logo-remax.png";
import century21Logo from "@/assets/logo-century21.png";
import compassLogo from "@/assets/logo-compass.png";
import sothebysLogo from "@/assets/logo-sothebys.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedCompanies = () => {
  const companies = [
    { name: "Keller Williams", logo: kellerWilliamsLogo },
    { name: "Coldwell Banker", logo: coldwellBankerLogo },
    { name: "RE/MAX", logo: remaxLogo },
    { name: "Century 21", logo: century21Logo },
    { name: "Compass", logo: compassLogo },
    { name: "Sotheby's International Realty", logo: sothebysLogo },
    { name: "Berkshire Hathaway HomeServices", logo: kellerWilliamsLogo },
    { name: "eXp Realty", logo: coldwellBankerLogo },
    { name: "Better Homes and Gardens Real Estate", logo: remaxLogo },
    { name: "Engel & Völkers", logo: century21Logo },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto" style={{ maxWidth: '1140px' }}>
        <h2 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Featured Real Estate Companies
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {companies.map((company) => (
              <CarouselItem key={company.name} className="md:basis-1/3 lg:basis-1/5">
                <div className="bg-card rounded-lg shadow-card p-6 flex items-center justify-center hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group h-full">
                  <div className="text-center">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="h-12 w-auto mx-auto object-contain"
                    />
                    <div className="text-xs text-muted-foreground mt-2">{company.name}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
