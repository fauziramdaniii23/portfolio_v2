import {TMenuItem} from "@/types/type";
import {
    Home,
    User,
    FolderOpenDot, MessageCircleMore, Contact
} from "lucide-react"
import { MdGroups3 } from "react-icons/md";

export const Menus : TMenuItem[] = [
    {
        id : '1',
        label : 'Home',
        path : '/dashboard',
        icon : Home,
    },
    {
        id : '2',
        label : 'About Me',
        path : '/about',
        icon : User,
    },
    {
        id : '3',
        label : 'Projects',
        path : '/projects',
        icon : FolderOpenDot,
    },
    {
        id : '4',
        label : 'Chat Room',
        path : '/chat-room',
        icon : MdGroups3,
    },
    {
        id : '5',
        label : 'Personal Chat',
        path : '/personal-chat',
        icon : MessageCircleMore,
    },
    {
        id : '6',
        label : 'Contact Me',
        path : '/contact',
        icon : Contact,
    }
]