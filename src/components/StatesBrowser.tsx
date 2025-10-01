import { MapPin } from "lucide-react";

const StatesBrowser = () => {
  const states = [
    { name: "Alabama", count: 245 },
    { name: "Alaska", count: 89 },
    { name: "Arizona", count: 312 },
    { name: "Arkansas", count: 156 },
    { name: "California", count: 892 },
    { name: "Colorado", count: 267 },
    { name: "Connecticut", count: 178 },
    { name: "Delaware", count: 67 },
    { name: "Florida", count: 756 },
    { name: "Georgia", count: 445 },
    { name: "Hawaii", count: 134 },
    { name: "Idaho", count: 123 },
    { name: "Illinois", count: 398 },
    { name: "Indiana", count: 287 },
    { name: "Iowa", count: 189 },
    { name: "Kansas", count: 167 },
    { name: "Kentucky", count: 198 },
    { name: "Louisiana", count: 234 },
    { name: "Maine", count: 112 },
    { name: "Maryland", count: 289 },
    { name: "Massachusetts", count: 356 },
    { name: "Michigan", count: 367 },
    { name: "Minnesota", count: 298 },
    { name: "Mississippi", count: 145 },
    { name: "Missouri", count: 276 },
    { name: "Montana", count: 98 },
    { name: "Nebraska", count: 134 },
    { name: "Nevada", count: 187 },
    { name: "New Hampshire", count: 123 },
    { name: "New Jersey", count: 423 },
    { name: "New Mexico", count: 134 },
    { name: "New York", count: 612 },
    { name: "North Carolina", count: 489 },
    { name: "North Dakota", count: 76 },
    { name: "Ohio", count: 378 },
    { name: "Oklahoma", count: 189 },
    { name: "Oregon", count: 234 },
    { name: "Pennsylvania", count: 445 },
    { name: "Rhode Island", count: 89 },
    { name: "South Carolina", count: 267 },
    { name: "South Dakota", count: 67 },
    { name: "Tennessee", count: 312 },
    { name: "Texas", count: 978 },
    { name: "Utah", count: 178 },
    { name: "Vermont", count: 87 },
    { name: "Virginia", count: 389 },
    { name: "Washington", count: 345 },
    { name: "West Virginia", count: 98 },
    { name: "Wisconsin", count: 267 },
    { name: "Wyoming", count: 54 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            Browse Real Estate Brokerages By State
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Find top-rated real estate companies in your state
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {states.map((state) => (
              <a
                key={state.name}
                href={`#${state.name.toLowerCase()}`}
                className="group bg-card border border-border rounded-lg p-4 hover:shadow-card-hover transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {state.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2 py-1">
                    {state.count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesBrowser;
