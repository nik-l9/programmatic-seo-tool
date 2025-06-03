"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, RefreshCw, Copy, CheckCircle, AlertCircle } from "lucide-react"

export default function JSONLDEditor() {
  const [schemaType, setSchemaType] = useState("Product")
  const [copied, setCopied] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [isValid, setIsValid] = useState(true)

  // Mock schema data
  const schemaData = {
    Product: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "{{product_name}}",
      description: "{{product_description}}",
      image: "{{product_image}}",
      brand: {
        "@type": "Brand",
        name: "{{brand_name}}",
      },
      offers: {
        "@type": "Offer",
        price: "{{product_price}}",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "{{rating_value}}",
        reviewCount: "{{review_count}}",
      },
    },
    Review: {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "Product",
        name: "{{product_name}}",
        image: "{{product_image}}",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "{{rating_value}}",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "{{author_name}}",
      },
      reviewBody: "{{review_content}}",
    },
    LocalBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "{{business_name}}",
      image: "{{business_image}}",
      address: {
        "@type": "PostalAddress",
        streetAddress: "{{street_address}}",
        addressLocality: "{{city}}",
        addressRegion: "{{state}}",
        postalCode: "{{zip_code}}",
        addressCountry: "{{country}}",
      },
      telephone: "{{phone_number}}",
      openingHours: "{{opening_hours}}",
    },
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaData[schemaType as keyof typeof schemaData], null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const validateSchema = () => {
    setIsValidating(true)
    // Simulate validation process
    setTimeout(() => {
      setIsValidating(false)
      setIsValid(true)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">JSON-LD Schema Editor</h2>
          <p className="text-slate-400">Configure structured data for better search engine visibility</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
            onClick={validateSchema}
            disabled={isValidating}
          >
            {isValidating ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Validating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                Validate Schema
              </>
            )}
          </Button>
          <Button className="btn-primary rounded-xl">Save Schema</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-500/20">
                <Code className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-white">Schema Configuration</CardTitle>
                <CardDescription className="text-slate-300">
                  Select schema type and map fields to your data
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="schema-type" className="text-slate-300">
                Schema Type
              </Label>
              <Select value={schemaType} onValueChange={setSchemaType}>
                <SelectTrigger className="input-enhanced rounded-xl h-12 text-white">
                  <SelectValue placeholder="Select schema type" />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/10 rounded-xl">
                  <SelectItem value="Product">Product</SelectItem>
                  <SelectItem value="Review">Review</SelectItem>
                  <SelectItem value="LocalBusiness">Local Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="fields" className="w-full">
              <TabsList className="glass-card border-none rounded-xl p-1">
                <TabsTrigger
                  value="fields"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Field Mapping
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                >
                  Advanced
                </TabsTrigger>
              </TabsList>
              <TabsContent value="fields" className="space-y-4 mt-4">
                {schemaType === "Product" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="product-name" className="text-slate-300">
                        Product Name
                      </Label>
                      <Input
                        id="product-name"
                        defaultValue="{{product_name}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-description" className="text-slate-300">
                        Product Description
                      </Label>
                      <Input
                        id="product-description"
                        defaultValue="{{product_description}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-price" className="text-slate-300">
                        Product Price
                      </Label>
                      <Input
                        id="product-price"
                        defaultValue="{{product_price}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand-name" className="text-slate-300">
                        Brand Name
                      </Label>
                      <Input
                        id="brand-name"
                        defaultValue="{{brand_name}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                  </>
                )}
                {schemaType === "Review" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="review-product" className="text-slate-300">
                        Product Name
                      </Label>
                      <Input
                        id="review-product"
                        defaultValue="{{product_name}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating-value" className="text-slate-300">
                        Rating Value
                      </Label>
                      <Input
                        id="rating-value"
                        defaultValue="{{rating_value}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="author-name" className="text-slate-300">
                        Author Name
                      </Label>
                      <Input
                        id="author-name"
                        defaultValue="{{author_name}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                  </>
                )}
                {schemaType === "LocalBusiness" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="business-name" className="text-slate-300">
                        Business Name
                      </Label>
                      <Input
                        id="business-name"
                        defaultValue="{{business_name}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="street-address" className="text-slate-300">
                        Street Address
                      </Label>
                      <Input
                        id="street-address"
                        defaultValue="{{street_address}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-number" className="text-slate-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone-number"
                        defaultValue="{{phone_number}}"
                        className="input-enhanced rounded-xl h-10 text-white"
                      />
                    </div>
                  </>
                )}
              </TabsContent>
              <TabsContent value="advanced" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="custom-properties" className="text-slate-300">
                    Custom Properties
                  </Label>
                  <textarea
                    id="custom-properties"
                    rows={4}
                    placeholder="Add custom schema properties in JSON format"
                    className="w-full input-enhanced rounded-xl p-4 text-white resize-none"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="glass-card border-none rounded-3xl overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-green-500/20">
                  <Code className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-white">Generated Schema</CardTitle>
                  <CardDescription className="text-slate-300">Preview and copy your JSON-LD code</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {isValid ? (
                  <Badge className="bg-green-100 text-green-800 border border-green-200">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Valid
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 border border-red-200">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    Invalid
                  </Badge>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-lg"
                  onClick={handleCopyCode}
                >
                  {copied ? <CheckCircle className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-slate-900 rounded-xl p-4 text-sm text-slate-300 overflow-x-auto max-h-96 overflow-y-auto">
                <code>{JSON.stringify(schemaData[schemaType as keyof typeof schemaData], null, 2)}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
