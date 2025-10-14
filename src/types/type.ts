import {StaticImageData} from "next/image";

export type TAuthor = {
  name: string;
  email: string;
  image: string;
}

export type TUser = {
  id?: string;
  name: string;
  email: string;
  image?: string | null;
  emailVerified?: string | null;
  createdAt?: string;
};

export type TMenuItem = {
    label: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type TIconLogos = {
    name?: string
    color?: string
    pathLogo: string | StaticImageData
    width?: number
    height?: number
}

export type TTextServices = {
    title: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type TExperience = {
    id: string
    company: string
    role: string
    period: string
    location?: string
    summary: string
    achievements?: string[]
    logo?: string
}

export type TEducation = {
    id: string
    institution: string
    degree: string
    period: string
    location?: string
    summary?: string
    logo?: string
}

export type TProject = {
    id: string
    title: string
    description: string
    category: string
    year: string
    image: string
    tags: string[]
    summary: string[]
    link: string
    featured?: boolean
}

export type TMessage = {
  id: number;
  message: string;
  userId: number;
  replyToId?: number;
  user: TUser;
  createdAt: string;
  replyTo?: TMessage;
  isMine: boolean;
};

export type TCurrentMessage = {
  message: string;
  userId: number;
  replyToId?: number;
  user: TUser;
  replyTo?: TMessage;
  isMine?: boolean;
};

