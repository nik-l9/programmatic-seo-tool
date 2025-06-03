import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SEO Genesis - AI Content Generator",
  description: "Next-generation programmatic SEO content generation platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-20 shrink-0 items-center gap-4 glass-card border-b border-blue-500/20 px-8">
              <SidebarTrigger className="-ml-1 text-white hover:bg-white/10 rounded-xl p-2" />
              <Separator orientation="vertical" className="mr-2 h-6 bg-blue-500/30" />
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-400 pulse-glow"></div>
                <span className="text-sm text-slate-300 font-medium">System Online</span>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <div className="text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">1,247</span> pages generated today
                </div>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-8 p-8">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
