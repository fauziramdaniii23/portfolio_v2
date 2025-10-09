import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {createEncryptedStorage} from "@/lib/encryptor";
import {TUser} from "@/types/type";

type AuthState = {
    isAuthenticated: boolean;
    user: TUser | null;
    login: (data: {
        user : TUser;
    }) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            token: null,
            user: null,
            login: ({user}) =>
                set({
                    isAuthenticated: true,
                    user : user
                }),
            logout: () =>
                set({
                    isAuthenticated: false,
                    user: null,
                }),
        }),
        {
            name: 'auth',
            storage: createEncryptedStorage(),
            partialize: (state) => ({
                isAuthenticated: state.isAuthenticated,
                user: state.user,
            }) as AuthState,
        }
    )
);

export interface SignInData {
    email: string | null;
    password: string | null;
}

interface SignInStore extends SignInData {
    save: (data: SignInData) => void;
    delete: () => void;
}

export const useRememberSignIn = create<SignInStore>()(
    persist(
        (set) => ({
            email: null,
            password: null,
            save: ({email, password}) =>
                set({
                    email,
                    password,
                }),
            delete: () =>
                set({
                    email: null,
                    password: null,
                }),
        }),
        {
            name: 'rememberSignIn',
            storage: createEncryptedStorage(),
            partialize: (state) => ({
                email: state.email,
                password: state.password,
            }) as SignInStore,
        }
    )
);
