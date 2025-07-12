import { Bell, Search, User, HelpCircle } from "lucide-react";
import { GradientButton } from "./GradientButton";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AdminHeaderProps {
  isHelpMode?: boolean;
  onHelpToggle?: (isPressed: boolean) => void;
}

export const AdminHeader = ({ isHelpMode = false, onHelpToggle }: AdminHeaderProps) => {
  const HelpDot = ({ explanation }: { explanation: string }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="absolute -top-1 -right-1 z-[9998] cursor-help group">
          {/* Ripple effect container */}
          <div className="relative">
            {/* Ripple rings */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping group-hover:animate-none"></div>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping animation-delay-75 group-hover:animate-none"></div>
            
            {/* Main help icon circle */}
            <div className="relative w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-all duration-200">
              <HelpCircle className="w-2 h-2 text-white" />
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs bg-white border border-gray-200 shadow-lg z-[9999]">
        <div className="p-2">
          <p className="text-sm text-gray-800">{explanation}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
  
  return (
    <TooltipProvider>
    <header className="flex h-16 items-center justify-between px-6 border-b border-white/30 backdrop-blur-xl bg-gradient-to-r from-white/95 via-white/90 to-white/95 shadow-lg shadow-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-xl"></div>
      {/* Logo Section */}
      <div className="flex items-center space-x-4 relative z-10">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-primary to-accent shadow-lg"></div>
        <h1 className="gradient-text text-xl font-bold drop-shadow-sm">AdminPro</h1>
        {isHelpMode && (
          <HelpDot explanation="AdminPro logo and branding - Click to return to main dashboard or access company information." />
        )}
      </div>

      {/* Search Section */}
      <div className="flex-1 max-w-md mx-8 relative z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-white/30 bg-white/70 backdrop-blur-sm py-2 pl-10 pr-4 text-sm transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white/90 shadow-sm hover:shadow-md"
          />
          {isHelpMode && (
            <HelpDot explanation="Search functionality - Type to search across users, content, settings, and other admin panel features." />
          )}
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center space-x-4 relative z-10">
        <Toggle
          pressed={isHelpMode}
          onPressedChange={onHelpToggle}
          className="relative rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-white/60 hover:text-primary hover:shadow-md data-[state=on]:bg-primary/20 data-[state=on]:text-primary data-[state=on]:shadow-lg backdrop-blur-sm"
          aria-label="Toggle help mode"
        >
          <HelpCircle className="h-5 w-5" />
        </Toggle>
        
        <div className="relative">
          <button className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-white/60 hover:text-primary hover:shadow-md backdrop-blur-sm">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg"></span>
          </button>
          {isHelpMode && (
            <HelpDot explanation="Notifications - View recent alerts, system updates, user activities, and important admin notifications." />
          )}
        </div>
      </div>
    </header>
    </TooltipProvider>
  );
};