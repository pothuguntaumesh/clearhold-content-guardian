
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ClipboardCheck, ThumbsUp, ThumbsDown, Upload, FileUp, Loader, X } from 'lucide-react';
import { toast } from 'sonner';
import { usStates } from '@/lib/us-states';

const professionOptions = [
  "Registered Investment Advisor (RIA)",
  "Insurance Agent (Life / Health / Annuities)",
  "Financial Coach (Licensed or Non-Licensed)",
  "Wealth Manager / Breakaway Advisor",
  "Retirement / Medicare Planner",
];

interface FlaggedIssue {
  id: string;
  text: string;
  severity: 'high' | 'medium' | 'low';
}

const ContentChecker = () => {
  const [selectedProfession, setSelectedProfession] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [flaggedIssues, setFlaggedIssues] = useState<FlaggedIssue[]>([]);
  const [suggestedRewrite, setSuggestedRewrite] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  // Mock function to simulate API call to backend
  const checkCompliance = async () => {
    if (!selectedProfession) {
      toast.error("Please select your profession type first");
      return;
    }
    
    if (!selectedState) {
      toast.error("Please select your state");
      return;
    }
    
    if (!content || content.trim().length < 10) {
      toast.error("Please enter more content to check");
      return;
    }

    setIsChecking(true);
    setHasSubmitted(false);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response - in real app this would come from your backend
    const mockIssues: FlaggedIssue[] = [
      { 
        id: "1", 
        text: "Using absolute terms like 'guarantee' or 'always' when discussing investment returns", 
        severity: "high" 
      },
      { 
        id: "2", 
        text: "Specific performance numbers without proper disclosures", 
        severity: "medium" 
      },
      { 
        id: "3", 
        text: "Vague language about fees that could be misleading", 
        severity: "low" 
      },
    ];
    
    const mockRewrite = content.replace(
      /guarantee|always|best|highest return/gi, 
      match => match === 'guarantee' ? 'potential' : 
               match === 'always' ? 'typically' : 
               match === 'best' ? 'suitable' : 'competitive return'
    );
    
    setFlaggedIssues(mockIssues);
    setSuggestedRewrite(mockRewrite);
    setIsChecking(false);
    setHasSubmitted(true);
    
    if (mockIssues.length === 0) {
      toast.success("No compliance issues found!");
    } else {
      toast.warning(`Found ${mockIssues.length} potential compliance concerns`);
    }
  };

  const handleClearAll = () => {
    setContent("");
    setSuggestedRewrite("");
    setFlaggedIssues([]);
    setHasSubmitted(false);
    toast.info("Content cleared");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(suggestedRewrite);
    toast.success("Suggested text copied to clipboard");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would handle file upload to backend
      toast.success(`File "${file.name}" uploaded`);
    }
  };
  
  const handleFeedback = (isPositive: boolean) => {
    toast.success(`Thank you for your ${isPositive ? 'positive' : 'negative'} feedback!`);
    // In a real app, send this feedback to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Content Compliance Checker</h1>
          <p className="text-center text-muted-foreground">
            Check your marketing content against regulatory guidelines for financial professionals
          </p>
        </div>
        
        <Card className="animate-fade-in border border-border/50 shadow-md">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Professional Type</label>
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="font-medium">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {usStates.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-medium">Your Content</label>
              <Textarea 
                placeholder="Enter or paste your content here..." 
                className="min-h-[200px]" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 items-center">
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  onClick={checkCompliance} 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  disabled={isChecking}
                >
                  {isChecking ? (
                    <span className="flex items-center">
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      <span>Checking</span>
                    </span>
                  ) : "Check Compliance"}
                </Button>
                
                <Button
                  onClick={handleClearAll}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear All
                </Button>
              </div>
              
              <div className="relative w-full sm:w-auto">
                <input
                  type="file"
                  id="file-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
                <Button variant="outline" className="w-full sm:w-auto border-dashed border-2">
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Firm-Specific Document
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {isChecking && (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">{Math.floor(Math.random() * 100)}%</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Analyzing content for compliance issues...</p>
              <p className="text-xs text-muted-foreground max-w-md">Checking against regulatory guidelines specific to {selectedProfession} in {selectedState}</p>
            </div>
          </div>
        )}
        
        {hasSubmitted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-scale-in">
            <Card className="border border-border/50 shadow-md overflow-hidden">
              <div className="bg-secondary/50 p-3">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="text-destructive mr-2">{flaggedIssues.length}</span> 
                  Flagged Issues
                </h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <Separator />
                
                {flaggedIssues.length > 0 ? (
                  <div className="space-y-4">
                    {flaggedIssues.map((issue) => (
                      <div key={issue.id} className="p-3 rounded-md bg-secondary/50 border border-border/50">
                        <div className="flex items-start gap-2">
                          <div className={`
                            h-3 w-3 mt-1.5 rounded-full flex-shrink-0
                            ${issue.severity === 'high' ? 'bg-destructive' : 
                              issue.severity === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'}
                          `} />
                          <p className="text-sm">{issue.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No issues detected</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 shadow-md overflow-hidden">
              <div className="bg-secondary/50 p-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Suggested Rewrite</h3>
                  <Button size="sm" variant="ghost" onClick={handleCopyText}>
                    <ClipboardCheck className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <Separator />
                
                <div className="bg-secondary/30 rounded-md p-4 min-h-[200px] border border-border/30">
                  {suggestedRewrite || (
                    <p className="text-muted-foreground text-center py-8">
                      Suggested rewrite will appear here
                    </p>
                  )}
                </div>
                
                <div className="flex justify-center pt-2">
                  <div className="flex space-x-6">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleFeedback(true)}
                      className="hover-scale rounded-full"
                    >
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleFeedback(false)}
                      className="hover-scale rounded-full"
                    >
                      <ThumbsDown className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentChecker;
