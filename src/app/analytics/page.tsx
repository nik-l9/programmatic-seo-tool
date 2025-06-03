import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown, Eye, MousePointer, Search, Download, Calendar, BarChart3 } from 'lucide-react'

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Total Impressions",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Total Clicks",
      value: "89.2K",
      change: "+8.3%",
      trend: "up",
      icon: MousePointer,
    },
    {
      title: "Average CTR",
      value: "3.7%",
      change: "-0.2%",
      trend: "down",
      icon: BarChart3,
    },
    {
      title: "Avg. Position",
      value: "12.4",
      change: "-2.1",
      trend: "up",
      icon: Search,
    },
  ]

  const topPages = [
    {
      url: "/reviews/iphone-15-pro",
      title: "iPhone 15 Pro Review - Best Smartphone 2024",
      impressions: 45200,
      clicks: 1890,
      ctr: 4.2,
      position: 8.3,
    },
    {
      url: "/reviews/samsung-galaxy-s24",
      title: "Samsung Galaxy S24 Review - Premium Android",
      impressions: 38900,
      clicks: 1456,
      ctr: 3.7,
      position: 11.2,
    },
    {
      url: "/reviews/google-pixel-8",
      title: "Google Pixel 8 Review - Best Camera Phone",
      impressions: 32100,
      clicks: 1203,
      ctr: 3.8,
      position: 9.7,
    },
    {
      url: "/guides/new-york-city",
      title: "New York City Travel Guide 2024",
      impressions: 28700,
      clicks: 987,
      ctr: 3.4,
      position: 14.1,
    },
    {
      url: "/tutorials/react-hooks",
      title: "React Hooks Tutorial - Complete Guide",
      impressions: 24500,
      clicks: 892,
      ctr: 3.6,
      position: 12.8,
    },
  ]

  const topQueries = [
    {
      query: "iphone 15 pro review",
      impressions: 12400,
      clicks: 523,
      ctr: 4.2,
      position: 6.2,
    },
    {
      query: "best smartphone 2024",
      impressions: 9800,
      clicks: 412,
      ctr: 4.2,
      position: 8.1,
    },
    {
      query: "samsung galaxy s24 review",
      impressions: 8600,
      clicks: 298,
      ctr: 3.5,
      position: 12.4,
    },
    {
      query: "new york travel guide",
      impressions: 7200,
      clicks: 245,
      ctr: 3.4,
      position: 15.2,
    },
    {
      query: "react hooks tutorial",
      impressions: 6800,
      clicks: 234,
      ctr: 3.4,
      position: 13.7,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track performance and insights for your generated content
          </p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs">
                {metric.trend === "up" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                )}
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
          <TabsTrigger value="queries">Top Queries</TabsTrigger>
          <TabsTrigger value="recipes">Recipe Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>
                  Impressions and clicks over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <p className="text-muted-foreground">Chart visualization would go here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>CTR Distribution</CardTitle>
                <CardDescription>
                  Click-through rate by content type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <p className="text-muted-foreground">Chart visualization would go here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
              <CardDescription>
                Your best performing generated content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Avg. Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPages.map((page, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-medium truncate max-w-[300px]">{page.title}</p>
                          <p className="text-sm text-muted-foreground">{page.url}</p>
                        </div>
                      </TableCell>
                      <TableCell>{page.impressions.toLocaleString()}</TableCell>
                      <TableCell>{page.clicks.toLocaleString()}</TableCell>
                      <TableCell>{page.ctr}%</TableCell>
                      <TableCell>{page.position}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Search Queries</CardTitle>
              <CardDescription>
                Keywords driving traffic to your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Query</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Avg. Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topQueries.map((query, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{query.query}</TableCell>
                      <TableCell>{query.impressions.toLocaleString()}</TableCell>
                      <TableCell>{query.clicks.toLocaleString()}</TableCell>
                      <TableCell>{query.ctr}%</TableCell>
                      <TableCell>{query.position}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recipe Performance</CardTitle>
              <CardDescription>
                Performance metrics by recipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Product Reviews</h4>
                    <p className="text-sm text-muted-foreground">45 pages generated</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">4.2%</p>
                    <p className="text-sm text-muted-foreground">Avg. CTR</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">City Guides</h4>
                    <p className="text-sm text-muted-foreground">23 pages generated</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">3.4%</p>
                    <p className="text-sm text-muted-foreground">Avg. CTR</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Tech Tutorials</h4>
                    <p className="text-sm text-muted-foreground">67 pages generated</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">3.6%</p>
                    <p className="text-sm text-muted-foreground">Avg. CTR</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
