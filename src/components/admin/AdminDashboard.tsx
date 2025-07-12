import { useState } from "react";
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Activity,
  Calendar,
  MessageSquare,
  Star
} from "lucide-react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { StatsCard } from "./StatsCard";
import { GlossyCard } from "./GlossyCard";
import { GradientButton } from "./GradientButton";

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

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AdminHeader />
      </div>
      
      {/* Body Section - Fixed Sidebar + Scrollable Work Area */}
      <div className="flex flex-1 pt-16">
        {/* Fixed Left Sidebar */}
        <div className="fixed left-0 top-16 bottom-0 z-40">
          <AdminSidebar 
            activeItem={activeSection} 
            onItemSelect={setActiveSection} 
          />
        </div>
        
        {/* Scrollable Right Work Area */}
        <div className="flex-1 ml-16 h-screen overflow-y-auto custom-scrollbar">
          <main className="p-6 space-y-6 min-h-full">
          {/* Welcome Section */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="gradient-text">John!</span>
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your admin panel today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={stat.title}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <StatsCard {...stat} />
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
                  <GradientButton size="sm">
                    View Details
                  </GradientButton>
                </div>
                
                <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <div className="text-center space-y-2">
                    <Activity className="h-16 w-16 text-primary mx-auto" />
                    <p className="text-lg font-medium text-foreground">Chart Visualization</p>
                    <p className="text-sm text-muted-foreground">Interactive charts would go here</p>
                  </div>
                </div>
              </GlossyCard>
            </div>

            {/* Recent Activity */}
            <div>
              <GlossyCard>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
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
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GradientButton className="flex items-center justify-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Add User</span>
              </GradientButton>
              
              <GradientButton variant="secondary" className="flex items-center justify-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Send Message</span>
              </GradientButton>
              
              <GradientButton className="flex items-center justify-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Generate Report</span>
              </GradientButton>
            </div>
          </GlossyCard>
          </main>
        </div>
      </div>
    </div>
  );
};