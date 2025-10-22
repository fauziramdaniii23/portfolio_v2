import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {createEncryptedStorage} from "@/lib/encryptor";
import {TProject} from "@/types/type";

type ProjectState = {
    data: TProject;
    setDetailProject: (data: TProject) => void;
    clearDetailProject: () => void;
};

export const useDetailProjectStore= create<ProjectState>()(
    persist(
        (set) => ({
            data:{
                id: '',
                title: '',
                category: '',
                year: '',
                image: '',
                logoTags: [],
                link: '',
                role: '',
            },
            setDetailProject: (data : TProject ) =>
                set({
                    data: data,
                }),
            clearDetailProject: () =>
                set({
                    data: {
                        id: '',
                        title: '',
                        category: '',
                        year: '',
                        image: '',
                        logoTags: [],
                        link: '',
                        role: '',
                    },
                })
        }),
        {
            name: 'detail-project',
            storage: createEncryptedStorage(),
            partialize: (state) => ({
                data: state.data,
            }) as ProjectState,
        }
    )
);

