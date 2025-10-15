import {TAuthor, TPersonalChat, TTextServices} from "@/types/type";
import {
    BookCheck, BugPlay,
    ChartSpline,
    CircleStar, Speech, StepForward, Timer
} from "lucide-react"
import { AiOutlineTeam } from "react-icons/ai";

export const Author: TAuthor = {
    name: 'Fauzi Ramdani',
    email: 'fauziramdani234@gmail.com',
    image: '/profile.png'
}

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
export const PersonalChat: TPersonalChat[] = [
  {
    id: 1,
    user1Id: 1,
    user2Id: 2,
    user1: {
      id: "1",
      name: "Fauzi Ramdani",
      email: "fauzi@example.com",
      image: null,
      createdAt: "2025-10-14T12:00:00Z",
    },
    user2: {
      id: "2",
      name: "Dinda Sari",
      email: "dinda@example.com",
      image: null,
      createdAt: "2025-10-14T12:05:00Z",
    },
    content: "Percakapan pribadi antara Fauzi dan Dinda",
    createdAt: "2025-10-14T12:10:00Z",
    updatedAt: "2025-10-14T12:10:00Z",
    deletedAt: undefined,
  },
  {
    id: 2,
    user1Id: 1,
    user2Id: 3,
    user1: {
      id: "1",
      name: "Fauzi Ramdani",
      email: "fauzi@example.com",
      image: null,
      createdAt: "2025-10-14T12:00:00Z",
    },
    user2: {
      id: "3",
      name: "Andi Saputra",
      email: "andi@example.com",
      image: null,
      createdAt: "2025-10-14T12:06:00Z",
    },
    content: "Percakapan pribadi antara Fauzi dan Andi",
    createdAt: "2025-10-14T12:15:00Z",
    updatedAt: "2025-10-14T12:15:00Z",
    deletedAt: undefined,
  },
  {
    id: 3,
    user1Id: 1,
    user2Id: 4,
    user1: {
      id: "1",
      name: "Dinda Sari",
      email: "dinda@example.com",
      image: null,
      createdAt: "2025-10-14T12:05:00Z",
    },
    user2: {
      id: "4",
      name: "Rudi Hartono",
      email: "rudi@example.com",
      image: null,
      createdAt: "2025-10-14T12:07:00Z",
    },
    content: "Percakapan pribadi antara Dinda dan Rudi",
    createdAt: "2025-10-14T12:20:00Z",
    updatedAt: "2025-10-14T12:20:00Z",
    deletedAt: undefined,
  },
  {
    id: 4,
    user1Id: 5,
    user2Id: 1,
    user1: {
      id: "5",
      name: "Andi Saputra",
      email: "andi@example.com",
      image: null,
      createdAt: "2025-10-14T12:06:00Z",
    },
    user2: {
      id: "1",
      name: "Lina Marlina",
      email: "lina@example.com",
      image: null,
      createdAt: "2025-10-14T12:08:00Z",
    },
    content: "Percakapan pribadi antara Andi dan Lina",
    createdAt: "2025-10-14T12:25:00Z",
    updatedAt: "2025-10-14T12:25:00Z",
    deletedAt: undefined,
  },
  {
    id: 5,
    user1Id: 6,
    user2Id: 1,
    user1: {
      id: "6",
      name: "Rudi Hartono",
      email: "rudi@example.com",
      image: null,
      createdAt: "2025-10-14T12:07:00Z",
    },
    user2: {
      id: "1",
      name: "Lina Marlina",
      email: "lina@example.com",
      image: null,
      createdAt: "2025-10-14T12:08:00Z",
    },
    content: "Percakapan pribadi antara Rudi dan Lina",
    createdAt: "2025-10-14T12:30:00Z",
    updatedAt: "2025-10-14T12:30:00Z",
    deletedAt: undefined,
  }
];
