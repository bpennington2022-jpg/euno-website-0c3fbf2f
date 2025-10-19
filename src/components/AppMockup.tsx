import { useState, useEffect } from "react";

const AppMockup = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes(prev => {
        const newActive = [];
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.6) {
            newActive.push(Math.floor(Math.random() * 12));
          }
        }
        return newActive;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) * (Math.PI / 180);
    const radius = 80;
    const x = 150 + radius * Math.cos(angle);
    const y = 200 + radius * Math.sin(angle);
    return { x, y, id: i };
  });

  const centerNode = { x: 150, y: 200 };

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

          {/* App header */}
          <div className="absolute top-12 left-0 right-0 z-10 px-6 py-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Your Psychological OS
            </h3>
            <p className="text-xs text-gray-400 mt-1">Live cognitive mapping</p>
          </div>

          {/* Animation content */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl blur-3xl"></div>
              
              <svg 
                width="300" 
                height="400" 
                className="relative"
                viewBox="0 0 300 400"
              >
                {/* Connection lines */}
                {nodes.map((node, i) => (
                  <line
                    key={`line-${i}`}
                    x1={centerNode.x}
                    y1={centerNode.y}
                    x2={node.x}
                    y2={node.y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    opacity={activeNodes.includes(i) ? "0.6" : "0.2"}
                    className="transition-all duration-1000"
                  />
                ))}
                
                {/* Outer nodes */}
                {nodes.map((node, i) => (
                  <circle
                    key={`node-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r={activeNodes.includes(i) ? "6" : "3"}
                    fill={activeNodes.includes(i) ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                    className="transition-all duration-1000"
                  />
                ))}
                
                {/* Center node */}
                <circle
                  cx={centerNode.x}
                  cy={centerNode.y}
                  r="10"
                  fill="hsl(var(--secondary))"
                  className="animate-pulse"
                />
                
                {/* Flowing particles */}
                {activeNodes.map((nodeIndex, i) => {
                  const node = nodes[nodeIndex];
                  return (
                    <circle
                      key={`particle-${nodeIndex}-${i}`}
                      cx={node.x}
                      cy={node.y}
                      r="2"
                      fill="hsl(var(--accent))"
                      className="animate-pulse"
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path={`M ${node.x},${node.y} L ${centerNode.x},${centerNode.y}`}
                      />
                    </circle>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="absolute bottom-8 left-0 right-0 text-center px-6">
            <p className="text-xs text-muted-foreground">
              Real-time cognitive pattern mapping
            </p>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AppMockup;
