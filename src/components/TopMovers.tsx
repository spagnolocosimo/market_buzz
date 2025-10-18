import { ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const gainers = [
  { symbol: "COIN", name: "Coinbase", change: "+15.34%" },
  { symbol: "SNAP", name: "Snap Inc.", change: "+12.67%" },
  { symbol: "RIVN", name: "Rivian", change: "+10.89%" },
];

const losers = [
  { symbol: "NFLX", name: "Netflix", change: "-8.45%" },
  { symbol: "UBER", name: "Uber Tech", change: "-6.23%" },
  { symbol: "PYPL", name: "PayPal", change: "-5.67%" },
];

export const TopMovers = () => {
  return (
    <Card className="glass-card p-6">
      <Tabs defaultValue="gainers" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="gainers" className="data-[state=active]:bg-bullish/20">
            <ArrowUp className="h-4 w-4 mr-2" />
            Top Gainers
          </TabsTrigger>
          <TabsTrigger value="losers" className="data-[state=active]:bg-bearish/20">
            <ArrowDown className="h-4 w-4 mr-2" />
            Top Losers
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="gainers" className="space-y-3">
          {gainers.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between p-4 rounded-lg bg-bullish/5 border border-bullish/20 hover:bg-bullish/10 transition-all duration-200"
            >
              <div>
                <p className="font-bold">{stock.symbol}</p>
                <p className="text-xs text-muted-foreground">{stock.name}</p>
              </div>
              <span className="text-bullish font-bold tabular-nums">{stock.change}</span>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="losers" className="space-y-3">
          {losers.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between p-4 rounded-lg bg-bearish/5 border border-bearish/20 hover:bg-bearish/10 transition-all duration-200"
            >
              <div>
                <p className="font-bold">{stock.symbol}</p>
                <p className="text-xs text-muted-foreground">{stock.name}</p>
              </div>
              <span className="text-bearish font-bold tabular-nums">{stock.change}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};
