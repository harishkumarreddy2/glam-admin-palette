import { useState } from "react";
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Activity,
  Calendar,
  MessageSquare,
  Star,
  HelpCircle
} from "lucide-react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { StatsCard } from "./StatsCard";
import { GlossyCard } from "./GlossyCard";
import { GradientButton } from "./GradientButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const statsData = [
  {
    title: "Total Users",
    value: "12,847",
    change: "12%",
    trend: "up" as const,
    icon: Users,
    gradient: "blue" as const
  },
  {
    title: "Revenue",
    value: "$98,234",
    change: "8%",
    trend: "up" as const,
    icon: DollarSign,
    gradient: "green" as const
  },
  {
    title: "Orders",
    value: "3,471",
    change: "5%",
    trend: "down" as const,
    icon: ShoppingCart,
    gradient: "purple" as const
  },
  {
    title: "Growth",
    value: "24%",
    change: "18%",
    trend: "up" as const,
    icon: TrendingUp,
    gradient: "orange" as const
  }
];

const recentActivities = [
  { id: 1, user: "Sarah Johnson", action: "Created new project", time: "2 minutes ago" },
  { id: 2, user: "Mike Chen", action: "Updated user profile", time: "5 minutes ago" },
  { id: 3, user: "Emma Davis", action: "Completed task review", time: "10 minutes ago" },
  { id: 4, user: "Alex Wilson", action: "Submitted report", time: "15 minutes ago" },
];

export const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isHelpMode, setIsHelpMode] = useState(false);

  console.log("Help mode state:", isHelpMode);

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
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AdminHeader isHelpMode={isHelpMode} onHelpToggle={setIsHelpMode} />
      </div>
      
      {/* Body Section - Fixed Sidebar + Scrollable Work Area */}
      <div className="flex flex-1 pt-16">
        {/* Fixed Left Sidebar */}
        <div className="fixed left-0 top-16 bottom-0 z-40 relative">
          <AdminSidebar 
            activeItem={activeSection} 
            onItemSelect={setActiveSection}
            isHelpMode={isHelpMode}
          />
        </div>
        
        {/* Scrollable Right Work Area */}
        <div className="flex-1 ml-12 h-screen overflow-y-auto custom-scrollbar">
          <main className="p-6 space-y-6 min-h-full">
          {/* Welcome Section */}
          <div className="animate-fade-in-up relative">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="gradient-text">John!</span>
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your admin panel today.
            </p>
            {isHelpMode && <HelpDot explanation="Welcome banner - Personalized greeting showing current user and overview of today's admin panel activity and status." />}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={stat.title}
                className="relative cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StatsCard {...stat} />
                {isHelpMode && <HelpDot explanation={`${stat.title} statistics - Click to view detailed ${stat.title.toLowerCase()} analytics, drill down into specific metrics, and access related reports.`} />}
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Card */}
            <div className="lg:col-span-2">
              <GlossyCard className="h-96">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Analytics Overview</h3>
                  <div className="relative">
                    <GradientButton size="sm">
                      View Details
                    </GradientButton>
                    {isHelpMode && <HelpDot explanation="View detailed analytics - Click to access comprehensive charts, reports, and data visualizations for deeper insights." />}
                  </div>
                </div>
                
                <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg relative cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-colors">
                  <div className="text-center space-y-2">
                    <Activity className="h-16 w-16 text-primary mx-auto" />
                    <p className="text-lg font-medium text-foreground">Chart Visualization</p>
                    <p className="text-sm text-muted-foreground">Interactive charts would go here</p>
                  </div>
                  {isHelpMode && <HelpDot explanation="Analytics chart area - Interactive data visualizations showing trends, performance metrics, and business intelligence insights." />}
                </div>
              </GlossyCard>
            </div>

            {/* Recent Activity */}
            <div>
              <GlossyCard>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
                  <div className="relative">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    {isHelpMode && <HelpDot explanation="Activity timeline - View chronological list of recent user actions and system events." />}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors relative group cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">
                          {activity.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {activity.user}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                      {isHelpMode && <HelpDot explanation={`Activity entry - Click to view detailed information about ${activity.user}'s recent action: ${activity.action}`} />}
                    </div>
                  ))}
                </div>
              </GlossyCard>
            </div>
          </div>

          {/* Quick Actions */}
          <GlossyCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
              <div className="relative">
                <Star className="h-5 w-5 text-yellow-500" />
                {isHelpMode && <HelpDot explanation="Favorite actions - Star icon indicates these are your most frequently used admin functions." />}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <GradientButton className="flex items-center justify-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Add User</span>
                </GradientButton>
                {isHelpMode && <HelpDot explanation="Add new user - Create a new user account with appropriate permissions and access levels." />}
              </div>
              
              <div className="relative">
                <GradientButton variant="secondary" className="flex items-center justify-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Message</span>
                </GradientButton>
                {isHelpMode && <HelpDot explanation="Send message - Communicate with users through notifications, emails, or in-app messages." />}
              </div>
              
              <div className="relative">
                <GradientButton className="flex items-center justify-center space-x-2">
                  <Activity className="h-4 w-4" />
                  <span>Generate Report</span>
                </GradientButton>
                {isHelpMode && <HelpDot explanation="Generate report - Create comprehensive reports with current data, analytics, and performance metrics." />}
              </div>
            </div>
          </GlossyCard>
          </main>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};