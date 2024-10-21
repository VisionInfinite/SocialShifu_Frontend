'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Bell, Home, Settings, Users, Video, Play, Pause, Download, Edit, Trash2, UserPlus, LogOut, HelpCircle, BarChart as BarChartIcon, PieChart as PieChartIcon, TrendingUp, Zap, User, Menu, FileText, Briefcase, DollarSign, Plus } from 'lucide-react'

// Define TypeScript types
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const [videos, setVideos] = useState(dummyBackend.videos)
  const [users, setUsers] = useState(dummyBackend.users)
  const [contentLibrary, setContentLibrary] = useState(dummyBackend.contentLibrary)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isAddVideoOpen, setIsAddVideoOpen] = useState(false)
  const [isAddContentItemOpen, setIsAddContentItemOpen] = useState(false)
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [maxConcurrentJobs, setMaxConcurrentJobs] = useState(5)
  const [systemLoad, setSystemLoad] = useState(67)
  const [notifications] = useState(3)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemLoad(prevLoad => {
        const newLoad = prevLoad + (Math.random() * 10 - 5)
        return Math.min(Math.max(newLoad, 0), 100)
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Removed duplicate interface definitions

  const handleAddVideo = (newVideo: Video) => {
    const addedVideo = dummyBackend.addVideo(newVideo)
    setVideos([...videos, addedVideo])
    setIsAddVideoOpen(false)
  }

  const handleAddUser = (newUser: Omit<User, 'id' | 'status'>) => {
      const addedUser = dummyBackend.addUser(newUser)
      setUsers([...users, addedUser])
      setIsAddUserOpen(false)
    }

  const handleAddContentItem = (newItem: Omit<ContentItem, "id" | "createdAt">) => {
    const addedItem = dummyBackend.addContentItem(newItem as Omit<ContentItem, "id" | "createdAt"> & { type: "template" | "assets" })
    setContentLibrary([...contentLibrary, addedItem])
    setIsAddContentItemOpen(false)
  }

  const handleDeleteVideo = (id: number) => {
    dummyBackend.deleteVideo(id)
    setVideos(videos.filter(video => video.id !== id))
  }

  const handleDeleteUser = (id: number) => {
    dummyBackend.deleteUser(id)
    setUsers(users.filter(user => user.id !== id))
  }

  const handleDeleteContentItem = (id: string) => {
    dummyBackend.deleteContentItem(Number(id))
    setContentLibrary(contentLibrary.filter(item => item.id !== Number(id)))
  }

  const analyticsData = [
    { name: 'Jan', videos: 400, users: 240 },
    { name: 'Feb', videos: 300, users: 139 },
    { name: 'Mar', videos: 200, users: 980 },
    { name: 'Apr', videos: 278, users: 390 },
    { name: 'May', videos: 189, users: 480 },
    { name: 'Jun', videos: 239, users: 380 },
    { name: 'Jul', videos: 349, users: 430 },
  ]

  const renderGlassCard = (children: React.ReactNode) => (
    <Card className="bg-white/10 backdrop-filter backdrop-blur-lg border-white/20 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
      {children}
    </Card>
  )

  const NavItem = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={activeTab === name ? 'secondary' : 'ghost'}
        className={`w-full justify-start text-left capitalize transition-all duration-200 ${
          activeTab === name
            ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30'
            : 'text-gray-300 hover:bg-white/10 hover:text-orange-400'
        }`}
        onClick={() => {
          setActiveTab(name)
          setIsMobileMenuOpen(false)
        }}
      >
        {icon}
        <span className="ml-2">{name.replace('-', ' ')}</span>
      </Button>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 to-purple-900 text-white">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar for larger screens */}
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex md:w-64 bg-black/20 backdrop-filter backdrop-blur-xl border-r border-white/10"
        >
          <div className="w-full">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-orange-400">AI Video Generator</h1>
            </div>
            <nav className="mt-6 space-y-1 px-2">
              <NavItem icon={<Home className="h-4 w-4" />} name="home" />
              <NavItem icon={<Video className="h-4 w-4" />} name="video-generation" />
              <NavItem icon={<Users className="h-4 w-4" />} name="user-management" />
              <NavItem icon={<BarChartIcon className="h-4 w-4" />} name="analytics" />
              <NavItem icon={<FileText className="h-4 w-4" />} name="content-library" />
              <NavItem icon={<Briefcase className="h-4 w-4" />} name="projects" />
              <NavItem icon={<DollarSign className="h-4 w-4" />} name="billing" />
              <NavItem icon={<Settings className="h-4 w-4" />} name="settings" />
            </nav>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-black/10 backdrop-filter backdrop-blur-lg">
          {/* Header */}
          <header className="bg-white/10 backdrop-filter backdrop-blur-xl border-b border-white/10 sticky top-0 z-10">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <Menu className="h-6 w-6" />
                </Button>
                <h2 className="text-xl font-semibold capitalize text-orange-400">{activeTab.replace('-', ' ')}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-orange-400 hover:bg-white/10">
                        <Bell className="h-5 w-5" />
                        {notifications > 0 && (
                          <span className="absolute top-0 right-0 h-2 w-2 bg-orange-500 rounded-full" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You have {notifications} new notifications</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                
                transition={{ duration: 0.2 }}
                className="md:hidden bg-black/20 backdrop-filter backdrop-blur-xl border-b border-white/10"
              >
                <nav className="p-4 space-y-2">
                  <NavItem icon={<Home className="h-4 w-4" />} name="home" />
                  <NavItem icon={<Video className="h-4 w-4" />} name="video-generation" />
                  <NavItem icon={<Users className="h-4 w-4" />} name="user-management" />
                  <NavItem icon={<BarChartIcon className="h-4 w-4" />} name="analytics" />
                  <NavItem icon={<FileText className="h-4 w-4" />} name="content-library" />
                  <NavItem icon={<Briefcase className="h-4 w-4" />} name="projects" />
                  <NavItem icon={<DollarSign className="h-4 w-4" />} name="billing" />
                  <NavItem icon={<Settings className="h-4 w-4" />} name="settings" />
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content */}
          <main className="flex-1 overflow-auto p-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'home' && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        { title: 'Total Videos', icon: <Video className="h-4 w-4" />, value: videos.length, subtext: `${videos.filter(v => v.status === 'completed').length} completed` },
                        { title: 'Active Users', icon: <Users className="h-4 w-4" />, value: users.filter(u => u.status === 'active').length, subtext: `${users.length} total users` },
                        { title: 'Avg. Processing Time', icon: <Zap className="h-4 w-4" />, value: '1.2 min', subtext: 'Per video' },
                        { title: 'System Load', icon: <TrendingUp className="h-4 w-4" />, value: `${Math.round(systemLoad)}%`, subtext: 'GPU utilization' },
                      ].map((item, index) => renderGlassCard(
                        <CardContent key={index} className="p-6">
                          <div className="flex items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-300">{item.title}</CardTitle>
                            <div className="text-orange-400">{item.icon}</div>
                          </div>
                          <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                          <p className="text-xs text-gray-400">{item.subtext}</p>
                        </CardContent>
                      ))}
                    </div>

                    {renderGlassCard(
                      <CardContent className="p-6">
                        <CardTitle className="text-lg font-semibold mb-4 text-orange-400">Recent Activity</CardTitle>
                        <div className="space-y-4">
                          {videos.slice(0, 3).map((video, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className={`w-2 h-2 rounded-full ${
                                  video.status === 'completed' ? 'bg-green-500' :
                                  video.status === 'processing' ? 'bg-blue-500' : 'bg-yellow-500'
                                }`} />
                                <div>
                                  <p className="text-sm font-medium text-gray-200">{video.title}</p>
                                  <p className="text-xs text-gray-400">{video.createdAt}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="capitalize">{video.status}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </div>
                )}

                {activeTab === 'video-generation' && (
                  <div className="space-y-6">
                    {renderGlassCard(
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
                    )}
                  </div>
                )}

                {activeTab === 'user-management' && (
                  <div className="space-y-6">
                    {renderGlassCard(
                      <>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-orange-400">User Management</CardTitle>
                            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                              <DialogTrigger asChild>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                  <UserPlus className="mr-2 h-4 w-4" /> Add User
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-black/90 backdrop-filter backdrop-blur-xl border border-white/20">
                                <DialogHeader>
                                  <DialogTitle className="text-orange-400">Add New User</DialogTitle>
                                  <DialogDescription className="text-gray-400">Enter the details of the new user.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={(e) => {
                                  e.preventDefault()
                                  const formData = new FormData(e.target as HTMLFormElement)
                                  handleAddUser({
                                      name: formData.get('name') as string,
                                      email: formData.get('email') as string,
                                      role: formData.get('role') as "Admin" | "User",
                                    } as Omit<User, 'id' | 'status'>)
                                }} className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                                    <Input id="name" name="name" placeholder="Enter user's name" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="Enter user's email" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="role" className="text-gray-300">Role</Label>
                                    <Select name="role" required>
                                      <SelectTrigger className="bg-white/5 border-white/20 text-gray-200">
                                        <SelectValue placeholder="Select role" />
                                      </SelectTrigger>
                                      <SelectContent className="bg-black/90 border-white/20">
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="user">User</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <DialogFooter>
                                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Add User</Button>
                                  </DialogFooter>
                                </form>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <CardDescription className="text-gray-400">Manage user accounts and permissions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-gray-300">Name</TableHead>
                                <TableHead className="text-gray-300">Email</TableHead>
                                <TableHead className="text-gray-300">Role</TableHead>
                                <TableHead className="text-gray-300">Status</TableHead>
                                <TableHead className="text-gray-300">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {users.map((user) => (
                                <TableRow key={user.id}>
                                  <TableCell className="font-medium text-gray-200">{user.name}</TableCell>
                                  <TableCell className="text-gray-300">{user.email}</TableCell>
                                  <TableCell className="text-gray-300">{user.role}</TableCell>
                                  <TableCell>
                                    <Badge className={user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                                      {user.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex space-x-2">
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400">
                                              <Edit className="h-4 w-4" />
                                            </Button>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p>Edit</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-orange-400" onClick={() => handleDeleteUser(user.id)}>
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
                    )}
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    {renderGlassCard(
                      <>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-orange-400">Analytics Overview</CardTitle>
                            <Select defaultValue="30d">
                              <SelectTrigger className="w-[180px] bg-white/5 border-white/20 text-gray-200">
                                <SelectValue placeholder="Select period" />
                              </SelectTrigger>
                              <SelectContent className="bg-black/90 border-white/20">
                                <SelectItem value="7d">Last 7 days</SelectItem>
                                <SelectItem value="30d">Last 30 days</SelectItem>
                                <SelectItem value="90d">Last 90 days</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <CardDescription className="text-gray-400">View key metrics and trends</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={analyticsData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                              <XAxis dataKey="name" stroke="#ffffff60" />
                              <YAxis yAxisId="left" stroke="#ffffff60" />
                              <YAxis yAxisId="right" orientation="right" stroke="#ffffff60" />
                              <RechartsTooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }} />
                              <Legend />
                              <Line yAxisId="left" type="monotone" dataKey="videos" stroke="#ff7f50" strokeWidth={2} dot={{ fill: '#ff7f50', strokeWidth: 2 }} activeDot={{ r: 8 }} />
                              <Line yAxisId="right" type="monotone" dataKey="users" stroke="#ffa500" strokeWidth={2} dot={{ fill: '#ffa500', strokeWidth: 2 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      {renderGlassCard(
                        <>
                          <CardHeader>
                            <CardTitle className="text-orange-400">Video Categories</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: 'Tutorials', value: 400 },
                                    { name: 'Product Demos', value: 300 },
                                    { name: 'Explainers', value: 200 },
                                    { name: 'Ads', value: 100 },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                 {analyticsData.map((entry, index) => (
  <div key={index}>
    {analyticsData.map((_, innerIndex) => (
      <span key={innerIndex}></span>
    ))}
  </div>
))}

                                </Pie>
                                <RechartsTooltip />
                              </PieChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </>
                      )}

                      {renderGlassCard(
                        <>
                          <CardHeader>
                            <CardTitle className="text-orange-400">User Growth</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                              <BarChart data={analyticsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                                <XAxis dataKey="name" stroke="#ffffff60" />
                                <YAxis stroke="#ffffff60" />
                                <RechartsTooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }} />
                                <Bar dataKey="users" fill="#ffa500" />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'content-library' && (
                  <div className="space-y-6">
                    {renderGlassCard(
                      <>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-orange-400">Content Library</CardTitle>
                            <Dialog open={isAddContentItemOpen} onOpenChange={setIsAddContentItemOpen}>
                              <DialogTrigger asChild>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                  <Plus className="mr-2 h-4 w-4" /> Add Item
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-black/90 backdrop-filter backdrop-blur-xl border border-white/20">
                                <DialogHeader>
                                  <DialogTitle className="text-orange-400">Add New Content Item</DialogTitle>
                                  <DialogDescription className="text-gray-400">Enter details for the new content item.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={(e) => {
                                  e.preventDefault()
                                  const formData = new FormData(e.target as HTMLFormElement)
                                  handleAddContentItem({
                                    title: formData.get('title') as string,
                                    type: formData.get('type') as "template" | "assets",
                                    thumbnail: '/placeholder.svg?height=100&width=100', // Add a default thumbnail
                                    lastModified: new Date().toLocaleString() // Add the lastModified property
                                  })
                                }} className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="title" className="text-gray-300">Title</Label>
                                    <Input id="title" name="title" placeholder="Enter item title" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="type" className="text-gray-300">Type</Label>
                                    <Select name="type" required>
                                      <SelectTrigger className="bg-white/5 border-white/20 text-gray-200">
                                        <SelectValue placeholder="Select type" />
                                      </SelectTrigger>
                                      <SelectContent className="bg-black/90 border-white/20">
                                        <SelectItem value="template">Template</SelectItem>
                                        <SelectItem value="assets">Assets</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <DialogFooter>
                                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Add Item</Button>
                                  </DialogFooter>
                                </form>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <CardDescription className="text-gray-400">Manage your video assets and templates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 md:grid-cols-3">
                            {contentLibrary.map((item) => (
                              <Card key={item.id} className="bg-white/5 hover:bg-white/10 transition-colors">
                                <CardHeader>
                                  <CardTitle className="text-sm font-medium text-gray-300">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <img src={item.thumbnail} alt={item.title} className="w-full h-32 object-cover rounded-md mb-2" />
                                  <p className="text-xs text-gray-400">Last modified: {item.lastModified}</p>
                                  <p className="text-xs text-gray-400 capitalize">Type: {item.type}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                  <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-500">Edit</Button>
                                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-500" onClick={() => handleDeleteContentItem(item.id.toString())}>Delete</Button>
                                </CardFooter>
                              </Card>
                            ))}
                          </div>
                        </CardContent>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    {renderGlassCard(
                      <>
                        <CardHeader>
                          <CardTitle className="text-orange-400">Projects</CardTitle>
                          <CardDescription className="text-gray-400">Manage your ongoing and completed projects</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-gray-300">Project Name</TableHead>
                                <TableHead className="text-gray-300">Status</TableHead>
                                <TableHead className="text-gray-300">Deadline</TableHead>
                                <TableHead className="text-gray-300">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {[
                                { name: 'Q3 Marketing Campaign', status: 'In Progress', deadline: '2023-09-30' },
                                { name: 'Product Launch Video', status: 'Completed', deadline: '2023-08-15' },
                                { name: 'Employee Training Series', status: 'Planning', deadline: '2023-10-31' },
                              ].map((project, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium text-gray-200">{project.name}</TableCell>
                                  <TableCell>
                                    <Badge variant="secondary" className={
                                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                                      project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                                      'bg-yellow-500/20 text-yellow-400'
                                    }>
                                      {project.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-gray-400">{project.deadline}</TableCell>
                                  <TableCell>
                                    <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-500">View Details</Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'billing' && (
                  <div className="space-y-6">
                    {renderGlassCard(
                      <>
                        <CardHeader>
                          <CardTitle className="text-orange-400">Billing & Subscription</CardTitle>
                          <CardDescription className="text-gray-400">Manage your subscription and billing details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-200">Current Plan: Pro</h3>
                              <p className="text-sm text-gray-400">Billed monthly</p>
                            </div>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Upgrade Plan</Button>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-gray-300 mb-2">Usage This Month</h4>
                            <Progress value={75} className="w-full h-2" />
                            <p className="text-sm text-gray-400 mt-1">75% of 100 video credits used</p>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-gray-300 mb-2">Billing History</h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-gray-300">Date</TableHead>
                                  <TableHead className="text-gray-300">Amount</TableHead>
                                  <TableHead className="text-gray-300">Status</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell className="text-gray-200">2023-08-01</TableCell>
                                  <TableCell className="text-gray-200">$49.99</TableCell>
                                  <TableCell><Badge variant="secondary" className="bg-green-500/20 text-green-400">Paid</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell className="text-gray-200">2023-07-01</TableCell>
                                  <TableCell className="text-gray-200">$49.99</TableCell>
                                  <TableCell><Badge variant="secondary" className="bg-green-500/20 text-green-400">Paid</Badge></TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </CardContent>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <Tabs defaultValue="general" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-3 bg-white/10 rounded-lg p-1">
                      <TabsTrigger value="general" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">General</TabsTrigger>
                      <TabsTrigger value="performance" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Performance</TabsTrigger>
                      <TabsTrigger value="security" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Security</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general">
                      {renderGlassCard(
                        <>
                          <CardHeader>
                            <CardTitle className="text-orange-400">General Settings</CardTitle>
                            <CardDescription className="text-gray-400">Manage general system settings</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="maintenance-mode" className="text-gray-300">Maintenance Mode</Label>
                              <Switch
                                id="maintenance-mode"
                                checked={maintenanceMode}
                                onCheckedChange={setMaintenanceMode}
                                className="data-[state=checked]:bg-orange-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="system-name" className="text-gray-300">System Name</Label>
                              <Input id="system-name" placeholder="Enter system name" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="admin-email" className="text-gray-300">Admin Email</Label>
                              <Input id="admin-email" type="email" placeholder="Enter admin email" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" />
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Save Changes</Button>
                          </CardFooter>
                        </>
                      )}
                    </TabsContent>
                    <TabsContent value="performance">
                      {renderGlassCard(
                        <>
                          <CardHeader>
                            <CardTitle className="text-orange-400">Performance Settings</CardTitle>
                            <CardDescription className="text-gray-400">Optimize system performance</CardDescription>
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
                              <p className="text-sm text-gray-400">Current value: {maxConcurrentJobs}</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="video-quality" className="text-gray-300">Default Video Quality</Label>
                              <Select>
                                <SelectTrigger id="video-quality" className="bg-white/5 border-white/20 text-gray-200">
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
                              <Label htmlFor="storage-limit" className="text-gray-300">Storage Limit (GB)</Label>
                              <Input id="storage-limit" type="number" placeholder="Enter storage limit" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" />
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Apply Settings</Button>
                          </CardFooter>
                        </>
                      )}
                    </TabsContent>
                    <TabsContent value="security">
                      {renderGlassCard(
                        <>
                          <CardHeader>
                            <CardTitle className="text-orange-400">Security Settings</CardTitle>
                            <CardDescription className="text-gray-400">Manage system security settings</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="password-policy" className="text-gray-300">Password Policy</Label>
                              <Select>
                                <SelectTrigger id="password-policy" className="bg-white/5 border-white/20 text-gray-200">
                                  <SelectValue placeholder="Select policy" />
                                </SelectTrigger>
                                <SelectContent className="bg-black/90 border-white/20">
                                  <SelectItem value="strong">Strong (12+ chars, uppercase, lowercase, number, symbol)</SelectItem>
                                  <SelectItem value="medium">Medium (8+ chars, uppercase, lowercase, number)</SelectItem>
                                  <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="two-factor" className="text-gray-300">Two-Factor Authentication</Label>
                              <Switch id="two-factor" className="data-[state=checked]:bg-orange-500" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="session-timeout" className="text-gray-300">Session Timeout (minutes)</Label>
                              <Input id="session-timeout" type="number" placeholder="Enter timeout duration" className="bg-white/5 border-white/20 text-gray-200 placeholder-gray-500" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="api-key" className="text-gray-300">API Key</Label>
                              <div className="flex space-x-2">
                                <Input id="api-key" type="password" value="••••••••••••••••" readOnly className="bg-white/5 border-white/20 text-gray-200" />
                                <Button variant="outline" className="shrink-0">Regenerate</Button>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Update Security Settings</Button>
                          </CardFooter>
                        </>
                      )}
                    </TabsContent>
                  </Tabs>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}