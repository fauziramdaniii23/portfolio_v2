import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Search, Plus, Users, Settings } from "lucide-react"
import {ModeToggle} from "@/components/ModeToggle";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Logo from "@/components/common/Logo";
import Lanyard from "@/components/Lanyard";

export function MainContent() {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];
    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-card border-b border-border p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground text-balance">Welcome back, John!</h1>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">
                            <Search className="h-4 w-4 mr-2" />
                            Search
                        </Button>
                        <Button variant="outline" size="sm">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            New Item
                        </Button>
                        <ModeToggle/>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto p-6 bg-background">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2,847</div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        +12%
                                    </Badge>
                                    <span className="text-muted-foreground">from last month</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$45,231</div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        +8%
                                    </Badge>
                                    <span className="text-muted-foreground">from last month</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                        +5%
                                    </Badge>
                                    <span className="text-muted-foreground">from last hour</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Lanyard />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest updates from your dashboard</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">New user registered</p>
                                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Payment received</p>
                                        <p className="text-xs text-muted-foreground">5 minutes ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">System update completed</p>
                                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                                <CardDescription>Common tasks and shortcuts</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create New Project
                                </Button>
                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                    <Users className="h-4 w-4 mr-2" />
                                    Invite Team Members
                                </Button>
                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Configure Settings
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
