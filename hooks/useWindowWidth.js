import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  // need check here b/c of next js rendering on server and not browser
  const [width, setWidth] = useState(typeof window !== "undefined" ? (window.innerWidth) : null);

  useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  }, []);
  return width;
};
