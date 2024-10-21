import RenderGlassCard from "./RenderGlass";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
export default function Projects() {
    return(
        <div>
              <div className="space-y-6">
                    {<RenderGlassCard>
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
                      </RenderGlassCard>}
                  </div>
        </div>
    );
}