import { useEffect, useState, useRef } from 'react';
import { Ruler, Grid3x3 } from 'lucide-react';

export default function CADParallaxSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const modelOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.3) * 2));
  const imageScale = 1 + scrollProgress * 0.3;

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card px-4 py-2 rounded-full inline-block backdrop-blur-xl">
              <span className="text-blue-400 font-bold text-sm tracking-wider flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                INTERACTIVE SHOWCASE
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              From Blueprint to Reality
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the transformation as technical CAD drawings evolve into immersive 3D architectural visualizations. Scroll to witness precision engineering come to life.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="glass-card px-4 py-3 rounded-lg backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <Grid3x3 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">Technical</div>
                    <div className="text-gray-400 text-xs">CAD Precision</div>
                  </div>
                </div>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <div className="text-white font-semibold">Realistic</div>
                    <div className="text-gray-400 text-xs">3D Visualization</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="glass-card px-4 py-2 rounded-full inline-flex items-center gap-3 backdrop-blur-xl">
                <span className="text-sm text-gray-300">Scroll Progress</span>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
                <span className="text-sm text-cyan-400 font-semibold">
                  {Math.round(scrollProgress * 100)}%
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-2xl mx-auto">
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: imageOpacity }}
            >
              <div
                className="glass-card w-full h-full rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl"
                style={{
                  transform: `scale(${imageScale})`,
                  transition: 'transform 0.1s linear'
                }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-3/4 h-3/4"
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="50" y="50" width="300" height="300" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2" fill="none" />
                      <rect x="80" y="80" width="240" height="240" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1" fill="none" />

                      <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="50" y1="300" x2="350" y2="300" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />

                      <line x1="100" y1="50" x2="100" y2="350" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="150" y1="50" x2="150" y2="350" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="200" y1="50" x2="200" y2="350" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="250" y1="50" x2="250" y2="350" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />
                      <line x1="300" y1="50" x2="300" y2="350" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" strokeDasharray="5,5" />

                      <rect x="120" y="180" width="60" height="80" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)" />
                      <rect x="220" y="180" width="60" height="80" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)" />

                      <rect x="120" y="120" width="160" height="40" stroke="rgba(34, 211, 238, 0.8)" strokeWidth="2" fill="rgba(34, 211, 238, 0.15)" />

                      <circle cx="200" cy="200" r="5" fill="rgba(34, 211, 238, 1)" />

                      <text x="200" y="30" fill="rgba(34, 211, 238, 0.8)" fontSize="14" textAnchor="middle" fontFamily="monospace">
                        ARCHITECTURAL PLAN
                      </text>
                      <text x="200" y="380" fill="rgba(34, 211, 238, 0.6)" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        SCALE 1:100
                      </text>
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-lg backdrop-blur-xl">
                    <span className="text-xs text-cyan-400 font-mono">CAD DRAWING</span>
                  </div>

                  <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-lg backdrop-blur-xl">
                    <span className="text-xs text-gray-300 font-mono">2D PLAN</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: modelOpacity }}
            >
              <div className="glass-card w-full h-full rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl">
                <iframe
                  title="Bali Villa - Roman Villa Influence"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/b3583f43555c49ae9f46489332dd77bb/embed?autostart=1&ui_theme=dark&dnt=1"
                />

                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-lg backdrop-blur-xl">
                  <span className="text-xs text-emerald-400 font-mono">3D MODEL</span>
                </div>

                <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-lg backdrop-blur-xl">
                  <span className="text-xs text-gray-300 font-mono">INTERACTIVE</span>
                </div>
              </div>
            </div>

            <div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10 transition-opacity duration-500"
              style={{ opacity: modelOpacity * 0.5 }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full backdrop-blur-xl">
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Scroll to transform
        </p>
      </div>
    </div>
  );
}
