import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const indices = [
  { name: "S&P 500", value: "4,567.89", change: "+1.24%", isUp: true },
  { name: "DOW", value: "35,432.10", change: "+0.87%", isUp: true },
  { name: "NASDAQ", value: "14,234.56", change: "-0.34%", isUp: false },
  { name: "RUSSELL", value: "1,987.34", change: "+0.56%", isUp: true },
];

export const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {indices.map((index) => (
        <Card key={index.name} className="glass-card p-6 hover:bg-card/70 transition-all duration-300">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">{index.name}</p>
              <p className="text-2xl font-bold mt-1 tabular-nums">{index.value}</p>
            </div>
            {index.isUp ? (
              <TrendingUp className="h-5 w-5 text-bullish" />
            ) : (
              <TrendingDown className="h-5 w-5 text-bearish" />
            )}
          </div>
          <div className="mt-3">
            <span
              className={`text-sm font-semibold tabular-nums ${
                index.isUp ? "text-bullish" : "text-bearish"
              }`}
            >
              {index.change}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
