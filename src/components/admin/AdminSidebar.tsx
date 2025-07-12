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
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border border-white shadow-lg animate-pulse z-50 cursor-help" />
      </TooltipTrigger>
      <TooltipContent side="right" className="max-w-xs">
        <p>{explanation}</p>
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
    <TooltipProvider>
    <div className="w-16 h-screen glass-nav flex flex-col">

      {/* Main Navigation */}
      <nav className="flex-1 p-[0.2rem] space-y-2 pt-4">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "group relative flex w-full flex-col items-center justify-center rounded-lg px-1 py-3 transition-all duration-200 hover:scale-105",
                isActive
                  ? "bg-gradient-to-br from-primary/25 to-accent/25 text-primary shadow-lg border border-primary/30"
                  : "text-gray-600 hover:bg-gradient-to-br hover:from-white/60 hover:to-white/40 hover:text-primary hover:shadow-sm"
              )}
            >
              {/* Selection highlight background - covers entire button area */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg border border-primary/20" />
              )}
              
              <div className="relative flex flex-col items-center justify-center space-y-1 z-10 w-full h-full">
                <Icon className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isActive ? "text-primary drop-shadow-sm" : "text-gray-500 group-hover:text-primary"
                )} />
                <span className={cn(
                  "text-[8px] font-semibold uppercase tracking-wider leading-none",
                  isActive ? "text-primary/90" : "text-gray-500 group-hover:text-primary/90"
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
      <div className="border-t border-white/10 p-[0.2rem] space-y-2">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "group relative flex w-full flex-col items-center justify-center rounded-lg px-1 py-3 transition-all duration-200 hover:scale-105",
                isActive
                  ? "bg-gradient-to-br from-primary/25 to-accent/25 text-primary shadow-lg border border-primary/30"
                  : "text-gray-600 hover:bg-gradient-to-br hover:from-white/60 hover:to-white/40 hover:text-primary hover:shadow-sm"
              )}
            >
              {/* Selection highlight background - covers entire button area */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg border border-primary/20" />
              )}
              
              <div className="relative flex flex-col items-center justify-center space-y-1 z-10 w-full h-full">
                <Icon className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isActive ? "text-primary drop-shadow-sm" : "text-gray-500 group-hover:text-primary"
                )} />
                <span className={cn(
                  "text-[8px] font-semibold uppercase tracking-wider leading-none",
                  isActive ? "text-primary/90" : "text-gray-500 group-hover:text-primary/90"
                )}>
                  {item.label}
                </span>
              </div>
              
              {isHelpMode && <HelpDot explanation={getItemExplanation(item)} />}
            </button>
          );
        })}
      </div>
    </div>
    </TooltipProvider>
  );
};