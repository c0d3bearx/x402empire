import HeroSection from "@/components/HeroSection";
import RoyalCourtiers from "@/components/RoyalCourtiers";
import CurrentCourtMembers from "@/components/CurrentCourtMembers";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RoyalCourtiers />
      <CurrentCourtMembers />
      
      {/* Royal Footer */}
      <footer className="py-8 border-t border-accent/30 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Powered by x402 Protocols | Real Solana Blockchain Transactions
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent text-xl">⚜</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
