'use client'
import RenderGlassCard from "./RenderGlass"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import {  Video, Play, Pause, Download,  Trash2 } from 'lucide-react'

export default function VideoGeneration() {
  // Dummy backend simulation
const dummyBackend = {
    videos: [
      { id: 1, title: 'AI Product Demo', status: 'completed', createdAt: '2023-06-15 14:30', duration: 120 },
      { id: 2, title: 'Company Introduction', status: 'processing', createdAt: '2023-06-15 15:45', duration: 180 },
      { id: 3, title: 'Tutorial Series', status: 'queued', createdAt: '2023-06-15 16:20', duration: 300 },
    ] as Video[],
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'inactive' },
    ] as User[],
    contentLibrary: [
      { id: 1, title: 'Product Demo Template', type: 'template', lastModified: '2023-08-10', thumbnail: '/placeholder.svg?height=100&width=100' },
      { id: 2, title: 'Explainer Video Assets', type: 'assets', lastModified: '2023-08-09', thumbnail: '/placeholder.svg?height=100&width=100' },
      { id: 3, title: 'Tutorial Series Template', type: 'template', lastModified: '2023-08-08', thumbnail: '/placeholder.svg?height=100&width=100' },
    ] as ContentItem[],
    addVideo: (video: Omit<Video, 'id' | 'status' | 'createdAt'>): Video => {
      const newVideo: Video = { ...video, id: dummyBackend.videos.length + 1, status: 'queued', createdAt: new Date().toLocaleString() }
      dummyBackend.videos.push(newVideo)
      return newVideo
    },
    addUser: (user: Omit<User, 'id' | 'status'>): User => {
      const newUser: User = { ...user, id: dummyBackend.users.length + 1, status: 'active' }
      dummyBackend.users.push(newUser)
      return newUser
    },
    addContentItem: (item: Omit<ContentItem, 'id' | 'lastModified'>): ContentItem => {
      const newItem: ContentItem = { ...item, id: dummyBackend.contentLibrary.length + 1, lastModified: new Date().toLocaleString() }
      dummyBackend.contentLibrary.push(newItem)
      return newItem
    },
    deleteVideo: (id: number) => {
      dummyBackend.videos = dummyBackend.videos.filter(video => video.id !== id)
    },
    deleteUser: (id: number) => {
      dummyBackend.users = dummyBackend.users.filter(user => user.id !== id)
    },
    deleteContentItem: (id: number) => {
      dummyBackend.contentLibrary = dummyBackend.contentLibrary.filter(item => item.id !== id)
    },
  }
    // Define TypeScript types
   const [videos, setVideos] = useState(dummyBackend.videos)


    const [isAddVideoOpen, setIsAddVideoOpen] = useState(false)
  

    type Video = {
        id: number;
        title: string;
        style: string;
        description: string;
        status: 'completed' | 'processing' | 'queued';
        createdAt: string;
        duration: number;
      };

  type User = {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'User';
    status: 'active' | 'inactive';
  };
  
  type ContentItem = {
    id: number;
    title: string;
    type: 'template' | 'assets';
    lastModified: string;
    thumbnail: string;
  };



  const handleAddVideo = (newVideo: Video) => {
    const addedVideo = dummyBackend.addVideo(newVideo)
    setVideos([...videos, addedVideo])
    setIsAddVideoOpen(false)
  }

      const handleDeleteVideo = (id: number) => {
        dummyBackend.deleteVideo(id)
        setVideos(videos.filter(video => video.id !== id))
      }
    
   
    
    return(
        <div>
                    <div className="space-y-6">
                    <RenderGlassCard>
                      <>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-orange-400">Video Generation</CardTitle>
                            <Dialog open={isAddVideoOpen} onOpenChange={setIsAddVideoOpen}>
                              <DialogTrigger asChild>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                  <Video className="mr-2 h-4 w-4" /> New Video
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-black/90 backdrop-filter backdrop-blur-xl border border-white/20">
                                <DialogHeader>
                                  <DialogTitle className="text-orange-400">Create New Video</DialogTitle>
                                  <DialogDescription className="text-gray-400">Enter details for your new AI-generated video.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={(e) => {
                                  e.preventDefault()
                                  const formData = new FormData(e.target as HTMLFormElement)
                                  handleAddVideo({
                                    title: formData.get('title') as string,
                                    id: 0,
                                    description: formData.get('description') as string,
                                    style: formData.get('style') as string,
                                    duration: Number(formData.get('duration')),
                                    status: formData.get('status') as 'completed' | 'processing' | 'queued',
                                    createdAt: formData.get('created') as string,
                                  })
                                }} className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="title" className="text-gray-300">Video Title</Label>
                                    <Input id="title" name="title" placeholder="Enter video title" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="description" className="text-gray-300">Description</Label>
                                    <Textarea id="description" name="description" placeholder="Enter video description" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="style" className="text-gray-300">Video Style</Label>
                                    <Select name="style" required>
                                      <SelectTrigger className="bg-white/5 border-white/20 text-gray-200">
                                        <SelectValue placeholder="Select style" />
                                      </SelectTrigger>
                                      <SelectContent className="bg-black/90 border-white/20">
                                        <SelectItem value="cinematic">Cinematic</SelectItem>
                                        <SelectItem value="cartoon">Cartoon</SelectItem>
                                        <SelectItem value="realistic">Realistic</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="duration" className="text-gray-300">Duration (seconds)</Label>
                                    <Input id="duration" name="duration" type="number" min="5" max="300" placeholder="Enter duration" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <DialogFooter>
                                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Create Video</Button>
                                  </DialogFooter>
                                </form>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <CardDescription className="text-gray-400">Manage and monitor your video generation tasks</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-gray-300">Title</TableHead>
                                <TableHead className="text-gray-300">Status</TableHead>
                                <TableHead className="text-gray-300">Created At</TableHead>
                                <TableHead className="text-gray-300">Duration</TableHead>
                                <TableHead className="text-gray-300">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {videos.map((video) => (
                                <TableRow key={video.id}>
                                  <TableCell className="font-medium text-gray-200">{video.title}</TableCell>
                                  <TableCell>
                                    <Badge variant="secondary" className={
                                      video.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                      video.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                                      'bg-yellow-500/20 text-yellow-400'
                                    }>
                                      {video.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-gray-400">{video.createdAt}</TableCell>
                                  <TableCell className="text-gray-400">{video.duration}s</TableCell>
                                  <TableCell>
                                    <div className="flex space-x-2">
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                                              {video.status === 'processing' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                            </Button>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p>{video.status === 'processing' ? 'Pause' : 'Play'}</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                                              <Download className="h-4 w-4" />
                                            </Button>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p>Download</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400" onClick={() => handleDeleteVideo(video.id)}>
                                              <Trash2 className="h-4 w-4" />
                                            </Button>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p>Delete</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </>
                    </RenderGlassCard>
                  </div>
        </div>
    );
}