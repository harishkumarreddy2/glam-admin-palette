import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare,
  ChevronLeft,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "users", label: "Users", icon: Users, path: "/users" },
  { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
  { id: "reports", label: "Reports", icon: FileText, path: "/reports" },
  { id: "messages", label: "Messages", icon: MessageSquare, path: "/messages" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

interface AdminSidebarProps {
  activeItem?: string;
  onItemSelect?: (itemId: string) => void;
}

export const AdminSidebar = ({ activeItem = "dashboard", onItemSelect }: AdminSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleItemClick = (itemId: string) => {
    onItemSelect?.(itemId);
  };

  return (
    <div 
      className={cn(
        "relative h-screen glass-nav transition-all duration-300 ease-in-out group",
        isCollapsed ? "w-16" : "w-64"
      )}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >

      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-white/10 px-4">
        {!isCollapsed ? (
          <h1 className="gradient-text text-xl font-bold">AdminPro</h1>
        ) : (
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "group flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:bg-white/50 hover:text-primary",
                isCollapsed ? "justify-center" : "justify-start"
              )}
            >
              <Icon className={cn(
                "transition-all duration-200",
                isCollapsed ? "h-6 w-6" : "h-5 w-5",
                isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"
              )} />
              {!isCollapsed && (
                <span className="ml-3 transition-opacity duration-200">
                  {item.label}
                </span>
              )}
              
              {/* Active indicator */}
              {isActive && !isCollapsed && (
                <div className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};