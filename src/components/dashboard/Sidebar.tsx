"use client"

import { useState } from "react"
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {Menus} from "@/constant/menus";
import {useNavigate} from "@/lib/navigate";
import ShinyText from "@/components/ShinyText";
import IntlToggle from "../button/IntlToggle";

export function Sidebar() {
    const pathname = usePathname();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false)

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`);
    }

    const handleNavigate = (path: string) => {
        if(pathname === path) return
        navigate(path);
    }

    return (
        <div
            className={cn(
                "relative bg-transparent m-2 transition-all duration-300 ease-in-out flex flex-col flex-shrink-0",
                isCollapsed ? "w-16" : "w-64",
            )}
        >
            <div className={cn("absolute bottom-10 bg-background rounded-2xl", isCollapsed ? "-right-3" : "right-0")}>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-sidebar-foreground hover:bg-sidebar-accent"
                >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>

            {/* Profile Section */}
            <div className="p-4 border-b border-sidebar-border">
                <div className="flex flex-col gap-2 items-center">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="/profile.png" alt="Profile" />
                        <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">FR</AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                        <div className="">
                            <ShinyText text="Fauzi Ramdani" className="text-xl font-bold"/>
                            <div className="flex items-center justify-center space-x-2">
                                <p className="text-xs text-foreground italic">Sofware Engineer</p>
                            </div>
                        </div>
                    )}
                </div>
                <IntlToggle />
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4 space-y-2">
                {Menus.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Button
                            onClick={() => handleNavigate(item.path)}
                            key={index}
                            variant="ghost"
                            className={cn(
                                "group w-full py-5 flex justify-center text-left hover:scale-110 transition-all duration-200",
                                isActive(item.path)
                                    ? "bg-gradient-to-r from-blue-600 to-transparent text-foreground "
                                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-foreground",
                                isCollapsed && "justify-center px-2",
                            )}
                        >
                            <Icon className="h-6 w-6 mr-2 py group-hover:-rotate-12 transition-all duration-200 size-0.5" />
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1">{item.label}</span>
                                </>
                            )}
                        </Button>
                    )
                })}
            </nav>

            {/* Footer */}
            {!isCollapsed && (
                <div className="p-4 border-t border-sidebar-border">
                    <div className="text-xs text-sidebar-foreground/50 text-center">© 2025 Fauzi Ramdani</div>
                </div>
            )}
        </div>
    )
}
