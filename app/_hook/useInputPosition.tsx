import { useEffect, useState } from "react";

type TYPE_LABEL_POSITION = "up" | "left" | "no-label";

const useInputPosition = () => {
  const [labelPosition, setLabelPosition] =
    useState<TYPE_LABEL_POSITION>("left");
  const innerWidth = window.innerWidth;

  useEffect(() => {
    if (innerWidth >= 320 && innerWidth < 512) {
      setLabelPosition("up");
    } else if (innerWidth > 512) {
      setLabelPosition("left");
    }
  }, [innerWidth]);

  return { labelPosition, setLabelPosition, innerWidth };
};

export default useInputPosition;
