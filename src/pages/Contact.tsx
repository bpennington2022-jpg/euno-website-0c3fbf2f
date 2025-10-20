import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Microscope, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
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
              <Link to="/data" className="text-foreground/80 hover:text-foreground transition-colors">
                Data
              </Link>
              <Link to="/us" className="text-foreground/80 hover:text-foreground transition-colors">
                Us
              </Link>
              <Link to="/contact" className="text-primary font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Whether you're an individual seeking self-understanding, a researcher exploring human behavior, or an organization building better environments—let's connect.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-1 gap-8">
            {/* For Individuals */}
            <Card className="p-8 bg-background/50 backdrop-blur-sm border-accent/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">For Individuals</h3>
                  <p className="text-foreground/70 mb-6">
                    Be the first to try Euno's closed beta and start seeing your inner world clearly.
                  </p>
                  <Button className="group">
                    Join Early Access
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* For Researchers */}
            <Card className="p-8 bg-background/50 backdrop-blur-sm border-accent/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">For Researchers</h3>
                  <p className="text-foreground/70 mb-6">
                    Collaborate with us to study human emotion and cognitive patterns through ethical, real-world data.
                  </p>
                  <Button className="group">
                    Partner With Euno
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* For Organizations */}
            <Card className="p-8 bg-background/50 backdrop-blur-sm border-accent/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">For Organizations</h3>
                  <p className="text-foreground/70 mb-6">
                    Use collective human insight to design environments that foster well-being and understanding.
                  </p>
                  <Button className="group">
                    Let's Collaborate
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-accent/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              euno
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Terms
              </Link>
              <Link to="/contact" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-foreground/40">
            <p>&copy; 2024 The Epiphany Company, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
