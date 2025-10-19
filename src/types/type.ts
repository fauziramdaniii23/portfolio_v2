import {StaticImageData} from "next/image";
import { JSX } from "react";

export type TAuthor = {
  name: string;
  email: string;
  image: string;
}

export type TUser = {
  id?: string;
  name: string;
  email: string;
  image?: string;
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

export type LogoTags = {
    name: string
    color?: string
    logo: React.ReactNode
}

export type TProject = {
    title: string
    description: string
    category: string
    role: string
    year: string
    image: string
    logoTags: LogoTags[]
    summary: string[]
    info?: string
    link: string
    status?: string
    startDate?: string
    endDate?: string
}

export type TMessage = {
  id: number;
  message: string;
  userId: number;
  replyToId?: number;
  user: TUser;
  createdAt: string;
  updatedAt?: string;
  replyTo?: TMessage;
  isMine: boolean;
  isRead: boolean;
  personalChatId: number | null;
};

export type TCurrentMessage = {
  message: string;
  userId: number;
  replyToId?: number;
  user: TUser;
  replyTo?: TMessage;
  isMine?: boolean;
  isRead?: boolean;
  personalChatId?: number | null;
};

export type TPersonalChat = {
  id: number;
  user1Id: number;
  user2Id: number;
  user1: TUser;
  user2: TUser;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string | null;
};

export type TChatList = {
  id : number;
  userId : number;
  user : TUser;
  createdAt : string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}
export type SocialMediaProps = {
  title: string;
  description?: string;
  name: string;
  href: string;
  icon: JSX.Element;
  backgroundIcon?: JSX.Element;
  isShow?: boolean;
  isExternal?: boolean;
  backgroundColor?: string;
  backgroundGradientColor?: string;
  borderColor?: string;
  textColor?: string;
  colSpan?: string;
};
