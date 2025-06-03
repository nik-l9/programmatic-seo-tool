"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Upload, FileText, Settings, Zap, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function NewRecipePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const steps = [
    { number: 1, title: "Basic Info", icon: FileText },
    { number: 2, title: "Data Upload", icon: Upload },
    { number: 3, title: "Template & Mapping", icon: Settings },
    { number: 4, title: "SEO Configuration", icon: Zap },
  ]

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Recipe</h1>
        <p className="text-muted-foreground">Set up a new SEO content generation recipe</p>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                <div className="ml-3">
                  <p
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}`}
                  >
                    Step {step.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
        </CardContent>
      </Card>

      {/* Step Content */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Give your recipe a name and description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="recipe-name">Recipe Name</Label>
              <Input id="recipe-name" placeholder="e.g., Product Reviews for E-commerce" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipe-description">Description</Label>
              <Textarea id="recipe-description" placeholder="Describe what this recipe will generate..." rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cms-platform">CMS Platform</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your CMS platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="webflow">Webflow</SelectItem>
                  <SelectItem value="wordpress">WordPress</SelectItem>
                  <SelectItem value="contentful">Contentful</SelectItem>
                  <SelectItem value="strapi">Strapi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Upload Data</CardTitle>
            <CardDescription>Upload your CSV file with the data for content generation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <p className="text-lg font-medium">Drop your CSV file here</p>
                <p className="text-sm text-muted-foreground">or click to browse (max 5MB)</p>
              </div>
              <Button className="mt-4" variant="outline">
                Choose File
              </Button>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">CSV Requirements:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• First row should contain column headers</li>
                <li>• Maximum file size: 5MB</li>
                <li>• Supported formats: .csv</li>
                <li>• No duplicate column names</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Template & Field Mapping</CardTitle>
            <CardDescription>Choose a template and map your CSV columns to content placeholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select Template</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                  <h4 className="font-medium">Product Review</h4>
                  <p className="text-sm text-muted-foreground">Perfect for e-commerce product reviews</p>
                  <Badge className="mt-2">Popular</Badge>
                </div>
                <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                  <h4 className="font-medium">Location Guide</h4>
                  <p className="text-sm text-muted-foreground">City guides and location-based content</p>
                </div>
                <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                  <h4 className="font-medium">Tutorial</h4>
                  <p className="text-sm text-muted-foreground">How-to guides and tutorials</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h4 className="font-medium">Field Mapping</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Template Fields</Label>
                  <div className="space-y-2 mt-2">
                    <div className="p-3 border rounded">Product Name</div>
                    <div className="p-3 border rounded">Product Description</div>
                    <div className="p-3 border rounded">Price</div>
                    <div className="p-3 border rounded">Category</div>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">CSV Columns</Label>
                  <div className="space-y-2 mt-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Map to CSV column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">name</SelectItem>
                        <SelectItem value="description">description</SelectItem>
                        <SelectItem value="price">price</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Map to CSV column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">name</SelectItem>
                        <SelectItem value="description">description</SelectItem>
                        <SelectItem value="price">price</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Map to CSV column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">name</SelectItem>
                        <SelectItem value="description">description</SelectItem>
                        <SelectItem value="price">price</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Map to CSV column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">name</SelectItem>
                        <SelectItem value="description">description</SelectItem>
                        <SelectItem value="price">price</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>SEO Configuration</CardTitle>
            <CardDescription>Configure SEO settings for your generated content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="url-pattern">URL Slug Pattern</Label>
              <Input
                id="url-pattern"
                placeholder="e.g., /reviews/{product-name}"
                defaultValue="/reviews/{product-name}"
              />
              <p className="text-sm text-muted-foreground">Use {"{field-name}"} to insert dynamic values</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-title">Meta Title Template</Label>
              <Input
                id="meta-title"
                placeholder="e.g., {product-name} Review - Best {category} 2024"
                defaultValue="{product-name} Review - Best {category} 2024"
              />
              <p className="text-sm text-muted-foreground">60 characters recommended</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-description">Meta Description Template</Label>
              <Textarea
                id="meta-description"
                placeholder="e.g., Read our comprehensive review of {product-name}..."
                defaultValue="Read our comprehensive review of {product-name}. Find out why it's one of the best {category} products in 2024."
                rows={3}
              />
              <p className="text-sm text-muted-foreground">155 characters recommended</p>
            </div>
            <div className="space-y-2">
              <Label>LLM Settings</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                      <SelectItem value="claude-3">Claude 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" min="0" max="1" step="0.1" defaultValue="0.7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <div className="flex space-x-2">
          {currentStep === totalSteps ? (
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <CheckCircle className="mr-2 h-4 w-4" />
              Create Recipe
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
