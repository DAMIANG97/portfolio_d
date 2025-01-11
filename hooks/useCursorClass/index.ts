import { useMemo } from "react";

export const useCursorClass = (activeCareer: string) => {
  return useMemo(() => {
    switch (activeCareer) {
      case "Web Development":
        return "cursor--web-development";
      case "Game Development":
        return "cursor--game-development";
      case "Pixel Art":
        return "cursor--pixel-art";
      case "Electrical Designer":
        return "cursor--electrical-designer";
      default:
        return "cursor";
    }
  }, [activeCareer]);
};
