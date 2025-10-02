import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SortColumn = "sales" | "volume" | null;
type SortDirection = "asc" | "desc";

const StatesBrowser = () => {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const statesData = [
    { name: "Alabama", companies: 245, agents: 1823, reviews: 8456, sales: 4521, volume: 1250000000 },
    { name: "Alaska", companies: 89, agents: 542, reviews: 2134, sales: 1234, volume: 450000000 },
    { name: "Arizona", companies: 312, agents: 2456, reviews: 12345, sales: 8765, volume: 2850000000 },
    { name: "Arkansas", companies: 156, agents: 987, reviews: 4567, sales: 2876, volume: 890000000 },
    { name: "California", companies: 892, agents: 6789, reviews: 34567, sales: 45678, volume: 15750000000 },
    { name: "Colorado", companies: 267, agents: 1987, reviews: 9876, sales: 6543, volume: 2340000000 },
    { name: "Connecticut", companies: 178, agents: 1234, reviews: 6789, sales: 4321, volume: 1650000000 },
    { name: "Delaware", companies: 67, agents: 456, reviews: 1987, sales: 1543, volume: 520000000 },
    { name: "Florida", companies: 756, agents: 5432, reviews: 28765, sales: 32456, volume: 11200000000 },
    { name: "Georgia", companies: 445, agents: 3456, reviews: 16789, sales: 12345, volume: 4250000000 },
    { name: "Hawaii", companies: 134, agents: 876, reviews: 4321, sales: 3456, volume: 1850000000 },
    { name: "Idaho", companies: 123, agents: 765, reviews: 3456, sales: 2987, volume: 980000000 },
    { name: "Illinois", companies: 398, agents: 2987, reviews: 14567, sales: 9876, volume: 3450000000 },
    { name: "Indiana", companies: 287, agents: 2123, reviews: 10234, sales: 6789, volume: 2150000000 },
    { name: "Iowa", companies: 189, agents: 1345, reviews: 6234, sales: 4234, volume: 1320000000 },
    { name: "Kansas", companies: 167, agents: 1123, reviews: 5432, sales: 3654, volume: 1120000000 },
    { name: "Kentucky", companies: 198, agents: 1456, reviews: 6987, sales: 4567, volume: 1450000000 },
    { name: "Louisiana", companies: 234, agents: 1765, reviews: 8234, sales: 5432, volume: 1780000000 },
    { name: "Maine", companies: 112, agents: 687, reviews: 3234, sales: 2345, volume: 750000000 },
    { name: "Maryland", companies: 289, agents: 2234, reviews: 10987, sales: 7654, volume: 2980000000 },
    { name: "Massachusetts", companies: 356, agents: 2765, reviews: 13456, sales: 8765, volume: 3650000000 },
    { name: "Michigan", companies: 367, agents: 2876, reviews: 13987, sales: 8976, volume: 3120000000 },
    { name: "Minnesota", companies: 298, agents: 2345, reviews: 11234, sales: 7543, volume: 2650000000 },
    { name: "Mississippi", companies: 145, agents: 934, reviews: 4456, sales: 3123, volume: 980000000 },
    { name: "Missouri", companies: 276, agents: 2098, reviews: 9876, sales: 6789, volume: 2250000000 },
    { name: "Montana", companies: 98, agents: 612, reviews: 2876, sales: 2123, volume: 680000000 },
    { name: "Nebraska", companies: 134, agents: 876, reviews: 4123, sales: 2876, volume: 890000000 },
    { name: "Nevada", companies: 187, agents: 1432, reviews: 6876, sales: 5876, volume: 2450000000 },
    { name: "New Hampshire", companies: 123, agents: 765, reviews: 3678, sales: 2654, volume: 920000000 },
    { name: "New Jersey", companies: 423, agents: 3234, reviews: 15678, sales: 11234, volume: 4850000000 },
    { name: "New Mexico", companies: 134, agents: 876, reviews: 4234, sales: 2987, volume: 950000000 },
    { name: "New York", companies: 612, agents: 4876, reviews: 24567, sales: 28765, volume: 12500000000 },
    { name: "North Carolina", companies: 489, agents: 3765, reviews: 18234, sales: 14567, volume: 5120000000 },
    { name: "North Dakota", companies: 76, agents: 487, reviews: 2123, sales: 1654, volume: 520000000 },
    { name: "Ohio", companies: 378, agents: 2876, reviews: 13876, sales: 9234, volume: 3250000000 },
    { name: "Oklahoma", companies: 189, agents: 1345, reviews: 6345, sales: 4321, volume: 1350000000 },
    { name: "Oregon", companies: 234, agents: 1765, reviews: 8456, sales: 5678, volume: 2150000000 },
    { name: "Pennsylvania", companies: 445, agents: 3456, reviews: 16876, sales: 11876, volume: 4320000000 },
    { name: "Rhode Island", companies: 89, agents: 567, reviews: 2678, sales: 1987, volume: 720000000 },
    { name: "South Carolina", companies: 267, agents: 1987, reviews: 9456, sales: 6234, volume: 2350000000 },
    { name: "South Dakota", companies: 67, agents: 432, reviews: 1876, sales: 1432, volume: 480000000 },
    { name: "Tennessee", companies: 312, agents: 2456, reviews: 11876, sales: 7876, volume: 2850000000 },
    { name: "Texas", companies: 978, agents: 7234, reviews: 36789, sales: 42345, volume: 14500000000 },
    { name: "Utah", companies: 178, agents: 1234, reviews: 5987, sales: 4567, volume: 1850000000 },
    { name: "Vermont", companies: 87, agents: 543, reviews: 2456, sales: 1765, volume: 580000000 },
    { name: "Virginia", companies: 389, agents: 2987, reviews: 14234, sales: 9876, volume: 3850000000 },
    { name: "Washington", companies: 345, agents: 2654, reviews: 12876, sales: 8654, volume: 3450000000 },
    { name: "West Virginia", companies: 98, agents: 612, reviews: 2987, sales: 2234, volume: 720000000 },
    { name: "Wisconsin", companies: 267, agents: 1987, reviews: 9567, sales: 6543, volume: 2250000000 },
    { name: "Wyoming", companies: 54, agents: 345, reviews: 1567, sales: 1234, volume: 420000000 },
  ];

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const sortedStates = [...statesData].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (sortDirection === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

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

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">State</TableHead>
                  <TableHead 
                    className="font-semibold text-right cursor-pointer hover:text-primary"
                    onClick={() => handleSort("sales")}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Sales
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead 
                    className="font-semibold text-right cursor-pointer hover:text-primary"
                    onClick={() => handleSort("volume")}
                  >
                    <div className="flex items-center justify-end gap-1">
                      Volume
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="font-semibold text-right">Companies</TableHead>
                  <TableHead className="font-semibold text-right">Agents</TableHead>
                  <TableHead className="font-semibold text-right">Reviews</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedStates.map((state) => (
                  <TableRow key={state.name} className="cursor-pointer">
                    <TableCell className="font-medium">
                      <a
                        href={`#${state.name.toLowerCase()}`}
                        className="text-primary hover:underline"
                      >
                        {state.name}
                      </a>
                    </TableCell>
                    <TableCell className="text-right">{state.sales.toLocaleString()}</TableCell>
                    <TableCell className="text-right">${(state.volume / 1000000).toFixed(0)}M</TableCell>
                    <TableCell className="text-right">{state.companies.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{state.agents.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{state.reviews.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesBrowser;
