"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.15 });
  const isAnyPartVisible = useInView(ref);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView && !show) setShow(true);
    if (!isAnyPartVisible && show) setShow(false);
  }, [isInView, isAnyPartVisible, show]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
