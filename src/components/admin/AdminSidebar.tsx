import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare,
  User,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  path: string;
}

const mainNavItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "users", label: "Users", icon: Users, path: "/users" },
  { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
  { id: "reports", label: "Reports", icon: FileText, path: "/reports" },
  { id: "messages", label: "Messages", icon: MessageSquare, path: "/messages" },
];

const bottomNavItems: SidebarItem[] = [
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
  { id: "help", label: "Help", icon: HelpCircle, path: "/help" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

interface AdminSidebarProps {
  activeItem?: string;
  onItemSelect?: (itemId: string) => void;
  isHelpMode?: boolean;
}

export const AdminSidebar = ({ activeItem = "dashboard", onItemSelect, isHelpMode = false }: AdminSidebarProps) => {
  const isCollapsed = true; // Fixed collapsed state

  const handleItemClick = (itemId: string) => {
    onItemSelect?.(itemId);
  };

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
            <div className="relative w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-all duration-200">
              <HelpCircle className="w-1.5 h-1.5 text-white" />
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="right" className="max-w-xs bg-white border border-gray-200 shadow-lg z-[9999]">
        <div className="p-2">
          <p className="text-sm text-gray-800">{explanation}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );

  const getItemExplanation = (item: any) => {
    const explanations: Record<string, string> = {
      dashboard: "Dashboard - Overview of all admin metrics, activities, and key performance indicators in one central view.",
      users: "Users - Manage user accounts, permissions, roles, and view user activity across the platform.",
      analytics: "Analytics - Detailed reports, charts, and insights about platform usage, performance metrics, and trends.",
      reports: "Reports - Generate, view, and export comprehensive reports on various aspects of the platform.",
      messages: "Messages - Send notifications, announcements, and communicate with users across the platform.",
      profile: "Profile - Manage your admin account settings, personal information, and preferences.",
      help: "Help - Access documentation, tutorials, support resources, and contact information.",
      settings: "Settings - Configure platform settings, integrations, security options, and system preferences."
    };
    return explanations[item.id] || `${item.label} - Navigate to the ${item.label.toLowerCase()} section.`;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 bottom-0 z-40 w-16 glass-nav">
        <TooltipProvider>
        {/* Main Navigation */}
        <nav className="flex-1 p-1 space-y-2 pt-4 flex flex-col">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "group relative flex w-full flex-col items-center justify-center rounded-lg px-3 py-3 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center hover:scale-105",
                  isActive
                    ? "bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 text-primary shadow-xl border border-primary/40 shadow-primary/20 scale-105"
                    : "text-gray-600 hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-accent/20 hover:text-primary hover:shadow-lg hover:border hover:border-primary/20 hover:shadow-primary/10"
                )}
              >
                {/* Enhanced selection highlight background */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-lg border border-primary/30 shadow-inner" />
                )}
                
                {/* Glow effect for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm -z-10" />
                )}
                
                <div className="relative flex flex-col items-center justify-center space-y-2 z-10 w-full h-full">
                  <Icon className={cn(
                    "h-6 w-6 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center",
                    isActive ? "text-primary drop-shadow-md scale-110" : "text-gray-500 group-hover:text-primary group-hover:scale-105 group-hover:drop-shadow-sm"
                  )} />
                  <span className={cn(
                    "text-[7px] font-semibold uppercase tracking-wider leading-none transition-all duration-500 ease-out text-center px-1",
                    isActive ? "text-primary/90 font-bold" : "text-gray-500 group-hover:text-primary/90 group-hover:font-semibold"
                  )}>
                    {item.label}
                  </span>
                </div>
                
                {isHelpMode && <HelpDot explanation={getItemExplanation(item)} />}
              </button>
            );
          })}
        </nav>

        {/* Bottom Navigation - User & Help */}
        <div className="border-t border-white/10 p-1 space-y-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "group relative flex w-full flex-col items-center justify-center rounded-lg px-3 py-3 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center hover:scale-105",
                  isActive
                    ? "bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 text-primary shadow-xl border border-primary/40 shadow-primary/20 scale-105"
                    : "text-gray-600 hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-accent/20 hover:text-primary hover:shadow-lg hover:border hover:border-primary/20 hover:shadow-primary/10"
                )}
              >
                {/* Enhanced selection highlight background */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-lg border border-primary/30 shadow-inner" />
                )}
                
                {/* Glow effect for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blur-sm -z-10" />
                )}
                
                <div className="relative flex flex-col items-center justify-center space-y-2 z-10 w-full h-full">
                  <Icon className={cn(
                    "h-6 w-6 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center",
                    isActive ? "text-primary drop-shadow-md scale-110" : "text-gray-500 group-hover:text-primary group-hover:scale-105 group-hover:drop-shadow-sm"
                  )} />
                  <span className={cn(
                    "text-[7px] font-semibold uppercase tracking-wider leading-none transition-all duration-500 ease-out text-center px-1",
                    isActive ? "text-primary/90 font-bold" : "text-gray-500 group-hover:text-primary/90 group-hover:font-semibold"
                  )}>
                    {item.label}
                  </span>
                </div>
                
                {isHelpMode && <HelpDot explanation={getItemExplanation(item)} />}
              </button>
            );
          })}
        </div>
        </TooltipProvider>
      </div>

      {/* Mobile/Tablet Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-20 backdrop-blur-xl bg-white/90 border-t border-gray-200">
        <TooltipProvider>
        <div className="flex items-center justify-center h-full">
        <nav className="flex items-center justify-around w-full max-w-md px-4">
          {/* Show only main nav items on mobile for space */}
          {mainNavItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "group relative flex flex-col items-center justify-center rounded-lg px-3 py-2 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center hover:scale-105",
                  isActive
                    ? "bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 text-primary shadow-lg border border-primary/40 shadow-primary/20 scale-105"
                    : "text-gray-600 hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-accent/20 hover:text-primary hover:shadow-md"
                )}
              >
                {/* Enhanced selection highlight background */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-lg border border-primary/30 shadow-inner" />
                )}
                
                <div className="relative flex flex-col items-center justify-center space-y-1 z-10">
                  <Icon className={cn(
                    "h-5 w-5 transition-all duration-500 ease-out transform-gpu will-change-transform origin-center",
                    isActive ? "text-primary drop-shadow-md scale-110" : "text-gray-500 group-hover:text-primary group-hover:scale-105 group-hover:drop-shadow-sm"
                  )} />
                  <span className={cn(
                    "text-[8px] font-semibold uppercase tracking-wider leading-none transition-all duration-500 ease-out text-center",
                    isActive ? "text-primary/90 font-bold" : "text-gray-500 group-hover:text-primary/90 group-hover:font-semibold"
                  )}>
                    {item.label}
                  </span>
                </div>
                
                {isHelpMode && <HelpDot explanation={getItemExplanation(item)} />}
              </button>
            );
          })}
        </nav>
        </div>
        </TooltipProvider>
      </div>
    </>
  );
};