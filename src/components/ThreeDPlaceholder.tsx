import { useState } from "react";
import { Move, Rotate3D, Maximize2, Eye } from "lucide-react";
import house3d from "../asset/exterior_architecture.glb";
interface ThreeDPlaceholderProps {
  type: string;
  color: string;
}

export default function ThreeDPlaceholder({
  type,
  color,
}: ThreeDPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const getIcon = () => {
    switch (type) {
      case "cad":
        return "📐";
      case "exterior":
        return "🏠";
      case "interior":
        return "🛋️";
      case "vr":
        return "🥽";
      case "outdoor":
        return "🌳";
      case "product":
        return "📦";
      case "clothing":
        return "👕";
      case "printing":
        return "🖨️";
      default:
        return "📦";
    }
  };

  return (
    <div
      className="relative aspect-square w-full max-w-lg mx-auto cursor-pointer group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`glass-card w-full h-full rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-300 ${
          isHovered ? "shadow-2xl scale-105" : "shadow-lg"
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`}
        />

        <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
          <div className="text-8xl mb-6 animate-float">{getIcon()}</div>

          <div
            className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${color} opacity-40 animate-pulse-slow`}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-64 h-64 border-2 border-white/20 rounded-full animate-spin-slow`}
            />
          </div>

          <div
            className={`absolute top-6 right-6 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="glass-card p-3 rounded-xl backdrop-blur-xl">
              <Rotate3D className="w-5 h-5 text-white" />
            </div>
          </div>

          <div
            className={`absolute bottom-6 left-6 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="glass-card p-3 rounded-xl backdrop-blur-xl">
              <Move className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex gap-3 justify-center">
            <button className="glass-card px-4 py-2 rounded-lg backdrop-blur-xl text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View
            </button>
            <button className="glass-card px-4 py-2 rounded-lg backdrop-blur-xl text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2">
              <Maximize2 className="w-4 h-4" />
              Fullscreen
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute -inset-4 bg-gradient-to-r ${color} rounded-3xl blur-2xl -z-10 transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "opacity-0"
        }`}
      />
    </div>
  );
}
