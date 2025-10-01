import { Star, MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TopCompaniesList = () => {
  const companies = [
    {
      rank: 1,
      name: "Keller Williams Realty",
      rating: 4.8,
      reviews: 2847,
      agents: 180000,
      locations: "All 50 States",
      specialties: ["Residential", "Commercial", "Luxury"],
      description:
        "Keller Williams Realty is one of the largest real estate franchises in the world. Founded in 1983, the company has grown to include over 180,000 associates across the United States. Known for their agent-centric approach and comprehensive training programs.",
    },
    {
      rank: 2,
      name: "Coldwell Banker Real Estate",
      rating: 4.7,
      reviews: 2156,
      agents: 92000,
      locations: "49 States",
      specialties: ["Residential", "Global Luxury"],
      description:
        "Founded in 1906, Coldwell Banker is one of the oldest and most established real estate brands. They're known for their global reach, luxury property expertise, and cutting-edge technology platform. The company serves clients in nearly every U.S. state.",
    },
    {
      rank: 3,
      name: "RE/MAX",
      rating: 4.7,
      reviews: 1923,
      agents: 140000,
      locations: "All 50 States",
      specialties: ["Residential", "Commercial"],
      description:
        "RE/MAX is a global real estate franchise with a presence in over 110 countries. In the U.S., they have thousands of independently owned offices. RE/MAX agents are known for high productivity and extensive market knowledge.",
    },
    {
      rank: 4,
      name: "Century 21",
      rating: 4.6,
      reviews: 1745,
      agents: 131000,
      locations: "All 50 States",
      specialties: ["Residential", "Relocation"],
      description:
        "Century 21 Real Estate has been a household name since 1971. With a strong focus on customer service and community involvement, they maintain a network of independently owned franchises across the United States.",
    },
    {
      rank: 5,
      name: "Compass",
      rating: 4.8,
      reviews: 1534,
      agents: 28000,
      locations: "Major Metro Areas",
      specialties: ["Luxury", "Technology-Driven"],
      description:
        "Compass is a modern real estate technology company that pairs the best agents with innovative tools. While newer to the market, they've quickly grown to become a significant player, particularly in urban markets.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            Top 5 Real Estate Companies
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Based on agent count, market presence, and customer reviews
          </p>

          <div className="space-y-6">
            {companies.map((company) => (
              <div
                key={company.rank}
                className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {company.rank}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {company.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="font-semibold text-foreground">{company.rating}</span>
                          <span>({company.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{company.agents.toLocaleString()} agents</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{company.locations}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {company.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-primary hover:bg-primary/90">
                      View Agents
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="group">
              View All Companies
              <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompaniesList;
