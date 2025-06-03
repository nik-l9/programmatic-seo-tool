import { Home, Settings, BarChart3, FileText, Zap, HelpCircle, CreditCard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronUp, User2 } from "lucide-react"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Recipes",
    url: "/recipes",
    icon: FileText,
  },
  {
    title: "Templates",
    url: "/templates",
    icon: Zap,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
]

const settingsItems = [
  {
    title: "Account Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Help Center",
    url: "/help",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="glass-sidebar">
      <SidebarHeader className="border-b border-blue-500/20 pb-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-white/10 rounded-2xl transition-all duration-300">
              <a href="/dashboard">
                <div className="flex aspect-square size-12 items-center justify-center rounded-2xl overflow-hidden">
  <img
    src="https://docs.pieces.app/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1732224146114%2F4484e983-32a4-4526-9fa6-ecb4f418d45d.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
    alt="Pieces for Developers logo"
    className="w-10 h-10 object-cover"
  />
</div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-xl gradient-text">Pieces for Developers</span>
                  <span className="truncate text-xs text-slate-400">AI Content Engine</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 font-semibold tracking-wider uppercase text-xs mb-4">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-white/10 hover:text-white transition-all duration-300 rounded-2xl h-12 group"
                  >
                    <a href={item.url} className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                        <item.icon className="size-5" />
                      </div>
                      <span className="font-medium text-slate-200">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 font-semibold tracking-wider uppercase text-xs mb-4">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-white/10 hover:text-white transition-all duration-300 rounded-2xl h-12 group"
                  >
                    <a href={item.url} className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                        <item.icon className="size-5" />
                      </div>
                      <span className="font-medium text-slate-200">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-blue-500/20 pt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl h-16"
                >
                  <Avatar className="h-12 w-12 rounded-2xl ring-2 ring-blue-500/30">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="rounded-2xl gradient-primary text-white font-bold text-lg">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-white text-base">John Doe</span>
                    <span className="truncate text-xs text-slate-400">john@example.com</span>
                  </div>
                  <ChevronUp className="ml-auto size-5 text-slate-400" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-2xl glass-card"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem className="hover:bg-white/10 rounded-xl h-12 text-slate-200">
                  <User2 className="mr-3 size-5" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-xl h-12 text-slate-200">
                  <CreditCard className="mr-3 size-5" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-xl h-12 text-slate-200">
                  <Settings className="mr-3 size-5" />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
