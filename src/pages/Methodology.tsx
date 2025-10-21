import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Layers, Lightbulb, RefreshCw, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import InsightPhone from "@/components/InsightPhone";

const Methodology = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              euno
            </Link>
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/mission" className="text-gray-300 hover:text-white transition-colors">
                Mission
              </Link>
              <Link to="/methodology" className="text-white font-medium transition-colors">
                Methodology
              </Link>
              <Link to="/us" className="text-gray-300 hover:text-white transition-colors">
                Us
              </Link>
            </div>
            <Button asChild variant="ghost" className="bg-gradient-to-r from-primary to-primary/60 hover:opacity-90 text-primary-foreground">
              <Link to="/contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Our Methodology
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Epiphany psychology imbued into technology. A fundamentally different approach to cognitive change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Methodological Insight */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Epiphany Psychology
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Psychology has long understood that a single, resonant stimulus can spark months of subconscious restructuring. 
                An epiphany. A reframe that clicks. A mirror held up at the right moment. Change that, in practice, feels natural—if not inevitable.
              </p>
              <p>
                <strong className="text-secondary">Epiphany psychology</strong> is the understanding that cognitive transformation 
                doesn't require grinding through exercises or willpower. It requires <em>resonance</em>—the right insight, delivered in 
                the right way, at the right time.
              </p>
              <p className="text-xl text-white pt-4">
                Our methodology translates this psychological principle into a scalable, technological system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technological Implementation */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Making Resonance Effortless
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Our core innovation: <strong className="text-white">we make accessing resonant stimuli feel effortless</strong>.
              </p>
              <p>
                Through AI-driven pattern recognition, psychological mapping, and personalized reframing, we surface the exact insights 
                your mind needs to begin restructuring—without requiring you to consciously work for them.
              </p>
              <p>
                This is a technological advancement we continue to refine through ongoing UX and psychology research, 
                solving the barriers that have kept cognitive change from scaling.
              </p>
            </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer w-full max-w-md">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Pattern Recognition</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our AI analyzes your inputs— text, audio, or data— to surface recurring cognitive patterns 
                    across different life domains: work, relationships, identity, and more.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 cursor-pointer w-full max-w-md">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Psychological Mapping</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We visualize your inner world as a "Psychological OS"— showing how beliefs, values, 
                    and thought patterns interconnect and influence your decisions.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-secondary/20 cursor-pointer md:col-span-2 lg:col-span-2 w-full">
                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
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
                  <div className="flex justify-center md:justify-end shrink-0">
                    <InsightPhone />
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Subconscious Priming</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Carefully crafted stimuli— questions, prompts, visual cues— that prime your subconscious 
                    mind for gradual, sustainable change over weeks and months.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 cursor-pointer">
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

              <Card className="p-8 bg-gray-950 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 cursor-pointer">
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

      {/* Methodological Novelty */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Why This Methodology Is Novel
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Existing approaches to change—therapy, coaching, self-help—operate within a paradigm that assumes cognitive change 
                <em>must</em> be effortful. You must work for it. Schedule it. Pay for it. Grind through it.
              </p>
              <p>
                Epiphany psychology runs counter to this paradigm. It recognizes that the most profound cognitive shifts often feel 
                effortless—a sudden clarity, a reframe that clicks, a perspective that reshapes everything downstream.
              </p>
              <p className="text-xl text-white pt-4">
                Our methodology is novel because we've made this psychological principle <em>scalable</em>.
              </p>
              <p>
                Through AI-driven personalization and careful UX design, we deliver resonant stimuli consistently and effortlessly. 
                This isn't therapy made cheaper or meditation made easier—it's a fundamentally different approach to cognitive change.
              </p>
              <p>
                This methodology extends across any domain where cognition shapes experience: relationships, work, identity, health. 
                It's not limited to one vertical—it's a platform for personal evolution itself.
              </p>
              <p className="text-xl text-white pt-4">
                <strong className="text-secondary">That</strong> is why our methodology matters. It's not just a feature. It's the foundation 
                of everything we build.
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
