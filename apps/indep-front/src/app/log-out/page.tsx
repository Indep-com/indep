'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        async function logout() {
            const token = localStorage.getItem('authToken');
            if (!token) {
                router.push('/login');
                return;
            }

            try {
                await axios.post(
                    'http://localhost:3000/auth/logout',
                    {},
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (err) {
                console.error('Erreur lors de la déconnexion', err);
            } finally {
                localStorage.removeItem('authToken');
                router.push('/login');
            }
        }

        logout();
    }, [router]);

    return <p>Déconnexion en cours...</p>;
}
