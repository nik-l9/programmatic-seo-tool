import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, MoreHorizontal, Eye, Edit, Trash2, Copy, Play, Zap } from "lucide-react"
import Link from "next/link" 

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      name: "Product Reviews",
      template: "Review Template",
      status: "Published",
      pages: 45,
      lastRun: "2 hours ago",
      success: 98,
    },
    {
      id: 2,
      name: "City Guides",
      template: "Location Template",
      status: "In Progress",
      pages: 23,
      lastRun: "15 minutes ago",
      success: 0,
    },
    {
      id: 3,
      name: "Tech Tutorials",
      template: "Tutorial Template",
      status: "Needs Review",
      pages: 67,
      lastRun: "1 hour ago",
      success: 85,
    },
    {
      id: 4,
      name: "Restaurant Listings",
      template: "Business Template",
      status: "Draft",
      pages: 0,
      lastRun: "Never",
      success: 0,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="status-published text-white font-medium px-3 py-1 rounded-full">{status}</Badge>
      case "In Progress":
        return <Badge className="status-progress text-white font-medium px-3 py-1 rounded-full">{status}</Badge>
      case "Needs Review":
        return <Badge className="status-review text-white font-medium px-3 py-1 rounded-full">{status}</Badge>
      case "Draft":
        return <Badge className="status-draft text-white font-medium px-3 py-1 rounded-full">{status}</Badge>
      default:
        return <Badge className="status-draft text-white font-medium px-3 py-1 rounded-full">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Content Recipes</h1>
          <p className="text-white/60 text-lg">Manage your AI-powered content generation recipes</p>
        </div>
        <Button
  className="gradient-primary hover:scale-105 transition-all duration-300 neon-glow rounded-xl px-6 py-3 font-semibold"
  asChild
>
  <Link href="/recipes/new">
    <Plus className="mr-2 h-5 w-5" />
    New Recipe
  </Link>
</Button>
      </div>

      {/* Filters */}
      <Card className="glass-card border-white/10 rounded-2xl">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="Search recipes..."
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl h-12 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-12 px-6"
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-white/10 rounded-xl">
                <DropdownMenuItem className="hover:bg-white/10 rounded-lg">All Recipes</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-lg">Published</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-lg">In Progress</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-lg">Needs Review</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 rounded-lg">Draft</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Recipes Table */}
      <Card className="glass-card border-white/10 rounded-2xl">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-purple-500/20">
              <Zap className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-white">All Recipes</CardTitle>
              <CardDescription className="text-white/60">A list of all your content generation recipes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="text-white/80 font-semibold">Name</TableHead>
                  <TableHead className="text-white/80 font-semibold">Template</TableHead>
                  <TableHead className="text-white/80 font-semibold">Status</TableHead>
                  <TableHead className="text-white/80 font-semibold">Pages</TableHead>
                  <TableHead className="text-white/80 font-semibold">Success Rate</TableHead>
                  <TableHead className="text-white/80 font-semibold">Last Run</TableHead>
                  <TableHead className="w-[100px] text-white/80 font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recipes.map((recipe) => (
                  <TableRow key={recipe.id} className="border-white/10 hover:bg-white/5 transition-colors">
                    <TableCell className="font-semibold text-white">{recipe.name}</TableCell>
                    <TableCell className="text-white/70">{recipe.template}</TableCell>
                    <TableCell>{getStatusBadge(recipe.status)}</TableCell>
                    <TableCell className="text-white/70">{recipe.pages}</TableCell>
                    <TableCell className="text-white/70">{recipe.success > 0 ? `${recipe.success}%` : "-"}</TableCell>
                    <TableCell className="text-white/70">{recipe.lastRun}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass-card border-white/10 rounded-xl">
                          <DropdownMenuItem className="hover:bg-white/10 rounded-lg">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-white/10 rounded-lg">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-white/10 rounded-lg">
                            <Play className="mr-2 h-4 w-4" />
                            Run
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-white/10 rounded-lg">
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 rounded-lg">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
