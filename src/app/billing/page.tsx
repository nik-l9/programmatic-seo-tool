import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, ChevronUp, Check, CreditCardIcon, Calendar } from 'lucide-react'

export default function BillingPage() {
  const invoices = [
    {
      id: "INV-001",
      date: "May 1, 2024",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "Apr 1, 2024",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "INV-003",
      date: "Mar 1, 2024",
      amount: "$49.00",
      status: "Paid",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Billing & Subscription</h1>
          <p className="text-slate-300 text-lg">Manage your subscription plan and billing information</p>
        </div>
        <Button className="btn-primary rounded-xl h-12 px-6 font-medium">Upgrade Plan</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Current Plan */}
        <Card className="glass-card border-none rounded-3xl overflow-hidden md:col-span-2">
          <CardHeader className="border-b border-blue-500/20 pb-8">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-xl bg-blue-500/20">
                <CreditCard className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-white">Current Plan</CardTitle>
                <CardDescription className="text-slate-300">Your subscription details and usage</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
                  <Badge className="gradient-primary text-white font-medium px-3 py-1 rounded-full">Active</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-300">
                    <span className="text-3xl font-bold text-white">$49</span> / month
                  </p>
                  <p className="text-slate-400">Renews on June 1, 2024</p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 px-6">
                    Change Plan
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl h-12 px-6"
                  >
                    Cancel Plan
                  </Button>
                </div>
              </div>

              <div className="space-y-6 md:w-1/2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-medium">Monthly Page Generation</span>
                    <span className="text-white font-semibold">1,247 / 2,000</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="absolute inset-0 gradient-primary rounded-full"
                      style={{ width: "62%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400">753 pages remaining this month</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Unlimited recipes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Advanced SEO tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">API access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Priority support</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-blue-500/20 pb-6">
            <CardTitle className="text-xl font-bold text-white">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="p-4 rounded-xl bg-white/5 border border-blue-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <CreditCardIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">•••• •••• •••• 4242</p>
                    <p className="text-xs text-slate-400">Expires 12/25</p>
                  </div>
                </div>
                <Badge className="bg-white/10 text-slate-300 rounded-full">Default</Badge>
              </div>
            </div>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl h-12">
              Update Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Billing History */}
      <Card className="glass-card border-none rounded-3xl overflow-hidden">
        <CardHeader className="border-b border-blue-500/20 pb-8">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-xl bg-purple-500/20">
              <Calendar className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Billing History</CardTitle>
              <CardDescription className="text-slate-300">View and download your past invoices</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="rounded-xl border border-blue-500/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-blue-500/20 hover:bg-white/5">
                  <TableHead className="text-slate-300 font-semibold">Invoice</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Date</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Amount</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Status</TableHead>
                  <TableHead className="text-slate-300 font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id} className="border-blue-500/20 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-white">{invoice.id}</TableCell>
                    <TableCell className="text-slate-300">{invoice.date}</TableCell>
                    <TableCell className="text-slate-300">{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge className="status-published text-white font-medium px-3 py-1 rounded-full">
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Plans Comparison */}
      <Card className="glass-card border-none rounded-3xl overflow-hidden">
        <CardHeader className="border-b border-blue-500/20 pb-8">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-xl bg-green-500/20">
              <ChevronUp className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Available Plans</CardTitle>
              <CardDescription className="text-slate-300">Compare our subscription plans</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="glass-card border-none rounded-2xl p-6 space-y-6 hover-lift">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-3xl font-bold text-white">$19<span className="text-lg text-slate-400">/mo</span></p>
                <p className="text-slate-400">Perfect for beginners</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">500 pages/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">5 recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Basic SEO tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Email support</span>
                </div>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl h-12">Select Plan</Button>
            </div>

            {/* Pro Plan */}
            <div className="gradient-border rounded-2xl p-6 space-y-6 hover-lift relative">
              <Badge className="absolute top-0 right-6 -translate-y-1/2 gradient-primary text-white font-medium px-3 py-1 rounded-full">
                Current
              </Badge>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <p className="text-3xl font-bold text-white">$49<span className="text-lg text-slate-400">/mo</span></p>
                <p className="text-slate-400">For growing businesses</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">2,000 pages/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Unlimited recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Advanced SEO tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">API access</span>
                </div>
              </div>
              <Button className="w-full gradient-primary text-white rounded-xl h-12 font-medium">Current Plan</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card border-none rounded-2xl p-6 space-y-6 hover-lift">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <p className="text-3xl font-bold text-white">$199<span className="text-lg text-slate-400">/mo</span></p>
                <p className="text-slate-400">For large organizations</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">10,000 pages/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Unlimited recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Custom integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Dedicated support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">White labeling</span>
                </div>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-xl h-12">Upgrade</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
