import {SocialMediaProps, TAuthor, TPersonalChat, TTextServices} from "@/types/type";
import {
    BookCheck, BugPlay,
    ChartSpline,
    CircleStar, Speech, StepForward, Timer
} from "lucide-react"
import { AiOutlineTeam } from "react-icons/ai";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Author: TAuthor = {
    name: 'Fauzi Ramdani',
    email: 'fauziramdani234@gmail.com',
    image: '/profile.png'
}

export const Services: TTextServices[] = [
    {
        id: "1",
        icon: CircleStar
    },
    {
        id: "2",
        icon: Timer
    },
    {
        id: "3",
        icon: ChartSpline
    },
    {
        id: "4",
        icon: BookCheck
    },
    {
        id: "5",
        icon: AiOutlineTeam
    },
    {
        id: "6",
        icon: BugPlay
    },
    {
        id: "7",
        icon: Speech
    },
    {
        id: "8",
        icon: StepForward
    },
];


const iconSize = 35;
const backgroundIconSize = 275;

export const socialMedia: SocialMediaProps[] = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    val: "fauziramdani234@gmail.com",
    href: "mailto:fauziramdani234@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    isShow: true,
  },
  {
    title : "Fast Response",
    description : "For quick responses, feel free contact me via WhatsApp.",
    name : "whatsapp",
    val : "+6285659761805",
    href : "https://wa.me/6285659761805",
    icon : <FaWhatsapp size={iconSize} />,
    backgroundIcon : <FaWhatsapp size={backgroundIconSize} />,
    textColor : "text-green-300",
    backgroundColor : "bg-green-300",
    borderColor : "border-green-300",
    backgroundGradientColor : "bg-gradient-to-b from-green-700 to-green-900",
    isShow : true,
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    val: "@fauziramdani___",
    href: "https://www.instagram.com/fauziramdani___/",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Let's Connect",
    description:
      "Connect for collaboration or explore my professional experience.",
    name: "linkedin",
    val: "in/fauzi-ramdani-873baa238",
    href: "https://www.linkedin.com/in/fauzi-ramdani-873baa238/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Join the Fun",
    description: "Follow me on TikTok for entertaining and engaging content.",
    name: "tiktok",
    val: "@jirrBangke2",
    href: "https://www.tiktok.com/@jirrBangke2/",
    icon: <TiktokIcon size={iconSize} />,
    backgroundIcon: <TiktokIcon size={backgroundIconSize} />,
    textColor: "text-neutral-400",
    backgroundColor: "bg-neutral-400",
    borderColor: "border-neutral-400",
    backgroundGradientColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
    isShow: true,
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    name: "github",
    val: "fauziramdaniii23",
    href: "https://github.com/fauziramdaniii23",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];
