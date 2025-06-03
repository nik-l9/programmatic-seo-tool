import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Zap,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Welcome back, John</h1>
          <p className="text-white/60 text-lg">Your AI content empire is growing. Here&apos;s what&apos;s happening.</p>
        </div>
        <Button className="gradient-primary hover:scale-105 transition-all duration-300 neon-glow rounded-xl px-6 py-3 font-semibold">
          <Plus className="mr-2 h-5 w-5" />
          Create Recipe
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card hover-lift border-white/10 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Total Recipes
            </CardTitle>
            <div className="p-2 rounded-xl bg-blue-500/20">
              <FileText className="h-5 w-5 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">24</div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <p className="text-sm text-green-400 font-medium">+3 this month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift border-white/10 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Pages Generated
            </CardTitle>
            <div className="p-2 rounded-xl bg-purple-500/20">
              <Zap className="h-5 w-5 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">1,247</div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <p className="text-sm text-green-400 font-medium">+180 this week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift border-white/10 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 uppercase tracking-wider">Published</CardTitle>
            <div className="p-2 rounded-xl bg-green-500/20">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">1,089</div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-blue-400" />
              <p className="text-sm text-blue-400 font-medium">87% success rate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover-lift border-white/10 rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 uppercase tracking-wider">Avg. CTR</CardTitle>
            <div className="p-2 rounded-xl bg-pink-500/20">
              <TrendingUp className="h-5 w-5 text-pink-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">3.2%</div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <p className="text-sm text-green-400 font-medium">+0.4% growth</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4 glass-card border-white/10 rounded-2xl">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-500/20">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-white">Recent Activity</CardTitle>
                <CardDescription className="text-white/60">
                  Your latest recipe generations and publications
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl status-published">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-white leading-none">
  Recipe &quot;Product Reviews&quot; published successfully
</p>

                <p className="text-sm text-white/60">Generated 45 pages • 2 hours ago</p>
              </div>
              <Badge className="status-published text-white font-medium px-3 py-1 rounded-full">Published</Badge>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl status-progress">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-white leading-none">Recipe &quot;City Guides&quot; in progress</p>

                <p className="text-sm text-white/60">Generating content • 15 minutes ago</p>
              </div>
              <Badge className="status-progress text-white font-medium px-3 py-1 rounded-full">In Progress</Badge>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl status-review">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-white leading-none">Recipe &quot;Tech Tutorials&quot; needs review</p>

                <p className="text-sm text-white/60">3 pages failed SEO audit • 1 hour ago</p>
              </div>
              <Badge className="status-review text-white font-medium px-3 py-1 rounded-full">Needs Review</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3 glass-card border-white/10 rounded-2xl">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-purple-500/20">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-white">Quick Actions</CardTitle>
                <CardDescription className="text-white/60">Common tasks and shortcuts</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl h-12 transition-all duration-300">
              <Plus className="mr-3 h-5 w-5" />
              <span className="font-medium">Create New Recipe</span>
            </Button>
            <Button className="w-full justify-start bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl h-12 transition-all duration-300">
              <FileText className="mr-3 h-5 w-5" />
              <span className="font-medium">Browse Templates</span>
            </Button>
            <Button className="w-full justify-start bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl h-12 transition-all duration-300">
              <BarChart3 className="mr-3 h-5 w-5" />
              <span className="font-medium">View Analytics</span>
            </Button>

            <div className="pt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80 font-medium">Monthly Usage</span>
                <span className="text-white font-semibold">1,247 / 2,000</span>
              </div>
              <div className="relative">
                <Progress value={62} className="h-3 bg-white/10 rounded-full" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: "62%" }}
                ></div>
              </div>
              <p className="text-xs text-white/60">753 pages remaining this month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
