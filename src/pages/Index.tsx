import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Zap, CheckCircle, Users, Target, Heart } from "lucide-react";
import AppMockup from "@/components/AppMockup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              euno
            </a>
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="/" className="text-white font-medium transition-colors">
                Home
              </a>
              <a href="/mission" className="text-gray-300 hover:text-white transition-colors">
                Mission
              </a>
              <a href="/methodology" className="text-gray-300 hover:text-white transition-colors">
                Methodology
              </a>
              <a href="/us" className="text-gray-300 hover:text-white transition-colors">
                Us
              </a>
            </div>
            <Button asChild variant="ghost" className="bg-gradient-to-r from-primary to-primary/60 hover:opacity-90 text-primary-foreground">
              <a href="/contact">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Make progress{" "}
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                      effortless
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    The first progress app of its kind. euno transforms that universal ache of 
                    "things could be different" into clear, actionable insights that make change feel natural.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-center">
                <AppMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Everyone feels it: things could be{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                different
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              That restless feeling. The quiet voice saying "I just need to figure my shit out." 
              It's universal, recurring, and often unnamed. Traditional tools demand clarity you don't have, 
              discipline you can't sustain, or time you don't possess.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Therapy is Limited</h3>
                <p className="text-gray-300">
                  Once a week sessions can't account for the totality of your experience.
                </p>
              </Card>
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 hover:border-accent/50 cursor-pointer">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Apps are Fragmented</h3>
                <p className="text-gray-300">
                  Productivity, wellness, and mindfulness tools address symptoms, not root causes.
                </p>
              </Card>
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30 hover:border-secondary/50 cursor-pointer">
                <Heart className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Change Feels Effortful</h3>
                <p className="text-gray-300">
                  Real transformation requires cognitive restructuring, but current methods are inaccessible.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Progress doesn't have to be{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                effortful
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              euno uses AI to surface insights and reframe patterns so progress feels natural — not forced.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-16">
            <Card className="p-8 transition-all duration-300 bg-gray-800/50 border-gray-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer">
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Effortless Insights</h3>
              <p className="text-gray-300">
                No journaling required. Simply input text or audio, and our AI reveals patterns 
                in your thinking you never noticed.
              </p>
            </Card>
            <Card className="p-8 transition-all duration-300 bg-gray-800/50 border-gray-700 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 hover:border-accent/50 cursor-pointer">
              <Brain className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Psychological OS</h3>
              <p className="text-gray-300">
                Visualize your psyche across different life areas. See how your thoughts, 
                values, and beliefs shape your reality.
              </p>
            </Card>
            <Card className="p-8 transition-all duration-300 bg-gray-800/50 border-gray-700 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30 hover:border-secondary/50 cursor-pointer">
              <Zap className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Subconscious Priming</h3>
              <p className="text-gray-300">
                Gentle reframes and resonant stimuli that spark months of subconscious 
                restructuring while you go about your life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How euno works</h2>
            <p className="text-xl text-gray-300">
              Three simple steps to effortless progress
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-950 border-2 border-transparent bg-gradient-to-br from-[hsl(220,70%,75%)] to-[hsl(270,70%,60%)] bg-origin-border rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white" style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box', backgroundImage: 'linear-gradient(#0a0b0f, #0a0b0f), linear-gradient(135deg, hsl(220, 70%, 75%), hsl(270, 70%, 60%))' }}>
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Share Your Thoughts</h3>
              <p className="text-gray-300">
                Input text, audio, or connect external data. No structure required — just be yourself.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-950 border-2 border-transparent bg-gradient-to-br from-[hsl(220,70%,75%)] to-[hsl(270,70%,60%)] bg-origin-border rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white" style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box', backgroundImage: 'linear-gradient(#0a0b0f, #0a0b0f), linear-gradient(135deg, hsl(220, 70%, 75%), hsl(270, 70%, 60%))' }}>
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-100">AI Reveals Patterns</h3>
              <p className="text-gray-300">
                Our psychological OS maps your cognitive patterns across life domains with visual clarity.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-950 border-2 border-transparent bg-gradient-to-br from-[hsl(220,70%,75%)] to-[hsl(270,70%,60%)] bg-origin-border rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white" style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'padding-box, border-box', backgroundImage: 'linear-gradient(#0a0b0f, #0a0b0f), linear-gradient(135deg, hsl(220, 70%, 75%), hsl(270, 70%, 60%))' }}>
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Natural Progress</h3>
              <p className="text-gray-300">
                Receive resonant insights that prime your subconscious for effortless change over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="early-access" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to make progress{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                inevitable?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands discovering that change doesn't have to be effortful. 
              Get early access to the first psychological OS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder:text-gray-400 flex-1 max-w-sm"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Get Early Access
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </p>
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
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; 2025 The Epiphany Company, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
