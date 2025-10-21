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
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
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
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                How We Got Here
              </h2>
              
              <p className="text-lg text-white leading-relaxed">
                We started with a simple goal: <span className="text-xl font-semibold">build a healthcare app</span>. We wanted to empower people with their health—to make it really easy to understand the intangible elements that affected their&nbsp;wellbeing.
              </p>

              <p className="text-lg text-white leading-relaxed">
                But as we talked to physicians, one physician in particular made a comment that <span className="text-xl font-semibold text-accent">changed everything:</span>
              </p>
              
              <blockquote className="border-l-4 border-secondary/50 pl-6 py-4 my-8 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-r-lg">
                <p className="text-2xl font-bold text-secondary leading-relaxed">
                  "Even if you made the best healthcare app in the world, that would not make people care about their health."
                </p>
              </blockquote>

              <p className="text-lg text-gray-300 leading-relaxed">
                That statement hit us hard. Because what it really meant was this:
              </p>
              
              <p className="text-3xl font-bold text-white leading-relaxed px-6">
                You cannot change the way you behave and the way you feel without changing the way you think.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                He directed us to an <span className="text-xl font-semibold text-secondary">epiphany psychologist</span> who also worked at our university. That psychologist is <span className="text-xl font-semibold text-white">now on our team</span>. And he was essential in helping us understand what we actually needed to&nbsp;build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                The Problem We're Solving
              </h2>
              
              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 p-8 rounded-xl border border-primary/50">
                <p className="text-3xl font-bold text-periwinkle leading-relaxed">
                  95% of people who have a heart attack and need to change their health behaviors to avoid another one cannot.
                </p>
              </div>

              <p className="text-lg text-white leading-relaxed">
                Think about that. Even when <span className="font-bold">a life is on the line</span>, change is still nearly impossible. That doesn't mean these people aren't educated enough. Every single one of them knew they needed to change. But <span className="font-bold">change is hard</span>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Change is inaccessible because sustained behavior change—becoming healthier, becoming more financially responsible, becoming whoever you need to become—is hard because it means <span className="text-xl font-semibold">changing the way we think</span>. And changing the way we think isn't just hard, it's <em className="text-xl text-secondary not-italic font-semibold">effortful</em>. It's <em className="text-xl text-secondary not-italic font-semibold">friction-full</em>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Only <span className="text-2xl font-bold text-secondary">12%</span> of Americans go to therapy. Does that mean only 12% of Americans need help changing the way they think? No. But it reflects the <span className="font-bold">pain of wanting to become someone different</span>, the pain of wanting to think&nbsp;differently.
              </p>

              <p className="text-2xl font-bold text-white leading-relaxed px-6">
                It is the <span className="text-secondary">pain of change</span>—the way you want to feel, the way you want to behave—that we understood as being at the crux of what we wanted to&nbsp;build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                What We're Building
              </h2>
              
              <p className="text-lg text-white leading-relaxed">
                We're building for <span className="font-bold text-white">the people who experience the pain of needing to change</span>. Not the people who are <em>super smart or super intellectual and love to intellectualize things</em>. No—the people who experience the <span className="font-semibold text-white">pain of wanting to&nbsp;change</span>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                We're making it so those people can access change with the same level of control that someone who is super introspective and thinks all the time can. We're <span className="font-bold text-white">making metacognition&nbsp;effortless</span>.
              </p>

              <p className="text-2xl font-bold text-white leading-relaxed">
                We're not leveraging tech—we're leveraging an <span className="text-periwinkle">understanding of the problem</span>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                This pain is <span className="font-semibold text-white">visceral</span> for all of us. And it's <span className="font-semibold text-periwinkle">everywhere</span>. People who need to be financially responsible. A parent whose daughter came out as gay and is having a hard time accepting it. Someone who wants to be happy. Someone who wants to call their mom more. Someone who wants to be a better father or&nbsp;mother.
              </p>

              <p className="text-3xl font-bold leading-relaxed px-6">
                <span className="text-periwinkle">Everyone wants to become.</span><br/>
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Everyone needs help becoming.</span><br/>
                <span className="text-white">And the act of becoming is a cognitive, psychological experience.</span>
              </p>

              <p className="text-lg text-white leading-relaxed">
                There is no system designed to directly target this problem—to make it easy, democratized, to support everyone regardless of self-awareness - to <span className="text-lg font-bold text-white">make introspection&nbsp;effortless</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Effortlessness Matters */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Why Effortlessness?
              </h2>
              
              <p className="text-lg text-white leading-relaxed">
                We say <span className="text-2xl font-bold text-periwinkle">"effortlessness"</span> because we recognize the nature of the problem. The current solutions are not effortless—they are&nbsp;<span className="text-xl font-semibold text-gray-400">effortful</span>.
              </p>

              <p className="text-2xl font-bold text-white leading-relaxed text-center">
                We're not trying to make people more <span className="line-through text-gray-500">useful</span>.<br/>
                We're trying to help them make <span className="text-periwinkle">progress</span>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Most AI applications are about <span className="text-xl font-semibold text-gray-400">utility</span>—helping people be more productive. This is different. This is about <span className="text-2xl font-bold text-periwinkle">progress</span>. About meeting people before they've even articulated a goal. They just know they want to become <span className="text-xl font-semibold text-accent">healthier</span>, or <span className="text-xl font-semibold text-secondary">happier</span>, or <span className="text-xl font-semibold text-primary">more&nbsp;present</span>.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Apps are designed to track quantitative parts of these things—step counts, calories, to-do lists. <span className="text-2xl font-bold">We're trying to make it so that those decisions are more natural</span>. We're trying to meet you at the <span className="text-xl font-semibold text-accent">most upstream level</span> of solving these&nbsp;problems.
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
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-periwinkle bg-clip-text text-transparent">
                    64%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of U.S. & Canadians feel stuck in progress toward their goals
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-periwinkle bg-clip-text text-transparent">
                    59%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people believe they are in need of a change in their lives
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-periwinkle bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people who must change their health behaviors to avoid a heart attack can't
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-periwinkle bg-clip-text text-transparent">
                    80%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of people ditch their New Year's resolutions by February
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gray-950 border-0 md:col-span-2">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-periwinkle bg-clip-text text-transparent">
                    &lt; 50%
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    of Americans say they're "very satisfied" with their personal lives
                  </p>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12 text-xl text-gray-300 italic">
              These aren't just statistics. They're proof that the pain of change is&nbsp;everywhere.
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