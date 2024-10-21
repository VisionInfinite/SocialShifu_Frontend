import RenderGlassCard from "./RenderGlass";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button";
import { Edit, Trash2, UserPlus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Badge } from "../ui/badge";

export default function UserManagement() {
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
    const [isAddUserOpen, setIsAddUserOpen] = useState(false)
    const [users, setUsers] = useState(dummyBackend.users)
 
    const handleAddUser = (newUser: Omit<User, 'id' | 'status'>) => {
        const addedUser = dummyBackend.addUser(newUser)
        setUsers([...users, addedUser])
        setIsAddUserOpen(false)
      }
      const handleDeleteUser = (id: number) => {
        dummyBackend.deleteUser(id)
        setUsers(users.filter(user => user.id !== id))
      }
    return(
        <div>
            <div className="space-y-6">
                    {<RenderGlassCard>
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
                      </RenderGlassCard>}
                  </div>
        </div>
    );
}