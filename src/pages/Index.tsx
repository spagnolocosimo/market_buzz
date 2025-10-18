import { BarChart3 } from "lucide-react";
import { MarketOverview } from "@/components/MarketOverview";
import { TrendingStocks } from "@/components/TrendingStocks";
import { NewsFeed } from "@/components/NewsFeed";
import { MarketSentiment } from "@/components/MarketSentiment";
import { TopMovers } from "@/components/TopMovers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Market Buzz</h1>
              <p className="text-xs text-muted-foreground">Real-time market intelligence</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Market Overview */}
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Market Overview
            </h2>
            <MarketOverview />
          </section>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TrendingStocks />
              <NewsFeed />
            </div>
            <div className="space-y-6">
              <MarketSentiment />
              <TopMovers />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-muted-foreground text-center">
            Market data delayed by 15 minutes. For informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
