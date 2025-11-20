import { useCountry } from "@/contexts/CountryContext";
import { posentiaContent } from "@/content";

const PosentiaModules = () => {
  const { country } = useCountry();
  const features = posentiaContent[country].features;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Five Features. <span className="gradient-text">Clear Value.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-medium px-4">
            Everything you need to stop leaks and save money. No extras. Just results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-spring hover:scale-105 hover:glow-primary ${
                index >= 3 ? "sm:col-start-1 md:col-start-2 lg:col-start-auto" : ""
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-base sm:text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
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

export default PosentiaModules;
