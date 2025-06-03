import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  ChevronRight,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I create my first recipe?",
      answer:
        "To create your first recipe, navigate to the Recipes page and click on the 'New Recipe' button. Follow the step-by-step wizard to upload your data, select a template, map your fields, and configure SEO settings.",
    },
    {
      question: "What file formats are supported for data upload?",
      answer:
        "We currently support CSV files for data upload. Your CSV should include headers in the first row and can be up to 5MB in size. Make sure there are no duplicate column names.",
    },
    {
      question: "How do I connect my CMS platform?",
      answer:
        "Go to Settings > API Keys and enter your CMS API credentials. We support Webflow, WordPress, Contentful, and Strapi. After entering your API key, click 'Test Connection' to verify.",
    },
    {
      question: "Can I customize the generated content?",
      answer:
        "Yes! After content generation, you can review and edit any piece of content before publishing. You can also regenerate specific sections if needed.",
    },
    {
      question: "How do I track the performance of my generated content?",
      answer:
        "Navigate to the Analytics page to see comprehensive performance metrics. You can connect Google Search Console and Google Analytics for even more detailed insights.",
    },
    {
      question: "What AI models are used for content generation?",
      answer:
        "We support multiple AI models including GPT-4, GPT-3.5 Turbo, and Claude. You can select your preferred model in the recipe settings.",
    },
  ]

  const categories = [
    {
      name: "Getting Started",
      icon: BookOpen,
      count: 12,
    },
    {
      name: "Recipes & Templates",
      icon: FileText,
      count: 24,
    },
    {
      name: "SEO Optimization",
      icon: Search,
      count: 18,
    },
    {
      name: "CMS Integration",
      icon: MessageCircle,
      count: 9,
    },
    {
      name: "Analytics & Reporting",
      icon: Video,
      count: 15,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Help Center</h1>
          <p className="text-slate-300 text-lg">Find answers, tutorials, and support resources</p>
        </div>
      </div>

      {/* Search */}
      <Card className="glass-card border-none rounded-3xl overflow-hidden">
        <CardContent className="pt-8 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">How can we help you today?</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search for tutorials, guides, and FAQs..."
                className="input-enhanced rounded-xl h-14 text-white pl-12 text-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-white/10 hover:bg-white/20 text-slate-300 rounded-full px-3 py-1 cursor-pointer">
                Getting Started
              </Badge>
              <Badge className="bg-white/10 hover:bg-white/20 text-slate-300 rounded-full px-3 py-1 cursor-pointer">
                Content Generation
              </Badge>
              <Badge className="bg-white/10 hover:bg-white/20 text-slate-300 rounded-full px-3 py-1 cursor-pointer">
                SEO Tips
              </Badge>
              <Badge className="bg-white/10 hover:bg-white/20 text-slate-300 rounded-full px-3 py-1 cursor-pointer">
                API Integration
              </Badge>
              <Badge className="bg-white/10 hover:bg-white/20 text-slate-300 rounded-full px-3 py-1 cursor-pointer">
                Troubleshooting
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="resources" className="space-y-8">
        <TabsList className="glass-card border-none rounded-2xl p-2 backdrop-blur-2xl">
          <TabsTrigger
            value="resources"
            className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Resources
          </TabsTrigger>
          <TabsTrigger
            value="faq"
            className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            FAQ
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Article */}
            <Card className="glass-card border-none rounded-3xl overflow-hidden md:col-span-2 lg:col-span-3 hover-lift">
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white/50" />
                </div>
              </div>
              <CardContent className="p-8">
                <Badge className="gradient-primary text-white font-medium px-3 py-1 rounded-full mb-4">Featured</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">Getting Started with SEO Genesis</h3>
                <p className="text-slate-300 mb-6">
                  A comprehensive guide to setting up your first programmatic SEO campaign with our platform.
                </p>
                <Button className="btn-primary rounded-xl h-12 px-6 font-medium">
                  Watch Tutorial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            {categories.map((category) => (
              <Card
                key={category.name}
                className="glass-card border-none rounded-3xl overflow-hidden hover-lift card-interactive"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">
                    <category.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-slate-400 mb-6 flex-1">
                    {category.count} articles and tutorials to help you master {category.name.toLowerCase()}.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-white/10 text-slate-300 rounded-full px-3 py-1">
                      {category.count} Articles
                    </Badge>
                    <Button
                      variant="ghost"
                      className="p-0 h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Articles */}
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Recent Articles</CardTitle>
                  <CardDescription className="text-slate-300">Latest guides and tutorials</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-blue-500/20 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Badge className="bg-white/10 text-slate-300 rounded-full px-3 py-1 mb-3">Tutorial</Badge>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      How to Optimize Your Content for Featured Snippets
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Learn how to structure your content to increase chances of appearing in Google&apos;s featured
                      snippets.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">5 min read</span>
                      <Button
                        variant="ghost"
                        className="p-0 h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 px-6">
                  View All Articles
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-purple-500/20">
                  <HelpCircle className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Frequently Asked Questions</CardTitle>
                  <CardDescription className="text-slate-300">
                    Find answers to common questions about our platform
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-blue-500/20 rounded-xl bg-white/5 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-white font-medium py-4 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-green-500/20">
                  <MessageSquare className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Contact Support</CardTitle>
                  <CardDescription className="text-slate-300">Get help from our customer support team</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                  <p className="text-slate-300">
                    Our support team is available Monday through Friday, 9am to 5pm EST. We typically respond within 24
                    hours.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-white">support@seogenesis.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Phone className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-blue-500/20">
                    <h4 className="font-medium text-white mb-2">Pro Plan Support</h4>
                    <p className="text-slate-400 text-sm">
                      As a Pro plan subscriber, you have access to priority support with faster response times.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Name
                      </Label>
                      <Input id="name" className="input-enhanced rounded-xl h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email
                      </Label>
                      <Input id="email" type="email" className="input-enhanced rounded-xl h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject
                      </Label>
                      <Input id="subject" className="input-enhanced rounded-xl h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full input-enhanced rounded-xl p-4 text-white resize-none"
                      />
                    </div>
                    <Button className="btn-primary rounded-xl h-12 px-8 font-medium w-full">Send Message</Button>
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
