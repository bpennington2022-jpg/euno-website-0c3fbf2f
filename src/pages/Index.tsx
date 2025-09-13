import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Zap, CheckCircle, Users, Target, Heart } from "lucide-react";
import PsychologyAnimation from "@/components/PsychologyAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            euno
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#early-access" className="text-gray-300 hover:text-primary transition-colors">
              Early Access
            </a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg"
                >
                  Join Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 hover:bg-primary/5"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-400">1,000+ early users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-400">No credit card required</span>
                </div>
              </div>
            </div>
            <div>
              <PsychologyAnimation />
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
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Therapy is Limited</h3>
                <p className="text-gray-300">
                  Once a week sessions can't account for the totality of your experience.
                </p>
              </Card>
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Apps are Fragmented</h3>
                <p className="text-gray-300">
                  Productivity, wellness, and mindfulness tools address symptoms, not root causes.
                </p>
              </Card>
              <Card className="p-6 text-left bg-gray-800/50 border-gray-700">
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
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Effortless Insights</h3>
              <p className="text-gray-300">
                No journaling required. Simply input text or audio, and our AI reveals patterns 
                in your thinking you never noticed.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
              <Brain className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Psychological OS</h3>
              <p className="text-gray-300">
                Visualize your psyche across different life areas. See how your thoughts, 
                values, and beliefs shape your reality.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gray-800/50 border-gray-700">
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
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Share Your Thoughts</h3>
              <p className="text-gray-300">
                Input text, audio, or connect external data. No structure required — just be yourself.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-100">AI Reveals Patterns</h3>
              <p className="text-gray-300">
                Our psychological OS maps your cognitive patterns across life domains with visual clarity.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
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
              euno
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

export default Index;
