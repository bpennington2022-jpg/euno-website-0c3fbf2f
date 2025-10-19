import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Brain, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              About euno
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Infrastructure for progress itself. Not wellness. Not therapy. Not productivity. Progress.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Everyone deserves not just to change, but to make consistent progress throughout life. 
                  Euno delivers that by making cognitive restructuring effortless and natural.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-36 h-36 bg-gradient-to-tr from-primary/30 via-accent/30 to-secondary/30 rounded-full animate-pulse">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-bl from-primary/40 via-accent/40 to-secondary/40 rounded-full animate-bounce">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Everyone knows the ache: things could be different. It shows up as restlessness, dissatisfaction, 
                    or the blunt cry, "I just need to figure my shit out."
                  </p>
                  <p>
                    <strong className="text-primary">Euno was born from that realization</strong>: the deeper pain isn't that change is impossible, 
                    but that we cannot see what is holding us back. What if discomfort, fear, or ego could be surfaced 
                    and reframed in a way that makes progress feel natural?
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-xl transform rotate-6 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/30 to-accent/30 rounded-xl transform -rotate-6 animate-pulse delay-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-secondary/30 rounded-xl transform rotate-3 animate-pulse delay-200"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
                      ?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/50 border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Humanity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We begin with empathy, honoring the complexity of each person's inner world.
                  </p>
                </div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/50 border-gray-700/50 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Dreams</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We believe that the act of dreaming itself proves that change is possible.
                  </p>
                </div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/50 border-gray-700/50 hover:border-secondary/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">Agency</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are the author of your own growth. We center your beliefs and progress around what matters to you.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              What Makes euno Different
            </h2>
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-100">Progress, Not Productivity</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Most tools focus on tasks, habits, or wellness in pieces. Euno addresses the bigger picture: 
                    the universal ache of "things could be different."
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-spin slow"></div>
                    <div className="absolute inset-4 bg-gradient-to-l from-accent/30 to-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-8 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                      <Target className="h-16 w-16 text-white animate-fade-in" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-100">Change That's Effortless</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Therapy, journaling, and self-help all demand time, skill, or discipline. 
                    Euno uses AI to surface insights so progress feels natural — not forced.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl transform rotate-12 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-accent/20 rounded-xl transform -rotate-12 animate-pulse delay-75"></div>
                    <div className="absolute inset-8 bg-gradient-to-r from-accent/40 to-secondary/40 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Brain className="h-16 w-16 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-100">For Everyone</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    No goals to set, no jargon to learn, no need to already "be introspective." 
                    Euno meets you where you are and helps you figure things out.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full"></div>
                    <div className="absolute inset-2 bg-gradient-to-l from-primary/20 to-secondary/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-gradient-to-t from-secondary/20 to-primary/20 rounded-full"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-full flex items-center justify-center animate-pulse">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Philosophy
              </span>
            </h2>
            <div className="text-left space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-accent">We are not a traditional psychology app, nor are we a conventional life app.</strong> 
                Psychology apps diagnose, treat, or guide individuals through mental health issues, while life apps organize tasks, 
                plans, and external systems.
              </p>
              <p>
                Our purpose is different; we don't aim to manage symptoms or structure someone's calendar, we aim to provide 
                the infrastructure for progress itself. The way we do this is through cognitive stimuli: reframes, resonant mirrors, 
                and subconscious steering that make users feel, reflect, and pivot naturally.
              </p>
              <p>
                <strong className="text-primary">We're building a new category altogether: a progress app.</strong> 
                Not wellness. Not therapy. Not productivity. Progress. That's the core space we occupy, and the lens we use 
                internally to guide every feature and every design decision.
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

export default About;