'use client';

import { useRouter } from 'next/navigation';
import NProgress from '@/lib/js/nprogress';

export function useNavigate() {
    const router = useRouter();

    return (path: string) => {
        NProgress.start();
        router.push(path);
    };
}
