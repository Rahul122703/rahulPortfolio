import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  // URL of the cursor image
  const cursorURL =
    "https://cdn.iconscout.com/icon/free/png-256/cursor-1768083-1502427.png";

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        pointerEvents: "none",
        backgroundImage: `url(${cursorURL})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
