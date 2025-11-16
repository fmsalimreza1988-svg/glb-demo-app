import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../asset/logo.png";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "Portfolio", "About", "Contact"];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500 rounded-full blur-3xl opacity-5 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "backdrop-blur-xl bg-black/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className={`glass-card px-6 py-1 rounded-2xl bg-white/30 backdrop-blur-xl transition-all duration-300 ${
              scrollY > 50 ? "shadow-lg" : ""
            }`}
          >
            <img src={logo} alt="logo" className="w-16" />
            {/* <div className="flex items-center gap-3">
              <span className="text-white font-bold text-xl">Rexliz</span>
            </div> */}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <button className="glass-card px-6 py-2 rounded-full backdrop-blur-xl text-white text-sm font-medium hover:bg-white/10 transition-all">
              Get Started
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-card mx-4 mb-4 rounded-2xl backdrop-blur-xl overflow-hidden">
            <div className="flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div
          className={`text-center transition-all duration-1500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass-card inline-block bg-white/20 px-8 py-6 rounded-3xl backdrop-blur-2xl mb-8 shadow-2xl">
            <div className="flex items-center gap-4 justify-center">
              <img src={logo} alt="logo" className="w-28" />
              <div>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r mb-5 from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Rexliz
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto font-light">
            Transform Your Vision Into Reality
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From blueprint to reality. Extraordinary 3D design and visualization
            experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="glass-card px-8 py-4 rounded-2xl backdrop-blur-xl text-white font-semibold hover:bg-white/10 transition-all">
              Explore Portfolio
            </button>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all">
              Start Project
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="glass-card px-4 py-3 rounded-full backdrop-blur-xl inline-block animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
