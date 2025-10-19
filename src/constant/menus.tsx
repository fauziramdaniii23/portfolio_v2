import {TMenuItem} from "@/types/type";
import {
    Home,
    User,
    FolderOpenDot, MessageCircleMore, Contact
} from "lucide-react"
import { MdGroups3 } from "react-icons/md";

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
        icon : MdGroups3,
    },
    {
        label : 'Personal Chat',
        path : '/personal-chat',
        icon : MessageCircleMore,
    },
    {
        label : 'Contact Me',
        path : '/contact',
        icon : Contact,
    }
]