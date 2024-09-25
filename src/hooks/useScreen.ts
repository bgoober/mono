import { useState, useEffect } from "react";

type ScreenSize = "sm" | "md" | "lg" | "xl";

const useScreen = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("xl");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setScreenSize("sm");
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setScreenSize("md");
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setScreenSize("lg");
      } else {
        setScreenSize("xl");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreen;
