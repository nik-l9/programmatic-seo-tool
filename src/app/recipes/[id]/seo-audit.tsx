"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertCircle,
  CheckCircle,
  Info,
  Search,
  FileText,
  Heading1,
  ImageIcon,
  BarChart3,
  RefreshCw,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export default function SEOAudit() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPage, setSelectedPage] = useState<string | null>(null)

  // Mock data for SEO audit
  const pages = [
    {
      id: "1",
      title: "iPhone 15 Pro Review - Best Smartphone 2024",
      url: "/reviews/iphone-15-pro",
      score: 92,
      issues: {
        critical: 0,
        warnings: 1,
        passed: 8,
      },
    },
    {
      id: "2",
      title: "Samsung Galaxy S24 Review - Premium Android",
      url: "/reviews/samsung-galaxy-s24",
      score: 85,
      issues: {
        critical: 0,
        warnings: 2,
        passed: 7,
      },
    },
    {
      id: "3",
      title: "Google Pixel 8 Review - Best Camera Phone",
      url: "/reviews/google-pixel-8",
      score: 78,
      issues: {
        critical: 1,
        warnings: 2,
        passed: 6,
      },
    },
  ]

  // Mock audit checks for the selected page
  const auditChecks = [
    {
      id: "meta-title",
      name: "Meta Title",
      status: "passed",
      description: "Title is well-optimized and contains target keywords",
      details: "Length: 45 characters (Recommended: 50-60)",
      icon: FileText,
    },
    {
      id: "meta-description",
      name: "Meta Description",
      status: "passed",
      description: "Description is well-written and contains target keywords",
      details: "Length: 145 characters (Recommended: 120-155)",
      icon: FileText,
    },
    {
      id: "h1-tag",
      name: "H1 Tag",
      status: "passed",
      description: "Page has exactly one H1 tag that includes target keywords",
      details: "H1: iPhone 15 Pro Review - Best Smartphone 2024",
      icon: Heading1,
    },
    {
      id: "heading-structure",
      name: "Heading Structure",
      status: "warning",
      description: "Heading structure could be improved",
      details: "H2 tags should follow H1 tags. Found H3 tag directly after H1.",
      icon: Heading1,
    },
    {
      id: "keyword-density",
      name: "Keyword Density",
      status: "passed",
      description: "Primary keyword density is optimal",
      details: "Primary keyword appears in 2.3% of content (Recommended: 1-3%)",
      icon: Search,
    },
    {
      id: "content-length",
      name: "Content Length",
      status: "passed",
      description: "Content length is sufficient for the topic",
      details: "1,850 words (Recommended: 1,500+ for review pages)",
      icon: FileText,
    },
    {
      id: "image-alt",
      name: "Image Alt Text",
      status: "passed",
      description: "All images have descriptive alt text",
      details: "6/6 images have proper alt text",
      icon: ImageIcon,
    },
    {
      id: "internal-links",
      name: "Internal Links",
      status: "passed",
      description: "Page has sufficient internal links",
      details: "8 internal links found (Recommended: 5+)",
      icon: ExternalLink,
    },
    {
      id: "schema-markup",
      name: "Schema Markup",
      status: "passed",
      description: "Schema markup is properly implemented",
      details: "Product Review schema detected and valid",
      icon: BarChart3,
    },
  ]

  const getSelectedPage = () => {
    return pages.find((page) => page.id === selectedPage) || pages[0]
  }

  const runAudit = () => {
    setIsLoading(true)
    // Simulate audit process
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }


  const getStatusColor = (status: string) => {
    switch (status) {
      case "passed":
        return "bg-green-100 text-green-800 border-green-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 80) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">SEO Audit</h2>
          <p className="text-slate-400">Analyze and optimize your content for search engines</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
            onClick={() => runAudit()}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Running Audit...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                Run Audit
              </>
            )}
          </Button>
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl">
            <Download className="mr-2 h-5 w-5" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Average SEO Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">85</div>
            <div className="mt-2">
              <Progress value={85} className="h-2" />
            </div>
            <p className="text-xs text-slate-400 mt-2">Based on 3 pages</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Critical Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">1</div>
            <p className="text-xs text-slate-400 mt-2">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-500">5</div>
            <p className="text-xs text-slate-400 mt-2">Recommendations for improvement</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Passed Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">21</div>
            <p className="text-xs text-slate-400 mt-2">No issues detected</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-none rounded-3xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Page Analysis</CardTitle>
          <CardDescription className="text-slate-300">SEO performance by page</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-slate-300">Page Title</TableHead>
                <TableHead className="text-slate-300">URL</TableHead>
                <TableHead className="text-slate-300">SEO Score</TableHead>
                <TableHead className="text-slate-300">Issues</TableHead>
                <TableHead className="text-slate-300 w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow
                  key={page.id}
                  className={`border-white/10 hover:bg-white/5 cursor-pointer ${
                    selectedPage === page.id ? "bg-white/5" : ""
                  }`}
                  onClick={() => setSelectedPage(page.id)}
                >
                  <TableCell className="font-medium text-white">{page.title}</TableCell>
                  <TableCell className="text-blue-400">{page.url}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold ${getScoreColor(page.score)}`}>{page.score}</span>
                      <Progress
                        value={page.score}
                        className={`w-16 ${
                          page.score >= 90
                            ? "[&>div]:bg-green-500"
                            : page.score >= 80
                              ? "[&>div]:bg-yellow-500"
                              : "[&>div]:bg-red-500"
                        }`}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {page.issues.critical > 0 && (
                        <Badge className="bg-red-100 text-red-800 border border-red-200">
                          {page.issues.critical} Critical
                        </Badge>
                      )}
                      {page.issues.warnings > 0 && (
                        <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200">
                          {page.issues.warnings} Warnings
                        </Badge>
                      )}
                      {page.issues.critical === 0 && page.issues.warnings === 0 && (
                        <Badge className="bg-green-100 text-green-800 border border-green-200">All Passed</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedPage && (
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Audit Details: {getSelectedPage().title}</CardTitle>
            <CardDescription className="text-slate-300">SEO audit results for {getSelectedPage().url}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="glass-card border-none rounded-xl p-1 mb-6">
                <TabsTrigger
                  value="all"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  All Checks
                </TabsTrigger>
                <TabsTrigger
                  value="critical"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Critical Issues
                </TabsTrigger>
                <TabsTrigger
                  value="warnings"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Warnings
                </TabsTrigger>
                <TabsTrigger
                  value="passed"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Passed
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {auditChecks.map((check) => (
                  <div
                    key={check.id}
                    className={`p-4 rounded-xl border ${
                      check.status === "passed"
                        ? "border-green-500/20 bg-green-500/5"
                        : check.status === "warning"
                          ? "border-yellow-500/20 bg-yellow-500/5"
                          : "border-red-500/20 bg-red-500/5"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-lg ${
                          check.status === "passed"
                            ? "bg-green-500/20 text-green-500"
                            : check.status === "warning"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-red-500/20 text-red-500"
                        } mr-4`}
                      >
                        <check.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-white">{check.name}</h3>
                          <Badge className={`${getStatusColor(check.status)} capitalize`}>{check.status}</Badge>
                        </div>
                        <p className="text-slate-300 mt-1">{check.description}</p>
                        <p className="text-sm text-slate-400 mt-2">{check.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="critical" className="space-y-4">
                {auditChecks
                  .filter((check) => check.status === "critical")
                  .map((check) => (
                    <div key={check.id} className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-red-500/20 text-red-500 mr-4">
                          <check.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white">{check.name}</h3>
                            <Badge className="bg-red-100 text-red-800 border-red-200 capitalize">{check.status}</Badge>
                          </div>
                          <p className="text-slate-300 mt-1">{check.description}</p>
                          <p className="text-sm text-slate-400 mt-2">{check.details}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                {auditChecks.filter((check) => check.status === "critical").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-3 rounded-full bg-green-500/20 mb-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-slate-300 font-medium">No critical issues found</p>
<p className="text-sm text-slate-400 mt-1">This page doesn&#39;t have any critical SEO issues</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="warnings" className="space-y-4">
                {auditChecks
                  .filter((check) => check.status === "warning")
                  .map((check) => (
                    <div key={check.id} className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-500 mr-4">
                          <check.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white">{check.name}</h3>
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 capitalize">
                              {check.status}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mt-1">{check.description}</p>
                          <p className="text-sm text-slate-400 mt-2">{check.details}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                {auditChecks.filter((check) => check.status === "warning").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-3 rounded-full bg-green-500/20 mb-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-slate-300 font-medium">No warnings found</p>
<p className="text-sm text-slate-400 mt-1">This page doesn&#39;t have any SEO warnings</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="passed" className="space-y-4">
                {auditChecks
                  .filter((check) => check.status === "passed")
                  .map((check) => (
                    <div key={check.id} className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-green-500/20 text-green-500 mr-4">
                          <check.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white">{check.name}</h3>
                            <Badge className="bg-green-100 text-green-800 border-green-200 capitalize">
                              {check.status}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mt-1">{check.description}</p>
                          <p className="text-sm text-slate-400 mt-2">{check.details}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
