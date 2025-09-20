'use client';

import { useRouter } from 'next/navigation';
import NProgress from '@/app/js/nprogress';

export function useNavigate() {
    const router = useRouter();

    return (path: string) => {
        NProgress.start();
        router.push(path);
    };
}
