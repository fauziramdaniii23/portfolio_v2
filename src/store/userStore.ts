import { TUser } from '@/types/type';
import { create } from 'zustand'; // sesuaikan path file kamu

type UserState = {
  users: TUser[] | null;
  storeUser: (users: TUser[]) => void;
  deleteUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  users: null,

  storeUser: (users) => set({ users }),

  deleteUser: () => set({ users: null }),
}));
