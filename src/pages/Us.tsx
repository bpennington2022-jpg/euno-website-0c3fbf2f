import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Us = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
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
              <Link to="/us" className="text-foreground font-medium transition-colors">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a dedicated group of researchers, designers, and engineers committed to making progress effortless for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Card Template */}
              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">?</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">Team Member</h3>
                  <p className="text-gray-400">Role</p>
                  <p className="text-gray-300 leading-relaxed">
                    Brief description of team member and their contribution to euno.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">?</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">Team Member</h3>
                  <p className="text-gray-400">Role</p>
                  <p className="text-gray-300 leading-relaxed">
                    Brief description of team member and their contribution to euno.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">?</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100">Team Member</h3>
                  <p className="text-gray-400">Role</p>
                  <p className="text-gray-300 leading-relaxed">
                    Brief description of team member and their contribution to euno.
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're always looking for passionate individuals who want to help build the future of progress. 
              If you're interested in joining our team, we'd love to hear from you.
            </p>
            <a 
              href="mailto:team@euno.app" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span className="relative inline-block">
                <span className="relative">e</span>
                <span className="relative -ml-1">u</span>
                <span className="relative -ml-2">n</span>
                <span className="relative -ml-1">o</span>
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-200">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-200">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-200">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; 2024 euno. Making progress effortless.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Us;
