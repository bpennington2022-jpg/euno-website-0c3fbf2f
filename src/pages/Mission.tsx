import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Brain, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              euno
            </Link>
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/mission" className="text-white font-medium transition-colors">
                Mission
              </Link>
              <Link to="/methodology" className="text-gray-300 hover:text-white transition-colors">
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
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Our Mission
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Making introspection effortless. Making change accessible. Making progress natural.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white mb-8">How We Got Here</h2>
              
              <p>
                We started with a simple goal: build a healthcare app. We wanted to empower people with their health—to make it really easy to understand the intangible elements that affected their wellbeing.
              </p>

              <p>
                But as we talked to physicians, one physician in particular made a comment that changed everything: <strong className="text-[hsl(250,70%,75%)]">"Even if you made the best healthcare app in the world, that would not make people care about their health."</strong>
              </p>

              <p>
                That statement hit us hard. Because what it really meant was this:
              </p>
              
              <p className="text-center text-[1.15rem]">
                <strong className="text-[hsl(45,90%,55%)]">you cannot change the way you behave and the way you feel without changing the way you think.</strong>
              </p>

              <p>
                He directed us to an epiphany psychologist who also worked at our university. That psychologist is now on our team. And he was essential in helping us understand what we actually needed to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white mb-8">The Problem We're Solving</h2>
              
              <p>
                <strong className="text-[hsl(250,70%,75%)]">95% of people who have a heart attack and need to change their health behaviors to avoid another one cannot.</strong>
              </p>

              <p>
                Think about that. Even when a life is on the line, change is still nearly impossible. That doesn't mean these people aren't educated enough. Every single one of them knew they needed to change. But <strong className="text-[hsl(250,70%,75%)]">change is hard</strong>.
              </p>

              <p>
                Change is inaccessible because sustained behavior change—becoming healthier, becoming more financially responsible, becoming whoever you need to become—is hard because it means changing the way we think. And changing the way we think isn't just hard, it's <em>effortful</em>. It's <em>friction-full</em>.
              </p>

              <p>
                Only 12% of Americans go to therapy. Does that mean only 12% of Americans need help changing the way they think? No. But it reflects the pain of wanting to become someone different, the pain of wanting to think differently.
              </p>

              <p>
                <strong className="text-white">It is the pain of change—the way you want to feel, the way you want to behave—that we understood as being at the crux of what we wanted to build.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white mb-8">What We're Building</h2>
              
              <p>
                We're building for the people who experience the pain of needing to change. Not the people who are super smart or super intellectual and love to intellectualize things. No—<strong className="text-[hsl(250,70%,75%)]">the people who experience the pain of wanting to change</strong>.
              </p>

              <p>
                We're making it so those people can access change with the same level of control that someone who is super introspective and thinks all the time can. We're <strong className="text-[hsl(250,70%,75%)]">making metacognition effortless</strong>.
              </p>

              <p>
                We recognize that we are not an AI company. We're not building AI and finding a place to put it. <strong className="text-white">We're not leveraging tech—we're leveraging an understanding of the problem.</strong>
              </p>

              <p>
                This pain is visceral for all of us. And it's everywhere. People who need to be financially responsible. Someone whose daughter came out as gay and is having a hard time accepting their own daughter. Someone who wants to be happy. Someone who wants to call their mom more. Someone who wants to be a better father or mother.
              </p>

              <p className="text-xl font-semibold text-white">
                Everyone wants to become. Everyone needs help becoming. And the act of becoming is a cognitive, psychological experience.
              </p>

              <p>
                There is no system designed to directly target this problem—to make it less hard, to make it democratized, to support not only the people who already introspect, but to <strong className="text-[hsl(250,70%,75%)]">make introspection effortless</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Effortlessness Matters */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white mb-8">Why Effortlessness?</h2>
              
              <p>
                We say "effortlessness" because we recognize the nature of the problem. The current solutions are not effortless—they are effortful.
              </p>

              <p>
                <strong className="text-[hsl(250,70%,75%)]">We're not trying to make people more useful. We're trying to help them make progress.</strong>
              </p>

              <p>
                Most AI applications are about utility—helping people be more productive. This is different. This is about progress. About meeting people before they've even articulated a goal. They just know they want to become healthier, or happier, or more present.
              </p>

              <p>
                Apps are designed to track quantitative parts of these things—step counts, calories, to-do lists. <strong className="text-white">We're trying to make it so that those decisions are more natural</strong>. We're trying to meet you at the most upstream level of solving these problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">The Pain Is Universal</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(220,70%,60%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    64%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of U.S. & Canadians feel stuck in progress toward their goals
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(220,70%,60%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    59%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people believe they are in need of a change in their lives
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(220,70%,60%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people who must change their health behaviors to avoid a heart attack can't
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(220,70%,60%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    80%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people ditch their New Year's resolutions by February
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 md:col-span-2">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(220,70%,60%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                    &lt; 50%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of Americans say they're "very satisfied" with their personal lives
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12 text-xl text-gray-300 italic">
              These aren't just statistics. They're proof that the pain of change is everywhere.
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

export default Mission;