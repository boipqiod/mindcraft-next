import { useRouter } from 'next/router';

export const usePage = () => {
    const router = useRouter();

    return {
        async toBack() { router.back(); },
        async toMain() { await router.push('/'); },
        async toDetail(id?: number) { await router.push(`/detail/${id}`); },
        async toPlaying(id?: number) { await router.push(`/detail/${id}/play`); },
        async toSignIn() { await router.push('/auth/login'); },
        async toRegister() { await router.push('/auth/register'); },
        async toUser() { await router.push('/auth/user'); },
        async toCreate() { await router.push('/create'); },
    };
};
