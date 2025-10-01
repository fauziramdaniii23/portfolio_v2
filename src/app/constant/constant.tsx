import {TTextServices} from "@/app/type/type";
import {
    BookCheck, BugPlay,
    ChartSpline,
    CircleStar, Speech, StepForward, Timer
} from "lucide-react"
import { AiOutlineTeam } from "react-icons/ai";

export const Services: TTextServices[] = [
    {
        title: 'Problem Solving',
        description: 'Ability to solve technical problems logically and efficiently.',
        icon: CircleStar
    },
    {
        title: 'Time Management',
        description: 'Manage deadlines and task priorities well.',
        icon: Timer
    },
    {
        title: 'Analytical Thinking',
        description: 'Analyze system requirements and design appropriate solutions.',
        icon: ChartSpline
    },
    {
        title: 'Adaptability',
        description: 'Quickly learn new technologies or tools as project needs require.',
        icon: BookCheck
    },
    {
        title: 'Team Collaboration',
        description: 'Collaborate in cross-functional teams (dev, QA, PM, designer).',
        icon: AiOutlineTeam
    },
    {
        title: 'Attention to Detail',
        description: 'Look closely for small bugs or errors in the code.',
        icon: BugPlay
    },
    {
        title: 'Communication',
        description: 'Explaining technical ideas to both technical and non-technical teams.',
        icon: Speech
    },
    {
        title: 'Continuous Learning',
        description: 'Always keep up with the latest technological developments.',
        icon: StepForward
    },
];
