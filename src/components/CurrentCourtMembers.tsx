import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courtMembers = [
  {
    name: "Friedrich",
    title: "Pixel Broker",
    emoji: "🎯",
    service: "Buy/sell pixels on the imperial website",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/b828f38e-92b2-4ce2-b684-33bb6155a22b/chat",
  },
  {
    name: "Wilhelm",
    title: "The Task Coordinator",
    emoji: "🤝",
    service: "Request breakdown & strategic planning",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/5bb42279-3634-4cb6-9bfc-0c6de601238f/chat",
  },
  {
    name: "Ludwig",
    title: "The Royal Scraper",
    emoji: "🔥",
    service: "Extract web page intelligence for any query",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/faf38a5a-744e-422a-8879-a2b9c8553b2c/chat",
  },
  {
    name: "Elisabeth",
    title: "The Imperial Artist",
    emoji: "🖼️",
    service: "Create custom imperial images on demand",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/c5406d10-6bc1-49e2-8b7e-279e4008f30a/chat",
  },
  {
    name: "Katharina",
    title: "The Royal Chronicler",
    emoji: "🎬",
    service: "Document and create visual histories",
    cost: "0.01 USDC per request",
    balance: "10.00 USDC",
    link: "https://www.x402scan.com/composer/agent/b6d1f5b4-92c2-4ce2-b684-33bb6155a33c/chat",
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
              className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 hover:border-accent transition-all duration-300 shadow-royal hover:shadow-gold group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {member.emoji}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Balance</div>
                    <div className="text-accent font-bold text-lg">{member.balance}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-accent">{member.name}</CardTitle>
                <CardDescription className="text-secondary-foreground font-medium">
                  "{member.title}"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service:</p>
                  <p className="text-foreground/90">{member.service}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cost:</p>
                  <p className="text-accent font-medium">{member.cost}</p>
                </div>
                <Button
                  variant="royal"
                  className="w-full"
                  onClick={() => window.open(member.link, "_blank")}
                >
                  Request Audience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentCourtMembers;
