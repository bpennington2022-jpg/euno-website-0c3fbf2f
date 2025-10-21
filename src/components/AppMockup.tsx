import { Sparkles, ChevronRight, Plus } from "lucide-react";

const AppMockup = () => {
  const insights = [
    "You frame progress as something to achieve, not something to experience",
    "You connect self-worth more to productivity than presence",
    "You often treat rest as something to be earned, not a baseline need",
    "You speak about change in an all-or-nothing way"
  ];

  const categories = ["Identity", "Growth", "Habits", "Beliefs", "Values"];

  return (
    <div className="relative w-full max-w-[350px] mx-auto">
      {/* Phone mockup frame */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-b-2xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-gray-950 rounded-[2.5rem] overflow-hidden h-[600px]">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900/50 to-transparent z-10 flex items-center justify-between px-8 pt-2">
            <span className="text-xs text-gray-400">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
              <div className="w-1 h-2 bg-gray-400 rounded-sm"></div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute top-12 left-0 right-0 bottom-0 overflow-y-auto px-6 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pt-4">
              <h1 className="text-3xl font-bold text-white">Progress</h1>
              <button className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm mb-6">
              Recent insights, prompting deeper awareness
            </p>

            {/* Cluster Goal */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">Cluster Goal</h2>
              <p className="text-white text-base mb-3">Be more present with loved ones</p>
              
              {/* Stats */}
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-purple-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>127 insights</span>
                </div>
                <div className="text-blue-400">
                  <span>18 refined this week</span>
                </div>
                <div className="text-gray-500">
                  <span>3 new this week</span>
                </div>
              </div>
            </div>

            {/* Insight Categories */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-white mb-3">Insight Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-white text-sm hover:bg-gray-800 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* New Insights */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3">New Insights</h3>
              <div className="space-y-2">
                {insights.map((insight, index) => (
                  <button
                    key={index}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-4 flex items-start gap-3 hover:bg-gray-900 transition-colors group"
                  >
                    <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm text-left flex-1 leading-relaxed">
                      {insight}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5 group-hover:text-gray-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AppMockup;
