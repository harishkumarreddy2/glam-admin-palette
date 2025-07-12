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
        <div className="absolute -top-1 -right-1 z-[9999] cursor-help group">
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
    <header className="glass-nav flex h-16 items-center justify-between px-6 border-b border-white/10">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 relative">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
        <h1 className="gradient-text text-xl font-bold">AdminPro</h1>
        {isHelpMode && (
          <HelpDot explanation="AdminPro logo and branding - Click to return to main dashboard or access company information." />
        )}
      </div>

      {/* Search Section */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-white/20 bg-white/50 py-2 pl-10 pr-4 text-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {isHelpMode && (
            <HelpDot explanation="Search functionality - Type to search across users, content, settings, and other admin panel features." />
          )}
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center space-x-4">
        <Toggle
          pressed={isHelpMode}
          onPressedChange={onHelpToggle}
          className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-primary data-[state=on]:bg-primary/20 data-[state=on]:text-primary"
          aria-label="Toggle help mode"
        >
          <HelpCircle className="h-5 w-5" />
        </Toggle>
        
        <div className="relative">
          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-primary">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-red-600"></span>
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