import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { liquidGlassVariants } from "@/styles/glassmorphism";

interface LiquidGlassCardProps extends Omit<HTMLMotionProps<"div">, "children" | "style"> {
  children: ReactNode;
  variant?: "light" | "strong" | "subtle" | "dark";
  className?: string;
  hoverLift?: boolean;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  variant = "light",
  className = "",
  hoverLift = true,
  ...props
}) => {
  const glassStyle = liquidGlassVariants[variant];

  return (
    <motion.div
      {...props}
      whileHover={hoverLift ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
      className={`relative overflow-hidden rounded-[24px] transition-all duration-300 ${className}`}
      style={{
        ...glassStyle,
        WebkitBackdropFilter: glassStyle.backdropFilter,
      }}
    >
      {/* Subtle overlay shine gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
      {children}
    </motion.div>
  );
};

export default LiquidGlassCard;
