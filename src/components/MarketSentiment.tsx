import { Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const MarketSentiment = () => {
  const bullishPercentage = 68;

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Market Sentiment</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-3">
            <span className="text-sm font-medium text-bullish">Bullish</span>
            <span className="text-sm font-medium text-bearish">Bearish</span>
          </div>
          <div className="relative">
            <Progress value={bullishPercentage} className="h-3" />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">{bullishPercentage}%</span>
            <span className="text-xs text-muted-foreground">{100 - bullishPercentage}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="text-center p-4 rounded-lg bg-bullish/10 border border-bullish/20">
            <p className="text-2xl font-bold text-bullish tabular-nums">+234</p>
            <p className="text-xs text-muted-foreground mt-1">Advancing</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-bearish/10 border border-bearish/20">
            <p className="text-2xl font-bold text-bearish tabular-nums">-156</p>
            <p className="text-xs text-muted-foreground mt-1">Declining</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
