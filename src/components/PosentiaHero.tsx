import { ArrowRight, Calendar } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { posentiaContent } from "@/content";

const PosentiaHero = () => {
  const { country } = useCountry();
  const content = posentiaContent[country].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="posentia" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-t border-border/50">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge - Centered at top */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] sm:text-xs font-medium text-primary tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Powered by Cognivators
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
                Introducing POSENTIA
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-foreground/90">
                Your Retail Companion
              </p>
            </div>

            {/* Badge 2 */}
            <div className="text-center lg:text-left">
              <span className="inline-block glass-panel rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-primary">
                {content.badge}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {content.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
              {content.subheadline}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
              POSENTIA is our applied intelligence layer built on Cognivators' infrastructure. It reads your operational data, finds leaks and inefficiencies, and turns them into clear, actionable insights. Designed specifically for restaurants, retail, and hospitality businesses who need to see exactly where money disappears—and how to stop it.
            </p>

            {/* Region Toggle Note */}
            <div className="glass-panel rounded-xl p-4 sm:p-5 border border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Switch between US and UAE above to see region-specific intelligence, features, and pricing.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button 
                onClick={() => scrollToSection("demo")}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full text-sm sm:text-base font-semibold transition-bounce hover:scale-105 glow-primary overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {content.primaryCta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="group px-6 py-3 sm:px-8 sm:py-4 glass-panel rounded-full text-sm sm:text-base font-semibold border border-border hover:border-primary/50 transition-smooth hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {content.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
            <div className="absolute inset-0 glass-panel rounded-2xl sm:rounded-3xl glow-border overflow-hidden">
              <div className="relative w-full h-full" style={{ clipPath: "inset(0 0 0 15%)" }}>
                <model-viewer
                  src="/POS_FINAL.glb"
                  autoplay
                  exposure="1.2"
                  shadow-intensity="1.5"
                  camera-orbit="0deg 80deg 4m"
                  field-of-view="45deg"
                  disable-zoom
                  interaction-policy="allow-when-focused"
                  style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    transform: "translateX(-15%)",
                  }}
                />
              </div>
            </div>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl sm:rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosentiaHero;
