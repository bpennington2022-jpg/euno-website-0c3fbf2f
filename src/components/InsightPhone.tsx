import { useState } from "react";
import { Sparkles, Moon } from "lucide-react";

const InsightPhone = () => {
  const [activeResonance, setActiveResonance] = useState<'star' | 'moon' | null>(null);

  return (
    <div className="relative w-full max-w-[240px] mx-auto overflow-hidden">
      {/* Phone Frame - Top Half Only */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-[2.5rem] p-2.5 shadow-2xl border-t border-l border-r border-gray-700 pb-0">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-b-2xl z-10"></div>
        
        {/* Screen Content - Cut off at bottom */}
        <div className="relative bg-gray-950 rounded-t-[2rem] overflow-hidden pt-8 pb-6 px-4">
          {/* Insight Header */}
          <h1 className="text-2xl font-bold text-white mb-4">Insight</h1>

          {/* Insight Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 relative">
            <p className="text-white text-sm leading-relaxed mb-4">
              When you and your partner talk about 'settling down,' the language often frames it as a trade-off between freedom and control.
            </p>

            {/* Resonance Section */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs">Resonance</span>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveResonance(activeResonance === 'star' ? null : 'star')}
                  className={`p-1.5 rounded-full transition-all ${
                    activeResonance === 'star' 
                      ? 'bg-purple-500/20 scale-110' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Sparkles 
                    className={`w-5 h-5 transition-colors ${
                      activeResonance === 'star' ? 'text-purple-400' : 'text-gray-600'
                    }`} 
                  />
                </button>
                <button
                  onClick={() => setActiveResonance(activeResonance === 'moon' ? null : 'moon')}
                  className={`p-1.5 rounded-full transition-all ${
                    activeResonance === 'moon' 
                      ? 'bg-gray-700/50 scale-110' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Moon 
                    className={`w-5 h-5 transition-colors ${
                      activeResonance === 'moon' ? 'text-gray-300' : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute -inset-3 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-t-[2.5rem] blur-xl -z-10 opacity-50"></div>
    </div>
  );
};

export default InsightPhone;
