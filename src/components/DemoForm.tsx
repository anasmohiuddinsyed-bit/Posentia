import { useEffect } from "react";

const DemoForm = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Book Your <span className="gradient-text">30-Minute Deep Dive</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium px-4">
            Show us your data. We'll show you exactly where money disappears. Book your demo now.
          </p>
        </div>

        <div className="glass-panel rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/posentia" 
            style={{ minWidth: "280px", height: "500px", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
