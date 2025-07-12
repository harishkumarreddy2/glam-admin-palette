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
}

export const AdminSidebar = ({ activeItem = "dashboard", onItemSelect }: AdminSidebarProps) => {
  const isCollapsed = true; // Fixed collapsed state

  const handleItemClick = (itemId: string) => {
    onItemSelect?.(itemId);
  };

  return (
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
            </button>
          );
        })}
      </div>
    </div>
  );
};