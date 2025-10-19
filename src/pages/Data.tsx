import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/methodology" className="text-gray-300 hover:text-primary transition-colors">
              Methodology
            </Link>
            <Link to="/data" className="text-primary font-semibold transition-colors">
              Data
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Data & Research
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our comprehensive research data and findings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Data;
