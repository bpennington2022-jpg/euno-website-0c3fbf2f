import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Data = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              euno
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/mission" className="text-foreground/80 hover:text-foreground transition-colors">
                Mission
              </Link>
              <Link to="/methodology" className="text-foreground/80 hover:text-foreground transition-colors">
                Methodology
              </Link>
              <Link to="/data" className="text-foreground font-medium transition-colors">
                Data
              </Link>
              <Link to="/us" className="text-foreground/80 hover:text-foreground transition-colors">
                Us
              </Link>
              <Button asChild>
                <Link to="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Data & Research
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our comprehensive research data and findings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Data;
