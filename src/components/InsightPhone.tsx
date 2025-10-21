import { useState } from "react";
import { Sparkles, Moon, ChevronLeft, Search, Plus } from "lucide-react";

const InsightPhone = () => {
  const [activeResonance, setActiveResonance] = useState<'star' | 'moon' | null>(null);

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone Frame - Top Half */}
      <div className="relative bg-gray-950 rounded-[2.5rem] rounded-b-none border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-950 rounded-b-2xl z-10"></div>
        
        {/* Screen Content */}
        <div className="relative bg-white pt-10 pb-8 px-4 min-h-[400px]">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-6 h-6 text-blue-500" />
            </button>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Plus className="w-5 h-5 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Insight Header */}
          <h1 className="text-3xl font-bold text-black mb-6">Insight</h1>

          {/* Insight Card */}
          <div className="bg-gray-100 rounded-3xl p-5 relative">
            <p className="text-black text-base leading-relaxed mb-12">
              When you and your partner talk about 'settling down,' the language often frames it as a trade-off between freedom and control.
            </p>

            {/* Resonance Section */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">Resonance</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveResonance(activeResonance === 'star' ? null : 'star')}
                  className={`p-2 rounded-full transition-all ${
                    activeResonance === 'star' 
                      ? 'bg-purple-100 scale-110' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <Sparkles 
                    className={`w-6 h-6 transition-colors ${
                      activeResonance === 'star' ? 'text-purple-500' : 'text-gray-400'
                    }`} 
                  />
                </button>
                <button
                  onClick={() => setActiveResonance(activeResonance === 'moon' ? null : 'moon')}
                  className={`p-2 rounded-full transition-all ${
                    activeResonance === 'moon' 
                      ? 'bg-gray-300 scale-110' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <Moon 
                    className={`w-6 h-6 transition-colors ${
                      activeResonance === 'moon' ? 'text-gray-600' : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-[3rem] rounded-b-none blur-xl -z-10 opacity-50"></div>
    </div>
  );
};

export default InsightPhone;
