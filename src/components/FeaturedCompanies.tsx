import kellerWilliamsLogo from "@/assets/logo-keller-williams.png";
import coldwellBankerLogo from "@/assets/logo-coldwell-banker.png";
import remaxLogo from "@/assets/logo-remax.png";
import century21Logo from "@/assets/logo-century21.png";
import compassLogo from "@/assets/logo-compass.png";
import sothebysLogo from "@/assets/logo-sothebys.png";

const FeaturedCompanies = () => {
  const companies = [
    { name: "Keller Williams", logo: kellerWilliamsLogo },
    { name: "Coldwell Banker", logo: coldwellBankerLogo },
    { name: "RE/MAX", logo: remaxLogo },
    { name: "Century 21", logo: century21Logo },
    { name: "Compass", logo: compassLogo },
    { name: "Sotheby's", logo: sothebysLogo },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Featured Real Estate Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-card rounded-lg shadow-card p-6 flex items-center justify-center hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-12 w-auto mx-auto object-contain"
                />
                <div className="text-xs text-muted-foreground mt-2">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
