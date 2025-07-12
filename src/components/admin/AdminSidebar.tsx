import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare
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
  const isCollapsed = true; // Fixed collapsed state

  const handleItemClick = (itemId: string) => {
    onItemSelect?.(itemId);
  };

  return (
    <div className="w-16 h-screen glass-nav">

      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-white/10 px-4">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
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
                "group flex w-full flex-col items-center justify-center rounded-lg px-2 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:bg-white/50 hover:text-primary"
              )}
            >
              <Icon className={cn(
                "h-6 w-6 transition-colors mb-1",
                isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"
              )} />
              <span className={cn(
                "text-xs leading-tight transition-colors",
                isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};