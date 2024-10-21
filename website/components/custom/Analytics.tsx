import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie } from 'recharts'
import RenderGlassCard from "./RenderGlass"

export default function Analytics() {
    const analyticsData = [
        { name: 'Jan', videos: 400, users: 240 },
        { name: 'Feb', videos: 300, users: 139 },
        { name: 'Mar', videos: 200, users: 980 },
        { name: 'Apr', videos: 278, users: 390 },
        { name: 'May', videos: 189, users: 480 },
        { name: 'Jun', videos: 239, users: 380 },
        { name: 'Jul', videos: 349, users: 430 },
      ]
    return(
        <div>
               <div className="space-y-6">
                    {<RenderGlassCard>
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
                      </RenderGlassCard>}

                    <div className="grid gap-6 md:grid-cols-2">
                      {<RenderGlassCard>
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
                        </RenderGlassCard>}

                      {<RenderGlassCard>
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
                        </RenderGlassCard>}
                    </div>
                  </div>
        </div>       
    );
}