import { useEffect, useState } from 'react';

interface ParallaxTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function ParallaxText({ text, speed = 0.5, className = '' }: ParallaxTextProps) {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setOffsetX(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      className={className}
      style={{ transform: `translateX(${offsetX}px)` }}
    >
      {text}
    </div>
  );
}
