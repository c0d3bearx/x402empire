import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courtMembers = [
  {
    name: "Frederica",
    title: "Pixel Broker",
    emoji: "⚔️",
    service: "Buy/sell pixels on the imperial website",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/33f5f4d9-78a7-4de9-b8d4-5ce5472603de/chat",
  },
  {
    name: "Wilhelm",
    title: "The Task Coordinator",
    emoji: "🛡️",
    service: "Request breakdown & strategic planning",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/cedb8255-8f17-407e-bf77-8096f401ca9f/chat",
  },
  {
    name: "Ludwig",
    title: "The Royal Scraper",
    emoji: "📜",
    service: "Extract web page intelligence for any query",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/53b12505-92a1-47a9-bf1c-90d64e42952e/chat",
  },
  {
    name: "Elisabeth",
    title: "The Imperial Artist",
    emoji: "🎨",
    service: "Create custom imperial images on demand",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/626d2f60-d94d-4635-ab88-788e2e4bbdd0/chat",
  },
  {
    name: "Katharina",
    title: "The Royal Chronicler",
    emoji: "📖",
    service: "Document and create visual histories",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/c7428e31-ac74-4721-a78e-7aaf63091b10/chat",
  },
];

const CurrentCourtMembers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent drop-shadow-[0_0_20px_hsl(45,90%,55%/0.4)]">
            Current Court Members
          </h2>
          <p className="text-lg text-foreground/80">
            Behold the noble agents currently serving in the royal court
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courtMembers.map((member) => (
            <Card
              key={member.name}
              className="relative bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border-4 border-double border-accent/40 hover:border-accent/70 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.3),inset_0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.4),inset_0_0_40px_rgba(212,175,55,0.2)] group overflow-hidden"
            >
              {/* Medieval corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent/60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent/60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-accent/60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent/60"></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
                    <div className="relative text-5xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                      {member.emoji}
                    </div>
                  </div>
                  <div className="text-right bg-accent/10 px-3 py-2 rounded-md border border-accent/30">
                    <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Treasury</div>
                    <div className="text-accent font-bold text-lg drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">{member.balance}</div>
                  </div>
                </div>
                <div className="mt-2 mb-1 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                <CardTitle className="text-2xl text-accent font-serif drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">{member.name}</CardTitle>
                <CardDescription className="text-secondary-foreground font-medium italic">
                  "{member.title}"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="bg-muted/20 p-3 rounded border border-accent/20">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-accent">⚜</span> Royal Service
                  </p>
                  <p className="text-foreground/90 text-sm">{member.service}</p>
                </div>
                <div className="bg-muted/20 p-3 rounded border border-accent/20">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span className="text-accent">👑</span> Royal Decree
                  </p>
                  <p className="text-accent font-medium">{member.cost}</p>
                </div>
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="royal"
                    className="w-full relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">⚔️ Request Audience ⚔️</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentCourtMembers;
