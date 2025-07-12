import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  gradient?: "blue" | "purple" | "green" | "orange";
  className?: string;
}

const gradientClasses = {
  blue: "from-blue-500 via-blue-600 to-cyan-500",
  purple: "from-purple-500 via-purple-600 to-pink-500", 
  green: "from-emerald-500 via-green-600 to-teal-500",
  orange: "from-orange-500 via-red-500 to-pink-500"
};

const cardBackgroundClasses = {
  blue: "bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-blue-100/40 border border-blue-200/30",
  purple: "bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-purple-100/40 border border-purple-200/30", 
  green: "bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-teal-100/40 border border-emerald-200/30",
  orange: "bg-gradient-to-br from-orange-50/80 via-red-50/60 to-pink-100/40 border border-orange-200/30"
};

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  gradient = "blue",
  className 
}: StatsCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 p-6 animate-scale-in",
      cardBackgroundClasses[gradient],
      className
    )}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full -ml-12 -mb-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            <div className="flex items-center space-x-1">
              <span className={cn(
                "text-sm font-medium",
                trend === "up" ? "text-emerald-600" : "text-red-500"
              )}>
                {trend === "up" ? "+" : ""}{change}
              </span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </div>
          
          <div className={cn(
            "stats-card flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br shadow-xl",
            gradientClasses[gradient]
          )}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};