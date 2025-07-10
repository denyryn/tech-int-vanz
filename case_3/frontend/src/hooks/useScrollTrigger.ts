import { useEffect, useState } from "react";

export default function useScrollTrigger(threshold = 100) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const passed = window.scrollY > threshold;
      setTriggered(passed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return triggered;
}
