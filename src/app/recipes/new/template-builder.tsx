"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heading1,
  Heading2,
  Heading3,
  NotepadTextIcon as Paragraph,
  ImageIcon as Image,
  List,
  Table,
  Code,
  Quote,
  Trash2,
  Settings,
  Eye,
  ArrowUp,
  ArrowDown,
} from "lucide-react"

// Define block types
const blockTypes = [
  { id: "heading1", name: "Heading 1", icon: Heading1 },
  { id: "heading2", name: "Heading 2", icon: Heading2 },
  { id: "heading3", name: "Heading 3", icon: Heading3 },
  { id: "paragraph", name: "Paragraph", icon: Paragraph },
  { id: "image", name: "Image", icon: Image },
  { id: "list", name: "List", icon: List },
  { id: "table", name: "Table", icon: Table },
  { id: "code", name: "Code Block", icon: Code },
  { id: "quote", name: "Quote", icon: Quote },
]

// Initial blocks
const initialBlocks = [
  { id: "block-1", type: "heading1", content: "{{product_name}}", settings: {} },
  { id: "block-2", type: "paragraph", content: "{{product_description}}", settings: {} },
  { id: "block-3", type: "heading2", content: "Features", settings: {} },
  { id: "block-4", type: "list", content: "{{product_features}}", settings: { listType: "bullet" } },
  { id: "block-5", type: "heading2", content: "Specifications", settings: {} },
  { id: "block-6", type: "table", content: "{{product_specs}}", settings: {} },
]

export default function TemplateBuilder() {
  const [blocks, setBlocks] = useState(initialBlocks)
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)
  const [templateName, setTemplateName] = useState("Product Review Template")
  const [templateDescription, setTemplateDescription] = useState("A template for product review pages")

  // Move block up
  const moveBlockUp = (index: number) => {
    if (index === 0) return
    const newBlocks = [...blocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index - 1]
    newBlocks[index - 1] = temp
    setBlocks(newBlocks)
  }

  // Move block down
  const moveBlockDown = (index: number) => {
    if (index === blocks.length - 1) return
    const newBlocks = [...blocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index + 1]
    newBlocks[index + 1] = temp
    setBlocks(newBlocks)
  }

  // Add new block
  const addBlock = (type: string) => {
    const newBlock = {
      id: `block-${Date.now()}`,
      type,
      content: `{{new_${type}_content}}`,
      settings: {},
    }
    setBlocks([...blocks, newBlock])
    setSelectedBlock(newBlock.id)
  }

  // Delete block
  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter((block) => block.id !== id))
    if (selectedBlock === id) {
      setSelectedBlock(null)
    }
  }

  // Update block content
  const updateBlockContent = (id: string, content: string) => {
    setBlocks(
      blocks.map((block) => {
        if (block.id === id) {
          return { ...block, content }
        }
        return block
      }),
    )
  }

  // Get selected block
  const getSelectedBlock = () => {
    return blocks.find((block) => block.id === selectedBlock)
  }

  // Render block icon
  const renderBlockIcon = (type: string) => {
    const blockType = blockTypes.find((bt) => bt.id === type)
    if (!blockType) return <Paragraph className="h-5 w-5" />
    const Icon = blockType.icon
    return <Icon className="h-5 w-5" />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Template Builder</h2>
          <p className="text-slate-400">Create or edit your content template</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl">
            <Eye className="mr-2 h-5 w-5" />
            Preview
          </Button>
          <Button className="btn-primary rounded-xl">Save Template</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Template Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template-name" className="text-slate-300">
                  Template Name
                </Label>
                <Input
                  id="template-name"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="input-enhanced rounded-xl h-12 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="template-description" className="text-slate-300">
                  Description
                </Label>
                <Textarea
                  id="template-description"
                  value={templateDescription}
                  onChange={(e) => setTemplateDescription(e.target.value)}
                  className="input-enhanced rounded-xl text-white resize-none"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-none rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Content Blocks</CardTitle>
              <CardDescription className="text-slate-300">
                Build your template structure with content blocks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {blocks.map((block, index) => (
                  <div
                    key={block.id}
                    className={`p-4 rounded-xl border ${
                      selectedBlock === block.id ? "border-blue-500 bg-white/10" : "border-white/10 bg-white/5"
                    } hover:bg-white/10 transition-colors cursor-pointer`}
                    onClick={() => setSelectedBlock(block.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col space-y-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 p-0 text-slate-400 hover:text-white hover:bg-white/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              moveBlockUp(index)
                            }}
                            disabled={index === 0}
                          >
                            <ArrowUp className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 p-0 text-slate-400 hover:text-white hover:bg-white/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              moveBlockDown(index)
                            }}
                            disabled={index === blocks.length - 1}
                          >
                            <ArrowDown className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 rounded-lg bg-white/10">{renderBlockIcon(block.type)}</div>
                          <div>
                            <p className="font-medium text-white">
                              {blockTypes.find((bt) => bt.id === block.type)?.name || "Block"}
                            </p>
                            <p className="text-xs text-slate-400 truncate max-w-[300px]">{block.content}</p>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteBlock(block.id)
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-slate-300 mb-3">Add New Block</p>
                <div className="grid grid-cols-3 gap-2">
                  {blockTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-auto py-3 justify-start"
                      onClick={() => addBlock(type.id)}
                    >
                      <type.icon className="mr-2 h-4 w-4" />
                      <span className="text-sm">{type.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="glass-card border-none rounded-3xl overflow-hidden sticky top-6">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <Settings className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Block Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {selectedBlock ? (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-medium text-slate-300">Block Type</p>
                    <p className="text-white">
                      {blockTypes.find((bt) => bt.id === getSelectedBlock()?.type)?.name || "Block"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="block-content" className="text-slate-300">
                      Content / Placeholder
                    </Label>
                    <Textarea
                      id="block-content"
                      value={getSelectedBlock()?.content || ""}
                      onChange={(e) => updateBlockContent(selectedBlock, e.target.value)}
                      className="input-enhanced rounded-xl text-white resize-none"
                      rows={5}
                      placeholder="Enter content or use {{placeholders}}"
                    />
                    <p className="text-xs text-slate-400">
                      Use {`{{placeholders}}`} to insert dynamic content from your data source
                    </p>
                  </div>

                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-white/5 rounded-xl p-1">
                      <TabsTrigger
                        value="basic"
                        className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                      >
                        Basic
                      </TabsTrigger>
                      <TabsTrigger
                        value="advanced"
                        className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white"
                      >
                        Advanced
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="basic" className="space-y-4 mt-4">
                      {(getSelectedBlock()?.type === "heading1" ||
                        getSelectedBlock()?.type === "heading2" ||
                        getSelectedBlock()?.type === "heading3") && (
                        <div className="space-y-2">
                          <Label htmlFor="heading-id" className="text-slate-300">
                            HTML ID (for anchor links)
                          </Label>
                          <Input
                            id="heading-id"
                            placeholder="section-title"
                            className="input-enhanced rounded-xl h-10 text-white"
                          />
                        </div>
                      )}

                      {getSelectedBlock()?.type === "image" && (
                        <div className="space-y-2">
                          <Label htmlFor="image-alt" className="text-slate-300">
                            Alt Text
                          </Label>
                          <Input
                            id="image-alt"
                            placeholder="{{product_name}} image"
                            className="input-enhanced rounded-xl h-10 text-white"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-lg mt-2"
                          >
                            Generate Alt Text
                          </Button>
                        </div>
                      )}

                      {getSelectedBlock()?.type === "list" && (
                        <div className="space-y-2">
                          <Label htmlFor="list-type" className="text-slate-300">
                            List Type
                          </Label>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-white/10 border-white/10 text-white hover:bg-white/20 rounded-lg flex-1"
                            >
                              Bullet List
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-lg flex-1"
                            >
                              Numbered List
                            </Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="advanced" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="css-classes" className="text-slate-300">
                          CSS Classes
                        </Label>
                        <Input
                          id="css-classes"
                          placeholder="custom-class another-class"
                          className="input-enhanced rounded-xl h-10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="custom-attributes" className="text-slate-300">
                          Custom Attributes
                        </Label>
                        <Input
                          id="custom-attributes"
                          placeholder='data-custom="value"'
                          className="input-enhanced rounded-xl h-10 text-white"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="p-3 rounded-full bg-white/5 mb-3">
                    <Settings className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Select a block to edit its settings</p>
                  <p className="text-sm text-slate-400 mt-1">Click on any block in the template to configure it</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
