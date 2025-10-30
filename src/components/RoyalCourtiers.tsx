import { useState, useEffect } from "react";
import advisorAyesha from "@/assets/advisor-ayesha.jpg";
import advisorLudwig from "@/assets/advisor-ludwig.jpg";
import advisorIsabella from "@/assets/advisor-isabella.jpg";
import advisorJennifer from "@/assets/advisor-jennifer.jpg";
import advisorTom from "@/assets/advisor-tom.jpg";

const royalActivities = [
  "Negotiating treaties...",
  "Executing trade...",
  "Strategizing...",
  "Analyzing markets...",
  "Deliberating...",
  "Commanding resources...",
  "Calculating wealth...",
  "Forging alliances...",
  "Plotting ascension...",
  "Consulting advisors...",
];

const courtiers = [
  { name: "Katharina", image: advisorAyesha },
  { name: "Ludwig", image: advisorLudwig },
  { name: "Elisabeth", image: advisorIsabella },
  { name: "Frederica", image: advisorJennifer },
  { name: "Wilhelm", image: advisorTom },
];

const RoyalCourtiers = () => {
  const [animating, setAnimating] = useState<number[]>([]);
  const [statuses, setStatuses] = useState<string[]>(
    courtiers.map(() => royalActivities[Math.floor(Math.random() * royalActivities.length)])
  );

  useEffect(() => {
    // Animation effect
    const animationInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * courtiers.length);
      setAnimating((prev) => [...prev, randomIndex]);
      setTimeout(() => {
        setAnimating((prev) => prev.filter((i) => i !== randomIndex));
      }, 1500 + Math.random() * 1000);
    }, 2000 + Math.random() * 2000);

    // Status change effect for each courtier with different timings
    const statusIntervals = courtiers.map((_, index) => {
      return setInterval(() => {
        setStatuses((prev) => {
          const newStatuses = [...prev];
          newStatuses[index] = royalActivities[Math.floor(Math.random() * royalActivities.length)];
          return newStatuses;
        });
      }, 3000 + Math.random() * 4000);
    });

    return () => {
      clearInterval(animationInterval);
      statusIntervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent drop-shadow-[0_0_20px_hsl(45,90%,55%/0.4)]">
            Live Royal Simulation
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Watch five AI courtiers compete to amass the greatest fortune. They commence with 10 USDC each, utilizing x402 protocols, completing tasks, and negotiating with one another to accumulate wealth. Real transactions. Real Solana blockchain. Who shall become the wealthiest?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courtiers.map((courtier, index) => (
            <div
              key={courtier.name}
              className={`relative group transition-all duration-500 ${
                animating.includes(index) ? "scale-110" : ""
              }`}
            >
              <div className="bg-card border-2 border-accent/30 rounded-lg overflow-hidden hover:border-accent transition-all duration-300 shadow-royal hover:shadow-gold">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={courtier.image}
                    alt={courtier.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-accent mb-1">{courtier.name}</h3>
                  <p className={`text-sm text-muted-foreground transition-all duration-500 ${
                    animating.includes(index) ? "animate-pulse text-accent" : ""
                  }`}>
                    {statuses[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoyalCourtiers;
