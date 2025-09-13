import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Brain, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            euno
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <a href="/#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </a>
            <a href="/#how-it-works" className="text-gray-300 hover:text-primary transition-colors">
              How It Works
            </a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                euno
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Infrastructure for progress itself. Not wellness. Not therapy. Not productivity. Progress.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Everyone knows the ache: things could be different. It shows up as restlessness, dissatisfaction, 
                or the blunt cry, "I just need to figure my shit out." This isn't tied to any one age or life stage. 
                Students, parents, professionals, even those who seem "fine" all encounter this recurring, 
                slippery feeling that life could be more aligned, more fulfilling.
              </p>
              <p>
                The problem is not the pain itself, but our inability to see it clearly. When left unnamed, 
                it calcifies into stagnation, missed opportunities, and quiet self-resentment. Traditional tools 
                such as therapy, wellness programs, or productivity hacks ask for clarity, discipline, or intention 
                we can't name at the moment the ache strikes.
              </p>
              <p>
                <strong className="text-primary">Euno was born from that realization</strong>: the deeper pain isn't that change is impossible, 
                but that we cannot see what is holding us back. What if discomfort, fear, or ego could be surfaced 
                and reframed in a way that makes progress feel natural?
              </p>
              <p>
                Euno exists to make that possible. Not as wellness, not as productivity, but as infrastructure 
                for progress itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Makes euno{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
                <Target className="h-12 w-12 text-primary mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Progress, Not Productivity</h3>
                <p className="text-gray-300">
                  Most tools focus on tasks, habits, or wellness in pieces. Euno addresses the bigger picture: 
                  the universal ache of "things could be different."
                </p>
              </Card>
              <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
                <Brain className="h-12 w-12 text-accent mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-gray-100">Change That's Effortless</h3>
                <p className="text-gray-300">
                  Therapy, journaling, and self-help all demand time, skill, or discipline. 
                  Euno uses AI to surface insights so progress feels natural — not forced.
                </p>
              </Card>
              <Card className="p-8 bg-gray-800/50 border-gray-700 text-center">
                <Users className="h-12 w-12 text-secondary mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-gray-100">For Everyone</h3>
                <p className="text-gray-300">
                  No goals to set, no jargon to learn, no need to already "be introspective." 
                  Euno meets you where you are and helps you figure things out.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Truth</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Progress doesn't have to be effortful.
                </p>
              </Card>
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-accent">Tension</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Everyone feels the pain of "things could be different."
                </p>
              </Card>
            </div>
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-100">Our Positioning</h3>
              <p className="text-xl text-gray-200 leading-relaxed text-center">
                Everyone deserves not just to change, but to make consistent progress throughout life. 
                Euno delivers that.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <div className="space-y-8">
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-100">Humanity</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We begin with empathy, honoring the complexity of each person's inner world.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <div className="flex items-start space-x-4">
                  <Brain className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-100">Dreams</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We believe that the act of dreaming itself proves that change is possible.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-gray-800/50 border-gray-700">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-100">Agency</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You are the author of your own growth. We center your beliefs and progress around what matters to you.
                    </p>
                  </div>
                </div>
              </Card>
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

export default About;