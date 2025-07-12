import React from "react";
import { cn } from "@/lib/utils";

interface GlossyCardProps {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
  padding?: "sm" | "md" | "lg";
}

export const GlossyCard = ({ 
  children, 
  className, 
  withGlow = false,
  padding = "md"
}: GlossyCardProps) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6", 
    lg: "p-8"
  };

  return (
    <div className={cn(
      "glossy-card",
      paddingClasses[padding],
      withGlow && "hover:shadow-2xl hover:shadow-primary/20",
      className
    )}>
      {children}
    </div>
  );
};