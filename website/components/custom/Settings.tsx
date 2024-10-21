"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import RenderGlassCard from "./RenderGlass";
import { useState } from "react";

export default function SettingsTab() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maxConcurrentJobs, setMaxConcurrentJobs] = useState(5);
  return (
    <div>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-white/10 rounded-lg p-1">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
          >
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          {
            <RenderGlassCard>
              <>
                <CardHeader>
                  <CardTitle className="text-orange-400">
                    General Settings
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage general system settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenance-mode" className="text-gray-300">
                      Maintenance Mode
                    </Label>
                    <Switch
                      id="maintenance-mode"
                      checked={maintenanceMode}
                      onCheckedChange={setMaintenanceMode}
                      className="data-[state=checked]:bg-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-name" className="text-gray-300">
                      System Name
                    </Label>
                    <Input
                      id="system-name"
                      placeholder="Enter system name"
                      className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-gray-300">
                      Admin Email
                    </Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="Enter admin email"
                      className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Save Changes
                  </Button>
                </CardFooter>
              </>
            </RenderGlassCard>
          }
        </TabsContent>
        <TabsContent value="performance">
          {
            <RenderGlassCard>
              <>
                <CardHeader>
                  <CardTitle className="text-orange-400">
                    Performance Settings
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Optimize system performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Max Concurrent Jobs</Label>
                    <Slider
                      value={[maxConcurrentJobs]}
                      onValueChange={(value) => setMaxConcurrentJobs(value[0])}
                      max={10}
                      step={1}
                      className="[&_[role=slider]]:bg-orange-500"
                    />
                    <p className="text-sm text-gray-400">
                      Current value: {maxConcurrentJobs}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-quality" className="text-gray-300">
                      Default Video Quality
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="video-quality"
                        className="bg-white/5 border-white/20 text-gray-200"
                      >
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/20">
                        <SelectItem value="1080p">1080p</SelectItem>
                        <SelectItem value="720p">720p</SelectItem>
                        <SelectItem value="480p">480p</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storage-limit" className="text-gray-300">
                      Storage Limit (GB)
                    </Label>
                    <Input
                      id="storage-limit"
                      type="number"
                      placeholder="Enter storage limit"
                      className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Apply Settings
                  </Button>
                </CardFooter>
              </>
            </RenderGlassCard>
          }
        </TabsContent>
        <TabsContent value="security">
          {
            <RenderGlassCard>
              <>
                <CardHeader>
                  <CardTitle className="text-orange-400">
                    Security Settings
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage system security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-policy" className="text-gray-300">
                      Password Policy
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="password-policy"
                        className="bg-white/5 border-white/20 text-gray-200"
                      >
                        <SelectValue placeholder="Select policy" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/20">
                        <SelectItem value="strong">
                          Strong (12+ chars, uppercase, lowercase, number,
                          symbol)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (8+ chars, uppercase, lowercase, number)
                        </SelectItem>
                        <SelectItem value="basic">
                          Basic (8+ characters)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor" className="text-gray-300">
                      Two-Factor Authentication
                    </Label>
                    <Switch
                      id="two-factor"
                      className="data-[state=checked]:bg-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout" className="text-gray-300">
                      Session Timeout (minutes)
                    </Label>
                    <Input
                      id="session-timeout"
                      type="number"
                      placeholder="Enter timeout duration"
                      className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key" className="text-gray-300">
                      API Key
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id="api-key"
                        type="password"
                        value="••••••••••••••••"
                        readOnly
                        className="bg-white/5 border-white/20 text-gray-200"
                      />
                      <Button variant="outline" className="shrink-0">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Update Security Settings
                  </Button>
                </CardFooter>
              </>
            </RenderGlassCard>
          }
        </TabsContent>
      </Tabs>
    </div>
  );
}
