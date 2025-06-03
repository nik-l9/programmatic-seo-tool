import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Eye, Star, Download, Rocket } from "lucide-react"

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "Product Review",
      description: "Perfect for e-commerce product reviews with ratings, pros/cons, and detailed analysis",
      category: "E-commerce",
      rating: 4.8,
      uses: 1247,
      preview: "/placeholder.svg?height=200&width=300",
      popular: true,
    },
    {
      id: 2,
      name: "Location Guide",
      description: "City guides and location-based content with attractions, restaurants, and local tips",
      category: "Travel",
      rating: 4.6,
      uses: 892,
      preview: "/placeholder.svg?height=200&width=300",
      popular: false,
    },
    {
      id: 3,
      name: "Tutorial",
      description: "Step-by-step how-to guides and tutorials with clear instructions",
      category: "Education",
      rating: 4.7,
      uses: 654,
      preview: "/placeholder.svg?height=200&width=300",
      popular: true,
    },
    {
      id: 4,
      name: "Business Listing",
      description: "Local business profiles with contact info, services, and reviews",
      category: "Business",
      rating: 4.5,
      uses: 423,
      preview: "/placeholder.svg?height=200&width=300",
      popular: false,
    },
    {
      id: 5,
      name: "Recipe",
      description: "Food recipes with ingredients, instructions, and nutritional information",
      category: "Food",
      rating: 4.9,
      uses: 1156,
      preview: "/placeholder.svg?height=200&width=300",
      popular: true,
    },
    {
      id: 6,
      name: "Event Listing",
      description: "Event pages with dates, venues, tickets, and detailed descriptions",
      category: "Events",
      rating: 4.4,
      uses: 287,
      preview: "/placeholder.svg?height=200&width=300",
      popular: false,
    },
  ]

  const categories = ["All", "E-commerce", "Travel", "Education", "Business", "Food", "Events"]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Template Gallery</h1>
          <p className="text-white/60 text-lg">Choose from our collection of AI-optimized content templates</p>
        </div>
        <Button className="gradient-primary hover:scale-105 transition-all duration-300 neon-glow rounded-xl px-6 py-3 font-semibold">
          <Plus className="mr-2 h-5 w-5" />
          Create Template
        </Button>
      </div>

      {/* Search */}
      <Card className="glass-card border-white/10 rounded-2xl">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <Input
              placeholder="Search templates..."
              className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl h-12 focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Template Categories */}
      <Tabs defaultValue="All" className="space-y-6">
        <TabsList className="grid w-full grid-cols-7 glass-card border-white/10 rounded-2xl p-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="rounded-xl data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 font-medium transition-all duration-300"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All" className="space-y-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="glass-card hover-lift border-white/10 rounded-2xl group overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <img
                    src={template.preview || "/placeholder.svg"}
                    alt={template.name}
                    className="object-cover w-full h-full"
                  />
                  {template.popular && (
                    <Badge className="absolute top-4 left-4 gradient-primary text-white font-medium px-3 py-1 rounded-full neon-glow">
                      <Star className="mr-1 h-3 w-3" />
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-xl">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-white">{template.name}</CardTitle>
                      <Badge className="bg-white/10 text-white/80 border-white/20 rounded-full px-3 py-1">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-white/70">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{template.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-white/60 line-clamp-2">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-white/60">
                      <Rocket className="h-4 w-4" />
                      <span className="font-medium">{template.uses.toLocaleString()} uses</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white/80 hover:bg-white/10 rounded-lg"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                      <Button
                        size="sm"
                        className="gradient-primary hover:scale-105 transition-all duration-300 rounded-lg font-medium"
                      >
                        Use Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Other category tabs would have filtered content */}
        {categories.slice(1).map((category) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {templates
                .filter((template) => template.category === category)
                .map((template) => (
                  <Card
                    key={template.id}
                    className="glass-card hover-lift border-white/10 rounded-2xl group overflow-hidden"
                  >
                    <div className="aspect-video relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.name}
                        className="object-cover w-full h-full"
                      />
                      {template.popular && (
                        <Badge className="absolute top-4 left-4 gradient-primary text-white font-medium px-3 py-1 rounded-full neon-glow">
                          <Star className="mr-1 h-3 w-3" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl font-bold text-white">{template.name}</CardTitle>
                          <Badge className="bg-white/10 text-white/80 border-white/20 rounded-full px-3 py-1">
                            {template.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-white/70">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{template.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-white/60 line-clamp-2">{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-white/60">
                          <Rocket className="h-4 w-4" />
                          <span className="font-medium">{template.uses.toLocaleString()} uses</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-white/20 text-white/80 hover:bg-white/10 rounded-lg"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </Button>
                          <Button
                            size="sm"
                            className="gradient-primary hover:scale-105 transition-all duration-300 rounded-lg font-medium"
                          >
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
