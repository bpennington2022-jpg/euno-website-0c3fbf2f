import { useEffect, useState, useRef } from "react";

const statistics = [
  { text: "Less than half of Americans say they're \"very satisfied\" with their personal lives", side: "left" },
  { text: "95% of people who must change their health behaviors to avoid a heart attack can't", side: "right" },
  { text: "80% of people ditch their New Year's resolutions by February", side: "left" },
  { text: "1 in 5 U.S. adults feels lonely every day", side: "right" },
  { text: "About 1 in 5 U.S. workers say they don't feel a sense of belonging at work", side: "left" },
  { text: "People with no close friends: up from 3% (1990) to 12% (2021)", side: "right" },
  { text: "40% of high schoolers report persistent sadness", side: "left" },
  { text: "20% of high schoolers report seriously considering suicide", side: "right" },
  { text: "46% of U.S. credit cardholders carry a balance month-to-month", side: "left" },
  { text: "Only 31% of U.S. employees are engaged at work", side: "right" },
  { text: "19-46% of psychotherapy patients drop out prematurely", side: "left" },
  { text: "22-24% of U.S. adults meet both aerobic and strength activity guidelines", side: "right" },
  { text: "Fewer than 1 in 10 adults who smoke succeed in quitting in a given year", side: "left" },
  { text: "U.S. adults spend 8+ hours/day with media", side: "right" },
  { text: "Smartphone use is 4-5 hours/day on average", side: "left" },
];

const StatisticsBackground = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section enters viewport, 1 when it leaves
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start showing stats when section is 20% into viewport
      const startPoint = windowHeight * 0.8;
      const endPoint = -sectionHeight + windowHeight * 0.2;
      
      let progress = 0;
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        progress = (startPoint - sectionTop) / (startPoint - endPoint);
      } else if (sectionTop < endPoint) {
        progress = 0; // Fade out when past section
      }
      
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Statistics floating on the sides */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {statistics.map((stat, index) => {
          const totalStats = statistics.length;
          const statProgress = (index / totalStats);
          const distanceFromCurrent = Math.abs(statProgress - scrollProgress);
          const opacity = scrollProgress > 0 ? Math.max(0, 1 - distanceFromCurrent * 5) : 0;
          const translateX = stat.side === "left" 
            ? `${-100 + (opacity * 100)}%` 
            : `${100 - (opacity * 100)}%`;
          
          return (
            <div
              key={index}
              className={`absolute ${stat.side === "left" ? "left-0" : "right-0"} text-gray-600/40 text-sm px-4 py-2 max-w-xs ${stat.side === "left" ? "text-left" : "text-right"}`}
              style={{
                top: `${(index / totalStats) * 100}%`,
                opacity: opacity * 0.6,
                transform: `translateX(${translateX}) translateY(-50%)`,
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
              }}
            >
              {stat.text}
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StatisticsBackground;
