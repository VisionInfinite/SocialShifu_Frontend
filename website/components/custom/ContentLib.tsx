import { Button } from "../ui/button";
import RenderGlassCard from "./RenderGlass";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
export default function ContentLibrary() {
    type ContentItem = {
        id: number;
        title: string;
        type: "template" | "assets";
        lastModified: string;
        thumbnail: string;
    }
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
  
    const [isAddContentItemOpen, setIsAddContentItemOpen] = useState(false)
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
      const [contentLibrary, setContentLibrary] = useState(dummyBackend.contentLibrary)
  const handleDeleteContentItem = (id: string) => {
    dummyBackend.deleteContentItem(Number(id))
    setContentLibrary(contentLibrary.filter(item => item.id !== Number(id)))
  }
  const handleAddContentItem = (newItem: Omit<ContentItem, "id" | "createdAt">) => {
    const addedItem = dummyBackend.addContentItem(newItem as Omit<ContentItem, "id" | "createdAt"> & { type: "template" | "assets" })
    setContentLibrary([...contentLibrary, addedItem])
    setIsAddContentItemOpen(false)
  }
    return(
        <div>     <div className="space-y-6">
        {<RenderGlassCard>
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
          </RenderGlassCard>}
      </div></div>
    );
}   