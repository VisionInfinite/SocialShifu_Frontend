import { TrendingUp, Users, Video, Zap } from "lucide-react";
import { CardContent, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import RenderGlassCard from "./RenderGlass";
import { useState } from "react";


export default function Home() {
    type User = {
        id: number;
        name: string;
        email: string;
        role: "Admin" | "User";
        status: "active" | "inactive";
    }
    const [systemLoad, setSystemLoad] = useState(67)
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
    const [videos, setVideos] = useState(dummyBackend.videos)
    const [users, setUsers] = useState(dummyBackend.users)
    type Video = {
        id: number;
        title: string;
        style: string;
        description: string;
        status: 'completed' | 'processing' | 'queued';
        createdAt: string;
        duration: number;
      }
    return(<div>
         <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        { title: 'Total Videos', icon: <Video className="h-4 w-4" />, value: videos.length, subtext: `${videos.filter(v => v.status === 'completed').length} completed` },
                        { title: 'Active Users', icon: <Users className="h-4 w-4" />, value: users.filter(u => u.status === 'active').length, subtext: `${users.length} total users` },
                        { title: 'Avg. Processing Time', icon: <Zap className="h-4 w-4" />, value: '1.2 min', subtext: 'Per video' },
                        { title: 'System Load', icon: <TrendingUp className="h-4 w-4" />, value: `${Math.round(systemLoad)}%`, subtext: 'GPU utilization' },
                      ].map((item, index) => (<RenderGlassCard>
                        <CardContent key={index} className="p-6">
                          <div className="flex items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-300">{item.title}</CardTitle>
                            <div className="text-orange-400">{item.icon}</div>
                          </div>
                          <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                          <p className="text-xs text-gray-400">{item.subtext}</p>
                        </CardContent>
                      </RenderGlassCard>))}
                    </div>

                    <RenderGlassCard>
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
                    </RenderGlassCard>
                  </div>
    </div>);
}