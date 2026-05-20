"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "header";
  className?: string;
};

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
  as = "div",
  className = "",
}: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
