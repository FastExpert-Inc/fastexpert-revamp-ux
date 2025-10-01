const FeaturedCompanies = () => {
  const companies = [
    { name: "Keller Williams", logo: "KW" },
    { name: "Coldwell Banker", logo: "CB" },
    { name: "RE/MAX", logo: "RE/MAX" },
    { name: "Century 21", logo: "C21" },
    { name: "Compass", logo: "CP" },
    { name: "Sotheby's", logo: "SR" },
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
                <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {company.logo}
                </div>
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
