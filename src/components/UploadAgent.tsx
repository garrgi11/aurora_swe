import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UploadAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadAgent = ({ isOpen, onClose }: UploadAgentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    repoType: "github",
    repoUrl: "",
    description: "",
    purpose: "",
    category: "",
    pricingFree: "",
    pricingPremium: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-pastel-lavender" />
            <h2 className="text-xl font-semibold">Upload AI Agent</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-pastel-lavender/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Basic Information</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Agent Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your AI agent's name"
                className="border-pastel-lavender/30 focus:border-pastel-lavender"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Repository Type</label>
              <Select
                value={formData.repoType}
                onValueChange={(value) => handleSelectChange("repoType", value)}
              >
                <SelectTrigger className="border-pastel-lavender/30 focus:border-pastel-lavender">
                  <SelectValue placeholder="Select repository type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="github">GitHub</SelectItem>
                  <SelectItem value="huggingface">Hugging Face</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Repository URL</label>
              <Input
                name="repoUrl"
                value={formData.repoUrl}
                onChange={handleChange}
                placeholder="Enter repository URL"
                className="border-pastel-lavender/30 focus:border-pastel-lavender"
                required
              />
            </div>
          </div>

          {/* Agent Details */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Agent Details</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your AI agent's capabilities"
                className="border-pastel-lavender/30 focus:border-pastel-lavender min-h-[100px]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Purpose</label>
              <Textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="What problems does your agent solve?"
                className="border-pastel-lavender/30 focus:border-pastel-lavender"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger className="border-pastel-lavender/30 focus:border-pastel-lavender">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="smart-contract">Smart Contract</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="voice">Voice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Pricing</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Free Tier Features</label>
              <Textarea
                name="pricingFree"
                value={formData.pricingFree}
                onChange={handleChange}
                placeholder="What features are included in the free tier?"
                className="border-pastel-lavender/30 focus:border-pastel-lavender"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Premium Tier Features & Pricing</label>
              <Textarea
                name="pricingPremium"
                value={formData.pricingPremium}
                onChange={handleChange}
                placeholder="Describe premium features and pricing"
                className="border-pastel-lavender/30 focus:border-pastel-lavender"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4 border-t border-pastel-lavender/20">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-pastel-lavender hover:bg-pastel-lavender/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-pastel-lavender hover:bg-pastel-lavender/80 text-white"
            >
              Upload Agent
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadAgent; 