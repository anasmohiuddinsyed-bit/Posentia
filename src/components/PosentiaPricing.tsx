import { useCountry } from "@/contexts/CountryContext";
import { posentiaContent } from "@/content";
import { Check } from "lucide-react";

const PosentiaPricing = () => {
  const { country } = useCountry();
  const { plans } = posentiaContent[country].pricing;
  const features = posentiaContent[country].features;

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
    <section id="pricing" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Start Finding Leaks <span className="gradient-text">Today</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium px-4">
            No contracts. Cancel anytime. First leak report in 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <div
                key={plan.name}
                className={`relative glass-panel rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-spring hover:scale-105 ${
                  isPopular ? "glow-border" : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{plan.subtitle}</p>
                  <div className="text-4xl font-bold gradient-text mb-1">{plan.price}</div>
                  {plan.price !== "Custom" && (
                    <div className="text-sm text-muted-foreground font-medium">/month</div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Plan Includes:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-3">All 5 Core Features:</h4>
                  <ul className="space-y-2">
                    {features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground font-medium">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-smooth font-semibold mb-3"
                >
                  {plan.price === "Custom" ? "Get Custom Quote" : "Start Finding Leaks"}
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-2 rounded-lg text-sm text-primary hover:text-primary/80 transition-smooth font-medium"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>No credit card required for free audit • 14-day money-back guarantee • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default PosentiaPricing;
