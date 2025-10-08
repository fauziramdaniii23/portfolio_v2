import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {createEncryptedStorage} from "@/lib/encryptor";
import {TProject} from "@/type/type";

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
                description: '',
                category: '',
                year: '',
                image: '',
                tags: [],
                link: '',
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
                        description: '',
                        category: '',
                        year: '',
                        image: '',
                        tags: [],
                        link: '',
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

