import { userService } from "@/services/userService";

export const userController = {
  async getAllUsers() {
    const users = await userService.getAllUsers();
    return users;
  },
};