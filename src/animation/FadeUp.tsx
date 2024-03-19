import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  duration: number;
  delay?: number;
  whileInView?: boolean;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
}: Props) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : {}}
      animate={!whileInView ? animation : {}}
    >
      {children}
    </motion.div>
  );
}
