import { Newspaper, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const newsItems = [
  {
    title: "Fed signals potential rate cuts in 2024",
    source: "Bloomberg",
    time: "2h ago",
    sentiment: "bullish",
  },
  {
    title: "Tech stocks rally on strong earnings reports",
    source: "CNBC",
    time: "3h ago",
    sentiment: "bullish",
  },
  {
    title: "Oil prices surge on supply concerns",
    source: "Reuters",
    time: "5h ago",
    sentiment: "neutral",
  },
  {
    title: "Market volatility increases amid geopolitical tensions",
    source: "Financial Times",
    time: "6h ago",
    sentiment: "bearish",
  },
];

export const NewsFeed = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Newspaper className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Market News</h2>
      </div>
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 cursor-pointer border-l-4 border-border hover:border-primary"
          >
            <h3 className="font-semibold mb-2 leading-tight">{item.title}</h3>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">{item.source}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
