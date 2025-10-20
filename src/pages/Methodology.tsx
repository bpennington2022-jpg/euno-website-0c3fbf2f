import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Layers, Lightbulb, RefreshCw, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Methodology = () => {
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
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/mission" className="text-gray-300 hover:text-white transition-colors">
                Mission
              </Link>
              <Link to="/methodology" className="text-white font-medium transition-colors">
                Methodology
              </Link>
              <Link to="/data" className="text-gray-300 hover:text-white transition-colors">
                Data
              </Link>
              <Link to="/us" className="text-gray-300 hover:text-white transition-colors">
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
              Our Methodology
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The science and philosophy behind effortless progress
            </p>
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              The Foundation
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              Real change happens through cognitive restructuring—the process of identifying and reframing 
              the thought patterns, beliefs, and narratives that shape our behavior. Traditional methods require 
              intense effort, discipline, and awareness. Euno makes this process effortless through AI-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Pattern Recognition</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our AI analyzes your inputs—text, audio, or data—to surface recurring cognitive patterns 
                    across different life domains: work, relationships, identity, and more.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Psychological Mapping</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We visualize your inner world as a "Psychological OS"—showing how beliefs, values, 
                    and thought patterns interconnect and influence your decisions.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Resonant Reframing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Instead of prescriptive advice, we offer gentle reframes and mirrors that resonate 
                    with your unique psychology, sparking natural reflection.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Subconscious Priming</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Carefully crafted stimuli—questions, prompts, visual cues—that prime your subconscious 
                    mind for gradual, sustainable change over weeks and months.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <RefreshCw className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Continuous Evolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As you input more data and interact with insights, the system evolves its understanding, 
                    refining its psychological model and deepening personalization.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-2 border-[hsl(250,70%,75%)] hover:border-[hsl(250,70%,85%)] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Natural Progress</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Change emerges naturally from awareness. By surfacing what's hidden and reframing 
                    what's stuck, progress becomes inevitable rather than forced.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Why This Works
            </h2>
            
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Cognitive Science
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Research shows that cognitive restructuring—identifying and changing thought patterns—is 
                    one of the most effective methods for lasting behavioral change. Traditional CBT requires 
                    skilled therapists and significant time. AI can now democratize this process.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute inset-8 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                      <Brain className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 flex justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl transform rotate-12 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-accent/20 rounded-xl transform -rotate-12 animate-pulse delay-75"></div>
                    <div className="absolute inset-8 bg-gradient-to-r from-accent/40 to-secondary/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="h-16 w-16 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      Subconscious Processing
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Most change happens below conscious awareness. By providing the right stimuli at the right time, 
                    we prime your subconscious to do the heavy lifting while you go about your life.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      Personalized Resonance
                    </span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Generic advice rarely sticks. By deeply understanding your unique psychological makeup, 
                    we craft insights that feel personally true—increasing the likelihood of integration and change.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-gradient-to-l from-primary/20 to-secondary/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-gradient-to-t from-secondary/20 to-primary/20 rounded-full"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-full flex items-center justify-center animate-pulse">
                      <Target className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Beyond Traditional Approaches
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-[hsl(250,70%,75%)]">Traditional therapy</strong> is limited by time, cost, and availability. 
                Sessions occur once a week, progress is slow, and most people can't afford consistent access.
              </p>
              <p>
                <strong className="text-accent">Self-help and journaling</strong> require discipline, introspection skills, 
                and structured time—resources many people don't have or can't sustain.
              </p>
              <p>
                <strong className="text-secondary">Productivity apps</strong> organize tasks but don't address the deeper 
                psychological patterns that determine whether you follow through.
              </p>
              <p className="pt-4">
                <strong className="text-[hsl(250,70%,75%)]">Euno is different.</strong> We don't require effort, expertise, or even 
                conscious participation. Simply input your thoughts when it feels natural, and let AI surface the insights 
                that spark months of subconscious restructuring. Progress becomes effortless.
              </p>
            </div>
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
              <Link to="/contact" className="text-gray-400 hover:text-gray-200">Contact</Link>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; 2025 The Epiphany Company, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Methodology;
