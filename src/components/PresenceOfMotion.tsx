import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import { type PropsWithChildren } from "react";

interface PresenceOfMotionProps extends HTMLMotionProps<"div"> {
  className?: string;
}

export default function PresenceOfMotion(
  props: PropsWithChildren<PresenceOfMotionProps>,
) {
  const defaultMotionConfig: HTMLMotionProps<"div"> = {
    initial: { filter: "blur(20px)", opacity: 0 },
    transition: { ease: "easeInOut", duration: 0.5 },
    animate: { filter: "blur(0px)", opacity: 1 },
    exit: { filter: "blur(20px)", opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div {...defaultMotionConfig} {...props}>
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
