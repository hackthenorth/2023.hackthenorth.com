import { useCallback, Dispatch, SetStateAction } from "react";
import { isTouchOrStylusBasedScreen } from "src/constants";

export const useHoverEvents = (
  setIsHovering: Dispatch<SetStateAction<boolean>>
) => {
  const onHoverStart = useCallback(() => {
    if (isTouchOrStylusBasedScreen) return;
    setIsHovering(true);
  }, [setIsHovering]);
  const onHoverEnd = useCallback(() => {
    if (isTouchOrStylusBasedScreen) return;
    setIsHovering(false);
  }, [setIsHovering]);
  const toggleHover = useCallback(() => {
    if (!isTouchOrStylusBasedScreen) return;
    setIsHovering((prevHovering) => !prevHovering);
  }, [setIsHovering]);

  return { onHoverStart, onHoverEnd, toggleHover };
};
