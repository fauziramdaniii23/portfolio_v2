import {TMenuItem} from "@/app/type/type";
import {
    Home,
    User,
    FolderOpenDot, MessageCircleMore, Contact
} from "lucide-react"

export const Menus : TMenuItem[] = [
    {
        label : 'Home',
        path : '/dashboard',
        icon : Home,
    },
    {
        label : 'About Me',
        path : '/about',
        icon : User,
    },
    {
        label : 'Projects',
        path : '/projects',
        icon : FolderOpenDot,
    },
    {
        label : 'Chat Room',
        path : '/chat-room',
        icon : MessageCircleMore,
    },
    {
        label : 'Discuss with me',
        path : '/discuss',
        icon : MessageCircleMore,
    },
    {
        label : 'Contact Me',
        path : '/contact',
        icon : Contact,
    }
]