import Navbar from "@/components/Navbar";
import CognivatorsIntro from "@/components/CognivatorsIntro";
import PosentiaHero from "@/components/PosentiaHero";
import PosentiaModules from "@/components/PosentiaModules";
import CsvDemo from "@/components/CsvDemo";
import PosentiaPricing from "@/components/PosentiaPricing";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CognivatorsIntro />
      <PosentiaHero />
      <PosentiaModules />
      <CsvDemo />
      <PosentiaPricing />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Index;
