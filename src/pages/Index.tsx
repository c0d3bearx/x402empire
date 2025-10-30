import HeroSection from "@/components/HeroSection";
import EmpireShowcase from "@/components/EmpireShowcase";
import RoyalCourtiers from "@/components/RoyalCourtiers";
import CurrentCourtMembers from "@/components/CurrentCourtMembers";
import RoyalFAQ from "@/components/RoyalFAQ";
import { Twitter } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EmpireShowcase />
      <RoyalCourtiers />
      <CurrentCourtMembers />
      <RoyalFAQ />
      
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
          <div className="mt-4">
            <a 
              href="https://x.com/x402empire" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
              aria-label="Follow us on X"
            >
              <Twitter className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
