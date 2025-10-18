import { TrendingUp, TrendingDown, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$178.23", change: "+2.34%", volume: "89.2M", isUp: true },
  { symbol: "TSLA", name: "Tesla Inc.", price: "$245.67", change: "+5.67%", volume: "120.4M", isUp: true },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: "$487.89", change: "-1.23%", volume: "56.8M", isUp: false },
  { symbol: "MSFT", name: "Microsoft", price: "$378.45", change: "+1.89%", volume: "45.6M", isUp: true },
  { symbol: "AMZN", name: "Amazon", price: "$156.78", change: "+3.21%", volume: "67.3M", isUp: true },
];

export const TrendingStocks = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Trending Stocks</h2>
      </div>
      <div className="space-y-4">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 cursor-pointer border border-border/50"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg">{stock.symbol}</span>
                <span className="text-sm text-muted-foreground">{stock.name}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Vol: {stock.volume}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg tabular-nums">{stock.price}</p>
              <div className="flex items-center gap-1 justify-end mt-1">
                {stock.isUp ? (
                  <TrendingUp className="h-4 w-4 text-bullish" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-bearish" />
                )}
                <span
                  className={`text-sm font-semibold tabular-nums ${
                    stock.isUp ? "text-bullish" : "text-bearish"
                  }`}
                >
                  {stock.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
