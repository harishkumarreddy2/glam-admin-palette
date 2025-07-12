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
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600", 
  green: "from-emerald-500 to-emerald-600",
  orange: "from-orange-500 to-orange-600"
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
    <div className={cn("glossy-card p-6 animate-scale-in", className)}>
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
          "stats-card flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br",
          gradientClasses[gradient]
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};