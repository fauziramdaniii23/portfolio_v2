import { prisma } from "@/lib/prisma";
import { pusher } from "@/lib/pusher/pusherServer";

export const userService = {
  async getAllUsers() {
    return prisma.user.findMany();
  },
};