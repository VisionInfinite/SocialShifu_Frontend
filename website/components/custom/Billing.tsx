import RenderGlassCard from "./RenderGlass";
import {  CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress"
export default function Billing() {
    return(
        <div>
              <div className="space-y-6">
                    {<RenderGlassCard>
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
                      </RenderGlassCard>}
                  </div>
        </div>
    );
}