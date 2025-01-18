import { useMemo } from "react";

export const useCursorClass = (activeCareer: string) => {
  return useMemo(() => {
    switch (activeCareer) {
      case "web-dev":
        return "cursor--web-development";
      case "game-dev":
        return "cursor--game-development";
      case "pixel-art":
        return "cursor--pixel-art";
      case "electrical-design":
        return "cursor--electrical-designer";
      default:
        return "cursor";
    }
  }, [activeCareer]);
};
