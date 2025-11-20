import { useState } from "react";
import { Upload, FileText, AlertTriangle, TrendingDown, CheckCircle2, LogIn, Brain, Zap, DollarSign, BarChart3, TrendingUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

interface AuditResult {
  leaks: number;
  anomalies: number;
  outlets: number;
  totalAtRisk: number;
  forecast: {
    date: string;
    predictedLeaks: number;
    risk: "low" | "medium" | "high";
  }[];
  topLeakPatterns: {
    type: string;
    amount: number;
    frequency: number;
  }[];
  recommendations: string[];
}

const CsvDemo = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (selectedFile) {
      setFile(selectedFile);
      setIsAnalyzing(true);
      setAuditResult(null);
      
      // Simulate ML processing
      setTimeout(() => {
        const result: AuditResult = {
          leaks: Math.floor(Math.random() * 8) + 3,
          anomalies: Math.floor(Math.random() * 5) + 2,
          outlets: Math.floor(Math.random() * 3) + 1,
          totalAtRisk: Math.floor(Math.random() * 50000) + 15000,
          forecast: Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i);
            return {
              date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              predictedLeaks: Math.floor(Math.random() * 5) + 1,
              risk: i > 4 ? (Math.random() > 0.6 ? "high" : "medium") : "low",
            };
          }),
          topLeakPatterns: [
            { type: "Duplicate Transaction Fees", amount: Math.floor(Math.random() * 5000) + 2000, frequency: Math.floor(Math.random() * 50) + 20 },
            { type: "Settlement Drift", amount: Math.floor(Math.random() * 3000) + 1000, frequency: Math.floor(Math.random() * 30) + 10 },
            { type: "Overcharge Patterns", amount: Math.floor(Math.random() * 2000) + 500, frequency: Math.floor(Math.random() * 20) + 5 },
          ],
          recommendations: [
            "Review duplicate fee charges on days 3-5 of next week",
            "Reconcile settlement discrepancies in Outlet #2",
            "Investigate overcharge pattern in payment processor integration",
          ],
        };
        setAuditResult(result);
        setIsAnalyzing(false);
      }, 2500);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.csv')) {
      setFile(droppedFile);
      setIsAnalyzing(true);
      setAuditResult(null);
      setTimeout(() => {
        const result: AuditResult = {
          leaks: Math.floor(Math.random() * 8) + 3,
          anomalies: Math.floor(Math.random() * 5) + 2,
          outlets: Math.floor(Math.random() * 3) + 1,
          totalAtRisk: Math.floor(Math.random() * 50000) + 15000,
          forecast: Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i);
            return {
              date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              predictedLeaks: Math.floor(Math.random() * 5) + 1,
              risk: i > 4 ? (Math.random() > 0.6 ? "high" : "medium") : "low",
            };
          }),
          topLeakPatterns: [
            { type: "Duplicate Transaction Fees", amount: Math.floor(Math.random() * 5000) + 2000, frequency: Math.floor(Math.random() * 50) + 20 },
            { type: "Settlement Drift", amount: Math.floor(Math.random() * 3000) + 1000, frequency: Math.floor(Math.random() * 30) + 10 },
            { type: "Overcharge Patterns", amount: Math.floor(Math.random() * 2000) + 500, frequency: Math.floor(Math.random() * 20) + 5 },
          ],
          recommendations: [
            "Review duplicate fee charges on days 3-5 of next week",
            "Reconcile settlement discrepancies in Outlet #2",
            "Investigate overcharge pattern in payment processor integration",
          ],
        };
        setAuditResult(result);
        setIsAnalyzing(false);
      }, 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] sm:text-xs font-medium text-primary tracking-wide mb-4">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>POSENTIA AI Audit Report</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            See Your Leaks <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium px-4">
            Upload your CSV. Our ML model generates an interactive audit report in seconds. See exactly where money disappears.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left: CSV Upload */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`relative glass-panel rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-dashed transition-all ${
              file ? "border-primary/50" : "border-border hover:border-primary/30"
            }`}
          >
            {!file && !isAnalyzing && (
              <div className="text-center">
                {!user && (
                  <div className="mb-6 p-4 glass-panel rounded-lg border border-primary/30">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      Sign in to securely upload and analyze your CSV files
                    </p>
                    <button
                      onClick={() => setShowAuthModal(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                      <LogIn className="w-5 h-5" />
                      Sign In or Sign Up
                    </button>
                  </div>
                )}
                {user && (
                  <>
                    <Upload className="w-16 h-16 mx-auto mb-6 text-primary opacity-50" />
                    <h3 className="text-2xl font-bold mb-2">Drop your CSV here</h3>
                    <p className="text-muted-foreground mb-6">
                      Or click to browse. We support Stripe, Square, Shopify POS, and custom formats.
                    </p>
                  </>
                )}
                {user && (
                  <label className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold cursor-pointer hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                    Choose File
                    <input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </label>
                )}
              </div>
            )}

            {file && isAnalyzing && (
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <Brain className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <div>
                  <p className="text-lg font-semibold">ML Model Analyzing {file.name}...</p>
                  <p className="text-sm text-muted-foreground mt-2">Processing transactions, detecting patterns, generating forecast</p>
                  <div className="mt-4 w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-primary animate-pulse" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            )}

            {file && !isAnalyzing && auditResult && (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">AI Audit Complete</h3>
                  <p className="text-muted-foreground font-medium">Analyzed {file.name}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-panel rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-sm">Leak Patterns</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{auditResult.leaks}</div>
                    <div className="text-xs text-muted-foreground mt-1">detected</div>
                  </div>

                  <div className="glass-panel rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-sm">Anomalies</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{auditResult.anomalies}</div>
                    <div className="text-xs text-muted-foreground mt-1">found</div>
                  </div>

                  <div className="glass-panel rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-sm">Outlets</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">{auditResult.outlets}</div>
                    <div className="text-xs text-muted-foreground mt-1">at risk</div>
                  </div>

                  <div className="glass-panel rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-sm">At Risk</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">${(auditResult.totalAtRisk / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-muted-foreground mt-1">potential loss</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      setFile(null);
                      setAuditResult(null);
                    }}
                    className="flex-1 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-smooth font-semibold"
                  >
                    Upload Another File
                  </button>
                  <button
                    onClick={() => scrollToSection("demo")}
                    className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Get My Retail Companion
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Interactive Report */}
          {auditResult && !isAnalyzing && (
            <div className="space-y-6">
              {/* 7-Day Forecast */}
              <div className="glass-panel rounded-xl sm:rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">7-Day Leak Forecast</h3>
                </div>
                <div className="space-y-3">
                  {auditResult.forecast.map((day, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        day.risk === "high"
                          ? "border-red-500/30 bg-red-500/5"
                          : day.risk === "medium"
                          ? "border-yellow-500/30 bg-yellow-500/5"
                          : "border-border/50 bg-muted/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{day.date}</span>
                        {day.risk === "high" && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{day.predictedLeaks} leaks predicted</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          day.risk === "high"
                            ? "bg-red-500/20 text-red-500"
                            : day.risk === "medium"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-green-500/20 text-green-500"
                        }`}>
                          {day.risk.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Leak Patterns */}
              <div className="glass-panel rounded-xl sm:rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Top Leak Patterns</h3>
                </div>
                <div className="space-y-3">
                  {auditResult.topLeakPatterns.map((pattern, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-muted/20">
                      <div>
                        <div className="font-semibold text-sm mb-1">{pattern.type}</div>
                        <div className="text-xs text-muted-foreground">{pattern.frequency} occurrences</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold gradient-text">${pattern.amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">at risk</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* POSENTIA Recommendations */}
              <div className="glass-panel rounded-xl sm:rounded-2xl p-6 border border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">POSENTIA RECOMMENDATIONS</h3>
                </div>
                <ul className="space-y-2">
                  {auditResult.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Right: 3D Model (when no report) */}
          {!auditResult && !isAnalyzing && (
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px] order-first lg:order-last">
              <div className="absolute inset-0 glass-panel rounded-xl sm:rounded-2xl glow-border overflow-hidden">
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
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl sm:rounded-2xl blur-2xl -z-10" />
            </div>
          )}
        </div>
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </section>
  );
};

export default CsvDemo;
