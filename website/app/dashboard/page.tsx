'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Bell, Home, Settings, Users, Video, LogOut, HelpCircle, BarChart as BarChartIcon, User, Menu, FileText, Briefcase, DollarSign } from 'lucide-react'
import VideoGeneration from '@/components/custom/VideoGen'
import HomeTab from '@/components/custom/HomeTab'
import SettingsTab from '@/components/custom/Settings'
import Billing from '@/components/custom/Billing'
import Projects from '@/components/custom/Projects'
import ContentLibrary from '@/components/custom/ContentLib'
import Analytics from '@/components/custom/Analytics'
import UserManagement from '@/components/custom/UserManagement'

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
                  <HomeTab/>
                )}

                {activeTab === 'video-generation' && (
              <VideoGeneration />
                )}

                {activeTab === 'user-management' && (
                <UserManagement />
                )}

                {activeTab === 'analytics' && (
                 <Analytics />
                )}

                {activeTab === 'content-library' && (
                  <ContentLibrary/>
                )}

                {activeTab === 'projects' && (
                  <Projects />
                )}

                {activeTab === 'billing' && (
                 <Billing />
                )}

                {activeTab === 'settings' && (
                  <SettingsTab/>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}