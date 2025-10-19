import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Brain, Users, Target, Lightbulb, TrendingUp, Sparkles, AlertCircle, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/mission" className="text-primary font-semibold transition-colors">
              Mission
            </Link>
            <Link to="/methodology" className="text-gray-300 hover:text-primary transition-colors">
              Methodology
            </Link>
            <Link to="/data" className="text-gray-300 hover:text-primary transition-colors">
              Data
            </Link>
            <Link to="/us" className="text-gray-300 hover:text-primary transition-colors">
              Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Our Mission
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Making introspection effortless. Making change accessible. Making progress natural.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey - Visual Timeline */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              How We Got Here
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Step 1 */}
              <Card className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover-scale group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">We Started With Healthcare</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We wanted to empower people with their health—to make it easy to understand the intangible elements that affected their wellbeing.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-accent/30 hover:border-accent/60 transition-all duration-300 hover-scale group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">The Turning Point</h3>
                    <p className="text-gray-300 leading-relaxed">
                      A physician told us: <span className="text-primary font-semibold">"Even the best healthcare app won't make people care about their health."</span>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover-scale group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">The Real Insight</h3>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-accent font-semibold">You cannot change how you behave and feel without changing how you think.</span>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover-scale group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">We Found Our Team</h3>
                    <p className="text-gray-300 leading-relaxed">
                      That physician connected us with an epiphany psychologist. He's now on our team, helping us make progress effortless.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Visual Stats */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">The Problem We're Solving</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Even when a life is on the line, change remains nearly impossible
              </p>
            </div>

            {/* Heart Attack Stat - Featured */}
            <div className="mb-12">
              <Card className="p-12 bg-gradient-to-br from-red-950/30 to-gray-900/50 border-red-500/30 hover:border-red-500/50 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center animate-pulse">
                    <AlertCircle className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-7xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-2xl text-gray-200 font-semibold max-w-2xl mx-auto">
                    of people who must change their health behaviors to avoid a second heart attack cannot do it
                  </p>
                  <p className="text-gray-400 text-lg">
                    Even when a life is on the line, change is still nearly impossible
                  </p>
                </div>
              </Card>
            </div>

            {/* Problem Breakdown */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gray-800/30 border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover-scale">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">12%</div>
                  <p className="text-gray-300">of Americans go to therapy</p>
                  <p className="text-sm text-gray-400">But far more need help changing how they think</p>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800/30 border-gray-700/50 hover:border-accent/50 transition-all duration-300 hover-scale">
                <div className="space-y-4">
                  <Brain className="h-10 w-10 text-accent" />
                  <p className="text-gray-300 font-semibold">Change is effortful</p>
                  <p className="text-sm text-gray-400">It's not just hard—it's friction-full and inaccessible</p>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800/30 border-gray-700/50 hover:border-secondary/50 transition-all duration-300 hover-scale">
                <div className="space-y-4">
                  <Heart className="h-10 w-10 text-secondary" />
                  <p className="text-gray-300 font-semibold">The pain is universal</p>
                  <p className="text-sm text-gray-400">Wanting to become someone different is everywhere</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution - Interactive Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What We're Building</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Making metacognition effortless for everyone, not just the naturally introspective
              </p>
            </div>

            <div className="space-y-8">
              {/* Card 1 */}
              <Card className="p-8 lg:p-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-primary/30 hover:border-primary/60 transition-all duration-500 group">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">For Those Who Feel the Pain</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      We're building for people who experience the pain of needing to change. Not the super intellectual—<span className="text-primary font-semibold">the people who need it most</span>.
                    </p>
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="p-8 lg:p-12 bg-gradient-to-l from-gray-800/50 to-gray-900/50 border-accent/30 hover:border-accent/60 transition-all duration-500 group">
                <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-12 w-12 text-accent" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">Effortless Metacognition</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      We give everyone the same level of control over change that naturally introspective people have. <span className="text-accent font-semibold">We make thinking about thinking effortless</span>.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 3 */}
              <Card className="p-8 lg:p-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-secondary/30 hover:border-secondary/60 transition-all duration-500 group">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">Not an AI Company</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      We're not leveraging tech—<span className="text-secondary font-semibold">we're leveraging an understanding of the problem</span>. This pain is visceral for all of us.
                    </p>
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="h-12 w-12 text-secondary" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Examples Grid */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50">
              <p className="text-xl font-semibold text-white mb-6 text-center">This is for everyone who wants to become:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Financially responsible",
                  "More accepting",
                  "Happy",
                  "A better parent",
                  "More present",
                  "Healthier"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-xl text-white font-semibold">
                Everyone wants to become. Everyone needs help becoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Effortlessness - Split Layout */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Why Effortlessness?
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-6 bg-gray-800/50 border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Current solutions are effortful</h4>
                      <p className="text-gray-300">Therapy, journaling, self-help all require time, skill, and discipline</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-800/50 border-accent/30">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">We focus on progress, not utility</h4>
                      <p className="text-gray-300">Most AI makes people useful. We help them make progress</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-800/50 border-secondary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">We meet you upstream</h4>
                      <p className="text-gray-300">Before goals, before plans—we meet you at "I want to be healthier"</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <Card className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-primary/50 backdrop-blur">
                  <div className="space-y-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary via-accent to-secondary rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Making Decisions Natural</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Apps track steps and calories. We make those decisions feel natural. We help you understand yourself at the deepest level.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - Redesigned */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">The Pain Is Universal</h2>
              <p className="text-xl text-gray-400">These aren't just numbers—they're proof</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-gray-900/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover-scale group">
                <div className="space-y-4">
                  <BarChart className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    64%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of U.S. & Canadians feel stuck in progress toward their goals
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/10 to-gray-900/50 border-accent/30 hover:border-accent/60 transition-all duration-300 hover-scale group">
                <div className="space-y-4">
                  <AlertCircle className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    59%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people believe they are in need of a change in their lives
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-gray-900/50 border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover-scale group">
                <div className="space-y-4">
                  <Heart className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    who must change health behaviors to avoid a heart attack can't
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-gray-900/50 border-primary/30 hover:border-primary/60 transition-all duration-300 hover-scale group">
                <div className="space-y-4">
                  <Target className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    80%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    ditch their New Year's resolutions by February
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/10 to-gray-900/50 border-accent/30 hover:border-accent/60 transition-all duration-300 hover-scale md:col-span-2 lg:col-span-2 group">
                <div className="space-y-4">
                  <TrendingUp className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    &lt; 50%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of Americans say they're "very satisfied" with their personal lives
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
              <p className="text-2xl text-white font-semibold italic">
                The pain of change is everywhere. We're here to solve it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to experience{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                effortless progress?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join the movement to make change feel natural, not forced.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Get Early Access
            </Button>
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

export default Mission;