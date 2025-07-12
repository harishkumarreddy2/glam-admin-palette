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
      "relative overflow-hidden rounded-xl bg-gradient-to-br from-white/90 via-white/70 to-gray-50/80 backdrop-blur-lg border border-white/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-white/95 hover:via-white/80 hover:to-gray-50/90",
      paddingClasses[padding],
      withGlow && "hover:shadow-2xl hover:shadow-primary/20",
      className
    )}>
      {/* Decorative mesh pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-full -ml-16 -mb-16"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full -ml-12 -mt-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};