import { Link } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { country, setCountry } = useCountry();
  const { user, logout } = useAuth();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-xl border-b border-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
            <img 
              src="/cognivators-logo.png" 
              alt="Cognivators" 
              className="h-6 sm:h-8 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-base sm:text-xl font-bold text-background">
              Cognivators
            </span>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("platform")}
              className="text-sm font-medium text-background/70 hover:text-background transition-colors"
            >
              Platform
            </button>
            <button
              onClick={() => scrollToSection("posentia")}
              className="text-sm font-medium text-background/70 hover:text-background transition-colors"
            >
              POSENTIA
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium text-background hover:text-background/80 transition-colors font-semibold"
            >
              Free AI Audit
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-background/70 hover:text-background transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-background/70 hover:text-background transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Right: Auth + Country Toggle */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-2 text-sm text-background/70">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{user.name}</span>
                <button
                  onClick={logout}
                  className="p-2 hover:text-background transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-background/10 backdrop-blur-sm rounded-full p-0.5 sm:p-1 border border-background/20">
              <button
                onClick={() => setCountry("US")}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold transition-all ${
                  country === "US"
                    ? "bg-background text-foreground shadow-lg"
                    : "text-background/70 hover:text-background"
                }`}
              >
                US
              </button>
              <button
                onClick={() => setCountry("UAE")}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold transition-all ${
                  country === "UAE"
                    ? "bg-background text-foreground shadow-lg"
                    : "text-background/70 hover:text-background"
                }`}
              >
                UAE
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
