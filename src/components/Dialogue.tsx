"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // path dari shadcn/ui
import { Bell } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

interface NotificationBellProps {
  notifications: Notification[];
}

export default function NotificationBell({ notifications }: NotificationBellProps) {
  return (
    <DropdownMenu>
      {/* Trigger icon lonceng */}
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Bell className="w-6 h-6" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
              {notifications.length}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      {/* Menu content */}
      <DropdownMenuContent className="w-80 max-h-64 overflow-y-auto">
        {notifications.length === 0 ? (
          <DropdownMenuItem disabled className="cursor-default text-gray-500">
            No notifications
          </DropdownMenuItem>
        ) : (
          notifications.map((notif) => (
            <DropdownMenuItem
              key={notif.id}
              className="flex flex-col p-2 gap-1 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <p className="font-medium">{notif.title}</p>
              <p className="text-xs text-gray-500">{notif.description}</p>
              <p className="text-[10px] text-gray-400">
                {new Date(notif.createdAt).toLocaleTimeString()}
              </p>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
