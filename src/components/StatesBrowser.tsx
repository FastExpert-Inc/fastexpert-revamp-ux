const StatesBrowser = () => {
  const states = [
    { name: "Alabama", companies: 245, agents: 1823, reviews: 8456 },
    { name: "Alaska", companies: 89, agents: 542, reviews: 2134 },
    { name: "Arizona", companies: 312, agents: 2456, reviews: 12345 },
    { name: "Arkansas", companies: 156, agents: 987, reviews: 4567 },
    { name: "California", companies: 892, agents: 6789, reviews: 34567 },
    { name: "Colorado", companies: 267, agents: 1987, reviews: 9876 },
    { name: "Connecticut", companies: 178, agents: 1234, reviews: 6789 },
    { name: "Delaware", companies: 67, agents: 456, reviews: 1987 },
    { name: "Florida", companies: 756, agents: 5432, reviews: 28765 },
    { name: "Georgia", companies: 445, agents: 3456, reviews: 16789 },
    { name: "Hawaii", companies: 134, agents: 876, reviews: 4321 },
    { name: "Idaho", companies: 123, agents: 765, reviews: 3456 },
    { name: "Illinois", companies: 398, agents: 2987, reviews: 14567 },
    { name: "Indiana", companies: 287, agents: 2123, reviews: 10234 },
    { name: "Iowa", companies: 189, agents: 1345, reviews: 6234 },
    { name: "Kansas", companies: 167, agents: 1123, reviews: 5432 },
    { name: "Kentucky", companies: 198, agents: 1456, reviews: 6987 },
    { name: "Louisiana", companies: 234, agents: 1765, reviews: 8234 },
    { name: "Maine", companies: 112, agents: 687, reviews: 3234 },
    { name: "Maryland", companies: 289, agents: 2234, reviews: 10987 },
    { name: "Massachusetts", companies: 356, agents: 2765, reviews: 13456 },
    { name: "Michigan", companies: 367, agents: 2876, reviews: 13987 },
    { name: "Minnesota", companies: 298, agents: 2345, reviews: 11234 },
    { name: "Mississippi", companies: 145, agents: 934, reviews: 4456 },
    { name: "Missouri", companies: 276, agents: 2098, reviews: 9876 },
    { name: "Montana", companies: 98, agents: 612, reviews: 2876 },
    { name: "Nebraska", companies: 134, agents: 876, reviews: 4123 },
    { name: "Nevada", companies: 187, agents: 1432, reviews: 6876 },
    { name: "New Hampshire", companies: 123, agents: 765, reviews: 3678 },
    { name: "New Jersey", companies: 423, agents: 3234, reviews: 15678 },
    { name: "New Mexico", companies: 134, agents: 876, reviews: 4234 },
    { name: "New York", companies: 612, agents: 4876, reviews: 24567 },
    { name: "North Carolina", companies: 489, agents: 3765, reviews: 18234 },
    { name: "North Dakota", companies: 76, agents: 487, reviews: 2123 },
    { name: "Ohio", companies: 378, agents: 2876, reviews: 13876 },
    { name: "Oklahoma", companies: 189, agents: 1345, reviews: 6345 },
    { name: "Oregon", companies: 234, agents: 1765, reviews: 8456 },
    { name: "Pennsylvania", companies: 445, agents: 3456, reviews: 16876 },
    { name: "Rhode Island", companies: 89, agents: 567, reviews: 2678 },
    { name: "South Carolina", companies: 267, agents: 1987, reviews: 9456 },
    { name: "South Dakota", companies: 67, agents: 432, reviews: 1876 },
    { name: "Tennessee", companies: 312, agents: 2456, reviews: 11876 },
    { name: "Texas", companies: 978, agents: 7234, reviews: 36789 },
    { name: "Utah", companies: 178, agents: 1234, reviews: 5987 },
    { name: "Vermont", companies: 87, agents: 543, reviews: 2456 },
    { name: "Virginia", companies: 389, agents: 2987, reviews: 14234 },
    { name: "Washington", companies: 345, agents: 2654, reviews: 12876 },
    { name: "West Virginia", companies: 98, agents: 612, reviews: 2987 },
    { name: "Wisconsin", companies: 267, agents: 1987, reviews: 9567 },
    { name: "Wyoming", companies: 54, agents: 345, reviews: 1567 },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {states.map((state) => (
              <div
                key={state.name}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <a
                  href={`#${state.name.toLowerCase()}`}
                  className="text-primary hover:underline font-semibold text-lg block mb-3"
                >
                  {state.name}
                </a>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Companies:</span>
                    <span className="font-medium">{state.companies.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agents:</span>
                    <span className="font-medium">{state.agents.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews:</span>
                    <span className="font-medium">{state.reviews.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesBrowser;
