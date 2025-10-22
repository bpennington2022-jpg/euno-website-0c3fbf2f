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
              Effortless.
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              We know. It's a striking word to use when talking about psychological change.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              The entire paradigm of the change industry (especially within psychology) assumes that change <em>must</em> be effortful. 
              That belief is precisely why the problem of lasting personal change remains unsolved, despite countless solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Paradigm Shift */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              A Paradigm Shift
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Paradigm */}
              <Card className="p-8 bg-gray-950/50 border-gray-800/50 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-300">Current Paradigm</h3>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full" />
                </div>
                
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-gray-300">Change must be effortful.</strong>
                  </p>
                  <p>
                    The prevailing belief is that meaningful psychological change requires grinding through exercises, 
                    maintaining strict discipline, and investing significant time and money.
                  </p>
                  <p>
                    Even solutions that <em>do</em> address cognition (therapy, self-help, journaling) remain inaccessible 
                    at scale because they demand sustained effort, introspection skills, and resources most people lack.
                  </p>
                  <p className="text-gray-300 pt-2">
                    This is why lasting change remains out of reach for most people, despite countless solutions.
                  </p>
                </div>
              </Card>

              {/* Our Paradigm */}
              <Card className="p-8 bg-gray-900/50 border-primary/20 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Paradigm</h3>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
                </div>
                
                <div className="relative space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-white">Change can be effortless.</strong>
                  </p>
                  <p>
                    A single resonant stimulus (an epiphany, a reframe that clicks, a mirror held up at the right moment) can 
                    spark months of natural, subconscious restructuring.
                  </p>
                  <p>
                    This is <strong className="text-secondary">epiphany psychology</strong>: cognitive transformation doesn't 
                    require willpower or grinding. It requires <em>resonance</em>, the right insight delivered at the right time.
                  </p>
                  <p className="text-white pt-2">
                    Through AI, we make this kind of change accessible and effortless for everyone.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Our Approach
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Our core innovation derives directly from our core insight: <strong className="text-white">we make accessing 
                resonant stimuli as effortless as opening up Instagram</strong>.
              </p>
              <p>
                Through AI-driven pattern recognition, psychological mapping, and personalized reframing, we surface the exact insights 
                your mind needs to begin restructuring without requiring you to consciously work for them.
              </p>
              <p>
                This solves the core barriers keeping cognitive change from scaling. It's a technological advancement we will continue 
                to refine through ongoing UX and psychology research.
              </p>
              <p className="text-xl text-white pt-4">
                This is not incremental improvement. This is a paradigm shift.
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
                    Our AI analyzes your inputs (text, audio, or data) to surface recurring cognitive patterns 
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
                    We visualize your inner world as a "Psychological OS," showing how beliefs, values, 
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
                    Carefully crafted stimuli (questions, prompts, visual cues) that prime your subconscious 
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

      {/* Why We're Disruptive */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Why This Is Disruptive
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The change industry is crowded. AI therapists exist. Traditional therapy exists. Behavior change apps, mental health apps, 
                meditation apps, astrology apps: they all exist.
              </p>
              <p>
                <strong className="text-white">And yet, the problem remains unsolved.</strong>
              </p>
              <p>
                Why? Because none of these solutions address the fundamental issue: <em>you cannot change the way you behave or feel 
                without changing the way you think</em>, and making cognitive change accessible requires making it effortless.
              </p>
              <p>
                Current solutions cannot conceive of effortless cognitive change because it runs counter to the prevailing paradigm. 
                The paradigm assumes change <em>must</em> be hard. That you must work for it. Grind through it. Pay for it. Schedule it.
              </p>
              <p className="text-xl text-white pt-4">
                Euno represents an opportunity in this space precisely because we operate from a different paradigm entirely.
              </p>
              <p>
                Through epiphany psychology imbued into technology, we make cognitive change feel natural, inevitable, and accessible. 
                This isn't about making therapy slightly cheaper or meditation slightly easier. This is about fundamentally changing 
                what's possible in the domain of personal change.
              </p>
              <p>
                This methodology is at the core of our disruption. It's why we can genuinely believe we might solve a problem that 
                has always felt unsolvable: the problem of personal becoming.
              </p>
              <p className="text-xl text-white pt-4">
                And it doesn't stop at one life domain. This extends across relationships, work, identity, health—anywhere cognition 
                shapes experience.
              </p>
              <p>
                <strong className="text-secondary">That</strong> is why our methodology matters. It's not just a feature. It's the reason 
                we exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Solutions Landscape */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Already Exists and Why It's Not Enough
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-secondary">AI Therapists:</strong> Provide conversational support but lack the depth to drive 
                subconscious restructuring. They're reactive, not proactive.
              </p>
              <p>
                <strong className="text-secondary">Traditional Therapy:</strong> Effective for those who can afford it and commit to 
                regular sessions, but inaccessible for most, and progress remains slow.
              </p>
              <p>
                <strong className="text-secondary">Behavior Change Apps:</strong> Track habits and nudge action, but don't address the 
                cognitive patterns determining whether you follow through.
              </p>
              <p>
                <strong className="text-secondary">Mental Health & Meditation Apps:</strong> Manage symptoms and provide temporary relief, 
                but don't create lasting cognitive shifts.
              </p>
              <p>
                <strong className="text-secondary">Self-Help & Journaling:</strong> Require discipline, time, and introspection skills 
                most people don't have or can't sustain.
              </p>
              <p className="pt-4 text-xl text-white">
                None of these make cognitive change <em>effortless</em>. That's the gap we're filling.
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
