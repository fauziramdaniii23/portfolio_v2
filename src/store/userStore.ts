import { TUser } from '@/types/type';
import { create } from 'zustand'; // sesuaikan path file kamu

type UserListState = {
  users: TUser[] | null;
  storeUserList: (users: TUser[]) => void;
  deleteUserList: () => void;
};

export const useUserListStore = create<UserListState>((set) => ({
  users: null,

  storeUserList: (users) => set({ users }),

  deleteUserList: () => set({ users: null }),
}));
