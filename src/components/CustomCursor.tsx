import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const followerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.className?.includes?.('cursor-pointer');

      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    let animationId: number;

    const updateFollower = () => {
      followerRef.current.x += (mousePosition.x - followerRef.current.x) * 0.3;
      followerRef.current.y += (mousePosition.y - followerRef.current.y) * 0.3;

      setFollowerPosition({
        x: followerRef.current.x,
        y: followerRef.current.y
      });

      animationId = requestAnimationFrame(updateFollower);
    };

    animationId = requestAnimationFrame(updateFollower);

    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  return (
    <>
      <div
        className="cursor-blob"
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
          transform: isHovering ? 'scale(1.3)' : 'scale(1)',
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div
        className="cursor-blob-follower"
        style={{
          left: `${followerPosition.x - 4}px`,
          top: `${followerPosition.y - 4}px`
        }}
      />
    </>
  );
}
