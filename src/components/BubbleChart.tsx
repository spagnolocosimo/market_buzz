import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BubbleData {
  symbol: string;
  name: string;
  change: number;
  volume: number;
  marketCap: number;
}

const bubbleData: BubbleData[] = [
  { symbol: "NVDA", name: "NVIDIA", change: 2.56, volume: 56800000, marketCap: 1200 },
  { symbol: "MSFT", name: "Microsoft", change: 1.89, volume: 45600000, marketCap: 2800 },
  { symbol: "AAPL", name: "Apple", change: 1.34, volume: 89200000, marketCap: 2900 },
  { symbol: "GOOGL", name: "Google", change: 0.87, volume: 34200000, marketCap: 1700 },
  { symbol: "AMZN", name: "Amazon", change: 3.21, volume: 67300000, marketCap: 1600 },
  { symbol: "TSM", name: "Taiwan Semi", change: 1.78, volume: 34500000, marketCap: 580 },
  { symbol: "AVGO", name: "Broadcom", change: -0.56, volume: 23400000, marketCap: 720 },
  { symbol: "ASML", name: "ASML", change: 2.34, volume: 12300000, marketCap: 380 },
  { symbol: "AMD", name: "AMD", change: -1.23, volume: 78900000, marketCap: 240 },
  { symbol: "IONQ", name: "IonQ", change: 6.23, volume: 32800000, marketCap: 4.5 },
  { symbol: "RGTI", name: "Rigetti", change: 8.45, volume: 45200000, marketCap: 2.8 },
  { symbol: "QBTS", name: "D-Wave", change: -2.45, volume: 28400000, marketCap: 1.2 },
  { symbol: "QUBT", name: "Quantum Computing", change: 12.34, volume: 52100000, marketCap: 0.8 },
  { symbol: "TSLA", name: "Tesla", change: 5.67, volume: 120400000, marketCap: 780 },
  { symbol: "MU", name: "Micron", change: 1.45, volume: 43200000, marketCap: 120 },
  { symbol: "CDNS", name: "Cadence", change: 0.92, volume: 15600000, marketCap: 88 },
  { symbol: "AMAT", name: "Applied Materials", change: 1.67, volume: 28900000, marketCap: 145 },
];

export const BubbleChart = () => {
  // Calculate bubble sizes and positions
  const maxVolume = Math.max(...bubbleData.map(d => d.volume));
  const maxChange = Math.max(...bubbleData.map(d => Math.abs(d.change)));

  return (
    <Card className="glass-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Market Buzz Visualization</h2>
        <p className="text-xs text-muted-foreground">
          Bubble size = Volume | Color = Performance
        </p>
      </div>
      
      <div className="relative h-[500px] bg-secondary/20 rounded-lg overflow-hidden border border-border">
        {bubbleData.map((stock, idx) => {
          const size = 40 + (stock.volume / maxVolume) * 120;
          const left = ((idx * 13) % 85) + 5;
          const top = ((idx * 17) % 75) + 10;
          const opacity = 0.6 + (Math.abs(stock.change) / maxChange) * 0.4;
          
          return (
            <div
              key={stock.symbol}
              className="absolute group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <div
                className={`w-full h-full rounded-full flex items-center justify-center border-2 ${
                  stock.change >= 0 
                    ? 'bg-bullish/20 border-bullish backdrop-blur-sm' 
                    : 'bg-bearish/20 border-bearish backdrop-blur-sm'
                }`}
                style={{ opacity }}
              >
                <div className="text-center">
                  <p className="font-bold text-xs">{stock.symbol}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-3 w-3 text-bullish" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-bearish" />
                    )}
                    <span
                      className={`text-[10px] font-semibold tabular-nums ${
                        stock.change >= 0 ? 'text-bullish' : 'text-bearish'
                      }`}
                    >
                      {stock.change > 0 ? '+' : ''}{stock.change}%
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block z-20">
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-[180px]">
                  <p className="font-bold mb-1">{stock.symbol}</p>
                  <p className="text-xs text-muted-foreground mb-2">{stock.name}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Change:</span>
                      <span className={stock.change >= 0 ? 'text-bullish' : 'text-bearish'}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Volume:</span>
                      <span>{(stock.volume / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Cap:</span>
                      <span>${stock.marketCap}B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-bullish/30 border border-bullish"></div>
          <span>Positive</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-bearish/30 border border-bearish"></div>
          <span>Negative</span>
        </div>
      </div>
    </Card>
  );
};
