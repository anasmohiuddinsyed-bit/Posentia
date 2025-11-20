const CognivatorsIntro = () => {
  return (
    <section id="platform" className="relative pt-24 sm:pt-32 pb-4 sm:pb-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border/50 bg-muted/50 text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            The Intelligence Infrastructure Company
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-foreground px-2">
              Intelligence Infrastructure for the Real Economy
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-foreground/90 max-w-5xl mx-auto px-4">
              Every organization generates hidden patterns that cost money. Most never see them. We make them visible in real time.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-4 pt-6 sm:pt-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-normal px-4">
              Cognivators ingests operational data streams: transactions, logs, workflows, staff activity, messages, and external platforms. We convert them into a real-time intelligence layer that reveals exactly what's happening inside your business and what needs to happen next.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal px-4">
              No rip-and-replace. No months of integration. Connect your existing systems. Get intelligence in days, not quarters.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-5xl mx-auto">
            <div className="glass-panel rounded-xl p-5 sm:p-6 border border-border/50 flex flex-col items-center text-center min-h-[120px] sm:min-h-[140px] justify-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-3 whitespace-nowrap">Zero-Friction</div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Deploy in days, not months</p>
            </div>
            <div className="glass-panel rounded-xl p-5 sm:p-6 border border-border/50 flex flex-col items-center text-center min-h-[120px] sm:min-h-[140px] justify-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-3 whitespace-nowrap">Real-Time</div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Live intelligence, not reports</p>
            </div>
            <div className="glass-panel rounded-xl p-5 sm:p-6 border border-border/50 flex flex-col items-center text-center min-h-[120px] sm:min-h-[140px] justify-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-3 whitespace-nowrap">Cross-Industry</div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">SMBs to enterprises</p>
            </div>
            <div className="glass-panel rounded-xl p-5 sm:p-6 border border-border/50 flex flex-col items-center text-center min-h-[120px] sm:min-h-[140px] justify-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text mb-3 whitespace-nowrap">Data-Agnostic</div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Works with any system</p>
            </div>
          </div>

          {/* Visual separator */}
          <div className="pt-6 sm:pt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognivatorsIntro;
