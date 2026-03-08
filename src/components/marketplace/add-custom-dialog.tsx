"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface AddCustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: {
    name: string;
    category: "skill" | "agent" | "mcp-server" | "plugin";
    description?: string;
    author?: string;
    repositoryUrl?: string;
    homepage?: string;
    transportType?: string;
    packageName?: string;
    installCommand?: string;
    tags?: string[];
  }) => void;
  isPending: boolean;
}

export function AddCustomDialog({ open, onOpenChange, onSubmit, isPending }: AddCustomDialogProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<"skill" | "agent" | "mcp-server" | "plugin">("mcp-server");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [repositoryUrl, setRepositoryUrl] = useState("");
  const [homepage, setHomepage] = useState("");
  const [transportType, setTransportType] = useState("");
  const [packageName, setPackageName] = useState("");
  const [installCommand, setInstallCommand] = useState("");
  const [tags, setTags] = useState("");

  const reset = () => {
    setName("");
    setCategory("mcp-server");
    setDescription("");
    setAuthor("");
    setRepositoryUrl("");
    setHomepage("");
    setTransportType("");
    setPackageName("");
    setInstallCommand("");
    setTags("");
  };

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit({
      name: name.trim(),
      category,
      description: description || undefined,
      author: author || undefined,
      repositoryUrl: repositoryUrl || undefined,
      homepage: homepage || undefined,
      transportType: transportType || undefined,
      packageName: packageName || undefined,
      installCommand: installCommand || undefined,
      tags: tags ? tags.split(",").map((t) => t.trim()).filter(Boolean) : undefined,
    });
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Custom Item</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium">Name *</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. My MCP Server" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Category *</label>
            <Select value={category} onValueChange={(v) => setCategory((v ?? "mcp-server") as typeof category)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mcp-server">MCP Server</SelectItem>
                <SelectItem value="skill">Skill</SelectItem>
                <SelectItem value="agent">Agent</SelectItem>
                <SelectItem value="plugin">Plugin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Description</label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What does it do?" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Author</label>
              <Input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author name" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Package Name</label>
              <Input value={packageName} onChange={(e) => setPackageName(e.target.value)} placeholder="e.g. @org/package" />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Repository URL</label>
            <Input value={repositoryUrl} onChange={(e) => setRepositoryUrl(e.target.value)} placeholder="https://github.com/..." />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Homepage</label>
            <Input value={homepage} onChange={(e) => setHomepage(e.target.value)} placeholder="https://..." />
          </div>

          {category === "mcp-server" && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium">Install Command</label>
                <Input value={installCommand} onChange={(e) => setInstallCommand(e.target.value)} placeholder="e.g. npx -y @org/server" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Transport Type</label>
                <Input value={transportType} onChange={(e) => setTransportType(e.target.value)} placeholder="stdio, http" />
              </div>
            </>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium">Tags (comma-separated)</label>
            <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="e.g. docs, ai, tools" />
          </div>

          <Button className="w-full" disabled={!name.trim() || isPending} onClick={handleSubmit}>
            {isPending ? "Adding..." : "Add to Marketplace"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
