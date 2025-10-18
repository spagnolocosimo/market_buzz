import { Calendar, TrendingUp, Megaphone, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Event {
  symbol: string;
  company: string;
  type: "earnings" | "dividend" | "announcement";
  date: string;
  title: string;
  time?: string;
}

const upcomingEvents: Event[] = [
  {
    symbol: "NVDA",
    company: "NVIDIA",
    type: "earnings",
    date: "Jan 28",
    title: "Q4 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "MSFT",
    company: "Microsoft",
    type: "earnings",
    date: "Jan 25",
    title: "Q2 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "AAPL",
    company: "Apple",
    type: "earnings",
    date: "Feb 1",
    title: "Q1 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "TSLA",
    company: "Tesla",
    type: "earnings",
    date: "Jan 24",
    title: "Q4 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "GOOGL",
    company: "Google",
    type: "earnings",
    date: "Feb 4",
    title: "Q4 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "TSM",
    company: "Taiwan Semi",
    type: "earnings",
    date: "Jan 18",
    title: "Q4 Earnings Report",
    time: "Before Market Open"
  },
  {
    symbol: "IONQ",
    company: "IonQ",
    type: "announcement",
    date: "Jan 30",
    title: "Quantum Technology Summit",
    time: "10:00 AM EST"
  },
  {
    symbol: "AMD",
    company: "AMD",
    type: "earnings",
    date: "Jan 31",
    title: "Q4 Earnings Report",
    time: "After Market Close"
  },
  {
    symbol: "ASML",
    company: "ASML",
    type: "earnings",
    date: "Jan 22",
    title: "Q4 Earnings Report",
    time: "Before Market Open"
  },
  {
    symbol: "AMZN",
    company: "Amazon",
    type: "earnings",
    date: "Feb 1",
    title: "Q4 Earnings Report",
    time: "After Market Close"
  },
];

const getEventIcon = (type: Event["type"]) => {
  switch (type) {
    case "earnings":
      return <TrendingUp className="h-4 w-4" />;
    case "dividend":
      return <DollarSign className="h-4 w-4" />;
    case "announcement":
      return <Megaphone className="h-4 w-4" />;
  }
};

const getEventBadgeColor = (type: Event["type"]) => {
  switch (type) {
    case "earnings":
      return "bg-primary/20 text-primary border-primary/30";
    case "dividend":
      return "bg-bullish/20 text-bullish border-bullish/30";
    case "announcement":
      return "bg-accent/20 text-accent-foreground border-accent/30";
  }
};

export const EventsCalendar = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Upcoming Events</h2>
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {upcomingEvents.map((event, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 cursor-pointer border border-border/50 group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{event.symbol}</span>
                <Badge variant="outline" className={`text-xs ${getEventBadgeColor(event.type)}`}>
                  <span className="mr-1">{getEventIcon(event.type)}</span>
                  {event.type}
                </Badge>
              </div>
              <span className="text-xs font-semibold text-primary">{event.date}</span>
            </div>
            
            <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{event.company}</span>
              {event.time && (
                <span className="text-xs text-muted-foreground">{event.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
