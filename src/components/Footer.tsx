import { useCountry } from "@/contexts/CountryContext";
import { posentiaContent } from "@/content";
import { Instagram } from "lucide-react";

const Footer = () => {
  const { country } = useCountry();
  const { footerNote } = posentiaContent[country];

  const cognivatorsInstagram = "https://www.instagram.com/cognivators?igsh=MTBodndlcWNtdnFlNA%3D%3D&utm_source=qr";
  const posentiaTikTok = "https://www.tiktok.com/@posentia.ai?_r=1&_t=ZT-91XwJDejEZZ";
  const posentiaInstagram = country === "US" 
    ? "https://www.instagram.com/posentia.ai?igsh=MXN0endseWZvcWVoNQ%3D%3D&utm_source=qr"
    : "https://www.instagram.com/posentia.ae?igsh=cDJsM29xbHRidjdx&utm_source=qr";

  return (
    <footer className="relative border-t border-border/50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left: Logo + Mission */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text">Cognivators</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Cognivators is the intelligence infrastructure company building real-time intelligence layers on top of operational data.
            </p>
          </div>

          {/* Center: Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("platform");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("posentia");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  POSENTIA
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={cognivatorsInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Cognivators</span>
                </a>
              </li>
              <li>
                <a 
                  href={posentiaInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>POSENTIA</span>
                </a>
              </li>
              <li>
                <a 
                  href={posentiaTikTok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span>POSENTIA TikTok</span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:hello@cognivators.com" className="hover:text-primary transition-colors">
                    hello@cognivators.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-border/50 text-xs text-muted-foreground text-center">
          <p>{footerNote}</p>
          <p className="mt-2">© 2025 Cognivators. All rights reserved. • Privacy Policy • Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
