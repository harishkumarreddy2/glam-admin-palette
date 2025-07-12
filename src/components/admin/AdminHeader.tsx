import { Bell, Search, User } from "lucide-react";
import { GradientButton } from "./GradientButton";

export const AdminHeader = () => {
  return (
    <header className="glass-nav flex h-16 items-center justify-between px-6 border-b border-white/10">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-white/20 bg-white/50 py-2 pl-10 pr-4 text-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-primary">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-red-600"></span>
        </button>
        
        <div className="h-6 w-px bg-white/20"></div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};