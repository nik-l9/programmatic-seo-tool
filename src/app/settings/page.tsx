import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Lock, Bell, Globe, Shield, Upload, Save } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Account Settings</h1>
          <p className="text-slate-300 text-lg">Manage your account preferences and settings</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <div className="glass-card rounded-2xl p-2 backdrop-blur-2xl">
          <TabsList className="grid grid-cols-4 gap-2">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
            >
              <User className="mr-2 h-5 w-5" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
            >
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
            >
              <Shield className="mr-2 h-5 w-5" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="data-[state=active]:gradient-primary data-[state=active]:text-white rounded-xl h-12"
            >
              <Globe className="mr-2 h-5 w-5" />
              API Keys
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="profile" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Profile Information</CardTitle>
                  <CardDescription className="text-slate-300">
                    Update your account profile details and preferences
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-32 w-32 rounded-3xl ring-4 ring-blue-500/30">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="rounded-3xl gradient-primary text-white font-bold text-4xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-10 px-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Avatar
                  </Button>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="John Doe"
                        className="input-enhanced rounded-xl h-12 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-slate-300">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="johndoe"
                        className="input-enhanced rounded-xl h-12 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john@example.com"
                        className="input-enhanced rounded-xl h-12 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-300">
                        Company
                      </Label>
                      <Input
                        id="company"
                        defaultValue="Acme Inc."
                        className="input-enhanced rounded-xl h-12 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-slate-300">
                      Bio
                    </Label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="SEO specialist and content creator."
                      className="w-full input-enhanced rounded-xl p-4 text-white resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button className="btn-primary rounded-xl h-12 px-8 font-medium">
                      <Save className="mr-2 h-5 w-5" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-purple-500/20">
                  <Bell className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Notification Preferences</CardTitle>
                  <CardDescription className="text-slate-300">
                    Manage how and when you receive notifications
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Recipe Completion</p>
                      <p className="text-sm text-slate-400">Get notified when a recipe completes generation</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Weekly Reports</p>
                      <p className="text-sm text-slate-400">Receive weekly performance reports</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">SEO Alerts</p>
                      <p className="text-sm text-slate-400">Get notified about critical SEO issues</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Marketing Updates</p>
                      <p className="text-sm text-slate-400">Receive marketing and product updates</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">System Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Browser Notifications</p>
                      <p className="text-sm text-slate-400">Show browser notifications for important events</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Sound Alerts</p>
                      <p className="text-sm text-slate-400">Play sound when notifications arrive</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="btn-primary rounded-xl h-12 px-8 font-medium">
                  <Save className="mr-2 h-5 w-5" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-green-500/20">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">Security Settings</CardTitle>
                  <CardDescription className="text-slate-300">
                    Manage your account security and authentication
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-slate-300">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      className="input-enhanced rounded-xl h-12 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-slate-300">
                      New Password
                    </Label>
                    <Input id="new-password" type="password" className="input-enhanced rounded-xl h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-slate-300">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="input-enhanced rounded-xl h-12 text-white"
                    />
                  </div>
                  <Button className="btn-primary rounded-xl h-12 px-6 font-medium">
                    <Lock className="mr-2 h-5 w-5" />
                    Update Password
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Enable 2FA</p>
                    <p className="text-sm text-slate-400">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Sessions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-blue-500/20">
                    <div>
                      <p className="font-medium text-white">Current Session</p>
                      <p className="text-sm text-slate-400">Chrome on macOS • New York, USA • Active now</p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-green-400 pulse-glow"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-blue-500/20">
                    <div>
                      <p className="font-medium text-white">Previous Session</p>
                      <p className="text-sm text-slate-400">Safari on iPhone • New York, USA • 2 days ago</p>
                    </div>
                    <Button variant="outline" className="rounded-xl border-red-500/30 text-red-400 hover:bg-red-500/10">
                      Revoke
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-blue-500/20 pb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-pink-500/20">
                  <Globe className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">API Integrations</CardTitle>
                  <CardDescription className="text-slate-300">
                    Manage your API keys and external integrations
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">OpenAI API</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key" className="text-slate-300">
                      API Key
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="openai-key"
                        type="password"
                        defaultValue="sk-••••••••••••••••••••••••••••••"
                        className="input-enhanced rounded-xl h-12 text-white flex-1"
                      />
                      <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 px-4">
                        Test Connection
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Webflow CMS</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webflow-key" className="text-slate-300">
                      API Key
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="webflow-key"
                        type="password"
                        defaultValue="••••••••••••••••••••••••••••••"
                        className="input-enhanced rounded-xl h-12 text-white flex-1"
                      />
                      <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 px-4">
                        Test Connection
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Google Search Console</h3>
                <div className="space-y-4">
                  <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 px-4">
                    Connect Google Account
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="btn-primary rounded-xl h-12 px-8 font-medium">
                  <Save className="mr-2 h-5 w-5" />
                  Save API Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
