import { useState, useEffect } from "react";

const PsychologyAnimation = () => {
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
    const radius = 120;
    const x = 200 + radius * Math.cos(angle);
    const y = 200 + radius * Math.sin(angle);
    return { x, y, id: i };
  });

  const centerNode = { x: 200, y: 200 };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl blur-3xl"></div>
      
      <svg 
        width="400" 
        height="400" 
        className="relative"
        viewBox="0 0 400 400"
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
            r={activeNodes.includes(i) ? "8" : "4"}
            fill={activeNodes.includes(i) ? "hsl(var(--accent))" : "hsl(var(--primary))"}
            className="transition-all duration-1000"
          />
        ))}
        
        {/* Center node */}
        <circle
          cx={centerNode.x}
          cy={centerNode.y}
          r="12"
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
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground">
          Mapping cognitive patterns in real-time
        </p>
      </div>
    </div>
  );
};

export default PsychologyAnimation;